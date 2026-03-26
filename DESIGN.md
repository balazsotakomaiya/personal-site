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

Sticky frosted-glass bar:

```css
position: sticky;
top: 0;
z-index: 100;
background: rgba(10, 10, 10, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--border);
```

- Logo: Instrument Serif italic, cycles between "Balazs" and "Otakomaiya" with slide animation (4s interval)
- Nav links: Geist Mono, 12px, uppercase, `text-secondary` -> `text-primary` on hover
- GitHub button: pill with border, subtle hover background `white/3%`

---

## Cards

```css
background: var(--bg-subtle);
border: 1px solid var(--border);
border-radius: 12px (rounded-xl);
padding: 16px;
transition: border-color on hover -> var(--border-hover);
```

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
