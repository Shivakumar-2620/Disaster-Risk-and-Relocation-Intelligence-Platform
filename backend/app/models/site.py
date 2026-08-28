"""SQLAlchemy model – Candidate Relocation Site."""
from sqlalchemy import Column, Integer, String, Float, Text, JSON
from app.database import Base


class CandidateRelocationSite(Base):
    __tablename__ = "candidate_sites"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    location = Column(String(120), default="")
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)

    # Core evaluation criteria (0–100 scale)
    safety_score = Column(Float, default=0.0)          # Higher is safer
    landslide_risk = Column(Float, default=0.0)        # Lower is safer
    flood_risk = Column(Float, default=0.0)            # Lower is safer
    terrain_score = Column(Float, default=0.0)         # Stability / slope appropriateness
    accessibility_score = Column(Float, default=0.0)   # Road/transport connectivity
    infrastructure_score = Column(Float, default=0.0) # Water, power, health, schools
    capacity = Column(Integer, default=0)              # Max households
    future_risk = Column(Float, default=0.0)           # 20-50 yr climate projection hazard
    cost_score = Column(Float, default=0.0)            # Land acquisition & prep feasibility

    overall_score = Column(Float, default=0.0)
    status = Column(String(30), default="CONDITIONAL") # PASSED, CONDITIONAL, REJECTED
    reasons = Column(JSON, default=list)               # List of justification strings
    description = Column(Text, default="")
    distance_km_from_epicenter = Column(Float, default=0.0)
