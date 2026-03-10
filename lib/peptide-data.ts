import productsData from "@/data/products.json"
import categoriesData from "@/data/categories.json"
import blogPostsData from "@/data/blog-posts.json"
import guidesData from "@/data/guides.json"

export interface Product {
  name: string
  sku: string
  price: number
  price_formatted: string
  url: string
  image_url: string
  categories: string[]
  description: string
  short_description: string
  benefits: string[]
  purity: string
  sequence: string
  molecular_weight: string
  in_stock: boolean
  stock: number
  featured: boolean
  badge: string | null
  rating: number
  reviews: number
  slug: string
}

export interface Category {
  name: string
  slug: string
  icon: string
  color: string
  description: string
  hero_description: string
  stats: { label: string; value: string }[]
  seo_description: string
  content: string
  faq: { question: string; answer: string }[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  tags: string[]
  featured: boolean
  read_time: string
  content: string
}

export interface Guide {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image: string
  read_time: string
  content: string
}

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

const rawProducts = productsData.products.map((p) => ({
  ...p,
  slug: generateSlug(p.name),
}))

export const products: Product[] = rawProducts
export const categories: Category[] = categoriesData.categories
export const blogPosts: BlogPost[] = blogPostsData.posts
export const guides: Guide[] = guidesData.guides
export const vendor = productsData.vendor

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.in_stock).slice(0, 8)
}

export function getRelatedProducts(slug: string): Product[] {
  const p = getProductBySlug(slug)
  if (!p) return []
  return products
    .filter((r) => r.slug !== slug && r.categories.some((c) => p.categories.includes(c)))
    .slice(0, 3)
}

export function getProductsByCategory(categoryName: string): Product[] {
  return products.filter((p) => p.categories.includes(categoryName))
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured).slice(0, 3)
}
