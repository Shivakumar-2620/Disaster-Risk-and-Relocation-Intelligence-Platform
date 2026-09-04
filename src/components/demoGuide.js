/**
 * Guided Demo Journey Overlay
 *
 * A lightweight, dependency-free walkthrough that carries a judge through the
 * complete SIH workflow: detection -> prioritization -> relocation planning ->
 * site validation -> scenario analysis -> recommendation -> dossier.
 *
 * It renders as a floating bottom bar that survives route changes (hash router
 * re-renders only the content container, never <body>), so the tour stays
 * in sync with wherever the demo currently is.
 */
import { appState } from '../services/state.js';

const DEMO_STEPS = [
  {
    route: 'dashboard',
    icon: 'radar',
    title: 'Risk Detection & Red-Zone Accounting',
    caption: 'District dashboard — affected households, high-priority cohorts and the per-settlement relocation inventory.'
  },
  {
    route: 'map',
    icon: 'explore',
    title: 'Live Situational Map',
    caption: 'Risk zones, settlements and candidate sites on an OSM base — WHERE is the risk, WHO is exposed, WHERE could they go.'
  },
  {
    route: 'risk-profile',
    icon: 'warning',
    title: 'Why Is This Settlement High-Risk?',
    caption: 'Explainable risk score — hazard exposure, slope, historical events, exposure and vulnerability contributors.'
  },
  {
    route: 'relocation-tool',
    icon: 'hub',
    title: 'Relocation Planning (MCDA)',
    caption: 'Weighted scoring of candidate resettlement sites — geological, buffer, cost and utility criteria against origin demand.'
  },
  {
    route: 'site-revalidation',
    icon: 'fact_check',
    title: 'Destination Revalidation',
    caption: 'A site is not assumed safe just because it sits outside the red zone — current/future risk, capacity, access and infrastructure, marked PASSED / CONDITIONAL / REJECTED.'
  },
  {
    route: 'recommendation',
    icon: 'thunderstorm',
    title: 'Scenario Stress Test',
    caption: 'Rainfall surge, road failure and capacity loss — does the recommendation survive changed conditions?'
  },
  {
    route: 'final-report',
    icon: 'description',
    title: 'Executive Decision Dossier',
    caption: 'Administrative summary — origin settlement, risk, evaluated sites, scenario result and the final recommendation.'
  }
];

let stepIndex = 0;
let isOpen = false;

export function openDemoGuide() {
  isOpen = true;
  const idx = DEMO_STEPS.findIndex(s => s.route === appState.getState().currentRoute);
  stepIndex = idx >= 0 ? idx : 0;
  render();
}

export function closeDemoGuide() {
  isOpen = false;
  clearDemoGuide();
}

export function isDemoGuideOpen() {
  return isOpen;
}

export function clearDemoGuide() {
  const el = document.getElementById('demo-guide');
  if (el) el.remove();
}

/** Called by the router after every route change so the tour tracks the current stage. */
export function syncDemoGuide() {
  if (!isOpen) {
    clearDemoGuide();
    return;
  }
  const idx = DEMO_STEPS.findIndex(s => s.route === appState.getState().currentRoute);
  if (idx >= 0) stepIndex = idx;
  render();
}

function goTo(index) {
  stepIndex = index;
  window.location.hash = `#${DEMO_STEPS[index].route}`; // router re-renders + syncDemoGuide() keeps the bar in sync
}

function render() {
  clearDemoGuide();
  const step = DEMO_STEPS[stepIndex];
  const total = DEMO_STEPS.length;
  const isLast = stepIndex === total - 1;

  const bar = document.createElement('div');
  bar.id = 'demo-guide';
  bar.innerHTML = `
    <div class="fixed bottom-4 inset-x-0 flex justify-center pointer-events-none" style="z-index:70">
      <div class="pointer-events-auto w-[min(960px,calc(100vw-1.5rem))] bg-slate-900/95 text-white rounded-2xl shadow-2xl border border-white/10 backdrop-blur px-4 py-3 md:px-5 md:py-3.5">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-300/25 rounded-md px-2 py-1 whitespace-nowrap">
            <span class="material-symbols-outlined text-xs">auto_awesome</span> Guided Demo · Step ${stepIndex + 1}/${total}
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 font-bold text-sm truncate">
              <span class="material-symbols-outlined text-emerald-400 text-lg shrink-0">${step.icon}</span>
              <span class="truncate">${step.title}</span>
            </div>
            <div class="text-[11px] text-slate-300/90 line-clamp-2 md:whitespace-normal">${step.caption}</div>
          </div>
          <div class="flex items-center gap-2">
            <button data-dg="skip" class="text-[11px] text-slate-400 hover:text-white underline underline-offset-2 px-1 transition">Skip</button>
            ${stepIndex > 0
              ? `<button data-dg="prev" class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/25 transition" title="Previous step"><span class="material-symbols-outlined text-sm">arrow_back</span></button>`
              : ''}
            <button data-dg="next" class="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-lg shadow transition active:scale-95">
              <span>${isLast ? 'Finish Tour' : 'Next Step'}</span>
              <span class="material-symbols-outlined text-sm">${isLast ? 'check' : 'arrow_forward'}</span>
            </button>
          </div>
        </div>
        <div class="mt-2.5 flex items-center gap-1">
          ${DEMO_STEPS.map((s, i) => `
            <div class="h-1 flex-1 rounded-full transition-colors ${i <= stepIndex ? 'bg-emerald-400' : 'bg-white/15'}"></div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(bar);

  bar.querySelector('[data-dg="skip"]')?.addEventListener('click', closeDemoGuide);
  bar.querySelector('[data-dg="prev"]')?.addEventListener('click', () => goTo(stepIndex - 1));
  bar.querySelector('[data-dg="next"]')?.addEventListener('click', () => {
    if (isLast) closeDemoGuide();
    else goTo(stepIndex + 1);
  });
}
