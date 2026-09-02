"""
Settlement API routes.
"""
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.settlement import Settlement
from app.models.site import CandidateRelocationSite
from app.schemas.settlement import (
    SettlementResponse,
    SettlementDetailResponse,
    SettlementWhyResponse,
)
from app.schemas.site import SiteResponse
from app.services.risk_engine import evaluate_settlement_risk
from app.services.relocation_engine import evaluate_site_revalidation

router = APIRouter(prefix="/api", tags=["Settlements"])


@router.get("/settlements", response_model=List[SettlementResponse])
def get_all_settlements(db: Session = Depends(get_db)):
    """
    Returns list of all surveyed settlements with risk scores and levels.
    """
    settlements = db.query(Settlement).order_by(Settlement.risk_score.desc()).all()
    return settlements


@router.get("/settlements/{settlement_id}", response_model=SettlementDetailResponse)
def get_settlement_details(settlement_id: int, db: Session = Depends(get_db)):
    """
    Returns granular forensic risk breakdown, hazard components, and explanation for a settlement.
    """
    settlement = db.query(Settlement).filter(Settlement.id == settlement_id).first()
    if not settlement:
        raise HTTPException(status_code=404, detail="Settlement not found")

    st_dict = {
        "landslide_risk": settlement.landslide_risk,
        "rainfall_risk": settlement.rainfall_risk,
        "slope_risk": settlement.slope_risk,
        "historical_risk": settlement.historical_risk,
        "housing_vulnerability": settlement.housing_vulnerability,
        "households": settlement.households,
        "priority_households": settlement.priority_households,
    }

    score, level, components, factors, explanation = evaluate_settlement_risk(st_dict)

    return SettlementDetailResponse(
        id=settlement.id,
        name=settlement.name,
        latitude=settlement.latitude,
        longitude=settlement.longitude,
        population=settlement.population,
        households=settlement.households,
        priority_households=settlement.priority_households,
        landslide_risk=settlement.landslide_risk,
        rainfall_risk=settlement.rainfall_risk,
        slope_risk=settlement.slope_risk,
        historical_risk=settlement.historical_risk,
        housing_vulnerability=settlement.housing_vulnerability,
        description=settlement.description,
        risk_score=score,
        risk_level=level,
        hazard_score=components["hazard_score"],
        exposure_score=components["exposure_score"],
        vulnerability_score=components["vulnerability_score"],
        trend_score=components["trend_score"],
        factors=factors,
        explanation=explanation,
    )


@router.get("/settlements/{settlement_id}/why", response_model=SettlementWhyResponse)
def get_settlement_why_explanation(settlement_id: int, db: Session = Depends(get_db)):
    """
    Returns transparent rule-based factor contributions and human-readable explanation.
    """
    settlement = db.query(Settlement).filter(Settlement.id == settlement_id).first()
    if not settlement:
        raise HTTPException(status_code=404, detail="Settlement not found")

    st_dict = {
        "landslide_risk": settlement.landslide_risk,
        "rainfall_risk": settlement.rainfall_risk,
        "slope_risk": settlement.slope_risk,
        "historical_risk": settlement.historical_risk,
        "housing_vulnerability": settlement.housing_vulnerability,
        "households": settlement.households,
        "priority_households": settlement.priority_households,
    }

    score, level, _, factors, explanation = evaluate_settlement_risk(st_dict)

    return SettlementWhyResponse(
        settlement_id=settlement.id,
        settlement_name=settlement.name,
        risk_score=score,
        risk_level=level,
        factors=factors,
        summary_explanation=explanation,
    )


@router.get("/settlements/{settlement_id}/sites", response_model=List[SiteResponse])
def get_candidate_sites_for_settlement(settlement_id: int, db: Session = Depends(get_db)):
    """
    Returns candidate relocation sites evaluated for this specific settlement's resettlement scale.
    """
    settlement = db.query(Settlement).filter(Settlement.id == settlement_id).first()
    if not settlement:
        raise HTTPException(status_code=404, detail="Settlement not found")

    sites = db.query(CandidateRelocationSite).all()
    results = []
    for s in sites:
        site_dict = {
            "safety_score": s.safety_score,
            "future_risk": s.future_risk,
            "accessibility_score": s.accessibility_score,
            "capacity": s.capacity,
            "infrastructure_score": s.infrastructure_score,
            "cost_score": s.cost_score,
            "landslide_risk": s.landslide_risk,
            "flood_risk": s.flood_risk,
        }
        score, status, reasons = evaluate_site_revalidation(site_dict)
        results.append(
            SiteResponse(
                id=s.id,
                name=s.name,
                location=s.location,
                latitude=s.latitude,
                longitude=s.longitude,
                safety_score=s.safety_score,
                landslide_risk=s.landslide_risk,
                flood_risk=s.flood_risk,
                terrain_score=s.terrain_score,
                accessibility_score=s.accessibility_score,
                infrastructure_score=s.infrastructure_score,
                capacity=s.capacity,
                future_risk=s.future_risk,
                cost_score=s.cost_score,
                description=s.description,
                distance_km_from_epicenter=s.distance_km_from_epicenter,
                overall_score=score,
                status=status,
                reasons=reasons,
            )
        )

    # Sort by overall score descending
    results.sort(key=lambda x: x.overall_score, reverse=True)
    return results
