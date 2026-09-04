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
    this.liveRiskLayer = null;
    this.rainfallLayer = null;
    this.alertsLayer = null;
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
      maxZoom: 19,
      // Esri blanks tiles with a "Map data not yet available" placeholder when it
      // detects the requesting site's referer. Sending no referer keeps imagery serving.
      referrerPolicy: 'no-referrer',
      attribution: '&copy; Esri, Maxar, Earthstar Geographics, &copy; OpenStreetMap contributors'
    });

    // Layers groups
    this.markersLayer = L.layerGroup().addTo(this.map);
    this.hazardLayers.debris = L.layerGroup().addTo(this.map);
    this.hazardLayers.slope = L.layerGroup().addTo(this.map);
    this.hazardLayers.safeBuffers = L.layerGroup().addTo(this.map);
    this.hazardLayers.relocationInventory = L.layerGroup();

    // LIVE layers (near-real-time situational map)
    this.liveRiskLayer = L.layerGroup();
    this.rainfallLayer = L.layerGroup();
    this.alertsLayer = L.layerGroup();

    // Live layers default ON (per appState) and restored across navigation
    const liveLayers = appState.getState().mapLayers;
    if (liveLayers.liveRisk) this.map.addLayer(this.liveRiskLayer);
    if (liveLayers.rainfall) this.map.addLayer(this.rainfallLayer);
    if (liveLayers.alerts) this.map.addLayer(this.alertsLayer);

    this.renderHazardZones();
    this.renderMarkers();
    this.renderRelocationInventory();
    this.renderLiveRisk(appState.getState().liveRisk);
    this.renderRainfall(appState.getState().liveWeather);
    this.renderAlerts(appState.getState().liveAlerts);

    // Restore Module A inventory layer if it was previously enabled
    if (appState.getState().mapLayers.relocationInventory) {
      this.map.addLayer(this.hazardLayers.relocationInventory);
    }

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

  renderRelocationInventory() {
    if (!this.map || !this.hazardLayers.relocationInventory) return;
    this.hazardLayers.relocationInventory.clearLayers();

    // MODULE A: impact footprints — households/population joined to hazard severity x vulnerability x population
    WAYANAD_DATA.settlements.forEach(s => {
      const isCritical = s.riskLevel === 'CRITICAL';
      const circle = L.circle(s.coordinates, {
        radius: 480 + s.displacedFamilies * 0.45,
        color: isCritical ? '#e11d48' : '#f59e0b',
        fillColor: isCritical ? '#e11d48' : '#f59e0b',
        fillOpacity: isCritical ? 0.13 : 0.09,
        weight: 1.5,
        dashArray: '4, 5'
      });
      circle.bindTooltip(
        `<b>${s.name}</b><br>${s.displacedFamilies.toLocaleString()} households · ${s.totalPopulation.toLocaleString()} people<br>${s.riskLevel} (${s.riskScore}/10) · relocation ${isCritical ? 'mandated' : 'advisory'}`,
        { sticky: true }
      );
      this.hazardLayers.relocationInventory.addLayer(circle);
    });
  }

  /**
   * Dynamic live risk overlay — recomputed risk GeoJSON fed by live rainfall.
   * Replaces the existing layer each refresh WITHOUT reloading the page.
   */
  renderLiveRisk(fc) {
    if (!this.map || !this.liveRiskLayer) return;
    this.liveRiskLayer.clearLayers();
    if (!fc || !fc.features || !fc.features.length) return;

    fc.features.forEach((f) => {
      const p = f.properties || {};
      const [lng, lat] = f.geometry ? f.geometry.coordinates : [0, 0];
      const color = p.risk_level === 'CRITICAL' ? '#dc2626' : p.risk_level === 'HIGH' ? '#f59e0b' : '#10b981';
      const isRising = p.trend === 'increasing';
      const circle = L.circle([lat, lng], {
        radius: 520 + (p.households || 0) * 0.4,
        color: color,
        fillColor: color,
        fillOpacity: 0.12,
        weight: 2,
        dashArray: isRising ? '3, 3' : null
      });
      circle.bindTooltip(
        `<b>${p.name}</b><br>Live Risk: ${p.risk_score} ${p.risk_level} ${isRising ? '&#8593; INCREASING' : ''}<br>Prev: ${p.previous_risk_score} · Rain ${p.rainfall_24h_mm ?? '—'} mm/24h`,
        { sticky: true }
      );
      circle.on('click', () => this.openSettlement(p.id));
      this.liveRiskLayer.addLayer(circle);
    });
  }

  /**
   * Live rainfall layer — per-settlement rainfall intensity colour scale.
   */
  renderRainfall(weather) {
    if (!this.map || !this.rainfallLayer) return;
    this.rainfallLayer.clearLayers();
    if (!weather || weather.rainfall_24h_mm == null) return;

    const rain = weather.rainfall_24h_mm;
    const color = rain >= 140 ? '#7f1d1d' : rain >= 90 ? '#dc2626' : rain >= 50 ? '#f59e0b' : '#3b82f6';
    WAYANAD_DATA.settlements.forEach((s) => {
      const c = L.circle(s.coordinates, {
        radius: 320,
        color: color,
        fillColor: color,
        fillOpacity: 0.18,
        weight: 1.5
      });
      c.bindTooltip(
        `<b>${s.name}</b><br>Rain: ${rain.toFixed(1)} mm/24h<br>${weather.forecast || ''}`,
        { sticky: true }
      );
      this.rainfallLayer.addLayer(c);
    });

    // District-wide rainfall label anchored near Meppadi
    const label = L.marker([11.5540, 76.1260], {
      icon: L.divIcon({
        className: 'rainfall-label',
        html: `<div class="bg-white/90 backdrop-blur rounded px-2 py-1 text-[11px] font-bold shadow" style="border-left:4px solid ${color}">Rain ${rain.toFixed(1)} mm/24h (${weather.source})</div>`,
        iconSize: [0, 0]
      })
    });
    this.rainfallLayer.addLayer(label);
  }

  /**
   * Live alerts layer — geographic highlight of active warning areas.
   */
  renderAlerts(alerts) {
    if (!this.map || !this.alertsLayer) return;
    this.alertsLayer.clearLayers();
    if (!alerts || !alerts.alerts || !alerts.alerts.length) return;

    alerts.alerts.forEach((a) => {
      // Highlight the affected district footprint (Wayanad bounding region)
      const zone = L.circle([11.5380, 76.1350], {
        radius: 11000,
        color: a.severity === 'HIGH' ? '#dc2626' : '#f59e0b',
        fillColor: a.severity === 'HIGH' ? '#dc2626' : '#f59e0b',
        fillOpacity: 0.06,
        weight: 2,
        dashArray: '6, 6'
      });
      zone.bindTooltip(
        `<b>${a.type}</b><br>Area: ${a.area} · Severity: ${a.severity}<br>${a.message}`,
        { sticky: true }
      );
      this.alertsLayer.addLayer(zone);

      const icon = L.divIcon({
        className: 'alert-icon',
        html: `<div class="relative"><span class="material-symbols-outlined text-3xl ${a.severity === 'HIGH' ? 'text-red-600' : 'text-amber-500'}">crisis_alert</span><span class="absolute -top-1 -right-1 w-3 h-3 rounded-full ${a.severity === 'HIGH' ? 'bg-red-600' : 'bg-amber-500'} animate-ping"></span></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      const marker = L.marker([11.5450, 76.1350], { icon });
      marker.bindTooltip(`<b>${a.type}</b> · ${a.severity}<br>${a.message}`, { sticky: true });
      this.alertsLayer.addLayer(marker);
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

    // LIVE observation block (weather + trend) shared by both inspector types
    const live = appState.getState();
    const w = live.liveWeather;
    const fc = live.liveRisk;
    let liveFeature = null;
    if (fc && fc.features) liveFeature = fc.features.find((f) => (f.properties || {}).id === data.id) || null;
    const liveProps = liveFeature ? liveFeature.properties : null;
    const rain = w && w.rainfall_24h_mm != null ? `${w.rainfall_24h_mm.toFixed ? w.rainfall_24h_mm.toFixed(1) : w.rainfall_24h_mm} mm/24h` : '—';
    const liveClock = w && w.timestamp ? new Date(w.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '—';
    const trend = liveProps ? liveProps.trend : null;
    const trendHtml = trend === 'increasing'
      ? `<span class="inline-flex items-center gap-1 text-red-600 font-bold">&#8593; RISK INCREASING</span>`
      : `<span class="inline-flex items-center gap-1 text-emerald-600 font-semibold">Stable</span>`;
    const liveMode = live.liveWeather ? (live.liveWeather.source === 'IMD' ? 'LIVE' : 'DEMO') : '—';

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

          <!-- LIVE situational block -->
          <div class="rounded-xl border border-cyan-200 dark:border-cyan-900 bg-cyan-50/70 dark:bg-cyan-950/30 p-3 flex flex-col gap-1.5 text-xs">
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                <span class="material-symbols-outlined text-sm">sensors</span> Live Conditions
              </span>
              <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${liveMode === 'LIVE' ? 'bg-emerald-600 text-white' : 'bg-slate-500 text-white'}">${liveMode === 'LIVE' ? '● LIVE' : '● DEMO'}</span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <div class="bg-white/80 dark:bg-slate-800/60 rounded-lg p-2 border border-cyan-100 dark:border-cyan-900/40">
                <span class="block text-[9px] uppercase tracking-wide text-slate-500">Current Rainfall</span>
                <span class="block font-bold text-sm text-blue-700 dark:text-blue-300 font-data-tabular">${rain}</span>
              </div>
              <div class="bg-white/80 dark:bg-slate-800/60 rounded-lg p-2 border border-cyan-100 dark:border-cyan-900/40">
                <span class="block text-[9px] uppercase tracking-wide text-slate-500">Risk Trend</span>
                <span class="block font-bold text-sm mt-0.5">${trendHtml}</span>
              </div>
            </div>
            <div class="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
              <span>Source: ${w ? w.source : '—'} · Last updated: ${liveClock}</span>
              ${liveProps && liveProps.previous_risk_score != null ? `<span>Prev ${liveProps.previous_risk_score} &#8594; Now ${liveProps.risk_score}</span>` : ''}
            </div>
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

          <!-- MODULE A: Impact & Relocation Inventory (spatial-join result) -->
          <div class="rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/30 p-3 flex flex-col gap-2">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">groups</span> Module A · Impact & Relocation Inventory
              </span>
              <span class="font-bold px-1.5 py-0.5 rounded text-[10px] text-white ${data.riskLevel === 'CRITICAL' ? 'bg-rose-600' : 'bg-amber-500'}">${data.riskScore}/10</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5 text-center">
              <div class="bg-white/80 dark:bg-slate-800/60 rounded-lg py-1.5 px-1 border border-rose-100 dark:border-rose-900/40">
                <span class="block text-[9px] uppercase tracking-wide text-slate-500">Households</span>
                <span class="block font-bold text-sm text-rose-600 font-data-tabular">${data.displacedFamilies.toLocaleString()}</span>
              </div>
              <div class="bg-white/80 dark:bg-slate-800/60 rounded-lg py-1.5 px-1 border border-rose-100 dark:border-rose-900/40">
                <span class="block text-[9px] uppercase tracking-wide text-slate-500">Population</span>
                <span class="block font-bold text-sm text-slate-800 dark:text-slate-200 font-data-tabular">${data.totalPopulation.toLocaleString()}</span>
              </div>
              <div class="bg-white/80 dark:bg-slate-800/60 rounded-lg py-1.5 px-1 border border-rose-100 dark:border-rose-900/40">
                <span class="block text-[9px] uppercase tracking-wide text-slate-500">Priority Cohort</span>
                <span class="block font-bold text-sm text-slate-800 dark:text-slate-200 font-data-tabular">${(data.demographics.elderlyAndDisabled + data.demographics.childrenUnder10).toLocaleString()}</span>
              </div>
            </div>
            <div class="bg-white/80 dark:bg-slate-800/60 rounded-lg p-2.5 border border-rose-100 dark:border-rose-900/40">
              <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
                <span class="material-symbols-outlined text-xs text-rose-500">psychology_alt</span> Household-Level "Why?" — Top Drivers
              </div>
              <ul class="space-y-1">
                ${data.topDrivers.map(driver => `
                  <li class="flex items-start gap-1.5 text-[11px] leading-snug text-slate-700 dark:text-slate-300">
                    <span class="material-symbols-outlined text-xs mt-px text-rose-500 shrink-0">chevron_right</span>${driver}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="flex items-start gap-1.5 text-[11px] font-semibold text-rose-800 dark:text-rose-200 bg-rose-100 dark:bg-rose-900/50 rounded-lg px-2.5 py-1.5">
              <span class="material-symbols-outlined text-sm shrink-0">crisis_alert</span> ${data.recommendedAction}
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

  openSettlement(settlementId) {
    const settlement = WAYANAD_DATA.settlements.find(s => s.id === settlementId);
    if (!settlement || !this.map) return;
    appState.selectSettlement(settlement.id);
    this.map.flyTo(settlement.coordinates, 14, { duration: 0.9 });
    this.updateInspector(settlement, 'settlement');
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
    } else if (layerKey === 'liveRisk' && this.liveRiskLayer) {
      if (enabled) this.map.addLayer(this.liveRiskLayer);
      else this.map.removeLayer(this.liveRiskLayer);
    } else if (layerKey === 'rainfall' && this.rainfallLayer) {
      if (enabled) this.map.addLayer(this.rainfallLayer);
      else this.map.removeLayer(this.rainfallLayer);
    } else if (layerKey === 'alerts' && this.alertsLayer) {
      if (enabled) this.map.addLayer(this.alertsLayer);
      else this.map.removeLayer(this.alertsLayer);
    }
  }

  focusCoordinates(coords, zoom = 14) {
    if (this.map) {
      this.map.flyTo(coords, zoom, { duration: 1.2 });
    }
  }
}

export const mapService = new WayanadMapService();
