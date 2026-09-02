"""SQLAlchemy model – What-if Simulation Scenario."""
from sqlalchemy import Column, Integer, String, Float, JSON, Text
from app.database import Base


class Scenario(Base):
    __tablename__ = "scenarios"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    description = Column(Text, default="")
    rainfall_change = Column(Float, default=0.0) # Percentage change e.g. -10 to +30
    site_scores = Column(JSON, default=dict)     # Map of site_id -> updated score
    recommendation = Column(String(120), default="")
