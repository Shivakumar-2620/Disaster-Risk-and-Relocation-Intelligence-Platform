"""Pydantic schemas for Recommendation and Executive Report APIs."""
from typing import List, Dict, Any, Optional
from pydantic import BaseModel
from app.schemas.settlement import RiskFactor
from app.schemas.site import SiteComparisonItem


class FinalRecommendationResponse(BaseModel):
    settlement_id: int
    origin: str
    risk_score: float
    risk_level: str
    priority_households: int
    total_households: int
    sites_evaluated: int
    recommended_site_id: int
    recommended_site: str
    suitability_score: float
    score: float
    reasons: List[str]
    validation_status: str
    status: str = "Recommended for further administrative verification."
    statutory_note: str = "Recommended for further administrative verification."


class DecisionReportResponse(BaseModel):
    report_id: str
    generated_at: str
    statutory_dossier_no: str
    disclaimer: str
    settlement: Dict[str, Any]
    risk_assessment: Dict[str, Any]
    factors: List[RiskFactor]
    demographics: Dict[str, Any]
    candidate_sites_evaluated: List[Dict[str, Any]]
    destination_revalidation: Dict[str, Any]
    recommended_site: Dict[str, Any]
    what_if_stress_summary: Dict[str, Any]
    inter_departmental_checklist: List[Dict[str, Any]]
    next_administrative_steps: List[str]
