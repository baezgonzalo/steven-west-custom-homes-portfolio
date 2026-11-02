(() => {
  'use strict';
  const concepts = [
    { src: 'assets/concept-exterior.webp', alt: 'Illustrative concept of a limestone and brick residence; actual project photography pending', caption: 'Exterior concept · Actual project photograph pending' },
    { src: 'assets/concept-staircase.webp', alt: 'Illustrative concept of a curved limestone staircase; actual project photography pending', caption: 'Staircase concept · Actual project photograph pending' },
    { src: 'assets/concept-living-room.webp', alt: 'Illustrative concept of a warm plaster and timber living room; actual project photography pending', caption: 'Living room concept · Actual project photograph pending' },
    { src: 'assets/concept-kitchen.webp', alt: 'Illustrative concept of a warm white kitchen with marble island; actual project photography pending', caption: 'Kitchen concept · Actual project photograph pending' }
  ];
  const projects = {
    'sterling-hall': {
      title: 'Sterling Hall', year: '2010', location: 'Buckhead, Atlanta', scope: 'Charity showcase home', style: '[STYLE TO CONFIRM]', size: '[SIZE TO CONFIRM]', hero: concepts[0], conceptGallery: true,
      subtitle: 'A Buckhead estate created to open its doors to the community.',
      story: [
        'The vision: Sterling Hall is an estate on West Paces Ferry Road in Buckhead. The home opened for charity tours in 2010, bringing the public inside a distinctive residential setting.',
        'The challenge: According to Steven West’s existing website, the project had a demanding target date that brought design, permitting and construction into a compressed schedule. The full brief and team credits should be reviewed with the client before publication. [CONFIRM WITH CLIENT]',
        'The result: The home includes a sweeping spiral staircase on the main level and a salon on the terrace level. Steven designed and built the home; interior design was by Shane Meder of Black Sheep Interiors, as credited on Steven’s current site.'
      ]
    },
    'atlanta-holiday-house': {
      title: 'Atlanta Holiday House', year: '2009', location: 'Buckhead, Atlanta', scope: 'Charity showcase home', style: '[STYLE TO CONFIRM]', size: '[SIZE TO CONFIRM]', hero: concepts[1], conceptGallery: true,
      subtitle: 'A showcase of design and community in Buckhead.',
      story: [
        'The vision: Steven West designed and built a Buckhead show home that brought together residential design and support for local charities. The home was opened for public tours in 2009.',
        'The challenge: Steven coordinated 13 Atlanta interior designers for the house and the charity opening. The resulting spaces included a terrace level aquarium bar and an indoor basketball court, according to his existing project page.',
        'The result: The show home drew Atlanta media attention and OBIE recognition. Steven’s current website gives conflicting award categories and project references, so the exact category and year remain [TO CONFIRM WITH CLIENT].'
      ]
    },
    'christmas-house': {
      title: 'Atlanta Homes & Lifestyles Christmas House', year: '2007', location: 'Atlanta, Georgia', scope: 'Holiday showcase home', style: '[STYLE TO CONFIRM]', size: '[SIZE TO CONFIRM]', hero: concepts[2], conceptGallery: true,
      subtitle: 'A West Paces Ferry home selected for the magazine’s holiday tours.',
      story: [
        'The vision: A home built by Steven West on West Paces Ferry Road was selected as the 2007 Atlanta Homes & Lifestyles Christmas House, according to his existing website.',
        'The challenge: The project’s design brief, construction challenges and creative collaborators are [CLIENT TO SUPPLY]. Those details will make this story more personal and complete.',
        'The result: The house was opened for holiday tours that helped raise money for charity. Final project photography, specifications and the precise charitable partner are [CLIENT TO SUPPLY].'
      ]
    },
    'recent-custom-01': {
      title: 'Recent Custom Home 01', year: '[YEAR]', location: '[LOCATION]', scope: 'New custom home', style: '[STYLE]', size: '[SIZE]', hero: concepts[3], conceptGallery: false,
      subtitle: '[PROJECT NAME & DESCRIPTION — CLIENT TO SUPPLY]',
      story: ['The vision: [CLIENT TO SUPPLY THE HOMEOWNER’S GOALS AND DESIGN BRIEF].','The challenge: [CLIENT TO SUPPLY THE SITE, DESIGN OR BUILD CHALLENGE].','The result: [CLIENT TO SUPPLY THE FINISHED HOME’S KEY DETAILS AND OUTCOME].']
    },
    'recent-remodel-02': {
      title: 'Recent Remodel 02', year: '[YEAR]', location: '[LOCATION]', scope: 'Remodel', style: '[STYLE]', size: '[SIZE]', hero: concepts[2], conceptGallery: false,
      subtitle: '[PROJECT NAME & DESCRIPTION — CLIENT TO SUPPLY]',
      story: ['The vision: [CLIENT TO SUPPLY THE HOMEOWNER’S GOALS AND DESIGN BRIEF].','The challenge: [CLIENT TO SUPPLY THE EXISTING CONDITIONS OR DESIGN CHALLENGE].','The result: [CLIENT TO SUPPLY THE FINISHED REMODEL’S KEY DETAILS AND OUTCOME].']
    },
    'recent-custom-03': {
      title: 'Recent Custom Home 03', year: '[YEAR]', location: '[LOCATION]', scope: 'New custom home', style: '[STYLE]', size: '[SIZE]', hero: concepts[0], conceptGallery: false,
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

  const gallery = Array.from({ length: 12 }, (_, index) => {
    if (project.conceptGallery && index < concepts.length) return { ...concepts[index], placeholder: false };
    return { caption: `Project image ${String(index + 1).padStart(2, '0')} · Photography [CLIENT TO SUPPLY]`, placeholder: true };
  });
  const galleryMarkup = gallery.map((item, index) => `<button class="gallery-item" type="button" data-index="${index}" aria-label="Open gallery image ${index + 1} of 12: ${escapeHtml(item.caption)}">${item.placeholder ? `<span class="gallery-placeholder" aria-hidden="true"><strong>${String(index + 1).padStart(2, '0')}</strong><small>Photography pending</small></span>` : `<img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy">`}<span class="gallery-caption">${escapeHtml(item.caption)}</span></button>`).join('');
  const storyMarkup = project.story.map((paragraph, index) => `<div class="detail-story-block"><span class="story-label">${['01 / The vision', '02 / The challenge', '03 / The result'][index]}</span><p>${escapeHtml(paragraph)}</p></div>`).join('');

  document.getElementById('project-content').innerHTML = `
    <section class="detail-hero" aria-labelledby="project-title"><img src="${project.hero.src}" alt="${escapeHtml(project.hero.alt)}" fetchpriority="high"><div class="hero-shade"></div><div class="wrap detail-hero-inner"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html#portfolio">Portfolio</a><span aria-hidden="true">/</span><span>${escapeHtml(project.title)}</span></nav><p class="eyebrow light">${project.conceptGallery ? 'Showcase Home' : 'Project Placeholder'} · ${escapeHtml(project.year)}</p><h1 id="project-title">${escapeHtml(project.title)}</h1><p class="detail-subtitle">${escapeHtml(project.subtitle)}</p></div><p class="detail-image-note">Illustrative concept image · Actual project photography pending</p></section>
    <section class="detail-specs" aria-label="Project specifications"><div class="wrap detail-specs-grid"><div><span>Location</span><strong>${escapeHtml(project.location)}</strong></div><div><span>Year</span><strong>${escapeHtml(project.year)}</strong></div><div><span>Size</span><strong>${escapeHtml(project.size)}</strong></div><div><span>Scope</span><strong>${escapeHtml(project.scope)}</strong></div><div><span>Style</span><strong>${escapeHtml(project.style)}</strong></div></div></section>
    <section class="section"><div class="wrap detail-intro"><div><p class="eyebrow">The story</p><h2>Designed for<br><em>life within.</em></h2></div><div class="detail-story">${storyMarkup}</div></div></section>
    <section class="section detail-gallery" aria-labelledby="gallery-title"><div class="wrap"><div class="gallery-top"><div><p class="eyebrow">The gallery</p><h2 id="gallery-title">A closer <em>look.</em></h2></div><p>12 curated gallery slots · Final rights-cleared photography [CLIENT TO SUPPLY]</p></div><div class="gallery-grid">${galleryMarkup}</div></div></section>
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
    document.getElementById('contact-slot').innerHTML = `<section class="contact-section" id="contact"><div class="wrap"><p class="eyebrow light">Start a conversation</p><h2>Let's make room for your vision.</h2><p>To request your free consultation, call <a href="tel:+14049254203">(404) 925-4203</a> or email <a href="mailto:SGWest50@gmail.com">SGWest50@gmail.com</a>.</p></div></section>`;
  });

  const dialog = document.querySelector('.lightbox');
  const media = dialog.querySelector('.lightbox-media');
  const caption = dialog.querySelector('.lightbox-caption');
  let current = 0;
  function show(index) {
    current = (index + gallery.length) % gallery.length;
    const item = gallery[current];
    media.innerHTML = item.placeholder ? `<div class="gallery-placeholder" role="img" aria-label="Photography pending"><strong>${String(current + 1).padStart(2, '0')}</strong><small>Photography pending</small></div>` : `<img src="${item.src}" alt="${escapeHtml(item.alt)}">`;
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
