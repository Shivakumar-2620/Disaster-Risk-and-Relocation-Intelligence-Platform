"""
Scenario Simulation API routes.
"""
from typing import List, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.settlement import Settlement
from app.models.site import CandidateRelocationSite
from app.models.scenario import Scenario
from app.schemas.scenario import (
    ScenarioSimulationRequest,
    ScenarioSimulationResponse,
)
from app.services.scenario_engine import simulate_climate_scenario
from app.config import settings

router = APIRouter(prefix="/api", tags=["Scenario Simulation"])


@router.post("/scenario", response_model=ScenarioSimulationResponse)
def run_scenario_simulation(
    payload: Dict[str, Any] = Body(...),
    db: Session = Depends(get_db)
):
    """
    Executes controlled prototype climate stress simulation (-10% to +30% rainfall perturbation).
    Returns updated settlement hazard and candidate site suitability scores.
    """
    if "rainfall_change" not in payload:
        raise HTTPException(status_code=400, detail="Missing required field 'rainfall_change'")

    try:
        rf = float(payload["rainfall_change"])
    except (ValueError, TypeError):
        raise HTTPException(status_code=400, detail="Invalid rainfall change value")

    if rf < settings.SCENARIO_MIN_RAINFALL or rf > settings.SCENARIO_MAX_RAINFALL:
        raise HTTPException(
            status_code=400,
            detail=f"Rainfall change must be between {settings.SCENARIO_MIN_RAINFALL} and {settings.SCENARIO_MAX_RAINFALL}"
        )

    road_disruption = bool(payload.get("road_access_disruption", False))
    try:
        cap_reduction = float(payload.get("capacity_reduction", 0.0))
    except (ValueError, TypeError):
        raise HTTPException(status_code=400, detail="Invalid capacity reduction value")

    if cap_reduction < 0.0 or cap_reduction > 60.0:
        raise HTTPException(status_code=400, detail="Capacity reduction must be between 0% and 60%")

    sites = db.query(CandidateRelocationSite).all()
    settlements = db.query(Settlement).all()

    return simulate_climate_scenario(
        rainfall_change=rf,
        sites=sites,
        settlements=settlements,
        road_access_disruption=road_disruption,
        capacity_reduction=cap_reduction,
    )


@router.get("/scenarios")
def list_preset_scenarios(db: Session = Depends(get_db)):
    """
    Returns pre-configured climate stress scenario presets.
    """
    scenarios = db.query(Scenario).all()
    return [
        {
            "id": s.id,
            "name": s.name,
            "description": s.description,
            "rainfall_change": s.rainfall_change,
            "site_scores": s.site_scores,
            "recommendation": s.recommendation
        }
        for s in scenarios
    ]
