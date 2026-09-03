"""Pydantic schemas for Settlements and Risk Factor explanations."""
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field


class RiskFactor(BaseModel):
    name: str
    factor: str
    value: float
    contribution: float
    contribution_percentage: float
    explanation: str


class SettlementBase(BaseModel):
    name: str
    latitude: float
    longitude: float
    population: int = 0
    households: int = 0
    priority_households: int = 0
    landslide_risk: float = 0.0
    rainfall_risk: float = 0.0
    slope_risk: float = 0.0
    historical_risk: float = 0.0
    housing_vulnerability: float = 0.0
    description: Optional[str] = ""


class SettlementResponse(SettlementBase):
    id: int
    risk_score: float
    risk_level: str

    class Config:
        from_attributes = True


class SettlementDetailResponse(SettlementResponse):
    hazard_score: float
    exposure_score: float
    vulnerability_score: float
    trend_score: float
    factors: List[RiskFactor] = []
    explanation: str
    # Round-2: ML prediction and data quality (additive, optional for backwards compat)
    ml_prediction: Optional[Dict[str, Any]] = None
    data_quality: Optional[Dict[str, Any]] = None


class SettlementWhyResponse(BaseModel):
    settlement_id: int
    settlement_name: str
    risk_score: float
    risk_level: str
    factors: List[RiskFactor]
    summary_explanation: str
    # Round-2: ML prediction and data quality (additive, optional for backwards compat)
    ml_prediction: Optional[Dict[str, Any]] = None
    data_quality: Optional[Dict[str, Any]] = None
