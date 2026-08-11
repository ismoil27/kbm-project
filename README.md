# KBM — Korea Building Materials

Marketing site for **Korea Building Materials (KBM)**, a South Korean manufacturer of
fire-resistant insulated sandwich panels for industrial roofing and wall systems.

Single-page React app, fully responsive, available in **English and Russian**.

**Live:** https://kbm-project-gguh9tsri-abduraimovismoilmailrus-projects.vercel.app

---

## Requirements

| Tool | Version |
| --- | --- |
| Node.js | **>= 22.12.0** (see `.nvmrc`) |
| Yarn | 1.x (this project uses `yarn.lock`) |

Node 22 is a hard requirement — Vite 8 will not run on Node 18.

```bash
nvm use          # picks up .nvmrc
```

## Getting started

```bash
yarn install
yarn dev         # http://localhost:5173
```

| Script | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server with HMR |
| `yarn build` | Production build into `dist/` |
| `yarn preview` | Serve the built `dist/` locally |

> Use **yarn**, not npm. Mixing the two produces a `package-lock.json` and
> unsynchronized lock files.

## Tech stack

- **React 19** + **React Router 7**
- **Vite 8** (`@vitejs/plugin-react`)
- **Tailwind CSS 3.4** — design tokens in `tailwind.config.cjs`
- **Heroicons** for iconography
- No component library — every UI piece is local to this repo

---

## Project structure

```
src/
├─ App.jsx                 # Routes, navbar/footer shell, scroll behaviour
├─ routes.jsx              # Route table (products use a single :slug route)
├─ main.jsx                # Entry — mounts LanguageProvider
├─ i18n/
│  ├─ index.jsx            # LanguageProvider + useLang() hook
│  └─ translations.js      # ALL site copy, EN + RU
├─ data/
│  ├─ site.js              # Company contact details (single source of truth)
│  └─ products-data.js     # Product slugs, paths, image paths (no copy)
├─ hooks/
│  └─ use-in-view.js       # IntersectionObserver helper
├─ pages/                  # home, about-us, projects, contact, product
└─ widgets/
   ├─ layout/              # navbar, footer
   └─ ui/                  # Reveal, Counter, Lightbox, HeroSlider, Marquee,
                           # PageHero, SectionHeading, scroll tools
```

### Key conventions

**All copy lives in `src/i18n/translations.js`.** Components contain no hardcoded
user-facing strings. Product and project files hold only slugs, paths and image
references; their text is looked up by the same key in the translations file.

**Contact details live in `src/data/site.js`** — phone, email, logo. Change them
in one place and the navbar, footer and contact page all follow.

---

## Editing content

### Text and translations

Edit `src/i18n/translations.js`. It has two top-level keys, `en` and `ru`, with
identical shapes:

```js
export const translations = {
  en: { nav: {...}, home: {...}, products: { "eps-panel": {...} } },
  ru: { nav: {...}, home: {...}, products: { "eps-panel": {...} } },
};
```

If you add a string, **add it to both languages** — a missing key renders
`undefined` rather than falling back.

Language selection defaults to English, is switched from the header, and persists
in `localStorage` under `kbm-lang`. It also sets `<html lang>`.

### Products

1. Add an entry to `src/data/products-data.js` (slug, path, hero, cover, gallery).
2. Add matching copy under `products["<slug>"]` in **both** languages.

The route, navbar dropdown, footer list, product page and chip switcher are all
generated from that data — no other files need touching.

### Projects

Metadata in `src/pages/projects.jsx` (`projectMeta`), copy under
`projects.items.<key>` in translations.

### Images

- Page heroes: `public/img/heroes/`
- Product spec sheets: `public/roofPics/<product>/`
- Project photos: `public/roofPics/projects/`

---

## Design system

Tokens are defined in `tailwind.config.cjs`:

- `ink` — near-black navy, used for dark sections and text
- `brand` — KBM red/orange accent (`brand-500` is the primary)
- `steel` — neutral grey scale for body copy and borders
- Fonts: `font-display` (Plus Jakarta Sans) for headings, `font-sans` (Inter) for body

Reusable classes live in `index.css` under `@layer components`: `.shell`
(page container), `.eyebrow`, `.heading-lg`, `.lede`, `.reveal`.

### ⚠️ Tailwind opacity modifiers

Tailwind 3's default opacity scale is **not** every multiple of 5. Valid values:

```
0 5 10 20 25 30 40 50 60 70 75 80 90 95 100
```

`15, 35, 45, 55, 65, 85` and arbitrary values like `92` are **not generated** —
a class such as `from-ink/92` silently compiles to *nothing*, which previously
caused hero overlays to disappear entirely. Stick to the list above, or use
bracket syntax (`bg-ink/[0.92]`) if you truly need another value.

### Accessibility / motion

Animations respect `prefers-reduced-motion`: scroll reveals resolve to visible,
the hero slider stops auto-advancing, and counters jump to their final value.

---

## Deployment (Vercel)

The site is a SPA; `vercel.json` rewrites all paths to `/` so deep links like
`/products/eps-panel` resolve client-side.

```bash
npx vercel login
npx vercel --prod
```

### Troubleshooting

**`Error: If defined, the Root Directory must be a relative path…`**
Caused by a *repository-scoped* link — a `.vercel/repo.json` containing
`"directory": "."`, which Vercel rejects as a Root Directory. Fix by replacing it
with a normal single-project link, `.vercel/project.json`:

```json
{ "projectId": "…", "orgId": "…" }
```

Then delete `repo.json`. (`.vercel/` is gitignored — never commit it.)

**`EPERM: operation not permitted, unlink … esbuild.exe`** (Windows)
A running dev server is holding the binary. Stop `yarn dev`, then:

```powershell
Get-Process esbuild | Stop-Process -Force
```

---

## Known limitations

- **The contact form does not send anything.** It validates input and shows a
  success state, but has no backend. Wire it to Formspree, EmailJS or an API
  route before relying on it.
- **Russian headings fall back to Inter.** Plus Jakarta Sans has no Cyrillic
  subset. The fallback is automatic and visually consistent; swap the display
  font if you want one typeface across both languages.
- **Tailwind 4 not adopted.** v4 replaces the JS config with CSS-first `@theme`
  and changes the PostCSS package — a deliberate follow-up rather than a bump.
- **`dist/` is committed.** Vercel builds from source, so this is redundant. To
  clean up: `git rm -r --cached dist` and add `dist` to `.gitignore`.
