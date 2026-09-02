/**
 * Toast Notification System
 */

export function showToast(message, type = 'info', title = 'System Notification') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg border text-sm transition-all duration-300 transform translate-y-2 opacity-0';

  let icon = 'info';
  let colors = 'bg-white dark:bg-slate-900 border-slate-200 text-slate-800 dark:text-white';

  if (type === 'success') {
    icon = 'check_circle';
    colors = 'bg-[#f0fdf4] border-[#bbf7d0] text-[#166534] dark:bg-slate-900 dark:border-emerald-700 dark:text-emerald-300';
  } else if (type === 'error' || type === 'critical') {
    icon = 'error';
    colors = 'bg-[#fef2f2] border-[#fecaca] text-[#991b1b] dark:bg-slate-900 dark:border-rose-700 dark:text-rose-300';
  } else if (type === 'warning') {
    icon = 'warning';
    colors = 'bg-[#fffbeb] border-[#fef3c7] text-[#92400e] dark:bg-slate-900 dark:border-amber-700 dark:text-amber-300';
  }

  toast.className += ` ${colors}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined shrink-0 text-xl">${icon}</span>
    <div class="flex-1">
      <div class="font-semibold text-xs uppercase tracking-wider">${title}</div>
      <div class="mt-0.5 text-xs font-normal">${message}</div>
    </div>
    <button class="text-slate-400 hover:text-slate-600 transition" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-sm">close</span>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-x-4');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
