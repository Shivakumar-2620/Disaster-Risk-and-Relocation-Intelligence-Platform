/**
 * Login Screen Component
 */
import { WAYANAD_DATA } from '../data/wayanadData.js';
import { appState } from '../services/state.js';
import { showToast } from '../components/Toast.js';

export function renderLoginScreen() {
  return `
    <div class="relative z-10 w-full max-w-lg px-4 md:px-0 mx-auto py-12">
      <!-- Glassmorphic Card -->
      <div class="bg-surface-container-lowest/95 backdrop-blur-md rounded-[2.5rem] border border-outline-variant p-8 md:p-12 shadow-2xl flex flex-col items-center text-center">
        <!-- Logo -->
        <div class="w-20 h-20 mb-6 rounded-2xl overflow-hidden border border-outline-variant flex-shrink-0 bg-surface-container flex items-center justify-center text-primary shadow-inner">
          <span class="material-symbols-outlined text-4xl">shield_with_heart</span>
        </div>

        <!-- Typography Header -->
        <h1 class="font-display-md text-2xl md:text-3xl text-primary font-bold tracking-tight mb-2">
          Wayanad Decision Portal
        </h1>
        <p class="font-body-sm text-sm text-on-surface-variant mb-8 max-w-xs leading-relaxed">
          Disaster Management & Model Resettlement Decision Support System
        </p>

        <!-- Form -->
        <form id="login-form" class="w-full space-y-4 text-left">
          <!-- Quick Profile Select -->
          <div class="space-y-1.5">
            <label class="font-label-md text-xs font-semibold text-on-surface">Officer Identity & Clearance</label>
            <div class="relative">
              <select id="login-profile-select" class="w-full bg-surface-container-low border border-outline-variant text-on-surface text-xs rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary">
                ${WAYANAD_DATA.currentUserProfiles.map(p => `
                  <option value="${p.id}">${p.name} — ${p.role}</option>
                `).join('')}
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant">
                <span class="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
          </div>

          <!-- Official ID/Email -->
          <div class="space-y-1.5">
            <label class="font-label-md text-xs font-semibold text-on-surface" for="officer-id">KSDMA Officer PIN / Token</label>
            <div class="relative">
              <input class="w-full bg-surface-container-low border border-outline-variant text-on-surface text-xs rounded-xl px-4 py-3 placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono" id="officer-id" placeholder="KSDMA-WYD-2026-981" type="text" value="KSDMA-WYD-2026-981"/>
              <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-on-surface-variant">
                <span class="material-symbols-outlined text-sm">badge</span>
              </div>
            </div>
          </div>

          <!-- Clearance Code -->
          <div class="space-y-1.5">
            <label class="font-label-md text-xs font-semibold text-on-surface" for="clearance-key">Cabinet Encryption Key</label>
            <div class="relative">
              <input class="w-full bg-surface-container-low border border-outline-variant text-on-surface text-xs rounded-xl px-4 py-3 placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono" id="clearance-key" placeholder="••••••••••••" type="password" value="WayanadSafe2026!"/>
              <button type="button" class="absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant hover:text-on-surface" onclick="const el = document.getElementById('clearance-key'); el.type = el.type === 'password' ? 'text' : 'password'">
                <span class="material-symbols-outlined text-sm">visibility</span>
              </button>
            </div>
          </div>

          <!-- 2FA Prompt -->
          <div class="flex items-center justify-between text-xs py-1">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked class="rounded text-primary focus:ring-primary">
              <span class="text-on-surface-variant">Remember session</span>
            </label>
            <span class="text-emerald-700 font-mono text-[11px] flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 256-Bit SSL Encrypted
            </span>
          </div>

          <!-- Submit Button -->
          <button class="w-full mt-2 bg-primary hover:bg-primary-container active:scale-[0.99] text-on-primary font-bold text-xs py-3.5 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg" type="submit">
            <span>Authorize & Enter Command Center</span>
            <span class="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </form>

        <!-- Quick Demo Profiles Bar -->
        <div class="w-full mt-6 pt-6 border-t border-outline-variant">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">Quick Login Role</p>
          <div class="grid grid-cols-3 gap-2">
            <button class="quick-login-role px-2 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-[11px] font-medium text-slate-700 dark:text-slate-200 transition text-center" data-profile="collector">
              Collector IAS
            </button>
            <button class="quick-login-role px-2 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-[11px] font-medium text-slate-700 dark:text-slate-200 transition text-center" data-profile="geologist">
              GSI Geologist
            </button>
            <button class="quick-login-role px-2 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-[11px] font-medium text-slate-700 dark:text-slate-200 transition text-center" data-profile="revenue">
              RDO Revenue
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupLoginEvents() {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const profileId = document.getElementById('login-profile-select').value;
      appState.login(profileId);
      showToast('Authentication verified. Welcome to Wayanad Disaster Management Portal.', 'success', 'ACCESS GRANTED');
      window.location.hash = '#dashboard';
    });
  }

  document.querySelectorAll('.quick-login-role').forEach(btn => {
    btn.addEventListener('click', () => {
      const profile = btn.dataset.profile;
      appState.login(profile);
      showToast(`Logged in as ${appState.getState().currentUser.name}`, 'success', 'OFFICER VERIFIED');
      window.location.hash = '#dashboard';
    });
  });
}
