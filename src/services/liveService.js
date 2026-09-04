/**
 * Live / near-real-time situational data service (frontend).
 *
 * Polls the FastAPI backend `/api/live/*` endpoints. Because the Vercel deployment is
 * a pure static build (no serverless backend), the service transparently falls back to
 * a built-in DemoProvider when the backend is unreachable, and ALWAYS labels the data
 * truthfully (LIVE / DEMO / STALE) so the UI never overclaims.
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');

// ── Configuration (adjustable via Vite env) ────────────────────────────────
const CONFIG = {
  refreshIntervalSeconds: Number(import.meta.env.VITE_LIVE_REFRESH_SECONDS || 60),
  staleAfterMinutes: Number(import.meta.env.VITE_LIVE_STALE_MINUTES || 15),
  backendTimeoutMs: 8000,
};

function isoNow() {
  return new Date().toISOString();
}

function fmtClock(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

/**
 * Client-side demo provider — mirrors the backend DemoProvider so the live map is
 * fully demonstrable without a backend. Clearly labelled SIMULATED.
 */
class DemoProvider {
  source = 'DEMO';

  getWeather() {
    const minute = new Date().getMinutes();
    const rain = Math.round((84 + (minute % 7) * 1.5) * 10) / 10;
    return {
      source: 'DEMO',
      timestamp: isoNow(),
      status: 'DEMO',
      data_age_minutes: 0,
      region: 'Wayanad, Kerala',
      station_id: 'DEMO-MEPPADI-AWS',
      rainfall_24h_mm: rain,
      rainfall_now_mm: Math.round((6 + (minute % 5) * 1.2) * 10) / 10,
      temperature_c: Math.round((23.5 + (minute % 4) * 0.3) * 10) / 10,
      humidity_pct: 88 + (minute % 6),
      wind_kph: Math.round((9 + (minute % 5)) * 10) / 10,
      forecast: 'Moderate to heavy rainfall likely over next 24 hours.',
    };
  }

  getAlerts(weather) {
    const rain = weather && weather.rainfall_24h_mm;
    const alerts = [];
    let severity = 'LOW';
    if (rain != null && rain >= 140) {
      severity = 'HIGH';
      alerts.push({
        id: 'imd-heavy-rain',
        type: 'HEAVY RAIN WARNING',
        severity: 'HIGH',
        area: 'Wayanad',
        issued: weather.timestamp,
        message: '24h rainfall crossing 140mm threshold — high-risk slope zones.',
        source: 'DEMO',
      });
    } else if (rain != null && rain >= 90) {
      severity = 'MODERATE';
      alerts.push({
        id: 'imd-rain-advisory',
        type: 'RAIN ADVISORY',
        severity: 'MODERATE',
        area: 'Wayanad',
        issued: weather.timestamp,
        message: 'Elevated rainfall observed — monitor landslide-prone settlements.',
        source: 'DEMO',
      });
    }
    return { alerts, count: alerts.length, severity, status: 'DEMO', source: 'DEMO', timestamp: isoNow() };
  }

  getRiskMap(weather) {
    const rain = weather && weather.rainfall_24h_mm;
    let rainFactor = 0;
    if (rain != null) {
      if (rain >= 140) rainFactor = 0.35;
      else if (rain >= 90) rainFactor = 0.2;
      else if (rain >= 50) rainFactor = 0.1;
    }
    const parseRain = (s) => {
      const m = /([\d.]+)/.exec(s.rainfall24h || '');
      return m ? parseFloat(m[1]) : 55;
    };
    const features = WAYANAD_DATA.settlements.map((s) => {
      const rainfallRisk = Math.min(100, parseRain(s) + rainFactor * 100);
      const delta = Math.round(rainFactor * 12); // modest live uplift for demo
      const score = Math.min(100, s.riskScore * 10 + delta);
      const level = score >= 80 ? 'CRITICAL' : score >= 60 ? 'HIGH' : 'MODERATE';
      return {
        type: 'Feature',
        properties: {
          id: s.id,
          name: s.name,
          risk_score: Math.round(score),
          risk_level: level,
          households: s.displacedFamilies,
          priority_households: s.demographics.elderlyAndDisabled + s.demographics.childrenUnder10,
          previous_risk_score: Math.round(s.riskScore * 10),
          previous_risk_level: s.riskLevel,
          rainfall_24h_mm: rain,
          trend: score > s.riskScore * 10 + 1 ? 'increasing' : 'stable',
        },
        geometry: { type: 'Point', coordinates: [s.coordinates[1], s.coordinates[0]] },
      };
    });
    return {
      updated_at: isoNow(),
      source: 'DEMO',
      status: 'DEMO',
      data_age_minutes: 0,
      rainfall_24h_mm: rain,
      rain_impact_factor: rainFactor,
      type: 'FeatureCollection',
      features,
    };
  }
}

class LiveService {
  constructor() {
    this.demo = new DemoProvider();
    this.timer = null;
    this.running = false;
    this.lastGoodWeather = null;
    this.listeners = new Set();
    this.data = this._initial();
  }

  _initial() {
    return {
      mode: 'DEMO',
      status: 'DEMO',
      weather: null,
      alerts: { alerts: [], count: 0, severity: 'LOW' },
      riskMap: null,
      statusSnapshot: null,
      lastUpdate: null,
      nextUpdate: null,
      stale: false,
      backendReachable: false,
      error: null,
    };
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  _emit() {
    this.listeners.forEach((fn) => fn(this.data));
  }

  async _fetchJson(path) {
    const url = `${API_BASE}${path}`;
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), CONFIG.backendTimeoutMs);
    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally {
      clearTimeout(to);
    }
  }

  async _refresh() {
    const now = Date.now();
    let weather = null;
    let riskMap = null;
    let alerts = null;
    let statusSnapshot = null;
    let backendReachable = false;

    try {
      const results = await Promise.allSettled([
        this._fetchJson('/api/live/weather'),
        this._fetchJson('/api/live/alerts'),
        this._fetchJson('/api/live/risk-map'),
        this._fetchJson('/api/live/status'),
      ]);
      if (results[0].status === 'fulfilled' && results[0].value) {
        weather = results[0].value;
        this.lastGoodWeather = weather;
        backendReachable = true;
        alerts = results[1].status === 'fulfilled' ? results[1].value : null;
        riskMap = results[2].status === 'fulfilled' ? results[2].value : null;
        statusSnapshot = results[3].status === 'fulfilled' ? results[3].value : null;
      } else {
        throw new Error('Backend unreachable');
      }
    } catch (e) {
      backendReachable = false;
      // Fallback: use last-good or fresh demo data, always labelled.
      weather = this.lastGoodWeather || this.demo.getWeather();
      const demo = this.demo;
      alerts = demo.getAlerts(weather);
      riskMap = demo.getRiskMap(weather);
      statusSnapshot = {
        status: 'DEMO',
        sources: {
          weather: { provider: 'DEMO', status: 'DEMO', last_update: weather.timestamp },
          base_map: { provider: 'OpenStreetMap', status: 'LIVE' },
          risk: { provider: 'Platform Risk Engine', status: 'LIVE' },
        },
        server_time: isoNow(),
      };
    }

    const isBackendLive = backendReachable && weather && weather.status === 'LIVE';
    const ageMin = weather && weather.data_age_minutes != null ? weather.data_age_minutes : 0;
    this.data = {
      ...this._initial(),
      mode: isBackendLive ? 'LIVE' : 'DEMO',
      status: isBackendLive ? 'LIVE' : 'DEMO',
      weather,
      alerts: alerts || this.demo.getAlerts(weather),
      riskMap,
      statusSnapshot,
      lastUpdate: weather ? weather.timestamp : isoNow(),
      nextUpdate: new Date(now + CONFIG.refreshIntervalSeconds * 1000).toISOString(),
      stale: ageMin > CONFIG.staleAfterMinutes,
      backendReachable,
      error: backendReachable ? null : 'Backend unreachable — showing simulated data.',
    };
    this._emit();
  }

  start() {
    if (this.running) return;
    this.running = true;
    this._refresh();
    this.timer = setInterval(() => this._refresh(), CONFIG.refreshIntervalSeconds * 1000);
  }

  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.running = false;
  }

  getConfig() {
    return { ...CONFIG };
  }

  formatClock(iso) {
    return fmtClock(iso);
  }
}

export const liveService = new LiveService();
export { fmtClock };