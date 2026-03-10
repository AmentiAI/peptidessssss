import {
  getAllProductSlugs,
  getAllCategorySlugs,
  getAllBlogSlugs,
  getAllGuideSlugs,
} from "@/lib/peptide-data"

const BASE_URL = "https://peptidelab.com"

export default async function sitemap() {
  const [productSlugs, categorySlugs, blogSlugs, guideSlugs] = await Promise.all([
    getAllProductSlugs(),
    getAllCategorySlugs(),
    getAllBlogSlugs(),
    getAllGuideSlugs(),
  ])

  const productPages = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const categoryPages = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/categories/${slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date("2026-02-28"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const guidePages = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date("2026-02-15"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/stacks`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-02-28"),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date("2026-02-28"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...productPages,
    ...categoryPages,
    ...blogPages,
    ...guidePages,
  ]
}
