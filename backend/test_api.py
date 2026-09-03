"""
Automated Test Suite for Wayanad Disaster Risk & Relocation Intelligence API.
Round-2 Enhanced Test Suite.

Tests all 15 endpoints and verifies:
- Original API contracts & backwards compatibility
- ML risk prediction & model validation metrics (Random Forest ROC-AUC, F1)
- Data quality badges & provenance metadata
- Two-tier destination revalidation (hard constraints + soft MCDA)
- Multi-variable scenario perturbation (rainfall + road disruption + capacity reduction)
"""
import sys
import os
import json
import urllib.request
import urllib.error

# Ensure backend root is on sys.path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

BASE_URL = "http://localhost:8000"

# Determine test client: use HTTP if server running, else in-memory TestClient
_use_test_client = False
_client = None

try:
    req = urllib.request.Request(f"{BASE_URL}/", headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=1) as resp:
        if resp.status == 200:
            print("  🌐 Connecting to running server at http://localhost:8000")
except Exception:
    _use_test_client = True
    print("  ⚡ Live server not detected; using in-memory FastAPI TestClient")
    from fastapi.testclient import TestClient
    from app.main import app
    _client = TestClient(app)


def make_request(path: str, method: str = "GET", data: dict = None):
    if _use_test_client:
        if method == "GET":
            resp = _client.get(path)
        elif method == "POST":
            resp = _client.post(path, json=data)
        else:
            resp = _client.request(method, path, json=data)
        try:
            return resp.status_code, resp.json()
        except Exception:
            return resp.status_code, {"raw": resp.text}
    else:
        url = f"{BASE_URL}{path}"
        headers = {"Content-Type": "application/json"}
        body = json.dumps(data).encode("utf-8") if data else None
        req = urllib.request.Request(url, data=body, headers=headers, method=method)
        try:
            with urllib.request.urlopen(req) as resp:
                status = resp.status
                content = resp.read().decode("utf-8")
                return status, json.loads(content)
        except urllib.error.HTTPError as e:
            content = e.read().decode("utf-8")
            try:
                return e.code, json.loads(content)
            except Exception:
                return e.code, {"raw": content}


def run_all_tests():
    print("=" * 75)
    print("🧪 RUNNING COMPREHENSIVE BACKEND API TEST SUITE (ROUND-2)")
    print("=" * 75)

    tests_passed = 0
    total_tests = 0

    def assert_test(name: str, condition: bool, details: str = ""):
        nonlocal tests_passed, total_tests
        total_tests += 1
        if condition:
            tests_passed += 1
            print(f"  ✅ PASS: {name}")
        else:
            print(f"  ❌ FAIL: {name} | {details}")

    # 1. Health / Root
    s, r = make_request("/")
    assert_test("GET / (Root Welcome)", s == 200 and r.get("status") == "online")

    # 2. Dashboard
    s, r = make_request("/api/dashboard")
    assert_test("GET /api/dashboard", s == 200 and r.get("high_risk_settlements", 0) >= 4 and "summary_statistics" in r)

    # 3. Risk Map
    s, r = make_request("/api/risk-map")
    assert_test("GET /api/risk-map", s == 200 and len(r.get("settlements", [])) >= 5 and "geojson" in r)

    # 4. Settlements List
    s, r = make_request("/api/settlements")
    assert_test("GET /api/settlements", s == 200 and len(r) >= 7 and r[0]["risk_score"] >= r[-1]["risk_score"])

    # 5. Settlement Details (Mundakkai - ID 1)
    s, r = make_request("/api/settlements/1")
    assert_test(
        "GET /api/settlements/1",
        s == 200 and r.get("name") == "Mundakkai" and r.get("risk_level") == "CRITICAL" and len(r.get("factors", [])) == 4
    )

    # 6. Settlement 404
    s, r = make_request("/api/settlements/999")
    assert_test("GET /api/settlements/999 (404 Not Found)", s == 404 and "detail" in r)

    # 7. Settlement "Why" Explanation
    s, r = make_request("/api/settlements/1/why")
    assert_test("GET /api/settlements/1/why", s == 200 and len(r.get("factors", [])) > 0 and "summary_explanation" in r)

    # 8. Candidate Sites for Settlement
    s, r = make_request("/api/settlements/1/sites")
    assert_test("GET /api/settlements/1/sites", s == 200 and len(r) >= 3 and r[0]["overall_score"] >= 80)

    # 9. Candidate Sites List
    s, r = make_request("/api/sites")
    assert_test("GET /api/sites", s == 200 and len(r) >= 4)

    # 10. Site Details
    s, r = make_request("/api/sites/1")
    assert_test(
        "GET /api/sites/1",
        s == 200 and r.get("status") == "PASSED" and "Recommended for further administrative verification." in r.get("revalidation_notice", "")
    )

    # 11. Revalidate Site POST
    s, r = make_request("/api/sites/1/revalidate", method="POST")
    assert_test(
        "POST /api/sites/1/revalidate",
        s == 200 and r.get("validation_status") == "PASSED" and len(r.get("reasons", [])) >= 2
    )

    # 12. Compare Sites POST
    s, r = make_request("/api/sites/compare", method="POST", data={"site_ids": [1, 2, 3]})
    assert_test(
        "POST /api/sites/compare",
        s == 200 and r.get("sites_compared") == 3 and r.get("top_recommended_site_id") == 1
    )

    # 13. Scenario Simulation Normal (+0%)
    s, r = make_request("/api/scenario", method="POST", data={"rainfall_change": 0})
    assert_test(
        "POST /api/scenario (0% normal)",
        s == 200 and r.get("simulation_label") == "SIMULATED SCENARIO" and r.get("recommended_site_id") == 1
    )

    # 14. Scenario Simulation Extreme (+20% surge - Recommendation shifts to Site B)
    s, r = make_request("/api/scenario", method="POST", data={"rainfall_change": 20})
    assert_test(
        "POST /api/scenario (+20% cloudburst)",
        s == 200 and r.get("recommended_site_id") == 2 and r.get("rainfall_change") == 20
    )

    # 15. Scenario Validation Bounds (> 50% error)
    s, r = make_request("/api/scenario", method="POST", data={"rainfall_change": 80})
    assert_test("POST /api/scenario (80% out of bounds 400)", s == 400 and "detail" in r)

    # 16. Final Recommendation
    s, r = make_request("/api/recommendation/1")
    assert_test(
        "GET /api/recommendation/1",
        s == 200 and r.get("origin") == "Mundakkai" and r.get("recommended_site_id") == 1 and "status" in r
    )

    # 17. Executive Decision Report
    s, r = make_request("/api/report/1")
    assert_test(
        "GET /api/report/1",
        s == 200 and r.get("statutory_dossier_no") == "G.O. (Ms) No. 114/2026/DMD" and "inter_departmental_checklist" in r
    )

    # 18. GeoJSON Wayanad
    s, r = make_request("/api/geojson/wayanad")
    assert_test(
        "GET /api/geojson/wayanad",
        s == 200 and r.get("type") == "FeatureCollection" and len(r.get("features", [])) >= 10
    )

    # =========================================================================
    # ROUND-2 NEW VERIFICATION TESTS
    # =========================================================================

    # 19. Model Validation API
    s, r = make_request("/api/model/validation")
    rf_auc = r.get("primary_model", {}).get("metrics", {}).get("roc_auc", 0)
    rf_acc = r.get("primary_model", {}).get("metrics", {}).get("accuracy", 0)
    has_card = "model_card" in r and "confusion_matrix" in r and "feature_importance" in r
    assert_test(
        "GET /api/model/validation (ML Metrics & Card)",
        s == 200 and rf_auc >= 0.85 and rf_acc >= 0.80 and has_card,
        f"Status: {s}, RF AUC: {rf_auc}, RF Acc: {rf_acc}"
    )

    # 20. Settlement ML Prediction & Data Quality
    s, r = make_request("/api/settlements/1")
    ml_pred = r.get("ml_prediction")
    dq = r.get("data_quality")
    has_ml = ml_pred is not None and "ml_susceptibility_score" in ml_pred and len(ml_pred.get("top_risk_drivers", [])) > 0
    has_dq = dq is not None and dq.get("data_quality") in ["HIGH", "MEDIUM", "LOW"] and "provenance" in dq
    assert_test(
        "GET /api/settlements/1 (ML Prediction & Provenance)",
        s == 200 and has_ml and has_dq,
        f"has_ml: {has_ml}, has_dq: {has_dq}"
    )

    # 21. Tier-1 Hard Constraints Passed on Site 1
    s, r = make_request("/api/sites/1/revalidate", method="POST")
    hc = r.get("hard_constraints")
    hc_pass = hc is not None and hc.get("all_passed") is True and hc.get("total_constraints") == 4
    assert_test(
        "POST /api/sites/1/revalidate (Hard Constraints Qualified)",
        s == 200 and hc_pass and r.get("validation_status") == "PASSED",
        f"hc_pass: {hc_pass}"
    )

    # 22. Tier-1 Hard Constraint Disqualification on Site 3 (Sultan Bathery East slope)
    s, r = make_request("/api/sites/3/revalidate", method="POST")
    hc3 = r.get("hard_constraints")
    hc3_fail = hc3 is not None and hc3.get("all_passed") is False
    assert_test(
        "POST /api/sites/3/revalidate (Hard Constraint Disqualification)",
        s == 200 and hc3_fail and r.get("validation_status") == "REJECTED",
        f"hc3_fail: {hc3_fail}, status: {r.get('validation_status')}"
    )

    # 23. Multi-Variable Scenario: Rainfall + Road Disruption
    s, r = make_request(
        "/api/scenario",
        method="POST",
        data={"rainfall_change": 20, "road_access_disruption": True}
    )
    has_strategy = "contingency_strategy" in r and r.get("contingency_strategy") is not None
    assert_test(
        "POST /api/scenario (Rainfall + Road Disruption)",
        s == 200 and r.get("road_access_disruption") is True and r.get("recommended_site_id") == 2 and has_strategy,
        f"rec_site: {r.get('recommended_site_id')}, has_strategy: {has_strategy}"
    )

    # 24. Multi-Variable Scenario: Capacity Reduction & Split-Allocation
    s, r = make_request(
        "/api/scenario",
        method="POST",
        data={"rainfall_change": 0, "capacity_reduction": 40}
    )
    split = r.get("split_allocation")
    has_split = split is not None and "phase_1" in split and "phase_2" in split
    assert_test(
        "POST /api/scenario (Capacity Reduction & Split Allocation)",
        s == 200 and r.get("capacity_reduction") == 40 and has_split,
        f"has_split: {has_split}"
    )

    print("=" * 75)
    print(f"📊 SUMMARY: {tests_passed}/{total_tests} Tests Passed ({(tests_passed/total_tests)*100:.1f}%)")
    print("=" * 75)

    if tests_passed == total_tests:
        print("🎉 ALL 24 API ENDPOINTS & ROUND-2 CAPABILITIES VERIFIED FLAWLESSLY!")
        return 0
    else:
        print("⚠️ Some tests failed.")
        return 1


if __name__ == "__main__":
    sys.exit(run_all_tests())
