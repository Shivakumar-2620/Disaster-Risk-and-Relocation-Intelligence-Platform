/**
 * Climate Stress Simulator & Multi-Variable Scenario Recommendation Screen
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';

export function renderRecommendationScreen() {
  const { simulatedRainfallIntensity, simulatedRoadDisruption, simulatedCapacityReduction, simulatedHazardBoundary } = appState.getState();
  
  // Find current stress matrix level based on simulatedRainfallIntensity
  const stress = WAYANAD_DATA.monsoonStressMatrix.find(m => m.rainfallIntensity === simulatedRainfallIntensity) || WAYANAD_DATA.monsoonStressMatrix[0];

  // Dynamic decision logic
  const isExtremeRain = simulatedRainfallIntensity >= 50;
  const isRoadSevered = Boolean(simulatedRoadDisruption);
  const isShiftToBeta = isExtremeRain || isRoadSevered;
  const isCapacityConstrained = (simulatedCapacityReduction || 0) >= 25;

  const topSiteName = isShiftToBeta ? "Site Beta (Meenangadi Model Township)" : "Site Alpha (Kalpetta North Plateau)";
  const topSiteCode = isShiftToBeta ? "SITE-B" : "SITE-A";

  const effectiveCapA = Math.round(1200 * (1 - (simulatedCapacityReduction || 0) / 100));
  const effectiveCapB = Math.round(1500 * (1 - (simulatedCapacityReduction || 0) / 100));

  // MODULE C: What-If Relocation Simulation (household demand model)
  // Baseline sample tract (Meppadi-Mundakkai micro-catchment): 126 households / 512 people.
  // Rainfall +20% -> 174 / 703. Expanded hazard boundary -> 213 / 861.
  const hazardBoundary = Boolean(simulatedHazardBoundary);
  const RF_HH = { 0: 1, 25: 1.381, 50: 1.60, 75: 1.85, 100: 2.10 }[simulatedRainfallIntensity] || 1;
  const RF_POP = { 0: 1, 25: 1.373, 50: 1.60, 75: 1.85, 100: 2.10 }[simulatedRainfallIntensity] || 1;
  const BND_HH = hazardBoundary ? 1.6905 : 1;
  const BND_POP = hazardBoundary ? 1.682 : 1;
  const totalAvailableUnits = effectiveCapA + effectiveCapB;
  const simScenario = (label, note, hhMult, popMult, bndHh, bndPop) => {
    const households = Math.round(126 * hhMult * bndHh);
    const population = Math.round(512 * popMult * bndPop);
    const verdict = households <= effectiveCapA
      ? { text: 'Site A sufficient', cls: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' }
      : households <= totalAvailableUnits
        ? { text: 'Sites A + B required', cls: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' }
        : { text: 'All candidate sites required (phased)', cls: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' };
    return { label, note, households, population, verdict };
  };
  const simRows = [
    simScenario('Normal (Baseline)', 'No perturbation', 1, 1, 1, 1),
    simScenario('Rainfall Surge (+' + simulatedRainfallIntensity + '%)', 'Precipitation multiplier applied to sample tract', RF_HH, RF_POP, 1, 1),
    simScenario('Expanded Hazard Boundary', 'River-flood / runout boundary widened to 500 m corridor', RF_HH, RF_POP, BND_HH, BND_POP),
  ];

  return `
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">thunderstorm</span>
            MULTI-VARIABLE CLIMATE & LOGISTICAL STRESS SIMULATOR
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">Scenario Testing & Dynamic Recommendation</h1>
          <p class="text-xs text-on-surface-variant mt-1">Multi-variable stress tests: Rainfall surge, arterial road cut-offs, and parcel capacity constraints</p>
          <span class="inline-flex items-center gap-1 mt-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-2 py-1 rounded-md">
            <span class="material-symbols-outlined text-[11px]">science</span>
            Prototype scenario · Not a live forecast · Decision support only
          </span>
        </div>

        <a href="#final-report" class="bg-primary hover:bg-primary-container text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">description</span>
          <span>Generate Cabinet Dossier</span>
        </a>
      </div>

      <!-- Live Multi-Variable Stress Control Hub -->
      <div class="bg-surface-container-lowest p-6 rounded-2xl border-2 border-primary/30 shadow-lg space-y-5">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-outline-variant pb-3">
          <div>
            <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined text-blue-600">tune</span> Dynamic Stress Variables Control Matrix
            </h3>
            <p class="text-xs text-slate-500">Perturb environmental, infrastructural, and land parcel parameters simultaneously</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs text-slate-500 font-mono">Simulated Recommendation:</span>
            <span class="font-bold text-xs px-3 py-1 rounded-full font-mono ${isShiftToBeta ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'} shadow-sm flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">recommend</span> ${topSiteCode}: ${isShiftToBeta ? 'MEENANGADI' : 'KALPETTA NORTH'}
            </span>
          </div>
        </div>

        <!-- 3-Variable Sliders & Toggles Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          <!-- Variable 1: Rainfall Surge -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
            <div class="flex justify-between items-center text-xs font-semibold">
              <span class="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-blue-600">rainy</span> Precipitation Surge
              </span>
              <span id="rain-intensity-badge" class="font-bold font-mono text-primary">${stress.label}</span>
            </div>
            <input type="range" id="rainfall-sim-slider" min="0" max="100" step="25" value="${simulatedRainfallIntensity}" class="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary">
            <div class="flex justify-between text-[10px] font-mono text-slate-400">
              <span>0% (Base)</span>
              <span>+50% (Cloudburst)</span>
              <span>+100% (1-in-100 Yr)</span>
            </div>
          </div>

          <!-- Variable 2: Road Disruption Toggle -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm text-amber-600">alt_route</span> Arterial Road Disruption
                </span>
                <span class="font-bold font-mono text-xs ${isRoadSevered ? 'text-rose-600' : 'text-emerald-600'}">
                  ${isRoadSevered ? 'ROUTE SEVERED' : 'CLEAR'}
                </span>
              </div>
              <p class="text-[11px] text-slate-500">Simulate flash-flood bridge collapse or arterial highway spur cut-off</p>
            </div>
            <label class="flex items-center gap-2 cursor-pointer mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              <input type="checkbox" id="road-disruption-toggle" ${isRoadSevered ? 'checked' : ''} class="w-4 h-4 text-primary rounded accent-primary cursor-pointer">
              <span class="text-xs font-bold ${isRoadSevered ? 'text-rose-700 dark:text-rose-300' : 'text-slate-700 dark:text-slate-300'}">
                ${isRoadSevered ? 'Simulating Severed Arteries (Active)' : 'Sever Primary Highway Spur'}
              </span>
            </label>
          </div>

          <!-- Variable 3: Capacity Reduction Slider -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
            <div class="flex justify-between items-center text-xs font-semibold">
              <span class="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-purple-600">aspect_ratio</span> Buffer Capacity Loss
              </span>
              <span id="capacity-reduction-val" class="font-bold font-mono text-primary">${simulatedCapacityReduction || 0}% Loss</span>
            </div>
            <input type="range" id="capacity-reduction-slider" min="0" max="50" step="10" value="${simulatedCapacityReduction || 0}" class="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary">
            <div class="flex justify-between text-[10px] font-mono text-slate-400">
              <span>0% Full Footprint</span>
              <span>25% Eco Buffer</span>
              <span>50% Heavy Setback</span>
            </div>
          </div>

          <!-- Variable 4: Hazard Boundary Toggle -->
          <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm text-rose-600">water_flood</span> Hazard Boundary & Threshold
                </span>
                <span class="font-bold font-mono text-xs ${hazardBoundary ? 'text-rose-600' : 'text-emerald-600'}">
                  ${hazardBoundary ? 'EXPANDED' : 'NORMAL'}
                </span>
              </div>
              <p class="text-[11px] text-slate-500">Expand river-flood & runout corridor to 500 m threshold</p>
            </div>
            <label class="flex items-center gap-2 cursor-pointer mt-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              <input type="checkbox" id="hazard-boundary-toggle" ${hazardBoundary ? 'checked' : ''} class="w-4 h-4 text-primary rounded accent-primary cursor-pointer">
              <span class="text-xs font-bold ${hazardBoundary ? 'text-rose-700 dark:text-rose-300' : 'text-slate-700 dark:text-slate-300'}">
                ${hazardBoundary ? 'Expanded Boundary Active' : 'Expand Hazard Boundary'}
              </span>
            </label>
          </div>
        </div>

        <!-- Dynamic Rational Recommendation Alert Banner -->
        ${isShiftToBeta ? `
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-950 dark:text-blue-100 flex items-start gap-3">
            <span class="material-symbols-outlined text-blue-600 text-2xl mt-0.5">swap_horiz</span>
            <div class="text-xs space-y-1">
              <div class="font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200">
                DYNAMIC RECOMMENDATION SHIFT ACTIVATED: Recommendation Diverted to Site B (Meenangadi)
              </div>
              <p class="leading-relaxed text-blue-900/90 dark:text-blue-200/90">
                Under ${isExtremeRain ? 'heavy precipitation surge (≥+50%)' : ''} ${isExtremeRain && isRoadSevered ? 'and' : ''} ${isRoadSevered ? 'severed arterial access corridors' : ''}, 
                <strong>Site B (Meenangadi Model Township)</strong> provides superior structural resilience due to high-capacity storm run-off drainage channels and dual independent highway access (NH-766 + Regional Arterial).
              </p>
            </div>
          </div>
        ` : `
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-100 flex items-start gap-3">
            <span class="material-symbols-outlined text-emerald-600 text-2xl mt-0.5">check_circle</span>
            <div class="text-xs space-y-1">
              <div class="font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
                BASELINE STABILITY OPTIMAL: Site A (Kalpetta North) Remains Primary Choice
              </div>
              <p class="leading-relaxed text-emerald-900/90 dark:text-emerald-200/90">
                Crystalline Charnockite basement plateau provides 100% bearing safety under standard-to-heavy rainfall parameters. All arterial corridors and utility conduits operational.
              </p>
            </div>
          </div>
        `}

        <!-- Split-Allocation Contingency Banner -->
        ${isCapacityConstrained ? `
          <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900 text-amber-950 dark:text-amber-100 flex items-start gap-3">
            <span class="material-symbols-outlined text-amber-600 text-2xl mt-0.5">call_split</span>
            <div class="text-xs space-y-1">
              <div class="font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                DUAL-SITE PHASED RELOCATION MANDATE (Capacity Reduced by ${simulatedCapacityReduction}%)
              </div>
              <p class="leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                With buildable capacity reduced to <strong>${effectiveCapA} units</strong> at Site A and <strong>${effectiveCapB} units</strong> at Site B, no single site can safely accommodate the full 1,760 displaced households from Mundakkai & Chooralmala.
                <strong>Split Allocation Strategy:</strong> Phase 1 (Priority 1 Orphaned & Elderly) directed to Kalpetta North (${effectiveCapA} HH), Phase 2 (Buffer Zone Inhabitants) to Meenangadi Township (${effectiveCapB} HH).
              </p>
            </div>
          </div>
        ` : ''}

        <!-- Real-Time Projected Status Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <!-- Site Alpha -->
          <div class="p-4 rounded-xl border ${isShiftToBeta ? 'border-slate-300 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300' : stress.siteASafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE ALPHA (Kalpetta North)</span>
                <span class="material-symbols-outlined text-sm">${isShiftToBeta ? 'info' : 'verified'}</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${stress.siteASafety}</strong></p>
              <p class="text-[11px] text-slate-500 mt-0.5">Effective Capacity: <strong>${effectiveCapA} Units</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              ${isRoadSevered ? '⚠️ Road corridor severed: arterial access restricted.' : 'Crystalline Plateau • Zero boulder hazard'}
            </div>
          </div>

          <!-- Site Beta -->
          <div class="p-4 rounded-xl border ${isShiftToBeta ? 'border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100 shadow-md' : stress.siteBSafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE BETA (Mananthavady)</span>
                <span class="material-symbols-outlined text-sm">${isShiftToBeta ? 'stars' : 'domain'}</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${stress.siteBSafety}</strong></p>
              <p class="text-[11px] text-slate-500 mt-0.5">Effective Capacity: <strong>${effectiveCapB} Units</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              ${isShiftToBeta ? '⭐ TOP RECOMMENDED: Dual highway redundancy & rapid drainage.' : 'Terrace Overburden • Moderate saturation'}
            </div>
          </div>

          <!-- Site Gamma -->
          <div class="p-4 rounded-xl border ${stress.siteCSafetyClass} flex flex-col justify-between opacity-85">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE GAMMA (Nedumbala)</span>
                <span class="material-symbols-outlined text-sm">warning</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${stress.siteCSafety}</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              DISQUALIFIED • Residual slope hazard & elephant corridor
            </div>
          </div>
        </div>
      </div>

      <!-- MODULE C: What-If Relocation Simulation -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div class="p-5 border-b border-outline-variant">
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">monitoring</span>
            MODULE C — WHAT-IF RELOCATION SIMULATION
          </div>
          <h3 class="font-headline-sm text-base font-bold text-primary">Stress-Testable Relocation Demand (Household / Population Model)</h3>
          <p class="text-xs text-on-surface-variant mt-0.5">Change rainfall intensity, hazard boundary, or destination capacity — then rerun the same functions and compare results.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-data-tabular">
            <thead class="bg-surface-container-high text-on-surface-variant uppercase text-[11px] tracking-wider border-b border-outline-variant">
              <tr>
                <th class="py-3 px-4 font-semibold">Scenario</th>
                <th class="py-3 px-4 font-semibold">Affected Households</th>
                <th class="py-3 px-4 font-semibold">Affected Population</th>
                <th class="py-3 px-4 font-semibold">Required Units (vs ${effectiveCapA} + ${effectiveCapB} effective)</th>
                <th class="py-3 px-4 font-semibold">Capacity Verdict</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant">
              ${simRows.map(r => `
                <tr class="hover:bg-surface-container-low transition">
                  <td class="py-3 px-4 font-semibold text-on-surface">${r.label}<div class="text-[10px] text-slate-400 font-normal">${r.note}</div></td>
                  <td class="py-3 px-4 font-bold font-mono text-rose-600">${r.households.toLocaleString()} HH</td>
                  <td class="py-3 px-4 font-mono text-on-surface">${r.population.toLocaleString()} people</td>
                  <td class="py-3 px-4 font-mono text-on-surface">${r.households.toLocaleString()}</td>
                  <td class="py-3 px-4"><span class="inline-flex items-center gap-1 font-bold px-2.5 py-1 rounded text-[11px] ${r.verdict.cls}">${r.verdict.text}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div class="px-4 py-3 text-[10px] text-slate-400 border-t border-outline-variant leading-relaxed">
          Sample tract: Meppadi-Mundakkai micro-catchment (baseline 126 households / 512 people). Reference points: Rainfall +20% → 174 / 703; Expanded hazard boundary → 213 / 861. Effective units = planned capacity minus buffer-capacity loss slider.
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
                <td class="py-3 px-4 font-bold text-emerald-700 dark:text-emerald-400">${effectiveCapA} Housing Units</td>
                <td class="py-3 px-4 text-on-surface">${effectiveCapB} Housing Units</td>
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
                  <span class="inline-flex items-center gap-1 font-bold ${isShiftToBeta ? 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800' : 'text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950'} px-2 py-0.5 rounded text-[11px]">
                    <span class="material-symbols-outlined text-xs">${isShiftToBeta ? 'pending' : 'verified'}</span> ${isShiftToBeta ? 'Secondary Buffer Reserve' : 'UNANIMOUS #1 CHOICE'}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <span class="inline-flex items-center gap-1 font-bold ${isShiftToBeta ? 'text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-950' : 'text-slate-600'} px-2 py-0.5 rounded text-[11px]">
                    ${isShiftToBeta ? '⭐ TOP RECOMMENDED IN SCENARIO' : 'Phase 2 Buffer Reserve'}
                  </span>
                </td>
                <td class="py-3 px-4 text-rose-600 font-semibold">Rejected (Hazard Risk)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupRecommendationEvents() {
  const rainSlider = document.getElementById('rainfall-sim-slider');
  const roadToggle = document.getElementById('road-disruption-toggle');
  const capSlider = document.getElementById('capacity-reduction-slider');

  function triggerReRender() {
    const mainEl = document.getElementById('main-content-container');
    if (mainEl) {
      mainEl.innerHTML = renderRecommendationScreen();
      setupRecommendationEvents();
    }
  }

  if (rainSlider) {
    rainSlider.addEventListener('input', (e) => {
      appState.setRainfallIntensity(e.target.value);
      triggerReRender();
    });
  }

  if (roadToggle) {
    roadToggle.addEventListener('change', (e) => {
      appState.setRoadDisruption(e.target.checked);
      triggerReRender();
    });
  }

  if (capSlider) {
    capSlider.addEventListener('input', (e) => {
      appState.setCapacityReduction(e.target.value);
      triggerReRender();
    });
  }

  const hazardBoundaryToggle = document.getElementById('hazard-boundary-toggle');
  if (hazardBoundaryToggle) {
    hazardBoundaryToggle.addEventListener('change', (e) => {
      appState.setHazardBoundary(e.target.checked);
      triggerReRender();
    });
  }
}

