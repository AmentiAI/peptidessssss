// Static fallback data for blog posts and guides
// Read from data/ files at runtime using fs (reliable in Next.js server components)

import fs from "fs"
import path from "path"

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

function loadBlogPosts(): StaticBlogPost[] {
  try {
    const filePath = path.join(process.cwd(), "data", "blog-posts.json")
    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return raw.posts.map((p: any) => ({
      id: `static-blog-${p.slug}`,
      slug: p.slug,
      title: p.title,
      description: p.description,
      content: p.content,
      date: new Date(p.date),
      author: p.author ?? "PeptideLab Research Team",
      category: p.category,
      imageUrl: p.image ?? null,
      tags: p.tags ?? [],
      isFeatured: p.featured ?? false,
      readTime: p.read_time ?? null,
      createdAt: new Date(p.date),
      updatedAt: new Date(p.date),
    }))
  } catch (e) {
    console.error("Failed to load blog-posts.json:", e)
    return []
  }
}

function loadGuides(): StaticGuide[] {
  try {
    const filePath = path.join(process.cwd(), "data", "guides.json")
    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return raw.guides.map((g: any) => ({
      id: `static-guide-${g.slug}`,
      slug: g.slug,
      title: g.title,
      description: g.description,
      content: g.content,
      date: new Date(g.date),
      author: g.author ?? "PeptideLab Research Team",
      imageUrl: g.image ?? null,
      readTime: g.read_time ?? null,
      createdAt: new Date(g.date),
      updatedAt: new Date(g.date),
    }))
  } catch (e) {
    console.error("Failed to load guides.json:", e)
    return []
  }
}

export const staticBlogPosts: StaticBlogPost[] = loadBlogPosts()
export const staticGuides: StaticGuide[] = loadGuides()
