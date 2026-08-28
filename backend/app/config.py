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

    # ── Scenario bounds ────────────────────────────────────────────
    SCENARIO_MIN_RAINFALL: int = -10
    SCENARIO_MAX_RAINFALL: int = 30

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
