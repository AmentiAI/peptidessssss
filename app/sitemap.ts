import {
  getAllProductSlugs,
  getAllCategorySlugs,
  getAllBlogSlugs,
  getAllGuideSlugs,
} from "@/lib/peptide-data"
import { getAllStackGuides } from "@/lib/stack-guides"

const BASE_URL = "https://www.peptidesmaxxing.com"

export default async function sitemap() {
  const [productSlugs, categorySlugs, blogSlugs, guideSlugs] = await Promise.all([
    getAllProductSlugs(),
    getAllCategorySlugs(),
    getAllBlogSlugs(),
    getAllGuideSlugs(),
  ])
  const stackGuides = getAllStackGuides()

  const productPages = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date("2026-03-29"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  const categoryPages = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/categories/${slug}`,
    lastModified: new Date("2026-03-20"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date("2026-03-25"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  const guidePages = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date("2026-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  const stackGuidePages = stackGuides.map((s) => ({
    url: `${BASE_URL}/stacks/${s.slug}`,
    lastModified: new Date("2026-03-25"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stacks`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    ...productPages,
    ...categoryPages,
    ...stackGuidePages,
    ...blogPages,
    ...guidePages,
  ]
}
