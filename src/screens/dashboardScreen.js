/**
 * District Dashboard Screen Component
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';
import { openEmergencyModal } from '../components/Modal.js';

export function renderDashboardScreen() {
  const { overviewStats } = WAYANAD_DATA.district;
  const settlements = WAYANAD_DATA.settlements;

  // MODULE A: Household Impact & Relocation Inventory (spatial-join summary)
  const criticalSettlements = settlements.filter(s => s.riskLevel === 'CRITICAL');
  const affectedHouseholds = settlements.reduce((sum, s) => sum + s.displacedFamilies, 0);
  const affectedPopulation = settlements.reduce((sum, s) => sum + s.totalPopulation, 0);
  const highPriorityHouseholds = criticalSettlements.reduce((sum, s) => sum + s.displacedFamilies, 0);
  const peopleRequiringRelocation = criticalSettlements.reduce((sum, s) => sum + s.totalPopulation, 0);

  return `
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
          <div class="font-display-md text-3xl font-bold text-on-surface">${overviewStats.displacedHouseholds.toLocaleString()}</div>
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
          <div class="font-display-md text-3xl font-bold text-on-surface">${overviewStats.activeReliefCamps}</div>
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
          <div class="font-display-md text-3xl font-bold text-rose-600">${overviewStats.criticalRiskZones}</div>
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
          <div class="font-display-md text-3xl font-bold text-emerald-700 dark:text-emerald-400">₹${overviewStats.allocatedBudgetCr} Cr</div>
          <div class="mt-2 text-xs text-on-surface-variant font-medium flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">account_balance</span> G.O. (Ms) No. 114/2026 Cleared
          </div>
        </div>
      </div>

      <!-- MODULE A: Household Impact & Relocation Inventory -->
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <div class="p-5 border-b border-outline-variant">
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
            <span class="material-symbols-outlined text-sm">groups</span>
            MODULE A — HOUSEHOLD IMPACT & RELOCATION INVENTORY
          </div>
          <h3 class="font-headline-sm text-base font-bold text-primary">Red-Zone Household & Population Accounting</h3>
          <p class="text-xs text-on-surface-variant mt-0.5">Point-in-polygon / spatial-join of household points against hazard severity x vulnerability x population</p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/60">
          <div class="bg-surface-container-lowest p-5">
            <div class="text-slate-500 text-xs font-semibold mb-1">Affected Households</div>
            <div class="font-display-md text-3xl font-bold text-rose-600">${affectedHouseholds.toLocaleString()}</div>
            <div class="mt-1 text-[11px] text-slate-500">Inside hazard-impact polygons</div>
          </div>
          <div class="bg-surface-container-lowest p-5">
            <div class="text-slate-500 text-xs font-semibold mb-1">Affected Population</div>
            <div class="font-display-md text-3xl font-bold text-on-surface">${affectedPopulation.toLocaleString()}</div>
            <div class="mt-1 text-[11px] text-slate-500">Residents in impact zones</div>
          </div>
          <div class="bg-surface-container-lowest p-5">
            <div class="text-slate-500 text-xs font-semibold mb-1">High-Priority Households</div>
            <div class="font-display-md text-3xl font-bold text-amber-600">${highPriorityHouseholds.toLocaleString()}</div>
            <div class="mt-1 text-[11px] text-slate-500">CRITICAL-tier settlements only</div>
          </div>
          <div class="bg-surface-container-lowest p-5">
            <div class="text-slate-500 text-xs font-semibold mb-1">People Requiring Relocation</div>
            <div class="font-display-md text-3xl font-bold text-primary">${peopleRequiringRelocation.toLocaleString()}</div>
            <div class="mt-1 text-[11px] text-slate-500">100% relocation mandated</div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-data-tabular">
            <thead class="bg-surface-container-high text-on-surface-variant uppercase text-[11px] tracking-wider border-t border-outline-variant">
              <tr>
                <th class="py-3 px-4 font-semibold">Settlement</th>
                <th class="py-3 px-4 font-semibold">Risk</th>
                <th class="py-3 px-4 font-semibold">Households</th>
                <th class="py-3 px-4 font-semibold">Population</th>
                <th class="py-3 px-4 font-semibold">Priority Cohorts (Elderly + Children)</th>
                <th class="py-3 px-4 font-semibold">Household-Level "Why?" — Top Drivers</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant">
              ${settlements.map(s => `
                <tr class="hover:bg-surface-container-low transition">
                  <td class="py-3 px-4 font-semibold text-on-surface">${s.name} <span class="text-[10px] text-slate-400 font-mono">(${s.zoneCode})</span></td>
                  <td class="py-3 px-4">
                    <span class="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[11px] ${s.riskLevel === 'CRITICAL' ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}">
                      ${s.riskScore}/10 (${s.riskLevel})
                    </span>
                  </td>
                  <td class="py-3 px-4 font-bold text-on-surface">${s.displacedFamilies}</td>
                  <td class="py-3 px-4 text-on-surface">${s.totalPopulation}</td>
                  <td class="py-3 px-4 text-on-surface">${s.demographics.elderlyAndDisabled + s.demographics.childrenUnder10} persons <span class="text-[10px] text-slate-400">(${s.demographics.elderlyAndDisabled} elderly/disabled + ${s.demographics.childrenUnder10} children)</span></td>
                  <td class="py-3 px-4 text-on-surface-variant leading-snug">${s.topDrivers[0]} • ${s.topDrivers[1]}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quick Action Navigation Tiles -->      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              ${settlements.map(s => {
                const isCritical = s.riskLevel === 'CRITICAL';
                return `
                  <tr class="hover:bg-surface-container-low transition cursor-pointer settlement-row" data-id="${s.id}" data-risk="${s.riskLevel}" data-name="${s.name.toLowerCase()}">
                    <td class="py-3.5 px-4 font-semibold text-on-surface">
                      <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${isCritical ? 'bg-red-600 animate-pulse' : 'bg-amber-500'}"></span>
                        <span>${s.name}</span>
                        <span class="text-[10px] text-slate-400 font-mono">(${s.zoneCode})</span>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 text-on-surface-variant">${s.panchayat}</td>
                    <td class="py-3.5 px-4">
                      <span class="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[11px] ${
                        isCritical ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }">
                        <span class="material-symbols-outlined text-xs">crisis_alert</span> ${s.riskScore}/10 (${s.riskLevel})
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-on-surface">${s.elevation} • <strong class="text-rose-600">${s.slopeAngle}</strong></td>
                    <td class="py-3.5 px-4 font-bold text-on-surface">${s.displacedFamilies} (${s.totalPopulation} persons)</td>
                    <td class="py-3.5 px-4">
                      <span class="text-[11px] font-semibold text-emerald-800 dark:text-emerald-400">${s.recommendedAction}</span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <button class="inspect-settlement-btn bg-surface-container hover:bg-primary hover:text-white px-3 py-1 rounded text-xs font-semibold transition" data-id="${s.id}">
                        Inspect Profile →
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function setupDashboardEvents() {
  document.getElementById('dashboard-emergency-btn')?.addEventListener('click', () => {
    openEmergencyModal();
  });

  // Settlement Search & Filter
  const searchInput = document.getElementById('settlement-search');
  const filterSelect = document.getElementById('settlement-filter-risk');

  function filterRows() {
    const query = searchInput?.value.toLowerCase() || '';
    const risk = filterSelect?.value || 'ALL';

    document.querySelectorAll('.settlement-row').forEach(row => {
      const name = row.dataset.name || '';
      const rowRisk = row.dataset.risk || '';
      const matchesQuery = name.includes(query);
      const matchesRisk = risk === 'ALL' || rowRisk === risk;

      if (matchesQuery && matchesRisk) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  searchInput?.addEventListener('input', filterRows);
  filterSelect?.addEventListener('change', filterRows);

  document.querySelectorAll('.inspect-settlement-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      appState.selectSettlement(id);
      window.location.hash = '#risk-profile';
    });
  });

  document.querySelectorAll('.settlement-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.id;
      appState.selectSettlement(id);
      window.location.hash = '#risk-profile';
    });
  });
}
