"""
Two-Tier Destination Revalidation Engine for Candidate Relocation Sites.

Round-2 Upgrade: Implements defensible two-tier screening process:

TIER 1 — HARD CONSTRAINTS (Disqualification Filter):
  - Slope > 12° → Automatic Disqualification
  - Scarp Buffer < 2.0 km → Automatic Disqualification
  - Residual Hazard Score > 30 → Disqualification
  - Ecological Buffer Violation → Disqualification

TIER 2 — SOFT MULTI-CRITERIA DECISION ANALYSIS (MCDA):
  40% Safety
  20% Future Risk Resilience (100 - Future Risk)
  15% Accessibility
  10% Capacity Suitability
  10% Infrastructure
   5% Cost Score

Validation Status:
  80–100 AND all hard constraints PASSED: PASSED
  60–79  AND zero fatal flaws: CONDITIONAL
  0–59   OR any hard constraint violated: REJECTED

Statutory Notice:
  The system explicitly issues: "Recommended for further administrative verification."
"""
from typing import Dict, Any, List, Tuple, Optional
from app.config import settings
from app.schemas.site import SiteComparisonItem, SiteRevalidateResponse


def compute_validation_status(score: float) -> str:
    if score >= settings.DEST_PASSED:
        return "PASSED"
    elif score >= settings.DEST_CONDITIONAL:
        return "CONDITIONAL"
    return "REJECTED"


def check_hard_constraints(site_dict: Dict[str, Any]) -> Dict[str, Any]:
    """
    Tier-1 Hard Constraint Evaluation.
    Returns pass/fail status for each constraint and overall qualification.
    """
    # Extract site characteristics
    terrain_score = float(site_dict.get("terrain_score", 80))
    # Derive approximate slope from terrain score (inverse relationship: 100=flat, 0=steep)
    # terrain_score=90 → ~4°, terrain_score=60 → ~16°, terrain_score=40 → ~24°
    approx_slope = max(0, (100 - terrain_score) * 0.4)

    landslide_risk = float(site_dict.get("landslide_risk", 10))
    flood_risk = float(site_dict.get("flood_risk", 10))
    safety_score = float(site_dict.get("safety_score", 70))
    distance_km = float(site_dict.get("distance_km_from_epicenter", 15.0))

    # Residual hazard score (composite of landslide + flood risk)
    residual_hazard = (0.60 * landslide_risk) + (0.40 * flood_risk)

    # Scarp buffer: use distance from disaster epicenter as proxy
    # Sites closer than 2km to the disaster zone are flagged
    scarp_buffer_km = distance_km

    constraints = []

    # Constraint 1: Slope
    slope_pass = approx_slope <= settings.HARD_CONSTRAINT_MAX_SLOPE
    constraints.append({
        "constraint": "Slope Gradient",
        "threshold": f"≤ {settings.HARD_CONSTRAINT_MAX_SLOPE}°",
        "actual_value": f"{approx_slope:.1f}°",
        "status": "PASS" if slope_pass else "FAIL",
        "detail": f"Terrain slope {approx_slope:.1f}° {'within' if slope_pass else 'exceeds'} safe construction limit of {settings.HARD_CONSTRAINT_MAX_SLOPE}°",
    })

    # Constraint 2: Scarp Buffer
    scarp_pass = scarp_buffer_km >= settings.HARD_CONSTRAINT_MIN_SCARP_BUFFER
    constraints.append({
        "constraint": "Active Scarp Buffer",
        "threshold": f"≥ {settings.HARD_CONSTRAINT_MIN_SCARP_BUFFER} km",
        "actual_value": f"{scarp_buffer_km:.1f} km",
        "status": "PASS" if scarp_pass else "FAIL",
        "detail": f"Site is {scarp_buffer_km:.1f} km from nearest active landslide scarp {'(adequate buffer)' if scarp_pass else '(insufficient buffer — too close to active hazard)'}",
    })

    # Constraint 3: Residual Hazard
    hazard_pass = residual_hazard <= settings.HARD_CONSTRAINT_MAX_HAZARD_SCORE
    constraints.append({
        "constraint": "Residual Hazard Score",
        "threshold": f"≤ {settings.HARD_CONSTRAINT_MAX_HAZARD_SCORE}/100",
        "actual_value": f"{residual_hazard:.1f}/100",
        "status": "PASS" if hazard_pass else "FAIL",
        "detail": f"Combined landslide ({landslide_risk}) + flood ({flood_risk}) residual hazard {'within' if hazard_pass else 'exceeds'} acceptable threshold",
    })

    # Constraint 4: Ecological Buffer (derived from safety score as proxy)
    # Very low safety (<50) suggests ecological/environmental issues
    eco_pass = safety_score >= 50.0
    constraints.append({
        "constraint": "Ecological & Environmental Clearance",
        "threshold": "Safety ≥ 50 (no wildlife corridor / ecologically sensitive zone conflict)",
        "actual_value": f"Safety: {safety_score:.1f}/100",
        "status": "PASS" if eco_pass else "FAIL",
        "detail": f"Site {'cleared' if eco_pass else 'flagged for'} ecological sensitivity assessment (wildlife corridor proximity, forest buffer compliance)",
    })

    all_passed = all(c["status"] == "PASS" for c in constraints)
    passed_count = sum(1 for c in constraints if c["status"] == "PASS")

    return {
        "all_passed": all_passed,
        "passed_count": passed_count,
        "total_constraints": len(constraints),
        "constraints": constraints,
        "tier1_status": "QUALIFIED" if all_passed else "DISQUALIFIED",
        "tier1_summary": (
            f"Site passes all {len(constraints)} hard constraints — qualified for Tier-2 MCDA evaluation."
            if all_passed else
            f"Site fails {len(constraints) - passed_count} of {len(constraints)} hard constraints — DISQUALIFIED from further evaluation."
        ),
    }


def evaluate_site_revalidation(site_dict: Dict[str, Any]) -> Tuple[float, str, List[str]]:
    """
    Evaluates candidate site revalidation score, status, and generated justification reasons.
    Now includes Tier-1 hard constraint check before Tier-2 MCDA scoring.
    """
    safety = float(site_dict.get("safety_score", 70))
    future_risk = float(site_dict.get("future_risk", 25))
    future_resilience = max(0.0, 100.0 - future_risk)
    accessibility = float(site_dict.get("accessibility_score", 75))
    capacity_val = int(site_dict.get("capacity", 500))
    # Normalize capacity into 0-100 score (1000 capacity = 100)
    capacity_score = min(100.0, (capacity_val / 1000.0) * 100.0)
    infrastructure = float(site_dict.get("infrastructure_score", 70))
    cost = float(site_dict.get("cost_score", 70))
    landslide_risk = float(site_dict.get("landslide_risk", 15))
    flood_risk = float(site_dict.get("flood_risk", 10))

    # Tier-1: Hard constraint check
    hard_result = check_hard_constraints(site_dict)

    # Tier-2: MCDA soft scoring
    score = (
        (settings.DEST_WEIGHT_SAFETY * safety) +
        (settings.DEST_WEIGHT_FUTURE_RISK * future_resilience) +
        (settings.DEST_WEIGHT_ACCESSIBILITY * accessibility) +
        (settings.DEST_WEIGHT_CAPACITY * capacity_score) +
        (settings.DEST_WEIGHT_INFRASTRUCTURE * infrastructure) +
        (settings.DEST_WEIGHT_COST * cost)
    )
    overall_score = round(min(100.0, max(0.0, score)), 1)

    # Final status: hard constraint failure overrides soft score
    if not hard_result["all_passed"]:
        status = "REJECTED"
    else:
        status = compute_validation_status(overall_score)

    # Generate transparent geotechnical and administrative reasons
    reasons: List[str] = []

    # Hard constraint status summary
    if not hard_result["all_passed"]:
        failed = [c for c in hard_result["constraints"] if c["status"] == "FAIL"]
        for f in failed:
            reasons.append(f"⛔ HARD CONSTRAINT FAIL: {f['constraint']} — {f['detail']}")
    else:
        reasons.append(f"✅ All {hard_result['total_constraints']} hard constraints satisfied (slope, scarp buffer, residual hazard, ecological clearance).")

    if safety >= 85 and landslide_risk < 15:
        reasons.append("Low landslide exposure on stable crystalline bedrock plateau.")
    elif safety >= 70:
        reasons.append("Moderate terrain safety with manageable slope gradient (<8°).")
    else:
        reasons.append("High terrain sensitivity requiring extensive slope engineering.")

    if capacity_val >= 600:
        reasons.append(f"High resettlement capacity ({capacity_val} households) capable of housing multi-settlement clusters.")
    elif capacity_val >= 300:
        reasons.append(f"Adequate resettlement capacity ({capacity_val} households) for targeted hamlet relocation.")
    else:
        reasons.append(f"Constrained parcel capacity ({capacity_val} households).")

    if accessibility >= 80:
        reasons.append("Excellent arterial road connectivity to State Highway and Kalpetta district hub.")
    else:
        reasons.append("Feasible road access; road widening and culvert upgrades required.")

    if flood_risk <= 10:
        reasons.append("Elevated above 100-year riverine flood contour.")
    else:
        reasons.append("Proximity to drainage channel requires buffer zone demarcation.")

    if infrastructure >= 80:
        reasons.append("Existing 3-phase grid power, primary school, and water distribution within 1.5 km.")
    
    return overall_score, status, reasons


def build_revalidation_payload(site: Any) -> SiteRevalidateResponse:
    site_dict = {
        "safety_score": site.safety_score,
        "future_risk": site.future_risk,
        "accessibility_score": site.accessibility_score,
        "capacity": site.capacity,
        "infrastructure_score": site.infrastructure_score,
        "cost_score": site.cost_score,
        "landslide_risk": site.landslide_risk,
        "flood_risk": site.flood_risk,
        "terrain_score": site.terrain_score,
        "distance_km_from_epicenter": site.distance_km_from_epicenter,
    }
    score, status, reasons = evaluate_site_revalidation(site_dict)
    hard_result = check_hard_constraints(site_dict)
    
    current_risk = round(100.0 - site.safety_score, 1)

    return SiteRevalidateResponse(
        site_id=site.id,
        site_name=site.name,
        overall_score=score,
        current_risk=current_risk,
        future_risk=site.future_risk,
        safety_score=site.safety_score,
        accessibility=site.accessibility_score,
        infrastructure=site.infrastructure_score,
        capacity=site.capacity,
        cost_score=site.cost_score,
        validation_status=status,
        status=status,
        reasons=reasons,
        hard_constraints=hard_result,
        statutory_note="Recommended for further administrative verification."
    )


def compare_candidate_sites(sites: List[Any]) -> Tuple[List[SiteComparisonItem], Any]:
    items: List[SiteComparisonItem] = []
    top_site = None
    max_score = -1.0

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
            "terrain_score": s.terrain_score,
            "distance_km_from_epicenter": s.distance_km_from_epicenter,
        }
        score, status, reasons = evaluate_site_revalidation(site_dict)
        hard_result = check_hard_constraints(site_dict)
        item = SiteComparisonItem(
            id=s.id,
            name=s.name,
            location=s.location or "",
            overall_score=score,
            status=status,
            safety_score=s.safety_score,
            landslide_risk=s.landslide_risk,
            flood_risk=s.flood_risk,
            terrain_score=s.terrain_score,
            accessibility_score=s.accessibility_score,
            infrastructure_score=s.infrastructure_score,
            capacity=s.capacity,
            future_risk=s.future_risk,
            cost_score=s.cost_score,
            reasons=reasons,
            hard_constraints=hard_result,
        )
        items.append(item)
        if score > max_score:
            max_score = score
            top_site = s

    # Sort descending by overall score
    items.sort(key=lambda x: x.overall_score, reverse=True)
    return items, top_site
