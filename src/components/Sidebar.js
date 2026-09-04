/**
 * Side Navigation Bar Component
 */
import { appState } from '../services/state.js';

export function renderSidebar() {
  const state = appState.getState();
  const currentRoute = state.currentRoute;

  const navItems = [
    { id: 'dashboard', label: 'District Dashboard', icon: 'dashboard', badge: 'Live' },
    { id: 'map', label: 'Interactive Risk Map', icon: 'map', badge: 'GIS' },
    { id: 'risk-profile', label: 'Settlement Risk Profile', icon: 'warning', badge: '4 Zones' },
    { id: 'model-validation', label: 'ML Model Validation', icon: 'psychology', badge: 'RF 97%' },
    { id: 'relocation-tool', label: 'Relocation Planning Tool', icon: 'hub', badge: 'MCDA' },
    { id: 'site-revalidation', label: 'Site Revalidation', icon: 'fact_check', badge: 'GSI' },
    { id: 'recommendation', label: 'Climate Scenarios', icon: 'thunderstorm', badge: 'Sim' },
    { id: 'final-report', label: 'Executive Cabinet Dossier', icon: 'description', badge: 'G.O.' }
  ];

  // Demo journey progress (SIH workflow stages) mapped from current route
  const DEMO_STAGES = [
    { stage: 1, label: 'Risk Detection', route: 'map' },
    { stage: 2, label: 'Prioritization', route: 'risk-profile' },
    { stage: 3, label: 'Relocation Planning', route: 'relocation-tool' },
    { stage: 4, label: 'Site Validation', route: 'site-revalidation' },
    { stage: 5, label: 'Scenario Analysis', route: 'recommendation' },
    { stage: 6, label: 'Recommendation', route: 'final-report' }
  ];
  const STAGE_OF_ROUTE = {
    dashboard: 1, map: 1, 'model-validation': 1,
    'risk-profile': 2, 'relocation-tool': 3,
    'site-revalidation': 4, recommendation: 5, 'final-report': 6
  };
  const currentStage = STAGE_OF_ROUTE[currentRoute] || 1;

  return `
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

      <!-- Demo Journey Progress -->
      <div class="px-4 mb-3">
        <div class="bg-surface-container-low rounded-xl border border-outline-variant p-3 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Demo Journey</span>
            <span class="text-[10px] font-mono text-primary font-bold">Stage ${currentStage} / 6</span>
          </div>
          <div class="space-y-0.5">
            ${DEMO_STAGES.map(st => {
              const isDone = st.stage < currentStage;
              const isActive = st.stage === currentStage;
              return `
                <a href="#${st.route}" class="flex items-center gap-2 px-2 py-1 rounded-md transition ${isActive ? 'bg-primary/10 ring-1 ring-primary/30' : 'hover:bg-surface-container-high'}">
                  <span class="w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-[9px] font-bold font-mono ${isDone ? 'bg-emerald-600 text-white' : isActive ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300'}">${isDone ? '✓' : st.stage}</span>
                  <span class="text-[11px] font-semibold truncate ${isActive ? 'text-primary' : isDone ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'}">${st.label}</span>
                </a>
              `;
            }).join('')}
          </div>
          <a href="#architecture" class="flex items-center gap-2 mt-1 pt-1.5 border-t border-outline-variant text-[11px] font-semibold text-on-surface-variant hover:text-primary transition">
            <span class="material-symbols-outlined text-sm text-primary">account_tree</span>
            <span>System Architecture & Explainability</span>
          </a>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 px-3 space-y-1 overflow-y-auto">
        <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Command Modules</div>
        ${navItems.map(item => {
          const isActive = currentRoute === item.id;
          return `
            <a href="#${item.id}" class="nav-item flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
              isActive 
                ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-lg ${isActive ? 'text-primary' : 'text-slate-500'}">${item.icon}</span>
                <span class="truncate">${item.label}</span>
              </div>
              <span class="text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isActive ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }">${item.badge}</span>
            </a>
          `;
        }).join('')}
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
  `;
}
