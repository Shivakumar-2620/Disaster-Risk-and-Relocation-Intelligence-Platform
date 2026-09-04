/**
 * Interactive GIS Risk Map Screen Component
 */
import { mapService } from '../services/mapService.js';
import { appState } from '../services/state.js';
import { WAYANAD_DATA } from '../data/wayanadData.js';

export function renderMapScreen() {
  const { mapLayers } = appState.getState();

  // MODULE A: Household Impact & Relocation Inventory (spatial-join summary)
  const settlements = WAYANAD_DATA.settlements;
  const criticalSettlements = settlements.filter(s => s.riskLevel === 'CRITICAL');
  const affectedHouseholds = settlements.reduce((sum, s) => sum + s.displacedFamilies, 0);
  const affectedPopulation = settlements.reduce((sum, s) => sum + s.totalPopulation, 0);
  const highPriorityHouseholds = criticalSettlements.reduce((sum, s) => sum + s.displacedFamilies, 0);
  const peopleRequiringRelocation = criticalSettlements.reduce((sum, s) => sum + s.totalPopulation, 0);

  return `
    <div class="relative w-full h-[calc(100vh-4rem)] flex overflow-hidden">
      <!-- Full Bleed Leaflet Map Canvas -->
      <div id="leaflet-map-canvas" class="w-full h-full bg-slate-200 z-10"></div>

      <!-- Top Map Controls Floating Bar -->
      <div class="absolute top-4 left-4 right-4 md:right-auto z-30 flex flex-wrap items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-2xl border border-outline-variant shadow-lg text-xs">
        <div class="font-bold text-primary flex items-center gap-1.5 px-2">
          <span class="material-symbols-outlined text-base">layers</span>
          <span>GIS Layers:</span>
        </div>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer font-medium">
          <input type="checkbox" id="layer-toggle-debris" ${mapLayers.hazardDebris ? 'checked' : ''} class="rounded text-red-600 focus:ring-red-500">
          <span class="text-rose-700 font-semibold">Debris Flow Axis</span>
        </label>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer font-medium">
          <input type="checkbox" id="layer-toggle-slope" ${mapLayers.slope35 ? 'checked' : ''} class="rounded text-red-600 focus:ring-red-500">
          <span class="text-amber-700 font-semibold">Slope > 35°</span>
        </label>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer font-medium">
          <input type="checkbox" id="layer-toggle-buffers" ${mapLayers.safeBuffers ? 'checked' : ''} class="rounded text-emerald-600 focus:ring-emerald-500">
          <span class="text-emerald-700 font-semibold">Safe Resettlement Buffers</span>
        </label>

        <div class="h-4 w-px bg-outline-variant mx-1"></div>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-50 border border-violet-200 hover:bg-violet-100 cursor-pointer font-medium shadow-sm" title="Module A — Household Impact & Relocation Inventory (impact polygons + Why? drivers)">
          <input type="checkbox" id="layer-toggle-inventory" ${mapLayers.relocationInventory ? 'checked' : ''} class="rounded text-violet-600 focus:ring-violet-500">
          <span class="material-symbols-outlined text-sm text-violet-600">groups</span>
          <span class="text-violet-800 font-semibold">Relocation Inventory</span>
        </label>

        <div class="h-4 w-px bg-outline-variant mx-1"></div>

        <button id="toggle-satellite-btn" class="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary hover:bg-primary-container text-white font-semibold shadow-sm transition">
          <span class="material-symbols-outlined text-sm">satellite_alt</span>
          <span>${mapLayers.satelliteBasemap ? 'Vector Map' : 'Satellite View'}</span>
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
        <div id="legend-row-inventory-critical" class="items-center gap-2" style="display:${mapLayers.relocationInventory ? 'flex' : 'none'}">
          <span class="w-3 h-3 rounded-full bg-rose-500 ring-2 ring-rose-200"></span>
          <span class="text-on-surface">Impact Ring — CRITICAL Settlement (relocation mandated)</span>
        </div>
        <div id="legend-row-inventory-high" class="items-center gap-2" style="display:${mapLayers.relocationInventory ? 'flex' : 'none'}">
          <span class="w-3 h-3 rounded-full bg-amber-400 ring-2 ring-amber-200"></span>
          <span class="text-on-surface">Impact Ring — HIGH Settlement (relocation advisory)</span>
        </div>
        <div class="flex items-center gap-2 text-slate-500 font-mono text-[10px] pt-1 border-t border-outline-variant">
          <span>Center: 11.538° N, 76.135° E (Meppadi Axis)</span>
        </div>
      </div>

      <!-- MODULE A: Relocation Inventory Feature Panel -->
      <div id="map-inventory-panel" class="absolute top-28 md:top-24 left-4 z-20 w-[360px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-10rem)] bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl border border-outline-variant shadow-xl flex flex-col overflow-hidden ${mapLayers.relocationInventory ? '' : 'hidden'}">
        <div class="flex items-start justify-between gap-3 px-4 py-3 border-b border-outline-variant bg-violet-50/70 dark:bg-violet-950/30 shrink-0">
          <div>
            <div class="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-800 dark:text-violet-300">
              <span class="material-symbols-outlined text-sm">groups</span> Module A — Relocation Inventory
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">Household impact × relocation planning · hazard severity × vulnerability × population spatial join</p>
          </div>
          <button id="map-inventory-close" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 shrink-0" title="Hide inventory">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-px bg-outline-variant/70 border-b border-outline-variant shrink-0">
          <div class="bg-surface-container-lowest px-3.5 py-2.5">
            <div class="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">Affected Households</div>
            <div class="font-display-md text-xl font-bold text-rose-600 font-data-tabular">${affectedHouseholds.toLocaleString()}</div>
            <div class="text-[9px] text-slate-400">Inside hazard-impact polygons</div>
          </div>
          <div class="bg-surface-container-lowest px-3.5 py-2.5">
            <div class="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">Affected Population</div>
            <div class="font-display-md text-xl font-bold text-slate-800 dark:text-slate-200 font-data-tabular">${affectedPopulation.toLocaleString()}</div>
            <div class="text-[9px] text-slate-400">Residents in impact zones</div>
          </div>
          <div class="bg-surface-container-lowest px-3.5 py-2.5">
            <div class="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">High-Priority HH</div>
            <div class="font-display-md text-xl font-bold text-amber-600 font-data-tabular">${highPriorityHouseholds.toLocaleString()}</div>
            <div class="text-[9px] text-slate-400">CRITICAL tier only</div>
          </div>
          <div class="bg-surface-container-lowest px-3.5 py-2.5">
            <div class="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">People Relocating</div>
            <div class="font-display-md text-xl font-bold text-violet-700 dark:text-violet-300 font-data-tabular">${peopleRequiringRelocation.toLocaleString()}</div>
            <div class="text-[9px] text-slate-400">100% relocation mandated</div>
          </div>
        </div>

        <div class="overflow-y-auto grow min-h-0">
          <table class="w-full text-left text-[11px] font-data-tabular">
            <thead class="bg-surface-container-high text-on-surface-variant uppercase text-[10px] tracking-wider sticky top-0 z-10">
              <tr>
                <th class="py-2 px-3 font-semibold">Settlement</th>
                <th class="py-2 px-2 font-semibold text-right">HH</th>
                <th class="py-2 px-2 font-semibold text-right">Pop</th>
                <th class="py-2 px-3 font-semibold">"Why?" — Top Driver</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant">
              ${settlements.map(s => {
                const isCritical = s.riskLevel === 'CRITICAL';
                return `
                  <tr class="hover:bg-violet-50/60 dark:hover:bg-violet-950/20 transition cursor-pointer map-inventory-row" data-id="${s.id}">
                    <td class="py-2 px-3">
                      <div class="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                        <span class="w-1.5 h-1.5 rounded-full shrink-0 ${isCritical ? 'bg-rose-600' : 'bg-amber-500'}"></span>
                        <span>${s.name}</span>
                      </div>
                      <div class="text-[9px] text-slate-400 font-mono mt-0.5">${s.riskLevel} · ${s.riskScore}/10</div>
                    </td>
                    <td class="py-2 px-2 text-right font-bold text-rose-600">${s.displacedFamilies.toLocaleString()}</td>
                    <td class="py-2 px-2 text-right text-slate-700 dark:text-slate-300">${s.totalPopulation.toLocaleString()}</td>
                    <td class="py-2 px-3 text-slate-500 dark:text-slate-400 leading-snug">${s.topDrivers[0] || ''}<span class="text-slate-400">${s.topDrivers.length > 1 ? ` +${s.topDrivers.length - 1} more` : ''}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div class="px-3.5 py-2 border-t border-outline-variant bg-surface-container-low shrink-0 text-[10px] text-slate-500 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-xs">touch_app</span>
          Click a settlement row to fly to it on the map — full "Why?" drivers open in the inspector.
        </div>
      </div>

      <!-- Slide-over Settlement / Site Inspector Drawer -->
      <div id="map-inspector-drawer" class="absolute top-0 right-0 bottom-0 w-80 md:w-96 bg-surface-container-lowest border-l border-outline-variant shadow-2xl z-30 transform translate-x-full transition-transform duration-300 overflow-y-auto">
        <!-- Dynamic content injected by mapService -->
      </div>
    </div>
  `;
}

export function setupMapEvents() {
  // Initialize map when view is mounted
  setTimeout(() => {
    mapService.initMap('leaflet-map-canvas');
  }, 100);

  // Layer toggles
  document.getElementById('layer-toggle-debris')?.addEventListener('change', (e) => {
    mapService.toggleLayer('debris', e.target.checked);
  });

  document.getElementById('layer-toggle-slope')?.addEventListener('change', (e) => {
    mapService.toggleLayer('slope', e.target.checked);
  });

  document.getElementById('layer-toggle-buffers')?.addEventListener('change', (e) => {
    mapService.toggleLayer('safeBuffers', e.target.checked);
  });

  document.getElementById('toggle-satellite-btn')?.addEventListener('click', () => {
    const isSat = !appState.getState().mapLayers.satelliteBasemap;
    appState.toggleMapLayer('satelliteBasemap');
    mapService.toggleLayer('satelliteBasemap', isSat);
    const btn = document.getElementById('toggle-satellite-btn');
    if (btn) {
      btn.querySelector('span:last-child').textContent = isSat ? 'Vector Map' : 'Satellite View';
    }
  });

  // MODULE A: Relocation Inventory feature toggle (impact rings + KPI panel + legend)
  const syncInventoryLegend = (enabled) => {
    const crRow = document.getElementById('legend-row-inventory-critical');
    const hiRow = document.getElementById('legend-row-inventory-high');
    if (crRow) crRow.style.display = enabled ? 'flex' : 'none';
    if (hiRow) hiRow.style.display = enabled ? 'flex' : 'none';
  };

  const inventoryToggle = document.getElementById('layer-toggle-inventory');
  inventoryToggle?.addEventListener('change', (e) => {
    appState.toggleMapLayer('relocationInventory');
    mapService.toggleLayer('relocationInventory', e.target.checked);
    const panel = document.getElementById('map-inventory-panel');
    if (panel) panel.classList.toggle('hidden', !e.target.checked);
    syncInventoryLegend(e.target.checked);
  });

  document.getElementById('map-inventory-close')?.addEventListener('click', () => {
    if (inventoryToggle) inventoryToggle.checked = false;
    appState.toggleMapLayer('relocationInventory');
    mapService.toggleLayer('relocationInventory', false);
    const panel = document.getElementById('map-inventory-panel');
    if (panel) panel.classList.add('hidden');
    syncInventoryLegend(false);
  });

  document.querySelectorAll('.map-inventory-row').forEach(row => {
    row.addEventListener('click', () => mapService.openSettlement(row.dataset.id));
  });
}
