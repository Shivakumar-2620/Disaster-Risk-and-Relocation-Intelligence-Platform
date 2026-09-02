"""
Candidate Relocation Sites API routes.
"""
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.site import CandidateRelocationSite
from app.schemas.site import (
    SiteResponse,
    SiteDetailResponse,
    SiteRevalidateResponse,
    SiteCompareRequest,
    SiteCompareResponse,
)
from app.services.relocation_engine import (
    build_revalidation_payload,
    compare_candidate_sites,
    evaluate_site_revalidation,
)

router = APIRouter(prefix="/api", tags=["Candidate Sites"])


@router.get("/sites", response_model=List[SiteResponse])
def get_all_candidate_sites(db: Session = Depends(get_db)):
    """
    Returns list of all surveyed candidate relocation sites.
    """
    sites = db.query(CandidateRelocationSite).order_by(CandidateRelocationSite.overall_score.desc()).all()
    return sites


@router.get("/sites/{site_id}", response_model=SiteDetailResponse)
def get_site_details(site_id: int, db: Session = Depends(get_db)):
    """
    Returns granular geotechnical and infrastructural scores for a candidate site.
    """
    site = db.query(CandidateRelocationSite).filter(CandidateRelocationSite.id == site_id).first()
    if not site:
        raise HTTPException(status_code=404, detail="Relocation site not found")

    site_dict = {
        "safety_score": site.safety_score,
        "future_risk": site.future_risk,
        "accessibility_score": site.accessibility_score,
        "capacity": site.capacity,
        "infrastructure_score": site.infrastructure_score,
        "cost_score": site.cost_score,
        "landslide_risk": site.landslide_risk,
        "flood_risk": site.flood_risk,
    }
    score, status, reasons = evaluate_site_revalidation(site_dict)

    return SiteDetailResponse(
        id=site.id,
        name=site.name,
        location=site.location,
        latitude=site.latitude,
        longitude=site.longitude,
        safety_score=site.safety_score,
        landslide_risk=site.landslide_risk,
        flood_risk=site.flood_risk,
        terrain_score=site.terrain_score,
        accessibility_score=site.accessibility_score,
        infrastructure_score=site.infrastructure_score,
        capacity=site.capacity,
        future_risk=site.future_risk,
        cost_score=site.cost_score,
        description=site.description,
        distance_km_from_epicenter=site.distance_km_from_epicenter,
        overall_score=score,
        status=status,
        reasons=reasons,
        revalidation_notice="Recommended for further administrative verification.",
    )


@router.post("/sites/{site_id}/revalidate", response_model=SiteRevalidateResponse)
def revalidate_candidate_site(site_id: int, db: Session = Depends(get_db)):
    """
    Executes Destination Revalidation Engine on a candidate site.
    Calculates safety, future resilience, accessibility, capacity, and statutory reasons.
    """
    site = db.query(CandidateRelocationSite).filter(CandidateRelocationSite.id == site_id).first()
    if not site:
        raise HTTPException(status_code=404, detail="Relocation site not found")

    return build_revalidation_payload(site)


@router.post("/sites/compare", response_model=SiteCompareResponse)
def compare_sites_matrix(payload: SiteCompareRequest, db: Session = Depends(get_db)):
    """
    Compares two or more candidate sites side-by-side across all geotechnical and logistical dimensions.
    """
    if not payload.site_ids:
        raise HTTPException(status_code=400, detail="Must provide at least one site ID")

    sites = db.query(CandidateRelocationSite).filter(CandidateRelocationSite.id.in_(payload.site_ids)).all()
    if not sites:
        raise HTTPException(status_code=404, detail="No matching relocation sites found")

    items, top_site = compare_candidate_sites(sites)

    return SiteCompareResponse(
        sites_compared=len(items),
        top_recommended_site_id=top_site.id if top_site else None,
        top_recommended_site_name=top_site.name if top_site else None,
        comparison_table=items,
        statutory_note="Recommended for further administrative verification.",
    )
