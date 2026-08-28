"""
Automated Test Suite for Wayanad Disaster Risk & Relocation Intelligence API.

Tests all 14 endpoints and verifies payload contracts, status codes, and engine calculations.
"""
import sys
import json
import urllib.request
import urllib.error

BASE_URL = "http://localhost:8000"


def make_request(path: str, method: str = "GET", data: dict = None):
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
    print("=" * 70)
    print("🧪 RUNNING COMPREHENSIVE BACKEND API TEST SUITE")
    print("=" * 70)

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
    assert_test("GET /api/dashboard", s == 200 and r.get("high_risk_settlements") >= 4 and "summary_statistics" in r)

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

    # 15. Scenario Validation Bounds (> 30% error)
    s, r = make_request("/api/scenario", method="POST", data={"rainfall_change": 50})
    assert_test("POST /api/scenario (50% out of bounds 400)", s == 400 and "detail" in r)

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

    print("=" * 70)
    print(f"📊 SUMMARY: {tests_passed}/{total_tests} Tests Passed ({(tests_passed/total_tests)*100:.1f}%)")
    print("=" * 70)

    if tests_passed == total_tests:
        print("🎉 ALL API ENDPOINTS VERIFIED & WORKING FLAWLESSLY!")
        return 0
    else:
        print("⚠️ Some tests failed.")
        return 1


if __name__ == "__main__":
    sys.exit(run_all_tests())
