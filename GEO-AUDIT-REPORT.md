# GEO Audit Report: PeptidesMaxxing

**Audit Date:** 2026-04-25
**URL:** https://www.peptidesmaxxing.com
**Business Type:** E-commerce / Affiliate (peptide retail via Phiogen.is)
**Pages Analyzed:** 210 in sitemap (12 deep-fetched across 5 specialist agents)

---

## Executive Summary

**Overall GEO Score: 52/100 (Poor)**

The site has an **excellent technical foundation** (Next.js SSG, perfect SSR, permissive AI crawlers, valid Article + Product schema with `speakable`) and **above-average content depth** for the affiliate-peptide space — but is being held back by two structural problems that no amount of on-page tuning can fix from inside the codebase: (1) **brand authority is effectively zero off-site** (5/100 — no Wikipedia, no LinkedIn, no Trustpilot for the correct domain, zero Reddit/YouTube footprint) and (2) **YMYL trust signals are missing** (no medical reviewer, no verifiable author identity, no PubMed-linked citations, no real address/phone). On top of that, several **high-impact tactical bugs** are bleeding traffic right now: `/products/bpc-157` returns 404 (the flagship product lives at `/products/bpc-157-10mg`), category pages emit zero JSON-LD, and Product schema lists the wrong brand. Fix the bugs this week, ship llms.txt + the brand-disambiguation pass, and the score moves to ~70 within 30 days.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 78/100 | 25% | 19.5 |
| Brand Authority | 5/100 | 20% | 1.0 |
| Content E-E-A-T | 44/100 | 20% | 8.8 |
| Technical GEO | 87/100 | 15% | 13.1 |
| Schema & Structured Data | 62/100 | 10% | 6.2 |
| Platform Optimization | 36/100 | 10% | 3.6 |
| **Overall GEO Score** | | | **52/100** |

---

## Critical Issues (Fix Immediately)

1. **`/products/bpc-157` returns 404.** The flagship product (highest-search-volume peptide on the site) has no canonical URL — actual slugs are `/products/bpc-157-10mg`, `/products/bpc-157-capsules-500mcg-x-60-capsules`, etc. Every external link, every AI citation attempt, every Google "best BPC-157 to buy" query that targets the obvious URL hits a dead 404. Fix: add a redirect or a router page at `/products/bpc-157` that 302s to `bpc-157-10mg` (or better — a hub page listing all BPC-157 SKUs). Same likely applies to other multi-SKU peptides (Tirzepatide, Semaglutide, GHK-Cu).
2. **Brand entity invisibility.** Zero Wikipedia, zero LinkedIn company page, zero Trustpilot for `peptidesmaxxing.com`, no Reddit mentions. Worse: a *different* vendor at `peptidemaxxing.com` (singular, no "s") **already has Trustpilot reviews** — AI fuzzy entity resolution will conflate the brands.
3. **No `llms.txt`.** Returns 404. This is now a baseline expectation for AI-cited sites; the geo-ai-visibility agent generated a ready-to-deploy file (see `/tmp/geo-audit-ai-visibility.md`).

## High Priority Issues (Fix Within 1 Week)

4. **Live site still showing pre-pivot copy.** Today's session rewrote 24 files to buying-focused framing, but the live site still reads "The #1 Peptide Research Hub". Deploy.
5. **Category pages emit ZERO JSON-LD.** 10 high-traffic `/categories/*` pages are structurally invisible to AI. Add `CollectionPage + ItemList + BreadcrumbList`.
6. **Product schema has wrong brand.** `brand.name` = "PeptidesMaxxing" but the actual manufacturer is **Phiogen**. PeptidesMaxxing is the seller. Fix: `brand: { "@type": "Brand", name: "Phiogen" }`, keep `seller: { name: "PeptidesMaxxing" }`.
7. **Product schema missing `aggregateRating`, `review`, `sku`, `hasMerchantReturnPolicy`, `shippingDetails`.** These are the #1 AI shopping citation signals and Google Merchant requirements.
8. **No medical reviewer on YMYL content.** For a health/peptide site, this is the single biggest E-E-A-T gap. Add 2-3 named medical reviewers (MD/PharmD/PhD) and `MedicalWebPage` schema.
9. **Author identity unverifiable.** "Dr. Jordan Reeve, PhD Biochemist" exists as a byline but has no ORCID, Google Scholar, LinkedIn, or `sameAs` schema. AI engines won't grant E-E-A-T weight to unverifiable authors.
10. **`/products` page is 982KB HTML** (141 cards rendered). Paginate or virtualize while keeping crawlable links.

## Medium Priority Issues (Fix Within 1 Month)

11. **Citations have no PubMed IDs / DOIs / hyperlinks.** Mechanism content is solid but unverifiable to AI crawlers.
12. **No `dateModified`** on product/blog/guide schema — `datePublished === dateModified` signals stale content.
13. **Article schema `image.url` is relative** (`/images/blog/bpc-157-guide.jpg`). Schema.org requires absolute URLs.
14. **FAQPage Q1 answer is auto-truncated mid-sentence** — generator bug in fallback FAQ logic.
15. **Organization `sameAs` only has 2 URLs** (Reddit, X). GEO threshold for strong entity linking is 5+ (add LinkedIn, YouTube, Wikidata, Crunchbase, Trustpilot once claimed).
16. **Twitter Card incomplete on product pages** (only one `twitter:*` tag) — fix `generateMetadata` on `app/products/[slug]/page.tsx`.
17. **Missing CSP header** — add via `next.config.js` headers().
18. **No safety/contraindications/interactions sections** on peptide pages — required for YMYL.
19. **No physical address, phone, or refund policy** on /about — basic trust signals missing.
20. **No `WebSite` SearchAction** — no Google sitelinks searchbox eligibility.
21. **Homepage H1 is `sr-only`** — visible top heading renders as H2, which confuses AI Overview content extractors.

## Low Priority Issues (Optimize When Possible)

22. **HSTS lacks `includeSubDomains; preload`** — currently `max-age=63072000` only.
23. **`phiogen.is` images load cross-origin without preconnect** — adds LCP risk.
24. **`unoptimized=true` on next/image** for product images — defeats Next.js image optimization. Acceptable for affiliate-hosted images but flag risk.
25. **No IndexNow + no `msvalidate.01`** — leaves Bing Copilot velocity on the table.
26. **No `Sitemap:` line in raw robots.txt output** (declared in app/robots.ts but verify).

---

## Category Deep Dives

### AI Citability (78/100) — **Strong**
Mechanism-dense passages on flagship articles (BPC-157, Tirzepatide) are quotation-ready: "approximately 50% faster Achilles healing… *Journal of Orthopaedic Research, 2010*", SURMOUNT-1 numerics in clean tables, named protocols ("Foundation Stack: Epitalon + GHK-Cu"). These are the formats ChatGPT and Perplexity quote verbatim.

**Top weaknesses**: homepage hero is marketing copy ("62+ Research-Grade Peptides with COA Verification"), not a definitional first sentence. `/products` listing intro is one line. Product pages lack a standardized **dose / route / frequency / duration / half-life** table — biggest single template change available; would lift the entire 141-product long tail.

### Brand Authority (5/100) — **Critical**
This is the headline finding. Zero entity recognition across every platform AI models trust for citation grounding:

| Platform | Status |
|---|---|
| Wikipedia | Absent |
| Wikidata | Absent |
| Reddit | Absent |
| YouTube | Absent |
| LinkedIn | Absent |
| Trustpilot (correct domain) | Absent |
| Trustpilot (`peptidemaxxing.com`, singular) | **Different vendor — disambiguation risk** |
| Industry vendor lists (Outliyr, MuscleAndBrawn, Eroids) | Not listed |

AI models fuzzy-match entity names. Without proactive disambiguation, positive or negative reviews of `peptidemaxxing.com` will get attributed to your brand.

### Content E-E-A-T (44/100) — **Below YMYL bar**
Per-pillar: Experience 28, Expertise 52, Authoritativeness 22, Trustworthiness 58.

**Strengths:** the `/editorial-standards` page (12-month review cycle, peer-reviewed source policy, public corrections log) is above-average for the affiliate space. Mechanism content is genuine, not commodity AI output.

**Critical YMYL gaps:** no medical reviewer on any YMYL page, no verifiable author identity (no ORCID/Scholar/LinkedIn/headshot), citations exist but have no PubMed/DOI links, no actual COAs or HPLC chromatograms published despite "≥99% COA Verified" claims, no physical address or real contact email, no per-page conflict-of-interest block (only footer mention), no contraindications/interactions/adverse-events sections.

### Technical GEO (87/100) — **Good**
Excellent: every route prerendered (`x-nextjs-prerender: 1`), Vercel edge cache HIT, full HTML + JSON-LD visible without JS execution, robots.txt permissive to all AI bots, sitemap accurate with `lastmod`, clean URL structure, HTTPS enforced via 308/301, viewport correct, mobile-responsive.

**Weaknesses:** missing `llms.txt`, missing CSP header, `/products` HTML weight 982KB, partial Twitter Card on product pages, HSTS without preload directives, cross-origin Phiogen images without preconnect.

### Schema & Structured Data (62/100) — **Fair**
**Working well:** All JSON-LD is server-rendered. Article schema is unusually strong (full `Person` author with `jobTitle`/`worksFor`/`knowsAbout` + `speakable` property — rare and valuable). BreadcrumbList present site-wide. Homepage uses `@graph` correctly.

**Gaps:** category pages emit zero JSON-LD; Product schema missing `aggregateRating`/`review`/`sku`/`hasMerchantReturnPolicy`/`shippingDetails`; Product `brand.name` is wrong (should be Phiogen, not PeptidesMaxxing); `Organization.sameAs` only 2 URLs; Article `image.url` relative not absolute; FAQ Q1 answer truncated mid-sentence.

### Platform Optimization (36/100) — **Poor**

| Platform | Score |
|---|---|
| Perplexity AI | 54 |
| Bing Copilot | 47 |
| ChatGPT (web search) | 41 |
| Google AI Overviews | 32 |
| Google Gemini | 28 |

**Biggest opportunity = Perplexity (54).** Highest current score, lowest pharma-policy friction, FAQPage + Product + Breadcrumb structure is exactly Perplexity's preferred citation format. Realistic to push to ~75 in 90 days via Reddit seeding + llms.txt.

**Structural ceiling = Google AIO + Gemini.** Google's pharma policy categorically deprioritizes peptide retail in YMYL surfaces. These will plateau in the 30s regardless of on-page work. **Reallocate effort to Perplexity, ChatGPT, and Bing Copilot.**

---

## Quick Wins (Implement This Week)

1. **Fix `/products/bpc-157` 404.** Add a hub page or 302 redirect to `bpc-157-10mg`. Audit and fix the same for Tirzepatide, Semaglutide, GHK-Cu, Ipamorelin, and any other multi-SKU peptide. **Highest single ROI on this audit.**
2. **Deploy today's buying-pivot copy changes.** 24 files updated this session — they're sitting in the repo doing nothing until you deploy.
3. **Ship `/public/llms.txt`** using the file the geo-ai-visibility agent generated (saved to `/tmp/geo-audit-ai-visibility.md`). Deploy time: ~5 minutes. +7 points overall.
4. **Fix Product schema `brand`** — change to "Phiogen" (the manufacturer); leave `seller` as PeptidesMaxxing. Single edit in `app/products/[slug]/page.tsx`.
5. **Add JSON-LD to category pages** (CollectionPage + ItemList + BreadcrumbList). Snippet ready in `/tmp/geo-audit-schema.md`.

## 30-Day Action Plan

### Week 1: Bug fixes + ship pending changes
- [ ] Deploy buying-pivot copy
- [ ] Fix flagship 404s (BPC-157, Tirzepatide, Semaglutide, GHK-Cu, Ipamorelin)
- [ ] Ship `/public/llms.txt`
- [ ] Fix Product schema brand → Phiogen
- [ ] Add CollectionPage JSON-LD to category pages
- [ ] Fix Article `image.url` to absolute URLs
- [ ] Fix FAQ truncation bug

### Week 2: YMYL trust signals
- [ ] Recruit 2-3 medical reviewers (MD/PharmD), publish bios with credentials, add to all peptide pages
- [ ] Add `dateModified` to all product/blog/guide schema (auto-generate from file mtime — sitemap.ts already does this)
- [ ] Add Person `sameAs` for Dr. Jordan Reeve (ORCID, Google Scholar, LinkedIn)
- [ ] Add per-page conflict-of-interest block on affiliate pages
- [ ] Add safety/contraindications/interactions sections to top 20 peptides
- [ ] Add physical address, phone, real contact email to /about

### Week 3: Brand entity build (off-site)
- [ ] Create LinkedIn company page (1hr)
- [ ] Submit Wikidata entry (lower bar than Wikipedia)
- [ ] Claim Trustpilot listing for `peptidesmaxxing.com` and add disambiguation note about `peptidemaxxing.com`
- [ ] Publish 3 long-form Medium posts citing the brand by name
- [ ] Earn 2-3 organic `r/Peptides` mentions through value-first comments
- [ ] Submit to industry vendor lists (Outliyr, MuscleAndBrawn) for inclusion in next round

### Week 4: Schema completion + platform-specific optimization
- [ ] Add `aggregateRating`, `review`, `sku`, `hasMerchantReturnPolicy`, `shippingDetails` to Product schema
- [ ] Expand `Organization.sameAs` to 5+ URLs (LinkedIn, YouTube, Wikidata, Trustpilot, Crunchbase)
- [ ] Add `WebSite` SearchAction for Google sitelinks searchbox
- [ ] Add CSP header in `next.config.js`
- [ ] Submit to Bing Webmaster Tools, enable IndexNow
- [ ] Paginate `/products` (or virtualize) — drop HTML weight from 982KB
- [ ] Add standardized "Profile" table (mol weight, half-life, dose, route, storage, citation) to all 141 product pages — server-side template

---

## Appendix: Pages Analyzed

| URL | Source | Notes |
|---|---|---|
| / | Homepage | H1 sr-only, JSON-LD WebSite+Organization+ItemList present |
| /robots.txt | Crawl | Wildcard allow, /out/ /api/ disallow, sitemap declared |
| /llms.txt | 404 | Missing |
| /sitemap.xml | Crawl | 210 URLs, lastmod 2026-04-25 |
| /products | Listing | 982KB HTML, 141 cards |
| /products/bpc-157 | **404** | Flagship 404 — actual slug is `bpc-157-10mg` |
| /products/bpc-157-10mg | Product | Full Product+Breadcrumb+FAQPage JSON-LD |
| /products/tirzepatide-15mg | Product | SURMOUNT-1 data table, citation-ready |
| /products/semaglutide-3mg | Product | OK |
| /categories/muscle-growth | Category | **Zero JSON-LD** |
| /blog/bpc-157-complete-guide | Article | Strong mechanism content; Article schema with `speakable` |
| /guides/longevity-peptide-protocols | Guide | Named protocols ("Foundation Stack…"); no safety section |
| /about | Info | Thin — no address/phone/policy |
| /editorial-standards | Info | Above-average for affiliate space |
| /authors/peptidesmaxxing-editorial | Author | Dr. Jordan Reeve byline; no ORCID/Scholar/LinkedIn |

**Specialist agent reports** (full detail):
- `/tmp/geo-audit-ai-visibility.md`
- `/tmp/geo-audit-platform.md`
- `/tmp/geo-audit-technical.md`
- `/tmp/geo-audit-content.md`
- `/tmp/geo-audit-schema.md`
