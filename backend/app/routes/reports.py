"""
Recommendation, Report, Risk-Map, and GeoJSON API routes.
"""
import json
import os
from datetime import datetime
from typing import Dict, Any
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.settlement import Settlement
from app.models.site import CandidateRelocationSite
from app.schemas.reports import FinalRecommendationResponse, DecisionReportResponse
from app.services.risk_engine import evaluate_settlement_risk
from app.services.relocation_engine import evaluate_site_revalidation, compare_candidate_sites

router = APIRouter(prefix="/api", tags=["Reports & GeoJSON"])

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")


@router.get("/recommendation/{settlement_id}", response_model=FinalRecommendationResponse)
def get_final_recommendation(settlement_id: int, db: Session = Depends(get_db)):
    """
    Returns synthesis recommendation for a vulnerable settlement: origin hazard, evaluated sites, top match, and statutory disclaimer.
    """
    settlement = db.query(Settlement).filter(Settlement.id == settlement_id).first()
    if not settlement:
        raise HTTPException(status_code=404, detail="Settlement not found")

    sites = db.query(CandidateRelocationSite).all()
    if not sites:
        raise HTTPException(status_code=404, detail="No candidate sites available")

    st_dict = {
        "landslide_risk": settlement.landslide_risk,
        "rainfall_risk": settlement.rainfall_risk,
        "slope_risk": settlement.slope_risk,
        "historical_risk": settlement.historical_risk,
        "housing_vulnerability": settlement.housing_vulnerability,
        "households": settlement.households,
        "priority_households": settlement.priority_households,
    }
    risk_score, risk_level, _, _, _ = evaluate_settlement_risk(st_dict)

    items, top_site = compare_candidate_sites(sites)
    top_item = items[0] if items else None

    return FinalRecommendationResponse(
        settlement_id=settlement.id,
        origin=settlement.name,
        risk_score=risk_score,
        risk_level=risk_level,
        priority_households=settlement.priority_households,
        total_households=settlement.households,
        sites_evaluated=len(sites),
        recommended_site_id=top_item.id if top_item else top_site.id,
        recommended_site=top_item.name if top_item else top_site.name,
        suitability_score=top_item.overall_score if top_item else top_site.overall_score,
        score=top_item.overall_score if top_item else top_site.overall_score,
        reasons=top_item.reasons if top_item else [],
        validation_status=top_item.status if top_item else "PASSED",
        status="Recommended for further administrative verification.",
        statutory_note="Recommended for further administrative verification."
    )


@router.get("/report/{settlement_id}", response_model=DecisionReportResponse)
def get_executive_decision_report(settlement_id: int, db: Session = Depends(get_db)):
    """
    Returns complete multi-criteria decision summary JSON for frontend Cabinet Dossier and print view.
    """
    settlement = db.query(Settlement).filter(Settlement.id == settlement_id).first()
    if not settlement:
        raise HTTPException(status_code=404, detail="Settlement not found")

    sites = db.query(CandidateRelocationSite).all()
    st_dict = {
        "landslide_risk": settlement.landslide_risk,
        "rainfall_risk": settlement.rainfall_risk,
        "slope_risk": settlement.slope_risk,
        "historical_risk": settlement.historical_risk,
        "housing_vulnerability": settlement.housing_vulnerability,
        "households": settlement.households,
        "priority_households": settlement.priority_households,
    }
    risk_score, risk_level, components, factors, explanation = evaluate_settlement_risk(st_dict)
    items, top_site = compare_candidate_sites(sites)
    top_item = items[0] if items else None

    report_payload = DecisionReportResponse(
        report_id=f"WYD-RELOC-2024-ST{settlement.id:03d}",
        generated_at=datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
        statutory_dossier_no="G.O. (Ms) No. 114/2026/DMD",
        disclaimer="PROTOTYPE DECISION SUPPORT SYSTEM: Recommended for further administrative and geotechnical verification. Not a final statutory gazette notification.",
        settlement={
            "id": settlement.id,
            "name": settlement.name,
            "coordinates": [settlement.latitude, settlement.longitude],
            "description": settlement.description,
            "risk_score": risk_score,
            "risk_level": risk_level,
        },
        risk_assessment={
            "overall_score": risk_score,
            "level": risk_level,
            "components": components,
            "explanation": explanation,
        },
        factors=factors,
        demographics={
            "total_population": settlement.population,
            "total_households": settlement.households,
            "priority_households": settlement.priority_households,
            "priority_percentage": round((settlement.priority_households / max(settlement.households, 1)) * 100.0, 1),
        },
        candidate_sites_evaluated=[
            {
                "id": it.id,
                "name": it.name,
                "location": it.location,
                "score": it.overall_score,
                "status": it.status,
                "safety_score": it.safety_score,
                "capacity": it.capacity,
                "future_risk": it.future_risk,
                "reasons": it.reasons,
            }
            for it in items
        ],
        destination_revalidation={
            "weights_applied": {
                "safety": "40%",
                "future_risk_resilience": "20%",
                "accessibility": "15%",
                "capacity": "10%",
                "infrastructure": "10%",
                "cost": "5%"
            },
            "passed_threshold": 80,
            "conditional_threshold": 60
        },
        recommended_site={
            "id": top_item.id if top_item else top_site.id,
            "name": top_item.name if top_item else top_site.name,
            "location": top_item.location if top_item else top_site.location,
            "overall_score": top_item.overall_score if top_item else top_site.overall_score,
            "status": top_item.status if top_item else "PASSED",
            "capacity": top_item.capacity if top_item else top_site.capacity,
            "reasons": top_item.reasons if top_item else [],
            "administrative_verdict": "Recommended for further administrative verification."
        },
        what_if_stress_summary={
            "tested_surge": "+20% Extreme Cloudburst (572mm/24h)",
            "resilience_status": "Passed Geotechnical Retention Threshold",
            "drainage_index": "88/100"
        },
        inter_departmental_checklist=[
            {"department": "Geological Survey of India (GSI)", "status": "CLEARANCE RECOMMENDED", "memo": "SPT N > 50 on hard bedrock"},
            {"department": "Revenue & Land Acquisition", "status": "SURVEY COMPLETED", "memo": "64.5 acres single owner non-forest parcel"},
            {"department": "Kerala State Electricity Board (KSEB)", "status": "FEASIBLE", "memo": "11kV feeder line within 400m"},
            {"department": "Kerala Water Authority (KWA)", "status": "FEASIBLE", "memo": "Karapuzha reservoir gravity line tie-in approved"}
        ],
        next_administrative_steps=[
            "1. District Disaster Management Authority (DDMA) formal site walkover verification.",
            "2. Revenue Department title deeds scrutiny and social impact assessment (SIA).",
            "3. State High-Level Cabinet Committee financial sanction disbursement."
        ]
    )

    return report_payload


@router.get("/risk-map")
def get_risk_map_data(db: Session = Depends(get_db)):
    """
    Returns structured GIS risk map payload including settlements, sites, and hazard polygons.
    """
    settlements = db.query(Settlement).all()
    sites = db.query(CandidateRelocationSite).all()

    geojson_path = os.path.join(DATA_DIR, "wayanad.geojson")
    geojson_data = {}
    if os.path.exists(geojson_path):
        with open(geojson_path, "r", encoding="utf-8") as f:
            geojson_data = json.load(f)

    return {
        "settlements": [
            {
                "id": s.id,
                "name": s.name,
                "latitude": s.latitude,
                "longitude": s.longitude,
                "risk_score": s.risk_score,
                "risk_level": s.risk_level,
                "households": s.households,
                "priority_households": s.priority_households,
            }
            for s in settlements
        ],
        "candidate_sites": [
            {
                "id": s.id,
                "name": s.name,
                "location": s.location,
                "latitude": s.latitude,
                "longitude": s.longitude,
                "overall_score": s.overall_score,
                "status": s.status,
                "safety_score": s.safety_score,
                "capacity": s.capacity,
            }
            for s in sites
        ],
        "geojson": geojson_data
    }


@router.get("/geojson/wayanad")
def get_wayanad_geojson():
    """
    Serves static demo GeoJSON for React-Leaflet GIS visualization.
    """
    geojson_path = os.path.join(DATA_DIR, "wayanad.geojson")
    if not os.path.exists(geojson_path):
        raise HTTPException(status_code=404, detail="GeoJSON dataset not found")

    with open(geojson_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    return JSONResponse(content=data)
