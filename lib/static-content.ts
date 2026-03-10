// Static fallback data for blog posts and guides
// Used when the database is not available (e.g., during build without DB)

import blogData from "@/data/blog-posts.json"
import guideData from "@/data/guides.json"

type RawBlogPost = {
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

type RawGuide = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image: string
  read_time: string
  content: string
}

export interface StaticBlogPost {
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

export interface StaticGuide {
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

export const staticBlogPosts: StaticBlogPost[] = (blogData.posts as RawBlogPost[]).map((p) => ({
  id: `static-blog-${p.slug}`,
  slug: p.slug,
  title: p.title,
  description: p.description,
  content: p.content,
  date: new Date(p.date),
  author: p.author,
  category: p.category,
  imageUrl: p.image ?? null,
  tags: p.tags ?? [],
  isFeatured: p.featured ?? false,
  readTime: p.read_time ?? null,
  createdAt: new Date(p.date),
  updatedAt: new Date(p.date),
}))

export const staticGuides: StaticGuide[] = (guideData.guides as RawGuide[]).map((g) => ({
  id: `static-guide-${g.slug}`,
  slug: g.slug,
  title: g.title,
  description: g.description,
  content: g.content,
  date: new Date(g.date),
  author: g.author,
  imageUrl: g.image ?? null,
  readTime: g.read_time ?? null,
  createdAt: new Date(g.date),
  updatedAt: new Date(g.date),
}))
