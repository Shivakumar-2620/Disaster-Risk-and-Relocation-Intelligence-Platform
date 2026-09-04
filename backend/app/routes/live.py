"""
Live / near-real-time situational map API routes.

Exposes weather, alerts, dynamic risk GeoJSON, and a health status snapshot for the
live disaster situational map. These complement (not duplicate) the existing static
endpoints in reports.py / settlements.py.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.services import live_service

router = APIRouter(prefix="/api/live", tags=["Live Situational Map"])


@router.get("/weather")
def get_live_weather():
    """Current weather / rainfall observation for Wayanad (LIVE or clearly-labelled DEMO/STALE)."""
    return live_service.get_live_weather()


@router.get("/alerts")
def get_live_alerts():
    """Active alerts derived from threshold logic on the current observation."""
    return live_service.get_live_alerts()


@router.get("/risk-map")
def get_live_risk_map(db: Session = Depends(get_db)):
    """Dynamically recomputed settlement risk GeoJSON fed by live rainfall."""
    return live_service.get_live_risk_map(db)


@router.get("/status")
def get_live_status():
    """Health snapshot of every live feed with source / timestamp / staleness."""
    return live_service.get_live_status()