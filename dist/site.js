(() => {
  'use strict';

  function trackEvent(event, details = {}) {
    const payload = { event, ...details };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    window.dispatchEvent(new CustomEvent('sw:analytics', { detail: payload }));
    if (typeof window.gtag === 'function') window.gtag('event', event, details);
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    if (link.href.startsWith('tel:')) trackEvent('click_to_call', { location: link.closest('header, footer, .mobile-action-bar, .contact-section')?.className || 'page' });
    if (link.dataset.track) trackEvent('cta_click', { cta: link.dataset.track });
    if (link.closest('.main-nav')) {
      const menu = document.querySelector('.main-nav');
      const toggle = document.querySelector('.menu-toggle');
      menu?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.setAttribute('aria-label', 'Open menu');
    }
  });

  document.querySelector('.menu-toggle')?.addEventListener('click', (event) => {
    const menu = document.getElementById('main-nav');
    const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('open', !expanded);
    event.currentTarget.setAttribute('aria-expanded', String(!expanded));
    event.currentTarget.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });

  const filters = [...document.querySelectorAll('.filter')];
  if (filters.length) {
    filters.forEach((button) => button.addEventListener('click', () => {
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      const cards = [...document.querySelectorAll('.project-card')];
      let visible = 0;
      cards.forEach((card) => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) visible += 1;
      });
      const count = document.getElementById('portfolio-count');
      if (count) count.textContent = `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}`;
      trackEvent('portfolio_filter', { category: button.dataset.filter });
    }));
  }

  document.addEventListener('input', (event) => {
    if (event.target.closest('.consultation-form')) event.target.removeAttribute('aria-invalid');
  });
  document.addEventListener('change', (event) => {
    if (event.target.closest('.consultation-form')) event.target.removeAttribute('aria-invalid');
  });

  document.addEventListener('submit', (event) => {
    const form = event.target.closest('.consultation-form');
    if (!form) return;
    event.preventDefault();
    const status = form.querySelector('.form-status');
    const invalid = [...form.elements].filter((element) => element.willValidate && !element.checkValidity());
    if (invalid.length) {
      invalid.forEach((element) => element.setAttribute('aria-invalid', 'true'));
      status.hidden = false;
      status.textContent = 'Please complete the highlighted fields with valid information.';
      invalid[0].focus();
      trackEvent('form_validation_error', { fields: invalid.map((element) => element.name).join(',') });
      return;
    }

    const values = Object.fromEntries(new FormData(form).entries());
    const lines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Project type: ${values.project_type}`,
      `Lot status: ${values.lot_status}`,
      `Budget range: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      '',
      'Project message:',
      values.message
    ];
    const subject = `Free consultation request — ${values.name}`;
    const mailto = `mailto:SGWest50@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    status.hidden = false;
    status.textContent = 'Your email app should open with a prepared request. Please send the draft to complete your consultation request. If it does not open, call (404) 925-4203.';
    trackEvent('form_submit', { project_type: values.project_type, transport: 'email_draft' });
    window.location.href = mailto;
  });

  const reveal = document.querySelector('[data-reveal]');
  if (reveal && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealLink = reveal.querySelector('.reveal-copy a');
    const clamp = (value) => Math.max(0, Math.min(1, value));
    let scheduled = false;
    reveal.classList.add('is-ready');

    function updateReveal() {
      const rect = reveal.getBoundingClientRect();
      const scrollRange = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / scrollRange);
      const expansion = clamp(progress / 0.55);
      const copyOpacity = clamp((progress - 0.50) / 0.15);
      const mobile = window.innerWidth <= 680;
      reveal.style.setProperty('--reveal-x', `${((mobile ? 9 : 26) * (1 - expansion)).toFixed(2)}%`);
      reveal.style.setProperty('--reveal-y', `${((mobile ? 25 : 24) * (1 - expansion)).toFixed(2)}%`);
      reveal.style.setProperty('--reveal-radius', `${(22 * (1 - expansion)).toFixed(1)}px`);
      reveal.style.setProperty('--reveal-copy-opacity', copyOpacity.toFixed(3));
      reveal.style.setProperty('--reveal-preface-opacity', (1 - clamp(progress / 0.08)).toFixed(3));
      reveal.classList.toggle('is-visible', copyOpacity > 0.05);
      revealLink.tabIndex = copyOpacity < 0.10 ? -1 : 0;
      scheduled = false;
    }

    function scheduleReveal() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateReveal);
    }

    window.addEventListener('scroll', scheduleReveal, { passive: true });
    window.addEventListener('resize', scheduleReveal);
    updateReveal();
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
