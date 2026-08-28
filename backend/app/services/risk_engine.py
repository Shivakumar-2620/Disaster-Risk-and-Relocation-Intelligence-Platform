"""
Transparent, rule-based Risk Engine for Wayanad Settlements.

Rule-based formula:
Risk Score = 40% Hazard + 25% Exposure + 20% Vulnerability + 15% Trend

Risk Levels:
80–100: CRITICAL
60–79:  HIGH
40–59:  MODERATE
0–39:   LOW
"""
from typing import Dict, Any, List, Tuple
from app.config import settings
from app.schemas.settlement import RiskFactor


def compute_risk_level(score: float) -> str:
    if score >= settings.RISK_CRITICAL:
        return "CRITICAL"
    elif score >= settings.RISK_HIGH:
        return "HIGH"
    elif score >= settings.RISK_MODERATE:
        return "MODERATE"
    return "LOW"


def evaluate_settlement_risk(settlement_dict: Dict[str, Any]) -> Tuple[float, str, Dict[str, float], List[RiskFactor], str]:
    """
    Computes transparent risk score, components, and factor explanations.
    """
    landslide = float(settlement_dict.get("landslide_risk", 50))
    rainfall = float(settlement_dict.get("rainfall_risk", 50))
    slope = float(settlement_dict.get("slope_risk", 50))
    historical = float(settlement_dict.get("historical_risk", 50))
    housing_vuln = float(settlement_dict.get("housing_vulnerability", 50))
    
    households = int(settlement_dict.get("households", 100))
    priority_hh = int(settlement_dict.get("priority_households", 20))
    
    # 1. Hazard Component (0–100): 50% Landslide Susceptibility + 30% Rainfall Runoff + 20% Slope Gradient
    hazard_score = (0.50 * landslide) + (0.30 * rainfall) + (0.20 * slope)

    # 2. Exposure Component (0–100): Density & Priority Households concentration
    # Normalize households (0-1000 range) & priority ratio
    priority_ratio = (priority_hh / max(households, 1)) * 100.0
    hh_scale = min(100.0, (households / 600.0) * 100.0)
    exposure_score = (0.60 * priority_ratio) + (0.40 * hh_scale)

    # 3. Vulnerability Component (0–100): Housing structure & historical soil saturation
    vulnerability_score = (0.60 * housing_vuln) + (0.40 * historical)

    # 4. Trend Component (0–100): Monsoonal recurrence & micro-catchment destabilization
    trend_score = (0.70 * rainfall) + (0.30 * historical)

    # Total Weighted Risk Score
    total_risk = (
        (settings.WEIGHT_HAZARD * hazard_score) +
        (settings.WEIGHT_EXPOSURE * exposure_score) +
        (settings.WEIGHT_VULNERABILITY * vulnerability_score) +
        (settings.WEIGHT_TREND * trend_score)
    )
    total_risk = round(min(100.0, max(0.0, total_risk)), 1)
    risk_level = compute_risk_level(total_risk)

    # Factor contributions (Points contributed to the total score)
    hazard_contrib = round(settings.WEIGHT_HAZARD * hazard_score, 1)
    exposure_contrib = round(settings.WEIGHT_EXPOSURE * exposure_score, 1)
    vuln_contrib = round(settings.WEIGHT_VULNERABILITY * vulnerability_score, 1)
    trend_contrib = round(settings.WEIGHT_TREND * trend_score, 1)

    factors: List[RiskFactor] = [
        RiskFactor(
            name="Hazard & Debris Flow",
            factor="hazard",
            value=round(hazard_score, 1),
            contribution=hazard_contrib,
            contribution_percentage=round((hazard_contrib / max(total_risk, 0.1)) * 100.0, 1),
            explanation=f"High slope gradient (>30°) and intense precipitation saturation driving landslide susceptibility."
        ),
        RiskFactor(
            name="Population & Priority Exposure",
            factor="exposure",
            value=round(exposure_score, 1),
            contribution=exposure_contrib,
            contribution_percentage=round((exposure_contrib / max(total_risk, 0.1)) * 100.0, 1),
            explanation=f"{priority_hh} vulnerable households ({round(priority_ratio, 1)}% of settlement) situated within direct runout path."
        ),
        RiskFactor(
            name="Structural Vulnerability",
            factor="vulnerability",
            value=round(vulnerability_score, 1),
            contribution=vuln_contrib,
            contribution_percentage=round((vuln_contrib / max(total_risk, 0.1)) * 100.0, 1),
            explanation=f"Kutcha/semi-pucca estate housing structures on non-cohesive overburden layer."
        ),
        RiskFactor(
            name="Historical & Climate Trend",
            factor="trend",
            value=round(trend_score, 1),
            contribution=trend_contrib,
            contribution_percentage=round((trend_contrib / max(total_risk, 0.1)) * 100.0, 1),
            explanation=f"Recurring 24-hr rainfall bursts exceeding 300mm combined with antecedent moisture index."
        )
    ]

    components = {
        "hazard_score": round(hazard_score, 1),
        "exposure_score": round(exposure_score, 1),
        "vulnerability_score": round(vulnerability_score, 1),
        "trend_score": round(trend_score, 1)
    }

    summary = (
        f"Settlement evaluated at {total_risk}/100 ({risk_level} RISK). "
        f"Hazard contribution accounts for {hazard_contrib} pts, followed by exposure ({exposure_contrib} pts). "
        f"{'Immediate relocation planning recommended.' if total_risk >= settings.RISK_HIGH else 'Targeted structural mitigation and monitoring required.'}"
    )

    return total_risk, risk_level, components, factors, summary
