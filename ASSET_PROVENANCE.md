# Image provenance and replacement checklist

Every photograph-like image in this preview was generated for the design concept. **None shows a Steven West Custom Homes project.** No image from the company's existing website was copied. Each concept appears in exactly one photo slot across the portfolio and project-detail pages. Every one must be replaced with rights-cleared, project-specific photography before public launch.

| WebP asset | Used once at | Replace with |
| --- | --- | --- |
| `concept-exterior.webp` | Portfolio hero | A rights-cleared photograph of a Steven West custom home selected for the hero |
| `concept-sterling-card.webp` | Sterling Hall portfolio card | Sterling Hall exterior photograph |
| `concept-holiday-card.webp` | Atlanta Holiday House portfolio card | Atlanta Holiday House exterior photograph |
| `concept-christmas-card.webp` | 2007 Christmas House portfolio card | 2007 Christmas House exterior photograph |
| `concept-reveal.webp` | Scroll-expanding editorial section between portfolio and Holiday House story | A distinct rights-cleared Steven West project photograph suited to both card and full-screen crops |
| `concept-kitchen.webp` | Holiday House story collage, panel 1 | Holiday House kitchen photograph |
| `concept-staircase.webp` | Holiday House story collage, panel 2 | Holiday House staircase or other documented interior photograph |
| `concept-living-room.webp` | Holiday House story collage, panel 3 | Holiday House living room or other documented interior photograph |
| `concept-sterling-detail.webp` | Sterling Hall detail hero | Sterling Hall hero photograph, different from the card |
| `concept-holiday-detail.webp` | Holiday House detail hero | Holiday House hero photograph, different from the card and story images |
| `concept-christmas-detail.webp` | Christmas House detail hero | Christmas House hero photograph, different from the card |

The three recent-project cards and their detail heroes use CSS illustrations with explicit `Photography pending` labels. The portrait, additional testimonials, and all 12 gallery slots on each detail page are also visible placeholders without photographic assets. These need client-supplied material. Update alt text and captions when the real photographs are added.

## Source of the illustrative concepts

The original PNGs are in `source-images/`; the optimized WebPs used by the site are in `dist/assets/`. All eleven were generated with the built-in ImageGen tool for this design exploration, with instructions to avoid real project identity, people, logos, text and watermarks.

| Asset | Prompt summary |
| --- | --- |
| `concept-exterior` | Warm contemporary-classical pale limestone and brick residence among mature trees, late afternoon, wide editorial composition. |
| `concept-staircase` | Sculptural curved pale-stone staircase with dark oak handrail and soft daylight, vertical editorial composition. |
| `concept-living-room` | Plaster arches, limestone fireplace, dark timber, linen furnishings and natural daylight, wide interior composition. |
| `concept-kitchen` | Warm white millwork, honed marble island, aged brass and dark oak flooring, wide interior composition. |
| `concept-sterling-card` | Distinct pale-stone Atlanta estate exterior with formal landscape, editorial card composition. |
| `concept-holiday-card` | Distinct brick Atlanta residence exterior at dusk with warm interior lights, editorial card composition. |
| `concept-christmas-card` | Distinct cream-masonry Atlanta residence exterior with restrained landscape, editorial card composition. |
| `concept-sterling-detail` | Formal salon interior with stone, plaster and tailored furniture, wide detail-hero composition. |
| `concept-holiday-detail` | Large entrance hall with refined architectural detail and warm natural light, wide detail-hero composition. |
| `concept-christmas-detail` | Residential library with wood joinery and warm seating, wide detail-hero composition. |
| `concept-reveal` | View from a shaded stone terrace toward a warm custom residence and courtyard, wide composition with darker space for overlaid text. |

`scripts/optimize_images.py` creates the WebPs from the PNG sources. The CSS placeholder artwork is built in `dist/styles.css` and has no photo source.
