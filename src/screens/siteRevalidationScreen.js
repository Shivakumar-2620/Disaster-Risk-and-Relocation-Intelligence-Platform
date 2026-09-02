/**
 * Site Revalidation Screen Component (GSI Engineering & Statutory Clearances)
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';
import { showToast } from '../components/Toast.js';

export function renderSiteRevalidationScreen() {
  const { selectedSiteId, siteSignoffs } = appState.getState();
  const site = WAYANAD_DATA.candidateResettlementSites.find(s => s.id === selectedSiteId) || WAYANAD_DATA.candidateResettlementSites[0];
  const signoffs = siteSignoffs[site.id] || { revenue: true, forest: true, pwd: true, ksdma: true };

  const allApproved = signoffs.revenue && signoffs.forest && signoffs.pwd && signoffs.ksdma;

  return `
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">fact_check</span>
            GSI ENGINEERING & STATUTORY COMPLIANCE AUDIT
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">${site.name} Revalidation</h1>
          <p class="text-xs text-on-surface-variant mt-1">${site.panchayat} • ${site.availableAreaAcres} Acres • ${site.gsiSafetyRating}</p>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <!-- Site Selector -->
          <div class="relative w-full md:w-60">
            <select id="revalidation-site-select" class="w-full bg-surface-container-lowest border border-outline-variant text-xs rounded-xl px-3.5 py-2.5 font-semibold text-on-surface appearance-none focus:ring-2 focus:ring-primary">
              ${WAYANAD_DATA.candidateResettlementSites.map(s => `
                <option value="${s.id}" ${s.id === site.id ? 'selected' : ''}>
                  ${s.code}: ${s.name.split('(')[0]}
                </option>
              `).join('')}
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
      <div class="p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
        allApproved 
          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' 
          : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
      }">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl ${allApproved ? 'text-emerald-600' : 'text-amber-600'}">
            ${allApproved ? 'verified' : 'pending_actions'}
          </span>
          <div>
            <div class="font-bold text-sm uppercase tracking-wide">
              ${allApproved ? 'Statutory Revalidation: ALL CLEARANCES GRANTED' : 'Statutory Revalidation: PENDING INTER-DEPARTMENTAL CLEARANCE'}
            </div>
            <div class="text-xs opacity-80">
              ${allApproved ? 'Ready for Final Cabinet Order (G.O.) inclusion and land acquisition vesting.' : 'One or more department clearances are awaiting formal officer sign-off below.'}
            </div>
          </div>
        </div>
        <span class="font-mono text-xs font-bold px-3 py-1 rounded-full ${allApproved ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'}">
          ${allApproved ? 'CABINET READY' : 'CONDITIONAL'}
        </span>
      </div>

      <!-- Tier-1 Statutory Hard Constraints Checklist -->
      <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-sm space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant pb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">shield</span>
            <div>
              <h3 class="font-headline-sm text-sm sm:text-base font-bold text-primary">
                Tier-1 Statutory Disqualification Filter (Hard Constraints)
              </h3>
              <p class="text-[11px] text-on-surface-variant">Mandatory zero-tolerance geotechnical & ecological screening before soft MCDA scoring</p>
            </div>
          </div>
          <span class="inline-flex items-center gap-1 text-xs font-bold font-mono px-3 py-1 rounded-full ${
            site.hardConstraints?.allPassed !== false
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300'
          }">
            <span class="material-symbols-outlined text-sm">${site.hardConstraints?.allPassed !== false ? 'check_circle' : 'cancel'}</span>
            ${site.hardConstraints?.tier1Status || 'QUALIFIED'} (${site.hardConstraints?.passedCount || 4}/${site.hardConstraints?.totalConstraints || 4} PASS)
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          ${(site.hardConstraints?.items || [
            { name: "Slope Gradient", threshold: "≤ 12.0°", actual: site.terrainSlope.split(' ')[0], status: "PASS", detail: "Safely within standard buildable slope envelope" },
            { name: "Active Scarp Buffer", threshold: "≥ 2.0 km", actual: `${site.distanceFromDisasterKm} km`, status: "PASS", detail: "Adequate buffer separation from Meppadi runout zone" },
            { name: "Residual Hazard Score", threshold: "≤ 30/100", actual: "8.5/100", status: "PASS", detail: "Negligible post-landslide reactivation hazard" },
            { name: "Ecological Clearance", threshold: "Clear of Corridor", actual: "3.4 km Buffer", status: "PASS", detail: "Situated outside Wildlife Sanctuary eco-sensitive perimeter" }
          ]).map(c => `
            <div class="p-3.5 rounded-xl border ${
              c.status === 'PASS' 
                ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60' 
                : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60'
            } space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">${c.name}</span>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${
                  c.status === 'PASS' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                }">${c.status}</span>
              </div>
              <div class="flex justify-between text-[11px] text-slate-500">
                <span>Threshold: <strong class="text-slate-700 dark:text-slate-300 font-mono">${c.threshold}</strong></span>
                <span>Actual: <strong class="${c.status === 'PASS' ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600'} font-mono">${c.actual}</strong></span>
              </div>
              <p class="text-[10px] ${c.status === 'PASS' ? 'text-slate-600 dark:text-slate-400' : 'text-rose-700 dark:text-rose-300 font-semibold'} leading-tight pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                ${c.detail}
              </p>
            </div>
          `).join('')}
        </div>
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
              <span class="font-bold text-slate-800 dark:text-slate-200">${site.terrainSlope}</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Soil Stability Rating</span>
              <span class="font-bold text-emerald-700 dark:text-emerald-400">${site.soilStabilityScore} / 10 (Class A)</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Capacity Provision</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${site.capacityHouseholds} Units (${site.availableAreaAcres} Acres)</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Civil Delivery Timeline</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${site.estimatedDeliveryMonths} Months</span>
            </div>
          </div>

          <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant space-y-2 text-xs">
            <div class="font-semibold text-slate-800 dark:text-slate-200">Borehole Strata Summary:</div>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${site.gsiBoreholeSummary}</p>
          </div>

          <div class="space-y-2 text-xs">
            <div class="flex justify-between py-1 border-b border-outline-variant">
              <span class="text-slate-500">Water Supply Network:</span>
              <span class="font-medium text-slate-800 dark:text-slate-200 text-right">${site.waterSupply}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-outline-variant">
              <span class="text-slate-500">Power Grid Feed:</span>
              <span class="font-medium text-slate-800 dark:text-slate-200 text-right">${site.powerGrid}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-slate-500">Access Road Arterial:</span>
              <span class="font-medium text-slate-800 dark:text-slate-200 text-right">${site.accessRoad}</span>
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
            <div class="p-3.5 rounded-xl border transition ${signoffs.revenue ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">1. Department of Revenue (Govt. of Kerala)</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${signoffs.revenue ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}">
                      ${signoffs.revenue ? 'APPROVED' : 'PENDING'}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${site.signoffs.revenue.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${site.signoffs.revenue.officer} • ${site.signoffs.revenue.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${site.id}" data-dept="revenue">
                  <span class="material-symbols-outlined text-base">${signoffs.revenue ? 'check_box' : 'check_box_outline_blank'}</span>
                </button>
              </div>
            </div>

            <!-- 2. Forest & Wildlife Department -->
            <div class="p-3.5 rounded-xl border transition ${signoffs.forest ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">2. Department of Forest & Wildlife</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${signoffs.forest ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}">
                      ${signoffs.forest ? 'APPROVED' : 'PENDING'}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${site.signoffs.forest.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${site.signoffs.forest.officer} • ${site.signoffs.forest.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${site.id}" data-dept="forest">
                  <span class="material-symbols-outlined text-base">${signoffs.forest ? 'check_box' : 'check_box_outline_blank'}</span>
                </button>
              </div>
            </div>

            <!-- 3. Public Works Department (PWD) -->
            <div class="p-3.5 rounded-xl border transition ${signoffs.pwd ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">3. Public Works Department (PWD Roads)</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${signoffs.pwd ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}">
                      ${signoffs.pwd ? 'APPROVED' : 'PENDING'}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${site.signoffs.pwd.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${site.signoffs.pwd.officer} • ${site.signoffs.pwd.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${site.id}" data-dept="pwd">
                  <span class="material-symbols-outlined text-base">${signoffs.pwd ? 'check_box' : 'check_box_outline_blank'}</span>
                </button>
              </div>
            </div>

            <!-- 4. KSDMA Hazard Clearance -->
            <div class="p-3.5 rounded-xl border transition ${signoffs.ksdma ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
              <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900 dark:text-white">4. Kerala State Disaster Management Authority (KSDMA)</span>
                    <span class="font-mono text-[10px] font-bold px-2 py-0.5 rounded ${signoffs.ksdma ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}">
                      ${signoffs.ksdma ? 'APPROVED' : 'PENDING'}
                    </span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-400 text-[11px]">${site.signoffs.ksdma.note}</p>
                  <p class="text-[10px] text-slate-400">Sign-off Officer: ${site.signoffs.ksdma.officer} • ${site.signoffs.ksdma.date}</p>
                </div>
                <button class="toggle-signoff-btn p-1.5 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" data-site="${site.id}" data-dept="ksdma">
                  <span class="material-symbols-outlined text-base">${signoffs.ksdma ? 'check_box' : 'check_box_outline_blank'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupSiteRevalidationEvents() {
  document.getElementById('revalidation-site-select')?.addEventListener('change', (e) => {
    appState.selectSite(e.target.value);
    const mainEl = document.getElementById('screen-site-revalidation');
    if (mainEl) {
      mainEl.innerHTML = renderSiteRevalidationScreen();
      setupSiteRevalidationEvents();
    }
  });

  document.querySelectorAll('.toggle-signoff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const site = btn.dataset.site;
      const dept = btn.dataset.dept;
      appState.toggleSignoff(site, dept);
      showToast(`Toggled statutory clearance for ${dept.toUpperCase()}`, 'info', 'SIGN-OFF UPDATED');
      const mainEl = document.getElementById('screen-site-revalidation');
      if (mainEl) {
        mainEl.innerHTML = renderSiteRevalidationScreen();
        setupSiteRevalidationEvents();
      }
    });
  });
}
