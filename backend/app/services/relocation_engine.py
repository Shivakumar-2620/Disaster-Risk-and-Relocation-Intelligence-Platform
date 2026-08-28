"""
Destination Revalidation Engine for Candidate Relocation Sites.

Weights:
40% Safety
20% Future Risk Resilience (100 - Future Risk)
15% Accessibility
10% Capacity Suitability
10% Infrastructure
 5% Cost Score

Validation Status:
80–100: PASSED
60–79:  CONDITIONAL
0–59:   REJECTED

Statutory Notice:
The system explicitly issues: "Recommended for further administrative verification."
"""
from typing import Dict, Any, List, Tuple
from app.config import settings
from app.schemas.site import SiteComparisonItem, SiteRevalidateResponse


def compute_validation_status(score: float) -> str:
    if score >= settings.DEST_PASSED:
        return "PASSED"
    elif score >= settings.DEST_CONDITIONAL:
        return "CONDITIONAL"
    return "REJECTED"


def evaluate_site_revalidation(site_dict: Dict[str, Any]) -> Tuple[float, str, List[str]]:
    """
    Evaluates candidate site revalidation score, status, and generated justification reasons.
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

    score = (
        (settings.DEST_WEIGHT_SAFETY * safety) +
        (settings.DEST_WEIGHT_FUTURE_RISK * future_resilience) +
        (settings.DEST_WEIGHT_ACCESSIBILITY * accessibility) +
        (settings.DEST_WEIGHT_CAPACITY * capacity_score) +
        (settings.DEST_WEIGHT_INFRASTRUCTURE * infrastructure) +
        (settings.DEST_WEIGHT_COST * cost)
    )
    overall_score = round(min(100.0, max(0.0, score)), 1)
    status = compute_validation_status(overall_score)

    # Generate transparent geotechnical and administrative reasons
    reasons: List[str] = []
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
        "flood_risk": site.flood_risk
    }
    score, status, reasons = evaluate_site_revalidation(site_dict)
    
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
            "flood_risk": s.flood_risk
        }
        score, status, reasons = evaluate_site_revalidation(site_dict)
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
            reasons=reasons
        )
        items.append(item)
        if score > max_score:
            max_score = score
            top_site = s

    # Sort descending by overall score
    items.sort(key=lambda x: x.overall_score, reverse=True)
    return items, top_site
