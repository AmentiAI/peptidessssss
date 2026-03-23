import {
  getAllProductSlugs,
  getAllCategorySlugs,
  getAllBlogSlugs,
  getAllGuideSlugs,
} from "@/lib/peptide-data"
import { getAllStackGuides } from "@/lib/stack-guides"

const BASE_URL = "https://www.peptidesmaxxing.com"
const TODAY = new Date()

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
    lastModified: TODAY,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  const categoryPages = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/categories/${slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  const guidePages = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  const stackGuidePages = stackGuides.map((s) => ({
    url: `${BASE_URL}/stacks/${s.slug}`,
    lastModified: TODAY,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: TODAY,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: TODAY,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: TODAY,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/stacks`,
      lastModified: TODAY,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: TODAY,
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: TODAY,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: TODAY,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...productPages,
    ...categoryPages,
    ...stackGuidePages,
    ...blogPages,
    ...guidePages,
  ]
}
