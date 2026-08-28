"""SQLAlchemy model – Settlement (at-risk community)."""
from sqlalchemy import Column, Integer, String, Float, Text
from app.database import Base


class Settlement(Base):
    __tablename__ = "settlements"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    risk_score = Column(Float, default=0.0)
    risk_level = Column(String(20), default="LOW")
    population = Column(Integer, default=0)
    households = Column(Integer, default=0)
    priority_households = Column(Integer, default=0)

    # Sub-scores (0–100)
    landslide_risk = Column(Float, default=0.0)
    rainfall_risk = Column(Float, default=0.0)
    slope_risk = Column(Float, default=0.0)
    historical_risk = Column(Float, default=0.0)
    housing_vulnerability = Column(Float, default=0.0)

    description = Column(Text, default="")
