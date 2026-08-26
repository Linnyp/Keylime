# KeyLime

Next.js marketing site for Linax Digital, built with the Key Lime palette.

Extracted from the `landingPagePurgatory` workspace as a standalone, deployable repo.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript 5
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- GSAP, Framer Motion, OGL / three.js + postprocessing for the animated backgrounds
- `react-calendly` for inline booking

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint via `next lint` |
| `npm run type-check` | `tsc --noEmit` |

## Deploying

`netlify.toml` is configured to build from the repo root with
`@netlify/plugin-nextjs` on Node 20. Point Netlify at this repo and it will pick
that up with no further setup — the app reads no environment variables.

Vercel works out of the box too (delete `netlify.toml` if you go that route).

## Layout

- `app/` — App Router routes. Marketing pages plus `/systems/*`, `/services/*`,
  and a `/calculators/missed-call-revenue` tool.
- `components/` — Section components, grouped by the section they render.
- `data/` — Static content (pricing plans, FAQ items, services, testimonials).
- `types/` — Shared TypeScript types.
- `public/` — Images and icons.

`@/*` resolves to the repo root, so `@/components/Navbar` and friends work from
anywhere.

## Notes

- `app/test`, `app/test2`, `app/test3`, and `app/test-calculator` are palette and
  layout scratch routes. They ship in the build — remove them before going live
  if you don't want them public.
- `public/` carries both `.png` and `.webp` versions of several large images.
  Only the WebP variants are referenced; the PNGs can be dropped to cut repo size.
- See `PERFORMANCE-AUDIT.md` for outstanding performance work.
