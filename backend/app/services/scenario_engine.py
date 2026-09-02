"""
Scenario Simulation Engine.

Simulates rainfall change (-10% to +30%) on candidate sites and at-risk settlements.
Returns updated scores, recommendations, and clear 'SIMULATED SCENARIO' labeling.
"""
from typing import List, Dict, Any, Tuple
from app.schemas.scenario import (
    SimulatedSiteResult,
    SimulatedSettlementResult,
    ScenarioSimulationResponse,
)
from app.services.relocation_engine import compute_validation_status
from app.services.risk_engine import compute_risk_level


def simulate_climate_scenario(
    rainfall_change: float,
    sites: List[Any],
    settlements: List[Any]
) -> ScenarioSimulationResponse:
    """
    Executes controlled prototype scenario calculation.
    """
    rf = float(rainfall_change)

    simulated_sites: List[SimulatedSiteResult] = []
    simulated_settlements: List[SimulatedSettlementResult] = []

    best_simulated_site_id = 1
    best_simulated_site_name = ""
    best_simulated_score = -1.0

    # Site-specific rainfall sensitivity factors (simulating varied micro-drainage / rock strata)
    # Site 1 (Kalpetta North): Base 91, moderate drainage sensitivity
    # Site 2 (Meenangadi Plateau): Base 74, extremely high drainage / granite bedrock -> excels under heavy rainfall (+20%)
    # Site 3 (Sultan Bathery East): Base 58, high slope drainage penalty
    # Site 4 (Vythiri Terraces): Base 62, high rain sensitivity
    for site in sites:
        orig_score = float(site.overall_score)
        
        if site.id == 1:
            # Baseline high score; under heavy rain (+20%), catchment surcharge drops score to ~69
            rain_impact = -1.1 * rf
            sim_score = max(40.0, min(100.0, orig_score + rain_impact))
            sim_safety = max(30.0, min(100.0, site.safety_score - (0.8 * rf)))
            sim_future = min(100.0, max(5.0, site.future_risk + (0.9 * rf)))
            verdict = "Vulnerable to extreme cloudburst runoff; retention ponds required." if rf > 10 else "Optimal stability under standard rainfall."
        elif site.id == 2:
            # High elevation granite plateau; under heavy rain (+20%), gains relative advantage (score ~81)
            # Its drainage capacity performs better relative to surrounding valleys
            rain_impact = 0.35 * rf if rf > 0 else -0.2 * abs(rf)
            sim_score = max(40.0, min(100.0, orig_score + rain_impact))
            sim_safety = max(30.0, min(100.0, site.safety_score + (0.2 * rf)))
            sim_future = min(100.0, max(5.0, site.future_risk - (0.1 * rf)))
            verdict = "Superior high-capacity storm drainage & granite bedrock stability under torrential precipitation."
        elif site.id == 3:
            rain_impact = -0.15 * rf
            sim_score = max(30.0, min(100.0, orig_score + rain_impact))
            sim_safety = max(20.0, min(100.0, site.safety_score - (0.3 * rf)))
            sim_future = min(100.0, max(5.0, site.future_risk + (0.4 * rf)))
            verdict = "Lowland waterlogging and transport cutoff during heavy monsoon peaks."
        else:
            rain_impact = -0.4 * rf
            sim_score = max(30.0, min(100.0, orig_score + rain_impact))
            sim_safety = max(20.0, min(100.0, site.safety_score - (0.4 * rf)))
            sim_future = min(100.0, max(5.0, site.future_risk + (0.5 * rf)))
            verdict = "Terraced slopes require reinforced retaining walls under higher rainfall intensity."

        sim_score = round(sim_score, 1)
        sim_safety = round(sim_safety, 1)
        sim_future = round(sim_future, 1)
        delta = round(sim_score - orig_score, 1)
        status = compute_validation_status(sim_score)

        simulated_sites.append(
            SimulatedSiteResult(
                site_id=site.id,
                site_name=site.name,
                original_score=orig_score,
                simulated_score=sim_score,
                delta=delta,
                simulated_safety=sim_safety,
                simulated_future_risk=sim_future,
                validation_status=status,
                status=status,
                stability_verdict=verdict
            )
        )

        if sim_score > best_simulated_score:
            best_simulated_score = sim_score
            best_simulated_site_id = site.id
            best_simulated_site_name = site.name

    # Settlements rainfall impact
    for st in settlements:
        orig_risk = float(st.risk_score)
        # Higher rainfall increases risk in steep zones
        risk_increase = (rf * 0.25) if rf > 0 else (rf * 0.15)
        sim_risk = round(min(100.0, max(0.0, orig_risk + risk_increase)), 1)
        sim_level = compute_risk_level(sim_risk)

        simulated_settlements.append(
            SimulatedSettlementResult(
                settlement_id=st.id,
                settlement_name=st.name,
                original_risk_score=orig_risk,
                simulated_risk_score=sim_risk,
                simulated_risk_level=sim_level
            )
        )

    # Sort simulated sites descending by simulated score
    simulated_sites.sort(key=lambda x: x.simulated_score, reverse=True)

    summary = (
        f"Under simulated {('+' + str(rf)) if rf > 0 else str(rf)}% rainfall surge, "
        f"{best_simulated_site_name} emerges as the most resilient candidate site "
        f"with a simulated suitability score of {best_simulated_score}/100. "
        f"Notice: This is a controlled prototype simulation."
    )

    return ScenarioSimulationResponse(
        simulation_label="SIMULATED SCENARIO",
        rainfall_change=rf,
        description=f"Synthetic climate perturbation modeling at {('+' + str(rf)) if rf > 0 else str(rf)}% precipitation intensity.",
        updated_sites=simulated_sites,
        updated_settlements=simulated_settlements,
        recommended_site_id=best_simulated_site_id,
        recommended_site_name=best_simulated_site_name,
        recommendation_summary=summary
    )
