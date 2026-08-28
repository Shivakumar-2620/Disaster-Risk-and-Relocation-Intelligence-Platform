/**
 * Modal Dialogs (Emergency Broadcast & Cabinet Submission)
 */
import { showToast } from './Toast.js';

export function openEmergencyModal() {
  const modalHtml = `
    <div id="emergency-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface-container-lowest border-2 border-rose-600 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
        <div class="flex items-center gap-3 text-rose-600">
          <span class="material-symbols-outlined text-3xl">emergency</span>
          <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">Emergency Relocation Broadcast</h3>
            <p class="text-xs text-rose-600 font-semibold">DISTRICT DISASTER MANAGEMENT AUTHORITY (DDMA)</p>
          </div>
        </div>

        <div class="bg-rose-50 dark:bg-rose-950/40 p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
          <strong>CRITICAL NOTICE:</strong> Initiating automated CAP (Common Alerting Protocol) broadcast across Chooralmala, Mundakkai, Attamala, and Vellarmala.
        </div>

        <div class="space-y-2 text-xs">
          <label class="font-semibold text-slate-700 dark:text-slate-300">Broadcast Channel Distribution:</label>
          <div class="grid grid-cols-2 gap-2">
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>Cell Broadcast (SMS)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>Panchayat Siren Grid</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>Relief Camp Wardens</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <input type="checkbox" checked class="rounded text-rose-600 focus:ring-rose-500">
              <span>NDRF / Army Rapid Force</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          <button id="close-emergency-modal-btn" class="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            Cancel
          </button>
          <button id="confirm-broadcast-btn" class="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 rounded-lg shadow-lg flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">cell_tower</span> Transmit Priority Broadcast
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('close-emergency-modal-btn').addEventListener('click', () => {
    document.getElementById('emergency-modal-backdrop')?.remove();
  });

  document.getElementById('confirm-broadcast-btn').addEventListener('click', () => {
    document.getElementById('emergency-modal-backdrop')?.remove();
    showToast('Emergency Evacuation alert broadcast to all 3,420 households and 48 relief centers.', 'critical', 'BROADCAST TRANSMITTED');
  });
}

export function openCabinetApprovalModal() {
  const modalHtml = `
    <div id="cabinet-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-surface-container-lowest border border-emerald-500 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
        <div class="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
          <span class="material-symbols-outlined text-3xl">verified</span>
          <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white">Cabinet Approval Submission</h3>
            <p class="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">OFFICIAL GOVERNMENT ORDER CLEARANCE</p>
          </div>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed space-y-1">
          <p><strong>Government Order:</strong> G.O. (Ms) No. 114/2026/DMD</p>
          <p><strong>Primary Resettlement Site:</strong> Kalpetta North (Site Alpha - 64.5 Acres)</p>
          <p><strong>Total Sanctioned Budget:</strong> ₹428,50,00,000 (₹428.50 Crores)</p>
        </div>

        <div class="space-y-2 text-xs">
          <label class="font-semibold text-slate-700 dark:text-slate-300">Statutory Department Clearances Verified:</label>
          <ul class="space-y-1 text-slate-600 dark:text-slate-400">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Revenue Dept. - Survey 412/1A Title Vested</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Forest Dept. - Eco-Sensitive Zone Buffer Cleared</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> PWD Roads - Dual Arterial Access Verified</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> GSI / KSDMA - Negligible Hazard Score (0.04)</li>
          </ul>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          <button id="close-cabinet-modal-btn" class="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            Cancel
          </button>
          <button id="confirm-cabinet-btn" class="px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-95 rounded-lg shadow-lg flex items-center gap-1.5">
            <span class="material-symbols-outlined text-sm">stamp</span> Affix Seal & Submit Dossier
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('close-cabinet-modal-btn').addEventListener('click', () => {
    document.getElementById('cabinet-modal-backdrop')?.remove();
  });

  document.getElementById('confirm-cabinet-btn').addEventListener('click', () => {
    document.getElementById('cabinet-modal-backdrop')?.remove();
    showToast('Cabinet Approval Dossier has been signed and officially submitted to the Chief Minister Secretariat.', 'success', 'DOSSIER TRANSMITTED');
    const sealEl = document.getElementById('cabinet-seal-indicator');
    if (sealEl) {
      sealEl.classList.remove('hidden');
      sealEl.classList.add('flex');
    }
  });
}
