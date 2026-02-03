# Cinematic Menu — GSAP Image Reveal Navigation (Vanilla JS)

A minimal, high-end navigation concept demonstrating image reveal previews using GSAP in a small, dependency-light vanilla JS project.

## Demo

Open `index.html` in a development server (see Installation). Hover navigation items to reveal a fixed preview image; a vertical scroll progress bar shows page position.

## Features

- GSAP-powered animated image preview on navigation hover
- CSS-only text reveal effect with fluid typography
- Responsive behavior with CSS logical properties
- Tiny, dependency-light setup (uses Vite for dev tooling)

## Quickstart

Prerequisites: Node.js and a package manager (pnpm recommended but npm/yarn work).

Installation:

```bash
pnpm install
```

Development (start dev server):

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

Preview built output:

```bash
pnpm run preview
```

Linting:

```bash
pnpm run lint
pnpm run lint:fix
```

## Project Structure

- `index.html` — demo page and navigation markup
- `src/styles/style.css` — main styles (fluid type, preview layout, responsive rules)
- `src/scripts/main.js` — vanilla JS that preloads images, handles hover reveal via GSAP, and updates the progress bar
- `src/assets/` — image assets referenced by `main.js` (expects `img-1.webp` ... `img-8.webp`)
- `package.json` — scripts and dependencies

## How it works (brief)

- On load, `main.js` preloads 8 images from `src/assets`.
- Hovering a `.navigation-item` expands the `.project-preview` element via GSAP animation; the preview image is switched based on the hovered item's class (e.g. `.navigation-link-3` -> `img-3.webp`).
- The vertical `.progressbar` height is updated on `scroll` to reflect document scroll progress.

## Customization

- Replace images in `src/assets/` following the `img-N.webp` naming pattern.
- Adjust preview size by editing the GSAP `width` in `src/scripts/main.js` and the `.project-preview` dimensions in `src/styles/style.css`.
- Swap fonts by editing the `<link>` in `index.html` and the `--font-main` CSS variable.

## Scripts (from `package.json`)

- `dev` — start Vite dev server
- `build` — build production bundle
- `preview` — locally preview production build
- `lint` / `lint:fix` — run ESLint

## Contributing

PRs welcome for bug fixes, accessibility improvements, and enhancements. Keep changes minimal and focused.

## License

This repository does not include an explicit license file. Add a `LICENSE` to indicate terms for reuse.

---
