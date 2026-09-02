"""Pydantic schemas for What-If Scenario Simulations."""
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field


class ScenarioSimulationRequest(BaseModel):
    rainfall_change: float = Field(
        ...,
        ge=-10.0,
        le=30.0,
        description="Simulated percentage change in rainfall (-10% to +30%)"
    )


class SimulatedSiteResult(BaseModel):
    site_id: int
    site_name: str
    original_score: float
    simulated_score: float
    delta: float
    simulated_safety: float
    simulated_future_risk: float
    validation_status: str
    status: str
    stability_verdict: str


class SimulatedSettlementResult(BaseModel):
    settlement_id: int
    settlement_name: str
    original_risk_score: float
    simulated_risk_score: float
    simulated_risk_level: str


class ScenarioSimulationResponse(BaseModel):
    simulation_label: str = "SIMULATED SCENARIO"
    rainfall_change: float
    description: str
    updated_sites: List[SimulatedSiteResult]
    updated_settlements: List[SimulatedSettlementResult]
    recommended_site_id: int
    recommended_site_name: str
    recommendation_summary: str
