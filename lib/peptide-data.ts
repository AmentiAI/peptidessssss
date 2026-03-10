import { staticProducts, staticCategories, AFFILIATE_URL } from "@/lib/static-products"
import { staticBlogPosts, staticGuides } from "@/lib/static-content"

export { AFFILIATE_URL }

// Re-export types compatible with both DB and static data
export type Product = {
  id: string
  name: string
  slug: string
  price: number | null
  priceFormatted: string | null
  imageUrl: string | null
  productUrl: string
  description: string
  shortDescription: string | null
  categories: string[]
  isFeatured: boolean
  badge: string | null
  isBundle: boolean
  isInStock: boolean
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export type Category = {
  id: string
  name: string
  slug: string
  icon: string | null
  color: string | null
  description: string | null
  heroDescription: string | null
  seoDescription: string | null
  stats: unknown
  content: string | null
  faq: unknown
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  description: string
  content: string
  date: Date
  author: string
  category: string
  imageUrl: string | null
  tags: string[]
  isFeatured: boolean
  readTime: string | null
  createdAt: Date
  updatedAt: Date
}

export type Guide = {
  id: string
  slug: string
  title: string
  description: string
  content: string
  date: Date
  author: string
  imageUrl: string | null
  readTime: string | null
  createdAt: Date
  updatedAt: Date
}

async function getDb() {
  try {
    const { db } = await import("@/lib/db")
    return db
  } catch {
    return null
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const db = await getDb()
    if (!db) return staticProducts
    const results = await db.product.findMany({
      orderBy: [{ isFeatured: "desc" }, { sortOrder: "asc" }, { name: "asc" }],
    })
    if (results.length === 0) return staticProducts
    return results as Product[]
  } catch {
    return staticProducts
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const db = await getDb()
    if (!db) return staticProducts.find((p) => p.slug === slug) ?? null
    const result = await db.product.findUnique({ where: { slug } })
    if (!result) return staticProducts.find((p) => p.slug === slug) ?? null
    return result as Product
  } catch {
    return staticProducts.find((p) => p.slug === slug) ?? null
  }
}

export async function getAllProductSlugs(): Promise<string[]> {
  try {
    const db = await getDb()
    if (!db) return staticProducts.map((p) => p.slug)
    const products = await db.product.findMany({ select: { slug: true } })
    if (products.length === 0) return staticProducts.map((p) => p.slug)
    return products.map((p) => p.slug)
  } catch {
    return staticProducts.map((p) => p.slug)
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const db = await getDb()
    if (!db) return staticProducts.filter((p) => p.isFeatured && p.isInStock).slice(0, 8)
    const results = await db.product.findMany({
      where: { isFeatured: true, isInStock: true },
      take: 8,
      orderBy: { sortOrder: "asc" },
    })
    if (results.length === 0) return staticProducts.filter((p) => p.isFeatured && p.isInStock).slice(0, 8)
    return results as Product[]
  } catch {
    return staticProducts.filter((p) => p.isFeatured && p.isInStock).slice(0, 8)
  }
}

export async function getRelatedProducts(slug: string): Promise<Product[]> {
  try {
    const product = await getProductBySlug(slug)
    if (!product || product.categories.length === 0) return []
    const db = await getDb()
    if (!db) {
      return staticProducts
        .filter((p) => p.slug !== slug && p.categories.some((c) => product.categories.includes(c)))
        .slice(0, 4)
    }
    const results = await db.product.findMany({
      where: { slug: { not: slug }, categories: { hasSome: product.categories } },
      take: 4,
    })
    return results as Product[]
  } catch {
    return []
  }
}

export async function getProductsByCategory(categoryName: string): Promise<Product[]> {
  try {
    const db = await getDb()
    if (!db) {
      return staticProducts.filter((p) => p.categories.includes(categoryName))
    }
    const results = await db.product.findMany({
      where: { categories: { has: categoryName } },
      orderBy: [{ isFeatured: "desc" }, { name: "asc" }],
    })
    if (results.length === 0) {
      return staticProducts.filter((p) => p.categories.includes(categoryName))
    }
    return results as Product[]
  } catch {
    return staticProducts.filter((p) => p.categories.includes(categoryName))
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const db = await getDb()
    if (!db) return staticCategories as Category[]
    const results = await db.category.findMany({ orderBy: { sortOrder: "asc" } })
    if (results.length === 0) return staticCategories as Category[]
    return results as Category[]
  } catch {
    return staticCategories as Category[]
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const db = await getDb()
    if (!db) return (staticCategories.find((c) => c.slug === slug) as Category) ?? null
    const result = await db.category.findUnique({ where: { slug } })
    if (!result) return (staticCategories.find((c) => c.slug === slug) as Category) ?? null
    return result as Category
  } catch {
    return (staticCategories.find((c) => c.slug === slug) as Category) ?? null
  }
}

export async function getAllCategorySlugs(): Promise<string[]> {
  try {
    const db = await getDb()
    if (!db) return staticCategories.map((c) => c.slug)
    const cats = await db.category.findMany({ select: { slug: true } })
    if (cats.length === 0) return staticCategories.map((c) => c.slug)
    return cats.map((c) => c.slug)
  } catch {
    return staticCategories.map((c) => c.slug)
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const db = await getDb()
    if (!db) return staticBlogPosts
    const results = await db.blogPost.findMany({ orderBy: { date: "desc" } })
    if (results.length === 0) return staticBlogPosts
    return results as BlogPost[]
  } catch {
    return staticBlogPosts
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const db = await getDb()
    if (!db) return staticBlogPosts.find((p) => p.slug === slug) ?? null
    const result = await db.blogPost.findUnique({ where: { slug } })
    if (!result) return staticBlogPosts.find((p) => p.slug === slug) ?? null
    return result as BlogPost
  } catch {
    return staticBlogPosts.find((p) => p.slug === slug) ?? null
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const db = await getDb()
    if (!db) return staticBlogPosts.map((p) => p.slug)
    const posts = await db.blogPost.findMany({ select: { slug: true } })
    if (posts.length === 0) return staticBlogPosts.map((p) => p.slug)
    return posts.map((p) => p.slug)
  } catch {
    return staticBlogPosts.map((p) => p.slug)
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const db = await getDb()
    if (!db) return staticBlogPosts.filter((p) => p.isFeatured).slice(0, 3)
    const results = await db.blogPost.findMany({
      where: { isFeatured: true },
      take: 3,
      orderBy: { date: "desc" },
    })
    if (results.length === 0) return staticBlogPosts.filter((p) => p.isFeatured).slice(0, 3)
    return results as BlogPost[]
  } catch {
    return staticBlogPosts.filter((p) => p.isFeatured).slice(0, 3)
  }
}

export async function getAllGuides(): Promise<Guide[]> {
  try {
    const db = await getDb()
    if (!db) return staticGuides
    const results = await db.guide.findMany({ orderBy: { date: "desc" } })
    if (results.length === 0) return staticGuides
    return results as Guide[]
  } catch {
    return staticGuides
  }
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    const db = await getDb()
    if (!db) return staticGuides.find((g) => g.slug === slug) ?? null
    const result = await db.guide.findUnique({ where: { slug } })
    if (!result) return staticGuides.find((g) => g.slug === slug) ?? null
    return result as Guide
  } catch {
    return staticGuides.find((g) => g.slug === slug) ?? null
  }
}

export async function getAllGuideSlugs(): Promise<string[]> {
  try {
    const db = await getDb()
    if (!db) return staticGuides.map((g) => g.slug)
    const guides = await db.guide.findMany({ select: { slug: true } })
    if (guides.length === 0) return staticGuides.map((g) => g.slug)
    return guides.map((g) => g.slug)
  } catch {
    return staticGuides.map((g) => g.slug)
  }
}
