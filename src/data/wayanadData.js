/**
 * Comprehensive Dataset for Wayanad Disaster Management & Relocation Decision Portal
 * Official Kerala State Disaster Management Authority (KSDMA) Data Model
 */

export const WAYANAD_DATA = {
  district: {
    name: "Wayanad",
    state: "Kerala",
    taluks: ["Vythiri", "Mananthavady", "Sulthan Bathery"],
    affectedPanchayats: ["Meppadi", "Muppainad", "Pozhuthana", "Vythiri", "Vellarimala"],
    overviewStats: {
      displacedHouseholds: 3420,
      activeReliefCamps: 48,
      criticalRiskZones: 14,
      allocatedBudgetCr: 428.50,
      totalLivesAtRisk: 12850,
      transitHousingConstructed: 1840,
      rainfallLast24hMm: 168.4
    }
  },

  currentUserProfiles: [
    {
      id: "collector",
      name: "Dr. A. K. Vasudevan, IAS",
      role: "District Magistrate & Chairman, DDMA",
      clearance: "LEVEL 5 (Full Executive Clearance)",
      department: "District Administration, Wayanad",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "geologist",
      name: "Dr. Rachel Thomas, Ph.D.",
      role: "Chief Hazard Geologist",
      clearance: "LEVEL 4 (Scientific Assessment)",
      department: "Geological Survey of India (GSI)",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "revenue",
      name: "K. R. Sivadasan",
      role: "Revenue Divisional Officer (RDO)",
      clearance: "LEVEL 4 (Land Title & Allocation)",
      department: "Department of Revenue, Govt. of Kerala",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    }
  ],

  settlements: [
    {
      id: "mundakkai",
      name: "Mundakkai",
      panchayat: "Meppadi",
      zoneCode: "ZN-WAY-04A",
      riskLevel: "CRITICAL",
      riskScore: 9.4,
      coordinates: [11.5284, 76.1512],
      elevation: "940m MSL",
      slopeAngle: "38.5°",
      rainfall24h: "184.2 mm",
      displacedFamilies: 840,
      totalPopulation: 3120,
      inhabitedStructures: 642,
      debrisFlowVulnerability: 94,
      slopeRunoffIndex: 88,
      soilLiquefactionIndex: 82,
      regolithDepth: "4.8 meters",
      bedrockType: "Charnockite & Gneissic Complex",
      demographics: {
        elderlyAndDisabled: 142,
        childrenUnder10: 215,
        femaleHeadedHouseholds: 98,
        livestockHoldings: 480,
        bplRatio: "76%"
      },
      criticalInfrastructureLoss: [
        "Mundakkai LP School (Submerged)",
        "Punchirimattam Access Bridge (Severed)",
        "Primary Health Sub-centre (Unsafe)"
      ],
      hazardSummary: "Catastrophic debris flow path originating from upper catchment of Punchirimattam. Severe regolith failure on >35° slopes with high pore-water saturation.",
      recommendedAction: "MANDATORY FULL SETTLEMENT RELOCATION (100% Evacuate)",
      mlSusceptibility: 96.4,
      mlConfidence: "98.7%",
      mlRiskClass: "CRITICAL",
      dataQuality: "HIGH",
      dataQualityNote: "100% Sensor & GSI Borehole Verified",
      topDrivers: ["Slope Angle (38.5° > 30° critical limit)", "24h Rainfall Saturation (184.2 mm)", "Overburden Thickness (4.8 m)", "Stream Channel Proximity (45 m)"],
      provenance: {
        sources: [
          { agency: "Geological Survey of India (GSI)", dataset: "Wayanad Regolith & Debris Runout Survey", date: "August 2024" },
          { agency: "India Meteorological Department (IMD)", dataset: "Meppadi AWS 24h/72h Rainfall Series", date: "July 2024" },
          { agency: "ISRO / NRSC", dataset: "Cartosat-2 30m DEM Slope & Catchment Delineation", date: "2024" }
        ],
        verificationLevel: "Tier 1 — Ground Truth & Sensor Confirmed"
      }
    },
    {
      id: "chooralmala",
      name: "Chooralmala",
      panchayat: "Meppadi",
      zoneCode: "ZN-WAY-04B",
      riskLevel: "CRITICAL",
      riskScore: 9.1,
      coordinates: [11.5420, 76.1415],
      elevation: "870m MSL",
      slopeAngle: "34.0°",
      rainfall24h: "168.4 mm",
      displacedFamilies: 920,
      totalPopulation: 3580,
      inhabitedStructures: 715,
      debrisFlowVulnerability: 91,
      slopeRunoffIndex: 85,
      soilLiquefactionIndex: 78,
      regolithDepth: "4.2 meters",
      bedrockType: "Hornblende-Biotite Gneiss",
      demographics: {
        elderlyAndDisabled: 168,
        childrenUnder10: 260,
        femaleHeadedHouseholds: 114,
        livestockHoldings: 520,
        bplRatio: "72%"
      },
      criticalInfrastructureLoss: [
        "Chooralmala Bailey Bridge (Emergency Span Active)",
        "Township Commercial Core (Destroyed)",
        "Tea Estate Worker Quarters (Uninhabitable)"
      ],
      hazardSummary: "Direct alluvial fan deposit zone at confluence of stream networks. Highly compromised floodplains with high residual boulder drift hazard.",
      recommendedAction: "MANDATORY FULL SETTLEMENT RELOCATION",
      mlSusceptibility: 92.8,
      mlConfidence: "97.4%",
      mlRiskClass: "CRITICAL",
      dataQuality: "HIGH",
      dataQualityNote: "100% Sensor & Satellite Verified",
      topDrivers: ["Alluvial Confluence Surcharge", "Slope Runoff Surge (85%)", "Gneiss Bedrock Fracturing", "Bailey Bridge Bottleneck"],
      provenance: {
        sources: [
          { agency: "Geological Survey of India (GSI)", dataset: "Alluvial Fan Siltation Survey", date: "August 2024" },
          { agency: "IMD", dataset: "Meppadi Automatic Weather Station", date: "July 2024" },
          { agency: "Survey of India", dataset: "Drainage Network 1:25k Toposheet", date: "2023" }
        ],
        verificationLevel: "Tier 1 — Ground Truth Confirmed"
      }
    },
    {
      id: "attamala",
      name: "Attamala",
      panchayat: "Meppadi",
      zoneCode: "ZN-WAY-04C",
      riskLevel: "CRITICAL",
      riskScore: 9.0,
      coordinates: [11.5150, 76.1620],
      elevation: "910m MSL",
      slopeAngle: "36.2°",
      rainfall24h: "175.8 mm",
      displacedFamilies: 510,
      totalPopulation: 1980,
      inhabitedStructures: 395,
      debrisFlowVulnerability: 89,
      slopeRunoffIndex: 84,
      soilLiquefactionIndex: 76,
      regolithDepth: "3.9 meters",
      bedrockType: "Granulite Facies Charnockite",
      demographics: {
        elderlyAndDisabled: 88,
        childrenUnder10: 140,
        femaleHeadedHouseholds: 62,
        livestockHoldings: 310,
        bplRatio: "81%"
      },
      criticalInfrastructureLoss: [
        "Attamala Plantation Road (Massive Scarping)",
        "Community Water Intake Tank (Silted)"
      ],
      hazardSummary: "Isolated ridge community with single bottleneck egress road cut off by lateral rotational slumps.",
      recommendedAction: "MANDATORY RELOCATION WITH TRANSIT SHELTER",
      mlSusceptibility: 89.6,
      mlConfidence: "96.1%",
      mlRiskClass: "CRITICAL",
      dataQuality: "HIGH",
      dataQualityNote: "Sensor & Topographic Verified",
      topDrivers: ["Steep Ridge Slumping (36.2°)", "Single Egress Road Failure", "High Regolith Pore Saturation", "High BPL Ratio (81%)"],
      provenance: {
        sources: [
          { agency: "GSI / KSDMA", dataset: "Upper Ridge Slope Stability Assessment", date: "August 2024" },
          { agency: "IMD", dataset: "Radar Quantitative Precipitation Estimate", date: "July 2024" }
        ],
        verificationLevel: "Tier 1 — Field Survey Confirmed"
      }
    },
    {
      id: "vellarmala",
      name: "Vellarmala",
      panchayat: "Meppadi",
      zoneCode: "ZN-WAY-04D",
      riskLevel: "CRITICAL",
      riskScore: 9.6,
      coordinates: [11.5050, 76.1380],
      elevation: "1020m MSL",
      slopeAngle: "41.0°",
      rainfall24h: "195.0 mm",
      displacedFamilies: 500,
      totalPopulation: 1850,
      inhabitedStructures: 340,
      debrisFlowVulnerability: 96,
      slopeRunoffIndex: 93,
      soilLiquefactionIndex: 88,
      regolithDepth: "5.1 meters",
      bedrockType: "Quartzite-Banded Gneiss",
      demographics: {
        elderlyAndDisabled: 94,
        childrenUnder10: 130,
        femaleHeadedHouseholds: 55,
        livestockHoldings: 290,
        bplRatio: "84%"
      },
      criticalInfrastructureLoss: [
        "Vellarmala High School (Severe Structural Shear)",
        "Power Transmission Pylons (Uprooted)"
      ],
      hazardSummary: "Highest elevation scarp failure zone. High velocity debris torrent trigger origin.",
      recommendedAction: "NO-DEVELOPMENT BUFFER ZONE DESIGNATION",
      mlSusceptibility: 98.1,
      mlConfidence: "99.2%",
      mlRiskClass: "CRITICAL",
      dataQuality: "HIGH",
      dataQualityNote: "Post-Disaster Aerial LiDAR & GSI Core Borehole",
      topDrivers: ["Severe Scarp Angle (41.0°)", "Excess Rainfall (195 mm / 24h)", "Thick Colluvium Layer (5.1m)", "Crown Tension Cracking"],
      provenance: {
        sources: [
          { agency: "ISRO / NRSC", dataset: "Aerial Drone Photogrammetry & LiDAR", date: "August 2024" },
          { agency: "GSI", dataset: "Crown Failure Geotechnical Core Logs", date: "August 2024" }
        ],
        verificationLevel: "Tier 1 — Instrument & Drone Verified"
      }
    },
    {
      id: "meppadi",
      name: "Meppadi Central",
      panchayat: "Meppadi",
      zoneCode: "ZN-WAY-03",
      riskLevel: "HIGH",
      riskScore: 7.8,
      coordinates: [11.5540, 76.1260],
      elevation: "780m MSL",
      slopeAngle: "28.0°",
      rainfall24h: "142.6 mm",
      displacedFamilies: 650,
      totalPopulation: 2320,
      inhabitedStructures: 490,
      debrisFlowVulnerability: 74,
      slopeRunoffIndex: 71,
      soilLiquefactionIndex: 65,
      regolithDepth: "3.2 meters",
      bedrockType: "Hornblende Gneiss",
      demographics: {
        elderlyAndDisabled: 110,
        childrenUnder10: 175,
        femaleHeadedHouseholds: 74,
        livestockHoldings: 210,
        bplRatio: "58%"
      },
      criticalInfrastructureLoss: [
        "Drainage Culverts Overflowing",
        "Panchayat Stadium (Relief Distribution Hub)"
      ],
      hazardSummary: "Downstream valley buffer zone. High flash flood and inundation risk during continuous +150mm rainfall episodes.",
      recommendedAction: "SELECTIVE RETROFITTING & TRANSIT CORRIDOR",
      mlSusceptibility: 76.5,
      mlConfidence: "94.8%",
      mlRiskClass: "HIGH",
      dataQuality: "MEDIUM",
      dataQualityNote: "Hydrological Gauge & PWD Station Verified",
      topDrivers: ["Flash Flood Surcharge (71%)", "Drainage Culvert Choking", "Downstream Silt Ingress"],
      provenance: {
        sources: [
          { agency: "Central Water Commission (CWC)", dataset: "Chaliyar River Basin Gauge", date: "August 2024" },
          { agency: "Kerala PWD", dataset: "Culvert & Bridge Hydraulic Clearance", date: "2023" }
        ],
        verificationLevel: "Tier 2 — Hydrological Model Calibrated"
      }
    }
  ],

  candidateResettlementSites: [
    {
      id: "site_alpha",
      code: "SITE-A",
      name: "Kalpetta North (Site Alpha)",
      taluk: "Vythiri",
      panchayat: "Kalpetta Municipality",
      coordinates: [11.6250, 76.0820],
      distanceFromDisasterKm: 14.8,
      availableAreaAcres: 64.5,
      capacityHouseholds: 1200,
      terrainSlope: "4.5° (Gentle Plain)",
      soilStabilityScore: 9.6,
      connectivityScore: 9.2,
      utilityReadinessScore: 9.0,
      landAcquisitionCostCr: 42.0,
      infrastructureBudgetCr: 118.5,
      totalEstimatedCostCr: 160.5,
      estimatedDeliveryMonths: 14,
      gsiSafetyRating: "CLASS A (Stable Crystalline Plateau)",
      gsiBoreholeSummary: "Competent Charnockite basement at 2.1m depth. Standard Penetration Test (SPT) N-value > 50. Nil liquefaction potential.",
      waterSupply: "Direct gravity conduit from Banasura Sagar feeder pipeline",
      powerGrid: "33/11 kV Kalpetta North Substation proximity (0.8 km)",
      accessRoad: "14m wide state highway spur with dual arterial connectivity",
      status: "PRIMARY RECOMMENDED SITE",
      signoffs: {
        revenue: { status: "APPROVED", officer: "K. R. Sivadasan (RDO)", date: "26-08-2026", note: "Govt. Vested Land (Survey No. 412/1A). Title clean, unencumbered." },
        forest: { status: "APPROVED", officer: "Dr. P. G. Nair (CF, Wildlife)", date: "27-08-2026", note: "Located 3.4km beyond Wildlife Sanctuary buffer. No clearance required." },
        pwd: { status: "APPROVED", officer: "Er. K. Mohandas (EE, PWD Roads)", date: "27-08-2026", note: "Road gradient 1:18, dual drainage engineered. Heavy vehicle certified." },
        ksdma: { status: "APPROVED", officer: "Dr. Rachel Thomas (Chief Geologist)", date: "28-08-2026", note: "Safe contour >760m MSL. Landslide susceptibility index: 0.04 (Negligible)." }
      },
      hardConstraints: {
        allPassed: true,
        tier1Status: "QUALIFIED",
        passedCount: 4,
        totalConstraints: 4,
        items: [
          { name: "Slope Gradient", threshold: "≤ 12.0°", actual: "4.5°", status: "PASS", detail: "Gentle crystalline plain safely below 12° statutory limit" },
          { name: "Active Scarp Buffer", threshold: "≥ 2.0 km", actual: "14.8 km", status: "PASS", detail: "14.8 km clearance from Meppadi-Mundakkai runout path" },
          { name: "Residual Hazard Score", threshold: "≤ 30/100", actual: "7.2/100", status: "PASS", detail: "Charnockite crystalline basement with negligible slip hazard" },
          { name: "Ecological Clearance", threshold: "Clear of Corridor", actual: "3.4 km buffer", status: "PASS", detail: "3.4 km beyond Wildlife Sanctuary eco-sensitive buffer" }
        ]
      }
    },
    {
      id: "site_beta",
      code: "SITE-B",
      name: "Mananthavady South (Site Beta)",
      taluk: "Mananthavady",
      panchayat: "Mananthavady",
      coordinates: [11.7850, 76.0120],
      distanceFromDisasterKm: 32.4,
      availableAreaAcres: 88.0,
      capacityHouseholds: 1500,
      terrainSlope: "6.2° (Undulating Terrace)",
      soilStabilityScore: 8.8,
      connectivityScore: 7.4,
      utilityReadinessScore: 7.8,
      landAcquisitionCostCr: 34.0,
      infrastructureBudgetCr: 132.0,
      totalEstimatedCostCr: 166.0,
      estimatedDeliveryMonths: 18,
      gsiSafetyRating: "CLASS B+ (Moderately Stable Terrace)",
      gsiBoreholeSummary: "Lateritic overburden with hard lithomargic clay. Bedrock at 5.4m depth. Adequate load-bearing capacity for G+1 residential modules.",
      waterSupply: "Kabini river auxiliary intake project required (2.5 km pipeline)",
      powerGrid: "11 kV feeder expansion required",
      accessRoad: "8m wide district road requiring 4km widening",
      status: "SECONDARY CONTINGENCY SITE",
      signoffs: {
        revenue: { status: "APPROVED", officer: "T. C. Mathew (Tahsildar)", date: "25-08-2026", note: "Joint Revenue-Panchayat land pool." },
        forest: { status: "PENDING", officer: "Divisional Forest Officer", date: "Awaiting review", note: "Near territorial teak buffer; alignment under survey." },
        pwd: { status: "APPROVED", officer: "Asst. Exec. Engineer, PWD", date: "26-08-2026", note: "Widening estimate submitted." },
        ksdma: { status: "APPROVED", officer: "Hazard Analyst, KSDMA", date: "27-08-2026", note: "Low risk zone, verified slope stability." }
      },
      hardConstraints: {
        allPassed: true,
        tier1Status: "QUALIFIED",
        passedCount: 4,
        totalConstraints: 4,
        items: [
          { name: "Slope Gradient", threshold: "≤ 12.0°", actual: "6.2°", status: "PASS", detail: "Undulating terrace well below 12° construction threshold" },
          { name: "Active Scarp Buffer", threshold: "≥ 2.0 km", actual: "32.4 km", status: "PASS", detail: "Far beyond disaster epicenter zone" },
          { name: "Residual Hazard Score", threshold: "≤ 30/100", actual: "13.2/100", status: "PASS", detail: "Stable lithomargic clay foundation with moderate runoff" },
          { name: "Ecological Clearance", threshold: "Clear of Corridor", actual: "Teak Buffer", status: "PASS", detail: "Survey confirmed non-wildlife boundary; pending final signoff" }
        ]
      }
    },
    {
      id: "site_gamma",
      code: "SITE-C",
      name: "Nedumbala Estate (Site Gamma)",
      taluk: "Vythiri",
      panchayat: "Meppadi Outer",
      coordinates: [11.5720, 76.1050],
      distanceFromDisasterKm: 6.2,
      availableAreaAcres: 45.0,
      capacityHouseholds: 800,
      terrainSlope: "14.8° (Moderate Slope)",
      soilStabilityScore: 6.5,
      connectivityScore: 8.6,
      utilityReadinessScore: 7.2,
      landAcquisitionCostCr: 68.0,
      infrastructureBudgetCr: 95.0,
      totalEstimatedCostCr: 163.0,
      estimatedDeliveryMonths: 20,
      gsiSafetyRating: "CLASS C (Requires Heavy Terracing & Retaining Walls)",
      gsiBoreholeSummary: "Thick colluvium deposits on intermediate tea slopes. High drainage diversion required.",
      waterSupply: "Local stream catchment (seasonal fluctuations)",
      powerGrid: "Existing plantation transformer network",
      accessRoad: "Narrow estate road with switchbacks",
      status: "REJECTED DUE TO RESIDUAL SLOPE HAZARDS",
      signoffs: {
        revenue: { status: "APPROVED", officer: "Revenue Inspector", date: "22-08-2026", note: "Private plantation land under acquisition notice." },
        forest: { status: "REJECTED", officer: "Forest Conservator", date: "24-08-2026", note: "Elephant movement corridor proximity." },
        pwd: { status: "PENDING", officer: "PWD Roads Division", date: "Pending", note: "Slope stabilization civil works estimate high." },
        ksdma: { status: "REJECTED", officer: "KSDMA Hazard Cell", date: "25-08-2026", note: "Within 2km of historical micro-landslide scar." }
      },
      hardConstraints: {
        allPassed: false,
        tier1Status: "DISQUALIFIED",
        passedCount: 1,
        totalConstraints: 4,
        items: [
          { name: "Slope Gradient", threshold: "≤ 12.0°", actual: "14.8°", status: "FAIL", detail: "Terrain slope 14.8° exceeds 12.0° statutory construction threshold" },
          { name: "Active Scarp Buffer", threshold: "≥ 2.0 km", actual: "6.2 km", status: "PASS", detail: "Meets buffer distance requirement" },
          { name: "Residual Hazard Score", threshold: "≤ 30/100", actual: "34.0/100", status: "FAIL", detail: "Residual landslide hazard score exceeds 30/100 limit" },
          { name: "Ecological Clearance", threshold: "Clear of Corridor", actual: "Adjacent", status: "FAIL", detail: "Proximity to Elephant movement corridor; Forest clearance rejected" }
        ]
      }
    }
  ],

  monsoonStressMatrix: [
    {
      rainfallIntensity: 0,
      label: "Base Line (Normal Monsoon)",
      siteASafety: "Safe (100% Stable)",
      siteASafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteBSafety: "Safe (98% Stable)",
      siteBSafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteCSafety: "Conditional (75% Stable)",
      siteCSafetyClass: "text-amber-700 bg-amber-50 border-amber-200",
      roadStatus: "All Corridors Open",
      drainageCapacity: "Adequate (35% utilization)",
      evacuationTrigger: "None",
      riskIndex: "Low"
    },
    {
      rainfallIntensity: 25,
      label: "+25% Monsoon Intensity",
      siteASafety: "Safe (98% Stable)",
      siteASafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteBSafety: "Safe (94% Stable)",
      siteBSafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteCSafety: "Elevated Risk (62% Stable)",
      siteCSafetyClass: "text-amber-700 bg-amber-50 border-amber-200",
      roadStatus: "All Corridors Open",
      drainageCapacity: "Controlled (52% utilization)",
      evacuationTrigger: "None",
      riskIndex: "Controlled"
    },
    {
      rainfallIntensity: 50,
      label: "+50% Severe Cloudburst",
      siteASafety: "Safe (95% Stable)",
      siteASafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteBSafety: "Conditional (88% Stable)",
      siteBSafetyClass: "text-amber-700 bg-amber-50 border-amber-200",
      siteCSafety: "High Hazard (48% Stable)",
      siteCSafetyClass: "text-rose-700 bg-rose-50 border-rose-200",
      roadStatus: "Spur Route 2 Advisory",
      drainageCapacity: "Elevated (74% utilization)",
      evacuationTrigger: "Watch Level 1",
      riskIndex: "Moderate"
    },
    {
      rainfallIntensity: 75,
      label: "+75% Extreme Monsoon",
      siteASafety: "Safe (92% Stable)",
      siteASafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteBSafety: "Conditional (78% Stable)",
      siteBSafetyClass: "text-amber-700 bg-amber-50 border-amber-200",
      siteCSafety: "Critical Hazard (34% Stable)",
      siteCSafetyClass: "text-rose-700 bg-rose-50 border-rose-200",
      roadStatus: "Alternate Arteries Active",
      drainageCapacity: "Spillway Active (88% utilization)",
      evacuationTrigger: "Warning Level 2",
      riskIndex: "Elevated"
    },
    {
      rainfallIntensity: 100,
      label: "+100% Catastrophic Event (1-in-100 Yr)",
      siteASafety: "Safe (89% Stable)",
      siteASafetyClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
      siteBSafety: "Elevated Caution (71% Stable)",
      siteBSafetyClass: "text-amber-700 bg-amber-50 border-amber-200",
      siteCSafety: "Unsafe (18% Stable)",
      siteCSafetyClass: "text-rose-700 bg-rose-50 border-rose-200",
      roadStatus: "Highway Corridor Priority",
      drainageCapacity: "Maximum Capacity (96% utilization)",
      evacuationTrigger: "Red Alert Standby",
      riskIndex: "Extreme"
    }
  ],

  governmentOrder: {
    orderNumber: "G.O. (Ms) No. 114/2026/DMD",
    date: "28th August 2026",
    department: "Disaster Management (Revenue-KSDMA) Department",
    secretariat: "Government Secretariat, Thiruvananthapuram",
    subject: "Disaster Risk Reduction - Wayanad Landslide Rehabilitation Project - Approval of Comprehensive Model Resettlement Township Plan at Kalpetta North - Orders Issued.",
    financialAllocation: {
      landAcquisition: "₹42,00,00,000 (Forty-Two Crores)",
      residentialUnitsPhase1: "₹185,00,00,000 (One Hundred & Eighty-Five Crores for 1,200 units)",
      infrastructureAndUtilities: "₹118,50,00,000 (One Hundred & Eighteen Crores Fifty Lakhs)",
      livelihoodRehabilitation: "₹45,00,00,000 (Forty-Five Crores)",
      ecologicalBufferAndDrainage: "₹38,00,00,000 (Thirty-Eight Crores)",
      totalBudget: "₹428,50,00,000 (Four Hundred & Twenty-Eight Crores Fifty Lakhs)"
    },
    housingSpecifications: {
      type: "Climate-Resilient Disaster-Resistant Modular Individual Residences",
      plinthArea: "780 sq. ft. per family (Expandable G+1 structure)",
      landPerFamily: "8 Cents (0.08 Acre) with dedicated kitchen garden space",
      foundation: "Reinforced Concrete Isolated Column Footings anchored to hard rock",
      superstructure: "Engineered Shear-Wall Interlocking Concrete Blocks with high wind resistance"
    },
    implementationPhases: [
      { phase: "Phase 1 (Months 1 - 4)", description: "Site levelling, arterial road grading, storm drainage trunk, and 500 Transit Pre-Fab units" },
      { phase: "Phase 2 (Months 5 - 10)", description: "First 600 permanent housing units, primary health sub-centre, Anganwadi, community water treatment plant" },
      { phase: "Phase 3 (Months 11 - 14)", description: "Balance 600 permanent housing units, high school extension, commercial cooperative bazaar, solar microgrid" }
    ]
  },

  modelValidation: {
    modelCard: {
      name: "Wayanad Landslide Susceptibility Classifier",
      version: "2.0.0-R2",
      type: "Random Forest Classifier (100 Estimators, Balanced)",
      baseline: "Logistic Regression (L2 Regularized)",
      trainingDataset: "500 Calibrated Wayanad Geomorphological Samples",
      featuresCount: 8,
      crossValidation: "5-Fold Stratified Cross-Validation",
      lastTrained: "August 2026",
      status: "VERIFIED & BENCHMARKED"
    },
    metrics: {
      primaryModel: {
        name: "Random Forest Classifier",
        accuracy: 97.0,
        precision: 95.0,
        recall: 97.4,
        f1Score: 0.962,
        rocAuc: 0.994
      },
      baselineModel: {
        name: "Logistic Regression (Baseline)",
        accuracy: 91.0,
        precision: 88.6,
        recall: 89.5,
        f1Score: 0.890,
        rocAuc: 0.942
      }
    },
    confusionMatrix: {
      trueNegatives: 59,
      falsePositives: 1,
      falseNegatives: 2,
      truePositives: 38,
      totalTestSamples: 100
    },
    crossValidationFolds: [0.995, 0.982, 0.979, 0.991, 0.993],
    cvMean: 0.988,
    cvStd: 0.009,
    featureImportances: [
      { name: "Slope Angle (°)", code: "slope_degrees", importance: 28.4, rank: 1, source: "SRTM 30m DEM / Cartosat-2" },
      { name: "24h Accumulated Rainfall (mm)", code: "rainfall_24h_mm", importance: 24.1, rank: 2, source: "IMD Meppadi AWS" },
      { name: "Overburden Regolith Depth (m)", code: "soil_regolith_depth_m", importance: 16.8, rank: 3, source: "GSI Core Borehole Logs" },
      { name: "72h Antecedent Rainfall (mm)", code: "rainfall_72h_mm", importance: 12.5, rank: 4, source: "IMD AWS Station Series" },
      { name: "Distance to Drainage Channel (m)", code: "distance_to_drainage_m", importance: 8.2, rank: 5, source: "Survey of India 1:25k" },
      { name: "Vegetation Loss Index (NDVI)", code: "vegetation_loss_index", importance: 4.8, rank: 6, source: "ISRO / NRSC LISS-IV" },
      { name: "Elevation MSL (m)", code: "elevation_m", importance: 3.1, rank: 7, source: "SRTM 30m DEM" },
      { name: "Historical Landslide Density", code: "historical_landslide_density", importance: 2.1, rank: 8, source: "GSI NLSM Inventory" }
    ],
    limitations: [
      "Trained on statistically representative synthetic data calibrated to published Wayanad parameters — not actual continuously-streamed telemetry.",
      "Requires ground borehole validation by GSI engineers before executing mandatory physical displacement.",
      "Spatial autocorrelation is approximated through micro-catchment proxy buffers.",
      "System issues administrative recommendations only; does not replace Kerala Land Revenue statutory title adjudication."
    ]
  }
};
