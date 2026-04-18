# GEO Technical SEO Audit — peptidesmaxxing.com
Date: 2026-04-17 (post-fix re-audit)

## Technical Score: 93/100 (Excellent)

Previous audit (earlier the same day): **82/100 (Good)** — eleven-point improvement after deploying the fixes described in GEO-AUDIT-REPORT.md.

## Score Breakdown

| Category | Score | Status | Δ vs. previous |
|---|---|---|---|
| Crawlability | 15/15 | Pass | +2 |
| Indexability | 12/12 | Pass | +1 |
| Security | 9/10 | Pass | +3 |
| URL Structure | 7/8 | Pass | 0 |
| Mobile Optimization | 10/10 | Pass | 0 |
| Core Web Vitals | 12/15 | Pass | 0 |
| Server-Side Rendering | 15/15 | Pass | 0 |
| Page Speed & Server | 13/15 | Pass | +5 |

Status thresholds: Pass ≥80%, Warn 50–79%, Fail <50%.

---

## AI Crawler Access

Verified live with HTTP GET using each user-agent string — every major AI crawler returns HTTP 200.

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | ✅ Allowed (200) | Keep |
| ClaudeBot | ClaudeBot | ✅ Allowed (200) | Keep |
| PerplexityBot | PerplexityBot | ✅ Allowed (200) | Keep |
| Google-Extended | Google-Extended | ✅ Allowed (200) | Keep — drives AI Overviews |
| Googlebot | Googlebot | ✅ Allowed | Keep |
| Bingbot | bingbot | ✅ Allowed | IndexNow now wired — new URLs can be pushed |
| CCBot | CCBot | ✅ Allowed (200) | Keep |
| Amazonbot | Amazonbot | ✅ Allowed | Keep |
| FacebookBot | FacebookExternalHit | ✅ Allowed | Keep |
| Bytespider | Bytespider | ✅ Allowed | Keep |
| Applebot-Extended | Applebot-Extended | ✅ Allowed | Keep |

---

## Critical Issues

**None.**

## Warnings

**None.** (All previous warnings — missing `llms.txt`, security headers, IndexNow — are resolved and live.)

## Recommendations (Optimize This Quarter)

### R1. Add a Content-Security-Policy header (–1 point, Security 9→10)
The remaining gap. Next.js + Vercel + GA + Vercel Analytics need a CSP like:

```
default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://phiogen.is https://www.peptidesmaxxing.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.vercel-insights.com https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self';
```

Test in Report-Only mode first (`Content-Security-Policy-Report-Only`) for 1–2 weeks before enforcing.

### R2. Confirm Core Web Vitals with field data (–3 points pending, CWV 12→15)
Lab estimates look good — SSG, WebP/AVIF, priority hero, 117ms TTFB — but CrUX field data is the ranking signal. Enable Vercel Speed Insights dashboards and check `/`, `/products/bpc-157-10mg`, `/blog/bpc-157-complete-guide` after 28 days of traffic.

### R3. Measure JS bundle size (–2 points pending, Page Speed 13→15)
Run `npx next build` with `@next/bundle-analyzer` once; if per-route first-load JS is under 200 KB compressed, the last two points are yours.

### R4. Dual-routing canonical ambiguity (–1 point, URL Structure 7→8)
`/fat-loss` and `/categories/weight-loss` both return 200. They have different content today, but the shortcut routes (`/fat-loss`, `/recovery`, `/anti-aging`, `/cognitive`, `/muscle-growth`) live alongside the `/categories/*` family. Pick one as the canonical home for each concept and point the other's `rel="canonical"` at it — or document in `llms.txt` that the shortcut routes are editorial landing pages and the `/categories/*` URLs are catalog filters.

---

## Detailed Findings

### Crawlability (15/15) — was 13/15
- ✅ robots.txt valid, sitemap referenced, `/out/` and `/api/` correctly disallowed
- ✅ All AI crawlers allowed — verified live with per-UA curl tests
- ✅ sitemap.xml returns 218 URLs (added `/editorial-standards` and `/authors/peptidesmaxxing-editorial`); all `lastmod` dates set to 2026-04-12 or 2026-04-17
- ✅ All key content reachable within 3 clicks from homepage
- ✅ **New:** `/llms.txt` now live at 200, pointing AI crawlers at the highest-value pages and the citation-preference section

### Indexability (12/12) — was 11/12
- ✅ Every page has a self-referencing canonical (verified on `/`, `/about`, `/products/bpc-157-10mg`, `/blog/bpc-157-complete-guide`, `/guides/peptide-storage-reconstitution-guide`, `/editorial-standards`, `/authors/peptidesmaxxing-editorial`)
- ✅ www canonicalization enforced via 301 from apex
- ✅ **New:** `/out/*` now returns `X-Robots-Tag: noindex, nofollow` — affiliate redirects can no longer accidentally get indexed
- ✅ Pagination N/A (grids fit on single pages)
- ✅ Hreflang N/A (single-language)

### Security (9/10) — was 6/10
- ✅ HTTPS enforced, valid Vercel cert, no mixed content
- ✅ HSTS (`max-age=63072000`, preload-eligible)
- ✅ **New:** `X-Content-Type-Options: nosniff` — deployed and confirmed live
- ✅ **New:** `X-Frame-Options: SAMEORIGIN` — deployed and confirmed live
- ✅ **New:** `Referrer-Policy: strict-origin-when-cross-origin` — deployed and confirmed live
- ✅ **New:** `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()` — deployed and confirmed live
- ❌ `Content-Security-Policy` — still missing (see R1)

### URL Structure (7/8) — unchanged
- ✅ Clean, lowercase, hyphenated
- ✅ Logical hierarchy
- ✅ Single 301 apex→www
- ⚠️ –1 for dual routing without documented canonical relationship (see R4)

### Mobile Optimization (10/10) — unchanged
- ✅ Viewport meta present everywhere
- ✅ Fully responsive Tailwind
- ✅ `next/font/google` for Inter + Syne with `display: swap`
- ✅ Tap targets ≥48px

### Core Web Vitals (12/15) — unchanged
Lab estimates:
- **LCP:** Hero image uses `next/image` with `priority`. Estimated <1.5s on 4G.
- **INP:** Minimal client JS (SSG prerendered). Estimated <150ms.
- **CLS:** `next/image fill` with aspect-ratio containers. Estimated <0.05.

Cap held at 12 until CrUX confirms (see R2).

### Server-Side Rendering (15/15) — unchanged
- ✅ `x-nextjs-prerender: 1` on every route
- ✅ Full content, schema, nav, and links in raw HTML before any JS executes
- ✅ 113 internal links visible in raw homepage HTML
- ✅ **Post-fix schema inventory**: blog posts now expose **Person + SpeakableSpecification + Article + BreadcrumbList + WebPage + ImageObject + Organization**; guides expose all of the above plus **HowTo + HowToStep + HowToSupply + HowToTool**; `/about` now surfaces a named **Person** entity alongside Organization.

### Page Speed & Server Performance (13/15) — was 8/15
Live measurement from this audit:

| Metric | Value | Target | Δ |
|---|---|---|---|
| TTFB | **117ms** | <800ms | ↓ from 215ms |
| Full transfer | 167ms | — | ↓ from 260ms |
| HTML size | 285 KB | <500 KB | unchanged |
| Compression | Brotli | gzip+ | ✅ confirmed |
| Cache | `x-vercel-cache: HIT` | edge HIT | ✅ |
| HTTP | HTTP/2 | HTTP/2+ | ✅ |
| Image format | WebP/AVIF negotiated via Accept | WebP/AVIF | ✅ (per `next.config.ts`) |

–2 held back pending explicit per-route JS bundle measurement (see R3).

---

## What Changed Since the Last Audit

Every change listed here is **live on production** as of this re-audit (2026-04-17).

| Fix | Evidence |
|---|---|
| `llms.txt` published | GET `/llms.txt` → 200, content confirmed |
| Security headers | `curl -I` confirms `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` all present |
| `X-Robots-Tag: noindex, nofollow` on `/out/*` | GET `/out/bpc-157-10mg` returns header |
| IndexNow | `/8876bd26540e4653f86a090273df54d1.txt` → 200; `/.well-known/indexnow-key.txt` → 200; `/api/indexnow` route live |
| Named author `Person` schema | Blog posts + guides now include `"@type":"Person"` in their Article JSON-LD |
| Author bio page | `/authors/peptidesmaxxing-editorial` → 200, Person schema with credentials + jobTitle |
| Editorial standards page | `/editorial-standards` → 200, AboutPage + Person schema |
| About page editor-in-chief card | `/about` JSON-LD now includes Person + Organization with `founder` and `publishingPrinciples` |
| `speakable` cssSelector | Article schema on every blog/guide now includes `"speakable"` pointing at `.article-headline` + `.article-summary` |
| Visible "Updated" date | Byline renders both `Published` and `Updated` `<time>` elements when they differ |
| HowTo schema | `/guides/peptide-storage-reconstitution-guide` and `/guides/peptide-purity-testing-guide` emit HowTo + HowToStep JSON-LD |
| Sitemap updated | Includes new `/editorial-standards` and `/authors/peptidesmaxxing-editorial` entries |

## Summary

Technically the site is now in the top tier. The remaining 7 points are distributed across:
- CSP header (1 pt)
- Field-data confirmation of Core Web Vitals (3 pts)
- Measured JS bundle size (2 pts)
- Dual-routing canonical cleanup (1 pt)

None of these affects day-one GEO visibility. The high-impact technical work is done.
