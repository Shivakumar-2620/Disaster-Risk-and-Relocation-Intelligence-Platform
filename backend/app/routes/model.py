"""
Model Validation & Transparency API route.

Exposes ML model evaluation metrics, confusion matrix, feature importances,
cross-validation results, and model card for hackathon judges and administrators.
"""
from fastapi import APIRouter
from app.services.ml_risk_model import get_model_validation_summary

router = APIRouter(prefix="/api", tags=["Model Validation"])


@router.get("/model/validation")
def get_model_validation():
    """
    Returns comprehensive ML model validation metrics, including:
    - Model card (purpose, limitations, ethical considerations)
    - Baseline vs primary model accuracy, precision, recall, F1, ROC-AUC
    - Confusion matrix
    - 5-fold cross-validation results
    - Feature importance ranking with descriptions
    - Data provenance and methodology transparency
    """
    return get_model_validation_summary()
