"""Pydantic schemas for What-If Scenario Simulations."""
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field


class ScenarioSimulationRequest(BaseModel):
    rainfall_change: float = Field(
        0.0,
        ge=-20.0,
        le=50.0,
        description="Simulated percentage change in rainfall (-20% to +50%)"
    )
    road_access_disruption: Optional[bool] = Field(
        False,
        description="Simulate arterial road corridor cut-off / bridge collapse"
    )
    capacity_reduction: Optional[float] = Field(
        0.0,
        ge=0.0,
        le=60.0,
        description="Percentage reduction in site buildable capacity due to safety buffer expansion (0-60%)"
    )


class SimulatedSiteResult(BaseModel):
    site_id: int
    site_name: str
    original_score: float
    simulated_score: float
    delta: float
    simulated_safety: float
    simulated_future_risk: float
    simulated_capacity: Optional[int] = None
    simulated_accessibility: Optional[float] = None
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
    road_access_disruption: bool = False
    capacity_reduction: float = 0.0
    description: str
    updated_sites: List[SimulatedSiteResult]
    updated_settlements: List[SimulatedSettlementResult]
    recommended_site_id: int
    recommended_site_name: str
    recommendation_summary: str
    contingency_strategy: Optional[str] = None
    split_allocation: Optional[Dict[str, Any]] = None
