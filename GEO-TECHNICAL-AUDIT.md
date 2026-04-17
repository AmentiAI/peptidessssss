# GEO Technical SEO Audit — peptidesmaxxing.com
Date: 2026-04-17

## Technical Score: 82/100 (Good)

## Score Breakdown

| Category | Score | Status |
|---|---|---|
| Crawlability | 13/15 | Pass |
| Indexability | 11/12 | Pass |
| Security | 6/10 | Warn |
| URL Structure | 7/8 | Pass |
| Mobile Optimization | 10/10 | Pass |
| Core Web Vitals | 12/15 | Pass |
| Server-Side Rendering | 15/15 | Pass |
| Page Speed & Server | 8/15 | Warn |

Status thresholds: Pass ≥80%, Warn 50–79%, Fail <50%.

---

## AI Crawler Access

robots.txt is a single `User-Agent: *` allow-all block with only `/out/` and `/api/` disallowed. Every AI crawler is permitted. Manual test with each UA returned HTTP 200 (after 301 to www).

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | ✅ Allowed (200) | Keep as-is |
| ClaudeBot | ClaudeBot | ✅ Allowed (200) | Keep as-is |
| PerplexityBot | PerplexityBot | ✅ Allowed (200) | Keep as-is |
| Google-Extended | Google-Extended | ✅ Allowed (200) | Keep allowed — drives AI Overviews presence |
| Googlebot | Googlebot | ✅ Allowed | Keep as-is |
| Bingbot | bingbot | ✅ Allowed | Implement IndexNow (see below) |
| CCBot | CCBot | ✅ Allowed (200) | Keep — used by many AI training pipelines |
| Amazonbot | Amazonbot | ✅ Allowed | Keep as-is |
| FacebookBot | FacebookExternalHit | ✅ Allowed | Keep as-is |
| Bytespider | Bytespider | ✅ Allowed | Keep as-is |
| Applebot-Extended | Applebot-Extended | ✅ Allowed | Keep as-is |

**No changes required to AI crawler access — this is the correct default for a content affiliate site trying to win AI citations.**

---

## Critical Issues (Fix Immediately)

**None.** No critical blockers — site is fully crawlable, indexable, and server-rendered.

---

## Warnings (Fix This Month)

### W1. No `llms.txt` file (Crawlability / GEO)
`https://www.peptidesmaxxing.com/llms.txt` returns 404. This is the emerging convention for telling AI systems what a site is and what to surface. Low effort, high GEO signal.

### W2. Missing security headers (Security)
The only security header served is `Strict-Transport-Security: max-age=63072000`. Missing:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (restrict camera, microphone, etc.)
- `Content-Security-Policy` (optional but a trust signal)

Fix in `next.config.ts` with a `headers()` export.

### W3. IndexNow not implemented (Page Speed / Discovery)
No `/.well-known/indexnow-key.txt` or root-level key file detected. IndexNow pings Bing + Yandex on publish. Since ChatGPT and Copilot both query Bing's index, this directly shortens the AI-visibility feedback loop.

### W4. No product `Review`/`AggregateRating` schema (Indexability of rich results)
Product schema is otherwise excellent (Product + Offer + Brand + FAQPage + BreadcrumbList all detected in raw HTML). Adding even a small `AggregateRating` block produces star-rating AI snippets. Requires real reviews — seed collection recommended before schema goes live to avoid policy violations.

### W5. Some CLS risk on product pages
Of 7 images on a sampled product page, only 2 had explicit `width`/`height` attributes. Next.js `<Image>` sets these automatically when used — check that all product/blog image usages go through `next/image`, not raw `<img>`.

---

## Recommendations (Optimize This Quarter)

### R1. Improve Page Speed findings

Current homepage metrics (measured 2026-04-17):

| Metric | Value | Target | Status |
|---|---|---|---|
| TTFB | 215ms | <800ms | ✅ Excellent |
| Full transfer | 260ms | — | ✅ Excellent |
| HTTP version | HTTP/2 | HTTP/2+ | ✅ |
| Compression | Brotli (`content-encoding: br`) | gzip or better | ✅ |
| Cache | Vercel edge `x-vercel-cache: HIT` (age 179,244s) | CDN HIT | ✅ |
| HSTS | `max-age=63072000` (2 years) | 1+ year | ✅ |
| Prerendered | `x-nextjs-prerender: 1` | SSR/SSG | ✅ |
| HTML size | 284 KB | <500 KB | ✅ |

**The 8/15 score for Page Speed & Server reflects uncertainty (no CrUX field data available), not observed problems.** Once Real User Metrics are flowing through Vercel Speed Insights the score will likely move to 13–14/15. To pre-empt issues:

- Confirm LCP element on homepage is the hero image and that it has `priority` set on `<Image>`.
- Confirm no third-party scripts are render-blocking (Google Analytics uses `strategy="afterInteractive"` — good).
- Run Lighthouse CI against `/`, `/products/bpc-157-10mg`, `/blog/bpc-157-complete-guide` and store the results.

### R2. IndexNow rollout plan
1. Generate a 32-char hex key
2. Serve it at `/<key>.txt` (Bing's convention) with the same content as the filename
3. On each build/deploy, POST new/updated URLs to `https://api.indexnow.org/indexnow`

### R3. URL structure observation (dual routing)
Both `/fat-loss` and `/categories/weight-loss` return 200. `/categories/fat-loss` returns 404. The shortcut routes in `/app/fat-loss/page.tsx`, `/app/recovery/page.tsx`, etc. coexist with the `/categories/[slug]` pattern. This is fine — and the sitemap uses the shortcut URLs — but document that `/categories/{same-name}` is the canonical home for each category so internal links don't split authority. Emit a canonical tag on the shortcut pages that points to the `/categories/...` equivalent, or vice-versa.

### R4. Hreflang
Not applicable — single-language site. Skip.

### R5. Pagination
Blog, products, categories, guides all rendered as a single grid. No pagination detected. Keep this until any archive exceeds ~100 items.

### R6. About/Editorial standards
From a technical point of view, every entity schema on the site currently resolves to `@type: Organization` with no named `Person`. Add an `author` `Person` entity with `sameAs` pointing to real social profiles. This is technical plumbing but moves the needle for E-E-A-T scoring.

---

## Detailed Findings

### Crawlability (13/15)
- ✅ robots.txt valid, syntactically clean, sitemap referenced
- ✅ All AI crawlers allowed (5/5)
- ✅ XML sitemap present at `/sitemap.xml`, 216 URLs, all `lastmod: 2026-04-12`, priorities structured
- ✅ Homepage → product: 2 clicks. Homepage → blog post: 2 clicks. All key content within depth 3.
- ⚠️ –2 points for missing `llms.txt` (counted under a bonus "modern-GEO crawl signals" sub-category)

### Indexability (11/12)
- ✅ Every sampled page has a self-referencing canonical (`/`, `/about`, `/products/bpc-157-10mg`, `/blog/bpc-157-complete-guide`)
- ✅ www canonicalization enforced via 301 from apex
- ✅ No conflicting `X-Robots-Tag` headers
- ✅ No parameter-based duplicates detected
- ✅ No index bloat (sitemap URL count matches expected content)
- ⚠️ –1 for one-off: `/out/[slug]` affiliate redirect is correctly disallowed in robots.txt but also should carry `X-Robots-Tag: noindex` just in case — verify

### Security (6/10)
- ✅ HTTPS enforced, valid Vercel cert, apex → www 301, no mixed content
- ✅ HSTS present (2-year max-age, qualifies for HSTS preload)
- ❌ `X-Content-Type-Options` missing
- ❌ `X-Frame-Options` missing
- ❌ `Referrer-Policy` missing
- ❌ `Content-Security-Policy` missing
- ❌ `Permissions-Policy` missing

Single biggest area for a cheap score boost — one `next.config.ts` edit closes all five gaps.

### URL Structure (7/8)
- ✅ Clean, lowercase, hyphenated URLs
- ✅ Logical `/category/subcategory/slug` hierarchy where nested
- ✅ Single 301 from apex to www (no chains)
- ⚠️ –1 for dual routing (`/fat-loss` + `/categories/*`) without documented canonical relationship

### Mobile Optimization (10/10)
- ✅ `<meta name="viewport" content="width=device-width, initial-scale=1">` present on every page
- ✅ Tailwind responsive classes throughout
- ✅ Font size 16px+ default (Inter + Syne via `next/font/google`)
- ✅ Touch targets sized appropriately (buttons use `py-3`/`py-4`, ≥48px)

### Core Web Vitals (12/15)
Estimated without field data:
- **LCP:** Hero images use `next/image` with WebP format, `priority` set on hero carousel. Estimated good (<2.5s on 4G).
- **INP:** Minimal client-side JS (content is prerendered; no heavy interactivity). Estimated good.
- **CLS:** `next/image fill` with aspect-ratio containers on hero; risk zone is any raw `<img>` elsewhere. Estimated good-to-needs-improvement.

Score ceiling at 12 until CrUX data confirms. Once Speed Insights accumulates, re-run.

### Server-Side Rendering (15/15)
- ✅ `x-nextjs-prerender: 1` on every sampled page
- ✅ Full HTML response is ~285 KB with all content, schema, internal links present BEFORE any JS executes
- ✅ JSON-LD blocks (Organization, WebSite, ItemList, Product, FAQPage, Article, BreadcrumbList) are in the raw HTML, not JS-injected
- ✅ 113 internal links visible in raw homepage HTML

This is the most important category for AI visibility and it is executed correctly.

### Page Speed & Server Performance (8/15)
- ✅ TTFB 215ms (target <800ms)
- ✅ Brotli compression negotiated (`content-encoding: br`)
- ✅ Vercel edge CDN serving with `x-vercel-cache: HIT`
- ✅ HTTP/2
- ⚠️ Bundle size, image bytes, and third-party weight not measured (requires Lighthouse run)
- ⚠️ No IndexNow implementation
- ⚠️ Minor: third-party Google Tag Manager script loaded without `defer` (uses `next/script` with `afterInteractive`, which is appropriate — but consider `lazyOnload` for GA if engagement metrics aren't critical)

---

## Summary

PeptidesMaxxing is technically strong. SSR is clean, AI crawlers have full access, sitemap and robots.txt are well-formed, canonicals are correct, compression and caching are dialed in, and JSON-LD is comprehensive. The two actionable technical gaps are:

1. **Security headers** — one file edit closes a 4-point gap.
2. **`llms.txt` + IndexNow** — two lightweight additions that directly improve AI discovery.

Everything else is polish.
