/**
 * Leaflet Map Service for Wayanad Geo-Spatial Risk & Resettlement Visualizer
 */
import L from 'leaflet';
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from './state.js';

class WayanadMapService {
  constructor() {
    this.map = null;
    this.markersLayer = null;
    this.hazardLayers = {};
    this.satelliteLayer = null;
    this.osmLayer = null;
  }

  initMap(containerId = 'leaflet-map-canvas') {
    const el = document.getElementById(containerId);
    if (!el) return;

    // Destroy existing instance if any
    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    // Default coordinates: Wayanad Landslide Valley (Mundakkai - Chooralmala - Meppadi axis)
    const center = [11.5380, 76.1350];
    this.map = L.map(containerId, {
      center: center,
      zoom: 13,
      zoomControl: false,
      attributionControl: false
    });

    // Custom top-right zoom control
    L.control.zoom({ position: 'topright' }).addTo(this.map);

    // Basemaps
    this.osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(this.map);

    this.satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19
    });

    // Layers groups
    this.markersLayer = L.layerGroup().addTo(this.map);
    this.hazardLayers.debris = L.layerGroup().addTo(this.map);
    this.hazardLayers.slope = L.layerGroup().addTo(this.map);
    this.hazardLayers.safeBuffers = L.layerGroup().addTo(this.map);

    this.renderHazardZones();
    this.renderMarkers();

    // Map resize trigger
    setTimeout(() => {
      if (this.map) this.map.invalidateSize();
    }, 200);

    return this.map;
  }

  renderHazardZones() {
    if (!this.map) return;

    // 1. Debris Flow Corridor Path (Punchirimattam -> Mundakkai -> Chooralmala -> Vellarmala river bend)
    const debrisPath = [
      [11.5120, 76.1590], // Upper Punchirimattam ridge
      [11.5284, 76.1512], // Mundakkai
      [11.5420, 76.1415], // Chooralmala Bridge
      [11.5490, 76.1350], // Chaliyar River bend
      [11.5540, 76.1260]  // Meppadi valley approach
    ];

    const debrisLine = L.polyline(debrisPath, {
      color: '#dc2626',
      weight: 6,
      opacity: 0.85,
      dashArray: '8, 8',
      lineCap: 'round'
    });
    debrisLine.bindTooltip('<b>Catastrophic Debris Flow Axis</b><br>Velocity: 42 km/h during event', { sticky: true });
    this.hazardLayers.debris.addLayer(debrisLine);

    // 2. High Slope Instability Zone (>35° polygon)
    const slopePolygonCoords = [
      [11.5000, 76.1300],
      [11.5200, 76.1680],
      [11.5360, 76.1650],
      [11.5480, 76.1480],
      [11.5300, 76.1280]
    ];
    const slopePolygon = L.polygon(slopePolygonCoords, {
      color: '#b91c1c',
      fillColor: '#ef4444',
      fillOpacity: 0.22,
      weight: 2
    });
    slopePolygon.bindTooltip('<b>Red Zone: High Slope Failure Zone (>35°)</b><br>Rainfall Threshold: 140mm/24h', { sticky: true });
    this.hazardLayers.slope.addLayer(slopePolygon);

    // 3. Safe Buffer Circles around Resettlement Sites
    WAYANAD_DATA.candidateResettlementSites.forEach(site => {
      const isAlpha = site.id === 'site_alpha';
      const circle = L.circle(site.coordinates, {
        radius: isAlpha ? 1800 : 1400,
        color: isAlpha ? '#10b981' : '#0284c7',
        fillColor: isAlpha ? '#34d399' : '#38bdf8',
        fillOpacity: 0.18,
        weight: 2,
        dashArray: '4, 4'
      });
      circle.bindTooltip(`<b>${site.name}</b><br>Safe Buffer: ${site.terrainSlope}`, { sticky: true });
      this.hazardLayers.safeBuffers.addLayer(circle);
    });
  }

  renderMarkers() {
    if (!this.map || !this.markersLayer) return;
    this.markersLayer.clearLayers();

    // Render Affected Settlements
    WAYANAD_DATA.settlements.forEach(s => {
      const isCritical = s.riskLevel === 'CRITICAL';
      const color = isCritical ? '#dc2626' : '#d97706';
      const iconHtml = `
        <div class="relative cursor-pointer group">
          <div class="absolute -inset-1 rounded-full ${isCritical ? 'bg-red-500 animate-ping opacity-40' : 'bg-amber-500 opacity-20'}"></div>
          <div class="relative w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center font-bold text-white text-xs ${isCritical ? 'bg-red-600' : 'bg-amber-600'}">
            <span class="material-symbols-outlined text-base">warning</span>
          </div>
          <div class="absolute left-10 top-0 bg-slate-900/90 text-white text-xs font-semibold px-2.5 py-1 rounded shadow whitespace-nowrap hidden group-hover:block z-50">
            ${s.name} (${s.riskScore}/10)
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-settlement-marker',
        html: iconHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(s.coordinates, { icon: customIcon });
      marker.on('click', () => {
        appState.selectSettlement(s.id);
        this.updateInspector(s, 'settlement');
      });
      this.markersLayer.addLayer(marker);
    });

    // Render Candidate Resettlement Sites
    WAYANAD_DATA.candidateResettlementSites.forEach(site => {
      const isAlpha = site.id === 'site_alpha';
      const colorBg = isAlpha ? 'bg-emerald-600' : site.id === 'site_beta' ? 'bg-blue-600' : 'bg-slate-500';
      const iconHtml = `
        <div class="relative cursor-pointer group">
          <div class="relative w-9 h-9 rounded-full border-2 border-white shadow-xl flex items-center justify-center font-bold text-white text-xs ${colorBg}">
            <span class="material-symbols-outlined text-base">${isAlpha ? 'verified' : 'domain'}</span>
          </div>
          <div class="absolute left-10 top-0 bg-slate-900/95 text-white text-xs font-semibold px-2.5 py-1 rounded shadow whitespace-nowrap hidden group-hover:block z-50">
            ${site.name} • ${site.availableAreaAcres} Acres
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-site-marker',
        html: iconHtml,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      const marker = L.marker(site.coordinates, { icon: customIcon });
      marker.on('click', () => {
        appState.selectSite(site.id);
        this.updateInspector(site, 'site');
      });
      this.markersLayer.addLayer(marker);
    });
  }

  updateInspector(data, type) {
    const inspectorEl = document.getElementById('map-inspector-drawer');
    if (!inspectorEl) return;

    if (type === 'settlement') {
      inspectorEl.innerHTML = `
        <div class="p-5 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <span class="inline-flex items-center gap-1 bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                <span class="material-symbols-outlined text-xs">crisis_alert</span> ${data.riskLevel} (${data.riskScore}/10)
              </span>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white mt-1">${data.name}</h3>
              <p class="text-xs text-slate-500">${data.panchayat} Panchayat • ${data.zoneCode}</p>
            </div>
            <button onclick="document.getElementById('map-inspector-drawer').classList.add('translate-x-full')" class="text-slate-400 hover:text-slate-600">
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Elevation</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${data.elevation}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Slope Incline</span>
              <span class="font-semibold text-rose-600 dark:text-rose-400">${data.slopeAngle}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">24h Rain Gauge</span>
              <span class="font-semibold text-blue-600 dark:text-blue-400">${data.rainfall24h}</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Displaced</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${data.displacedFamilies} Families</span>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between text-xs">
              <span class="text-slate-600 dark:text-slate-300">Debris Flow Vulnerability</span>
              <span class="font-bold text-red-600">${data.debrisFlowVulnerability}%</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div class="bg-red-600 h-full rounded-full" style="width: ${data.debrisFlowVulnerability}%"></div>
            </div>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-300 bg-red-50 dark:bg-red-950/40 p-3 rounded-lg border border-red-200 dark:border-red-900 leading-relaxed">
            ${data.hazardSummary}
          </p>

          <div class="flex flex-col gap-2 pt-2">
            <a href="#risk-profile" class="w-full text-center bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg shadow transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">assignment</span> Open Full Risk Profile
            </a>
            <a href="#relocation-tool" class="w-full text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">hub</span> Run Relocation Planner
            </a>
          </div>
        </div>
      `;
    } else {
      inspectorEl.innerHTML = `
        <div class="p-5 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
            <div>
              <span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                <span class="material-symbols-outlined text-xs">verified</span> ${data.code} • ${data.status}
              </span>
              <h3 class="font-bold text-lg text-slate-900 dark:text-white mt-1">${data.name}</h3>
              <p class="text-xs text-slate-500">${data.panchayat} • ${data.taluk} Taluk</p>
            </div>
            <button onclick="document.getElementById('map-inspector-drawer').classList.add('translate-x-full')" class="text-slate-400 hover:text-slate-600">
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Area Available</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">${data.availableAreaAcres} Acres</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Capacity</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">${data.capacityHouseholds} Units</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Soil Stability</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">${data.soilStabilityScore}/10</span>
            </div>
            <div class="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-500 block text-[11px]">Est. Budget</span>
              <span class="font-semibold text-slate-800 dark:text-slate-200">₹${data.totalEstimatedCostCr} Cr</span>
            </div>
          </div>

          <div class="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-xs space-y-1">
            <span class="font-semibold text-slate-800 dark:text-slate-200">GSI Engineering Summary:</span>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">${data.gsiBoreholeSummary}</p>
          </div>

          <div class="flex flex-col gap-2 pt-2">
            <a href="#site-revalidation" class="w-full text-center bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs py-2.5 px-4 rounded-lg shadow transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">fact_check</span> Site Revalidation Clearance
            </a>
            <a href="#recommendation" class="w-full text-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">thunderstorm</span> Run Climate Stress Simulator
            </a>
          </div>
        </div>
      `;
    }

    inspectorEl.classList.remove('translate-x-full');
  }

  toggleLayer(layerKey, enabled) {
    if (!this.map) return;
    if (layerKey === 'satelliteBasemap') {
      if (enabled) {
        this.map.removeLayer(this.osmLayer);
        this.map.addLayer(this.satelliteLayer);
      } else {
        this.map.removeLayer(this.satelliteLayer);
        this.map.addLayer(this.osmLayer);
      }
    } else if (this.hazardLayers[layerKey]) {
      if (enabled) {
        this.map.addLayer(this.hazardLayers[layerKey]);
      } else {
        this.map.removeLayer(this.hazardLayers[layerKey]);
      }
    }
  }

  focusCoordinates(coords, zoom = 14) {
    if (this.map) {
      this.map.flyTo(coords, zoom, { duration: 1.2 });
    }
  }
}

export const mapService = new WayanadMapService();
