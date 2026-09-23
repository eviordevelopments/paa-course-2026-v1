# PAA Course Landing Page

## Goal

Build one polished, responsive Spanish landing page that closely translates the ten supplied presentation slides into an interactive scrapbook-style website. The screenshots remain visual references only; illustrations and decoration will be recreated for the web.

## Page structure

1. **Hero** — lavender dotted backdrop, torn-paper centerpiece, taped photo motifs, doodles, handwritten accents, highlighted six-week promise, and enrollment CTA.
2. **Intentar vs. lograr** — two taped paper notes with chaos and staircase illustrations plus the colorful process strip.
3. **¿Este curso es para ti?** — corkboard field with three staggered polaroid illustrations and torn-paper conclusion.
4. **Todo en un lugar** — dotted paper and a responsive six-item illustrated feature grid.
5. **Preparación de seis semanas** — looping five-step workflow on larger screens and a connected vertical path on mobile.
6. **Grabaciones** — illustrated video player, sticky note, and emphasized reassurance copy.
7. **Coordenadas** — layered pastel cards for dates, schedule, and online format.
8. **Inversión** — scrapbook price tag with crossed-out regular price, special price, badge, and deposit tag.
9. **Cupo limitado** — animated 95% bar, lined-paper statement, and supplied group-program note.
10. **Final CTA** — midnight dotted sky, glowing stars, cinematic enrollment button, and transfer note.

## Visual system

- Use the supplied pastel palette as semantic design tokens, with an editorial serif, clean sans serif, and handwritten accent font.
- Recreate paper grain, dots, cork, notebook lines, torn edges, tape, stickers, arrows, stars, blobs, shadows, and marker strokes in CSS and lightweight SVG.
- Build original pastel educational illustrations from reusable SVG/icon compositions; no stock photography and no screenshot embedding.
- Preserve the references’ generous visual density, layered depth, and playful asymmetry without allowing text overlap.

## Interaction and accessibility

- Both enrollment buttons smoothly scroll to the investment/registration area; no checkout, form, backend, or stored data.
- Add restrained entrance, stagger, float, workflow, and progress animations with reduced-motion support.
- Provide visible keyboard focus, semantic sections and headings, descriptive labels, and accessible contrast.

## Responsive behavior

- Keep the slide-like wide composition on desktop.
- Reflow polaroids and comparison notes into single-column arrangements on narrow screens.
- Use a two-column or one-column feature grid based on available width.
- Convert the circular workflow into a vertical connected sequence on mobile.
- Scale or selectively reposition edge decorations while retaining the scrapbook identity and preventing horizontal overflow.

## Implementation and validation

- Split the page into focused reusable React components with editable content arrays.
- Replace the placeholder home page, extend the global token system, load selected fonts correctly, and add page-specific metadata.
- Verify the complete page at desktop and mobile sizes, comparing every section to its corresponding reference for typography, spacing, proportions, decoration, shadows, gradients, alignment, animations, and overflow.
