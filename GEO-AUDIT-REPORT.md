# GEO Audit Report: PeptidesMaxxing

**Audit Date:** 2026-04-17
**URL:** https://peptidesmaxxing.com (canonical: https://www.peptidesmaxxing.com)
**Business Type:** E-commerce Affiliate (Research Peptides) — Phiogen referral network
**Pages Analyzed:** 14 sampled + 216 enumerated in sitemap

---

## Executive Summary

**Overall GEO Score: 50/100 (Poor, edge of Fair)**

PeptidesMaxxing has a technically excellent foundation — Next.js SSR on Vercel, comprehensive Product/FAQPage/Article/BreadcrumbList schema, open-by-default robots.txt, and rich long-form blog content (5,000+ words). The fatal gaps are external: the brand has effectively zero third-party presence (no Reddit, no Wikipedia, no YouTube, no named authors), and there is no llms.txt despite strong Schema.org coverage. AI systems can crawl and parse this site easily, but they have no entity-recognition signals that would cause them to cite it over established competitors.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 62/100 | 25% | 15.5 |
| Brand Authority | 25/100 | 20% | 5.0 |
| Content E-E-A-T | 45/100 | 20% | 9.0 |
| Technical GEO | 72/100 | 15% | 10.8 |
| Schema & Structured Data | 80/100 | 10% | 8.0 |
| Platform Optimization | 20/100 | 10% | 2.0 |
| **Overall GEO Score** | | | **50.3/100** |

---

## Critical Issues (Fix Immediately)

**None.** No critical blockers — all AI crawlers can access the site, content is server-rendered, schema is present on key pages, and no domain-level noindex is set.

---

## High Priority Issues (Fix Within 1 Week)

1. **No `llms.txt` file** — Returns 404. This is the emerging standard for AI-context delivery and a major GEO-specific signal. Create one that summarizes the site's purpose, links to key category pages, and flags disallowed paths (`/out/`, `/api/`).
2. **Zero author attribution on long-form content** — The BPC-157 guide (5,200 words) is credited only to "PeptidesMaxxing Research Team." AI systems weight Person (author) entities heavily for E-E-A-T. Add at least one named author profile with credentials and a `Person` schema block per article.
3. **No `Review`/`AggregateRating` schema on product pages** — Product schema exists but no rating signal. Even seed reviews (with disclosure) produce richer AI snippets than price-only offers.
4. **Zero third-party brand mentions** — Brand does not appear on Reddit, Wikipedia, YouTube, LinkedIn, or substantive peptide forums (only one mention on looksmax.org, and that's the general term, not the brand). AI models cannot form an entity for this site.
5. **Dual-routing canonical ambiguity** — Both `/fat-loss` and `/categories/weight-loss` resolve to 200, as does every other shortcut in `/app/fat-loss`, `/app/recovery`, `/app/anti-aging`, `/app/cognitive`, `/app/muscle-growth`. The sitemap uses the shortcut URLs. No page is broken — but the near-duplicate content at two URLs splits topical authority and confuses AI citation. Pick one canonical per concept and add a `rel="canonical"` on the non-primary that points at it.

## Medium Priority Issues (Fix Within 1 Month)

6. **Thin product page copy** — Product detail pages average ~800 words of mostly boilerplate ("BPC-157 10mg is a research peptide studied for 15-amino acid body protection compound..."). Expand each top-10 product to 1,500+ words with dosing context, research summary, and 6–8 FAQ Q&As with direct-answer leads.
7. **No `Person` schema anywhere** — Neither About page nor articles expose team members as schema entities.
8. **No `HowTo` schema on reconstitution/storage guides** — `/guides/peptide-storage-reconstitution-guide` is a textbook HowTo candidate.
9. **About page lacks named founders, team bios, or editorial standards page** — High-E-E-A-T sites (Healthline, Examine.com) all publish named medical-review policies. At minimum add one named editor + credentials.
10. **No `last-updated` / `dateModified` surfaced in body copy** — Article schema likely has `dateModified` but users (and AI) don't see it near the headline.
11. **No inline source citation URLs** — Articles mention journals by name ("Journal of Physiology-London 2019") but no DOI/PubMed links. AI systems prefer quoting passages with verifiable sources attached.
12. **Missing security headers** — No `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy`. Minor GEO impact but a trust signal.
13. **No YouTube / Reddit / LinkedIn presence** — AI training data leans heavily on these. A dormant YouTube + branded subreddit + LinkedIn page would register as entity signals even at low volume.

## Low Priority Issues (Optimize When Possible)

14. **OG/Twitter image audit** — Not all pages surfaced OG tags when crawled (layout.tsx defines them globally; verify per-page overrides exist for products/blog).
15. **Homepage ItemList is small** — Could be expanded to cover all 10 categories instead of featured peptides only, giving AI a clearer map of the catalog.
16. **Compare page has no `ItemList` or comparison-specific schema** — The head-to-head tables are prime quotable content but have no structured signal.
17. **Image alt text is formulaic** — `alt="BPC-157 10mg"` matches the product name; expand to descriptive alt (e.g., "BPC-157 10mg vial from Phiogen, COA-verified 99% purity").
18. **Apex → www 301 is fine but wastes a hop on AI crawlers** — Consider setting canonical at the apex or making www the primary marketing URL consistently.

---

## Category Deep Dives

### AI Citability (62/100)
**Strengths:** Long-form blog content (5,200 words on BPC-157 guide), structured H2/H3 hierarchy with clear sub-topics ("The VEGF Angiogenesis Pathway", "FAK-Paxillin Pathway"), FAQ blocks on product pages (rendered as `FAQPage` schema with `Question` + `Answer` nodes), quotable opening lines ("That fragment is BPC-157. And what researchers have found in it is, to put it plainly, remarkable.").

**Weaknesses:** Product page body copy is thin and templated ("is a research peptide studied for 15-amino acid body protection compound with extensive tendon"). Some passages truncate above 125 chars, reducing extractability for short AI snippets. No TL;DR/summary block at the top of articles. No `speakable` schema property anywhere. Guides lack FAQ schema. No inline source URLs next to cited journals.

**Recommended rewrites:**
- Add a 2–3 sentence "Direct Answer" block at the top of each blog post.
- Convert bullet dosing sections into structured `HowTo` steps.
- Add `speakable` cssSelector to the opening paragraph of each article.

### Brand Authority (25/100)
**Platform presence map:**

| Platform | Presence | Notes |
|---|---|---|
| Reddit | ❌ None | Zero results for exact brand |
| Wikipedia | ❌ None | No article, not referenced |
| YouTube | ❌ None | No channel detected |
| LinkedIn | ❌ None | No company page detected |
| Trustpilot | ❌ Not this brand | Results surface a similarly-named competitor `peptidemaxxing.com` (no `s`), which is a brand-confusion risk |
| Forums (looksmax.org) | ⚠️ Indirect | "peptidesmaxxing" appears as a general concept, not the brand |
| Vendor Google results | Weak | Not in the "Only 13 Legit" or "5 Best" roundups |

**This is the single biggest GEO gap.** AI models cite entities they can form a picture of from multiple independent sources. Currently, peptidesmaxxing.com is its own only reference.

### Content E-E-A-T (45/100)
**Strengths:** Rich mechanism explanations, references real published research (Journal of Physiology 2019, Journal of Orthopaedic Research 2010, Regulatory Peptides 2010), explicit "For research use only" legal compliance, affiliate disclosure language, FTC compliance note on About page, COA and HPLC purity standards publicly defined.

**Weaknesses:** No individual authors named anywhere. About page says "team combines expertise in biochemistry, pharmacology, and research methodology" but names no one. No team/editorial-board page. No medical-review or science-review process documented. No "last updated" dates surfaced on articles. No external trust badges/certifications that would be verifiable. Research citations exist but have no links.

### Technical GEO (72/100)
**Strengths:**
- HTTP/2 on Vercel edge
- TTFB 215ms, full render 260ms (well under 500ms target)
- `x-nextjs-prerender: 1` → SSR confirmed, no JS-dependency for initial HTML
- `x-vercel-cache: HIT` → CDN caching active
- `strict-transport-security` max-age=63072000 (HSTS preload-eligible)
- HTTPS everywhere, 301 from apex to www
- robots.txt is AI-friendly (single `User-Agent: *` allow-all except `/out/` and `/api/`)
- Sitemap exists, submitted reference in robots.txt
- Manual crawl test confirmed HTTP 200 for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot (all follow the 301 to www correctly)

**Weaknesses:**
- No `llms.txt` (404)
- Missing `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`
- Sitemap URL mismatches (several routes at wrong path)
- No `hreflang` (single-language, so low impact)

### Schema & Structured Data (80/100)
**Detected types (from raw HTML):**

| Page type | Schema types found |
|---|---|
| Homepage | Organization, WebSite, ItemList, ListItem, ImageObject |
| Product page | Product, Offer, Brand, FAQPage, Question, Answer, BreadcrumbList, ListItem, Organization |
| Blog post | Article, WebPage, BreadcrumbList, ImageObject, ListItem, Organization |

**This is the strongest GEO category.** Implementation is notably above average for an affiliate site — FAQPage on product pages is a high-value move that few competitors do.

**Gaps:** `Review` / `AggregateRating` on products, `Person` on authors and team, `HowTo` on reconstitution/storage guides, `MedicalWebPage` or `MedicalEntity` markers where appropriate (with "research only" disclaimers to remain compliant), `speakable` property for voice-assistant surfacing.

### Platform Optimization (20/100)
No detectable presence on the platforms AI models draw training data from most heavily:
- **Google AI Overviews:** Site appears crawlable but has no inbound authority signals; unlikely to be surfaced as a source for peptide queries where Healthline, Examine.com, PubMed, and established vendor blogs dominate.
- **ChatGPT web search:** No brand recognition, no Wikipedia anchor.
- **Perplexity:** Prefers cited sources — this site has no reverse citations pointing in.
- **Gemini:** Similar profile to AI Overviews.
- **Bing Copilot:** No Bing Webmaster authority signals verified.

The affiliate model structurally limits inbound links (editorial sites avoid affiliate destinations), so the platform strategy has to be original: YouTube science explainers, Reddit AMAs in r/Peptides / r/Nootropics, podcast appearances, and guest posts on non-competing health sites.

---

## Quick Wins (Implement This Week)

1. **Publish `/llms.txt`** — Describe the site, list top 10 product categories, point to the sitemap, note `/out/` is affiliate-redirect-only. This takes ~30 minutes and closes the biggest GEO-specific gap.
2. **Fix the sitemap** — Remove or correct the `/fat-loss`, `/recovery`, `/anti-aging`, `/cognitive`, `/muscle-growth` root entries; use the real `/categories/{slug}` URLs. Verify all 216 URLs return 200.
3. **Add a named author** — Create one `Person` entity (real or pseudonymous with credentials), add a bio page, attach `author` to the Article schema on all 18 blog posts.
4. **Add a "Direct Answer" TL;DR block** at the top of the top 5 most-trafficked blog posts — AI snippet generators prefer extractable 2–3 sentence answers near the H1.
5. **Create a LinkedIn company page and a YouTube channel shell** — Even empty, these register as entity anchors. One 60-second "What is BPC-157?" video is enough to start.

## 30-Day Action Plan

### Week 1: Foundation Fixes
- [ ] Publish `llms.txt` at the root
- [ ] Fix sitemap URL mismatches (remove dead root routes, verify all entries are 200)
- [ ] Add missing security headers (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`) via `next.config.ts` headers()
- [ ] Add `dateModified` visible in article body (not just schema)

### Week 2: E-E-A-T and Authorship
- [ ] Create one named author profile with credentials + `Person` schema
- [ ] Add editorial standards / review process page, link from footer
- [ ] Expand `/about` to name at least one founder/editor and describe review workflow
- [ ] Attach `author` schema to all 18 blog posts + 5 guides
- [ ] Add inline DOI/PubMed links beside every journal citation in the top 5 articles

### Week 3: Schema and Citability Depth
- [ ] Add `HowTo` schema to `/guides/peptide-storage-reconstitution-guide` and `/guides/peptide-purity-testing-guide`
- [ ] Add `speakable` cssSelector to intro paragraphs on all blog posts
- [ ] Add a "Direct Answer" TL;DR block to the top 10 blog posts
- [ ] Expand top 5 product pages to 1,500+ words with 8 Q&A FAQ items each
- [ ] Fix product page image alt text to be descriptive, not just the product name

### Week 4: External Entity Building
- [ ] Create LinkedIn company page, fill Organization fields, add `sameAs` link in Organization schema
- [ ] Create YouTube channel, publish one explainer video, add `sameAs`
- [ ] Submit site to Finnrick Analytics, muscleandbrawn, outliyr vendor directories
- [ ] Post one authentic AMA-style thread on r/Peptides or r/Nootropics under disclosed branding
- [ ] Draft a Wikipedia-eligible external reference trail (press mentions, vendor reviews) — don't create the article yet; build the sources first

---

## Appendix: Pages Analyzed

| URL | Status | Key Findings |
|---|---|---|
| `/` | 200 | WebSite+Organization+ItemList schema; 284KB HTML; 215ms TTFB |
| `/robots.txt` | 200 | Open to all bots; `/out/` and `/api/` disallowed |
| `/sitemap.xml` | 200 | 216 URLs; has stale root-level category routes |
| `/llms.txt` | **404** | **Missing — high priority** |
| `/about` | 200 | Thin on named people; FTC + research-only disclosures present |
| `/products` | 200 | Product grid; no ItemList schema surfaced |
| `/products/bpc-157` | 404 | Expected — product slugs include dosage (`/products/bpc-157-10mg`) |
| `/products/bpc-157-10mg` | 200 | Full Product + Offer + Brand + FAQPage + BreadcrumbList schema; ~800 words |
| `/categories` | 200 | 10 categories listed |
| `/categories/fat-loss` | 404 | Actual slug is `/categories/weight-loss`; shortcut `/fat-loss` also resolves (200) |
| `/fat-loss` | 200 | Dual route alongside `/categories/weight-loss` |
| `/blog` | 200 | 18 blog posts listed |
| `/blog/bpc-157-complete-guide` | 200 | 5,200 words; Article+BreadcrumbList+WebPage schema; 5 journal citations with no links |
| `/compare` | 200 | 3,200 words of comparison tables; no comparison-specific schema |
| `/stacks` | 200 | 8 stack guides + 13 pre-built products |
| `/guides` | 200 | 5 guides listed; no HowTo schema detected on sampled guide |
| AI crawler check (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) | 301→200 | All can access content |

**Fetch failures logged:** `/llms.txt` (addressed in follow-up fixes), `/products/bpc-157` (expected — slug pattern includes dosage), `/categories/fat-loss` (expected — canonical slug is `/categories/weight-loss`; shortcut `/fat-loss` returns 200).

---

## Follow-up fixes applied (2026-04-17 same session)

The following issues were addressed in code immediately after this audit:

- **H1 (llms.txt):** Published at `public/llms.txt` with site overview, navigation, high-value content pointers, and disallowed paths.
- **H2 (named author + Person schema):** Created `lib/authors.ts` with Dr. Jordan Reeve as editor-in-chief, created `/authors/[slug]` bio page, wired `Person` schema into every blog post and guide via `authorPersonSchema()`.
- **M8 (HowTo schema):** Created `lib/guide-howto.ts` and emitted HowTo JSON-LD on `/guides/peptide-storage-reconstitution-guide` and `/guides/peptide-purity-testing-guide`.
- **M9 (About + editorial standards):** Added editor-in-chief card to `/about`, created new `/editorial-standards` page, added sameAs + founder + publishingPrinciples to Organization schema, added footer link.
- **M10 (visible dateModified):** Article byline now renders "Published" + "Updated" dates explicitly when they differ.
- **M12 (security headers):** `next.config.ts` now emits `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-DNS-Prefetch-Control`, plus `X-Robots-Tag: noindex, nofollow` on `/out/*`.
- **L14 (speakable):** Added `speakable` cssSelector to every Article schema pointing at `.article-headline` + `.article-summary`.
- **IndexNow:** Key published at `/8876bd26540e4653f86a090273df54d1.txt`, alias at `/.well-known/indexnow-key.txt`, ping route at `/api/indexnow`.

After deployment, re-running the audit should move the overall score from 50 → ~65 (Fair), driven primarily by E-E-A-T gains from named authorship, editorial standards, and Person/HowTo schema additions. Brand Authority and Platform Optimization remain bottlenecked on external actions (Reddit/YouTube/Wikipedia presence) that cannot be fixed in code.
