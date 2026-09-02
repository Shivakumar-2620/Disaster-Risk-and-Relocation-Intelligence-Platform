"""
Dashboard API route.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.settlement import Settlement
from app.models.site import CandidateRelocationSite
from app.schemas.dashboard import DashboardResponse, DashboardSummaryStats
from app.config import settings

router = APIRouter(prefix="/api", tags=["Dashboard"])


@router.get("/dashboard", response_model=DashboardResponse)
def get_dashboard_summary(db: Session = Depends(get_db)):
    """
    Returns high-level district emergency overview, counts, and priority metrics.
    """
    settlements = db.query(Settlement).all()
    sites = db.query(CandidateRelocationSite).all()

    total_settlements = len(settlements)
    critical_count = sum(1 for s in settlements if s.risk_score >= settings.RISK_CRITICAL)
    high_count = sum(1 for s in settlements if settings.RISK_HIGH <= s.risk_score < settings.RISK_CRITICAL)
    mod_count = sum(1 for s in settlements if settings.RISK_MODERATE <= s.risk_score < settings.RISK_HIGH)

    total_pop = sum(s.population for s in settlements)
    total_hh = sum(s.households for s in settlements)
    total_priority_hh = sum(s.priority_households for s in settlements)

    total_capacity = sum(s.capacity for s in sites)
    passed_sites = sum(1 for s in sites if s.status == "PASSED")
    cond_sites = sum(1 for s in sites if s.status == "CONDITIONAL")

    summary_stats = DashboardSummaryStats(
        total_settlements=total_settlements,
        critical_settlements=critical_count,
        high_risk_settlements=high_count,
        moderate_risk_settlements=mod_count,
        total_households_at_risk=total_hh,
        total_priority_households=total_priority_hh,
        total_candidate_sites=len(sites),
        passed_candidate_sites=passed_sites,
        conditional_candidate_sites=cond_sites,
        total_resettlement_capacity=total_capacity,
        capacity_deficit_surplus=total_capacity - total_hh,
        estimated_budget_cr=428.50
    )

    return DashboardResponse(
        district="Wayanad, Kerala",
        state="Kerala",
        disaster_event="July 2024 Wayanad Landslides (Meppadi - Chooralmala - Mundakkai)",
        high_risk_settlements=critical_count + high_count,
        affected_households=total_hh,
        priority_households=total_priority_hh,
        candidate_sites=len(sites),
        total_population_at_risk=total_pop,
        summary_statistics=summary_stats
    )
