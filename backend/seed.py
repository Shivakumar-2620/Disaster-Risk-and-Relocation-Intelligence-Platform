"""
Database Seed Script – Wayanad Disaster Risk & Relocation Intelligence Platform.

Populates SQLite database with realistic synthetic data for 7 Wayanad settlements,
4 candidate relocation sites, and scenario presets.
"""
import os
import sys
import json

# Ensure backend root is on Python path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from app.database import engine, SessionLocal, Base
from app.models.settlement import Settlement
from app.models.site import CandidateRelocationSite
from app.models.scenario import Scenario
from app.services.risk_engine import evaluate_settlement_risk
from app.services.relocation_engine import evaluate_site_revalidation

DATA_DIR = os.path.join(os.path.dirname(__file__), "app", "data")


def seed_database():
    print("🚀 Initializing Database and Creating Schema...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        # 1. Seed Settlements
        settlements_file = os.path.join(DATA_DIR, "settlements.json")
        with open(settlements_file, "r", encoding="utf-8") as f:
            settlements_data = json.load(f)

        print(f"📦 Seeding {len(settlements_data)} Settlements...")
        for item in settlements_data:
            risk_score, risk_level, _, _, _ = evaluate_settlement_risk(item)
            settlement = Settlement(
                id=item.get("id"),
                name=item["name"],
                latitude=item["latitude"],
                longitude=item["longitude"],
                risk_score=risk_score,
                risk_level=risk_level,
                population=item.get("population", 0),
                households=item.get("households", 0),
                priority_households=item.get("priority_households", 0),
                landslide_risk=item.get("landslide_risk", 0.0),
                rainfall_risk=item.get("rainfall_risk", 0.0),
                slope_risk=item.get("slope_risk", 0.0),
                historical_risk=item.get("historical_risk", 0.0),
                housing_vulnerability=item.get("housing_vulnerability", 0.0),
                description=item.get("description", ""),
            )
            db.add(settlement)
            print(f"  • Added Settlement: {item['name']} (Risk: {risk_score} - {risk_level})")

        # 2. Seed Candidate Sites
        sites_file = os.path.join(DATA_DIR, "sites.json")
        with open(sites_file, "r", encoding="utf-8") as f:
            sites_data = json.load(f)

        print(f"\n📦 Seeding {len(sites_data)} Candidate Relocation Sites...")
        for item in sites_data:
            overall_score, status, reasons = evaluate_site_revalidation(item)
            site = CandidateRelocationSite(
                id=item.get("id"),
                name=item["name"],
                location=item.get("location", ""),
                latitude=item["latitude"],
                longitude=item["longitude"],
                safety_score=item.get("safety_score", 0.0),
                landslide_risk=item.get("landslide_risk", 0.0),
                flood_risk=item.get("flood_risk", 0.0),
                terrain_score=item.get("terrain_score", 0.0),
                accessibility_score=item.get("accessibility_score", 0.0),
                infrastructure_score=item.get("infrastructure_score", 0.0),
                capacity=item.get("capacity", 0),
                future_risk=item.get("future_risk", 0.0),
                cost_score=item.get("cost_score", 0.0),
                overall_score=overall_score,
                status=status,
                reasons=reasons or item.get("reasons", []),
                description=item.get("description", ""),
                distance_km_from_epicenter=item.get("distance_km_from_epicenter", 0.0),
            )
            db.add(site)
            print(f"  • Added Site: {item['name']} (Score: {overall_score} - {status})")

        # 3. Seed Scenarios
        scenarios_file = os.path.join(DATA_DIR, "scenarios.json")
        if os.path.exists(scenarios_file):
            with open(scenarios_file, "r", encoding="utf-8") as f:
                scenarios_data = json.load(f)

            print(f"\n📦 Seeding {len(scenarios_data)} Scenario Presets...")
            for item in scenarios_data:
                sc = Scenario(
                    id=item.get("id"),
                    name=item["name"],
                    rainfall_change=item.get("rainfall_change", 0.0),
                    description=item.get("description", ""),
                    site_scores=item.get("site_scores", {}),
                    recommendation=item.get("recommendation", ""),
                )
                db.add(sc)
                print(f"  • Added Scenario: {item['name']}")

        db.commit()
        print("\n✅ Database seeding successfully completed!")
        print(f"   Database file: {engine.url.database}")

    except Exception as e:
        db.rollback()
        print(f"❌ Error seeding database: {e}")
        raise e
    finally:
        db.close()


if __name__ == "__main__":
    seed_database()
