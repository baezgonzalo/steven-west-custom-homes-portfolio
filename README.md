# Steven West Custom Homes — portfolio concept

A responsive, mobile-first portfolio and reusable project-detail page for Steven West Custom Homes. The site is built with plain HTML, CSS and JavaScript in `dist/`; no package install or build step is required.

## Preview locally

From this folder, run:

```powershell
python -m http.server 4173 --directory dist
```

Open `http://127.0.0.1:4173/index.html`. Project detail pages use `project.html?project=sterling-hall` and the other keys in `dist/project.js`.

## What is included

- Portfolio page with category filters, six cards, story, bio, process, testimonials, investment guidance, FAQ and consultation form.
- Reusable project-detail template driven by the allowlisted project data in `dist/project.js`. Each detail has a three-part story, specifications, 12 gallery slots, a lightbox and the same consultation form.
- Eleven distinct original concept images optimized to WebP. Each appears in one photo slot only. They are **illustrative placeholders**, never actual Steven West work, and every one needs replacement before public launch. The source PNGs and optimization script are included.
- Scroll-expanding editorial image section inspired by the supplied screen recording. It uses a single unique image, respects reduced-motion preferences and keeps the consultation flow visible before and after the effect.
- Responsive sticky header and mobile contact bar, keyboard-accessible controls, descriptive image text, reduced-motion support, metadata and HomeAndConstructionBusiness structured data.
- Analytics events pushed to `window.dataLayer` and dispatched as `sw:analytics`: `click_to_call`, `cta_click`, `portfolio_filter`, `form_validation_error` and `form_submit`. A `gtag` hook runs if one is installed later.

## Before public launch

1. Replace all visible `[PLACEHOLDER]`, `[CONFIRM]` and `[CLIENT TO SUPPLY]` copy. The current official website contradicts itself about the OBIE award category and project; verify the award record before stating specifics.
2. Supply rights-cleared photography for the three showcase homes, three recent projects, Steven's portrait and testimonial photos. Replace all eleven concept images and gallery slots; update alt text to describe each real image accurately. See `ASSET_PROVENANCE.md` for the exact replacement checklist.
3. Confirm the business address, service area, license and insurance details, starting investment, response time, timeframes, ratings, social links and final privacy policy.
4. Connect the consultation form to a real lead destination with a confirmed privacy and delivery process. This preview validates fields and prepares a draft email to `SGWest50@gmail.com`; the visitor must send that draft. The on-screen state says this explicitly and does not claim a request was received.
5. Add the production analytics measurement ID only after choosing the provider and completing the privacy notice.

## Content sources

Published brand language and project facts come from the [official home page](https://www.stevenwestcustomhomes.com/), [portfolio](https://www.stevenwestcustomhomes.com/portfolio/), [about page](https://www.stevenwestcustomhomes.com/about-us/), [contact page](https://www.stevenwestcustomhomes.com/contact-us/), [Sterling Hall page](https://www.stevenwestcustomhomes.com/sterling-hall/) and [Atlanta Holiday House page](https://www.stevenwestcustomhomes.com/2009-atlanta-holiday-house/). New promotional slogans were removed; neutral UI labels and explicitly marked pending fields remain. The official pages are inconsistent about the award, so its category is intentionally unclaimed. The three recent projects are explicit placeholders, not real work. See `COPY_SOURCES.md` for a claim-by-claim map.

## Files

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Main portfolio and canonical copy/form source |
| `dist/project.html` | Reusable detail-page shell |
| `dist/project.js` | Project data, gallery and lightbox |
| `dist/site.js` | Navigation, filters, form and analytics events |
| `dist/styles.css` | Design system and responsive styles |
| `dist/privacy.html` | Honest preview privacy notice; final policy pending |
| `source-images/` | Original generated concept PNGs |
| `scripts/optimize_images.py` | WebP conversion using Pillow |
| `ASSET_PROVENANCE.md` | Image prompts and usage |
| `COPY_SOURCES.md` | Source map for the visible brand copy and factual claims |
