# Personal Site — Design Language

> This is a living document. It evolves alongside the site and should be updated as design decisions change.

A reference for replicating or extending the site's visual identity. Sourced from `app/global.css`, `app/layout.tsx`, and component files.

---

## Fonts

Loaded via `next/font` (Geist Sans, Geist Mono, Instrument Serif, Syne):

| Role | Family | Weight | Variable | Notes |
|---|---|---|---|---|
| Body / UI | Geist Sans | 400–700 | `--font-geist-sans` | Default sans-serif |
| Code / mono | Geist Mono | 400–700 | `--font-geist-mono` | Labels, eyebrows, tags |
| Serif accent | Instrument Serif | 400 italic | `--font-serif` | Name in hero & nav, decorative `x` symbols |
| Display / logo | Syne | 700 | `--font-display` | Footer wordmark ("my den") |

---

## Color Palette

Dark theme only. No light mode.

```css
/* Backgrounds */
--bg:          #0a0a0a;   /* page background */
--bg-subtle:   #111;      /* cards, alternate sections */
--bg-elevated: #161616;   /* raised surfaces, active tabs */

/* Borders */
--border:       #1e1e1e;  /* default */
--border-hover: #2a2a2a;  /* hover state */

/* Rulers */
--ruler: #1a1a1a;         /* dotted ruler lines */

/* Text */
--text-primary:   #ededed;  /* headings, emphasis */
--text-secondary: #888;     /* body, descriptions */
--text-tertiary:  #555;     /* labels, placeholders */
```

Selection: `rgba(255, 255, 255, 0.15)` background.

One-off semantic colors (not via CSS variables):

| Use | Value |
|---|---|
| "Current" career dot | `emerald-500` (Tailwind), pulsing |
| Shipped project dot | `emerald-500` |
| Building project dot | `amber-400` |
| OSS badge border/text | `emerald-800/50`, `emerald-400/80` |
| Toy badge border/text | `amber-800/50`, `amber-400/80` |

---

## Spacing & Layout

```css
--content-width: 680px;
--page-padding:  32px;    /* mobile: 20px */
--radius:        8px;
--radius-lg:     12px;
```

| Token | Value |
|---|---|
| Main content max-width | `680px` centered |
| Page horizontal padding | `32px` (mobile: `20px`) |
| Section divider margin | `48px 0` (mobile: `32px 0`) |
| Eyebrow margin-bottom | `12px` |

---

## Typography Scale

### Hero title
```
font-size: clamp(32px, 5vw, 48px)
line-height: 1.15
letter-spacing: tight (Tailwind)
```

### Eyebrow labels
```css
font-family: var(--font-geist-mono);
font-size: 11px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 1.5px;
color: var(--text-tertiary);
```

### Body / description
```
font-size: 15px
line-height: relaxed (Tailwind)
color: var(--text-secondary)
```

### Small tags / tech pills
```
font-family: var(--font-geist-mono)
font-size: 10px
```

### Social links
```
font-family: var(--font-geist-mono)
font-size: 11px
text-transform: uppercase
letter-spacing: wider (Tailwind)
```

---

## Ruler Overlay

The structural motif: dashed vertical + horizontal rulers forming a blueprint grid.

- **Vertical rulers** — fixed, 1px wide, dashed (`1px dash, 4px gap`), positioned at content column edges
- **Horizontal rulers** — fixed at top and bottom of viewport, same dash pattern
- **Section dividers** — full-viewport-width horizontal dashed lines between sections
- All rulers: `position: fixed`, `pointer-events: none`, `z-index: 50`
- Vertical rulers hidden on mobile (`max-width: 640px`)

---

## Navigation

Floating glass capsule (`.nav-capsule`), sticky with a 12–16px top inset, max-width 712px:

```css
border-radius: 999px;
border: 1px solid rgba(255, 255, 255, 0.08);
background: rgba(16, 16, 16, 0.72);
backdrop-filter: blur(14px) saturate(120%);
```

- Brand: "Balazs Otakomaiya" in Geist 14px/500, one colour (`text-primary`); surname hidden under 420px. No logo/avatar.
- Links (`.nav-link`): 13px/500 pills; active route gets `white/7%` fill (client component, `usePathname`)
- GitHub: 32px round icon button after a hairline divider
- Reading mode (posts with 2+ `h2`s): once you reach the first section, the brand cross-fades to `02 / 05 · Section title` and the links to a progress ring + `N min left`. The section opens a contents list (`.nav-toc`) that jumps to headings; Escape / outside click / scroll closes it.

---

## Section Heads

`<SectionHead index="01" title="Writing" meta="3 posts" />` — mono index, 20px/600 title, dashed ruler filling the gap, mono uppercase meta on the right.

---

## Hero Extras

- **Chip links** (`.chip-link`): bordered pills with a `↗` that nudges up-right on hover

---

## Lists

- **Post rows** (`.post-row`): full-bleed hover fill, title nudges right, date slides left to reveal a `→`
- **Career rows** (`.career-row`): `120px | 1fr` grid — mono period left; company, role, description, tags right. Stacks on mobile.

---

## Footer Wordmark

Oversized Syne 700 "my den" (`.footer-wordmark`), `#171717`, full-bleed, cropped at the page bottom.

---

## Texture

- **Film grain** — `--grain` token (SVG `feTurbulence` tile). Page-wide `.grain-overlay` sits fixed *under* content (`z-index: 0`, opacity 0.06) so text stays crisp. Photos are never grained or filtered beyond the portrait's existing treatment.

---

## Cards

```css
background: var(--bg-subtle);
border: 1px solid var(--border);
border-radius: 12px (rounded-xl);
padding: 16px;
transition: border-color on hover -> var(--border-hover);
```

Project cards use `.spot-card`: a soft white radial spotlight that follows the cursor (`--mx`/`--my` set on mousemove).

---

## Project Status

| Status | Dot color | Label |
|---|---|---|
| Shipped | `emerald-500` (green) | "Shipped" |
| Building | `amber-400` (orange) | "Building" |
| Planned | `var(--text-tertiary)` (grey) | "Planned" |

---

## Footer

- Wordmark: Syne 700, 15px, `text-tertiary`
- Links: 13px, `text-tertiary`, separated by middot
- Credit: "Made by" + Instrument Serif italic name link

---

## Prose / Blog

- Links: underline with `text-tertiary` decoration, hover -> `text-secondary`
- Headings: `text-primary`, tight letter-spacing, weight 600
- Body paragraphs: `text-secondary`, `line-height: 1.7`
- Code blocks: `bg-subtle`, `border`, `radius`, Geist Mono 13px
- Inline code: same font, `bg-subtle` background with border

---

## Transitions

All interactive transitions:
- Color / border: `0.15s`
- Background: `0.2s`
- Opacity: `0.15s` (Tailwind `transition-opacity`)

---

## Responsive

| Breakpoint | Changes |
|---|---|
| `<= 640px` | Page padding shrinks to 20px, section divider margin to 32px, vertical rulers hidden |
| `sm:` (640px+) | Project grid goes to 2 columns |
