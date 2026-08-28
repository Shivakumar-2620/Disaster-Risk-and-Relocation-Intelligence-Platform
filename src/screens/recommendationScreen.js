/**
 * Climate Stress Simulator & Recommendation Screen Component
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';

export function renderRecommendationScreen() {
  const { simulatedRainfallIntensity } = appState.getState();
  
  // Find current stress matrix level based on simulatedRainfallIntensity
  const stress = WAYANAD_DATA.monsoonStressMatrix.find(m => m.rainfallIntensity === simulatedRainfallIntensity) || WAYANAD_DATA.monsoonStressMatrix[0];

  return `
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
              ${stress.label}
            </span>
          </div>
        </div>

        <!-- Slider Bar -->
        <div class="space-y-2 py-2">
          <input type="range" id="rainfall-sim-slider" min="0" max="100" step="25" value="${simulatedRainfallIntensity}" class="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary">
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
          <div class="p-4 rounded-xl border ${stress.siteASafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE ALPHA (Kalpetta North)</span>
                <span class="material-symbols-outlined text-sm">verified</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${stress.siteASafety}</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              Crystalline Plateau • Zero residual boulder hazard
            </div>
          </div>

          <!-- Site Beta -->
          <div class="p-4 rounded-xl border ${stress.siteBSafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE BETA (Mananthavady)</span>
                <span class="material-symbols-outlined text-sm">domain</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${stress.siteBSafety}</strong></p>
            </div>
            <div class="text-[11px] opacity-80 mt-2">
              Terrace Overburden • Moderate saturation capacity
            </div>
          </div>

          <!-- Site Gamma -->
          <div class="p-4 rounded-xl border ${stress.siteCSafetyClass} flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span>SITE GAMMA (Nedumbala)</span>
                <span class="material-symbols-outlined text-sm">warning</span>
              </div>
              <p class="text-xs mt-1">Geological Stability: <strong>${stress.siteCSafety}</strong></p>
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
  `;
}

export function setupRecommendationEvents() {
  const slider = document.getElementById('rainfall-sim-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      appState.setRainfallIntensity(e.target.value);
      const mainEl = document.getElementById('screen-recommendation');
      if (mainEl) {
        mainEl.innerHTML = renderRecommendationScreen();
        setupRecommendationEvents();
      }
    });
  }
}
