/**
 * System Architecture & Explainability Screen
 *
 * Judge-facing reference page: the honest end-to-end pipeline with the actual
 * technologies used, the feature set the prototype really supports, what each
 * module decides, and the prototype scope / limitations.
 */
import { openDemoGuide } from '../components/demoGuide.js';

const PIPELINE = [
  { label: 'DATA SOURCES', tech: 'WeatherAPI.com (IMD-adjacent gateway) · Geoapify / OpenStreetMap / Esri tiles · Static Wayanad geodata (repo data files)', icon: 'database' },
  { label: 'DATA INGESTION', tech: 'liveService.js fetch layer · FastAPI /api/live/* gateway (backend)', icon: 'download' },
  { label: 'GEOSPATIAL PROCESSING', tech: 'Leaflet GeoJSON layers · Python risk/relocation services', icon: 'map' },
  { label: 'RISK ENGINE', tech: 'Risk engine: hazard exposure × slope × history × vulnerability → 0-100, 4-zone class', icon: 'speed' },
  { label: 'EXPOSURE + VULNERABILITY', tech: 'Household & population inventory — Module A spatial-join accounting', icon: 'groups' },
  { label: 'SETTLEMENT PRIORITIZATION', tech: 'CRITICAL-tier ordering with per-settlement household-level Why? drivers', icon: 'priority_high' },
  { label: 'RELOCATION ENGINE', tech: 'relocation_engine.py · MCDA weight matrix (Geological / Buffer / Cost / Utility)', icon: 'hub' },
  { label: 'DESTINATION REVALIDATION', tech: 'Revalidation matrix: current + future risk · capacity · access · infra · dept sign-offs', icon: 'fact_check' },
  { label: 'SCENARIO ENGINE', tech: 'scenario_engine.py · Rainfall surge · road disruption · capacity-loss simulation', icon: 'thunderstorm' },
  { label: 'RECOMMENDATION', tech: 'Dynamic decision logic — recommendation shifts when thresholds are crossed', icon: 'recommend' },
  { label: 'DASHBOARD / REPORT', tech: 'District dashboard · Executive Cabinet Dossier (G.O. style)', icon: 'description' }
];

const FEATURES = [
  { icon: 'warning', title: 'Dynamic Multi-Hazard Risk Assessment', note: '4-zone classification driven by hazard, terrain & history.' },
  { icon: 'groups', title: 'Vulnerability-Based Prioritization', note: 'CRITICAL-tier household & population cohorts first.' },
  { icon: 'hexagon', title: 'Red-Zone Identification', note: 'GIS hazard polygons over OSM — debris, slope, saturation, buffers.' },
  { icon: 'fact_check', title: 'Destination Revalidation', note: 'Candidate sites verified before any relocation is proposed.' },
  { icon: 'balance', title: 'Relocation Site Comparison', note: 'MCDA-weighted side-by-side candidate scoring.' },
  { icon: 'thunderstorm', title: 'Scenario Stress Testing', note: 'Rainfall, road & capacity stress applied to the recommendation.' },
  { icon: 'psychology', title: 'Explainable Recommendations', note: 'Why-drivers and contributor breakdowns at every decision point.' },
  { icon: 'explore', title: 'Geospatial Visualization', note: 'Leaflet map with toggleable live layers, legend & timestamps.' },
  { icon: 'verified', title: 'Data Provenance', note: 'Live source + last-updated indicators; simulated data clearly labelled.' },
  { icon: 'description', title: 'Administrative Reporting', note: 'Executive dossier suitable for an administrative officer.' }
];

const MODULES = [
  {
    icon: 'speed',
    title: 'Risk Engine',
    what: 'Converts environmental & spatial factors into an explainable risk score.',
    why: 'Officers need to know WHY a settlement is dangerous, not just that it is.',
    decides: 'Risk score (0-100), risk tier, and primary hazard drivers.'
  },
  {
    icon: 'hub',
    title: 'Relocation Engine',
    what: 'Scores candidate resettlement sites against origin settlement demand.',
    why: 'Relocation must balance safety with capacity, cost and utility access.',
    decides: 'Candidate site ranking under the officer-adjusted MCDA weights.'
  },
  {
    icon: 'fact_check',
    title: 'Destination Revalidation',
    what: 'Checks whether a proposed relocation destination is actually safe before relocation.',
    why: 'A site is not safe merely because it is outside the original red zone.',
    decides: 'PASSED / CONDITIONAL / REJECTED with stated reasons.'
  },
  {
    icon: 'thunderstorm',
    title: 'Scenario Engine',
    what: 'Stress-tests the relocation recommendation under changing conditions.',
    why: 'A decision made today should survive tomorrow\u2019s rainfall, road and land shocks.',
    decides: 'Whether the recommendation changes when thresholds are crossed.'
  }
];

export function renderArchitectureScreen() {
  return `
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">account_tree</span>
            SYSTEM ARCHITECTURE & EXPLAINABILITY
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">How the Platform Works</h1>
          <p class="text-xs text-on-surface-variant mt-1">From hazard signals to a defensible administrative recommendation — one connected pipeline</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="architecture-demo-btn" class="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow transition active:scale-95">
            <span class="material-symbols-outlined text-base">auto_awesome</span>
            <span>Start Guided Demo</span>
          </button>
          <a href="#map" class="flex items-center gap-1.5 bg-primary hover:bg-primary-container text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow transition">
            <span class="material-symbols-outlined text-base">explore</span>
            <span>Open Live Risk Map</span>
          </a>
        </div>
      </div>

      <!-- End-to-end pipeline diagram -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-5 md:p-6">
        <h2 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2 mb-1">
          <span class="material-symbols-outlined text-lg text-emerald-600">account_tree</span> End-to-End Decision Pipeline
        </h2>
        <p class="text-xs text-on-surface-variant mb-4">The exact flow the demonstration follows, with the technology that powers each stage.</p>
        <div class="flex flex-col items-stretch max-w-3xl mx-auto">
          ${PIPELINE.map((stage, i) => `
            <div class="relative">
              ${i < PIPELINE.length - 1 ? `
                <div class="absolute left-6 top-full h-5 w-px bg-gradient-to-b from-primary/50 to-primary/10"></div>
              ` : ''}
              <div class="flex items-start gap-3 bg-surface-container-low rounded-xl border border-outline-variant p-3 ${i === PIPELINE.length - 1 ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800' : ''}">
                <div class="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${i === PIPELINE.length - 1 ? 'bg-emerald-600 text-white' : 'bg-primary/10 text-primary'}">
                  <span class="material-symbols-outlined text-lg">${stage.icon}</span>
                </div>
                <div class="min-w-0">
                  <div class="text-xs font-bold text-on-surface flex items-center gap-2">
                    <span class="text-[10px] font-mono text-slate-400">${String(i + 1).padStart(2, '0')}</span> ${stage.label}
                  </div>
                  <div class="text-[11px] text-on-surface-variant mt-0.5">${stage.tech}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Actual tech stack -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-5 md:p-6">
        <h2 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2 mb-1">
          <span class="material-symbols-outlined text-lg text-blue-600">memory</span> Actual Technology Stack
        </h2>
        <p class="text-xs text-on-surface-variant mb-4">Only what is genuinely implemented in this repository — nothing overstated.</p>
        <div class="flex flex-wrap gap-2">
          ${[
            ['Frontend', 'Vanilla JS (ES modules) + Vite'],
            ['State', 'Custom event-bus store (src/services/state.js)'],
            ['Map', 'Leaflet + OpenStreetMap'],
            ['Tile providers', 'Geoapify (vector) · Esri World Imagery (satellite) — optional keys'],
            ['Live weather', 'WeatherAPI.com via liveService.js (LIVE vs SIMULATED labelling)'],
            ['Backend', 'FastAPI (backend/app)'],
            ['Risk engine', 'risk_engine.py (deterministic explainable scoring)'],
            ['ML risk model', 'ml_risk_model.py (Random Forest prototype — model-validation screen)'],
            ['Relocation engine', 'relocation_engine.py'],
            ['Scenario engine', 'scenario_engine.py'],
            ['Data', 'Wayanad geodata in repo (frontend data + backend data dirs)']
          ].map(([k, v]) => `
            <span class="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 text-xs">
              <span class="font-bold text-primary">${k}:</span>
              <span class="text-on-surface-variant">${v}</span>
            </span>
          `).join('')}
        </div>
        <p class="text-[11px] text-slate-500 mt-3 flex items-start gap-1.5">
          <span class="material-symbols-outlined text-sm text-amber-600 shrink-0">info</span>
          The deployed static build runs in browser mode with frontend data; the FastAPI backend (risk / relocation / scenario / live services) is the full engine available when run locally.
        </p>
      </div>

      <!-- What each major module does -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        ${MODULES.map(m => `
          <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-5">
            <div class="flex items-center gap-2 text-primary mb-2">
              <span class="material-symbols-outlined text-xl">${m.icon}</span>
              <h3 class="font-headline-sm text-base font-bold">${m.title}</h3>
            </div>
            <dl class="space-y-2 text-xs">
              <div><dt class="font-bold text-on-surface-variant">WHAT IS THIS?</dt><dd class="text-on-surface mt-0.5">${m.what}</dd></div>
              <div><dt class="font-bold text-on-surface-variant">WHY DOES IT EXIST?</dt><dd class="text-on-surface mt-0.5">${m.why}</dd></div>
              <div><dt class="font-bold text-on-surface-variant">WHAT DECISION DOES IT SUPPORT?</dt><dd class="text-emerald-700 dark:text-emerald-400 mt-0.5">${m.decides}</dd></div>
            </dl>
          </div>
        `).join('')}
      </div>

      <!-- Features supported -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm p-5 md:p-6">
        <h2 class="font-headline-sm text-base font-bold text-primary flex items-center gap-2 mb-1">
          <span class="material-symbols-outlined text-lg text-violet-600">verified</span> Feature Summary
        </h2>
        <p class="text-xs text-on-surface-variant mb-4">Every feature below is live in this prototype and walkable in the guided demo.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${FEATURES.map((f, i) => `
            <div class="flex items-start gap-3 bg-surface-container-low rounded-xl border border-outline-variant p-3">
              <div class="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                <span class="material-symbols-outlined text-base">${f.icon}</span>
              </div>
              <div>
                <div class="text-xs font-bold text-on-surface">${String(i + 1).padStart(2, '0')}. ${f.title}</div>
                <div class="text-[11px] text-on-surface-variant mt-0.5">${f.note}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Honest limitations -->
      <div class="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-2xl p-5 md:p-6">
        <h2 class="font-headline-sm text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-2">
          <span class="material-symbols-outlined text-lg">science</span> Prototype Scope — Read Before Judging
        </h2>
        <ul class="space-y-1.5 text-xs text-amber-900/90 dark:text-amber-200/90 list-disc pl-5">
          <li>The prototype demonstrates a representative Wayanad micro-catchment with curated geodata.</li>
          <li>Some feeds may be simulated — the UI always labels LIVE vs SIMULATED and shows source + timestamp.</li>
          <li>Risk scores are decision-support indicators, not guaranteed disaster predictions.</li>
          <li>Scenario results are prototype what-if projections, not official forecasts.</li>
          <li>This is an administrative decision-support system: no relocation order is issued automatically.</li>
          <li>Final relocation decisions remain with authorized authorities after field verification.</li>
        </ul>
      </div>
    </div>
  `;
}

export function setupArchitectureEvents() {
  document.getElementById('architecture-demo-btn')?.addEventListener('click', () => openDemoGuide());
}
