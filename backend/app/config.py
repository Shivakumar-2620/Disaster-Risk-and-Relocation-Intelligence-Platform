"""
Application configuration. All tunable constants live here.
"""
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./wayanad.db"
    APP_TITLE: str = "Wayanad Disaster Risk & Relocation Intelligence API"
    DEBUG: bool = True

    # ── Risk-level thresholds (configurable in one place) ──────────
    RISK_CRITICAL: int = 80
    RISK_HIGH: int = 60
    RISK_MODERATE: int = 40

    # ── Risk engine weights ────────────────────────────────────────
    WEIGHT_HAZARD: float = 0.40
    WEIGHT_EXPOSURE: float = 0.25
    WEIGHT_VULNERABILITY: float = 0.20
    WEIGHT_TREND: float = 0.15

    # ── Destination revalidation weights ───────────────────────────
    DEST_WEIGHT_SAFETY: float = 0.40
    DEST_WEIGHT_FUTURE_RISK: float = 0.20
    DEST_WEIGHT_ACCESSIBILITY: float = 0.15
    DEST_WEIGHT_CAPACITY: float = 0.10
    DEST_WEIGHT_INFRASTRUCTURE: float = 0.10
    DEST_WEIGHT_COST: float = 0.05

    # ── Destination validation thresholds ──────────────────────────
    DEST_PASSED: int = 80
    DEST_CONDITIONAL: int = 60

    # ── Scenario bounds (expanded for Round-2 multi-variable engine) ──────
    SCENARIO_MIN_RAINFALL: int = -20
    SCENARIO_MAX_RAINFALL: int = 50

    # ── Hard constraint thresholds (Tier-1 disqualification) ───────────────
    HARD_CONSTRAINT_MAX_SLOPE: float = 12.0        # degrees — reject sites steeper than this
    HARD_CONSTRAINT_MIN_SCARP_BUFFER: float = 2.0  # km — reject sites closer to active scarp
    HARD_CONSTRAINT_MAX_HAZARD_SCORE: float = 30.0 # 0-100 — reject sites with hazard above this

    # ── CORS origins ───────────────────────────────────────────────
    CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
    ]

    class Config:
        env_file = ".env"


settings = Settings()
