# Wayanad Disaster Risk & Relocation Intelligence API

> **Smart India Hackathon (SIH) Prototype Backend**  
> Rule-based disaster risk assessment and transparent destination revalidation engine focused on the **July 2024 Wayanad Landslides (Meppadi - Chooralmala - Mundakkai)** resettlement planning.

---

## 🏗️ Architecture & Technology Stack

- **Framework:** FastAPI (Python 3.11+)
- **Validation & Serialization:** Pydantic v2
- **ORM & Database:** SQLAlchemy with SQLite (configured for seamless one-line swap to PostgreSQL + PostGIS via `.env`)
- **Server:** Uvicorn ASGI Server
- **CORS Enabled:** Supports React/Vite dev ports (`http://localhost:3000`, `http://localhost:5173`, `http://localhost:5174`)
- **Architecture Principle:** No unnecessary heavy distributed systems (no Redis, Kafka, Celery, Kubernetes, or complex auth) — lightweight, stable, modular, and easy to run locally.

---

## 🚀 Quickstart Guide

### 1. Create Virtual Environment & Install Dependencies

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Configure Environment (Optional)

```bash
cp .env.example .env
```

### 3. Seed Database with Wayanad Demo Dataset

```bash
python seed.py
```

### 4. Start Development Server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

- **API Root:** [http://localhost:8000/](http://localhost:8000/)
- **Swagger Interactive UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc UI:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 🔄 Core Product Decision Workflow

The backend directly powers this step-by-step user journey:

```
Hazard Data & GIS Runout Polygons
              ↓
  Rule-Based Risk Engine (GET /api/settlements/{id}/why)
              ↓
  Exposed / Priority Households Identification
              ↓
  Candidate Relocation Sites (GET /api/settlements/{id}/sites)
              ↓
  Destination Revalidation Engine (POST /api/sites/{id}/revalidate)
              ↓
  Multi-Site Comparison Matrix (POST /api/sites/compare)
              ↓
  What-If Climate Perturbation Test (POST /api/scenario)
              ↓
  Final Recommendation (GET /api/recommendation/{id})
              ↓
  Cabinet Decision Dossier Report (GET /api/report/{id})
```

---

## 🧮 Transparent Engine Formulas

### 1. Risk Engine (`app/services/risk_engine.py`)
No black-box ML models. All factors and weights are fully explainable:
$$\text{Risk Score} = 40\% \text{ Hazard} + 25\% \text{ Exposure} + 20\% \text{ Vulnerability} + 15\% \text{ Trend}$$

- `80 – 100`: **CRITICAL**
- `60 – 79`: **HIGH**
- `40 – 59`: **MODERATE**
- `0 – 39`: **LOW**

### 2. Destination Revalidation Engine (`app/services/relocation_engine.py`)
$$\text{Destination Score} = 40\% \text{ Safety} + 20\% \text{ Future Resilience} + 15\% \text{ Accessibility} + 10\% \text{ Capacity} + 10\% \text{ Infra} + 5\% \text{ Cost}$$

- `80 – 100`: **PASSED**
- `60 – 79`: **CONDITIONAL**
- `0 – 59`: **REJECTED**

> **Statutory Notice:** All endpoints issue: *"Recommended for further administrative verification."* (No automatic legal claim).

---

## 📡 Complete REST API Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/dashboard` | `GET` | District overview, summary statistics, household counters |
| `/api/risk-map` | `GET` | GIS map data containing settlements, candidate sites, and polygons |
| `/api/settlements` | `GET` | List all 7 Wayanad surveyed settlements with risk scores |
| `/api/settlements/{id}` | `GET` | Granular settlement hazard, exposure, vulnerability breakdown |
| `/api/settlements/{id}/why` | `GET` | Transparent factor contributions and human explanation |
| `/api/settlements/{id}/sites` | `GET` | Candidate relocation sites tailored for settlement displacement |
| `/api/sites` | `GET` | List all candidate relocation sites |
| `/api/sites/{id}` | `GET` | Candidate site geotechnical profile and scores |
| `/api/sites/{id}/revalidate` | `POST` | Execute destination revalidation logic on a site |
| `/api/sites/compare` | `POST` | Compare multiple sites side-by-side (`{"site_ids": [1, 2, 3]}`) |
| `/api/scenario` | `POST` | Run what-if climate perturbation (`{"rainfall_change": 20}`) |
| `/api/recommendation/{id}` | `GET` | Final synthesized relocation recommendation |
| `/api/report/{id}` | `GET` | Complete executive decision summary JSON for report page |
| `/api/geojson/wayanad` | `GET` | Static GeoJSON FeatureCollection for Leaflet rendering |

---

## 🧪 Sample cURL Commands for Testing

```bash
# 1. District Dashboard
curl -s http://localhost:8000/api/dashboard | jq .

# 2. Risk Map
curl -s http://localhost:8000/api/risk-map | jq .

# 3. List Settlements
curl -s http://localhost:8000/api/settlements | jq .

# 4. Settlement Details (Mundakkai - ID 1)
curl -s http://localhost:8000/api/settlements/1 | jq .

# 5. Settlement "Why" Explanation
curl -s http://localhost:8000/api/settlements/1/why | jq .

# 6. Candidate Sites for Mundakkai
curl -s http://localhost:8000/api/settlements/1/sites | jq .

# 7. Site Revalidation (Site A - ID 1)
curl -X POST http://localhost:8000/api/sites/1/revalidate | jq .

# 8. Compare Sites (Sites 1, 2, and 3)
curl -X POST http://localhost:8000/api/sites/compare \
  -H "Content-Type: application/json" \
  -d '{"site_ids": [1, 2, 3]}' | jq .

# 9. What-if Scenario (+20% Extreme Monsoon Surge)
curl -X POST http://localhost:8000/api/scenario \
  -H "Content-Type: application/json" \
  -d '{"rainfall_change": 20}' | jq .

# 10. Final Relocation Recommendation
curl -s http://localhost:8000/api/recommendation/1 | jq .

# 11. Full Executive Decision Report
curl -s http://localhost:8000/api/report/1 | jq .

# 12. Wayanad GeoJSON
curl -s http://localhost:8000/api/geojson/wayanad | jq .
```
