/**
 * State Management & Event Bus for Wayanad Relocation Portal
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';

class AppState {
  constructor() {
    this.state = {
      currentUser: WAYANAD_DATA.currentUserProfiles[0],
      isAuthenticated: true,
      currentRoute: 'dashboard',
      selectedSettlementId: 'mundakkai',
      selectedSiteId: 'site_alpha',
      simulatedRainfallIntensity: 0,
      simulatedRoadDisruption: false,
      simulatedCapacityReduction: 0,
      mcdaWeights: {
        geological: 35,
        distance: 25,
        cost: 20,
        utility: 20
      },
      siteSignoffs: {
        site_alpha: {
          revenue: true,
          forest: true,
          pwd: true,
          ksdma: true
        },
        site_beta: {
          revenue: true,
          forest: false,
          pwd: true,
          ksdma: true
        },
        site_gamma: {
          revenue: true,
          forest: false,
          pwd: false,
          ksdma: false
        }
      },
      mapLayers: {
        hazardDebris: true,
        slope35: true,
        soilSaturation: true,
        safeBuffers: true,
        evacuationRoutes: true,
        satelliteBasemap: false
      },
      emergencyEvacuationAlertActive: false,
      cabinetApprovalSubmitted: false
    };

    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  setUser(profileId) {
    const user = WAYANAD_DATA.currentUserProfiles.find(p => p.id === profileId);
    if (user) {
      this.state.currentUser = user;
      this.state.isAuthenticated = true;
      this.notify();
    }
  }

  logout() {
    this.state.isAuthenticated = false;
    this.notify();
  }

  login(profileId = 'collector') {
    this.setUser(profileId);
  }

  setRoute(route) {
    this.state.currentRoute = route;
    this.notify();
  }

  selectSettlement(settlementId) {
    this.state.selectedSettlementId = settlementId;
    this.notify();
  }

  selectSite(siteId) {
    this.state.selectedSiteId = siteId;
    this.notify();
  }

  setRainfallIntensity(val) {
    this.state.simulatedRainfallIntensity = parseInt(val, 10);
    this.notify();
  }

  setRoadDisruption(val) {
    this.state.simulatedRoadDisruption = Boolean(val);
    this.notify();
  }

  setCapacityReduction(val) {
    this.state.simulatedCapacityReduction = parseInt(val, 10) || 0;
    this.notify();
  }

  setMCDAWeights(weights) {
    this.state.mcdaWeights = { ...this.state.mcdaWeights, ...weights };
    this.notify();
  }

  toggleSignoff(siteId, deptKey) {
    if (this.state.siteSignoffs[siteId]) {
      this.state.siteSignoffs[siteId][deptKey] = !this.state.siteSignoffs[siteId][deptKey];
      this.notify();
    }
  }

  toggleMapLayer(layerName) {
    if (this.state.mapLayers[layerName] !== undefined) {
      this.state.mapLayers[layerName] = !this.state.mapLayers[layerName];
      this.notify();
    }
  }

  triggerEmergencyEvacuation(active = true) {
    this.state.emergencyEvacuationAlertActive = active;
    this.notify();
  }

  submitCabinetApproval() {
    this.state.cabinetApprovalSubmitted = true;
    this.notify();
  }

  getCalculatedSiteScores() {
    const { geological, distance, cost, utility } = this.state.mcdaWeights;
    const totalWeight = (geological + distance + cost + utility) || 100;
    
    return WAYANAD_DATA.candidateResettlementSites.map(site => {
      const geoNormalized = (site.soilStabilityScore / 10) * (geological / totalWeight);
      const distNormalized = ((50 - Math.min(site.distanceFromDisasterKm, 50)) / 50) * (distance / totalWeight);
      const costNormalized = ((200 - Math.min(site.totalEstimatedCostCr, 200)) / 200) * (cost / totalWeight);
      const utilNormalized = ((site.utilityReadinessScore + site.connectivityScore) / 20) * (utility / totalWeight);

      const finalScore = Number(((geoNormalized + distNormalized + costNormalized + utilNormalized) * 10).toFixed(2));
      return {
        ...site,
        calculatedScore: finalScore
      };
    }).sort((a, b) => b.calculatedScore - a.calculatedScore);
  }
}

export const appState = new AppState();
