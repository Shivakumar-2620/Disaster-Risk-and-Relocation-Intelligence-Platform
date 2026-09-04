"""
Live / near-real-time data service.

Aggregates the current weather observation from the configured provider, derives
active alerts, recomputes settlement risk using live rainfall as an input to the
existing risk engine, and exposes GeoJSON for the live risk map.

Every payload carries source / timestamp / status / data_age_minutes so the UI can
truthfully label LIVE vs DEMO data and never overclaim.
"""
from __future__ import annotations

import time
from collections import deque
from datetime import datetime, timezone, timedelta
from typing import Dict, Any, Optional

from fastapi import Depends
from sqlalchemy.orm import Session

from app.config import settings
from app.database import get_db
from app.models.settlement import Settlement
from app.services.weather_providers import DemoProvider, get_weather_provider
from app.services.risk_engine import evaluate_settlement_risk

IST = timezone(timedelta(hours=5, minutes=30))

# In-memory cache of the last successful observation (failure handling).
_last_good: Dict[str, Any] = {}

# Bounded per-settlement history of platform risk recalculation. The trend arrow is
# derived from ACTUAL successive polls (observation -> risk recalculation), never
# fabricated as a prediction.
_RISK_HISTORY: Dict[str, deque] = {}


def _record_risk(settlement_id: Any, ts: str, rainfall: Optional[float], score: float) -> str:
    """Append this recalculation; return the trend vs the previous actual poll."""
    hist = _RISK_HISTORY.setdefault(str(settlement_id), deque(maxlen=8))
    hist.append({"ts": ts, "rainfall_24h_mm": rainfall, "risk_score": score})
    if len(hist) < 2:
        return "stable"
    prev = hist[-2]["risk_score"]
    if score - prev > 0.5:
        return "increasing"
    if score - prev < -0.5:
        return "decreasing"
    return "stable"


def _now_ist() -> datetime:
    return datetime.now(IST)


def _iso_ist(dt: Optional[datetime] = None) -> str:
    dt = dt or _now_ist()
    return dt.isoformat(timespec="seconds")


def get_live_weather() -> Dict[str, Any]:
    """Current weather observation with TTL caching + last-good failure fallback.

    Within LIVE_REFRESH_INTERVAL_SECONDS the last successful observation is reused
    (coalescing the parallel /api/live/* fetches into one external call per window).
    On provider failure the last good observation is returned as STALE; without any
    cache a clearly-labelled simulated fallback keeps the map alive.
    """
    now = time.time()
    cached = _last_good.get("weather")

    ttl = settings.LIVE_REFRESH_INTERVAL_SECONDS
    if cached and (now - cached["at"]) < ttl:
        payload = dict(cached["payload"])
        payload["data_age_minutes"] = round((now - cached["at"]) / 60.0, 1)
        return payload

    provider = get_weather_provider()
    try:
        obs = provider.get_weather()
    except Exception:
        obs = None

    if obs and obs.get("status") in ("LIVE", "DEMO"):
        _last_good["weather"] = {"payload": obs, "at": time.time()}
        obs["timestamp"] = _iso_ist()
        obs["data_age_minutes"] = 0
        return obs

    # Feed unavailable: fall back to last successful observation (or demo).
    if settings.LIVE_FALLBACK_TO_DEMO and _last_good.get("weather"):
        cached = _last_good["weather"]
        payload = dict(cached["payload"])
        payload["status"] = "STALE"
        payload["data_age_minutes"] = round((time.time() - cached["at"]) / 60.0, 1)
        payload["note"] = "Using last successful observation because the feed is unavailable."
        return payload

    if settings.LIVE_FALLBACK_TO_DEMO:
        # No last-good cached: fall back to clearly-labelled simulated values so the
        # rainfall layer keeps rendering numbers while the feed is down.
        obs = DemoProvider().get_weather()
        obs["status"] = "STALE"
        obs["note"] = "Feed unavailable — showing simulated fallback data."
        return obs

    return {
        "source": "unknown",
        "status": "UNAVAILABLE",
        "timestamp": _iso_ist(),
        "data_age_minutes": 0,
        "note": "Weather feed unavailable. Risk based on latest available data.",
    }


def get_live_alerts(weather: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """Derives active alerts from the current weather observation.

    No government warning is invented: an alert is only raised from threshold logic
    applied to the current (live or demo) observation, and is clearly labelled with
    its source and severity.
    """
    weather = weather or get_live_weather()
    rain = weather.get("rainfall_24h_mm")

    alerts = []
    severity = "LOW"
    if rain is not None and rain >= 140:
        severity = "HIGH"
        alerts.append(
            {
                "id": "imd-heavy-rain",
                "type": "HEAVY RAIN WARNING",
                "severity": "HIGH",
                "area": "Wayanad",
                "issued": weather.get("timestamp"),
                "message": "24h rainfall crossing 140mm threshold — high-risk slope zones.",
                "source": weather.get("source"),
            }
        )
    elif rain is not None and rain >= 90:
        severity = "MODERATE"
        alerts.append(
            {
                "id": "imd-rain-advisory",
                "type": "RAIN ADVISORY",
                "severity": "MODERATE",
                "area": "Wayanad",
                "issued": weather.get("timestamp"),
                "message": "Elevated rainfall observed — monitor landslide-prone settlements.",
                "source": weather.get("source"),
            }
        )

    status = "LIVE" if weather.get("status") in ("LIVE", "DEMO") else "STALE"
    return {
        "alerts": alerts,
        "count": len(alerts),
        "severity": severity,
        "status": status,
        "source": weather.get("source"),
        "timestamp": _iso_ist(),
        "data_age_minutes": weather.get("data_age_minutes", 0),
    }


def _rain_delta_impact(rainfall_24h_mm: float) -> float:
    """Returns a 0..1 factor reflecting current rainfall pressure on hazard."""
    if rainfall_24h_mm is None:
        return 0.0
    if rainfall_24h_mm >= 140:
        return 0.35
    if rainfall_24h_mm >= 90:
        return 0.2
    if rainfall_24h_mm >= 50:
        return 0.1
    return 0.0


def get_live_risk_map(db: Session = Depends(get_db)) -> Dict[str, Any]:
    """Recomputes settlement risk using live rainfall, returns GeoJSON FeatureCollection."""
    weather = get_live_weather()
    rain = weather.get("rainfall_24h_mm")
    rain_factor = _rain_delta_impact(rain) if rain is not None else 0.0

    settlements = db.query(Settlement).all()
    features = []
    now_ts = _iso_ist()
    for s in settlements:
        st_dict = {
            "landslide_risk": s.landslide_risk,
            "rainfall_risk": min(100.0, s.rainfall_risk + rain_factor * 100.0),
            "slope_risk": s.slope_risk,
            "historical_risk": s.historical_risk,
            "housing_vulnerability": s.housing_vulnerability,
            "households": s.households,
            "priority_households": s.priority_households,
        }
        score, level, components, factors, summary = evaluate_settlement_risk(st_dict)
        hist = _RISK_HISTORY.get(str(s.id))
        prev_poll = hist[-1]["risk_score"] if hist else None
        trend = _record_risk(s.id, now_ts, rain, score)
        features.append(
            {
                "type": "Feature",
                "properties": {
                    "id": s.id,
                    "name": s.name,
                    "risk_score": round(score, 1),
                    "risk_level": level,
                    "households": s.households,
                    "priority_households": s.priority_households,
                    "previous_risk_score": round(prev_poll, 1) if prev_poll is not None else round(s.risk_score, 1),
                    "previous_risk_level": s.risk_level,
                    "rainfall_24h_mm": rain,
                    "observed_at": weather.get("timestamp"),
                    "trend": trend,
                },
                "geometry": {"type": "Point", "coordinates": [s.longitude, s.latitude]},
            }
        )

    return {
        "updated_at": _iso_ist(),
        "risk_calculated_at": _iso_ist(),
        "source": weather.get("source"),
        "status": weather.get("status"),
        "data_age_minutes": weather.get("data_age_minutes", 0),
        "rainfall_24h_mm": rain,
        "rain_impact_factor": round(rain_factor, 2),
        "type": "FeatureCollection",
        "features": features,
    }


def get_live_status() -> Dict[str, Any]:
    """Aggregated health snapshot of all live feeds."""
    weather = get_live_weather()
    last_at = _last_good.get("weather", {}).get("at")
    age = 0
    if last_at:
        age = round((time.time() - last_at) / 60.0, 1)

    stale = age > settings.LIVE_STALE_AFTER_MINUTES
    weather_status = weather.get("status")  # LIVE | DEMO | STALE | UNAVAILABLE
    root_status = "STALE" if stale or weather_status == "STALE" else weather_status
    return {
        "status": root_status,
        "sources": {
            "weather": {
                "provider": weather.get("source"),
                "status": weather.get("status"),
                "last_update": weather.get("timestamp"),
                "data_age_minutes": weather.get("data_age_minutes", age),
            },
            "base_map": {"provider": "OpenStreetMap", "status": "LIVE"},
            "risk": {"provider": "Platform Risk Engine", "status": "CALCULATED", "last_update": weather.get("timestamp")},
        },
        "refresh_interval_seconds": settings.LIVE_REFRESH_INTERVAL_SECONDS,
        "stale_after_minutes": settings.LIVE_STALE_AFTER_MINUTES,
        "server_time": _iso_ist(),
    }