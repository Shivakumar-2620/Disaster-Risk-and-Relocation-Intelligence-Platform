/**
 * HighlightGroup — vanilla-JS port of the unlumen-ui `Highlight` primitive
 * (mode="parent"), implemented without React or motion.
 *
 * One shared absolutely-positioned background pill glides (spring-like CSS
 * easing) to whichever item is hovered — or, in click mode, stays on the
 * selected item (optionally seeded by `defaultValue`). The item rects are
 * measured relative to the container, mirroring the original's
 * getBoundingClientRect + animate(top/left/width/height) approach.
 */

const GLIDE_EASE = 'cubic-bezier(0.34, 1.3, 0.64, 1)';

/**
 * Returns an HTML string for the highlight group.
 * items: [{ value, label, icon? }, ...] (or array of plain strings)
 * mode: 'hover' (default) glides on mouseenter and fades on mouseleave;
 *       'click' highlights the selected item only (uses defaultValue).
 */
export function renderHighlightGroup({
  items = [],
  mode = 'hover',
  defaultValue = null,
  className = 'bg-primary/15 border border-primary/30',
  containerClassName = 'flex gap-1 sm:gap-2 p-1.5 flex-wrap justify-center rounded-2xl border border-outline-variant bg-surface-container-low/50',
  id = null,
} = {}) {
  const list = items.map((it) =>
    typeof it === 'string' || typeof it === 'number' ? { value: String(it), label: String(it) } : it
  );
  const groupId = id ? ` id="${id}"` : '';
  return `
    <div${groupId} class="relative ${containerClassName}" data-hl-group data-hl-mode="${mode}" data-hl-default="${defaultValue || ''}">
      <div data-hl-indicator
        class="absolute z-0 rounded-lg pointer-events-none ${className}"
        style="left:0;top:0;width:0;height:0;opacity:0;transition:left .55s ${GLIDE_EASE}, top .55s ${GLIDE_EASE}, width .55s ${GLIDE_EASE}, height .55s ${GLIDE_EASE}, opacity .3s ease;"></div>
      ${list
        .map((it) => {
          const val = String(it.value);
          return `
          <div data-hl-item="${val}"
            role="button" tabindex="0" aria-selected="false"
            class="relative z-10 inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg font-medium text-sm cursor-pointer select-none text-on-surface-variant hover:text-on-surface transition-colors">
            ${it.icon ? `<span class="material-symbols-outlined text-base text-primary">${it.icon}</span>` : ''}
            <span>${it.label}</span>
          </div>`;
        })
        .join('')}
    </div>
  `;
}

function placeOn(group, item, indicator) {
  // Item and container share the same offsetParent context (both positioned),
  // so offsetLeft/Top place the indicator in the same coordinate space.
  indicator.style.left = `${item.offsetLeft}px`;
  indicator.style.top = `${item.offsetTop}px`;
  indicator.style.width = `${item.offsetWidth}px`;
  indicator.style.height = `${item.offsetHeight}px`;
  indicator.style.opacity = '1';
  group.dataset.hlActive = item.dataset.hlItem;
}

function clearIndicator(group, indicator) {
  indicator.style.opacity = '0';
  delete group.dataset.hlActive;
}

/**
 * Binds hover/click behaviour to a group rendered by renderHighlightGroup.
 * Call after the node is in the DOM. Returns a cleanup function.
 * onValueChange(value|null) fires when the active item changes (null = none).
 */
export function initHighlightGroup(root, { onValueChange = () => {}, defaultValue } = {}) {
  if (!root) return () => {};
  const group = root.matches('[data-hl-group]') ? root : root.querySelector('[data-hl-group]');
  if (!group) return () => {};
  const indicator = group.querySelector('[data-hl-indicator]');
  const items = [...group.querySelectorAll('[data-hl-item]')];
  if (!indicator || !items.length) return () => {};

  const mode = group.dataset.hlMode || 'hover';
  const initial = defaultValue != null ? String(defaultValue) : group.dataset.hlDefault || null;

  let activeValue = null;
  const setActive = (val) => {
    if (activeValue === val) return;
    activeValue = val;
    const item = items.find((i) => i.dataset.hlItem === val) || null;
    items.forEach((i) => {
      const on = i === item;
      i.setAttribute('aria-selected', String(on));
      i.classList.toggle('text-primary', on);
      i.classList.toggle('font-semibold', on);
    });
    if (item) placeOn(group, item, indicator);
    else clearIndicator(group, indicator);
    onValueChange(val);
  };

  if (mode === 'click') {
    items.forEach((item) => {
      const activate = () => setActive(item.dataset.hlItem);
      item.addEventListener('click', activate);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });
  } else {
    // Glide under the pointer while inside; fade out on container leave.
    group.addEventListener('mouseover', (e) => {
      const item = e.target.closest('[data-hl-item]');
      if (item) setActive(item.dataset.hlItem);
    });
    group.addEventListener('mouseleave', () => setActive(null));
  }

  const reposition = () => {
    if (!activeValue) return;
    const item = items.find((i) => i.dataset.hlItem === activeValue);
    if (item) {
      const prev = group.style.transition;
      group.style.transition = 'none'; // no glide on resize
      placeOn(group, item, indicator);
      requestAnimationFrame(() => (group.style.transition = prev));
    }
  };
  window.addEventListener('resize', reposition);

  // Seed initial selection (click mode / defaultValue).
  if (initial) {
    requestAnimationFrame(() => setActive(initial));
  }

  return () => {
    window.removeEventListener('resize', reposition);
  };
}
