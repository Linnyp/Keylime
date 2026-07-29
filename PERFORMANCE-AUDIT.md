# KeyLime — Page Speed Audit

**Date:** 2026-07-28
**Branch:** `keylime-lime-palette-refresh`
**Method:** production build (`next build`, Next 15.5.15), emitted HTML/CSS/JS chunk analysis, static asset inventory, source review of client components and animation loops.
**Not measured:** live Lighthouse/field data — no deployed URL was available. All numbers below are from build output and file inspection, which is enough to rank the work but not to state before/after Core Web Vitals scores.

---

## Executive summary

The site has two independent, severe problems, both on the homepage:

1. **~7.6 MB of unoptimized PNGs are `<link rel="preload" as="image">`'d in the homepage `<head>`** — all at high priority, all competing with the LCP element. This is the single biggest issue and it is not obvious from the source, because React 19 generates those preloads automatically from eager `<img>` tags.
2. **The hero renders a `three.js` + `postprocessing` WebGL canvas**, which adds a **116 KB gzipped** JS chunk to first load (310 kB First Load JS vs. 102 kB on every other page) and runs a full-screen fragment shader at 60fps behind the hero from the first paint.

Total `public/` weight is **56 MB across 67 files**, 59 of which are PNGs — including 2000–2700px source images used at ~300px, and 5 unreferenced multi-megabyte files.

Everything else is comparatively minor.

---

## Priority list

### P0 — Do these first

---

#### 1. Stop preloading 7.6 MB of images on the homepage

**Impact: very high. Effort: low.**

The built homepage HTML (`.next/server/app/index.html`) contains 14 `<link rel="preload" as="image">` tags:

| Size | Asset |
|---|---|
| 2518 KB | `jugglingPain.png` |
| 1347 KB | `websiteIcon.png` |
| 763 KB | `seoIcon.png` |
| 731 KB | `heroiphone.png` |
| 690 KB | `reputationIcon.png` |
| 660 KB | `adsIcon.png` |
| 370 KB | `proteus.png` |
| 125 KB | `tarponSunset 1.png` |
| 94 KB | `chatbotIcon.png` |
| 67 KB | `vytasHeadshot.jpg` |
| 48 KB | `logos/fourleafLogoNoTitle.png` |
| 10 KB | `keylimelogolite.png` |
| 8 KB | `logos/veronacabinet.png` |
| 3 KB | `logos/ordx-logo-light.webp` |
| **7.6 MB** | **total** |

**Why it happens:** React 19 emits a preload for every `<img>` rendered during SSR that does not carry `loading="lazy"`. Only one `<img>` in the entire codebase has `loading="lazy"` (`grep` count: 1 of 15). So service icons, testimonial headshots, and client logos that live thousands of pixels below the fold are all fetched at high priority before the hero finishes.

**Fix:**
- Add `loading="lazy"` + `decoding="async"` to every below-the-fold `<img>`. Concretely: `components/Services/ServicesSection.tsx:100`, `components/Services/ServicesTabs.tsx:119,157`, `components/Results/TestimonialCard.tsx:13,40`, `components/HowItWorks/HowItWorksSection.tsx:35`, `components/Systems/WhoItFitsSection.tsx:29`, `components/shared/icons.tsx:56`, `components/LogoLoop.jsx:244`, `components/Footer.tsx:24`.
- Keep eager loading only for the genuine LCP candidate (`heroiphone.png`) and the nav logo, and give the hero image `fetchPriority="high"`.

This alone should move the homepage from "several seconds of image contention" to a normal loading curve, before a single byte is re-encoded.

---

#### 2. Re-encode and resize the image library

**Impact: very high. Effort: medium (mechanical).**

`public/` is 56 MB. The source images are far larger than any rendered size:

| Actual file | Intrinsic size | Rendered at (approx) |
|---|---|---|
| `keylimerow.png` 3877 KB | 2752 × 1536 | decorative band |
| `heroIllustration.png` 3357 KB | 1568 × 2270 | **0 references — dead** |
| `keylimefullrow.png` 2752 KB | 2752 × 1536 | decorative band |
| `keylimehalfrow.png` 2567 KB | 2752 × 1536 | decorative band |
| `jugglingPain.png` 2518 KB | 2668 × 1892 | max 380–400px wide |
| `climbingIllustration.png` 2148 KB | 1974 × 1411 | **0 references — dead** |
| `keylimehalf.png` 2105 KB | 1482 × 1446 | decorative |
| `painPointJuggling.png` 2025 KB | 2400 × 1792 | **0 references — dead** |
| `jugglingPain3.png` 1753 KB | 2668 × 1892 | **0 references — dead** |
| `jugglingPain2.png` 1536 KB | 1024 × 1024 | **0 references — dead** |
| `websiteIcon.png` 1347 KB | 1091 × 960 | ~120px icon |
| `heroiphone.png` 731 KB | 554 × 1147 | ~268px wide |
| `seoIcon.png` 763 KB | 756 × 836 | ~120px icon |
| `background/keylimeLong.jpg` 3.6 MB | — | blurred parallax backdrop |
| `swfl-landscape.jpg` 4.6 MB | — | 1 reference |

Actions, in order:

1. **Delete the 5 unreferenced files** (`heroIllustration.png`, `climbingIllustration.png`, `painPointJuggling.png`, `jugglingPain3.png`, `jugglingPain2.png`, plus `puzzleBg.jpg` 952 KB and `puppetHandsAnimation.mp4` 3.3 MB — also 0 references). **≈ 14 MB removed** with zero visual change.
2. **Resize everything to at most 2× its largest rendered CSS width.** The icon set (`websiteIcon`, `seoIcon`, `adsIcon`, `reputationIcon`, `adIcons/*`, `icons/*`) renders at ~120px and should be ≤ 256px wide, not 1091px.
3. **Convert to WebP (or AVIF).** These are flat illustrations and screenshots — exactly the content type where WebP beats PNG by 85–95%. `websiteIcon.png` at 1347 KB should land near 15–25 KB.
4. **`background/keylimeLong.jpg` (3.6 MB)** is rendered behind `backdrop-blur-md` at `scale(1.35)` in `ParallaxBackground.tsx:63`. It is *visibly blurred* — ship it at 1/4 resolution and high JPEG compression. Nobody can tell. ~3.5 MB saved.

Realistic target: **56 MB → under 4 MB**.

---

#### 3. Defer or drop the WebGL hero background

**Impact: high. Effort: low to medium (depends on design appetite).**

`components/Hero/HeroSection.tsx:18` renders `<PixelBlast>`, which imports `three` and `postprocessing` (`components/PixelBlast.jsx:4-5`). Build evidence:

```
/          2.04 kB   310 kB First Load JS
/about     766 B     106 kB First Load JS
```

The delta is chunk `b536a0f1-*.js`: **480 KB raw / 116 KB gzipped**, loaded on `/` (and on `/test`, `/test2`, `/test3`).

Beyond download size, this is a full-screen fragment shader with `EffectComposer` post-processing running a `requestAnimationFrame` loop from mount, during the exact window when the browser should be laying out and painting the hero. `PixelBlast.jsx` does clamp DPR to 2 (`:372`), which is good, but there is **no `IntersectionObserver` gate, no `visibilitychange` pause, and no `prefers-reduced-motion` check** — it keeps rendering when scrolled past and when the tab is backgrounded.

Options, best first:

- **(a) Replace it with a static asset.** The effect is a subtle `#E4E8DA` pixel texture on a `bg-sand-50` hero. A small tiled PNG or a CSS gradient gets ~95% of the look for ~0 KB. This is the recommendation.
- **(b) Lazy-load it below the fold of the critical path:** `next/dynamic` with `ssr: false`, mounted from an `IntersectionObserver` or `requestIdleCallback` after hydration. Keeps the effect, removes 116 KB from First Load JS, but still costs GPU time once mounted.
- **(c) At minimum**, if it stays: gate the rAF loop on visibility and honor `prefers-reduced-motion`.

The same treatment applies to `RippleGrid` (`ogl`) in `components/FinalCta/FinalCtaSection.tsx:64` — it is a second WebGL context in the footer CTA, also with no visibility gating (`RippleGrid.jsx:218`). Two live WebGL contexts on one page is a real cost on mid-range mobile.

---

### P1 — Meaningful, low-risk

---

#### 4. Remove the unused Fraunces webfont

**Impact: medium. Effort: trivial (one line).**

`app/layout.tsx:7` loads Fraunces from Google Fonts and exposes `--font-fraunces`. But `app/globals.css` defines all three font roles as Inter:

```css
--font-display: "Inter", system-ui, sans-serif;
--font-body:    "Inter", system-ui, sans-serif;
--font-brand:   "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

`--font-fraunces` is referenced **nowhere** in `app/` or `components/`. The only mention of Fraunces outside `layout.tsx` is placeholder copy in `app/blog/[slug]/page.tsx:18`. The build emits 10 woff2 files in `.next/static/media/`; roughly half are Fraunces, preloaded on every route and never painted.

Fix: delete the `Fraunces` import and the `${fraunces.variable}` class. If the design later wants a serif display face, wire it to `--font-display` at that point.

---

#### 5. Use `next/image` instead of raw `<img>`

**Impact: medium. Effort: medium.**

15 raw `<img>` tags vs. 2 files using `next/image` (`components/Services/detail/IncludedGrid.tsx`, `components/Systems/SystemPage.tsx`). Raw `<img>` means: no automatic AVIF/WebP negotiation, no responsive `srcset`, no intrinsic `width`/`height` (so **every one is a CLS risk**), and no automatic lazy-loading.

Migrating the below-the-fold images to `next/image` solves #1, #2, and layout shift in one pass — the Netlify Next.js plugin (`netlify.toml`) supports the image optimizer. If you'd rather not adopt `next/image` in the JSX-heavy components, at minimum add explicit `width`/`height` attributes to every `<img>` to reserve space.

Note `components/LogoLoop.jsx:244` and `CardNav.jsx:178` are `.jsx` — those can keep raw `<img>` but still need `width`/`height` and `loading`.

---

#### 6. Fix scroll-handler layout thrash

**Impact: low-medium (INP / scroll smoothness). Effort: low.**

`components/Problem/ProblemSection.tsx:17-30` calls `getBoundingClientRect()` on **every** scroll event with no `requestAnimationFrame` throttle, then `setShowNavCover(...)` — a forced synchronous layout per scroll event, feeding a React state update. React bails out when the boolean is unchanged, so it's not a re-render storm, but the layout read is unthrottled.

Fix: wrap in the same `if (!raf) raf = requestAnimationFrame(update)` pattern already used correctly in `ParallaxBackground.tsx:43-45`, or replace the whole thing with an `IntersectionObserver` — the logic is "is this section crossing the navbar," which is exactly what IO is for.

Also: `jugglingPain.png` is rendered by **three separate `<img>` tags** in `ProblemSection.tsx` (lines 67, 101, 107) for different breakpoints. One network fetch, but up to three decodes and rasterizations of a 2668×1892 PNG. Consolidate to one `<img>` with responsive CSS, or `<picture>` with `media` sources.

---

### P2 — Cleanup and config

---

#### 7. Delete or exclude the `/test`, `/test2`, `/test3`, `/test-calculator` routes

`/test` (311 kB), `/test2` (311 kB), `/test3` (312 kB) and `/test-calculator` (151 kB) are statically generated into the production build. They pull the `three` chunk too. They don't slow down real users, but they are publicly crawlable, they inflate build time, and they'll end up in the sitemap. Delete them or move behind a dev-only guard.

---

#### 8. Add long-lived cache headers for static assets

`netlify.toml` has no `[[headers]]` block. The `@netlify/plugin-nextjs` plugin handles `/_next/static/*` correctly, but files served straight out of `public/` (which is where **all** the heavy imagery lives) get default caching. Add:

```toml
[[headers]]
  for = "/*.png"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

…and the same for `.jpg`, `.webp`, `.mp4`, `.svg`. Note `immutable` requires that you don't overwrite filenames in place — version the filename when an asset changes.

---

#### 9. Silence the workspace-root warning

The build emits:

```
⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
We detected multiple lockfiles and selected the directory of C:\Users\New User\package-lock.json
```

Next is tracing files from the wrong root, which bloats the serverless function bundles Netlify deploys and slows cold starts. Set `outputFileTracingRoot: __dirname` in `next.config.ts`, or remove the stray `C:\Users\New User\package-lock.json`.

---

#### 10. Minor: video and CSS

- `app/services/websites/HeroAnimation.tsx:31` loads `websiteAnimation.mp4` (2.0 MB) with `preload="metadata"` — that's already the right call. Consider a `poster` frame so there's something to show before playback, and re-encode to H.264 baseline + a WebM/AV1 source; 2 MB is high for a UI loop.
- CSS is healthy: 68 KB raw / **12 KB gzipped** for the main stylesheet. No action needed.
- Only one `backdrop-blur` in the codebase (`ParallaxBackground.tsx:66`) — fine, but note it's compositing over a 3.6 MB background image, so #2 helps here too.

---

## Expected outcome

| | Now | After P0 | After P0+P1 |
|---|---|---|---|
| Homepage First Load JS | 310 kB | ~194 kB | ~194 kB |
| Homepage high-priority image bytes | ~7.6 MB | ~150 KB | ~80 KB |
| `public/` total | 56 MB | ~4 MB | ~4 MB |
| Webfont files | 10 | 10 | ~5 |
| WebGL contexts on `/` | 2 | 0–1 | 0–1 |

P0 items 1–3 are where essentially all of the gain is. Item 1 in particular is a few `loading="lazy"` attributes and should be done today.

## Verifying

There is no measured before/after here — get a baseline before starting:

```bash
npx next build && npx next start
npx lighthouse http://localhost:3000 --preset=desktop --view
npx lighthouse http://localhost:3000 --view   # mobile, the one that matters
```

Re-run after P0. Watch LCP and TBT specifically; those are the two this work targets.
