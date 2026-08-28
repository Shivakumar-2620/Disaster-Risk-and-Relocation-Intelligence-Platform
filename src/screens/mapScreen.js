/**
 * Interactive GIS Risk Map Screen Component
 */
import { mapService } from '../services/mapService.js';
import { appState } from '../services/state.js';

export function renderMapScreen() {
  const { mapLayers } = appState.getState();

  return `
    <div class="relative w-full h-[calc(100vh-4rem)] flex overflow-hidden">
      <!-- Full Bleed Leaflet Map Canvas -->
      <div id="leaflet-map-canvas" class="w-full h-full bg-slate-200 z-10"></div>

      <!-- Top Map Controls Floating Bar -->
      <div class="absolute top-4 left-4 right-4 md:right-auto z-20 flex flex-wrap items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-2xl border border-outline-variant shadow-lg text-xs">
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
        <div class="flex items-center gap-2 text-slate-500 font-mono text-[10px] pt-1 border-t border-outline-variant">
          <span>Center: 11.538° N, 76.135° E (Meppadi Axis)</span>
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
}
