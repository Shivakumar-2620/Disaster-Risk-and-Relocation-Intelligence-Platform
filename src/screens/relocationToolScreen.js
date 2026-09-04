/**
 * Relocation Planning Tool Screen Component (Multi-Criteria Decision Engine)
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';
import { showToast } from '../components/Toast.js';
import { renderSlider, initSlider } from '../components/slider.js';

// ── MCDA weight slider configuration (single source of truth) ──────────────
const WEIGHT_SLIDERS = [
  { id: 'weight-geo', key: 'geological', min: 10, max: 60, step: 1, label: 'Geological Stability', caption: 'Bedrock depth, SPT N-value, slope < 10°' },
  { id: 'weight-dist', key: 'distance', min: 10, max: 50, step: 1, label: 'Proximity Buffer', caption: 'Distance from landslide hazard corridor' },
  { id: 'weight-cost', key: 'cost', min: 10, max: 50, step: 1, label: 'Land & Civil Cost', caption: 'Acquisition budget & grading works' },
  { id: 'weight-util', key: 'utility', min: 10, max: 50, step: 1, label: 'Utility Readiness', caption: 'Water pipeline, 33kV power & highway' }
];

// ── Candidate site ranking grid (reused by render + live recalibration) ────
function renderCandidateSitesHtml() {
  const calculatedSites = appState.getCalculatedSiteScores();
  return calculatedSites.map((site, index) => {
    const isRank1 = index === 0;
    return `
      <div class="bg-surface-container-lowest rounded-2xl border ${isRank1 ? 'border-2 border-emerald-600 shadow-xl' : 'border-outline-variant shadow-sm'} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative">
        ${isRank1 ? `
          <div class="absolute -top-3 right-6 bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">emoji_events</span> #1 Best Algorithm Match
          </div>
        ` : ''}

        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="font-mono font-bold">${site.code}</span>
              <span class="font-semibold text-emerald-700 dark:text-emerald-400 font-mono text-sm">${site.calculatedScore}/10 Overall</span>
            </div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white">${site.name}</h4>
            <p class="text-xs text-on-surface-variant">${site.panchayat} • ${site.taluk} Taluk</p>
          </div>

          <!-- Scores Breakdown -->
          <div class="grid grid-cols-2 gap-2 text-xs bg-surface-container-low p-3 rounded-xl border border-outline-variant">
            <div>
              <span class="text-slate-400 block text-[10px]">Area Available</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${site.availableAreaAcres} Acres</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">Capacity</span>
              <span class="font-bold text-emerald-700 dark:text-emerald-400">${site.capacityHouseholds} Units</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">Distance to Zone</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${site.distanceFromDisasterKm} km</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">Total Est. Cost</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">₹${site.totalEstimatedCostCr} Cr</span>
            </div>
          </div>

          <div class="text-xs space-y-1.5">
            <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <span>Soil Stability Score:</span>
              <strong class="text-emerald-600">${site.soilStabilityScore}/10</strong>
            </div>
            <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <span>Utility & Road Score:</span>
              <strong class="text-emerald-600">${site.utilityReadinessScore}/10</strong>
            </div>
            <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
              <span>GSI Safety Rating:</span>
              <strong class="text-slate-800 dark:text-slate-200">${site.gsiSafetyRating.split('(')[0]}</strong>
            </div>
          </div>
        </div>

        <div class="pt-5 border-t border-outline-variant mt-4">
          <button class="select-candidate-site-btn w-full ${isRank1 ? 'bg-primary hover:bg-primary-container text-white' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'} font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2" data-site-id="${site.id}">
            <span class="material-symbols-outlined text-base">fact_check</span>
            <span>Revalidate ${site.code} Clearance →</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

export function renderRelocationToolScreen() {
  const { selectedSettlementId, mcdaWeights } = appState.getState();
  const settlement = WAYANAD_DATA.settlements.find(s => s.id === selectedSettlementId) || WAYANAD_DATA.settlements[0];

  return `
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
            ${settlement.name} (${settlement.displacedFamilies} Families)
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
          ${WEIGHT_SLIDERS.map((s) => `
            <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-2">
              <div class="flex justify-between font-semibold">
                <span class="text-slate-700 dark:text-slate-300">${s.label}</span>
                <span id="${s.id}-val" class="text-primary font-bold font-mono">${mcdaWeights[s.key]}%</span>
              </div>
              ${renderSlider({
                id: s.id,
                value: mcdaWeights[s.key],
                min: s.min,
                max: s.max,
                step: s.step,
                showValue: false,
                formatValue: (v) => `${v}%`
              })}
              <span class="text-[10px] text-slate-400 block">${s.caption}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Ranked Candidate Sites -->
      <div class="space-y-4">
        <h3 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2">
          <span class="material-symbols-outlined">analytics</span> Optimized Candidate Sites Ranking
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" id="candidate-sites-container">
          ${renderCandidateSitesHtml()}
        </div>
      </div>
    </div>
  `;
}

export function setupRelocationToolEvents() {
  const weights = () => appState.getState().mcdaWeights;

  // ── Animated weight sliders → live recalibration ───────────────────────
  WEIGHT_SLIDERS.forEach((spec) => {
    const el = document.querySelector(`[data-slider-id="${spec.id}"]`);
    if (!el) return;
    initSlider(el, {
      onChange: (value) => {
        const next = { ...weights(), [spec.key]: value };
        appState.setMCDAWeights(next);

        const valEl = document.getElementById(`${spec.id}-val`);
        if (valEl) valEl.textContent = `${value}%`;

        // Re-render only the ranking grid (keeps slider drag uninterrupted)
        const container = document.getElementById('candidate-sites-container');
        if (container) {
          container.innerHTML = renderCandidateSitesHtml();
          bindCandidateButtons();
        }
      }
    });
  });

  bindCandidateButtons();
}

// Candidate-site CTA buttons (re-bound whenever the grid re-renders)
function bindCandidateButtons() {
  document.querySelectorAll('.select-candidate-site-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const siteId = btn.dataset.siteId;
      appState.selectSite(siteId);
      showToast(`Selected ${siteId.toUpperCase()} for statutory revalidation clearance.`, 'info', 'SITE LOCKED');
      window.location.hash = '#site-revalidation';
    });
  });
}
