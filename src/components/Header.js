/**
 * Institutional Top Header Component
 */
import { appState } from '../services/state.js';
import { WAYANAD_DATA } from '../data/wayanadData.js';

export function renderHeader() {
  const state = appState.getState();
  const user = state.currentUser;

  return `
    <header class="bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center w-full px-4 md:px-margin-desktop h-16 z-30 sticky top-0">
      <!-- Left: Mobile Menu & Breadcrumb -->
      <div class="flex items-center gap-3">
        <button id="mobile-sidebar-toggle" class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <span class="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div class="flex items-center gap-2">
          <a href="#landing" class="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface border border-outline-variant transition">
            <span class="material-symbols-outlined text-sm text-primary">public</span>
            <span>Public Portal</span>
          </a>
          <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> KSDMA Live Telemetry
          </span>
          <span class="text-xs text-on-surface-variant font-data-tabular hidden sm:inline">
            Monsoon Rainfall: <strong class="text-primary font-semibold">168.4 mm/24h</strong> (Level 2 Alert)
          </span>
        </div>
      </div>

      <!-- Right: Officer Profile Switcher & Actions -->
      <div class="flex items-center gap-3">
        <!-- Emergency Alert Trigger Button -->
        <button id="btn-emergency-broadcast" class="hidden sm:flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition">
          <span class="material-symbols-outlined text-base">emergency_share</span>
          <span>Broadcast Warning</span>
        </button>

        <!-- Officer Profile Dropdown -->
        <div class="relative" id="profile-dropdown-container">
          <button id="profile-dropdown-btn" class="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant px-3 py-1.5 rounded-lg text-xs transition">
            <img src="${user.avatar}" alt="Avatar" class="w-6 h-6 rounded-full object-cover">
            <div class="text-left hidden md:block">
              <div class="font-bold text-on-surface leading-tight">${user.name.split(',')[0]}</div>
              <div class="text-[10px] text-on-surface-variant leading-none">${user.role.split('&')[0]}</div>
            </div>
            <span class="material-symbols-outlined text-sm text-on-surface-variant">expand_more</span>
          </button>

          <!-- Dropdown Menu -->
          <div id="profile-menu" class="hidden absolute right-0 mt-2 w-72 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-xl py-2 z-50 text-xs">
            <div class="px-4 py-2 border-b border-outline-variant">
              <p class="font-bold text-on-surface">${user.name}</p>
              <p class="text-[11px] text-on-surface-variant">${user.role}</p>
              <span class="inline-block mt-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold px-1.5 py-0.5 rounded text-[10px]">
                ${user.clearance}
              </span>
            </div>
            <div class="py-1">
              <div class="px-4 py-1 text-[10px] font-bold uppercase text-slate-400">Switch Officer Profile</div>
              ${WAYANAD_DATA.currentUserProfiles.map(p => `
                <button class="switch-profile-btn w-full text-left px-4 py-2 hover:bg-surface-container flex items-center gap-2 ${p.id === user.id ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}" data-profile-id="${p.id}">
                  <span class="material-symbols-outlined text-sm">${p.id === user.id ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                  <div>
                    <div>${p.name.split(',')[0]}</div>
                    <div class="text-[10px] text-on-surface-variant">${p.role}</div>
                  </div>
                </button>
              `).join('')}
            </div>
            <div class="border-t border-outline-variant pt-1 mt-1">
              <a href="#landing" class="w-full text-left px-4 py-2 hover:bg-surface-container text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span class="material-symbols-outlined text-base">public</span> Exit to Public Landing Page
              </a>
              <button id="header-logout-btn" class="w-full text-left px-4 py-2 hover:bg-rose-50 dark:hover:bg-rose-950 text-rose-600 flex items-center gap-2">
                <span class="material-symbols-outlined text-base">logout</span> Logout from Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}
