"""
Live weather data provider abstraction for the Wayanad real-time risk map.

WeatherProvider is the interface every provider implements. A provider returns a
normalized payload containing source, timestamp, status, and data_age_minutes so the
UI can truthfully show whether the data is LIVE or simulated/demo.

Providers:
  - IMDProvider       : calls the official IMD API (credentials via env, no hard-coding).
  - WeatherAPIProvider: calls WeatherAPI.com (key via env) — same live key used by the frontend demo.
  - DemoProvider      : produces clearly-labelled simulated observations for development/demo.

Selection is done by `get_weather_provider()` based on settings.WEATHER_PROVIDER.
"""
from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request
from abc import ABC, abstractmethod
from datetime import datetime, timezone, timedelta
from typing import Dict, Any, Optional

from app.config import settings

IST = timezone(timedelta(hours=5, minutes=30))


def _now_ist() -> datetime:
    return datetime.now(IST)


def _iso_ist(dt: Optional[datetime] = None) -> str:
    dt = dt or _now_ist()
    return dt.isoformat(timespec="seconds")


class WeatherProvider(ABC):
    """Base interface every weather provider implements."""

    source: str = "unknown"

    @abstractmethod
    def get_weather(self) -> Dict[str, Any]:
        """Return normalized current weather observations for the Wayanad district."""

    def _base_payload(self, station_id: str) -> Dict[str, Any]:
        return {
            "source": self.source,
            "timestamp": _iso_ist(),
            "status": "LIVE" if self.source != "DEMO" else "DEMO",
            "data_age_minutes": 0,
            "region": "Wayanad, Kerala",
            "station_id": station_id,
        }


class IMDProvider(WeatherProvider):
    """Official IMD data source.

    Uses IMD_API_BASE_URL + IMD_API_KEY from configuration. If no credentials are
    configured, the provider reports UNAVAILABLE so the caller can fall back to demo.
    The exact IMD response shape differs by endpoint; we map the common observation
    fields (rainfall, temperature, wind, humidity, warnings) into our normalized shape.
    """

    source = "IMD"

    def _headers(self) -> Dict[str, str]:
        headers = {"Accept": "application/json"}
        if settings.IMD_API_KEY:
            headers["Authorization"] = f"Bearer {settings.IMD_API_KEY}"
        return headers

    def get_weather(self) -> Dict[str, Any]:
        base_url = (settings.IMD_API_BASE_URL or "").rstrip("/")
        if not base_url or not settings.IMD_API_KEY:
            return self._unavailable()

        # Try the district observation endpoint (Wayanad = district code 126).
        url = f"{base_url}/district/126/now"
        try:
            req = urllib.request.Request(url, headers=self._headers())
            with urllib.request.urlopen(req, timeout=10) as resp:
                raw = json.loads(resp.read().decode("utf-8"))
            payload = self._base_payload(raw.get("stationId", "IMD-MEPPADI-AWS"))
            payload.update(
                {
                    "rainfall_24h_mm": float(raw.get("rainfall24h", raw.get("rainfall_24h", 0))),
                    "rainfall_now_mm": float(raw.get("rainfallNow", raw.get("rainfall_now", 0))),
                    "temperature_c": float(raw.get("temperature", raw.get("temp_c", 0))),
                    "humidity_pct": float(raw.get("humidity", 0)),
                    "wind_kph": float(raw.get("windSpeed", raw.get("wind_speed", 0))),
                    "forecast": raw.get("forecast", ""),
                }
            )
            return payload
        except Exception:
            return self._unavailable()

    def _unavailable(self) -> Dict[str, Any]:
        return {
            **self._base_payload("IMD-MEPPADI-AWS"),
            "status": "UNAVAILABLE",
            "rainfall_24h_mm": None,
            "rainfall_now_mm": None,
            "temperature_c": None,
            "humidity_pct": None,
            "wind_kph": None,
            "forecast": "",
            "error": "IMD credentials unavailable or request failed",
        }


class WeatherAPIProvider(WeatherProvider):
    """Live observations from WeatherAPI.com (https://www.weatherapi.com).

    The frontend demo used the same provider directly; wiring it here lets the
    observation enter through the FastAPI gateway -> validation -> risk engine
    -> GeoJSON instead of being fetched from the browser. Credentials come from
    settings (WEATHER_API_KEY) — never hard-coded.
    """

    source = "WEATHERAPI"
    _BASE = "https://api.weatherapi.com/v1/forecast.json"

    def _unavailable(self, error: str) -> Dict[str, Any]:
        return {
            **self._base_payload("KALPETTA-AWS"),
            "status": "UNAVAILABLE",
            "rainfall_24h_mm": None,
            "rainfall_now_mm": None,
            "temperature_c": None,
            "humidity_pct": None,
            "wind_kph": None,
            "forecast": "",
            "error": error,
        }

    def get_weather(self) -> Dict[str, Any]:
        if not settings.WEATHER_API_KEY:
            return self._unavailable("WEATHER_API_KEY not configured")
        url = (
            f"{self._BASE}?q={urllib.parse.quote(settings.WEATHER_API_QUERY)}"
            f"&days=1&aqi=no&alerts=yes&key={urllib.parse.quote(settings.WEATHER_API_KEY)}"
        )
        try:
            req = urllib.request.Request(url, headers={"Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                j = json.loads(resp.read().decode("utf-8"))
        except Exception:
            return self._unavailable("WeatherAPI request failed")
        cur = j.get("current") or {}
        fday = ((j.get("forecast") or {}).get("forecastday") or [{}])[0]
        day = fday.get("day") or {}
        loc = j.get("location") or {}
        payload = self._base_payload(loc.get("name") or "Kalpetta")
        payload.update(
            {
                "rainfall_24h_mm": float(day.get("totalprecip_mm") or 0.0),
                "rainfall_now_mm": float(cur.get("precip_mm") or 0.0),
                "temperature_c": float(cur.get("temp_c") or 0.0),
                "humidity_pct": float(cur.get("humidity") or 0.0),
                "wind_kph": float(cur.get("wind_kph") or 0.0),
                "forecast": (cur.get("condition") or {}).get("text") or "",
                "observed_local": loc.get("localtime") or "",
            }
        )
        return payload


class DemoProvider(WeatherProvider):
    """Clearly-labelled simulated observations for development / demo mode."""

    source = "DEMO"

    def get_weather(self) -> Dict[str, Any]:
        # Deterministic-ish drift so the refresh loop visibly changes values.
        minute = _now_ist().minute
        base_rain = 84.0 + (minute % 7) * 1.5  # around 84-93 mm / 24h
        payload = self._base_payload("DEMO-MEPPADI-AWS")
        payload.update(
            {
                "rainfall_24h_mm": round(base_rain, 1),
                "rainfall_now_mm": round(6.0 + (minute % 5) * 1.2, 1),
                "temperature_c": round(23.5 + (minute % 4) * 0.3, 1),
                "humidity_pct": round(88 + (minute % 6), 0),
                "wind_kph": round(9.0 + (minute % 5), 1),
                "forecast": "Moderate to heavy rainfall likely over next 24 hours.",
            }
        )
        return payload


def get_weather_provider() -> WeatherProvider:
    """Factory — returns the configured weather provider."""
    provider = settings.WEATHER_PROVIDER.lower()
    if provider == "imd":
        return IMDProvider()
    if provider == "weatherapi":
        return WeatherAPIProvider()
    return DemoProvider()