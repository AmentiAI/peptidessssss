// Submits every URL in the sitemap to IndexNow (Bing, Yandex, Naver, Seznam).
// Google does not support IndexNow — for Google use Search Console.
// Run: npx tsx scripts/indexnow-ping.ts

import { staticProducts, staticCategories } from "../lib/static-products"
import { staticBlogPosts, staticGuides } from "../lib/static-content"
import { getAllStackGuides } from "../lib/stack-guides"

const HOST = "www.peptidesmaxxing.com"
const BASE = `https://${HOST}`
const KEY = "8876bd26540e4653f86a090273df54d1"
const KEY_LOCATION = `${BASE}/${KEY}.txt`
const ENDPOINT = "https://api.indexnow.org/IndexNow"

function buildUrlList(): string[] {
  const staticPaths = [
    "",
    "/products",
    "/categories",
    "/stacks",
    "/blog",
    "/guides",
    "/recovery",
    "/fat-loss",
    "/anti-aging",
    "/cognitive",
    "/muscle-growth",
    "/compare",
    "/protocols",
    "/science",
    "/tools",
    "/about",
    "/editorial-standards",
    "/authors/peptidesmaxxing-editorial",
    "/privacy",
    "/terms",
  ]

  const urls = [
    ...staticPaths.map((p) => `${BASE}${p}`),
    ...staticProducts.map((p) => `${BASE}/products/${p.slug}`),
    ...staticCategories.map((c) => `${BASE}/categories/${c.slug}`),
    ...staticBlogPosts.map((b) => `${BASE}/blog/${b.slug}`),
    ...staticGuides.map((g) => `${BASE}/guides/${g.slug}`),
    ...getAllStackGuides().map((s) => `${BASE}/stacks/${s.slug}`),
  ]

  return Array.from(new Set(urls))
}

async function submitBatch(batch: string[]): Promise<void> {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: batch,
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  })
  const text = await res.text()
  if (!res.ok) {
    throw new Error(`IndexNow ${res.status}: ${text || "(no body)"}`)
  }
}

async function main(): Promise<void> {
  const urls = buildUrlList()
  console.log(`Submitting ${urls.length} URLs to IndexNow...`)

  // IndexNow allows up to 10,000 URLs per request. Batch at 500 for safety.
  const size = 500
  for (let i = 0; i < urls.length; i += size) {
    const batch = urls.slice(i, i + size)
    try {
      await submitBatch(batch)
      console.log(`  ✓ batch ${i / size + 1} (${batch.length} URLs)`)
    } catch (err) {
      console.error(`  ✗ batch ${i / size + 1} failed:`, err)
      process.exitCode = 1
    }
  }
  console.log("Done.")
}

main()
