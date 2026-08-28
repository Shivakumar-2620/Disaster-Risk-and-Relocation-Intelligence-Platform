(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&p(g)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function p(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();const O={district:{overviewStats:{displacedHouseholds:3420,activeReliefCamps:48,criticalRiskZones:14,allocatedBudgetCr:428.5}},currentUserProfiles:[{id:"collector",name:"Dr. A. K. Vasudevan, IAS",role:"District Magistrate & Chairman, DDMA",clearance:"LEVEL 5 (Full Executive Clearance)",department:"District Administration, Wayanad",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"},{id:"geologist",name:"Dr. Rachel Thomas, Ph.D.",role:"Chief Hazard Geologist",clearance:"LEVEL 4 (Scientific Assessment)",department:"Geological Survey of India (GSI)",avatar:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"},{id:"revenue",name:"K. R. Sivadasan",role:"Revenue Divisional Officer (RDO)",clearance:"LEVEL 4 (Land Title & Allocation)",department:"Department of Revenue, Govt. of Kerala",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"}],settlements:[{id:"mundakkai",name:"Mundakkai",panchayat:"Meppadi",zoneCode:"ZN-WAY-04A",riskLevel:"CRITICAL",riskScore:9.4,coordinates:[11.5284,76.1512],elevation:"940m MSL",slopeAngle:"38.5°",rainfall24h:"184.2 mm",displacedFamilies:840,totalPopulation:3120,inhabitedStructures:642,debrisFlowVulnerability:94,slopeRunoffIndex:88,soilLiquefactionIndex:82,regolithDepth:"4.8 meters",bedrockType:"Charnockite & Gneissic Complex",demographics:{elderlyAndDisabled:142,childrenUnder10:215,femaleHeadedHouseholds:98,livestockHoldings:480,bplRatio:"76%"},criticalInfrastructureLoss:["Mundakkai LP School (Submerged)","Punchirimattam Access Bridge (Severed)","Primary Health Sub-centre (Unsafe)"],hazardSummary:"Catastrophic debris flow path originating from upper catchment of Punchirimattam. Severe regolith failure on >35° slopes with high pore-water saturation.",recommendedAction:"MANDATORY FULL SETTLEMENT RELOCATION (100% Evacuate)"},{id:"chooralmala",name:"Chooralmala",panchayat:"Meppadi",zoneCode:"ZN-WAY-04B",riskLevel:"CRITICAL",riskScore:9.1,coordinates:[11.542,76.1415],elevation:"870m MSL",slopeAngle:"34.0°",rainfall24h:"168.4 mm",displacedFamilies:920,totalPopulation:3580,inhabitedStructures:715,debrisFlowVulnerability:91,slopeRunoffIndex:85,soilLiquefactionIndex:78,regolithDepth:"4.2 meters",bedrockType:"Hornblende-Biotite Gneiss",demographics:{elderlyAndDisabled:168,childrenUnder10:260,femaleHeadedHouseholds:114,livestockHoldings:520,bplRatio:"72%"},criticalInfrastructureLoss:["Chooralmala Bailey Bridge (Emergency Span Active)","Township Commercial Core (Destroyed)","Tea Estate Worker Quarters (Uninhabitable)"],hazardSummary:"Direct alluvial fan deposit zone at confluence of stream networks. Highly compromised floodplains with high residual boulder drift hazard.",recommendedAction:"MANDATORY FULL SETTLEMENT RELOCATION"},{id:"attamala",name:"Attamala",panchayat:"Meppadi",zoneCode:"ZN-WAY-04C",riskLevel:"CRITICAL",riskScore:9,coordinates:[11.515,76.162],elevation:"910m MSL",slopeAngle:"36.2°",rainfall24h:"175.8 mm",displacedFamilies:510,totalPopulation:1980,inhabitedStructures:395,debrisFlowVulnerability:89,slopeRunoffIndex:84,soilLiquefactionIndex:76,regolithDepth:"3.9 meters",bedrockType:"Granulite Facies Charnockite",demographics:{elderlyAndDisabled:88,childrenUnder10:140,femaleHeadedHouseholds:62,livestockHoldings:310,bplRatio:"81%"},criticalInfrastructureLoss:["Attamala Plantation Road (Massive Scarping)","Community Water Intake Tank (Silted)"],hazardSummary:"Isolated ridge community with single bottleneck egress road cut off by lateral rotational slumps.",recommendedAction:"MANDATORY RELOCATION WITH TRANSIT SHELTER"},{id:"vellarmala",name:"Vellarmala",panchayat:"Meppadi",zoneCode:"ZN-WAY-04D",riskLevel:"CRITICAL",riskScore:9.6,coordinates:[11.505,76.138],elevation:"1020m MSL",slopeAngle:"41.0°",rainfall24h:"195.0 mm",displacedFamilies:500,totalPopulation:1850,inhabitedStructures:340,debrisFlowVulnerability:96,slopeRunoffIndex:93,soilLiquefactionIndex:88,regolithDepth:"5.1 meters",bedrockType:"Quartzite-Banded Gneiss",demographics:{elderlyAndDisabled:94,childrenUnder10:130,femaleHeadedHouseholds:55,livestockHoldings:290,bplRatio:"84%"},criticalInfrastructureLoss:["Vellarmala High School (Severe Structural Shear)","Power Transmission Pylons (Uprooted)"],hazardSummary:"Highest elevation scarp failure zone. High velocity debris torrent trigger origin.",recommendedAction:"NO-DEVELOPMENT BUFFER ZONE DESIGNATION"},{id:"meppadi",name:"Meppadi Central",panchayat:"Meppadi",zoneCode:"ZN-WAY-03",riskLevel:"HIGH",riskScore:7.8,coordinates:[11.554,76.126],elevation:"780m MSL",slopeAngle:"28.0°",rainfall24h:"142.6 mm",displacedFamilies:650,totalPopulation:2320,inhabitedStructures:490,debrisFlowVulnerability:74,slopeRunoffIndex:71,soilLiquefactionIndex:65,regolithDepth:"3.2 meters",bedrockType:"Hornblende Gneiss",demographics:{elderlyAndDisabled:110,childrenUnder10:175,femaleHeadedHouseholds:74,livestockHoldings:210,bplRatio:"58%"},criticalInfrastructureLoss:["Drainage Culverts Overflowing","Panchayat Stadium (Relief Distribution Hub)"],hazardSummary:"Downstream valley buffer zone. High flash flood and inundation risk during continuous +150mm rainfall episodes.",recommendedAction:"SELECTIVE RETROFITTING & TRANSIT CORRIDOR"}],candidateResettlementSites:[{id:"site_alpha",code:"SITE-A",name:"Kalpetta North (Site Alpha)",taluk:"Vythiri",panchayat:"Kalpetta Municipality",coordinates:[11.625,76.082],distanceFromDisasterKm:14.8,availableAreaAcres:64.5,capacityHouseholds:1200,terrainSlope:"4.5° (Gentle Plain)",soilStabilityScore:9.6,connectivityScore:9.2,utilityReadinessScore:9,landAcquisitionCostCr:42,infrastructureBudgetCr:118.5,totalEstimatedCostCr:160.5,estimatedDeliveryMonths:14,gsiSafetyRating:"CLASS A (Stable Crystalline Plateau)",gsiBoreholeSummary:"Competent Charnockite basement at 2.1m depth. Standard Penetration Test (SPT) N-value > 50. Nil liquefaction potential.",waterSupply:"Direct gravity conduit from Banasura Sagar feeder pipeline",powerGrid:"33/11 kV Kalpetta North Substation proximity (0.8 km)",accessRoad:"14m wide state highway spur with dual arterial connectivity",status:"PRIMARY RECOMMENDED SITE",signoffs:{revenue:{status:"APPROVED",officer:"K. R. Sivadasan (RDO)",date:"26-08-2026",note:"Govt. Vested Land (Survey No. 412/1A). Title clean, unencumbered."},forest:{status:"APPROVED",officer:"Dr. P. G. Nair (CF, Wildlife)",date:"27-08-2026",note:"Located 3.4km beyond Wildlife Sanctuary buffer. No clearance required."},pwd:{status:"APPROVED",officer:"Er. K. Mohandas (EE, PWD Roads)",date:"27-08-2026",note:"Road gradient 1:18, dual drainage engineered. Heavy vehicle certified."},ksdma:{status:"APPROVED",officer:"Dr. Rachel Thomas (Chief Geologist)",date:"28-08-2026",note:"Safe contour >760m MSL. Landslide susceptibility index: 0.04 (Negligible)."}}},{id:"site_beta",code:"SITE-B",name:"Mananthavady South (Site Beta)",taluk:"Mananthavady",panchayat:"Mananthavady",coordinates:[11.785,76.012],distanceFromDisasterKm:32.4,availableAreaAcres:88,capacityHouseholds:1500,terrainSlope:"6.2° (Undulating Terrace)",soilStabilityScore:8.8,connectivityScore:7.4,utilityReadinessScore:7.8,landAcquisitionCostCr:34,infrastructureBudgetCr:132,totalEstimatedCostCr:166,estimatedDeliveryMonths:18,gsiSafetyRating:"CLASS B+ (Moderately Stable Terrace)",gsiBoreholeSummary:"Lateritic overburden with hard lithomargic clay. Bedrock at 5.4m depth. Adequate load-bearing capacity for G+1 residential modules.",waterSupply:"Kabini river auxiliary intake project required (2.5 km pipeline)",powerGrid:"11 kV feeder expansion required",accessRoad:"8m wide district road requiring 4km widening",status:"SECONDARY CONTINGENCY SITE",signoffs:{revenue:{status:"APPROVED",officer:"T. C. Mathew (Tahsildar)",date:"25-08-2026",note:"Joint Revenue-Panchayat land pool."},forest:{status:"PENDING",officer:"Divisional Forest Officer",date:"Awaiting review",note:"Near territorial teak buffer; alignment under survey."},pwd:{status:"APPROVED",officer:"Asst. Exec. Engineer, PWD",date:"26-08-2026",note:"Widening estimate submitted."},ksdma:{status:"APPROVED",officer:"Hazard Analyst, KSDMA",date:"27-08-2026",note:"Low risk zone, verified slope stability."}}},{id:"site_gamma",code:"SITE-C",name:"Nedumbala Estate (Site Gamma)",taluk:"Vythiri",panchayat:"Meppadi Outer",coordinates:[11.572,76.105],distanceFromDisasterKm:6.2,availableAreaAcres:45,capacityHouseholds:800,terrainSlope:"14.8° (Moderate Slope)",soilStabilityScore:6.5,connectivityScore:8.6,utilityReadinessScore:7.2,landAcquisitionCostCr:68,infrastructureBudgetCr:95,totalEstimatedCostCr:163,estimatedDeliveryMonths:20,gsiSafetyRating:"CLASS C (Requires Heavy Terracing & Retaining Walls)",gsiBoreholeSummary:"Thick colluvium deposits on intermediate tea slopes. High drainage diversion required.",waterSupply:"Local stream catchment (seasonal fluctuations)",powerGrid:"Existing plantation transformer network",accessRoad:"Narrow estate road with switchbacks",status:"REJECTED DUE TO RESIDUAL SLOPE HAZARDS",signoffs:{revenue:{status:"APPROVED",officer:"Revenue Inspector",date:"22-08-2026",note:"Private plantation land under acquisition notice."},forest:{status:"REJECTED",officer:"Forest Conservator",date:"24-08-2026",note:"Elephant movement corridor proximity."},pwd:{status:"PENDING",officer:"PWD Roads Division",date:"Pending",note:"Slope stabilization civil works estimate high."},ksdma:{status:"REJECTED",officer:"KSDMA Hazard Cell",date:"25-08-2026",note:"Within 2km of historical micro-landslide scar."}}}],monsoonStressMatrix:[{rainfallIntensity:0,label:"Base Line (Normal Monsoon)",siteASafety:"Safe (100% Stable)",siteASafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteBSafety:"Safe (98% Stable)",siteBSafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteCSafety:"Conditional (75% Stable)",siteCSafetyClass:"text-amber-700 bg-amber-50 border-amber-200",roadStatus:"All Corridors Open",drainageCapacity:"Adequate (35% utilization)",evacuationTrigger:"None",riskIndex:"Low"},{rainfallIntensity:25,label:"+25% Monsoon Intensity",siteASafety:"Safe (98% Stable)",siteASafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteBSafety:"Safe (94% Stable)",siteBSafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteCSafety:"Elevated Risk (62% Stable)",siteCSafetyClass:"text-amber-700 bg-amber-50 border-amber-200",roadStatus:"All Corridors Open",drainageCapacity:"Controlled (52% utilization)",evacuationTrigger:"None",riskIndex:"Controlled"},{rainfallIntensity:50,label:"+50% Severe Cloudburst",siteASafety:"Safe (95% Stable)",siteASafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteBSafety:"Conditional (88% Stable)",siteBSafetyClass:"text-amber-700 bg-amber-50 border-amber-200",siteCSafety:"High Hazard (48% Stable)",siteCSafetyClass:"text-rose-700 bg-rose-50 border-rose-200",roadStatus:"Spur Route 2 Advisory",drainageCapacity:"Elevated (74% utilization)",evacuationTrigger:"Watch Level 1",riskIndex:"Moderate"},{rainfallIntensity:75,label:"+75% Extreme Monsoon",siteASafety:"Safe (92% Stable)",siteASafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteBSafety:"Conditional (78% Stable)",siteBSafetyClass:"text-amber-700 bg-amber-50 border-amber-200",siteCSafety:"Critical Hazard (34% Stable)",siteCSafetyClass:"text-rose-700 bg-rose-50 border-rose-200",roadStatus:"Alternate Arteries Active",drainageCapacity:"Spillway Active (88% utilization)",evacuationTrigger:"Warning Level 2",riskIndex:"Elevated"},{rainfallIntensity:100,label:"+100% Catastrophic Event (1-in-100 Yr)",siteASafety:"Safe (89% Stable)",siteASafetyClass:"text-emerald-700 bg-emerald-50 border-emerald-200",siteBSafety:"Elevated Caution (71% Stable)",siteBSafetyClass:"text-amber-700 bg-amber-50 border-amber-200",siteCSafety:"Unsafe (18% Stable)",siteCSafetyClass:"text-rose-700 bg-rose-50 border-rose-200",roadStatus:"Highway Corridor Priority",drainageCapacity:"Maximum Capacity (96% utilization)",evacuationTrigger:"Red Alert Standby",riskIndex:"Extreme"}],governmentOrder:{orderNumber:"G.O. (Ms) No. 114/2026/DMD",date:"28th August 2026",department:"Disaster Management (Revenue-KSDMA) Department",secretariat:"Government Secretariat, Thiruvananthapuram",subject:"Disaster Risk Reduction - Wayanad Landslide Rehabilitation Project - Approval of Comprehensive Model Resettlement Township Plan at Kalpetta North - Orders Issued.",financialAllocation:{landAcquisition:"₹42,00,00,000 (Forty-Two Crores)",residentialUnitsPhase1:"₹185,00,00,000 (One Hundred & Eighty-Five Crores for 1,200 units)",infrastructureAndUtilities:"₹118,50,00,000 (One Hundred & Eighteen Crores Fifty Lakhs)",livelihoodRehabilitation:"₹45,00,00,000 (Forty-Five Crores)",ecologicalBufferAndDrainage:"₹38,00,00,000 (Thirty-Eight Crores)",totalBudget:"₹428,50,00,000 (Four Hundred & Twenty-Eight Crores Fifty Lakhs)"},housingSpecifications:{plinthArea:"780 sq. ft. per family (Expandable G+1 structure)",landPerFamily:"8 Cents (0.08 Acre) with dedicated kitchen garden space",foundation:"Reinforced Concrete Isolated Column Footings anchored to hard rock",superstructure:"Engineered Shear-Wall Interlocking Concrete Blocks with high wind resistance"},implementationPhases:[{phase:"Phase 1 (Months 1 - 4)",description:"Site levelling, arterial road grading, storm drainage trunk, and 500 Transit Pre-Fab units"},{phase:"Phase 2 (Months 5 - 10)",description:"First 600 permanent housing units, primary health sub-centre, Anganwadi, community water treatment plant"},{phase:"Phase 3 (Months 11 - 14)",description:"Balance 600 permanent housing units, high school extension, commercial cooperative bazaar, solar microgrid"}]}};class sa{constructor(){this.state={currentUser:O.currentUserProfiles[0],isAuthenticated:!0,currentRoute:"dashboard",selectedSettlementId:"mundakkai",selectedSiteId:"site_alpha",simulatedRainfallIntensity:0,mcdaWeights:{geological:35,distance:25,cost:20,utility:20},siteSignoffs:{site_alpha:{revenue:!0,forest:!0,pwd:!0,ksdma:!0},site_beta:{revenue:!0,forest:!1,pwd:!0,ksdma:!0},site_gamma:{revenue:!0,forest:!1,pwd:!1,ksdma:!1}},mapLayers:{hazardDebris:!0,slope35:!0,soilSaturation:!0,safeBuffers:!0,evacuationRoutes:!0,satelliteBasemap:!1},emergencyEvacuationAlertActive:!1,cabinetApprovalSubmitted:!1},this.listeners=new Set}getState(){return this.state}subscribe(l){return this.listeners.add(l),()=>this.listeners.delete(l)}notify(){this.listeners.forEach(l=>l(this.state))}setUser(l){const o=O.currentUserProfiles.find(p=>p.id===l);o&&(this.state.currentUser=o,this.state.isAuthenticated=!0,this.notify())}logout(){this.state.isAuthenticated=!1,this.notify()}login(l="collector"){this.setUser(l)}setRoute(l){this.state.currentRoute=l,this.notify()}selectSettlement(l){this.state.selectedSettlementId=l,this.notify()}selectSite(l){this.state.selectedSiteId=l,this.notify()}setRainfallIntensity(l){this.state.simulatedRainfallIntensity=parseInt(l,10),this.notify()}setMCDAWeights(l){this.state.mcdaWeights={...this.state.mcdaWeights,...l},this.notify()}toggleSignoff(l,o){this.state.siteSignoffs[l]&&(this.state.siteSignoffs[l][o]=!this.state.siteSignoffs[l][o],this.notify())}toggleMapLayer(l){this.state.mapLayers[l]!==void 0&&(this.state.mapLayers[l]=!this.state.mapLayers[l],this.notify())}triggerEmergencyEvacuation(l=!0){this.state.emergencyEvacuationAlertActive=l,this.notify()}submitCabinetApproval(){this.state.cabinetApprovalSubmitted=!0,this.notify()}getCalculatedSiteScores(){const{geological:l,distance:o,cost:p,utility:u}=this.state.mcdaWeights,m=l+o+p+u||100;return O.candidateResettlementSites.map(g=>{const C=g.soilStabilityScore/10*(l/m),S=(50-Math.min(g.distanceFromDisasterKm,50))/50*(o/m),bt=(200-Math.min(g.totalEstimatedCostCr,200))/200*(p/m),at=(g.utilityReadinessScore+g.connectivityScore)/20*(u/m),B=Number(((C+S+bt+at)*10).toFixed(2));return{...g,calculatedScore:B}}).sort((g,C)=>C.calculatedScore-g.calculatedScore)}}const I=new sa;function aa(){const l=I.getState().currentUser;return`
    <header class="bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-margin-desktop h-16 z-30 sticky top-0">
      <!-- Left: Mobile Menu & Breadcrumb -->
      <div class="flex items-center gap-3">
        <button id="mobile-sidebar-toggle" class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <span class="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div class="flex items-center gap-2">
          <a href="#landing" class="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface border border-outline-variant transition">
            <span class="material-symbols-outlined text-sm text-primary">public</span>
            <span>Public Portal</span>
          </a>
          <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> KSDMA Live Telemetry
          </span>
          <span class="text-xs text-on-surface-variant font-data-tabular hidden sm:inline">
            Monsoon Rainfall: <strong class="text-primary font-semibold">168.4 mm/24h</strong> (Level 2 Alert)
          </span>
        </div>
      </div>

      <!-- Right: Officer Profile Switcher & Actions -->
      <div class="flex items-center gap-3">
        <!-- Emergency Alert Trigger Button -->
        <button id="btn-emergency-broadcast" class="hidden sm:flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition">
          <span class="material-symbols-outlined text-base">emergency_share</span>
          <span>Broadcast Warning</span>
        </button>

        <!-- Officer Profile Dropdown -->
        <div class="relative" id="profile-dropdown-container">
          <button id="profile-dropdown-btn" class="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant px-3 py-1.5 rounded-lg text-xs transition">
            <img src="${l.avatar}" alt="Avatar" class="w-6 h-6 rounded-full object-cover">
            <div class="text-left hidden md:block">
              <div class="font-bold text-on-surface leading-tight">${l.name.split(",")[0]}</div>
              <div class="text-[10px] text-on-surface-variant leading-none">${l.role.split("&")[0]}</div>
            </div>
            <span class="material-symbols-outlined text-sm text-on-surface-variant">expand_more</span>
          </button>

          <!-- Dropdown Menu -->
          <div id="profile-menu" class="hidden absolute right-0 mt-2 w-72 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl py-2 z-50 text-xs">
            <div class="px-4 py-2 border-b border-outline-variant">
              <p class="font-bold text-on-surface">${l.name}</p>
              <p class="text-[11px] text-on-surface-variant">${l.role}</p>
              <span class="inline-block mt-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold px-1.5 py-0.5 rounded text-[10px]">
                ${l.clearance}
              </span>
            </div>
            <div class="py-1">
              <div class="px-4 py-1 text-[10px] font-bold uppercase text-slate-400">Switch Officer Profile</div>
              ${O.currentUserProfiles.map(o=>`
                <button class="switch-profile-btn w-full text-left px-4 py-2 hover:bg-surface-container flex items-center gap-2 ${o.id===l.id?"font-bold text-primary bg-surface-container-low":"text-on-surface"}" data-profile-id="${o.id}">
                  <span class="material-symbols-outlined text-sm">${o.id===l.id?"radio_button_checked":"radio_button_unchecked"}</span>
                  <div>
                    <div>${o.name.split(",")[0]}</div>
                    <div class="text-[10px] text-on-surface-variant">${o.role}</div>
                  </div>
                </button>
              `).join("")}
            </div>
            <div class="border-t border-outline-variant pt-1 mt-1">
              <a href="#landing" class="w-full text-left px-4 py-2 hover:bg-surface-container text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span class="material-symbols-outlined text-base">public</span> Exit to Public Landing Page
              </a>
              <button id="header-logout-btn" class="w-full text-left px-4 py-2 hover:bg-rose-50 dark:hover:bg-rose-950 text-rose-600 flex items-center gap-2">
                <span class="material-symbols-outlined text-base">logout</span> Logout from Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `}function oa(){const l=I.getState().currentRoute;return`
    <aside id="app-sidebar" class="hidden md:flex flex-col bg-background border-r border-outline-variant fixed left-0 top-0 h-full w-[280px] py-6 z-40 transition-transform duration-300">
      <!-- Header / Seal -->
      <div class="px-6 mb-4">
        <a href="#landing" class="flex items-center gap-3 mb-3 group">
          <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition">
            <span class="material-symbols-outlined text-2xl">shield_with_heart</span>
          </div>
          <div class="min-w-0">
            <h1 class="font-headline-sm text-sm font-bold text-primary truncate">Wayanad Decision Portal</h1>
            <p class="font-label-md text-[11px] text-on-surface-variant truncate">KSDMA & DDMA Wayanad</p>
          </div>
        </a>

        <button id="sidebar-alert-btn" class="w-full flex items-center justify-center gap-2 bg-error text-on-error font-label-md text-xs py-2 px-3 rounded-lg shadow-sm hover:opacity-90 transition active:scale-95">
          <span class="material-symbols-outlined text-sm">notifications_active</span>
          <span>Red Alert Protocol Active</span>
        </button>
      </div>

      <!-- Public Portal Return Link -->
      <div class="px-4 mb-2">
        <a href="#landing" class="flex items-center justify-between px-3 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold border border-outline-variant transition">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sm text-primary">arrow_back</span>
            <span>Public Landing Page</span>
          </span>
          <span class="material-symbols-outlined text-sm text-slate-400">open_in_new</span>
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 px-3 space-y-1 overflow-y-auto">
        <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Command Modules</div>
        ${[{id:"dashboard",label:"District Dashboard",icon:"dashboard",badge:"Live"},{id:"map",label:"Interactive Risk Map",icon:"map",badge:"GIS"},{id:"risk-profile",label:"Settlement Risk Profile",icon:"warning",badge:"4 Zones"},{id:"relocation-tool",label:"Relocation Planning Tool",icon:"hub",badge:"MCDA"},{id:"site-revalidation",label:"Site Revalidation",icon:"fact_check",badge:"GSI"},{id:"recommendation",label:"Climate Scenarios",icon:"thunderstorm",badge:"Sim"},{id:"final-report",label:"Executive Cabinet Dossier",icon:"description",badge:"G.O."}].map(p=>{const u=l===p.id;return`
            <a href="#${p.id}" class="nav-item flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${u?"bg-secondary-container text-on-secondary-container font-bold shadow-sm":"text-on-surface-variant hover:bg-surface-container hover:text-on-surface"}">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg ${u?"text-primary":"text-slate-500"}">${p.icon}</span>
                <span class="truncate">${p.label}</span>
              </div>
              <span class="text-[10px] px-1.5 py-0.5 rounded font-mono ${u?"bg-primary text-white":"bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}">${p.badge}</span>
            </a>
          `}).join("")}
      </nav>

      <!-- Bottom System Telemetry Card -->
      <div class="px-4 pt-4 border-t border-outline-variant text-xs">
        <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant space-y-1.5">
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-on-surface-variant">Server Link:</span>
            <span class="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
            </span>
          </div>
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-on-surface-variant">Data Sync:</span>
            <span class="font-mono text-slate-700 dark:text-slate-300">Live (GSI / IMD)</span>
          </div>
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-on-surface-variant">Relocation Phase:</span>
            <span class="font-bold text-primary">Phase 1 Approval</span>
          </div>
        </div>
      </div>
    </aside>
  `}function Ct(f,l="info",o="System Notification"){let p=document.getElementById("toast-container");p||(p=document.createElement("div"),p.id="toast-container",p.className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none",document.body.appendChild(p));const u=document.createElement("div");u.className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg border text-sm transition-all duration-300 transform translate-y-2 opacity-0";let m="info",g="bg-white dark:bg-slate-900 border-slate-200 text-slate-800 dark:text-white";l==="success"?(m="check_circle",g="bg-[#f0fdf4] border-[#bbf7d0] text-[#166534] dark:bg-slate-900 dark:border-emerald-700 dark:text-emerald-300"):l==="error"||l==="critical"?(m="error",g="bg-[#fef2f2] border-[#fecaca] text-[#991b1b] dark:bg-slate-900 dark:border-rose-700 dark:text-rose-300"):l==="warning"&&(m="warning",g="bg-[#fffbeb] border-[#fef3c7] text-[#92400e] dark:bg-slate-900 dark:border-amber-700 dark:text-amber-300"),u.className+=` ${g}`,u.innerHTML=`
    <span class="material-symbols-outlined shrink-0 text-xl">${m}</span>
    <div class="flex-1">
      <div class="font-semibold text-xs uppercase tracking-wider">${o}</div>
      <div class="mt-0.5 text-xs font-normal">${f}</div>
    </div>
    <button class="text-slate-400 hover:text-slate-600 transition" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-sm">close</span>
    </button>
  `,p.appendChild(u),requestAnimationFrame(()=>{u.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{u.classList.add("opacity-0","translate-x-4"),setTimeout(()=>u.remove(),300)},4e3)}function ra(){const{overviewStats:f}=O.district;return`
    <div class="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-secondary-container selection:text-on-secondary-container">
      <!-- Top Institutional Banner -->
      <div class="bg-primary text-on-primary py-2 px-4 text-xs font-mono border-b border-primary-container">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GOVERNMENT OF KERALA • DISASTER MANAGEMENT (REVENUE-KSDMA) DEPARTMENT</span>
          </div>
          <div class="flex items-center gap-4 text-[11px] text-emerald-100">
            <span>🔴 DEOC Wayanad Helpline: <strong>1077</strong> / <strong>04936-204151</strong></span>
            <span class="hidden md:inline">|</span>
            <span class="hidden md:inline">G.O. (Ms) No. 114/2026/DMD Active</span>
          </div>
        </div>
      </div>

      <!-- Public Navigation Header -->
      <header class="sticky top-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <!-- Logo & Title -->
          <a href="#landing" class="flex items-center gap-3.5 group">
            <div class="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <span class="material-symbols-outlined text-2xl">shield_with_heart</span>
            </div>
            <div>
              <div class="font-display-md text-base sm:text-lg font-bold text-primary tracking-tight leading-tight">
                Wayanad Decision Portal
              </div>
              <div class="text-[11px] font-label-md text-on-surface-variant tracking-wider uppercase">
                Model Resettlement & Risk Intelligence
              </div>
            </div>
          </a>

          <!-- Navigation Links -->
          <nav class="hidden lg:flex items-center gap-8 text-xs font-semibold text-on-surface-variant">
            <a href="#impact" class="hover:text-primary transition-colors">Relief Telemetry</a>
            <a href="#features" class="hover:text-primary transition-colors">Intelligence Modules</a>
            <a href="#simulator-preview" class="hover:text-primary transition-colors">Risk Simulator</a>
            <a href="#township-blueprint" class="hover:text-primary transition-colors">Model Township</a>
            <a href="#governance" class="hover:text-primary transition-colors">Government Order</a>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-center gap-3">
            <a href="#map" class="hidden sm:inline-flex items-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold px-4 py-2.5 rounded-xl border border-outline-variant transition shadow-sm">
              <span class="material-symbols-outlined text-base text-primary">map</span>
              <span>Public GIS Map</span>
            </a>
            <a href="#dashboard" class="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg hover:shadow-emerald-900/20 active:scale-95 transition-all">
              <span class="material-symbols-outlined text-base">login</span>
              <span>Officer Command Center</span>
            </a>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-outline-variant bg-gradient-to-b from-surface-container-low/40 to-background">
        <!-- Background Decorative Grid Texture -->
        <div class="absolute inset-0 z-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at 50% 50%, #1b6850 1px, transparent 1px); background-size: 32px 32px;"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column: Hero Copy & Value Proposition -->
            <div class="lg:col-span-7 space-y-6 text-left">
              <!-- Live State Badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-semibold shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Statutory Resettlement Action Plan • Phase 1 Execution</span>
              </div>

              <!-- Main Hero Title -->
              <h1 class="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.15]">
                Rebuilding Lives With Precision Science & Compassion.
              </h1>

              <!-- Subtitle -->
              <p class="font-serif text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                An algorithmic disaster response and model resettlement decision platform for Wayanad. Integrating <strong>Geological Survey of India (GSI)</strong> borehole telemetry, 1:500 LiDAR slope modeling, and multi-criteria site matching for <strong>3,420 affected families</strong>.
              </p>

              <!-- Dual CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#dashboard" class="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white text-sm font-bold px-6 py-3.5 rounded-2xl shadow-xl hover:shadow-emerald-900/30 active:scale-95 transition-all">
                  <span class="material-symbols-outlined text-lg">dashboard</span>
                  <span>Enter Officer Command Portal</span>
                  <span class="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a href="#map" class="inline-flex items-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface text-sm font-bold px-5 py-3.5 rounded-2xl border border-outline-variant shadow-md active:scale-95 transition-all">
                  <span class="material-symbols-outlined text-lg text-emerald-700">travel_explore</span>
                  <span>Explore GIS Topography Map</span>
                </a>
              </div>

              <!-- High-Level Clearance Indicators -->
              <div class="pt-6 grid grid-cols-3 gap-4 border-t border-outline-variant text-xs">
                <div class="space-y-0.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span class="material-symbols-outlined text-emerald-600 text-base">verified</span>
                    <span>Class A Plateau</span>
                  </div>
                  <div class="text-slate-500 text-[11px]">100% GSI Safe Rating</div>
                </div>
                <div class="space-y-0.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span class="material-symbols-outlined text-emerald-600 text-base">domain</span>
                    <span>1,200 Villas</span>
                  </div>
                  <div class="text-slate-500 text-[11px]">Climate-Resilient Units</div>
                </div>
                <div class="space-y-0.5">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span class="material-symbols-outlined text-emerald-600 text-base">payments</span>
                    <span>₹428.50 Cr</span>
                  </div>
                  <div class="text-slate-500 text-[11px]">Sanctioned by Cabinet</div>
                </div>
              </div>
            </div>

            <!-- Right Column: Visual Hero Banner with Image -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest bg-surface-container group">
                <img 
                  src="/images/township.jpg" 
                  alt="Wayanad Model Resettlement Township Concept" 
                  class="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span class="inline-block bg-emerald-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 w-max">
                    SITE ALPHA • KALPETTA NORTH
                  </span>
                  <h3 class="font-display-md text-xl font-bold text-white leading-snug">
                    Model Township Masterplan (64.5 Acres)
                  </h3>
                  <p class="text-xs text-slate-200 mt-1 font-serif">
                    Gentle 4.5° slope, crystalline bedrock foundation, dedicated 8-cent family plots with solar microgrids.
                  </p>
                </div>
              </div>

              <!-- Floating Live Card Overlay -->
              <div class="absolute -bottom-6 -left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl border border-outline-variant shadow-xl hidden sm:flex items-center gap-3.5 max-w-xs">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-xl">biotech</span>
                </div>
                <div class="text-xs">
                  <div class="font-bold text-slate-900 dark:text-white">Borehole Core BH-04</div>
                  <div class="text-[11px] text-slate-500">SPT N-Value > 50 (Zero Liquefaction)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Disaster Relief & Telemetry Metric Bar -->
      <section id="impact" class="py-12 bg-surface-container-lowest border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="font-label-md text-xs uppercase tracking-widest text-slate-500 font-bold">
              Real-Time Disaster Mitigation & Relief Accounting
            </h2>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Displaced Households</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-primary">${f.displacedHouseholds.toLocaleString()}</div>
              <div class="mt-2 text-xs text-rose-600 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">priority_high</span> 100% Relocation Mandated
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Active Relief Shelters</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-on-surface">${f.activeReliefCamps}</div>
              <div class="mt-2 text-xs text-emerald-700 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">check_circle</span> Rationed & Medical Staffed
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Safe Resettlement Plateau</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400">64.5 <span class="text-lg">Acres</span></div>
              <div class="mt-2 text-xs text-slate-600 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">pin_drop</span> Kalpetta North (Site Alpha)
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition">
              <div class="text-slate-500 text-xs font-semibold mb-1">Cabinet Approved Budget</div>
              <div class="font-display-md text-3xl sm:text-4xl font-extrabold text-on-surface">₹${f.allocatedBudgetCr} <span class="text-lg">Cr</span></div>
              <div class="mt-2 text-xs text-slate-600 font-bold flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">receipt_long</span> G.O. (Ms) No. 114/2026 Cleared
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Core Intelligence Modules Section -->
      <section id="features" class="py-16 lg:py-24 bg-background border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-bold text-xs">
              <span class="material-symbols-outlined text-sm">hub</span> SCIENTIFIC INTELLIGENCE ARCHITECTURE
            </div>
            <h2 class="font-display-lg text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              Four Pillars of Algorithmic Relocation
            </h2>
            <p class="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Replacing arbitrary guesswork with rigorous geological survey data, LiDAR slope zonation, and mathematical decision matrices.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Pillar 1 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">radar</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">1. Forensic Hazard Zonation</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Debris flow velocity tracking (42 km/h), >35° slope polygon mapping, and rainfall saturation indices across Mundakkai and Chooralmala.
                </p>
              </div>
              <a href="#map" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>View GIS Layer</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <!-- Pillar 2 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">tune</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">2. Multi-Criteria MCDA Matching</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Algorithmic ranking weighting geological stability (35%), evacuation distance (25%), land cost (20%), and utility readiness (20%).
                </p>
              </div>
              <a href="#relocation-tool" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>Run Decision Tool</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <!-- Pillar 3 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">thunderstorm</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">3. Climate Stress Simulation</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time precipitation surge testing up to +100% extreme cloudburst events, ensuring structural resilience against future climate shocks.
                </p>
              </div>
              <a href="#recommendation" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>Simulate Surges</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <!-- Pillar 4 -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined text-2xl">fact_check</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 dark:text-white">4. Inter-Departmental Audit</h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Unified digital sign-offs connecting Revenue (Title), Forest (Eco-Buffer), PWD (Roads), and Disaster Management (Contour Safe).
                </p>
              </div>
              <a href="#site-revalidation" class="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                <span>Verify Clearances</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Live Interactive On-Page Simulator Section -->
      <section id="simulator-preview" class="py-16 bg-surface-container-low/50 border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Info -->
            <div class="lg:col-span-5 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                <span class="material-symbols-outlined text-sm">science</span> LIVE GEOTECHNICAL SIMULATION
              </div>
              <h2 class="font-display-lg text-2xl sm:text-3xl font-bold text-primary">
                Test Site Resilience Against Extreme Monsoon Surges
              </h2>
              <p class="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Interact with the dynamic rainfall surge controller below to observe how Site Alpha (Kalpetta North) maintains its Class-A safety margin compared to other prospective settlement zones.
              </p>
              <div class="pt-2">
                <a href="#recommendation" class="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition">
                  <span>Open Full Simulation Suite</span>
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            <!-- Right Interactive Widget -->
            <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant shadow-xl space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-sm text-slate-900 dark:text-white">Rainfall Surge Controller</h4>
                  <p class="text-[11px] text-slate-500">24-Hour Precipitation Simulation</p>
                </div>
                <span id="landing-sim-badge" class="font-mono font-bold text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Base Line (Normal Monsoon)
                </span>
              </div>

              <!-- Interactive Slider -->
              <div class="space-y-2">
                <input type="range" id="landing-rain-slider" min="0" max="100" step="25" value="0" class="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary">
                <div class="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>0% (Base)</span>
                  <span>+25%</span>
                  <span>+50%</span>
                  <span>+75%</span>
                  <span>+100% (Cloudburst)</span>
                </div>
              </div>

              <!-- Live Comparison Outcome Cards -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs" id="landing-sim-results">
                <div class="p-3.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <div class="font-bold">Site Alpha (Kalpetta)</div>
                  <div class="text-[11px] mt-1">Status: <strong class="text-emerald-700">100% Stable</strong></div>
                  <div class="text-[10px] text-emerald-600 mt-1">Crystalline Plateau</div>
                </div>
                <div class="p-3.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <div class="font-bold">Site Beta (Mananthavady)</div>
                  <div class="text-[11px] mt-1">Status: <strong class="text-emerald-700">98% Stable</strong></div>
                  <div class="text-[10px] text-emerald-600 mt-1">Terrace Overburden</div>
                </div>
                <div class="p-3.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
                  <div class="font-bold">Site Gamma (Nedumbala)</div>
                  <div class="text-[11px] mt-1">Status: <strong class="text-amber-700">75% (Conditional)</strong></div>
                  <div class="text-[10px] text-amber-600 mt-1">Moderate Incline</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Model Resettlement Township Blueprint Section -->
      <section id="township-blueprint" class="py-16 lg:py-24 bg-background border-b border-outline-variant">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Visual -->
            <div class="lg:col-span-6 relative">
              <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest bg-surface-container">
                <img 
                  src="/images/gis_command.jpg" 
                  alt="GIS Command Telemetry Interface" 
                  class="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            <!-- Right Content -->
            <div class="lg:col-span-6 space-y-6">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <span class="material-symbols-outlined text-sm">cottage</span> MODEL TOWNSHIP ARCHITECTURE
              </div>
              
              <h2 class="font-display-lg text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                A Climate-Resilient Sustainable Sanctuary at Kalpetta North
              </h2>

              <p class="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                The 64.5-acre Kalpetta North resettlement township is planned not merely as houses, but as a complete socio-economic ecosystem ensuring dignity, security, and sustainable livelihoods for displaced plantation and hillside communities.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">home</span>
                    <span>780 Sq. Ft. Modular Villas</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">8 Cents land per family, G+1 expandable structure anchored to bedrock.</p>
                </div>

                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">solar_power</span>
                    <span>Solar Microgrid & Energy</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">Rooftop solar integration with 100% net-metered clean power.</p>
                </div>

                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">local_hospital</span>
                    <span>Primary Health Centre</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">24x7 emergency medical trauma unit & community telemedicine.</p>
                </div>

                <div class="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant space-y-1">
                  <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-emerald-600 text-base">storefront</span>
                    <span>Cooperative Tea Bazaar</span>
                  </div>
                  <p class="text-slate-500 text-[11px]">Direct marketing and livelihood rehabilitation fund of ₹45 Crores.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- Government Gazette Transparency & Download Section -->
      <section id="governance" class="py-16 bg-surface-container-lowest border-b border-outline-variant">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div class="text-center space-y-2">
            <h2 class="font-display-md text-2xl sm:text-3xl font-bold text-primary">
              Statutory Government Order & Gazette Dossier
            </h2>
            <p class="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Government of Kerala G.O. (Ms) No. 114/2026/DMD • Complete administrative and financial transparency
            </p>
          </div>

          <div class="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-outline-variant pb-4">
              <div>
                <span class="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">ORDER NO: G.O. (Ms) No. 114/2026/DMD</span>
                <h4 class="font-bold text-base text-slate-900 dark:text-white mt-0.5">Wayanad Landslide Rehabilitation & Relocation Project</h4>
              </div>
              <div class="flex items-center gap-2">
                <a href="#final-report" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow">
                  <span class="material-symbols-outlined text-sm">description</span>
                  <span>View Official Gazette</span>
                </a>
              </div>
            </div>

            <!-- Financial Table Summary -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Land Acquisition</span>
                <span class="font-bold text-slate-900 dark:text-white">₹42.00 Cr</span>
              </div>
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Housing Construction</span>
                <span class="font-bold text-slate-900 dark:text-white">₹185.00 Cr</span>
              </div>
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Utilities & Roads</span>
                <span class="font-bold text-slate-900 dark:text-white">₹118.50 Cr</span>
              </div>
              <div class="bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant">
                <span class="text-slate-500 block text-[10px]">Livelihood & Buffer</span>
                <span class="font-bold text-emerald-700 dark:text-emerald-400">₹83.00 Cr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Emergency Helpline Footer -->
      <footer class="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 text-xs">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-white font-bold text-sm">
              <span class="material-symbols-outlined text-emerald-500">shield_with_heart</span>
              <span>KSDMA Wayanad Portal</span>
            </div>
            <p class="text-slate-400 text-[11px] leading-relaxed">
              District Disaster Management Authority (DDMA), Collectorate, Kalpetta, Wayanad District, Kerala - 673122.
            </p>
          </div>

          <div>
            <div class="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Emergency Helplines</div>
            <ul class="space-y-1.5 text-slate-400">
              <li>• District Control Room: <strong class="text-white font-mono">1077</strong></li>
              <li>• Collectorate Helpline: <strong class="text-white font-mono">04936-204151</strong></li>
              <li>• NDRF Rapid Response: <strong class="text-white font-mono">0471-2331645</strong></li>
            </ul>
          </div>

          <div>
            <div class="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Intelligence Links</div>
            <ul class="space-y-1.5 text-slate-400">
              <li><a href="#dashboard" class="hover:text-white transition">Officer Command Dashboard</a></li>
              <li><a href="#map" class="hover:text-white transition">Interactive GIS Risk Map</a></li>
              <li><a href="#relocation-tool" class="hover:text-white transition">Relocation Planning Engine</a></li>
              <li><a href="#site-revalidation" class="hover:text-white transition">GSI Site Revalidation</a></li>
            </ul>
          </div>

          <div>
            <div class="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Statutory Partners</div>
            <p class="text-slate-400 text-[11px] leading-relaxed">
              Geological Survey of India (GSI), National Institute of Rock Mechanics (NIRM), Department of Revenue, and PWD Kerala.
            </p>
          </div>
        </div>

        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>© 2026 Kerala State Disaster Management Authority (KSDMA). All Rights Reserved.</div>
          <div class="flex items-center gap-4">
            <span>Security Clearance: LEVEL 5 AES-256</span>
            <span>Version 2.4-PROD</span>
          </div>
        </div>
      </footer>
    </div>
  `}function la(){const f=document.getElementById("landing-rain-slider"),l=document.getElementById("landing-sim-badge"),o=document.getElementById("landing-sim-results");f&&f.addEventListener("input",p=>{const u=parseInt(p.target.value,10),m=O.monsoonStressMatrix.find(g=>g.rainfallIntensity===u)||O.monsoonStressMatrix[0];l&&(l.textContent=m.label,l.className=`font-mono font-bold text-xs px-3 py-1 rounded-full ${u===0?"bg-emerald-100 text-emerald-800":u<50?"bg-blue-100 text-blue-800":u<100?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}`),o&&(o.innerHTML=`
          <div class="p-3.5 rounded-xl border ${m.siteASafetyClass}">
            <div class="font-bold">Site Alpha (Kalpetta)</div>
            <div class="text-[11px] mt-1">Status: <strong>${m.siteASafety}</strong></div>
            <div class="text-[10px] opacity-80 mt-1">Crystalline Plateau</div>
          </div>
          <div class="p-3.5 rounded-xl border ${m.siteBSafetyClass}">
            <div class="font-bold">Site Beta (Mananthavady)</div>
            <div class="text-[11px] mt-1">Status: <strong>${m.siteBSafety}</strong></div>
            <div class="text-[10px] opacity-80 mt-1">Terrace Overburden</div>
          </div>
          <div class="p-3.5 rounded-xl border ${m.siteCSafetyClass}">
            <div class="font-bold">Site Gamma (Nedumbala)</div>
            <div class="text-[11px] mt-1">Status: <strong>${m.siteCSafety}</strong></div>
            <div class="text-[10px] opacity-80 mt-1">Moderate Incline</div>
          </div>
        `)})}function da(){return`
    <div class="relative z-10 w-full max-w-lg px-4 md:px-0 mx-auto py-12">
      <!-- Glassmorphic Card -->
      <div class="bg-surface-container-lowest/95 backdrop-blur-md rounded-[2.5rem] border border-outline-variant p-8 md:p-12 shadow-2xl flex flex-col items-center text-center">
        <!-- Logo -->
        <div class="w-20 h-20 mb-6 rounded-2xl overflow-hidden border border-outline-variant flex-shrink-0 bg-surface-container flex items-center justify-center text-primary shadow-inner">
          <span class="material-symbols-outlined text-4xl">shield_with_heart</span>
        </div>

        <!-- Typography Header -->
        <h1 class="font-display-md text-2xl md:text-3xl text-primary font-bold tracking-tight mb-2">
          Wayanad Decision Portal
        </h1>
        <p class="font-body-sm text-sm text-on-surface-variant mb-8 max-w-xs leading-relaxed">
          Disaster Management & Model Resettlement Decision Support System
        </p>

        <!-- Form -->
        <form id="login-form" class="w-full space-y-4 text-left">
          <!-- Quick Profile Select -->
          <div class="space-y-1.5">
            <label class="font-label-md text-xs font-semibold text-on-surface">Officer Identity & Clearance</label>
            <div class="relative">
              <select id="login-profile-select" class="w-full bg-surface-container-low border border-outline-variant text-on-surface text-xs rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary">
                ${O.currentUserProfiles.map(f=>`
                  <option value="${f.id}">${f.name} — ${f.role}</option>
                `).join("")}
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant">
                <span class="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
          </div>

          <!-- Official ID/Email -->
          <div class="space-y-1.5">
            <label class="font-label-md text-xs font-semibold text-on-surface" for="officer-id">KSDMA Officer PIN / Token</label>
            <div class="relative">
              <input class="w-full bg-surface-container-low border border-outline-variant text-on-surface text-xs rounded-xl px-4 py-3 placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono" id="officer-id" placeholder="KSDMA-WYD-2026-981" type="text" value="KSDMA-WYD-2026-981"/>
              <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant">
                <span class="material-symbols-outlined text-sm">badge</span>
              </div>
            </div>
          </div>

          <!-- Clearance Code -->
          <div class="space-y-1.5">
            <label class="font-label-md text-xs font-semibold text-on-surface" for="clearance-key">Cabinet Encryption Key</label>
            <div class="relative">
              <input class="w-full bg-surface-container-low border border-outline-variant text-on-surface text-xs rounded-xl px-4 py-3 placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono" id="clearance-key" placeholder="••••••••••••" type="password" value="WayanadSafe2026!"/>
              <button type="button" class="absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant hover:text-on-surface" onclick="const el = document.getElementById('clearance-key'); el.type = el.type === 'password' ? 'text' : 'password'">
                <span class="material-symbols-outlined text-sm">visibility</span>
              </button>
            </div>
          </div>

          <!-- 2FA Prompt -->
          <div class="flex items-center justify-between text-xs py-1">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked class="rounded text-primary focus:ring-primary">
              <span class="text-on-surface-variant">Remember session</span>
            </label>
            <span class="text-emerald-700 font-mono text-[11px] flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 256-Bit SSL Encrypted
            </span>
          </div>

          <!-- Submit Button -->
          <button class="w-full mt-2 bg-primary hover:bg-primary-container active:scale-[0.99] text-on-primary font-bold text-xs py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg" type="submit">
            <span>Authorize & Enter Command Center</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </form>

        <!-- Quick Demo Profiles Bar -->
        <div class="w-full mt-6 pt-6 border-t border-outline-variant">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">Quick Login Role</p>
          <div class="grid grid-cols-3 gap-2">
            <button class="quick-login-role px-2 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-[11px] font-medium text-slate-700 dark:text-slate-200 transition text-center" data-profile="collector">
              Collector IAS
            </button>
            <button class="quick-login-role px-2 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-[11px] font-medium text-slate-700 dark:text-slate-200 transition text-center" data-profile="geologist">
              GSI Geologist
            </button>
            <button class="quick-login-role px-2 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-[11px] font-medium text-slate-700 dark:text-slate-200 transition text-center" data-profile="revenue">
              RDO Revenue
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function ca(){const f=document.getElementById("login-form");f&&f.addEventListener("submit",l=>{l.preventDefault();const o=document.getElementById("login-profile-select").value;I.login(o),Ct("Authentication verified. Welcome to Wayanad Disaster Management Portal.","success","ACCESS GRANTED"),window.location.hash="#dashboard"}),document.querySelectorAll(".quick-login-role").forEach(l=>{l.addEventListener("click",()=>{const o=l.dataset.profile;I.login(o),Ct(`Logged in as ${I.getState().currentUser.name}`,"success","OFFICER VERIFIED"),window.location.hash="#dashboard"})})}function si(){document.body.insertAdjacentHTML("beforeend",`
    <div id="emergency-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface-container-lowest border-2 border-rose-600 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
        <div class="flex items-center gap-3 text-rose-600">
          <span class="material-symbols-outlined text-3xl">emergency</span>
          <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">Emergency Relocation Broadcast</h3>
            <p class="text-xs text-rose-600 font-semibold">DISTRICT DISASTER MANAGEMENT AUTHORITY (DDMA)</p>
          </div>
        </div>

        <div class="bg-rose-50 dark:bg-rose-950/40 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
          <strong>CRITICAL NOTICE:</strong> Initiating automated CAP (Common Alerting Protocol) broadcast across Chooralmala, Mundakkai, Attamala, and Vellarmala.
        </div>

        <div class="space-y-2 text-xs">
          <label class="font-semibold text-slate-700 dark:text-slate-300">Broadcast Channel Distribution:</label>
          <div class="grid grid-cols-2 gap-2">
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>Cell Broadcast (SMS)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>Panchayat Siren Grid</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>Relief Camp Wardens</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>NDRF / Army Rapid Force</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          <button id="close-emergency-modal-btn" class="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            Cancel
          </button>
          <button id="confirm-broadcast-btn" class="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 rounded-lg shadow-lg flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">cell_tower</span> Transmit Priority Broadcast
          </button>
        </div>
      </div>
    </div>
  `),document.getElementById("close-emergency-modal-btn").addEventListener("click",()=>{var l;(l=document.getElementById("emergency-modal-backdrop"))==null||l.remove()}),document.getElementById("confirm-broadcast-btn").addEventListener("click",()=>{var l;(l=document.getElementById("emergency-modal-backdrop"))==null||l.remove(),Ct("Emergency Evacuation alert broadcast to all 3,420 households and 48 relief centers.","critical","BROADCAST TRANSMITTED")})}function ua(){document.body.insertAdjacentHTML("beforeend",`
    <div id="cabinet-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface-container-lowest border border-emerald-500 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
        <div class="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
          <span class="material-symbols-outlined text-3xl">verified</span>
          <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">Cabinet Approval Submission</h3>
            <p class="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">OFFICIAL GOVERNMENT ORDER CLEARANCE</p>
          </div>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed space-y-1">
          <p><strong>Government Order:</strong> G.O. (Ms) No. 114/2026/DMD</p>
          <p><strong>Primary Resettlement Site:</strong> Kalpetta North (Site Alpha - 64.5 Acres)</p>
          <p><strong>Total Sanctioned Budget:</strong> ₹428,50,00,000 (₹428.50 Crores)</p>
        </div>

        <div class="space-y-2 text-xs">
          <label class="font-semibold text-slate-700 dark:text-slate-300">Statutory Department Clearances Verified:</label>
          <ul class="space-y-1 text-slate-600 dark:text-slate-400">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Revenue Dept. - Survey 412/1A Title Vested</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Forest Dept. - Eco-Sensitive Zone Buffer Cleared</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> PWD Roads - Dual Arterial Access Verified</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> GSI / KSDMA - Negligible Hazard Score (0.04)</li>
          </ul>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          <button id="close-cabinet-modal-btn" class="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            Cancel
          </button>
          <button id="confirm-cabinet-btn" class="px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-95 rounded-lg shadow-lg flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">stamp</span> Affix Seal & Submit Dossier
          </button>
        </div>
      </div>
    </div>
  `),document.getElementById("close-cabinet-modal-btn").addEventListener("click",()=>{var l;(l=document.getElementById("cabinet-modal-backdrop"))==null||l.remove()}),document.getElementById("confirm-cabinet-btn").addEventListener("click",()=>{var o;(o=document.getElementById("cabinet-modal-backdrop"))==null||o.remove(),Ct("Cabinet Approval Dossier has been signed and officially submitted to the Chief Minister Secretariat.","success","DOSSIER TRANSMITTED");const l=document.getElementById("cabinet-seal-indicator");l&&(l.classList.remove("hidden"),l.classList.add("flex"))})}function ha(){const{overviewStats:f}=O.district,l=O.settlements;return`
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Title & Live Status Bar -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            DISTRICT EMERGENCY OPERATIONS CENTRE (DEOC) • LIVE SITUATION
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">District Overview & Situation Command</h1>
          <p class="text-xs text-on-surface-variant mt-1">Meppadi-Chooralmala-Mundakkai Relocation Action Matrix</p>
        </div>

        <div class="flex items-center gap-2">
          <button id="dashboard-emergency-btn" class="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow transition">
            <span class="material-symbols-outlined text-base">crisis_alert</span>
            <span>Trigger Emergency Alert</span>
          </button>
          <a href="#map" class="flex items-center gap-1.5 bg-primary hover:bg-primary-container text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow transition">
            <span class="material-symbols-outlined text-base">explore</span>
            <span>View Geo-Spatial Map</span>
          </a>
        </div>
      </div>

      <!-- KPI Overview Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Displaced Households -->
        <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between text-on-surface-variant mb-2">
            <span class="font-label-md text-xs font-semibold uppercase tracking-wider">Displaced Households</span>
            <span class="material-symbols-outlined text-primary text-xl">family_restroom</span>
          </div>
          <div class="font-display-md text-3xl font-bold text-on-surface">${f.displacedHouseholds.toLocaleString()}</div>
          <div class="mt-2 text-xs text-rose-600 font-medium flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">trending_up</span> 100% Relocation Mandated
          </div>
        </div>

        <!-- Active Relief Camps -->
        <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between text-on-surface-variant mb-2">
            <span class="font-label-md text-xs font-semibold uppercase tracking-wider">Active Relief Camps</span>
            <span class="material-symbols-outlined text-amber-600 text-xl">holiday_village</span>
          </div>
          <div class="font-display-md text-3xl font-bold text-on-surface">${f.activeReliefCamps}</div>
          <div class="mt-2 text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">check_circle</span> All 48 Camps Rationed & Staffed
          </div>
        </div>

        <!-- Critical Risk Zones -->
        <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between text-on-surface-variant mb-2">
            <span class="font-label-md text-xs font-semibold uppercase tracking-wider">Critical Risk Zones</span>
            <span class="material-symbols-outlined text-rose-600 text-xl">warning</span>
          </div>
          <div class="font-display-md text-3xl font-bold text-rose-600">${f.criticalRiskZones}</div>
          <div class="mt-2 text-xs text-rose-600 font-medium flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">priority_high</span> >35° Slope Incline & Debris Runoff
          </div>
        </div>

        <!-- Budget Allocated -->
        <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between text-on-surface-variant mb-2">
            <span class="font-label-md text-xs font-semibold uppercase tracking-wider">Sanctioned Budget</span>
            <span class="material-symbols-outlined text-emerald-600 text-xl">payments</span>
          </div>
          <div class="font-display-md text-3xl font-bold text-emerald-700 dark:text-emerald-400">₹${f.allocatedBudgetCr} Cr</div>
          <div class="mt-2 text-xs text-on-surface-variant font-medium flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">account_balance</span> G.O. (Ms) No. 114/2026 Cleared
          </div>
        </div>
      </div>

      <!-- Quick Action Navigation Tiles -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <a href="#map" class="group bg-surface-container hover:bg-secondary-container/40 p-4 rounded-xl border border-outline-variant transition flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center group-hover:scale-105 transition">
            <span class="material-symbols-outlined">map</span>
          </div>
          <div>
            <h4 class="font-bold text-xs text-on-surface">Interactive GIS Map</h4>
            <p class="text-[11px] text-on-surface-variant">Topography & Hazard Paths</p>
          </div>
        </a>

        <a href="#relocation-tool" class="group bg-surface-container hover:bg-secondary-container/40 p-4 rounded-xl border border-outline-variant transition flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center group-hover:scale-105 transition">
            <span class="material-symbols-outlined">hub</span>
          </div>
          <div>
            <h4 class="font-bold text-xs text-on-surface">Relocation Planner</h4>
            <p class="text-[11px] text-on-surface-variant">Multi-Criteria MCDA Matching</p>
          </div>
        </a>

        <a href="#site-revalidation" class="group bg-surface-container hover:bg-secondary-container/40 p-4 rounded-xl border border-outline-variant transition flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-blue-800 text-white flex items-center justify-center group-hover:scale-105 transition">
            <span class="material-symbols-outlined">fact_check</span>
          </div>
          <div>
            <h4 class="font-bold text-xs text-on-surface">Site Revalidation</h4>
            <p class="text-[11px] text-on-surface-variant">GSI & Inter-Dept Clearance</p>
          </div>
        </a>

        <a href="#final-report" class="group bg-surface-container hover:bg-secondary-container/40 p-4 rounded-xl border border-outline-variant transition flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center group-hover:scale-105 transition">
            <span class="material-symbols-outlined">description</span>
          </div>
          <div>
            <h4 class="font-bold text-xs text-on-surface">Executive Dossier</h4>
            <p class="text-[11px] text-on-surface-variant">Government Order & Cabinet Dossier</p>
          </div>
        </a>
      </div>

      <!-- Settlement Vulnerability Assessment Table -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div class="p-5 border-b border-outline-variant flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 class="font-headline-sm text-base font-bold text-primary">Settlement Vulnerability & Relocation Priority Index</h3>
            <p class="text-xs text-on-surface-variant">Real-time geological vulnerability status for Wayanad hillside communities</p>
          </div>

          <!-- Search & Filter Controls -->
          <div class="flex items-center gap-2 w-full md:w-auto">
            <div class="relative flex-1 md:w-56">
              <input type="text" id="settlement-search" placeholder="Search settlement..." class="w-full bg-surface-container-low border border-outline-variant text-xs rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary font-mono">
              <span class="material-symbols-outlined absolute left-2.5 top-2 text-sm text-slate-400">search</span>
            </div>
            <select id="settlement-filter-risk" class="bg-surface-container-low border border-outline-variant text-xs rounded-lg px-2.5 py-1.5 text-on-surface">
              <option value="ALL">All Risk Tiers</option>
              <option value="CRITICAL">Critical (>9.0)</option>
              <option value="HIGH">High (7.0 - 8.9)</option>
            </select>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-data-tabular">
            <thead class="bg-surface-container-high text-on-surface-variant uppercase text-[11px] tracking-wider border-b border-outline-variant">
              <tr>
                <th class="py-3 px-4 font-semibold">Settlement & Zone</th>
                <th class="py-3 px-4 font-semibold">Panchayat</th>
                <th class="py-3 px-4 font-semibold">Risk Index</th>
                <th class="py-3 px-4 font-semibold">Elevation / Slope</th>
                <th class="py-3 px-4 font-semibold">Displaced Families</th>
                <th class="py-3 px-4 font-semibold">Action Mandate</th>
                <th class="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody id="settlement-table-body" class="divide-y divide-outline-variant">
              ${l.map(o=>{const p=o.riskLevel==="CRITICAL";return`
                  <tr class="hover:bg-surface-container-low transition cursor-pointer settlement-row" data-id="${o.id}" data-risk="${o.riskLevel}" data-name="${o.name.toLowerCase()}">
                    <td class="py-3.5 px-4 font-semibold text-on-surface">
                      <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${p?"bg-red-600 animate-pulse":"bg-amber-500"}"></span>
                        <span>${o.name}</span>
                        <span class="text-[10px] text-slate-400 font-mono">(${o.zoneCode})</span>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 text-on-surface-variant">${o.panchayat}</td>
                    <td class="py-3.5 px-4">
                      <span class="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[11px] ${p?"bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300":"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"}">
                        <span class="material-symbols-outlined text-xs">crisis_alert</span> ${o.riskScore}/10 (${o.riskLevel})
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-on-surface">${o.elevation} • <strong class="text-rose-600">${o.slopeAngle}</strong></td>
                    <td class="py-3.5 px-4 font-bold text-on-surface">${o.displacedFamilies} (${o.totalPopulation} persons)</td>
                    <td class="py-3.5 px-4">
                      <span class="text-[11px] font-semibold text-emerald-800 dark:text-emerald-400">${o.recommendedAction}</span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <button class="inspect-settlement-btn bg-surface-container hover:bg-primary hover:text-white px-3 py-1 rounded text-xs font-semibold transition" data-id="${o.id}">
                        Inspect Profile →
                      </button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function pa(){var p;(p=document.getElementById("dashboard-emergency-btn"))==null||p.addEventListener("click",()=>{si()});const f=document.getElementById("settlement-search"),l=document.getElementById("settlement-filter-risk");function o(){const u=(f==null?void 0:f.value.toLowerCase())||"",m=(l==null?void 0:l.value)||"ALL";document.querySelectorAll(".settlement-row").forEach(g=>{const C=g.dataset.name||"",S=g.dataset.risk||"";C.includes(u)&&(m==="ALL"||S===m)?g.style.display="":g.style.display="none"})}f==null||f.addEventListener("input",o),l==null||l.addEventListener("change",o),document.querySelectorAll(".inspect-settlement-btn").forEach(u=>{u.addEventListener("click",m=>{m.stopPropagation();const g=u.dataset.id;I.selectSettlement(g),window.location.hash="#risk-profile"})}),document.querySelectorAll(".settlement-row").forEach(u=>{u.addEventListener("click",()=>{const m=u.dataset.id;I.selectSettlement(m),window.location.hash="#risk-profile"})})}function fa(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Qt={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var ma=Qt.exports,kn;function ga(){return kn||(kn=1,(function(f,l){(function(o,p){p(l)})(ma,(function(o){var p="1.9.4";function u(t){var e,i,n,s;for(i=1,n=arguments.length;i<n;i++){s=arguments[i];for(e in s)t[e]=s[e]}return t}var m=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function g(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var C=0;function S(t){return"_leaflet_id"in t||(t._leaflet_id=++C),t._leaflet_id}function bt(t,e,i){var n,s,a,r;return r=function(){n=!1,s&&(a.apply(i,s),s=!1)},a=function(){n?s=arguments:(t.apply(i,arguments),setTimeout(r,e),n=!0)},a}function at(t,e,i){var n=e[1],s=e[0],a=n-s;return t===n&&i?t:((t-s)%a+a)%a+s}function B(){return!1}function ot(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function be(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function yt(t){return be(t).split(/\s+/)}function D(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?m(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function ri(t,e,i){var n=[];for(var s in t)n.push(encodeURIComponent(i?s.toUpperCase():s)+"="+encodeURIComponent(t[s]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var Mn=/\{ *([\w_ -]+) *\}/g;function li(t,e){return t.replace(Mn,function(i,n){var s=e[n];if(s===void 0)throw new Error("No value provided for variable "+i);return typeof s=="function"&&(s=s(e)),s})}var it=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function ye(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var te="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function we(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var di=0;function ci(t){var e=+new Date,i=Math.max(0,16-(e-di));return di=e+i,window.setTimeout(t,i)}var Se=window.requestAnimationFrame||we("RequestAnimationFrame")||ci,ui=window.cancelAnimationFrame||we("CancelAnimationFrame")||we("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function V(t,e,i){if(i&&Se===ci)t.call(e);else return Se.call(window,g(t,e))}function X(t){t&&ui.call(window,t)}var In={__proto__:null,extend:u,create:m,bind:g,get lastId(){return C},stamp:S,throttle:bt,wrapNum:at,falseFn:B,formatNum:ot,trim:be,splitWords:yt,setOptions:D,getParamString:ri,template:li,isArray:it,indexOf:ye,emptyImageUrl:te,requestFn:Se,cancelFn:ui,requestAnimFrame:V,cancelAnimFrame:X};function ut(){}ut.extend=function(t){var e=function(){D(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=m(i);n.constructor=e,e.prototype=n;for(var s in this)Object.prototype.hasOwnProperty.call(this,s)&&s!=="prototype"&&s!=="__super__"&&(e[s]=this[s]);return t.statics&&u(e,t.statics),t.includes&&(Rn(t.includes),u.apply(null,[n].concat(t.includes))),u(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?m(i.options):{},u(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var a=0,r=n._initHooks.length;a<r;a++)n._initHooks[a].call(this)}},e},ut.include=function(t){var e=this.prototype.options;return u(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},ut.mergeOptions=function(t){return u(this.prototype.options,t),this},ut.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function Rn(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=it(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var J={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=yt(t);for(var s=0,a=t.length;s<a;s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=yt(t);for(var s=arguments.length===1,a=0,r=t.length;a<r;a++)s?this._off(t[a]):this._off(t[a],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var s={fn:e,ctx:i};n&&(s.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(s)}},_off:function(t,e,i){var n,s,a;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(s=0,a=n.length;s<a;s++)n[s].fn=B;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var r=this._listens(t,e,i);if(r!==!1){var d=n[r];this._firingCount&&(d.fn=B,this._events[t]=n=n.slice()),n.splice(r,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=u({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var a=0,r=s.length;a<r;a++){var d=s[a],c=d.fn;d.once&&this.off(t,c,d.ctx),c.call(d.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var s=e;typeof e!="function"&&(n=!!e,s=void 0,i=void 0);var a=this._events&&this._events[t];if(a&&a.length&&this._listens(t,s,i)!==!1)return!0;if(n){for(var r in this._eventParents)if(this._eventParents[r].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var s=0,a=n.length;s<a;s++)if(n[s].fn===e&&n[s].ctx===i)return s;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=yt(t);for(var s=0,a=t.length;s<a;s++)this._on(t[s],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[S(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[S(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,u({layer:t.target,propagatedFrom:t.target},t),!0)}};J.addEventListener=J.on,J.removeEventListener=J.clearAllEventListeners=J.off,J.addOneTimeEventListener=J.once,J.fireEvent=J.fire,J.hasEventListeners=J.listens;var zt=ut.extend(J);function y(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var hi=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};y.prototype={clone:function(){return new y(this.x,this.y)},add:function(t){return this.clone()._add(b(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(b(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new y(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new y(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=hi(this.x),this.y=hi(this.y),this},distanceTo:function(t){t=b(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=b(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=b(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+ot(this.x)+", "+ot(this.y)+")"}};function b(t,e,i){return t instanceof y?t:it(t)?new y(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new y(t.x,t.y):new y(t,e,i)}function z(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}z.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof y||typeof t[0]=="number"||"x"in t)e=i=b(t);else if(t=q(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return b((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return b(this.min.x,this.max.y)},getTopRight:function(){return b(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof y?t=b(t):t=q(t),t instanceof z?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=q(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},overlaps:function(t){t=q(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>e.x&&n.x<i.x,r=s.y>e.y&&n.y<i.y;return a&&r},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,s=Math.abs(e.y-i.y)*t;return q(b(e.x-n,e.y-s),b(i.x+n,i.y+s))},equals:function(t){return t?(t=q(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function q(t,e){return!t||t instanceof z?t:new z(t,e)}function K(t,e){if(t)for(var i=e?[t,e]:t,n=0,s=i.length;n<s;n++)this.extend(i[n])}K.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,s;if(t instanceof M)n=t,s=t;else if(t instanceof K){if(n=t._southWest,s=t._northEast,!n||!s)return this}else return t?this.extend(T(t)||H(t)):this;return!e&&!i?(this._southWest=new M(n.lat,n.lng),this._northEast=new M(s.lat,s.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(s.lat,i.lat),i.lng=Math.max(s.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new K(new M(e.lat-n,e.lng-s),new M(i.lat+n,i.lng+s))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof M||"lat"in t?t=T(t):t=H(t);var e=this._southWest,i=this._northEast,n,s;return t instanceof K?(n=t.getSouthWest(),s=t.getNorthEast()):n=s=t,n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=H(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},overlaps:function(t){t=H(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>e.lat&&n.lat<i.lat,r=s.lng>e.lng&&n.lng<i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=H(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function H(t,e){return t instanceof K?t:new K(t,e)}function M(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}M.prototype={equals:function(t,e){if(!t)return!1;t=T(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+ot(this.lat,t)+", "+ot(this.lng,t)+")"},distanceTo:function(t){return vt.distance(this,T(t))},wrap:function(){return vt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return H([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new M(this.lat,this.lng,this.alt)}};function T(t,e,i){return t instanceof M?t:it(t)&&typeof t[0]!="object"?t.length===3?new M(t[0],t[1],t[2]):t.length===2?new M(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new M(t,e,i)}var ht={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i);return new z(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?at(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?at(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new M(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,s=e.lng-i.lng;if(n===0&&s===0)return t;var a=t.getSouthWest(),r=t.getNorthEast(),d=new M(a.lat-n,a.lng-s),c=new M(r.lat-n,r.lng-s);return new K(d,c)}},vt=u({},ht,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,s=e.lat*i,a=Math.sin((e.lat-t.lat)*i/2),r=Math.sin((e.lng-t.lng)*i/2),d=a*a+Math.cos(n)*Math.cos(s)*r*r,c=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d));return this.R*c}}),pi=6378137,ke={R:pi,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e);return new y(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=pi*Math.PI;return new z([-t,-t],[t,t])})()};function Le(t,e,i,n){if(it(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Le.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new y((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function Nt(t,e,i,n){return new Le(t,e,i,n)}var Pe=u({},vt,{code:"EPSG:3857",projection:ke,transformation:(function(){var t=.5/(Math.PI*ke.R);return Nt(t,.5,-t,.5)})()}),On=u({},Pe,{code:"EPSG:900913"});function fi(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function mi(t,e){var i="",n,s,a,r,d,c;for(n=0,a=t.length;n<a;n++){for(d=t[n],s=0,r=d.length;s<r;s++)c=d[s],i+=(s?"L":"M")+c.x+" "+c.y;i+=e?x.svg?"z":"x":""}return i||"M0 0"}var Ce=document.documentElement.style,ee="ActiveXObject"in window,Dn=ee&&!document.addEventListener,gi="msLaunchUri"in navigator&&!("documentMode"in document),Te=rt("webkit"),vi=rt("android"),xi=rt("android 2")||rt("android 3"),Bn=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),zn=vi&&rt("Google")&&Bn<537&&!("AudioNode"in window),Ee=!!window.opera,_i=!gi&&rt("chrome"),bi=rt("gecko")&&!Te&&!Ee&&!ee,Nn=!_i&&rt("safari"),yi=rt("phantom"),wi="OTransition"in Ce,Zn=navigator.platform.indexOf("Win")===0,Si=ee&&"transition"in Ce,Ae="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!xi,ki="MozPerspective"in Ce,Hn=!window.L_DISABLE_3D&&(Si||Ae||ki)&&!wi&&!yi,Zt=typeof orientation<"u"||rt("mobile"),$n=Zt&&Te,Fn=Zt&&Ae,Li=!window.PointerEvent&&window.MSPointerEvent,Pi=!!(window.PointerEvent||Li),Ci="ontouchstart"in window||!!window.TouchEvent,Gn=!window.L_NO_TOUCH&&(Ci||Pi),Wn=Zt&&Ee,jn=Zt&&bi,Un=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Vn=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",B,e),window.removeEventListener("testPassiveEventSupport",B,e)}catch{}return t})(),qn=(function(){return!!document.createElement("canvas").getContext})(),Me=!!(document.createElementNS&&fi("svg").createSVGRect),Kn=!!Me&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Yn=!Me&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),Jn=navigator.platform.indexOf("Mac")===0,Xn=navigator.platform.indexOf("Linux")===0;function rt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var x={ie:ee,ielt9:Dn,edge:gi,webkit:Te,android:vi,android23:xi,androidStock:zn,opera:Ee,chrome:_i,gecko:bi,safari:Nn,phantom:yi,opera12:wi,win:Zn,ie3d:Si,webkit3d:Ae,gecko3d:ki,any3d:Hn,mobile:Zt,mobileWebkit:$n,mobileWebkit3d:Fn,msPointer:Li,pointer:Pi,touch:Gn,touchNative:Ci,mobileOpera:Wn,mobileGecko:jn,retina:Un,passiveEvents:Vn,canvas:qn,svg:Me,vml:Yn,inlineSvg:Kn,mac:Jn,linux:Xn},Ti=x.msPointer?"MSPointerDown":"pointerdown",Ei=x.msPointer?"MSPointerMove":"pointermove",Ai=x.msPointer?"MSPointerUp":"pointerup",Mi=x.msPointer?"MSPointerCancel":"pointercancel",Ie={touchstart:Ti,touchmove:Ei,touchend:Ai,touchcancel:Mi},Ii={touchstart:ss,touchmove:ie,touchend:ie,touchcancel:ie},Tt={},Ri=!1;function Qn(t,e,i){return e==="touchstart"&&ns(),Ii[e]?(i=Ii[e].bind(this,i),t.addEventListener(Ie[e],i,!1),i):(console.warn("wrong event specified:",e),B)}function ts(t,e,i){if(!Ie[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(Ie[e],i,!1)}function es(t){Tt[t.pointerId]=t}function is(t){Tt[t.pointerId]&&(Tt[t.pointerId]=t)}function Oi(t){delete Tt[t.pointerId]}function ns(){Ri||(document.addEventListener(Ti,es,!0),document.addEventListener(Ei,is,!0),document.addEventListener(Ai,Oi,!0),document.addEventListener(Mi,Oi,!0),Ri=!0)}function ie(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Tt)e.touches.push(Tt[i]);e.changedTouches=[e],t(e)}}function ss(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&W(e),ie(t,e)}function as(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var os=200;function rs(t,e){t.addEventListener("dblclick",e);var i=0,n;function s(a){if(a.detail!==1){n=a.detail;return}if(!(a.pointerType==="mouse"||a.sourceCapabilities&&!a.sourceCapabilities.firesTouchEvents)){var r=Zi(a);if(!(r.some(function(c){return c instanceof HTMLLabelElement&&c.attributes.for})&&!r.some(function(c){return c instanceof HTMLInputElement||c instanceof HTMLSelectElement}))){var d=Date.now();d-i<=os?(n++,n===2&&e(as(a))):n=1,i=d}}}return t.addEventListener("click",s),{dblclick:e,simDblclick:s}}function ls(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var Re=ae(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Ht=ae(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Di=Ht==="webkitTransition"||Ht==="OTransition"?Ht+"End":"transitionend";function Bi(t){return typeof t=="string"?document.getElementById(t):t}function $t(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function A(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function N(t){var e=t.parentNode;e&&e.removeChild(t)}function ne(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function Et(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function At(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Oe(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=se(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function k(t,e){if(t.classList!==void 0)for(var i=yt(e),n=0,s=i.length;n<s;n++)t.classList.add(i[n]);else if(!Oe(t,e)){var a=se(t);De(t,(a?a+" ":"")+e)}}function Z(t,e){t.classList!==void 0?t.classList.remove(e):De(t,be((" "+se(t)+" ").replace(" "+e+" "," ")))}function De(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function se(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function Q(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&ds(t,e)}function ds(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function ae(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function wt(t,e,i){var n=e||new y(0,0);t.style[Re]=(x.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function $(t,e){t._leaflet_pos=e,x.any3d?wt(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function St(t){return t._leaflet_pos||new y(0,0)}var Ft,Gt,Be;if("onselectstart"in document)Ft=function(){w(window,"selectstart",W)},Gt=function(){R(window,"selectstart",W)};else{var Wt=ae(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ft=function(){if(Wt){var t=document.documentElement.style;Be=t[Wt],t[Wt]="none"}},Gt=function(){Wt&&(document.documentElement.style[Wt]=Be,Be=void 0)}}function ze(){w(window,"dragstart",W)}function Ne(){R(window,"dragstart",W)}var oe,Ze;function He(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(re(),oe=t,Ze=t.style.outlineStyle,t.style.outlineStyle="none",w(window,"keydown",re))}function re(){oe&&(oe.style.outlineStyle=Ze,oe=void 0,Ze=void 0,R(window,"keydown",re))}function zi(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function $e(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var cs={__proto__:null,TRANSFORM:Re,TRANSITION:Ht,TRANSITION_END:Di,get:Bi,getStyle:$t,create:A,remove:N,empty:ne,toFront:Et,toBack:At,hasClass:Oe,addClass:k,removeClass:Z,setClass:De,getClass:se,setOpacity:Q,testProp:ae,setTransform:wt,setPosition:$,getPosition:St,get disableTextSelection(){return Ft},get enableTextSelection(){return Gt},disableImageDrag:ze,enableImageDrag:Ne,preventOutline:He,restoreOutline:re,getSizedParentNode:zi,getScale:$e};function w(t,e,i,n){if(e&&typeof e=="object")for(var s in e)Ge(t,s,e[s],i);else{e=yt(e);for(var a=0,r=e.length;a<r;a++)Ge(t,e[a],i,n)}return this}var lt="_leaflet_events";function R(t,e,i,n){if(arguments.length===1)Ni(t),delete t[lt];else if(e&&typeof e=="object")for(var s in e)We(t,s,e[s],i);else if(e=yt(e),arguments.length===2)Ni(t,function(d){return ye(e,d)!==-1});else for(var a=0,r=e.length;a<r;a++)We(t,e[a],i,n);return this}function Ni(t,e){for(var i in t[lt]){var n=i.split(/\d/)[0];(!e||e(n))&&We(t,n,null,null,i)}}var Fe={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ge(t,e,i,n){var s=e+S(i)+(n?"_"+S(n):"");if(t[lt]&&t[lt][s])return this;var a=function(d){return i.call(n||t,d||window.event)},r=a;!x.touchNative&&x.pointer&&e.indexOf("touch")===0?a=Qn(t,e,a):x.touch&&e==="dblclick"?a=rs(t,a):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Fe[e]||e,a,x.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(a=function(d){d=d||window.event,Ue(t,d)&&r(d)},t.addEventListener(Fe[e],a,!1)):t.addEventListener(e,r,!1):t.attachEvent("on"+e,a),t[lt]=t[lt]||{},t[lt][s]=a}function We(t,e,i,n,s){s=s||e+S(i)+(n?"_"+S(n):"");var a=t[lt]&&t[lt][s];if(!a)return this;!x.touchNative&&x.pointer&&e.indexOf("touch")===0?ts(t,e,a):x.touch&&e==="dblclick"?ls(t,a):"removeEventListener"in t?t.removeEventListener(Fe[e]||e,a,!1):t.detachEvent("on"+e,a),t[lt][s]=null}function kt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function je(t){return Ge(t,"wheel",kt),this}function jt(t){return w(t,"mousedown touchstart dblclick contextmenu",kt),t._leaflet_disable_click=!0,this}function W(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Lt(t){return W(t),kt(t),this}function Zi(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Hi(t,e){if(!e)return new y(t.clientX,t.clientY);var i=$e(e),n=i.boundingClientRect;return new y((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var us=x.linux&&x.chrome?window.devicePixelRatio:x.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function $i(t){return x.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/us:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Ue(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var hs={__proto__:null,on:w,off:R,stopPropagation:kt,disableScrollPropagation:je,disableClickPropagation:jt,preventDefault:W,stop:Lt,getPropagationPath:Zi,getMousePosition:Hi,getWheelDelta:$i,isExternalTarget:Ue,addListener:w,removeListener:R},Fi=zt.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=St(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=V(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),$(this._el,i),this.fire("step")},_complete:function(){X(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),E=zt.extend({options:{crs:Pe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=D(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=g(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(T(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Ht&&x.any3d&&!x.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),w(this._proxy,Di,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(T(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=u({animate:i.animate},i.zoom),i.pan=u({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(x.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof y?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),d=this.containerPointToLatLng(s.add(r));return this.setView(d,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():H(t);var i=b(e.paddingTopLeft||e.padding||[0,0]),n=b(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n));if(s=typeof e.maxZoom=="number"?Math.min(e.maxZoom,s):s,s===1/0)return{center:t.getCenter(),zoom:s};var a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),d=this.project(t.getNorthEast(),s),c=this.unproject(r.add(d).divideBy(2).add(a),s);return{center:c,zoom:s}},fitBounds:function(t,e){if(t=H(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=b(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Fi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){k(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!x.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),s=this.project(t),a=this.getSize(),r=this._zoom;t=T(t),e=e===void 0?r:e;var d=Math.max(a.x,a.y),c=d*this.getZoomScale(r,e),h=s.distanceTo(n)||1,v=1.42,_=v*v;function P(F){var _e=F?-1:1,ta=F?c:d,ea=c*c-d*d+_e*_*_*h*h,ia=2*ta*_*h,ni=ea/ia,Sn=Math.sqrt(ni*ni+1)-ni,na=Sn<1e-9?-18:Math.log(Sn);return na}function j(F){return(Math.exp(F)-Math.exp(-F))/2}function G(F){return(Math.exp(F)+Math.exp(-F))/2}function et(F){return j(F)/G(F)}var Y=P(0);function Bt(F){return d*(G(Y)/G(Y+v*F))}function Ys(F){return d*(G(Y)*et(Y+v*F)-j(Y))/_}function Js(F){return 1-Math.pow(1-F,1.5)}var Xs=Date.now(),yn=(P(1)-Y)/v,Qs=i.duration?1e3*i.duration:1e3*yn*.8;function wn(){var F=(Date.now()-Xs)/Qs,_e=Js(F)*yn;F<=1?(this._flyToFrame=V(wn,this),this._move(this.unproject(n.add(s.subtract(n).multiplyBy(Ys(_e)/h)),r),this.getScaleZoom(d/Bt(_e),r),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),wn.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=H(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,H(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=b(e.paddingTopLeft||e.padding||[0,0]),n=b(e.paddingBottomRight||e.padding||[0,0]),s=this.project(this.getCenter()),a=this.project(t),r=this.getPixelBounds(),d=q([r.min.add(i),r.max.subtract(n)]),c=d.getSize();if(!d.contains(a)){this._enforcingBounds=!0;var h=a.subtract(d.getCenter()),v=d.extend(a).getSize().subtract(c);s.x+=h.x<0?-v.x:v.x,s.y+=h.y<0?-v.y:v.y,this.panTo(this.unproject(s),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=u({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return!a.x&&!a.y?this:(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(g(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=u({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=g(this._handleGeolocationResponse,this),i=g(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new M(e,i),s=n.toBounds(t.coords.accuracy*2),a=this._locateOptions;if(a.setView){var r=this.getBoundsZoom(s);this.setView(n,a.maxZoom?Math.min(r,a.maxZoom):r)}var d={latlng:n,bounds:s,timestamp:t.timestamp};for(var c in t.coords)typeof t.coords[c]=="number"&&(d[c]=t.coords[c]);this.fire("locationfound",d)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),N(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(X(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)N(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=A("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new K(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=H(t),i=b(i||[0,0]);var n=this.getZoom()||0,s=this.getMinZoom(),a=this.getMaxZoom(),r=t.getNorthWest(),d=t.getSouthEast(),c=this.getSize().subtract(i),h=q(this.project(d,n),this.project(r,n)).getSize(),v=x.any3d?this.options.zoomSnap:1,_=c.x/h.x,P=c.y/h.y,j=e?Math.max(_,P):Math.min(_,P);return n=this.getScaleZoom(j,n),v&&(n=Math.round(n/(v/100))*(v/100),n=e?Math.ceil(n/v)*v:Math.floor(n/v)*v),Math.max(s,Math.min(a,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new y(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new z(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(T(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(b(t),e)},layerPointToLatLng:function(t){var e=b(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(T(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(T(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(H(t))},distance:function(t,e){return this.options.crs.distance(T(t),T(e))},containerPointToLayerPoint:function(t){return b(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return b(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(b(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(T(t)))},mouseEventToContainerPoint:function(t){return Hi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Bi(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");w(e,"scroll",this._onScroll,this),this._containerId=S(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&x.any3d,k(t,"leaflet-container"+(x.touch?" leaflet-touch":"")+(x.retina?" leaflet-retina":"")+(x.ielt9?" leaflet-oldie":"")+(x.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=$t(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),$(this._mapPane,new y(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(k(t.markerPane,"leaflet-zoom-hide"),k(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){$(this._mapPane,new y(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var s=this._zoom!==e;this._moveStart(s,i)._move(t,e)._moveEnd(s),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var s=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((s||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return X(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){$(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[S(this._container)]=this;var e=t?R:w;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),x.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){X(this._resizeRequest),this._resizeRequest=V(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,s=e==="mouseout"||e==="mouseover",a=t.target||t.srcElement,r=!1;a;){if(n=this._targets[S(a)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){r=!0;break}if(n&&n.listens(e,!0)&&(s&&!Ue(a,t)||(i.push(n),s))||a===this._container)break;a=a.parentNode}return!i.length&&!r&&!s&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&He(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=u({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var s=this._findEventTargets(t,e);if(i){for(var a=[],r=0;r<i.length;r++)i[r].listens(e,!0)&&a.push(i[r]);s=a.concat(s)}if(s.length){e==="contextmenu"&&W(t);var d=s[0],c={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var h=d.getLatLng&&(!d._radius||d._radius<=10);c.containerPoint=h?this.latLngToContainerPoint(d.getLatLng()):this.mouseEventToContainerPoint(t),c.layerPoint=this.containerPointToLayerPoint(c.containerPoint),c.latlng=h?d.getLatLng():this.layerPointToLatLng(c.layerPoint)}for(r=0;r<s.length;r++)if(s[r].fire(e,c,!0),c.originalEvent._stopped||s[r].options.bubblingMouseEvents===!1&&ye(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return St(this._mapPane)||new y(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return q([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new z(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return Math.abs(r.x)<=1&&Math.abs(r.y)<=1?t:this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new z(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=q(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),a=n.max.subtract(t.max),r=this._rebound(s.x,-a.x),d=this._rebound(s.y,-a.y);return new y(r,d)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=x.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Z(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=A("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=Re,n=this._proxy.style[i];wt(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){N(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();wt(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(s)?!1:(V(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,k(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(g(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Z(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function ps(t,e){return new E(t,e)}var nt=ut.extend({options:{position:"topright"},initialize:function(t){D(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return k(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(N(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Ut=function(t){return new nt(t)};E.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=A("div",e+"control-container",this._container);function n(s,a){var r=e+s+" "+e+a;t[s+a]=A("div",r,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)N(this._controlCorners[t]);N(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Gi=nt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){D(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return nt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(S(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){k(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(k(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):Z(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Z(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=A("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),jt(e),je(e);var n=this._section=A("section",t+"-list");i&&(this._map.on("click",this.collapse,this),w(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var s=this._layersLink=A("a",t+"-toggle",e);s.href="#",s.title="Layers",s.setAttribute("role","button"),w(s,{keydown:function(a){a.keyCode===13&&this._expandSafely()},click:function(a){W(a),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=A("div",t+"-base",n),this._separator=A("div",t+"-separator",n),this._overlaysList=A("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&S(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(g(function(n,s){return this.options.sortFunction(n.layer,s.layer,n.name,s.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ne(this._baseLayersList),ne(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,s=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(S(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+S(this),i),this._layerControlInputs.push(n),n.layerId=S(t.layer),w(n,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var a=document.createElement("span");e.appendChild(a),a.appendChild(n),a.appendChild(s);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],s=[];this._handlingClick=!0;for(var a=t.length-1;a>=0;a--)e=t[a],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||s.push(i);for(a=0;a<s.length;a++)this._map.hasLayer(s[a])&&this._map.removeLayer(s[a]);for(a=0;a<n.length;a++)this._map.hasLayer(n[a])||this._map.addLayer(n[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),s=t.length-1;s>=0;s--)e=t[s],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,w(t,"click",W),this.expand();var e=this;setTimeout(function(){R(t,"click",W),e._preventClick=!1})}}),fs=function(t,e,i){return new Gi(t,e,i)},Ve=nt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=A("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var a=A("a",i,n);return a.innerHTML=t,a.href="#",a.title=e,a.setAttribute("role","button"),a.setAttribute("aria-label",e),jt(a),w(a,"click",Lt),w(a,"click",s,this),w(a,"click",this._refocusOnMap,this),a},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";Z(this._zoomInButton,e),Z(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(k(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(k(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});E.mergeOptions({zoomControl:!0}),E.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ve,this.addControl(this.zoomControl))});var ms=function(t){return new Ve(t)},Wi=nt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=A("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=A("div",e,i)),t.imperial&&(this._iScale=A("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,s;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(s=this._getRoundNum(e),this._updateScale(this._iScale,s+" ft",s/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),gs=function(t){return new Wi(t)},vs='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',qe=nt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(x.inlineSvg?vs+" ":"")+"Leaflet</a>"},initialize:function(t){D(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=A("div","leaflet-control-attribution"),jt(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});E.mergeOptions({attributionControl:!0}),E.addInitHook(function(){this.options.attributionControl&&new qe().addTo(this)});var xs=function(t){return new qe(t)};nt.Layers=Gi,nt.Zoom=Ve,nt.Scale=Wi,nt.Attribution=qe,Ut.layers=fs,Ut.zoom=ms,Ut.scale=gs,Ut.attribution=xs;var dt=ut.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});dt.addTo=function(t,e){return t.addHandler(e,this),this};var _s={Events:J},ji=x.touch?"touchstart mousedown":"mousedown",xt=zt.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){D(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(w(this._dragStartTarget,ji,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(xt._dragging===this&&this.finishDrag(!0),R(this._dragStartTarget,ji,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Oe(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){xt._dragging===this&&this.finishDrag();return}if(!(xt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(xt._dragging=this,this._preventOutline&&He(this._element),ze(),Ft(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=zi(this._element);this._startPoint=new y(e.clientX,e.clientY),this._startPos=St(this._element),this._parentScale=$e(i);var n=t.type==="mousedown";w(document,n?"mousemove":"touchmove",this._onMove,this),w(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new y(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,W(t),this._moved||(this.fire("dragstart"),this._moved=!0,k(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),k(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),$(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){Z(document.body,"leaflet-dragging"),this._lastTarget&&(Z(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),R(document,"mousemove touchmove",this._onMove,this),R(document,"mouseup touchend touchcancel",this._onUp,this),Ne(),Gt();var e=this._moved&&this._moving;this._moving=!1,xt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Ui(t,e,i){var n,s=[1,4,2,8],a,r,d,c,h,v,_,P;for(a=0,v=t.length;a<v;a++)t[a]._code=Pt(t[a],e);for(d=0;d<4;d++){for(_=s[d],n=[],a=0,v=t.length,r=v-1;a<v;r=a++)c=t[a],h=t[r],c._code&_?h._code&_||(P=le(h,c,_,e,i),P._code=Pt(P,e),n.push(P)):(h._code&_&&(P=le(h,c,_,e,i),P._code=Pt(P,e),n.push(P)),n.push(c));t=n}return t}function Vi(t,e){var i,n,s,a,r,d,c,h,v;if(!t||t.length===0)throw new Error("latlngs not passed");tt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var _=T([0,0]),P=H(t),j=P.getNorthWest().distanceTo(P.getSouthWest())*P.getNorthEast().distanceTo(P.getNorthWest());j<1700&&(_=Ke(t));var G=t.length,et=[];for(i=0;i<G;i++){var Y=T(t[i]);et.push(e.project(T([Y.lat-_.lat,Y.lng-_.lng])))}for(d=c=h=0,i=0,n=G-1;i<G;n=i++)s=et[i],a=et[n],r=s.y*a.x-a.y*s.x,c+=(s.x+a.x)*r,h+=(s.y+a.y)*r,d+=r*3;d===0?v=et[0]:v=[c/d,h/d];var Bt=e.unproject(b(v));return T([Bt.lat+_.lat,Bt.lng+_.lng])}function Ke(t){for(var e=0,i=0,n=0,s=0;s<t.length;s++){var a=T(t[s]);e+=a.lat,i+=a.lng,n++}return T([e/n,i/n])}var bs={__proto__:null,clipPolygon:Ui,polygonCenter:Vi,centroid:Ke};function qi(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Ss(t,i),t=ws(t,i),t}function Ki(t,e,i){return Math.sqrt(Vt(t,e,i,!0))}function ys(t,e,i){return Vt(t,e,i)}function ws(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,s=new n(i);s[0]=s[i-1]=1,Ye(t,s,e,0,i-1);var a,r=[];for(a=0;a<i;a++)s[a]&&r.push(t[a]);return r}function Ye(t,e,i,n,s){var a=0,r,d,c;for(d=n+1;d<=s-1;d++)c=Vt(t[d],t[n],t[s],!0),c>a&&(r=d,a=c);a>i&&(e[r]=1,Ye(t,e,i,n,r),Ye(t,e,i,r,s))}function Ss(t,e){for(var i=[t[0]],n=1,s=0,a=t.length;n<a;n++)ks(t[n],t[s])>e&&(i.push(t[n]),s=n);return s<a-1&&i.push(t[a-1]),i}var Yi;function Ji(t,e,i,n,s){var a=n?Yi:Pt(t,i),r=Pt(e,i),d,c,h;for(Yi=r;;){if(!(a|r))return[t,e];if(a&r)return!1;d=a||r,c=le(t,e,d,i,s),h=Pt(c,i),d===a?(t=c,a=h):(e=c,r=h)}}function le(t,e,i,n,s){var a=e.x-t.x,r=e.y-t.y,d=n.min,c=n.max,h,v;return i&8?(h=t.x+a*(c.y-t.y)/r,v=c.y):i&4?(h=t.x+a*(d.y-t.y)/r,v=d.y):i&2?(h=c.x,v=t.y+r*(c.x-t.x)/a):i&1&&(h=d.x,v=t.y+r*(d.x-t.x)/a),new y(h,v,s)}function Pt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function ks(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function Vt(t,e,i,n){var s=e.x,a=e.y,r=i.x-s,d=i.y-a,c=r*r+d*d,h;return c>0&&(h=((t.x-s)*r+(t.y-a)*d)/c,h>1?(s=i.x,a=i.y):h>0&&(s+=r*h,a+=d*h)),r=t.x-s,d=t.y-a,n?r*r+d*d:new y(s,a)}function tt(t){return!it(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Xi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),tt(t)}function Qi(t,e){var i,n,s,a,r,d,c,h;if(!t||t.length===0)throw new Error("latlngs not passed");tt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var v=T([0,0]),_=H(t),P=_.getNorthWest().distanceTo(_.getSouthWest())*_.getNorthEast().distanceTo(_.getNorthWest());P<1700&&(v=Ke(t));var j=t.length,G=[];for(i=0;i<j;i++){var et=T(t[i]);G.push(e.project(T([et.lat-v.lat,et.lng-v.lng])))}for(i=0,n=0;i<j-1;i++)n+=G[i].distanceTo(G[i+1])/2;if(n===0)h=G[0];else for(i=0,a=0;i<j-1;i++)if(r=G[i],d=G[i+1],s=r.distanceTo(d),a+=s,a>n){c=(a-n)/s,h=[d.x-c*(d.x-r.x),d.y-c*(d.y-r.y)];break}var Y=e.unproject(b(h));return T([Y.lat+v.lat,Y.lng+v.lng])}var Ls={__proto__:null,simplify:qi,pointToSegmentDistance:Ki,closestPointOnSegment:ys,clipSegment:Ji,_getEdgeIntersection:le,_getBitCode:Pt,_sqClosestPointOnSegment:Vt,isFlat:tt,_flat:Xi,polylineCenter:Qi},Je={project:function(t){return new y(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new z([-180,-90],[180,90])},Xe={R:6378137,R_MINOR:6356752314245179e-9,bounds:new z([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,a=Math.sqrt(1-s*s),r=a*Math.sin(n),d=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),a/2);return n=-i*Math.log(Math.max(d,1e-10)),new y(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,s=Math.sqrt(1-n*n),a=Math.exp(-t.y/i),r=Math.PI/2-2*Math.atan(a),d=0,c=.1,h;d<15&&Math.abs(c)>1e-7;d++)h=s*Math.sin(r),h=Math.pow((1-h)/(1+h),s/2),c=Math.PI/2-2*Math.atan(a*h)-r,r+=c;return new M(r*e,t.x*e/i)}},Ps={__proto__:null,LonLat:Je,Mercator:Xe,SphericalMercator:ke},Cs=u({},vt,{code:"EPSG:3395",projection:Xe,transformation:(function(){var t=.5/(Math.PI*Xe.R);return Nt(t,.5,-t,.5)})()}),tn=u({},vt,{code:"EPSG:4326",projection:Je,transformation:Nt(1/180,1,-1/180,.5)}),Ts=u({},ht,{projection:Je,transformation:Nt(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});ht.Earth=vt,ht.EPSG3395=Cs,ht.EPSG3857=Pe,ht.EPSG900913=On,ht.EPSG4326=tn,ht.Simple=Ts;var st=zt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[S(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[S(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});E.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=S(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=S(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return S(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?it(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[S(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=S(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var s=this._zoomBoundLayers[n].options;t=s.minZoom===void 0?t:Math.min(t,s.minZoom),e=s.maxZoom===void 0?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Mt=st.extend({initialize:function(t,e){D(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return S(t)}}),Es=function(t,e){return new Mt(t,e)},pt=Mt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Mt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Mt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new K;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),As=function(t,e){return new pt(t,e)},It=ut.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){D(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var s=b(n),a=b(e==="shadow"&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),a&&(t.style.marginLeft=-a.x+"px",t.style.marginTop=-a.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return x.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Ms(t){return new It(t)}var qt=It.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof qt.imagePath!="string"&&(qt.imagePath=this._detectIconPath()),(this.options.imagePath||qt.imagePath)+It.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,s){var a=n.exec(i);return a&&a[s]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=A("div","leaflet-default-icon-path",document.body),e=$t(t,"background-image")||$t(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),en=dt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new xt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),k(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Z(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,s=this._marker.options.autoPanPadding,a=St(e._icon),r=i.getPixelBounds(),d=i.getPixelOrigin(),c=q(r.min._subtract(d).add(s),r.max._subtract(d).subtract(s));if(!c.contains(a)){var h=b((Math.max(c.max.x,a.x)-c.max.x)/(r.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(r.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(r.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(r.min.y-c.min.y)).multiplyBy(n);i.panBy(h,{animate:!1}),this._draggable._newPos._add(h),this._draggable._startPos._add(h),$(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=V(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(X(this._panRequest),this._panRequest=V(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=St(e._icon),s=e._map.layerPointToLatLng(n);i&&$(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){X(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),de=st.extend({options:{icon:new qt,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){D(this,e),this._latlng=T(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=T(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),k(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&w(i,"focus",this._panOnFocus,this);var s=t.icon.createShadow(this._shadow),a=!1;s!==this._shadow&&(this._removeShadow(),a=!0),s&&(k(s,e),s.alt=""),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&a&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&R(this._icon,"focus",this._panOnFocus,this),N(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&N(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&$(this._icon,t),this._shadow&&$(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(k(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),en)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new en(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&Q(this._icon,t),this._shadow&&Q(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?b(e.iconSize):b(0,0),n=e.iconAnchor?b(e.iconAnchor):b(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Is(t,e){return new de(t,e)}var _t=st.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return D(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ce=_t.extend({options:{fill:!0,radius:10},initialize:function(t,e){D(this,e),this._latlng=T(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=T(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return _t.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new z(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Rs(t,e){return new ce(t,e)}var Qe=ce.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=u({},i,{radius:e})),D(this,e),this._latlng=T(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new K(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:_t.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===vt.distance){var s=Math.PI/180,a=this._mRadius/vt.R/s,r=i.project([e+a,t]),d=i.project([e-a,t]),c=r.add(d).divideBy(2),h=i.unproject(c).lat,v=Math.acos((Math.cos(a*s)-Math.sin(e*s)*Math.sin(h*s))/(Math.cos(e*s)*Math.cos(h*s)))/s;(isNaN(v)||v===0)&&(v=a/Math.cos(Math.PI/180*e)),this._point=c.subtract(i.getPixelOrigin()),this._radius=isNaN(v)?0:c.x-i.project([h,t-v]).x,this._radiusY=c.y-r.y}else{var _=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(_).x}this._updateBounds()}});function Os(t,e,i){return new Qe(t,e,i)}var ft=_t.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){D(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=Vt,s,a,r=0,d=this._parts.length;r<d;r++)for(var c=this._parts[r],h=1,v=c.length;h<v;h++){s=c[h-1],a=c[h];var _=n(t,s,a,!0);_<e&&(e=_,i=n(t,s,a))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Qi(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=T(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new K,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return tt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=tt(t),n=0,s=t.length;n<s;n++)i?(e[n]=T(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new z;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new y(t,t);this._rawPxBounds&&(this._pxBounds=new z([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof M,s=t.length,a,r;if(n){for(r=[],a=0;a<s;a++)r[a]=this._map.latLngToLayerPoint(t[a]),i.extend(r[a]);e.push(r)}else for(a=0;a<s;a++)this._projectLatlngs(t[a],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,s,a,r,d,c;for(i=0,s=0,a=this._rings.length;i<a;i++)for(c=this._rings[i],n=0,r=c.length;n<r-1;n++)d=Ji(c[n],c[n+1],t,n,!0),d&&(e[s]=e[s]||[],e[s].push(d[0]),(d[1]!==c[n+1]||n===r-2)&&(e[s].push(d[1]),s++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=qi(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,s,a,r,d,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,a=this._parts.length;i<a;i++)for(d=this._parts[i],n=0,r=d.length,s=r-1;n<r;s=n++)if(!(!e&&n===0)&&Ki(t,d[s],d[n])<=c)return!0;return!1}});function Ds(t,e){return new ft(t,e)}ft._flat=Xi;var Rt=ft.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Vi(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=ft.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof M&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){ft.prototype._setLatLngs.call(this,t),tt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return tt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new y(e,e);if(t=new z(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,s=this._rings.length,a;n<s;n++)a=Ui(this._rings[n],t,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,s,a,r,d,c,h;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(a=0,c=this._parts.length;a<c;a++)for(i=this._parts[a],r=0,h=i.length,d=h-1;r<h;d=r++)n=i[r],s=i[d],n.y>t.y!=s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x&&(e=!e);return e||ft.prototype._containsPoint.call(this,t,!0)}});function Bs(t,e){return new Rt(t,e)}var mt=pt.extend({initialize:function(t,e){D(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=it(t)?t:t.features,i,n,s;if(e){for(i=0,n=e.length;i<n;i++)s=e[i],(s.geometries||s.geometry||s.features||s.coordinates)&&this.addData(s);return this}var a=this.options;if(a.filter&&!a.filter(t))return this;var r=ue(t,a);return r?(r.feature=fe(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=u({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function ue(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,s=[],a=e&&e.pointToLayer,r=e&&e.coordsToLatLng||ti,d,c,h,v;if(!n&&!i)return null;switch(i.type){case"Point":return d=r(n),nn(a,t,d,e);case"MultiPoint":for(h=0,v=n.length;h<v;h++)d=r(n[h]),s.push(nn(a,t,d,e));return new pt(s);case"LineString":case"MultiLineString":return c=he(n,i.type==="LineString"?0:1,r),new ft(c,e);case"Polygon":case"MultiPolygon":return c=he(n,i.type==="Polygon"?1:2,r),new Rt(c,e);case"GeometryCollection":for(h=0,v=i.geometries.length;h<v;h++){var _=ue({geometry:i.geometries[h],type:"Feature",properties:t.properties},e);_&&s.push(_)}return new pt(s);case"FeatureCollection":for(h=0,v=i.features.length;h<v;h++){var P=ue(i.features[h],e);P&&s.push(P)}return new pt(s);default:throw new Error("Invalid GeoJSON object.")}}function nn(t,e,i,n){return t?t(e,i):new de(i,n&&n.markersInheritOptions&&n)}function ti(t){return new M(t[1],t[0],t[2])}function he(t,e,i){for(var n=[],s=0,a=t.length,r;s<a;s++)r=e?he(t[s],e-1,i):(i||ti)(t[s]),n.push(r);return n}function ei(t,e){return t=T(t),t.alt!==void 0?[ot(t.lng,e),ot(t.lat,e),ot(t.alt,e)]:[ot(t.lng,e),ot(t.lat,e)]}function pe(t,e,i,n){for(var s=[],a=0,r=t.length;a<r;a++)s.push(e?pe(t[a],tt(t[a])?0:e-1,i,n):ei(t[a],n));return!e&&i&&s.length>0&&s.push(s[0].slice()),s}function Ot(t,e){return t.feature?u({},t.feature,{geometry:e}):fe(e)}function fe(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var ii={toGeoJSON:function(t){return Ot(this,{type:"Point",coordinates:ei(this.getLatLng(),t)})}};de.include(ii),Qe.include(ii),ce.include(ii),ft.include({toGeoJSON:function(t){var e=!tt(this._latlngs),i=pe(this._latlngs,e?1:0,!1,t);return Ot(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Rt.include({toGeoJSON:function(t){var e=!tt(this._latlngs),i=e&&!tt(this._latlngs[0]),n=pe(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Ot(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Mt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Ot(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(s){if(s.toGeoJSON){var a=s.toGeoJSON(t);if(i)n.push(a.geometry);else{var r=fe(a);r.type==="FeatureCollection"?n.push.apply(n,r.features):n.push(r)}}}),i?Ot(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function sn(t,e){return new mt(t,e)}var zs=sn,me=st.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=H(e),D(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(k(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){N(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&Et(this._image),this},bringToBack:function(){return this._map&&At(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=H(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:A("img");if(k(e,"leaflet-image-layer"),this._zoomAnimated&&k(e,"leaflet-zoom-animated"),this.options.className&&k(e,this.options.className),e.onselectstart=B,e.onmousemove=B,e.onload=g(this.fire,this,"load"),e.onerror=g(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;wt(this._image,i,e)},_reset:function(){var t=this._image,e=new z(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();$(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){Q(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Ns=function(t,e,i){return new me(t,e,i)},an=me.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:A("video");if(k(e,"leaflet-image-layer"),this._zoomAnimated&&k(e,"leaflet-zoom-animated"),this.options.className&&k(e,this.options.className),e.onselectstart=B,e.onmousemove=B,e.onloadeddata=g(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],s=0;s<i.length;s++)n.push(i[s].src);this._url=i.length>0?n:[e.src];return}it(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var a=0;a<this._url.length;a++){var r=A("source");r.src=this._url[a],e.appendChild(r)}}});function Zs(t,e,i){return new an(t,e,i)}var on=me.extend({_initImage:function(){var t=this._image=this._url;k(t,"leaflet-image-layer"),this._zoomAnimated&&k(t,"leaflet-zoom-animated"),this.options.className&&k(t,this.options.className),t.onselectstart=B,t.onmousemove=B}});function Hs(t,e,i){return new on(t,e,i)}var ct=st.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof M||it(t))?(this._latlng=T(t),D(this,e)):(D(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&Q(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&Q(this._container,1),this.bringToFront(),this.options.interactive&&(k(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(Q(this._container,0),this._removeTimeout=setTimeout(g(N,void 0,this._container),200)):N(this._container),this.options.interactive&&(Z(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=T(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Et(this._container),this},bringToBack:function(){return this._map&&At(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof pt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=b(this.options.offset),i=this._getAnchor();this._zoomAnimated?$(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}});E.include({_initOverlay:function(t,e,i,n){var s=e;return s instanceof t||(s=new t(n).setContent(e)),i&&s.setLatLng(i),s}}),st.include({_initOverlay:function(t,e,i,n){var s=i;return s instanceof t?(D(s,n),s._source=this):(s=e&&!n?e:new t(n,this),s.setContent(i)),s}});var ge=ct.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,ct.prototype.openOn.call(this,t)},onAdd:function(t){ct.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof _t||this._source.on("preclick",kt))},onRemove:function(t){ct.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof _t||this._source.off("preclick",kt))},getEvents:function(){var t=ct.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=A("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=A("div",t+"-content-wrapper",e);if(this._contentNode=A("div",t+"-content",i),jt(e),je(this._contentNode),w(e,"contextmenu",kt),this._tipContainer=A("div",t+"-tip-container",e),this._tip=A("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=A("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',w(n,"click",function(s){W(s),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",k(t,a)):Z(t,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();$(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt($t(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new y(this._containerLeft,-i-this._containerBottom);s._add(St(this._container));var a=t.layerPointToContainerPoint(s),r=b(this.options.autoPanPadding),d=b(this.options.autoPanPaddingTopLeft||r),c=b(this.options.autoPanPaddingBottomRight||r),h=t.getSize(),v=0,_=0;a.x+n+c.x>h.x&&(v=a.x+n-h.x+c.x),a.x-v-d.x<0&&(v=a.x-d.x),a.y+i+c.y>h.y&&(_=a.y+i-h.y+c.y),a.y-_-d.y<0&&(_=a.y-d.y),(v||_)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([v,_]))}},_getAnchor:function(){return b(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),$s=function(t,e){return new ge(t,e)};E.mergeOptions({closePopupOnClick:!0}),E.include({openPopup:function(t,e,i){return this._initOverlay(ge,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),st.include({bindPopup:function(t,e){return this._popup=this._initOverlay(ge,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof pt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Lt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof _t)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var ve=ct.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){ct.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){ct.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=ct.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=A("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+S(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,s=this._container,a=n.latLngToContainerPoint(n.getCenter()),r=n.layerPointToContainerPoint(t),d=this.options.direction,c=s.offsetWidth,h=s.offsetHeight,v=b(this.options.offset),_=this._getAnchor();d==="top"?(e=c/2,i=h):d==="bottom"?(e=c/2,i=0):d==="center"?(e=c/2,i=h/2):d==="right"?(e=0,i=h/2):d==="left"?(e=c,i=h/2):r.x<a.x?(d="right",e=0,i=h/2):(d="left",e=c+(v.x+_.x)*2,i=h/2),t=t.subtract(b(e,i,!0)).add(v).add(_),Z(s,"leaflet-tooltip-right"),Z(s,"leaflet-tooltip-left"),Z(s,"leaflet-tooltip-top"),Z(s,"leaflet-tooltip-bottom"),k(s,"leaflet-tooltip-"+d),$(s,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&Q(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return b(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Fs=function(t,e){return new ve(t,e)};E.include({openTooltip:function(t,e,i){return this._initOverlay(ve,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),st.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ve,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof pt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(w(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),w(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var rn=It.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ne(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=b(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Gs(t){return new rn(t)}It.Default=qt;var Kt=st.extend({options:{tileSize:256,opacity:1,updateWhenIdle:x.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){D(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),N(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Et(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(At(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=bt(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof y?t:new y(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,s=e.length,a;n<s;n++)a=e[n].style.zIndex,e[n]!==this._container&&a&&(i=t(i,+a));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!x.ielt9){Q(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var s=this._tiles[n];if(!(!s.current||!s.loaded)){var a=Math.min(1,(t-s.loaded)/200);Q(s.el,a),a<1?e=!0:(s.active?i=!0:this._onOpaqueTile(s),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(X(this._fadeFrame),this._fadeFrame=V(this._updateOpacity,this))}},_onOpaqueTile:B,_initContainer:function(){this._container||(this._container=A("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(N(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],s=this._map;return n||(n=this._levels[t]={},n.el=A("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=s.project(s.unproject(s.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,s.getCenter(),s.getZoom()),B(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:B,_onRemoveLevel:B,_onCreateLevel:B,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)N(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),a=Math.floor(e/2),r=i-1,d=new y(+s,+a);d.z=+r;var c=this._tileCoordsToKey(d),h=this._tiles[c];return h&&h.active?(h.retain=!0,!0):(h&&h.loaded&&(h.retain=!0),r>n?this._retainParent(s,a,r,n):!1)},_retainChildren:function(t,e,i,n){for(var s=2*t;s<2*t+2;s++)for(var a=2*e;a<2*e+2;a++){var r=new y(s,a);r.z=i+1;var d=this._tileCoordsToKey(r),c=this._tiles[d];if(c&&c.active){c.retain=!0;continue}else c&&c.loaded&&(c.retain=!0);i+1<n&&this._retainChildren(s,a,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var s=Math.round(e);this.options.maxZoom!==void 0&&s>this.options.maxZoom||this.options.minZoom!==void 0&&s<this.options.minZoom?s=void 0:s=this._clampZoom(s);var a=this.options.updateWhenZooming&&s!==this._tileZoom;(!n||a)&&(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();x.any3d?wt(t.el,s,n):$(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,s=this._map.getPixelWorldBounds(this._tileZoom);s&&(this._globalTileRange=this._pxBoundsToTileRange(s)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),a=e.getSize().divideBy(n*2);return new z(s.subtract(a),s.add(a))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),s=this._pxBoundsToTileRange(n),a=s.getCenter(),r=[],d=this.options.keepBuffer,c=new z(s.getBottomLeft().subtract([d,-d]),s.getTopRight().add([d,-d]));if(!(isFinite(s.min.x)&&isFinite(s.min.y)&&isFinite(s.max.x)&&isFinite(s.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var h in this._tiles){var v=this._tiles[h].coords;(v.z!==this._tileZoom||!c.contains(new y(v.x,v.y)))&&(this._tiles[h].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var _=s.min.y;_<=s.max.y;_++)for(var P=s.min.x;P<=s.max.x;P++){var j=new y(P,_);if(j.z=this._tileZoom,!!this._isValidTile(j)){var G=this._tiles[this._tileCoordsToKey(j)];G?G.current=!0:r.push(j)}}if(r.sort(function(Y,Bt){return Y.distanceTo(a)-Bt.distanceTo(a)}),r.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var et=document.createDocumentFragment();for(P=0;P<r.length;P++)this._addTile(r[P],et);this._level.el.appendChild(et)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return H(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),a=e.unproject(n,t.z),r=e.unproject(s,t.z);return[a,r]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new K(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new y(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(N(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){k(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=B,t.onmousemove=B,x.ielt9&&this.options.opacity<1&&Q(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),g(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&V(g(this._tileReady,this,t,null,s)),$(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(Q(i.el,0),X(this._fadeFrame),this._fadeFrame=V(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(k(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),x.ielt9||!this._map._fadeAnimated?V(this._pruneTiles,this):setTimeout(g(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new y(this._wrapX?at(t.x,this._wrapX):t.x,this._wrapY?at(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new z(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Ws(t){return new Kt(t)}var Dt=Kt.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=D(this,e),e.detectRetina&&x.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return w(i,"load",g(this._tileOnLoad,this,e,i)),w(i,"error",g(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:x.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return li(this._url,u(e,this.options))},_tileOnLoad:function(t,e){x.ielt9?setTimeout(g(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=B,e.onerror=B,!e.complete)){e.src=te;var i=this._tiles[t].coords;N(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",te),Kt.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===te))return Kt.prototype._tileReady.call(this,t,e,i)}});function ln(t,e){return new Dt(t,e)}var dn=Dt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=u({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=D(this,e);var s=e.detectRetina&&x.retina?2:1,a=this.getTileSize();i.width=a.x*s,i.height=a.y*s,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Dt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=q(i.project(e[0]),i.project(e[1])),s=n.min,a=n.max,r=(this._wmsVersion>=1.3&&this._crs===tn?[s.y,s.x,a.y,a.x]:[s.x,s.y,a.x,a.y]).join(","),d=Dt.prototype.getTileUrl.call(this,t);return d+ri(this.wmsParams,d,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return u(this.wmsParams,t),e||this.redraw(),this}});function js(t,e){return new dn(t,e)}Dt.WMS=dn,ln.wms=js;var gt=st.extend({options:{padding:.1},initialize:function(t){D(this,t),S(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),k(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,e),a=n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t,e));x.any3d?wt(this._container,a,i):$(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new z(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),cn=gt.extend({options:{tolerance:0},getEvents:function(){var t=gt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){gt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");w(t,"mousemove",this._onMouseMove,this),w(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),w(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){X(this._redrawRequest),delete this._ctx,N(this._container),R(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){gt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=x.retina?2:1;$(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",x.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){gt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[S(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[S(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,s;for(s=0;s<e.length;s++){if(n=Number(e[s]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||V(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new z,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,s,a,r=t._parts,d=r.length,c=this._ctx;if(d){for(c.beginPath(),i=0;i<d;i++){for(n=0,s=r[i].length;n<s;n++)a=r[i][n],c[n?"lineTo":"moveTo"](a.x,a.y);e&&c.closePath()}this._fillStroke(c,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),s=(Math.max(Math.round(t._radiusY),1)||n)/n;s!==1&&(i.save(),i.scale(1,s)),i.beginPath(),i.arc(e.x,e.y/s,n,0,Math.PI*2,!1),s!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(Z(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,s=this._drawFirst;s;s=s.next)i=s.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(k(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(g(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function un(t){return x.canvas?new cn(t):null}var Yt=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Us={_initContainer:function(){this._container=A("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(gt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=Yt("shape");k(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=Yt("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[S(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;N(e),t.removeInteractiveTarget(e),delete this._layers[S(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container;s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=Yt("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=it(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=Yt("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){Et(t._container)},_bringToBack:function(t){At(t._container)}},xe=x.vml?Yt:fi,Jt=gt.extend({_initContainer:function(){this._container=xe("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=xe("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){N(this._container),R(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){gt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),$(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=xe("path");t.options.className&&k(e,t.options.className),t.options.interactive&&k(e,"leaflet-interactive"),this._updateStyle(t),this._layers[S(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){N(t._path),t.removeInteractiveTarget(t._path),delete this._layers[S(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,mi(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,s="a"+i+","+n+" 0 1,0 ",a=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+s+i*2+",0 "+s+-i*2+",0 ";this._setPath(t,a)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){Et(t._path)},_bringToBack:function(t){At(t._path)}});x.vml&&Jt.include(Us);function hn(t){return x.svg||x.vml?new Jt(t):null}E.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&un(t)||hn(t)}});var pn=Rt.extend({initialize:function(t,e){Rt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=H(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Vs(t,e){return new pn(t,e)}Jt.create=xe,Jt.pointsToPath=mi,mt.geometryToLayer=ue,mt.coordsToLatLng=ti,mt.coordsToLatLngs=he,mt.latLngToCoords=ei,mt.latLngsToCoords=pe,mt.getFeature=Ot,mt.asFeature=fe,E.mergeOptions({boxZoom:!0});var fn=dt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){w(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){R(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){N(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ft(),ze(),this._startPoint=this._map.mouseEventToContainerPoint(t),w(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=A("div","leaflet-zoom-box",this._container),k(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new z(this._point,this._startPoint),i=e.getSize();$(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(N(this._box),Z(this._container,"leaflet-crosshair")),Gt(),Ne(),R(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(g(this._resetState,this),0);var e=new K(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});E.addInitHook("addHandler","boxZoom",fn),E.mergeOptions({doubleClickZoom:!0});var mn=dt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,s=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(s):e.setZoomAround(t.containerPoint,s)}});E.addInitHook("addHandler","doubleClickZoom",mn),E.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var gn=dt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new xt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}k(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Z(this._map._container,"leaflet-grab"),Z(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=H(this._map.options.maxBounds);this._offsetLimit=q(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,s=(n-e+i)%t+e-i,a=(n+e+i)%t-e-i,r=Math.abs(s+i)<Math.abs(a+i)?s:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var s=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,r=i.easeLinearity,d=s.multiplyBy(r/a),c=d.distanceTo([0,0]),h=Math.min(i.inertiaMaxSpeed,c),v=d.multiplyBy(h/c),_=h/(i.inertiaDeceleration*r),P=v.multiplyBy(-_/2).round();!P.x&&!P.y?e.fire("moveend"):(P=e._limitOffset(P,e.options.maxBounds),V(function(){e.panBy(P,{duration:_,easeLinearity:r,noMoveStart:!0,animate:!0})}))}}});E.addInitHook("addHandler","dragging",gn),E.mergeOptions({keyboard:!0,keyboardPanDelta:80});var vn=dt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),w(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),R(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,s;for(n=0,s=i.left.length;n<s;n++)e[i.left[n]]=[-1*t,0];for(n=0,s=i.right.length;n<s;n++)e[i.right[n]]=[t,0];for(n=0,s=i.down.length;n<s;n++)e[i.down[n]]=[0,t];for(n=0,s=i.up.length;n<s;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,s;for(n=0,s=i.zoomIn.length;n<s;n++)e[i.zoomIn[n]]=t;for(n=0,s=i.zoomOut.length;n<s;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){w(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){R(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=b(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(b(n),i.options.maxBounds)),i.options.worldCopyJump){var s=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(s)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Lt(t)}}});E.addInitHook("addHandler","keyboard",vn),E.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var xn=dt.extend({addHooks:function(){w(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){R(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=$i(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(g(this._performZoom,this),n),Lt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),s=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,a=i?Math.ceil(s/i)*i:s,r=t._limitZoom(e+(this._delta>0?a:-a))-e;this._delta=0,this._startTime=null,r&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}});E.addInitHook("addHandler","scrollWheelZoom",xn);var qs=600;E.mergeOptions({tapHold:x.touchNative&&x.safari&&x.mobile,tapTolerance:15});var _n=dt.extend({addHooks:function(){w(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){R(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new y(e.clientX,e.clientY),this._holdTimeout=setTimeout(g(function(){this._cancel(),this._isTapValid()&&(w(document,"touchend",W),w(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),qs),w(document,"touchend touchcancel contextmenu",this._cancel,this),w(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){R(document,"touchend",W),R(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),R(document,"touchend touchcancel contextmenu",this._cancel,this),R(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new y(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});E.addInitHook("addHandler","tapHold",_n),E.mergeOptions({touchZoom:x.touch,bounceAtZoomLimits:!0});var bn=dt.extend({addHooks:function(){k(this._map._container,"leaflet-touch-zoom"),w(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Z(this._map._container,"leaflet-touch-zoom"),R(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),w(document,"touchmove",this._onTouchMove,this),w(document,"touchend touchcancel",this._onTouchEnd,this),W(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,s===1)return}else{var a=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(s===1&&a.x===0&&a.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(a),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),X(this._animRequest);var r=g(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=V(r,this,!0),W(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,X(this._animRequest),R(document,"touchmove",this._onTouchMove,this),R(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});E.addInitHook("addHandler","touchZoom",bn),E.BoxZoom=fn,E.DoubleClickZoom=mn,E.Drag=gn,E.Keyboard=vn,E.ScrollWheelZoom=xn,E.TapHold=_n,E.TouchZoom=bn,o.Bounds=z,o.Browser=x,o.CRS=ht,o.Canvas=cn,o.Circle=Qe,o.CircleMarker=ce,o.Class=ut,o.Control=nt,o.DivIcon=rn,o.DivOverlay=ct,o.DomEvent=hs,o.DomUtil=cs,o.Draggable=xt,o.Evented=zt,o.FeatureGroup=pt,o.GeoJSON=mt,o.GridLayer=Kt,o.Handler=dt,o.Icon=It,o.ImageOverlay=me,o.LatLng=M,o.LatLngBounds=K,o.Layer=st,o.LayerGroup=Mt,o.LineUtil=Ls,o.Map=E,o.Marker=de,o.Mixin=_s,o.Path=_t,o.Point=y,o.PolyUtil=bs,o.Polygon=Rt,o.Polyline=ft,o.Popup=ge,o.PosAnimation=Fi,o.Projection=Ps,o.Rectangle=pn,o.Renderer=gt,o.SVG=Jt,o.SVGOverlay=on,o.TileLayer=Dt,o.Tooltip=ve,o.Transformation=Le,o.Util=In,o.VideoOverlay=an,o.bind=g,o.bounds=q,o.canvas=un,o.circle=Os,o.circleMarker=Rs,o.control=Ut,o.divIcon=Gs,o.extend=u,o.featureGroup=As,o.geoJSON=sn,o.geoJson=zs,o.gridLayer=Ws,o.icon=Ms,o.imageOverlay=Ns,o.latLng=T,o.latLngBounds=H,o.layerGroup=Es,o.map=ps,o.marker=Is,o.point=b,o.polygon=Bs,o.polyline=Ds,o.popup=$s,o.rectangle=Vs,o.setOptions=D,o.stamp=S,o.svg=hn,o.svgOverlay=Hs,o.tileLayer=ln,o.tooltip=Fs,o.transformation=Nt,o.version=p,o.videoOverlay=Zs;var Ks=window.L;o.noConflict=function(){return window.L=Ks,this},window.L=o}))})(Qt,Qt.exports)),Qt.exports}var va=ga();const U=fa(va);class xa{constructor(){this.map=null,this.markersLayer=null,this.hazardLayers={},this.satelliteLayer=null,this.osmLayer=null}initMap(l="leaflet-map-canvas"){if(!document.getElementById(l))return;this.map&&(this.map.remove(),this.map=null);const p=[11.538,76.135];return this.map=U.map(l,{center:p,zoom:13,zoomControl:!1,attributionControl:!1}),U.control.zoom({position:"topright"}).addTo(this.map),this.osmLayer=U.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(this.map),this.satelliteLayer=U.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}),this.markersLayer=U.layerGroup().addTo(this.map),this.hazardLayers.debris=U.layerGroup().addTo(this.map),this.hazardLayers.slope=U.layerGroup().addTo(this.map),this.hazardLayers.safeBuffers=U.layerGroup().addTo(this.map),this.renderHazardZones(),this.renderMarkers(),setTimeout(()=>{this.map&&this.map.invalidateSize()},200),this.map}renderHazardZones(){if(!this.map)return;const l=[[11.512,76.159],[11.5284,76.1512],[11.542,76.1415],[11.549,76.135],[11.554,76.126]],o=U.polyline(l,{color:"#dc2626",weight:6,opacity:.85,dashArray:"8, 8",lineCap:"round"});o.bindTooltip("<b>Catastrophic Debris Flow Axis</b><br>Velocity: 42 km/h during event",{sticky:!0}),this.hazardLayers.debris.addLayer(o);const p=[[11.5,76.13],[11.52,76.168],[11.536,76.165],[11.548,76.148],[11.53,76.128]],u=U.polygon(p,{color:"#b91c1c",fillColor:"#ef4444",fillOpacity:.22,weight:2});u.bindTooltip("<b>Red Zone: High Slope Failure Zone (>35°)</b><br>Rainfall Threshold: 140mm/24h",{sticky:!0}),this.hazardLayers.slope.addLayer(u),O.candidateResettlementSites.forEach(m=>{const g=m.id==="site_alpha",C=U.circle(m.coordinates,{radius:g?1800:1400,color:g?"#10b981":"#0284c7",fillColor:g?"#34d399":"#38bdf8",fillOpacity:.18,weight:2,dashArray:"4, 4"});C.bindTooltip(`<b>${m.name}</b><br>Safe Buffer: ${m.terrainSlope}`,{sticky:!0}),this.hazardLayers.safeBuffers.addLayer(C)})}renderMarkers(){!this.map||!this.markersLayer||(this.markersLayer.clearLayers(),O.settlements.forEach(l=>{const o=l.riskLevel==="CRITICAL",p=`
        <div class="relative cursor-pointer group">
          <div class="absolute -inset-1 rounded-full ${o?"bg-red-500 animate-ping opacity-40":"bg-amber-500 opacity-20"}"></div>
          <div class="relative w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center font-bold text-white text-xs ${o?"bg-red-600":"bg-amber-600"}">
            <span class="material-symbols-outlined text-base">warning</span>
          </div>
          <div class="absolute left-10 top-0 bg-slate-900/90 text-white text-xs font-semibold px-2.5 py-1 rounded shadow whitespace-nowrap hidden group-hover:block z-50">
            ${l.name} (${l.riskScore}/10)
          </div>
        </div>
      `,u=U.divIcon({className:"custom-settlement-marker",html:p,iconSize:[32,32],iconAnchor:[16,16]}),m=U.marker(l.coordinates,{icon:u});m.on("click",()=>{I.selectSettlement(l.id),this.updateInspector(l,"settlement")}),this.markersLayer.addLayer(m)}),O.candidateResettlementSites.forEach(l=>{const o=l.id==="site_alpha",u=`
        <div class="relative cursor-pointer group">
          <div class="relative w-9 h-9 rounded-full border-2 border-white shadow-xl flex items-center justify-center font-bold text-white text-xs ${o?"bg-emerald-600":l.id==="site_beta"?"bg-blue-600":"bg-slate-500"}">
            <span class="material-symbols-outlined text-base">${o?"verified":"domain"}</span>
          </div>
          <div class="absolute left-10 top-0 bg-slate-900/95 text-white text-xs font-semibold px-2.5 py-1 rounded shadow whitespace-nowrap hidden group-hover:block z-50">
            ${l.name} • ${l.availableAreaAcres} Acres
          </div>
        </div>
      `,m=U.divIcon({className:"custom-site-marker",html:u,iconSize:[36,36],iconAnchor:[18,18]}),g=U.marker(l.coordinates,{icon:m});g.on("click",()=>{I.selectSite(l.id),this.updateInspector(l,"site")}),this.markersLayer.addLayer(g)}))}updateInspector(l,o){const p=document.getElementById("map-inspector-drawer");p&&(o==="settlement"?p.innerHTML=`
        <div class="p-5 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <span class="inline-flex items-center gap-1 bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                <span class="material-symbols-outlined text-xs">crisis_alert</span> ${l.riskLevel} (${l.riskScore}/10)
              </span>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white mt-1">${l.name}</h3>
              <p class="text-xs text-slate-500">${l.panchayat} Panchayat • ${l.zoneCode}</p>
            </div>
            <button onclick="document.getElementById('map-inspector-drawer').classList.add('translate-x-full')" class="text-slate-400 hover:text-slate-600">
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Elevation</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${l.elevation}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Slope Incline</span>
              <span class="font-semibold text-rose-600 dark:text-rose-400">${l.slopeAngle}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">24h Rain Gauge</span>
              <span class="font-semibold text-blue-600 dark:text-blue-400">${l.rainfall24h}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Displaced</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${l.displacedFamilies} Families</span>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between text-xs">
              <span class="text-slate-600 dark:text-slate-300">Debris Flow Vulnerability</span>
              <span class="font-bold text-red-600">${l.debrisFlowVulnerability}%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div class="bg-red-600 h-full rounded-full" style="width: ${l.debrisFlowVulnerability}%"></div>
            </div>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-300 bg-red-50 dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-900 leading-relaxed">
            ${l.hazardSummary}
          </p>

          <div class="flex flex-col gap-2 pt-2">
            <a href="#risk-profile" class="w-full text-center bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg shadow transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">assignment</span> Open Full Risk Profile
            </a>
            <a href="#relocation-tool" class="w-full text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">hub</span> Run Relocation Planner
            </a>
          </div>
        </div>
      `:p.innerHTML=`
        <div class="p-5 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                <span class="material-symbols-outlined text-xs">verified</span> ${l.code} • ${l.status}
              </span>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white mt-1">${l.name}</h3>
              <p class="text-xs text-slate-500">${l.panchayat} • ${l.taluk} Taluk</p>
            </div>
            <button onclick="document.getElementById('map-inspector-drawer').classList.add('translate-x-full')" class="text-slate-400 hover:text-slate-600">
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Area Available</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${l.availableAreaAcres} Acres</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Capacity</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">${l.capacityHouseholds} Units</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Soil Stability</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">${l.soilStabilityScore}/10</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Est. Budget</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">₹${l.totalEstimatedCostCr} Cr</span>
            </div>
          </div>

          <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-xs space-y-1">
            <span class="font-semibold text-slate-800 dark:text-slate-200">GSI Engineering Summary:</span>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${l.gsiBoreholeSummary}</p>
          </div>

          <div class="flex flex-col gap-2 pt-2">
            <a href="#site-revalidation" class="w-full text-center bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg shadow transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">fact_check</span> Site Revalidation Clearance
            </a>
            <a href="#recommendation" class="w-full text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">thunderstorm</span> Run Climate Stress Simulator
            </a>
          </div>
        </div>
      `,p.classList.remove("translate-x-full"))}toggleLayer(l,o){this.map&&(l==="satelliteBasemap"?o?(this.map.removeLayer(this.osmLayer),this.map.addLayer(this.satelliteLayer)):(this.map.removeLayer(this.satelliteLayer),this.map.addLayer(this.osmLayer)):this.hazardLayers[l]&&(o?this.map.addLayer(this.hazardLayers[l]):this.map.removeLayer(this.hazardLayers[l])))}focusCoordinates(l,o=14){this.map&&this.map.flyTo(l,o,{duration:1.2})}}const Xt=new xa;function _a(){const{mapLayers:f}=I.getState();return`
    <div class="relative w-full h-[calc(100vh-4rem)] flex overflow-hidden">
      <!-- Full Bleed Leaflet Map Canvas -->
      <div id="leaflet-map-canvas" class="w-full h-full bg-slate-200 z-10"></div>

      <!-- Top Map Controls Floating Bar -->
      <div class="absolute top-4 left-4 right-4 md:right-auto z-20 flex flex-wrap items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-2xl border border-outline-variant shadow-lg text-xs">
        <div class="font-bold text-primary flex items-center gap-1.5 px-2">
          <span class="material-symbols-outlined text-base">layers</span>
          <span>GIS Layers:</span>
        </div>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer font-medium">
          <input type="checkbox" id="layer-toggle-debris" ${f.hazardDebris?"checked":""} class="rounded text-red-600 focus:ring-red-500">
          <span class="text-rose-700 font-semibold">Debris Flow Axis</span>
        </label>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer font-medium">
          <input type="checkbox" id="layer-toggle-slope" ${f.slope35?"checked":""} class="rounded text-red-600 focus:ring-red-500">
          <span class="text-amber-700 font-semibold">Slope > 35°</span>
        </label>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer font-medium">
          <input type="checkbox" id="layer-toggle-buffers" ${f.safeBuffers?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
          <span class="text-emerald-700 font-semibold">Safe Resettlement Buffers</span>
        </label>

        <div class="h-4 w-px bg-outline-variant mx-1"></div>

        <button id="toggle-satellite-btn" class="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary hover:bg-primary-container text-white font-semibold shadow-sm transition">
          <span class="material-symbols-outlined text-sm">satellite_alt</span>
          <span>${f.satelliteBasemap?"Vector Map":"Satellite View"}</span>
        </button>
      </div>

      <!-- Bottom Floating Legend Card -->
      <div class="absolute bottom-6 left-4 z-20 bg-surface-container-lowest/90 backdrop-blur-md p-3.5 rounded-2xl border border-outline-variant shadow-lg text-xs space-y-1.5 max-w-xs">
        <div class="font-bold text-on-surface uppercase text-[10px] tracking-wider text-slate-500">Map Legend</div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-600 animate-ping"></span>
          <span class="text-on-surface">Critical Landslide Zones (>9.0 RPI)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-amber-500"></span>
          <span class="text-on-surface">High Hazard Valley Slope</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-emerald-600"></span>
          <span class="text-on-surface">Candidate Resettlement Plateaus</span>
        </div>
        <div class="flex items-center gap-2 text-slate-500 font-mono text-[10px] pt-1 border-t border-outline-variant">
          <span>Center: 11.538° N, 76.135° E (Meppadi Axis)</span>
        </div>
      </div>

      <!-- Slide-over Settlement / Site Inspector Drawer -->
      <div id="map-inspector-drawer" class="absolute top-0 right-0 bottom-0 w-80 md:w-96 bg-surface-container-lowest border-l border-outline-variant shadow-2xl z-30 transform translate-x-full transition-transform duration-300 overflow-y-auto">
        <!-- Dynamic content injected by mapService -->
      </div>
    </div>
  `}function ba(){var f,l,o,p;setTimeout(()=>{Xt.initMap("leaflet-map-canvas")},100),(f=document.getElementById("layer-toggle-debris"))==null||f.addEventListener("change",u=>{Xt.toggleLayer("debris",u.target.checked)}),(l=document.getElementById("layer-toggle-slope"))==null||l.addEventListener("change",u=>{Xt.toggleLayer("slope",u.target.checked)}),(o=document.getElementById("layer-toggle-buffers"))==null||o.addEventListener("change",u=>{Xt.toggleLayer("safeBuffers",u.target.checked)}),(p=document.getElementById("toggle-satellite-btn"))==null||p.addEventListener("click",()=>{const u=!I.getState().mapLayers.satelliteBasemap;I.toggleMapLayer("satelliteBasemap"),Xt.toggleLayer("satelliteBasemap",u);const m=document.getElementById("toggle-satellite-btn");m&&(m.querySelector("span:last-child").textContent=u?"Vector Map":"Satellite View")})}function Ln(){const{selectedSettlementId:f}=I.getState(),l=O.settlements.find(p=>p.id===f)||O.settlements[0];return`
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header & Settlement Selector -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[11px] ${l.riskLevel==="CRITICAL"?"bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300":"bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"}">
              <span class="material-symbols-outlined text-xs">crisis_alert</span> ${l.riskLevel} (${l.riskScore}/10)
            </span>
            <span class="text-xs font-mono text-slate-500">${l.zoneCode}</span>
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">${l.name} Settlement</h1>
          <p class="text-xs text-on-surface-variant mt-1">${l.panchayat} Panchayat • Taluk Vythiri</p>
        </div>

        <!-- Dynamic Settlement Selector -->
        <div class="flex items-center gap-3 w-full md:w-auto">
          <div class="relative w-full md:w-64">
            <select id="risk-profile-settlement-select" class="w-full bg-surface-container-lowest border border-outline-variant text-xs rounded-xl px-3.5 py-2.5 font-semibold text-on-surface appearance-none focus:ring-2 focus:ring-primary">
              ${O.settlements.map(p=>`
                <option value="${p.id}" ${p.id===l.id?"selected":""}>
                  ${p.name} (${p.riskScore}/10 - ${p.riskLevel})
                </option>
              `).join("")}
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
              <span class="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>

          <a href="#relocation-tool" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition whitespace-nowrap flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">hub</span>
            <span>Relocate Settlement</span>
          </a>
        </div>
      </div>

      <!-- Top Summary Metrics Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-data-tabular">
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">Elevation MSL</span>
          <span class="font-bold text-base text-on-surface">${l.elevation}</span>
          <span class="text-[11px] text-slate-400 block mt-0.5">Catchment Ridge Zone</span>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">Slope Incline</span>
          <span class="font-bold text-base text-rose-600">${l.slopeAngle}</span>
          <span class="text-[11px] text-rose-600 block mt-0.5">Exceeds 30° Threshold</span>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">24h Rainfall Level</span>
          <span class="font-bold text-base text-blue-600">${l.rainfall24h}</span>
          <span class="text-[11px] text-blue-600 block mt-0.5">Extreme Saturation</span>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">Affected Families</span>
          <span class="font-bold text-base text-on-surface">${l.displacedFamilies}</span>
          <span class="text-[11px] text-slate-500 block mt-0.5">${l.totalPopulation} total population</span>
        </div>
      </div>

      <!-- Forensic Hazard Matrix & Demographics -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Geological Hazard Assessment -->
        <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-5">
          <div class="flex items-center justify-between border-b border-outline-variant pb-3">
            <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined">terrain</span> Geological Hazard Decomposition
            </h3>
            <span class="text-xs font-mono text-slate-500">GSI Assessment</span>
          </div>

          <div class="space-y-4 text-xs">
            <div>
              <div class="flex justify-between font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300">Debris Flow Vulnerability Index</span>
                <span class="text-rose-600 font-bold">${l.debrisFlowVulnerability}% (Catastrophic)</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-rose-600 h-full rounded-full transition-all duration-500" style="width: ${l.debrisFlowVulnerability}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300">Slope Runoff & Pore Water Pressure</span>
                <span class="text-rose-600 font-bold">${l.slopeRunoffIndex}% (Critical)</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-rose-600 h-full rounded-full transition-all duration-500" style="width: ${l.slopeRunoffIndex}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300">Soil Liquefaction & Regolith Failure</span>
                <span class="text-amber-600 font-bold">${l.soilLiquefactionIndex}% (High)</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-amber-500 h-full rounded-full transition-all duration-500" style="width: ${l.soilLiquefactionIndex}%"></div>
              </div>
            </div>
          </div>

          <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant space-y-2 text-xs">
            <div class="flex justify-between">
              <span class="text-slate-500">Overburden Regolith Depth:</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${l.regolithDepth}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Underlying Bedrock Complex:</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${l.bedrockType}</span>
            </div>
          </div>

          <p class="text-xs text-rose-900 dark:text-rose-200 bg-rose-50 dark:bg-rose-950/40 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 leading-relaxed">
            <strong>Geotechnical Conclusion:</strong> ${l.hazardSummary}
          </p>
        </div>

        <!-- Social Demographics & Infrastructure Losses -->
        <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-5">
          <div class="flex items-center justify-between border-b border-outline-variant pb-3">
            <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined">group</span> Demographic Census & Vulnerabilities
            </h3>
            <span class="text-xs font-mono text-slate-500">DDMA Field Survey</span>
          </div>

          <!-- Demographics Grid -->
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Elderly & Differently Abled</span>
              <span class="font-bold text-lg text-slate-900 dark:text-white">${l.demographics.elderlyAndDisabled}</span>
              <span class="text-[10px] text-slate-400">High assistance priority</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Children Under 10</span>
              <span class="font-bold text-lg text-slate-900 dark:text-white">${l.demographics.childrenUnder10}</span>
              <span class="text-[10px] text-slate-400">Anganwadi & school need</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Livestock Holdings</span>
              <span class="font-bold text-lg text-slate-900 dark:text-white">${l.demographics.livestockHoldings}</span>
              <span class="text-[10px] text-slate-400">Cattle sheds & fodder plan</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Below Poverty Line (BPL)</span>
              <span class="font-bold text-lg text-emerald-700 dark:text-emerald-400">${l.demographics.bplRatio}</span>
              <span class="text-[10px] text-slate-400">100% Free housing grant</span>
            </div>
          </div>

          <!-- Critical Infrastructure Losses -->
          <div class="space-y-2 text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-300 block">Critical Infrastructure Damage Status:</span>
            <ul class="space-y-1.5">
              ${l.criticalInfrastructureLoss.map(p=>`
                <li class="flex items-center gap-2 p-2 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-100 dark:border-rose-900/50">
                  <span class="material-symbols-outlined text-rose-600 text-sm">cancel</span>
                  <span>${p}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function Pn(){var f;(f=document.getElementById("risk-profile-settlement-select"))==null||f.addEventListener("change",l=>{I.selectSettlement(l.target.value);const o=document.getElementById("screen-risk-profile");o&&(o.innerHTML=Ln(),Pn())})}function Cn(){const{selectedSettlementId:f,mcdaWeights:l}=I.getState(),o=O.settlements.find(u=>u.id===f)||O.settlements[0],p=I.getCalculatedSiteScores();return`
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">hub</span>
            MULTI-CRITERIA DECISION ANALYSIS (MCDA) ENGINE
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">Relocation Planning & Site Matching</h1>
          <p class="text-xs text-on-surface-variant mt-1">Algorithmic Resettlement Site Optimization for Displaced Communities</p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-xs text-slate-500">Target Settlement:</span>
          <span class="bg-surface-container font-bold text-xs text-primary px-3 py-1.5 rounded-lg border border-outline-variant">
            ${o.name} (${o.displacedFamilies} Families)
          </span>
        </div>
      </div>

      <!-- MCDA Parameter Sliders & Dynamic Weights -->
      <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined">tune</span> Decision Weight Matrix Adjuster
          </h3>
          <span class="text-xs text-slate-500 font-mono">Real-time Score Recalibration</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <!-- Geological Stability Weight -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
            <div class="flex justify-between font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Geological Stability</span>
              <span id="weight-geo-val" class="text-primary font-bold font-mono">${l.geological}%</span>
            </div>
            <input type="range" id="weight-geo" min="10" max="60" value="${l.geological}" class="w-full accent-primary">
            <span class="text-[10px] text-slate-400 block">Bedrock depth, SPT N-value, slope < 10°</span>
          </div>

          <!-- Proximity & Distance Weight -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
            <div class="flex justify-between font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Proximity Buffer</span>
              <span id="weight-dist-val" class="text-primary font-bold font-mono">${l.distance}%</span>
            </div>
            <input type="range" id="weight-dist" min="10" max="50" value="${l.distance}" class="w-full accent-primary">
            <span class="text-[10px] text-slate-400 block">Distance from landslide hazard corridor</span>
          </div>

          <!-- Land Cost & Acquisition Weight -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
            <div class="flex justify-between font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Land & Civil Cost</span>
              <span id="weight-cost-val" class="text-primary font-bold font-mono">${l.cost}%</span>
            </div>
            <input type="range" id="weight-cost" min="10" max="50" value="${l.cost}" class="w-full accent-primary">
            <span class="text-[10px] text-slate-400 block">Acquisition budget & grading works</span>
          </div>

          <!-- Utility & Road Readiness Weight -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
            <div class="flex justify-between font-semibold">
              <span class="text-slate-700 dark:text-slate-300">Utility Readiness</span>
              <span id="weight-util-val" class="text-primary font-bold font-mono">${l.utility}%</span>
            </div>
            <input type="range" id="weight-util" min="10" max="50" value="${l.utility}" class="w-full accent-primary">
            <span class="text-[10px] text-slate-400 block">Water pipeline, 33kV power & highway</span>
          </div>
        </div>
      </div>

      <!-- Ranked Candidate Sites -->
      <div class="space-y-4">
        <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
          <span class="material-symbols-outlined">analytics</span> Optimized Candidate Sites Ranking
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" id="candidate-sites-container">
          ${p.map((u,m)=>{const g=m===0;return`
              <div class="bg-surface-container-lowest rounded-2xl border ${g?"border-2 border-emerald-600 shadow-xl":"border-outline-variant shadow-sm"} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative">
                ${g?`
                  <div class="absolute -top-3 right-6 bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <span class="material-symbols-outlined text-xs">emoji_events</span> #1 Best Algorithm Match
                  </div>
                `:""}

                <div class="space-y-4">
                  <div>
                    <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span class="font-mono font-bold">${u.code}</span>
                      <span class="font-semibold text-emerald-700 dark:text-emerald-400 font-mono text-sm">${u.calculatedScore}/10 Overall</span>
                    </div>
                    <h4 class="font-bold text-lg text-slate-900 dark:text-white">${u.name}</h4>
                    <p class="text-xs text-on-surface-variant">${u.panchayat} • ${u.taluk} Taluk</p>
                  </div>

                  <!-- Scores Breakdown -->
                  <div class="grid grid-cols-2 gap-2 text-xs bg-surface-container-low p-3 rounded-xl border border-outline-variant">
                    <div>
                      <span class="text-slate-400 block text-[10px]">Area Available</span>
                      <span class="font-bold text-slate-800 dark:text-slate-200">${u.availableAreaAcres} Acres</span>
                    </div>
                    <div>
                      <span class="text-slate-400 block text-[10px]">Capacity</span>
                      <span class="font-bold text-emerald-700 dark:text-emerald-400">${u.capacityHouseholds} Units</span>
                    </div>
                    <div>
                      <span class="text-slate-400 block text-[10px]">Distance to Zone</span>
                      <span class="font-bold text-slate-800 dark:text-slate-200">${u.distanceFromDisasterKm} km</span>
                    </div>
                    <div>
                      <span class="text-slate-400 block text-[10px]">Total Est. Cost</span>
                      <span class="font-bold text-slate-800 dark:text-slate-200">₹${u.totalEstimatedCostCr} Cr</span>
                    </div>
                  </div>

                  <div class="text-xs space-y-1.5">
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                      <span>Soil Stability Score:</span>
                      <strong class="text-emerald-600">${u.soilStabilityScore}/10</strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                      <span>Utility & Road Score:</span>
                      <strong class="text-emerald-600">${u.utilityReadinessScore}/10</strong>
                    </div>
                    <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                      <span>GSI Safety Rating:</span>
                      <strong class="text-slate-800 dark:text-slate-200">${u.gsiSafetyRating.split("(")[0]}</strong>
                    </div>
                  </div>
                </div>

                <div class="pt-5 border-t border-outline-variant mt-4">
                  <button class="select-candidate-site-btn w-full ${g?"bg-primary hover:bg-primary-container text-white":"bg-surface-container hover:bg-surface-container-high text-on-surface"} font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2" data-site-id="${u.id}">
                    <span class="material-symbols-outlined text-base">fact_check</span>
                    <span>Revalidate ${u.code} Clearance →</span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `}function Tn(){const f=document.getElementById("weight-geo"),l=document.getElementById("weight-dist"),o=document.getElementById("weight-cost"),p=document.getElementById("weight-util");function u(){const m={geological:parseInt((f==null?void 0:f.value)||35,10),distance:parseInt((l==null?void 0:l.value)||25,10),cost:parseInt((o==null?void 0:o.value)||20,10),utility:parseInt((p==null?void 0:p.value)||20,10)};I.setMCDAWeights(m),document.getElementById("weight-geo-val").textContent=`${m.geological}%`,document.getElementById("weight-dist-val").textContent=`${m.distance}%`,document.getElementById("weight-cost-val").textContent=`${m.cost}%`,document.getElementById("weight-util-val").textContent=`${m.utility}%`;const g=document.getElementById("screen-relocation-tool");g&&(g.innerHTML=Cn(),Tn())}f==null||f.addEventListener("input",u),l==null||l.addEventListener("input",u),o==null||o.addEventListener("input",u),p==null||p.addEventListener("input",u),document.querySelectorAll(".select-candidate-site-btn").forEach(m=>{m.addEventListener("click",()=>{const g=m.dataset.siteId;I.selectSite(g),Ct(`Selected ${g.toUpperCase()} for statutory revalidation clearance.`,"info","SITE LOCKED"),window.location.hash="#site-revalidation"})})}function ai(){const{selectedSiteId:f,siteSignoffs:l}=I.getState(),o=O.candidateResettlementSites.find(m=>m.id===f)||O.candidateResettlementSites[0],p=l[o.id]||{revenue:!0,forest:!0,pwd:!0,ksdma:!0},u=p.revenue&&p.forest&&p.pwd&&p.ksdma;return`
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">fact_check</span>
            GSI ENGINEERING & STATUTORY COMPLIANCE AUDIT
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">${o.name} Revalidation</h1>
          <p class="text-xs text-on-surface-variant mt-1">${o.panchayat} • ${o.availableAreaAcres} Acres • ${o.gsiSafetyRating}</p>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <!-- Site Selector -->
          <div class="relative w-full md:w-60">
            <select id="revalidation-site-select" class="w-full bg-surface-container-lowest border border-outline-variant text-xs rounded-xl px-3.5 py-2.5 font-semibold text-on-surface appearance-none focus:ring-2 focus:ring-primary">
              ${O.candidateResettlementSites.map(m=>`
                <option value="${m.id}" ${m.id===o.id?"selected":""}>
                  ${m.code}: ${m.name.split("(")[0]}
                </option>
              `).join("")}
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
              <span class="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>

          <a href="#recommendation" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition whitespace-nowrap flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">thunderstorm</span>
            <span>Simulate Monsoon Stress</span>
          </a>
        </div>
      </div>

      <!-- Clearance Status Badge Banner -->
      <div class="p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${u?"bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200":"bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200"}">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl ${u?"text-emerald-600":"text-amber-600"}">
            ${u?"verified":"pending_actions"}
          </span>
          <div>
            <div class="font-bold text-sm uppercase tracking-wide">
              ${u?"Statutory Revalidation: ALL CLEARANCES GRANTED":"Statutory Revalidation: PENDING INTER-DEPARTMENTAL CLEARANCE"}
            </div>
            <div class="text-xs opacity-80">
              ${u?"Ready for Final Cabinet Order (G.O.) inclusion and land acquisition vesting.":"One or more department clearances are awaiting formal officer sign-off below."}
            </div>
          </div>
        </div>
        <span class="font-mono text-xs font-bold px-3 py-1 rounded-full ${u?"bg-emerald-600 text-white":"bg-amber-600 text-white"}">
          ${u?"CABINET READY":"CONDITIONAL"}
        </span>
      </div>

      <!-- Grid: Geological Testing & Department Sign-offs -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- GSI Geological & Engineering Specs -->
        <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
          <div class="flex items-center justify-between border-b border-outline-variant pb-3">
            <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined">biotech</span> GSI Borehole Soil & Rock Mechanics Log
            </h3>
            <span class="text-xs font-mono text-slate-500">Borehole Core BH-04</span>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Terrain Incline</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${o.terrainSlope}</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Soil Stability Rating</span>
              <span class="font-bold text-emerald-700 dark:text-emerald-400">${o.soilStabilityScore} / 10 (Class A)</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Capacity Provision</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${o.capacityHouseholds} Units (${o.availableAreaAcres} Acres)</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Civil Delivery Timeline</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${o.estimatedDeliveryMonths} Months</span>
            </div>
          </div>

          <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant space-y-2 text-xs">
            <div class="font-semibold text-slate-800 dark:text-slate-200">Borehole Strata Summary:</div>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${o.gsiBoreholeSummary}</p>
          </div>

          <div class="space-y-2 text-xs">
            <div class="flex justify-between py-1 border-b border-outline-variant">
              <span class="text-slate-500">Water Supply Network:</span>
              <span class="font-medium text-slate-800 dark:text-slate-200 text-right">${o.waterSupply}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-outline-variant">
              <span class="text-slate-500">Power Grid Feed:</span>
              <span class="font-medium text-slate-800 dark:text-slate-200 text-right">${o.powerGrid}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-slate-500">Access Road Arterial:</span>
              <span class="font-medium text-slate-800 dark:text-slate-200 text-right">${o.accessRoad}</span>
            </div>
          </div>
        </div>

        <!-- Multi-Department Clearance Checklist -->
        <div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm space-y-4">
          <div class="flex items-center justify-between border-b border-outline-variant pb-3">
            <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined">gavel</span> Multi-Department Statutory Sign-Offs
            </h3>
            <span class="text-xs font-mono text-slate-500">4 Clearances Required</span>
          </div>

          <div class="space-y-3 text-xs">
            <!-- 1. Revenue Department -->
            <div class="p-3.5 rounded-xl border transition ${p.revenue?"bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800":"bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">1. Department of Revenue (Govt. of Kerala)</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${p.revenue?"bg-emerald-600 text-white":"bg-amber-500 text-white"}">
                      ${p.revenue?"APPROVED":"PENDING"}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${o.signoffs.revenue.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${o.signoffs.revenue.officer} • ${o.signoffs.revenue.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${o.id}" data-dept="revenue">
                  <span class="material-symbols-outlined text-base">${p.revenue?"check_box":"check_box_outline_blank"}</span>
                </button>
              </div>
            </div>

            <!-- 2. Forest & Wildlife Department -->
            <div class="p-3.5 rounded-xl border transition ${p.forest?"bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800":"bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">2. Department of Forest & Wildlife</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${p.forest?"bg-emerald-600 text-white":"bg-amber-500 text-white"}">
                      ${p.forest?"APPROVED":"PENDING"}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${o.signoffs.forest.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${o.signoffs.forest.officer} • ${o.signoffs.forest.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${o.id}" data-dept="forest">
                  <span class="material-symbols-outlined text-base">${p.forest?"check_box":"check_box_outline_blank"}</span>
                </button>
              </div>
            </div>

            <!-- 3. Public Works Department (PWD) -->
            <div class="p-3.5 rounded-xl border transition ${p.pwd?"bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800":"bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">3. Public Works Department (PWD Roads)</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${p.pwd?"bg-emerald-600 text-white":"bg-amber-500 text-white"}">
                      ${p.pwd?"APPROVED":"PENDING"}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${o.signoffs.pwd.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${o.signoffs.pwd.officer} • ${o.signoffs.pwd.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${o.id}" data-dept="pwd">
                  <span class="material-symbols-outlined text-base">${p.pwd?"check_box":"check_box_outline_blank"}</span>
                </button>
              </div>
            </div>

            <!-- 4. KSDMA Hazard Clearance -->
            <div class="p-3.5 rounded-xl border transition ${p.ksdma?"bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800":"bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">4. Kerala State Disaster Management Authority (KSDMA)</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${p.ksdma?"bg-emerald-600 text-white":"bg-amber-500 text-white"}">
                      ${p.ksdma?"APPROVED":"PENDING"}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${o.signoffs.ksdma.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${o.signoffs.ksdma.officer} • ${o.signoffs.ksdma.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${o.id}" data-dept="ksdma">
                  <span class="material-symbols-outlined text-base">${p.ksdma?"check_box":"check_box_outline_blank"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function oi(){var f;(f=document.getElementById("revalidation-site-select"))==null||f.addEventListener("change",l=>{I.selectSite(l.target.value);const o=document.getElementById("screen-site-revalidation");o&&(o.innerHTML=ai(),oi())}),document.querySelectorAll(".toggle-signoff-btn").forEach(l=>{l.addEventListener("click",()=>{const o=l.dataset.site,p=l.dataset.dept;I.toggleSignoff(o,p),Ct(`Toggled statutory clearance for ${p.toUpperCase()}`,"info","SIGN-OFF UPDATED");const u=document.getElementById("screen-site-revalidation");u&&(u.innerHTML=ai(),oi())})})}function En(){const{simulatedRainfallIntensity:f}=I.getState(),l=O.monsoonStressMatrix.find(o=>o.rainfallIntensity===f)||O.monsoonStressMatrix[0];return`
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">thunderstorm</span>
            EXTREME WEATHER CLIMATE STRESS SIMULATOR (100-YR RETURN PERIOD)
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">Climate Scenarios & Comparative Recommendation</h1>
          <p class="text-xs text-on-surface-variant mt-1">Stress-testing candidate resettlement sites against monsoon surge precipitation</p>
        </div>

        <a href="#final-report" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">description</span>
          <span>Generate Cabinet Dossier</span>
        </a>
      </div>

      <!-- Live Rainfall Slider Simulator -->
      <div class="bg-surface-container-lowest p-6 rounded-2xl border-2 border-primary/30 shadow-lg space-y-4">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined text-blue-600">rainy</span> Simulated Monsoon Precipitation Surge
            </h3>
            <p class="text-xs text-slate-500">Slide to test site geotechnical resilience under varying cloudburst scenarios</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-500 font-mono">Current Scenario:</span>
            <span id="rain-intensity-badge" class="font-bold text-xs px-3 py-1 rounded-full font-mono bg-secondary-container text-on-secondary-container">
              ${l.label}
            </span>
          </div>
        </div>

        <!-- Slider Bar -->
        <div class="space-y-2 py-2">
          <input type="range" id="rainfall-sim-slider" min="0" max="100" step="25" value="${f}" class="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary">
          <div class="flex justify-between text-[11px] font-mono text-slate-500">
            <span>0% (Base)</span>
            <span>+25% (Heavy)</span>
            <span>+50% (Very Heavy)</span>
            <span>+75% (Severe)</span>
            <span>+100% (Cloudburst)</span>
          </div>
        </div>

        <!-- Real-Time Projected Status Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <!-- Site Alpha -->
          <div class="p-4 rounded-xl border ${l.siteASafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE ALPHA (Kalpetta North)</span>
                <span class="material-symbols-outlined text-sm">verified</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${l.siteASafety}</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              Crystalline Plateau • Zero residual boulder hazard
            </div>
          </div>

          <!-- Site Beta -->
          <div class="p-4 rounded-xl border ${l.siteBSafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE BETA (Mananthavady)</span>
                <span class="material-symbols-outlined text-sm">domain</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${l.siteBSafety}</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              Terrace Overburden • Moderate saturation capacity
            </div>
          </div>

          <!-- Site Gamma -->
          <div class="p-4 rounded-xl border ${l.siteCSafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE GAMMA (Nedumbala)</span>
                <span class="material-symbols-outlined text-sm">warning</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${l.siteCSafety}</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              Intermediate Slope • Secondary seepage failure risk
            </div>
          </div>
        </div>
      </div>

      <!-- Comparison Matrix Table -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div class="p-5 border-b border-outline-variant">
          <h3 class="font-headline-sm text-base font-bold text-primary">Technical Site Comparison Matrix</h3>
          <p class="text-xs text-on-surface-variant">Comparative analysis across core engineering, financial, and ecological parameters</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-data-tabular">
            <thead class="bg-surface-container-high text-on-surface-variant uppercase text-[11px] tracking-wider border-b border-outline-variant">
              <tr>
                <th class="py-3 px-4 font-semibold">Parameter</th>
                <th class="py-3 px-4 font-semibold text-emerald-800 dark:text-emerald-400">Site Alpha (Kalpetta North)</th>
                <th class="py-3 px-4 font-semibold text-blue-800 dark:text-blue-400">Site Beta (Mananthavady)</th>
                <th class="py-3 px-4 font-semibold text-slate-500">Site Gamma (Nedumbala)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant">
              <tr class="hover:bg-surface-container-low transition">
                <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Geotechnical Classification</td>
                <td class="py-3 px-4 font-bold text-emerald-700 dark:text-emerald-400">Class A (Crystalline Plateau)</td>
                <td class="py-3 px-4 text-slate-800 dark:text-slate-200">Class B+ (Undulating Terrace)</td>
                <td class="py-3 px-4 text-rose-600">Class C (Moderate Slope)</td>
              </tr>
              <tr class="hover:bg-surface-container-low transition">
                <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Available Land Area</td>
                <td class="py-3 px-4 font-bold text-on-surface">64.5 Acres (Vested Govt.)</td>
                <td class="py-3 px-4 text-on-surface">88.0 Acres (Revenue Pool)</td>
                <td class="py-3 px-4 text-on-surface">45.0 Acres (Private Tea Estate)</td>
              </tr>
              <tr class="hover:bg-surface-container-low transition">
                <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Planned Residential Capacity</td>
                <td class="py-3 px-4 font-bold text-emerald-700 dark:text-emerald-400">1,200 Housing Units</td>
                <td class="py-3 px-4 text-on-surface">1,500 Housing Units</td>
                <td class="py-3 px-4 text-on-surface">800 Housing Units</td>
              </tr>
              <tr class="hover:bg-surface-container-low transition">
                <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Total Sanctioned Budget</td>
                <td class="py-3 px-4 font-bold text-on-surface">₹160.50 Crores</td>
                <td class="py-3 px-4 text-on-surface">₹166.00 Crores</td>
                <td class="py-3 px-4 text-on-surface">₹163.00 Crores</td>
              </tr>
              <tr class="hover:bg-surface-container-low transition">
                <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Estimated Delivery Time</td>
                <td class="py-3 px-4 font-bold text-emerald-700 dark:text-emerald-400">14 Months (Phased)</td>
                <td class="py-3 px-4 text-on-surface">18 Months</td>
                <td class="py-3 px-4 text-rose-600">20 Months</td>
              </tr>
              <tr class="hover:bg-surface-container-low transition">
                <td class="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Recommendation Status</td>
                <td class="py-3 px-4">
                  <span class="inline-flex items-center gap-1 font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded text-[11px]">
                    <span class="material-symbols-outlined text-xs">verified</span> UNANIMOUS #1 CHOICE
                  </span>
                </td>
                <td class="py-3 px-4 text-slate-600">Phase 2 Buffer Reserve</td>
                <td class="py-3 px-4 text-rose-600 font-semibold">Rejected (Hazard Risk)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function An(){const f=document.getElementById("rainfall-sim-slider");f&&f.addEventListener("input",l=>{I.setRainfallIntensity(l.target.value);const o=document.getElementById("screen-recommendation");o&&(o.innerHTML=En(),An())})}function ya(){const{governmentOrder:f,candidateResettlementSites:l}=O,o=l[0],{cabinetApprovalSubmitted:p}=I.getState();return`
    <div class="p-4 md:p-margin-desktop max-w-5xl mx-auto flex flex-col gap-6" id="printable-dossier">
      <!-- Action Bar (Hidden during print) -->
      <div class="no-print flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant shadow-sm">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold">
            <span class="material-symbols-outlined text-sm">verified_user</span>
            STATUTORY CABINET DOSSIER • READY FOR GAZETTE NOTIFICATION
          </div>
          <h2 class="font-display-md text-lg font-bold text-primary">Executive Relocation Clearance Package</h2>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          <button id="btn-download-geojson" class="bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold px-3.5 py-2 rounded-xl border border-outline-variant transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">download</span>
            <span>Export GeoJSON</span>
          </button>
          <button id="btn-print-dossier" class="bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold px-3.5 py-2 rounded-xl border border-outline-variant transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">print</span>
            <span>Print Official Dossier</span>
          </button>
          <button id="btn-submit-cabinet" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2 rounded-xl shadow transition flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">stamp</span>
            <span>Affix Seal & Submit</span>
          </button>
        </div>
      </div>

      <!-- Government Order Document Card (Print Styled) -->
      <div class="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant shadow-xl space-y-8 print:p-0 print:border-none print:shadow-none">
        <!-- Official Seal & Header -->
        <div class="text-center border-b-2 border-slate-900 dark:border-slate-300 pb-6 space-y-2">
          <div class="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center shadow-md mb-2">
            <span class="material-symbols-outlined text-3xl">shield_with_heart</span>
          </div>
          <h2 class="font-serif font-bold text-xl md:text-2xl text-slate-900 dark:text-white uppercase tracking-wider">
            Government of Kerala
          </h2>
          <h3 class="font-serif text-sm font-semibold text-slate-700 dark:text-slate-300">
            ${f.department}
          </h3>
          <p class="text-xs text-slate-500 font-serif">${f.secretariat}</p>
          <div class="pt-2 flex justify-between items-center text-xs font-mono text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 mt-4">
            <span><strong>Order No:</strong> ${f.orderNumber}</span>
            <span><strong>Dated:</strong> ${f.date}</span>
          </div>
        </div>

        <!-- Subject -->
        <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant text-xs space-y-1">
          <div class="font-bold uppercase text-slate-500 text-[10px]">Subject:</div>
          <p class="font-serif font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
            ${f.subject}
          </p>
        </div>

        <!-- Executive Summary -->
        <div class="space-y-3 text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-serif">
          <h4 class="font-sans font-bold text-sm text-primary uppercase tracking-wide border-b border-outline-variant pb-1">
            1. Preamble & Relocation Mandate
          </h4>
          <p>
            Following the catastrophic debris flow and massive regolith failure in the Meppadi Panchayat (affecting Mundakkai, Chooralmala, Attamala, and Vellarmala), the District Disaster Management Authority (DDMA) and Geological Survey of India (GSI) have conducted comprehensive multi-criteria slope stability and hazard zonation surveys.
          </p>
          <p>
            Based on forensic borehole data and 100-year return period climate stress testing, <strong>${o.name}</strong> has been unanimously recommended and validated across Revenue, Forest, PWD, and Disaster Management statutory domains.
          </p>
        </div>

        <!-- Sanctioned Financial Allocation Table -->
        <div class="space-y-3 text-xs font-data-tabular">
          <h4 class="font-sans font-bold text-sm text-primary uppercase tracking-wide border-b border-outline-variant pb-1">
            2. Sanctioned Financial Package
          </h4>
          <div class="overflow-x-auto rounded-xl border border-outline-variant">
            <table class="w-full text-left">
              <thead class="bg-surface-container-high text-slate-700 dark:text-slate-300 font-semibold">
                <tr>
                  <th class="py-2.5 px-4">Component</th>
                  <th class="py-2.5 px-4 text-right">Financial Sanction</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant">
                <tr>
                  <td class="py-2 px-4">Land Acquisition (64.5 Acres Vested Estate)</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${f.financialAllocation.landAcquisition}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Phase 1 Residential Construction (1,200 Climate-Resilient Units)</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${f.financialAllocation.residentialUnitsPhase1}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Arterial Roads, Power Substation & Water Treatment</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${f.financialAllocation.infrastructureAndUtilities}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Livelihood Rehabilitation & Community Cooperative Fund</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${f.financialAllocation.livelihoodRehabilitation}</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">Ecological Buffer Planting & Storm Drainage Network</td>
                  <td class="py-2 px-4 text-right font-mono font-semibold">${f.financialAllocation.ecologicalBufferAndDrainage}</td>
                </tr>
                <tr class="bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-200">
                  <td class="py-3 px-4 text-sm">Total Sanctioned Rehabilitation Outlay</td>
                  <td class="py-3 px-4 text-right text-sm font-mono">${f.financialAllocation.totalBudget}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Housing Specifications & Milestones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-serif">
          <div class="space-y-2 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
            <h5 class="font-sans font-bold text-primary text-xs uppercase">Model Housing Standards:</h5>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• <strong>Plinth Area:</strong> ${f.housingSpecifications.plinthArea}</li>
              <li>• <strong>Plot Size:</strong> ${f.housingSpecifications.landPerFamily}</li>
              <li>• <strong>Foundation:</strong> ${f.housingSpecifications.foundation}</li>
              <li>• <strong>Superstructure:</strong> ${f.housingSpecifications.superstructure}</li>
            </ul>
          </div>

          <div class="space-y-2 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
            <h5 class="font-sans font-bold text-primary text-xs uppercase">Phased Implementation Milestones:</h5>
            <ul class="space-y-1.5 text-slate-700 dark:text-slate-300">
              ${f.implementationPhases.map(u=>`
                <li>• <strong>${u.phase}:</strong> ${u.description}</li>
              `).join("")}
            </ul>
          </div>
        </div>

        <!-- Signatures & Authority Seals -->
        <div class="pt-8 border-t-2 border-slate-900 dark:border-slate-300 grid grid-cols-2 gap-8 text-xs font-serif">
          <div class="space-y-1">
            <div class="font-bold text-slate-900 dark:text-white">Dr. Rachel Thomas, Ph.D.</div>
            <div class="text-slate-500">Chief Hazard Geologist, Geological Survey of India</div>
            <div class="text-[10px] font-mono text-emerald-700">Digital Hash: SHA256-GSI-89102-WYD</div>
          </div>
          <div class="text-right space-y-1">
            <div class="font-bold text-slate-900 dark:text-white">Dr. A. K. Vasudevan, IAS</div>
            <div class="text-slate-500">District Magistrate & Chairman, DDMA Wayanad</div>
            <div class="text-[10px] font-mono text-emerald-700">Digital Seal: KSDMA-EXEC-2026-OK</div>
          </div>
        </div>

        <!-- Cabinet Seal (Appears when signed) -->
        <div id="cabinet-seal-indicator" class="${p?"flex":"hidden"} items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-2xl border-2 border-dashed border-emerald-500 font-bold text-sm uppercase tracking-widest gap-2">
          <span class="material-symbols-outlined text-2xl">verified</span>
          <span>OFFICIALLY ATTESTED & SUBMITTED TO CABINET OF MINISTERS</span>
        </div>
      </div>
    </div>
  `}function wa(){var f,l,o;(f=document.getElementById("btn-submit-cabinet"))==null||f.addEventListener("click",()=>{ua()}),(l=document.getElementById("btn-print-dossier"))==null||l.addEventListener("click",()=>{window.print()}),(o=document.getElementById("btn-download-geojson"))==null||o.addEventListener("click",()=>{const p={type:"FeatureCollection",name:"Wayanad_Relocation_Sites_KSDMA_2026",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[...O.settlements.map(C=>({type:"Feature",properties:{name:C.name,type:"Affected Settlement",riskLevel:C.riskLevel,riskScore:C.riskScore,displacedFamilies:C.displacedFamilies,recommendedAction:C.recommendedAction},geometry:{type:"Point",coordinates:[C.coordinates[1],C.coordinates[0]]}})),...O.candidateResettlementSites.map(C=>({type:"Feature",properties:{name:C.name,code:C.code,type:"Candidate Resettlement Site",areaAcres:C.availableAreaAcres,capacityHouseholds:C.capacityHouseholds,status:C.status,stabilityScore:C.soilStabilityScore},geometry:{type:"Point",coordinates:[C.coordinates[1],C.coordinates[0]]}}))]},u=new Blob([JSON.stringify(p,null,2)],{type:"application/json"}),m=URL.createObjectURL(u),g=document.createElement("a");g.href=m,g.download="Wayanad_Relocation_Package_2026.geojson",g.click(),URL.revokeObjectURL(m),Ct("GeoJSON shapefile exported successfully.","success","GIS DATA READY")})}class Sa{constructor(){this.routes={landing:{render:ra,setup:la,fullScreen:!0},login:{render:da,setup:ca,fullScreen:!0},dashboard:{render:ha,setup:pa},map:{render:_a,setup:ba,noPadding:!0},"risk-profile":{render:Ln,setup:Pn},"relocation-tool":{render:Cn,setup:Tn},"site-revalidation":{render:ai,setup:oi},recommendation:{render:En,setup:An},"final-report":{render:ya,setup:wa}},window.addEventListener("hashchange",()=>this.handleRoute())}getRouteFromHash(){const o=(window.location.hash.replace(/^#\/?/,"")||"landing").split("?")[0]||"landing";return this.routes[o]?o:"landing"}handleRoute(){const l=this.getRouteFromHash(),o=this.routes[l];I.setRoute(l);const p=document.getElementById("full-screen-container"),u=document.getElementById("app-shell"),m=document.getElementById("main-content-container"),g=document.getElementById("sidebar-mount"),C=document.getElementById("header-mount");o.fullScreen?(u&&u.classList.add("hidden"),p&&(p.classList.remove("hidden"),p.innerHTML=o.render(),o.setup&&o.setup())):(p&&p.classList.add("hidden"),u&&(u.classList.remove("hidden"),u.classList.add("flex")),g&&(g.innerHTML=oa()),C&&(C.innerHTML=aa()),m&&(m.innerHTML=o.render(),o.setup&&o.setup()),this.setupGlobalEvents()),window.scrollTo({top:0,behavior:"smooth"})}setupGlobalEvents(){var m,g,C;const l=document.getElementById("mobile-sidebar-toggle"),o=document.getElementById("app-sidebar");l&&o&&(l.onclick=()=>{o.classList.toggle("hidden"),o.classList.toggle("flex")}),(m=document.getElementById("btn-emergency-broadcast"))==null||m.addEventListener("click",si),(g=document.getElementById("sidebar-alert-btn"))==null||g.addEventListener("click",si);const p=document.getElementById("profile-dropdown-btn"),u=document.getElementById("profile-menu");p&&u&&(p.onclick=S=>{S.stopPropagation(),u.classList.toggle("hidden")},document.addEventListener("click",()=>u.classList.add("hidden"))),document.querySelectorAll(".switch-profile-btn").forEach(S=>{S.onclick=bt=>{bt.stopPropagation();const at=S.dataset.profileId;I.setUser(at),this.handleRoute()}}),(C=document.getElementById("header-logout-btn"))==null||C.addEventListener("click",()=>{I.logout(),window.location.hash="#landing",this.handleRoute()})}}document.addEventListener("DOMContentLoaded",()=>{new Sa().handleRoute(),I.subscribe(l=>{})});
