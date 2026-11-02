(() => {
  'use strict';
  const projects = {
    'sterling-hall': {
      title: 'Sterling Hall', year: '2010', location: 'Buckhead, Atlanta', scope: 'Show home', style: '[STYLE TO CONFIRM]', size: '[SIZE TO CONFIRM]', hero: { src: 'assets/concept-sterling-detail.webp', alt: 'Illustrative formal salon; this is not Sterling Hall and must be replaced with project photography' }, showcase: true,
      subtitle: 'A West Paces Ferry Road home opened for tours in 2010.',
      story: [
        'The vision: Steven West built Sterling Hall on West Paces Ferry Road in Buckhead. The home opened for tours in 2010.',
        'The challenge: The homeowner had a target date that required permitting, design and construction to move quickly, according to the company’s current website.',
        'The result: The home features a winding staircase. Further project specifications and photography are [CLIENT TO SUPPLY].'
      ]
    },
    'atlanta-holiday-house': {
      title: 'Atlanta Holiday House', year: '2009', location: 'Buckhead, Atlanta', scope: 'Show home', style: '[STYLE TO CONFIRM]', size: '[SIZE TO CONFIRM]', hero: { src: 'assets/concept-holiday-detail.webp', alt: 'Illustrative entrance hall; this is not the Atlanta Holiday House and must be replaced with project photography' }, showcase: true,
      subtitle: 'A Buckhead show home featuring 13 Atlanta interior designers.',
      story: [
        'The vision: Steven West designed and built the Atlanta Holiday House in Buckhead for public tours benefiting local charities.',
        'The challenge: The house featured 13 Atlanta interior designers. Its spaces included an aquarium bar and an indoor basketball court, according to the company’s project page.',
        'The result: The company reports OBIE recognition for the home. Its current pages give conflicting award details, so the category and year remain [TO CONFIRM WITH CLIENT].'
      ]
    },
    'christmas-house': {
      title: 'Atlanta Homes & Lifestyles Christmas House', year: '2007', location: 'Atlanta, Georgia', scope: 'Show home', style: '[STYLE TO CONFIRM]', size: '[SIZE TO CONFIRM]', hero: { src: 'assets/concept-christmas-detail.webp', alt: 'Illustrative library; this is not the 2007 Christmas House and must be replaced with project photography' }, showcase: true,
      subtitle: 'A West Paces Ferry Road home selected for holiday tours.',
      story: [
        'The vision: A home built by Steven West on West Paces Ferry Road was selected as the 2007 Atlanta Homes & Lifestyles Christmas House, according to the company’s website.',
        'The challenge: [DESIGN BRIEF AND CONSTRUCTION DETAILS TO CONFIRM WITH CLIENT].',
        'The result: The home opened for holiday tours that raised money for charity. Project photography and specifications are [CLIENT TO SUPPLY].'
      ]
    },
    'recent-custom-01': {
      title: 'Recent Custom Home 01', year: '[YEAR]', location: '[LOCATION]', scope: 'New custom home', style: '[STYLE]', size: '[SIZE]', hero: null, showcase: false,
      subtitle: '[PROJECT NAME & DESCRIPTION — CLIENT TO SUPPLY]',
      story: ['The vision: [CLIENT TO SUPPLY THE HOMEOWNER’S GOALS AND DESIGN BRIEF].','The challenge: [CLIENT TO SUPPLY THE SITE, DESIGN OR BUILD CHALLENGE].','The result: [CLIENT TO SUPPLY THE FINISHED HOME’S KEY DETAILS AND OUTCOME].']
    },
    'recent-remodel-02': {
      title: 'Recent Remodel 02', year: '[YEAR]', location: '[LOCATION]', scope: 'Remodel', style: '[STYLE]', size: '[SIZE]', hero: null, showcase: false,
      subtitle: '[PROJECT NAME & DESCRIPTION — CLIENT TO SUPPLY]',
      story: ['The vision: [CLIENT TO SUPPLY THE HOMEOWNER’S GOALS AND DESIGN BRIEF].','The challenge: [CLIENT TO SUPPLY THE EXISTING CONDITIONS OR DESIGN CHALLENGE].','The result: [CLIENT TO SUPPLY THE FINISHED REMODEL’S KEY DETAILS AND OUTCOME].']
    },
    'recent-custom-03': {
      title: 'Recent Custom Home 03', year: '[YEAR]', location: '[LOCATION]', scope: 'New custom home', style: '[STYLE]', size: '[SIZE]', hero: null, showcase: false,
      subtitle: '[PROJECT NAME & DESCRIPTION — CLIENT TO SUPPLY]',
      story: ['The vision: [CLIENT TO SUPPLY THE HOMEOWNER’S GOALS AND DESIGN BRIEF].','The challenge: [CLIENT TO SUPPLY THE SITE, DESIGN OR BUILD CHALLENGE].','The result: [CLIENT TO SUPPLY THE FINISHED HOME’S KEY DETAILS AND OUTCOME].']
    }
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const keys = Object.keys(projects);
  const selected = new URLSearchParams(location.search).get('project');
  const key = Object.prototype.hasOwnProperty.call(projects, selected) ? selected : 'atlanta-holiday-house';
  const project = projects[key];
  const currentPosition = keys.indexOf(key);
  const nextKey = keys[(currentPosition + 1) % keys.length];
  const next = projects[nextKey];
  document.title = `${project.title} | Steven West Custom Homes, Atlanta`;
  document.querySelector('meta[name="description"]').content = `Explore ${project.title}, a Steven West Custom Homes portfolio project in Atlanta, and request a free consultation for your own custom home.`;

  const gallery = Array.from({ length: 12 }, (_, index) => ({ caption: `Project image ${String(index + 1).padStart(2, '0')} · Photography [CLIENT TO SUPPLY]` }));
  const galleryMarkup = gallery.map((item, index) => `<button class="gallery-item" type="button" data-index="${index}" aria-label="Open gallery slot ${index + 1} of 12: ${escapeHtml(item.caption)}"><span class="gallery-placeholder" aria-hidden="true"><strong>${String(index + 1).padStart(2, '0')}</strong><small>Photography pending</small></span><span class="gallery-caption">${escapeHtml(item.caption)}</span></button>`).join('');
  const storyMarkup = project.story.map((paragraph, index) => `<div class="detail-story-block"><span class="story-label">${['01 / The vision', '02 / The challenge', '03 / The result'][index]}</span><p>${escapeHtml(paragraph)}</p></div>`).join('');

  document.getElementById('project-content').innerHTML = `
    <section class="detail-hero${project.hero ? '' : ' detail-hero-empty'}" aria-labelledby="project-title">${project.hero ? `<img src="${project.hero.src}" alt="${escapeHtml(project.hero.alt)}" fetchpriority="high">` : '<div class="detail-hero-art" aria-hidden="true"></div>'}<div class="hero-shade"></div><div class="wrap detail-hero-inner"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html#portfolio">Portfolio</a><span aria-hidden="true">/</span><span>${escapeHtml(project.title)}</span></nav><p class="eyebrow light">${project.showcase ? 'Showcase Home' : 'Project Placeholder'} · ${escapeHtml(project.year)}</p><h1 id="project-title">${escapeHtml(project.title)}</h1><p class="detail-subtitle">${escapeHtml(project.subtitle)}</p></div><p class="detail-image-note">${project.hero ? 'Illustrative image · Replace with a rights-cleared project photograph' : 'Project photograph [CLIENT TO SUPPLY]'}</p></section>
    <section class="detail-specs" aria-label="Project specifications"><div class="wrap detail-specs-grid"><div><span>Location</span><strong>${escapeHtml(project.location)}</strong></div><div><span>Year</span><strong>${escapeHtml(project.year)}</strong></div><div><span>Size</span><strong>${escapeHtml(project.size)}</strong></div><div><span>Scope</span><strong>${escapeHtml(project.scope)}</strong></div><div><span>Style</span><strong>${escapeHtml(project.style)}</strong></div></div></section>
    <section class="section"><div class="wrap detail-intro"><div><p class="eyebrow">The story</p><h2>Project<br><em>Details.</em></h2></div><div class="detail-story">${storyMarkup}</div></div></section>
    <section class="section detail-gallery" aria-labelledby="gallery-title"><div class="wrap"><div class="gallery-top"><div><p class="eyebrow">The gallery</p><h2 id="gallery-title">Project <em>Gallery.</em></h2></div><p>12 image slots · Rights-cleared project photography [CLIENT TO SUPPLY]</p></div><div class="gallery-grid">${galleryMarkup}</div></div></section>
    <section class="detail-next"><div class="wrap detail-next-inner"><div><span>Continue exploring</span><h2>${escapeHtml(next.title)}</h2></div><a class="under-link" href="project.html?project=${nextKey}" data-track="next_project">View next project <span aria-hidden="true">↗</span></a></div></section>
    <div id="contact-slot"></div>
    <dialog class="lightbox" aria-label="Project gallery image"><div class="lightbox-inner"><button class="lightbox-close" type="button" aria-label="Close image">Close ✕</button><div class="lightbox-media"></div><div class="lightbox-controls"><button class="lightbox-prev" type="button" aria-label="Previous image">← Previous</button><p class="lightbox-caption" aria-live="polite"></p><button class="lightbox-next" type="button" aria-label="Next image">Next →</button></div></div></dialog>
  `;

  // The portfolio page owns the single form source. Detail pages reuse the exact same form and copy.
  fetch('index.html').then((response) => {
    if (!response.ok) throw new Error('Unable to load shared form');
    return response.text();
  }).then((html) => {
    const source = new DOMParser().parseFromString(html, 'text/html');
    const section = source.querySelector('.contact-section');
    if (!section) throw new Error('Shared form missing');
    document.getElementById('contact-slot').replaceWith(document.importNode(section, true));
  }).catch(() => {
    document.getElementById('contact-slot').innerHTML = `<section class="contact-section" id="contact"><div class="wrap"><p class="eyebrow light">Contact</p><h2>We'd Love to Hear from You.</h2><p>To request your initial free consultation, call <a href="tel:+14049254203">(404) 925-4203</a> or email <a href="mailto:SGWest50@gmail.com">SGWest50@gmail.com</a>.</p></div></section>`;
  });

  const dialog = document.querySelector('.lightbox');
  const media = dialog.querySelector('.lightbox-media');
  const caption = dialog.querySelector('.lightbox-caption');
  let current = 0;
  function show(index) {
    current = (index + gallery.length) % gallery.length;
    const item = gallery[current];
    media.innerHTML = `<div class="gallery-placeholder" role="img" aria-label="Project photography pending"><strong>${String(current + 1).padStart(2, '0')}</strong><small>Photography pending</small></div>`;
    caption.textContent = `${current + 1} / ${gallery.length} — ${item.caption}`;
  }
  document.querySelectorAll('.gallery-item').forEach((button) => button.addEventListener('click', () => {
    show(Number(button.dataset.index));
    dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
})();
