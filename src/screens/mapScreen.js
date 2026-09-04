/**
 * Interactive GIS Risk Map Screen Component — LIVE DISASTER SITUATIONAL MAP
 */
import { mapService } from '../services/mapService.js';
import { appState } from '../services/state.js';
import { liveService, fmtClock } from '../services/liveService.js';
import { WAYANAD_DATA } from '../data/wayanadData.js';

export function renderMapScreen() {
  const { mapLayers, liveWeather, liveAlerts } = appState.getState();
  const cfg = liveService.getConfig();

  // MODULE A: Household Impact & Relocation Inventory (spatial-join summary)
  const settlements = WAYANAD_DATA.settlements;
  const criticalSettlements = settlements.filter(s => s.riskLevel === 'CRITICAL');
  const affectedHouseholds = settlements.reduce((sum, s) => sum + s.displacedFamilies, 0);
  const affectedPopulation = settlements.reduce((sum, s) => sum + s.totalPopulation, 0);
  const highPriorityHouseholds = criticalSettlements.reduce((sum, s) => sum + s.displacedFamilies, 0);
  const peopleRequiringRelocation = criticalSettlements.reduce((sum, s) => sum + s.totalPopulation, 0);

  // LIVE situational header state
  const liveMode = liveWeather && liveWeather.source === 'IMD' ? 'LIVE' : 'DEMO';
  const lastClock = liveWeather && liveWeather.timestamp ? fmtClock(liveWeather.timestamp) : '—';
  const alertCount = liveAlerts && liveAlerts.count ? liveAlerts.count : 0;
  const alertSeverity = liveAlerts && liveAlerts.severity ? liveAlerts.severity : 'LOW';
  const rainfall = liveWeather && liveWeather.rainfall_24h_mm != null
    ? `${liveWeather.rainfall_24h_mm.toFixed ? liveWeather.rainfall_24h_mm.toFixed(1) : liveWeather.rainfall_24h_mm} mm`
    : '—';

  return `
    <div class="relative w-full h-[calc(100vh-4rem)] flex overflow-hidden">
      <!-- Full Bleed Leaflet Map Canvas -->
      <div id="leaflet-map-canvas" class="w-full h-full bg-slate-200 z-10"></div>

      <!-- LIVE Situational Map Header -->
      <div class="absolute top-3 left-1/2 -translate-x-1/2 z-40 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-outline-variant shadow-lg flex items-center gap-3 text-xs whitespace-nowrap">
        <div class="flex items-center gap-1.5 font-bold text-slate-800">
          <span class="material-symbols-outlined text-primary text-base">public</span>
          <span>LIVE DISASTER SITUATIONAL MAP</span>
          <span class="text-slate-400 font-medium">· Wayanad, Kerala</span>
        </div>
        <div class="h-4 w-px bg-outline-variant"></div>
        <span id="live-badge" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${liveMode === 'LIVE' ? 'bg-emerald-600 text-white' : 'bg-slate-500 text-white'}">
          <span class="w-1.5 h-1.5 rounded-full ${liveMode === 'LIVE' ? 'bg-white animate-pulse' : 'bg-white'}"></span> ● ${liveMode === 'LIVE' ? 'LIVE' : 'DEMO'}
        </span>
        <div class="flex flex-col leading-tight">
          <span class="text-slate-500">Last updated: <span id="live-last-updated" class="font-mono text-slate-700">${lastClock}</span></span>
          <span class="text-slate-500">Refresh: <span id="live-refresh" class="font-mono text-slate-700">every ${cfg.refreshIntervalSeconds}s</span></span>
        </div>
      </div>

      <!-- Stale data banner (hidden by default) -->
      <div id="live-stale-banner" class="hidden absolute top-16 left-1/2 -translate-x-1/2 z-40 bg-amber-100 border border-amber-300 text-amber-800 px-4 py-2 rounded-xl text-xs font-semibold shadow flex items-center gap-2">
        <span class="material-symbols-outlined text-sm">schedule</span>
        <span id="live-stale-text">DATA STALE — using last successful observation.</span>
      </div>

      <!-- Top Map Controls Floating Bar -->
      <div class="absolute top-20 left-4 right-4 md:right-auto z-30 flex flex-wrap items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-2xl border border-outline-variant shadow-lg text-xs">
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

        <!-- LIVE layers -->
        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 cursor-pointer font-medium" title="Dynamic risk overlay recomputed from live rainfall">
          <input type="checkbox" id="layer-toggle-liverisk" ${mapLayers.liveRisk ? 'checked' : ''} class="rounded text-cyan-600 focus:ring-cyan-500">
          <span class="material-symbols-outlined text-sm text-cyan-600">monitor_heart</span>
          <span class="text-cyan-800 font-semibold">Live Risk</span>
        </label>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 cursor-pointer font-medium" title="Current weather / rainfall layer">
          <input type="checkbox" id="layer-toggle-rainfall" ${mapLayers.rainfall ? 'checked' : ''} class="rounded text-blue-600 focus:ring-blue-500">
          <span class="material-symbols-outlined text-sm text-blue-600">water_drop</span>
          <span class="text-blue-800 font-semibold">Rainfall</span>
        </label>

        <label class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 cursor-pointer font-medium" title="Active weather alerts">
          <input type="checkbox" id="layer-toggle-alerts" ${mapLayers.alerts ? 'checked' : ''} class="rounded text-red-600 focus:ring-red-500">
          <span class="material-symbols-outlined text-sm text-red-600">crisis_alert</span>
          <span class="text-red-800 font-semibold">Alerts</span>
          ${alertCount ? `<span class="px-1.5 py-0.5 rounded-full text-[10px] font-bold ${alertSeverity === 'HIGH' ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'}">${alertCount}</span>` : ''}
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
        <div id="legend-row-rainfall" class="items-center gap-2" style="display:${mapLayers.rainfall ? 'flex' : 'none'}">
          <span class="w-3 h-3 rounded-full bg-blue-500"></span>
          <span class="text-on-surface">Live Rainfall Layer (${rainfall})</span>
        </div>
        <div class="flex items-center gap-2 text-slate-500 font-mono text-[10px] pt-1 border-t border-outline-variant">
          <span>Center: 11.538° N, 76.135° E (Meppadi Axis)</span>
        </div>
      </div>

      <!-- DATA SOURCES / Provenance Panel -->
      <div class="absolute bottom-6 right-4 z-20 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-2xl border border-outline-variant shadow-lg text-[10px] w-52">
        <div class="font-bold text-on-surface uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
          <span class="material-symbols-outlined text-xs">verified_user</span> DATA SOURCES
        </div>
        <div id="provenance-weather" class="flex items-center justify-between gap-1 text-slate-600">
          <span>Weather:</span>
          <span class="font-mono text-slate-800">${liveWeather ? liveWeather.source : '—'} · ${lastClock}</span>
        </div>
        <div class="flex items-center justify-between gap-1 text-slate-600 mt-1">
          <span>Base Map:</span>
          <span class="font-mono text-slate-800">OpenStreetMap</span>
        </div>
        <div class="flex items-center justify-between gap-1 text-slate-600 mt-1">
          <span>Risk:</span>
          <span class="font-mono text-slate-800">Platform Risk Engine · now</span>
        </div>
        <div id="provenance-mode" class="mt-1.5 pt-1.5 border-t border-outline-variant text-[9px] font-semibold ${liveMode === 'LIVE' ? 'text-emerald-600' : 'text-amber-600'}">
          ${liveMode === 'LIVE' ? '● LIVE DATA' : '● DEMO / SIMULATED DATA'}
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
                    <td class="py-2 px-3 text-slate-500 dark:text-slate-400 leading-snug">
                      <button type="button" class="why-btn inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/40 hover:bg-violet-100 dark:hover:bg-violet-900/40 border border-violet-200 dark:border-violet-800 rounded-md px-1.5 py-0.5 transition" title="Show all household-level Why? drivers">
                        <span class="material-symbols-outlined text-xs">psychology_alt</span> Why?
                      </button>
                      <div class="why-drivers mt-1.5 hidden space-y-1">
                        ${s.topDrivers.map(d => `<div class="flex items-start gap-1 text-[10px] leading-snug text-slate-600 dark:text-slate-400"><span class="material-symbols-outlined text-[11px] text-rose-500 mt-px shrink-0">chevron_right</span>${d}</div>`).join('')}
                      </div>
                    </td>
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

  // ── LIVE service: subscribe, then start polling (auto-refresh) ──────
  const renderLiveUI = (data) => {
    // Update live header badge / timestamps
    const badge = document.getElementById('live-badge');
    const lastUpd = document.getElementById('live-last-updated');
    if (badge) {
      const isLive = data.mode === 'LIVE';
      badge.className = `inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${isLive ? 'bg-emerald-600 text-white' : 'bg-slate-500 text-white'}`;
      badge.textContent = `● ${isLive ? 'LIVE' : 'DEMO'}`;
    }
    if (lastUpd && data.lastUpdate) lastUpd.textContent = liveService.formatClock(data.lastUpdate);

    // Stale banner
    const banner = document.getElementById('live-stale-banner');
    const staleText = document.getElementById('live-stale-text');
    if (banner && staleText) {
      if (data.stale) {
        banner.classList.remove('hidden');
        staleText.textContent = `DATA STALE — last successful update ${liveService.formatClock(data.lastUpdate)}. Using latest available data.`;
      } else {
        banner.classList.add('hidden');
      }
    }

    // Legend rainfall value
    const legendRain = document.getElementById('legend-row-rainfall')?.querySelector('span:last-child');
    if (legendRain && data.weather && data.weather.rainfall_24h_mm != null) {
      legendRain.textContent = `Live Rainfall Layer (${data.weather.rainfall_24h_mm.toFixed ? data.weather.rainfall_24h_mm.toFixed(1) : data.weather.rainfall_24h_mm} mm)`;
    }

    // Provenance
    const provWeather = document.getElementById('provenance-weather');
    if (provWeather && data.weather) {
      provWeather.innerHTML = `<span>Weather:</span><span class="font-mono text-slate-800">${data.weather.source} · ${liveService.formatClock(data.weather.timestamp)}</span>`;
    }
    const provMode = document.getElementById('provenance-mode');
    if (provMode) {
      provMode.textContent = data.backendReachable && data.weather && data.weather.source === 'IMD' ? '● LIVE DATA' : '● DEMO / SIMULATED DATA';
    }

    // Update map layers + persist to appState for cross-navigation + inspector
    appState.setLiveData({ risk: data.riskMap, weather: data.weather, alerts: data.alerts });
    mapService.renderLiveRisk(data.riskMap);
    mapService.renderRainfall(data.weather);
    mapService.renderAlerts(data.alerts);

    // Re-render the open inspector so live block refreshes live
    const sel = appState.getState().selectedSettlementId;
    const stl = WAYANAD_DATA.settlements.find(s => s.id === sel);
    if (stl && document.getElementById('map-inspector-drawer') && !document.getElementById('map-inspector-drawer').classList.contains('translate-x-full')) {
      mapService.updateInspector(stl, 'settlement');
    }
  };

  liveService.subscribe(renderLiveUI);
  liveService.start();

  // Cleanup when leaving the screen (avoid dangling polling timers)
  window.__mapLiveCleanup = () => {
    liveService.stop();
  };

  // Layer toggles
  document.getElementById('layer-toggle-debris')?.addEventListener('change', (e) => {
    appState.toggleMapLayer('hazardDebris');
    mapService.toggleLayer('debris', e.target.checked);
  });

  document.getElementById('layer-toggle-slope')?.addEventListener('change', (e) => {
    appState.toggleMapLayer('slope35');
    mapService.toggleLayer('slope', e.target.checked);
  });

  document.getElementById('layer-toggle-buffers')?.addEventListener('change', (e) => {
    appState.toggleMapLayer('safeBuffers');
    mapService.toggleLayer('safeBuffers', e.target.checked);
  });

  // LIVE layer toggles
  document.getElementById('layer-toggle-liverisk')?.addEventListener('change', (e) => {
    appState.toggleMapLayer('liveRisk');
    mapService.toggleLayer('liveRisk', e.target.checked);
  });
  document.getElementById('layer-toggle-rainfall')?.addEventListener('change', (e) => {
    appState.toggleMapLayer('rainfall');
    mapService.toggleLayer('rainfall', e.target.checked);
    const legendRow = document.getElementById('legend-row-rainfall');
    if (legendRow) legendRow.style.display = e.target.checked ? 'flex' : 'none';
  });
  document.getElementById('layer-toggle-alerts')?.addEventListener('change', (e) => {
    appState.toggleMapLayer('alerts');
    mapService.toggleLayer('alerts', e.target.checked);
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

  // MODULE A: "Why?" buttons expand the full household-level driver list inline
  document.querySelectorAll('.why-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // don't trigger the row fly-to
      const list = btn.nextElementSibling;
      if (list) list.classList.toggle('hidden');
    });
  });
}