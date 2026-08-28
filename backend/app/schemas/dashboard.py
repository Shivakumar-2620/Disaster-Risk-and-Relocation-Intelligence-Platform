"""Pydantic schemas for Dashboard and Summary Statistics."""
from typing import Dict, Any, List
from pydantic import BaseModel


class DashboardSummaryStats(BaseModel):
    total_settlements: int
    critical_settlements: int
    high_risk_settlements: int
    moderate_risk_settlements: int
    total_households_at_risk: int
    total_priority_households: int
    total_candidate_sites: int
    passed_candidate_sites: int
    conditional_candidate_sites: int
    total_resettlement_capacity: int
    capacity_deficit_surplus: int
    estimated_budget_cr: float


class DashboardResponse(BaseModel):
    district: str = "Wayanad, Kerala"
    state: str = "Kerala"
    disaster_event: str = "July 2024 Wayanad Landslides (Meppadi - Chooralmala - Mundakkai)"
    high_risk_settlements: int
    affected_households: int
    priority_households: int
    candidate_sites: int
    total_population_at_risk: int
    summary_statistics: DashboardSummaryStats
