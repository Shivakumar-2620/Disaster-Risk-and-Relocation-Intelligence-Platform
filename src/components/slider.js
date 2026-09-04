/**
 * Slider — vanilla-JS port of the unlumen-ui `Slider` primitive.
 *
 * A labelled range slider with an animated, spring-snapped thumb over a filled
 * track, plus an optional live value readout (formatValue) and step dots.
 * No React / Radix / motion — pointer + keyboard driven, dependency free.
 *
 * Typical use:
 *   el.innerHTML = renderSlider({ id, value, min, max, step, label, formatValue: v => `${v}%` });
 *   initSlider(el, { onChange: (v) => { ... } });
 */

const THUMB_SIZE = 18;      // px — thumb travel is inset so it never overflows
const TRACK_H = 6;          // px track height (CSS mirrors this)
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function stepRound(v, min, step) {
  return min + Math.round((v - min) / step) * step;
}

/**
 * HTML for one slider. Returns a wrapper that initSlider() then enhances.
 */
export function renderSlider({
  id = null,
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  label = '',
  showValue = true,
  showSteps = false,
  valuePosition = 'bottom', // 'top' | 'bottom' | 'left' | 'right' | 'tooltip'
  formatValue = (v) => `${v}`,
  disabled = false,
} = {}) {
  const safeMax = Math.max(min, max);
  const val = clamp(value, min, safeMax);
  const pct = safeMax === min ? 0 : ((val - min) / (safeMax - min)) * 100;
  const idAttr = id ? ` data-slider-id="${id}"` : '';

  // Step dots (only rendered for a reasonable count)
  let dots = '';
  if (showSteps && step > 0) {
    const count = Math.min(9, Math.floor((safeMax - min) / step));
    for (let i = 0; i < count; i++) {
      const p = (i / count) * 100;
      dots += `<span class="uw-slider-dot" style="left:${p}%"></span>`;
    }
  }

  const valueMarkup =
    valuePosition === 'tooltip'
      ? `<span class="uw-slider-tip">${formatValue(val)}</span>`
      : valuePosition === 'left'
        ? `<span class="uw-slider-readout uw-slider-readout--left">${formatValue(val)}</span>`
        : valuePosition === 'right'
          ? `<span class="uw-slider-readout uw-slider-readout--right">${formatValue(val)}</span>`
          : `<span class="uw-slider-readout uw-slider-readout--${valuePosition}">${formatValue(val)}</span>`;

  const labelMarkup = label
    ? valuePosition === 'top'
      ? `<div class="uw-slider-label uw-slider-label--top"><span>${label}</span>${showValue ? valueMarkup : ''}</div>`
      : `<div class="uw-slider-label"><span>${label}</span>${showValue && valuePosition === 'bottom' ? valueMarkup : ''}</div>`
    : (showValue ? valueMarkup : '');

  return `
    <div class="uw-slider" ${idAttr} role="slider" tabindex="0" aria-label="${label || 'value'}" aria-valuemin="${min}" aria-valuemax="${safeMax}" aria-valuenow="${val}" aria-valuetext="${formatValue(val)}" data-min="${min}" data-max="${safeMax}" data-step="${step}" data-value="${val}"${disabled ? ' data-disabled="true"' : ''}>
      ${labelMarkup}
      <div class="uw-slider-track">
        <span class="uw-slider-fill" style="width:${pct}%"></span>
        ${dots}
        <span class="uw-slider-thumb" style="left:calc(${pct}% - ${THUMB_SIZE / 2}px)"></span>
      </div>
    </div>
  `;
}

/**
 * Activates pointer/keyboard dragging on a container that holds slider markup.
 * Returns a cleanup function. onChange(v) fires with the snapped value.
 */
export function initSlider(rootEl, { onChange = () => {} } = {}) {
  const slider = rootEl.matches('.uw-slider') ? rootEl : rootEl.querySelector('.uw-slider');
  if (!slider) return () => {};
  const track = slider.querySelector('.uw-slider-track');
  const thumb = slider.querySelector('.uw-slider-thumb');
  const fill = slider.querySelector('.uw-slider-fill');
  const readout = slider.querySelector('.uw-slider-readout, .uw-slider-tip');
  if (!track) return () => {};

  const min = parseFloat(slider.dataset.min) || 0;
  const max = parseFloat(slider.dataset.max) || 100;
  const step = parseFloat(slider.dataset.step) || 1;
  let value = clamp(parseFloat(slider.dataset.value) || min, min, max);
  const disabled = slider.dataset.disabled === 'true';

  let dragging = false;
  const pointerIdRef = { current: null };

  const emit = () => onChange(value);

  function setValue(next, { snap = true, animate = false } = {}) {
    const v = clamp(snap ? stepRound(next, min, step) : next, min, max);
    if (v === value && !animate) return;
    value = v;
    slider.dataset.value = String(v);
    slider.setAttribute('aria-valuenow', String(v));
    const pct = max === min ? 0 : ((v - min) / (max - min)) * 100;
    if (fill) fill.style.width = `${pct}%`;
    if (thumb) {
      thumb.style.transition = animate ? `left .45s ${EASE}` : 'none';
      thumb.style.left = `calc(${pct}% - ${THUMB_SIZE / 2}px)`;
    }
    if (readout) {
      // readout text updates are left to the caller via onChange; set data only
      slider.dispatchEvent(new CustomEvent('uw:change', { detail: { value: v } }));
    }
    emit();
  }

  function valueFromEvent(e) {
    const rect = track.getBoundingClientRect();
    const usable = rect.width - THUMB_SIZE;
    const local = clamp(e.clientX - rect.left - THUMB_SIZE / 2, 0, usable);
    return min + (local / usable) * (max - min);
  }

  function onPointerDown(e) {
    if (disabled) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    slider.focus();
    dragging = true;
    pointerIdRef.current = e.pointerId;
    slider.classList.add('uw-slider--active');
    try { track.setPointerCapture(e.pointerId); } catch (_) { /* noop */ }
    setValue(valueFromEvent(e), { snap: true });
  }

  function onPointerMove(e) {
    if (!dragging || disabled) return;
    setValue(valueFromEvent(e), { snap: false });
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    slider.classList.remove('uw-slider--active');
    if (pointerIdRef.current != null) {
      try { track.releasePointerCapture(pointerIdRef.current); } catch (_) { /* noop */ }
    }
    setValue(value, { snap: true, animate: true });
  }

  function onKeyDown(e) {
    if (disabled) return;
    const unit = step || 1;
    let next = null;
    if (['ArrowRight', 'ArrowUp'].includes(e.key)) next = value + unit;
    else if (['ArrowLeft', 'ArrowDown'].includes(e.key)) next = value - unit;
    else if (e.key === 'Home') next = min;
    else if (e.key === 'End') next = max;
    else return;
    e.preventDefault();
    setValue(next, { snap: true, animate: true });
  }

  track.addEventListener('pointerdown', onPointerDown);
  track.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', endDrag);
  slider.addEventListener('keydown', onKeyDown);

  return () => {
    track.removeEventListener('pointerdown', onPointerDown);
    track.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', endDrag);
    slider.removeEventListener('keydown', onKeyDown);
  };
}
