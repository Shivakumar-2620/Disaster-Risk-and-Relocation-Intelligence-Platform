/**
 * Main Application Bootstrap
 */
import { Router } from './router.js';
import { appState } from './services/state.js';
import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();
  router.handleRoute();

  // Subscribe to state updates if needed
  appState.subscribe((state) => {
    // Synchronize header or sidebar if route changed
  });
});
