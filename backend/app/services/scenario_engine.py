"""
Multi-Variable Scenario Simulation Engine.

Round-2 Upgrade:
  Simulates multi-dimensional climate and logistical stress tests:
  1. Rainfall change: -20% to +50% (monsoon surge / cloudburst events)
  2. Road access disruption: boolean (simulating bridge collapse or arterial severed)
  3. Capacity reduction: 0% to 60% (due to regulatory buffer zone expansion)

Generates rational, dynamic recommendation shifts, contingency strategies,
and dual-site split allocations when single-site capacity is constrained.
"""
from typing import List, Dict, Any, Tuple, Optional
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
    settlements: List[Any],
    road_access_disruption: bool = False,
    capacity_reduction: float = 0.0,
) -> ScenarioSimulationResponse:
    """
    Executes multi-variable stress simulation across climate and infrastructure parameters.
    """
    rf = float(rainfall_change)
    cap_red = float(capacity_reduction)
    road_cut = bool(road_access_disruption)

    simulated_sites: List[SimulatedSiteResult] = []
    simulated_settlements: List[SimulatedSettlementResult] = []

    best_simulated_site_id = 1
    best_simulated_site_name = ""
    best_simulated_score = -1.0

    for site in sites:
        orig_score = float(site.overall_score)
        orig_safety = float(site.safety_score)
        orig_future = float(site.future_risk)
        orig_access = float(site.accessibility_score)
        orig_cap = int(site.capacity)

        # 1. Rainfall impact on stability & drainage
        if site.id == 1:
            # Site 1 (Kalpetta North): Base 91. Under severe rain (>15%), retention surcharge drops score
            rain_impact = -1.1 * rf if rf > 0 else 0.4 * abs(rf)
            sim_safety = max(30.0, min(100.0, orig_safety - (0.8 * rf)))
            sim_future = min(100.0, max(5.0, orig_future + (0.9 * rf)))
            verdict_rain = "Vulnerable to extreme cloudburst runoff; retention ponds required." if rf > 10 else "Optimal stability under standard rainfall."
        elif site.id == 2:
            # Site 2 (Meenangadi): Base 74. Granite plateau with superior natural drainage; excels in high rain (+20%)
            rain_impact = 0.35 * rf if rf > 0 else -0.2 * abs(rf)
            sim_safety = max(30.0, min(100.0, orig_safety + (0.2 * rf)))
            sim_future = min(100.0, max(5.0, orig_future - (0.1 * rf)))
            verdict_rain = "Superior high-capacity storm drainage & granite bedrock stability under torrential precipitation."
        elif site.id == 3:
            rain_impact = -0.15 * rf
            sim_safety = max(20.0, min(100.0, orig_safety - (0.3 * rf)))
            sim_future = min(100.0, max(5.0, orig_future + (0.4 * rf)))
            verdict_rain = "Lowland waterlogging and transport cutoff during heavy monsoon peaks."
        else:
            rain_impact = -0.4 * rf
            sim_safety = max(20.0, min(100.0, orig_safety - (0.4 * rf)))
            sim_future = min(100.0, max(5.0, orig_future + (0.5 * rf)))
            verdict_rain = "Terraced slopes require reinforced retaining walls under higher rainfall intensity."

        # 2. Road access disruption impact
        sim_access = orig_access
        road_penalty = 0.0
        if road_cut:
            if site.id == 1:
                # State highway spur compromised → -25 access pts, -8 overall
                road_penalty = -10.0
                sim_access = max(20.0, orig_access - 30.0)
            elif site.id == 2:
                # Dual arterial corridor (NH 766 + regional road) → only -3 overall penalty
                road_penalty = -3.0
                sim_access = max(30.0, orig_access - 12.0)
            elif site.id == 3:
                road_penalty = -15.0
                sim_access = max(10.0, orig_access - 40.0)
            else:
                road_penalty = -12.0
                sim_access = max(15.0, orig_access - 35.0)

        # 3. Capacity reduction impact
        effective_cap = int(orig_cap * (1.0 - (cap_red / 100.0)))
        cap_penalty = -0.15 * cap_red  # slight overall score drag from constrained development

        # Compute net simulated score
        sim_score = max(20.0, min(100.0, orig_score + rain_impact + road_penalty + cap_penalty))
        sim_score = round(sim_score, 1)
        sim_safety = round(sim_safety, 1)
        sim_future = round(sim_future, 1)
        sim_access = round(sim_access, 1)
        delta = round(sim_score - orig_score, 1)
        status = compute_validation_status(sim_score)

        # Build compound stability verdict
        verdicts = [verdict_rain]
        if road_cut:
            verdicts.append(f"Road access disrupted: arterial accessibility reduced to {sim_access}/100.")
        if cap_red > 0:
            verdicts.append(f"Capacity reduced by {cap_red:.0f}%: {effective_cap} households available (down from {orig_cap}).")

        simulated_sites.append(
            SimulatedSiteResult(
                site_id=site.id,
                site_name=site.name,
                original_score=orig_score,
                simulated_score=sim_score,
                delta=delta,
                simulated_safety=sim_safety,
                simulated_future_risk=sim_future,
                simulated_capacity=effective_cap,
                simulated_accessibility=sim_access,
                validation_status=status,
                status=status,
                stability_verdict=" ".join(verdicts),
            )
        )

        if sim_score > best_simulated_score:
            best_simulated_score = sim_score
            best_simulated_site_id = site.id
            best_simulated_site_name = site.name

    # Settlements rainfall impact
    for st in settlements:
        orig_risk = float(st.risk_score)
        risk_increase = (rf * 0.25) if rf > 0 else (rf * 0.15)
        if road_cut:
            risk_increase += 4.0  # evacuation bottleneck worsens settlement risk
        sim_risk = round(min(100.0, max(0.0, orig_risk + risk_increase)), 1)
        sim_level = compute_risk_level(sim_risk)

        simulated_settlements.append(
            SimulatedSettlementResult(
                settlement_id=st.id,
                settlement_name=st.name,
                original_risk_score=orig_risk,
                simulated_risk_score=sim_risk,
                simulated_risk_level=sim_level,
            )
        )

    # Sort simulated sites descending by simulated score
    simulated_sites.sort(key=lambda x: x.simulated_score, reverse=True)

    # Determine contingency strategy & split allocation
    contingency_strategy = None
    split_allocation = None

    # Total displaced households in critical settlements (Mundakkai + Chooralmala = ~1760 HH, priority = ~400 HH)
    top_site_capacity = next((s.simulated_capacity for s in simulated_sites if s.site_id == best_simulated_site_id), 800)
    
    if road_cut and rf >= 20:
        contingency_strategy = (
            f"MULTI-HAZARD ESCALATION: Severe cloudburst (+{rf:.0f}%) combined with severed road links triggers "
            f"an automatic recommendation shift from Site A to {best_simulated_site_name} due to dual arterial road redundancy. "
            f"Immediate pre-positioning of temporary transit shelters recommended."
        )
    elif road_cut:
        contingency_strategy = (
            f"LOGISTICAL CONTINGENCY: Road access severed. Shift priority to sites with dual highway connectivity. "
            f"Air-lift / Bailey bridge deployment required for severed primary corridors."
        )
    elif cap_red >= 30:
        # Need split allocation across top 2 sites
        site_1 = simulated_sites[0]
        site_2 = simulated_sites[1] if len(simulated_sites) > 1 else site_1
        contingency_strategy = (
            f"DUAL-SITE SPLIT RELOCATION MANDATE: Due to a {cap_red:.0f}% capacity reduction, no single site "
            f"can absorb the entire displaced cohort. Phased dual-site allocation activated: "
            f"Phase 1 at {site_1.site_name} ({site_1.simulated_capacity} HH) + "
            f"Phase 2 at {site_2.site_name} ({site_2.simulated_capacity} HH)."
        )
        split_allocation = {
            "strategy": "Dual-Site Phased Resettlement",
            "phase_1": {
                "site_id": site_1.site_id,
                "site_name": site_1.site_name,
                "allocated_households": site_1.simulated_capacity,
                "target_group": "Priority 1 (Orphaned, Elderly, Completely Destroyed Homesteads)",
            },
            "phase_2": {
                "site_id": site_2.site_id,
                "site_name": site_2.site_name,
                "allocated_households": site_2.simulated_capacity,
                "target_group": "Phase 2 Resettlement (Buffer Zone Inhabitants & Transit Cohort)",
            },
        }

    # Summary narrative
    stress_factors = []
    if rf != 0:
        stress_factors.append(f"{('+' + str(rf)) if rf > 0 else str(rf)}% rainfall perturbation")
    if road_cut:
        stress_factors.append("severed arterial road corridors")
    if cap_red > 0:
        stress_factors.append(f"{cap_red:.0f}% safety buffer capacity reduction")
    
    stress_text = ", ".join(stress_factors) if stress_factors else "baseline conditions"

    summary = (
        f"Under simulated stress ({stress_text}), "
        f"{best_simulated_site_name} emerges as the most viable candidate site "
        f"with a simulated suitability score of {best_simulated_score}/100. "
        f"Notice: This is a controlled multi-variable prototype simulation."
    )

    return ScenarioSimulationResponse(
        simulation_label="SIMULATED SCENARIO",
        rainfall_change=rf,
        road_access_disruption=road_cut,
        capacity_reduction=cap_red,
        description=f"Multi-variable stress modeling: {stress_text}.",
        updated_sites=simulated_sites,
        updated_settlements=simulated_settlements,
        recommended_site_id=best_simulated_site_id,
        recommended_site_name=best_simulated_site_name,
        recommendation_summary=summary,
        contingency_strategy=contingency_strategy,
        split_allocation=split_allocation,
    )
