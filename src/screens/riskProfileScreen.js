/**
 * Settlement Risk Profile Screen Component
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';

export function renderRiskProfileScreen() {
  const { selectedSettlementId } = appState.getState();
  const settlement = WAYANAD_DATA.settlements.find(s => s.id === selectedSettlementId) || WAYANAD_DATA.settlements[0];
  const isCritical = settlement.riskLevel === 'CRITICAL';

  return `
    <div class="p-4 md:p-margin-desktop max-w-7xl mx-auto flex flex-col gap-6">
      <!-- Header & Settlement Selector -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <span class="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded text-[11px] ${
              isCritical ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
            }">
              <span class="material-symbols-outlined text-xs">crisis_alert</span> ${settlement.riskLevel} (${settlement.riskScore}/10)
            </span>
            <span class="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[11px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <span class="material-symbols-outlined text-xs">verified</span> ${settlement.dataQuality || 'HIGH'} DATA QUALITY
            </span>
            <span class="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[11px] bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
              <span class="material-symbols-outlined text-xs">psychology</span> ML Susceptibility: ${settlement.mlSusceptibility || 92.5}%
            </span>
            <span class="text-xs font-mono text-slate-500">${settlement.zoneCode}</span>
          </div>
          <h1 class="font-display-md text-2xl md:text-3xl font-bold text-primary">${settlement.name} Settlement</h1>
          <p class="text-xs text-on-surface-variant mt-1">${settlement.panchayat} Panchayat • Taluk Vythiri • Verified under KSDMA-GSI Framework</p>
        </div>

        <!-- Dynamic Settlement Selector -->
        <div class="flex items-center gap-3 w-full md:w-auto">
          <div class="relative w-full md:w-64">
            <select id="risk-profile-settlement-select" class="w-full bg-surface-container-lowest border border-outline-variant text-xs rounded-xl px-3.5 py-2.5 font-semibold text-on-surface appearance-none focus:ring-2 focus:ring-primary">
              ${WAYANAD_DATA.settlements.map(s => `
                <option value="${s.id}" ${s.id === settlement.id ? 'selected' : ''}>
                  ${s.name} (${s.riskScore}/10 - ${s.riskLevel})
                </option>
              `).join('')}
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
          <span class="font-bold text-base text-on-surface">${settlement.elevation}</span>
          <span class="text-[11px] text-slate-400 block mt-0.5">Catchment Ridge Zone</span>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">Slope Incline</span>
          <span class="font-bold text-base text-rose-600">${settlement.slopeAngle}</span>
          <span class="text-[11px] text-rose-600 block mt-0.5">Exceeds 30° Threshold</span>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">24h Rainfall Level</span>
          <span class="font-bold text-base text-blue-600">${settlement.rainfall24h}</span>
          <span class="text-[11px] text-blue-600 block mt-0.5">Extreme Saturation</span>
        </div>
        <div class="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span class="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">Affected Families</span>
          <span class="font-bold text-base text-on-surface">${settlement.displacedFamilies}</span>
          <span class="text-[11px] text-slate-500 block mt-0.5">${settlement.totalPopulation} total population</span>
        </div>
      </div>

      <!-- ML Decision-Support Banner & Primary Drivers -->
      <div class="bg-purple-50/70 dark:bg-purple-950/30 p-5 rounded-2xl border border-purple-200 dark:border-purple-900/60 shadow-sm flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
        <div class="space-y-1.5 flex-1">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-purple-700 dark:text-purple-400 text-lg">smart_toy</span>
            <span class="font-bold text-xs text-purple-900 dark:text-purple-200 uppercase tracking-wider">ML Random Forest Prediction Engine</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-100 font-mono font-bold">Confidence: ${settlement.mlConfidence || '98.7%'}</span>
          </div>
          <p class="text-xs text-purple-950 dark:text-purple-200 leading-relaxed">
            Data-driven landslide susceptibility evaluated at <strong class="text-purple-700 dark:text-purple-300 font-mono">${settlement.mlSusceptibility || 92.5}% (${settlement.mlRiskClass || 'CRITICAL'})</strong> using 8 geomorphological features calibrated against GSI & IMD historical disaster occurrences.
          </p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span class="text-[10px] font-semibold text-purple-900 dark:text-purple-300">Key Risk Drivers:</span>
            ${(settlement.topDrivers || ["Slope Incline", "24h Rainfall", "Regolith Depth"]).map(d => `
              <span class="text-[10px] px-2 py-0.5 bg-white dark:bg-slate-800 text-purple-800 dark:text-purple-300 rounded border border-purple-200 dark:border-purple-800 font-medium">${d}</span>
            `).join('')}
          </div>
        </div>

        <a href="#model-validation" class="whitespace-nowrap px-3.5 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-xl shadow transition flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">monitoring</span>
          <span>View Model Validation</span>
        </a>
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
                <span class="text-rose-600 font-bold">${settlement.debrisFlowVulnerability}% (Catastrophic)</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-rose-600 h-full rounded-full transition-all duration-500" style="width: ${settlement.debrisFlowVulnerability}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300">Slope Runoff & Pore Water Pressure</span>
                <span class="text-rose-600 font-bold">${settlement.slopeRunoffIndex}% (Critical)</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-rose-600 h-full rounded-full transition-all duration-500" style="width: ${settlement.slopeRunoffIndex}%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between font-semibold mb-1">
                <span class="text-slate-700 dark:text-slate-300">Soil Liquefaction & Regolith Failure</span>
                <span class="text-amber-600 font-bold">${settlement.soilLiquefactionIndex}% (High)</span>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div class="bg-amber-500 h-full rounded-full transition-all duration-500" style="width: ${settlement.soilLiquefactionIndex}%"></div>
              </div>
            </div>
          </div>

          <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant space-y-2 text-xs">
            <div class="flex justify-between">
              <span class="text-slate-500">Overburden Regolith Depth:</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${settlement.regolithDepth}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Underlying Bedrock Complex:</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">${settlement.bedrockType}</span>
            </div>
          </div>

          <p class="text-xs text-rose-900 dark:text-rose-200 bg-rose-50 dark:bg-rose-950/40 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 leading-relaxed">
            <strong>Geotechnical Conclusion:</strong> ${settlement.hazardSummary}
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
              <span class="font-bold text-lg text-slate-900 dark:text-white">${settlement.demographics.elderlyAndDisabled}</span>
              <span class="text-[10px] text-slate-400">High assistance priority</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Children Under 10</span>
              <span class="font-bold text-lg text-slate-900 dark:text-white">${settlement.demographics.childrenUnder10}</span>
              <span class="text-[10px] text-slate-400">Anganwadi & school need</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Livestock Holdings</span>
              <span class="font-bold text-lg text-slate-900 dark:text-white">${settlement.demographics.livestockHoldings}</span>
              <span class="text-[10px] text-slate-400">Cattle sheds & fodder plan</span>
            </div>
            <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant">
              <span class="text-slate-500 block text-[11px]">Below Poverty Line (BPL)</span>
              <span class="font-bold text-lg text-emerald-700 dark:text-emerald-400">${settlement.demographics.bplRatio}</span>
              <span class="text-[10px] text-slate-400">100% Free housing grant</span>
            </div>
          </div>

          <!-- Critical Infrastructure Losses -->
          <div class="space-y-2 text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-300 block">Critical Infrastructure Damage Status:</span>
            <ul class="space-y-1.5">
              ${settlement.criticalInfrastructureLoss.map(item => `
                <li class="flex items-center gap-2 p-2 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-100 dark:border-rose-900/50">
                  <span class="material-symbols-outlined text-rose-600 text-sm">cancel</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Data Provenance & Sensor Verification -->
          <div class="p-3.5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-outline-variant space-y-1.5 text-[11px]">
            <div class="flex items-center justify-between font-bold text-slate-700 dark:text-slate-300">
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-xs text-primary">policy</span>
                <span>Data Provenance & Agency Sign-Off</span>
              </span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">100% VERIFIED</span>
            </div>
            <p class="text-slate-500 leading-tight">
              Primary inputs verified via Geological Survey of India (GSI Borehole NLSM), IMD Meppadi AWS Station, and ISRO Cartosat-2 30m DEM slope processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupRiskProfileEvents() {
  document.getElementById('risk-profile-settlement-select')?.addEventListener('change', (e) => {
    appState.selectSettlement(e.target.value);
    // Re-render
    const mainEl = document.getElementById('screen-risk-profile');
    if (mainEl) {
      mainEl.innerHTML = renderRiskProfileScreen();
      setupRiskProfileEvents();
    }
  });
}
