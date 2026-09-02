/**
 * Hash-based Client-Side Router
 */
import { appState } from './services/state.js';
import { renderHeader } from './components/Header.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderLandingScreen, setupLandingEvents } from './screens/landingScreen.js';
import { renderLoginScreen, setupLoginEvents } from './screens/loginScreen.js';
import { renderDashboardScreen, setupDashboardEvents } from './screens/dashboardScreen.js';
import { renderMapScreen, setupMapEvents } from './screens/mapScreen.js';
import { renderRiskProfileScreen, setupRiskProfileEvents } from './screens/riskProfileScreen.js';
import { renderModelValidationScreen, setupModelValidationEvents } from './screens/modelValidationScreen.js';
import { renderRelocationToolScreen, setupRelocationToolEvents } from './screens/relocationToolScreen.js';
import { renderSiteRevalidationScreen, setupSiteRevalidationEvents } from './screens/siteRevalidationScreen.js';
import { renderRecommendationScreen, setupRecommendationEvents } from './screens/recommendationScreen.js';
import { renderFinalReportScreen, setupFinalReportEvents } from './screens/finalReportScreen.js';
import { openEmergencyModal } from './components/Modal.js';

export class Router {
  constructor() {
    this.routes = {
      'landing': { render: renderLandingScreen, setup: setupLandingEvents, fullScreen: true },
      'login': { render: renderLoginScreen, setup: setupLoginEvents, fullScreen: true },
      'dashboard': { render: renderDashboardScreen, setup: setupDashboardEvents },
      'map': { render: renderMapScreen, setup: setupMapEvents, noPadding: true },
      'risk-profile': { render: renderRiskProfileScreen, setup: setupRiskProfileEvents },
      'model-validation': { render: renderModelValidationScreen, setup: setupModelValidationEvents },
      'relocation-tool': { render: renderRelocationToolScreen, setup: setupRelocationToolEvents },
      'site-revalidation': { render: renderSiteRevalidationScreen, setup: setupSiteRevalidationEvents },
      'recommendation': { render: renderRecommendationScreen, setup: setupRecommendationEvents },
      'final-report': { render: renderFinalReportScreen, setup: setupFinalReportEvents }
    };

    window.addEventListener('hashchange', () => this.handleRoute());
  }

  getRouteFromHash() {
    const hash = window.location.hash.replace(/^#\/?/, '') || 'landing';
    const routeName = hash.split('?')[0] || 'landing';
    return this.routes[routeName] ? routeName : 'landing';
  }

  handleRoute() {
    const routeName = this.getRouteFromHash();
    const routeConfig = this.routes[routeName];
    appState.setRoute(routeName);

    const fullContainer = document.getElementById('full-screen-container');
    const appShell = document.getElementById('app-shell');
    const mainContent = document.getElementById('main-content-container');
    const sidebarMount = document.getElementById('sidebar-mount');
    const headerMount = document.getElementById('header-mount');

    if (routeConfig.fullScreen) {
      if (appShell) appShell.classList.add('hidden');
      if (fullContainer) {
        fullContainer.classList.remove('hidden');
        fullContainer.innerHTML = routeConfig.render();
        if (routeConfig.setup) routeConfig.setup();
      }
    } else {
      if (fullContainer) fullContainer.classList.add('hidden');
      if (appShell) {
        appShell.classList.remove('hidden');
        appShell.classList.add('flex');
      }

      // Render navigation chrome
      if (sidebarMount) sidebarMount.innerHTML = renderSidebar();
      if (headerMount) headerMount.innerHTML = renderHeader();

      // Render Screen Content
      if (mainContent) {
        mainContent.innerHTML = routeConfig.render();
        if (routeConfig.setup) routeConfig.setup();
      }

      this.setupGlobalEvents();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setupGlobalEvents() {
    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('mobile-sidebar-toggle');
    const sidebar = document.getElementById('app-sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.onclick = () => {
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('flex');
      };
    }

    // Emergency broadcast triggers
    document.getElementById('btn-emergency-broadcast')?.addEventListener('click', openEmergencyModal);
    document.getElementById('sidebar-alert-btn')?.addEventListener('click', openEmergencyModal);

    // Profile dropdown
    const profileBtn = document.getElementById('profile-dropdown-btn');
    const profileMenu = document.getElementById('profile-menu');
    if (profileBtn && profileMenu) {
      profileBtn.onclick = (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle('hidden');
      };
      document.addEventListener('click', () => profileMenu.classList.add('hidden'));
    }

    // Switch profile buttons
    document.querySelectorAll('.switch-profile-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const profileId = btn.dataset.profileId;
        appState.setUser(profileId);
        this.handleRoute();
      };
    });

    // Logout
    document.getElementById('header-logout-btn')?.addEventListener('click', () => {
      appState.logout();
      window.location.hash = '#landing';
      this.handleRoute();
    });
  }
}
