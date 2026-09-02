"""Pydantic schemas for Candidate Relocation Sites."""
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field


class SiteBase(BaseModel):
    name: str
    location: str = ""
    latitude: float
    longitude: float
    safety_score: float = 0.0
    landslide_risk: float = 0.0
    flood_risk: float = 0.0
    terrain_score: float = 0.0
    accessibility_score: float = 0.0
    infrastructure_score: float = 0.0
    capacity: int = 0
    future_risk: float = 0.0
    cost_score: float = 0.0
    description: Optional[str] = ""
    distance_km_from_epicenter: float = 0.0


class SiteResponse(SiteBase):
    id: int
    overall_score: float
    status: str
    reasons: List[str] = []
    hard_constraints: Optional[Dict[str, Any]] = None

    class Config:
        from_attributes = True


class SiteDetailResponse(SiteResponse):
    revalidation_notice: str = "Recommended for further administrative verification."


class SiteRevalidateResponse(BaseModel):
    site_id: int
    site_name: str
    overall_score: float
    current_risk: float
    future_risk: float
    safety_score: float
    accessibility: float
    infrastructure: float
    capacity: int
    cost_score: float
    validation_status: str
    status: str
    reasons: List[str]
    hard_constraints: Optional[Dict[str, Any]] = None
    statutory_note: str = "Recommended for further administrative verification."


class SiteCompareRequest(BaseModel):
    site_ids: List[int] = Field(..., min_length=1, description="List of site IDs to compare")


class SiteComparisonItem(BaseModel):
    id: int
    name: str
    location: str
    overall_score: float
    status: str
    safety_score: float
    landslide_risk: float
    flood_risk: float
    terrain_score: float
    accessibility_score: float
    infrastructure_score: float
    capacity: int
    future_risk: float
    cost_score: float
    reasons: List[str]
    hard_constraints: Optional[Dict[str, Any]] = None


class SiteCompareResponse(BaseModel):
    sites_compared: int
    top_recommended_site_id: Optional[int] = None
    top_recommended_site_name: Optional[str] = None
    comparison_table: List[SiteComparisonItem]
    statutory_note: str = "Recommended for further administrative verification."
