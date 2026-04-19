import fs from "fs"
import path from "path"
import {
  getAllProductSlugs,
  getAllCategorySlugs,
  getAllBlogSlugs,
  getAllGuideSlugs,
} from "@/lib/peptide-data"
import { getAllStackGuides } from "@/lib/stack-guides"

const BASE_URL = "https://www.peptidesmaxxing.com"

// Read mtime of a data file to use as the lastModified signal.
// Falls back to build time if the file is missing.
function fileMtime(relPath: string): Date {
  try {
    const p = path.join(process.cwd(), relPath)
    return fs.statSync(p).mtime
  } catch {
    return new Date()
  }
}

// Clamp mtime to "now" if filesystem gives a future date (avoids bad signals).
function safeDate(d: Date): Date {
  const now = new Date()
  return d > now ? now : d
}

export default async function sitemap() {
  const [productSlugs, categorySlugs, blogSlugs, guideSlugs] = await Promise.all([
    getAllProductSlugs(),
    getAllCategorySlugs(),
    getAllBlogSlugs(),
    getAllGuideSlugs(),
  ])
  const stackGuides = getAllStackGuides()

  const productsMtime = safeDate(fileMtime("lib/static-products.ts"))
  const researchMtime = safeDate(fileMtime("lib/product-research.ts"))
  const productsMostRecent =
    productsMtime > researchMtime ? productsMtime : researchMtime

  const categoriesMtime = safeDate(fileMtime("data/categories.json"))
  const blogMtime = safeDate(fileMtime("data/blog-posts.json"))
  const guidesMtime = safeDate(fileMtime("data/guides.json"))
  const stackGuidesMtime = safeDate(fileMtime("lib/stack-guides.ts"))

  const productPages = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: productsMostRecent,
  }))

  const categoryPages = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/categories/${slug}`,
    lastModified: categoriesMtime,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: blogMtime,
  }))

  const guidePages = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: guidesMtime,
  }))

  const stackGuidePages = stackGuides.map((s) => ({
    url: `${BASE_URL}/stacks/${s.slug}`,
    lastModified: stackGuidesMtime,
  }))

  const now = new Date()

  return [
    // Core
    { url: BASE_URL, lastModified: now },
    { url: `${BASE_URL}/products`, lastModified: productsMostRecent },
    { url: `${BASE_URL}/categories`, lastModified: categoriesMtime },
    { url: `${BASE_URL}/stacks`, lastModified: stackGuidesMtime },
    // Goal pages
    { url: `${BASE_URL}/recovery`, lastModified: now },
    { url: `${BASE_URL}/fat-loss`, lastModified: now },
    { url: `${BASE_URL}/anti-aging`, lastModified: now },
    { url: `${BASE_URL}/cognitive`, lastModified: now },
    { url: `${BASE_URL}/muscle-growth`, lastModified: now },
    // Content hubs
    { url: `${BASE_URL}/compare`, lastModified: now },
    { url: `${BASE_URL}/protocols`, lastModified: now },
    { url: `${BASE_URL}/science`, lastModified: now },
    { url: `${BASE_URL}/blog`, lastModified: blogMtime },
    { url: `${BASE_URL}/guides`, lastModified: guidesMtime },
    { url: `${BASE_URL}/tools`, lastModified: now },
    // Legal / info
    { url: `${BASE_URL}/about`, lastModified: now },
    { url: `${BASE_URL}/editorial-standards`, lastModified: now },
    { url: `${BASE_URL}/authors/peptidesmaxxing-editorial`, lastModified: now },
    { url: `${BASE_URL}/privacy`, lastModified: now },
    { url: `${BASE_URL}/terms`, lastModified: now },
    // Dynamic pages
    ...productPages,
    ...categoryPages,
    ...stackGuidePages,
    ...blogPages,
    ...guidePages,
  ]
}
