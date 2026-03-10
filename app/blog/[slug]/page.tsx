import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, User, ArrowRight, ShoppingCart } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  products,
  blogPosts,
} from "@/lib/peptide-data"

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | PeptideLab Blog`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://peptidelab.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://peptidelab.com/blog/${slug}`,
      images: [{ url: post.image }],
      type: "article",
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const relatedProducts = products.filter((p) => p.categories.includes(post.category)).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "PeptideLab", url: "https://peptidelab.com" },
    url: `https://peptidelab.com/blog/${post.slug}`,
    image: `https://peptidelab.com${post.image}`,
  }

  function renderContent(content: string) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## "))
        return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 pb-3 border-b border-[rgba(0,212,255,0.12)]">{line.slice(3)}</h2>
      if (line.startsWith("### "))
        return <h3 key={i} className="text-lg font-semibold text-[rgba(255,255,255,0.9)] mt-6 mb-3">{line.slice(4)}</h3>
      if (line.startsWith("- "))
        return <li key={i} className="text-[rgba(255,255,255,0.7)] leading-relaxed ml-4 mb-1 list-disc">{line.slice(2)}</li>
      if (line.startsWith("**") && line.endsWith("**"))
        return <p key={i} className="font-semibold text-white leading-relaxed mb-2">{line.slice(2, -2)}</p>
      if (line.trim() === "")
        return <div key={i} className="mb-3" />
      return <p key={i} className="text-[rgba(255,255,255,0.68)] leading-[1.85] mb-3">{line}</p>
    })
  }

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.4)]">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#00d4ff] transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[rgba(255,255,255,0.7)] truncate max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,6,18,0.85)] via-[rgba(6,6,18,0.3)] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-black mb-4"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Article + sidebar layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Article */}
          <article>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-[rgba(255,255,255,0.45)] mb-8 pb-6 border-b border-[rgba(255,255,255,0.07)]">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.read_time} read</span>
            </div>

            {/* Content */}
            <div className="prose-peptide">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-[rgba(255,255,255,0.07)]">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,212,255,0.08)] text-[rgba(0,212,255,0.9)] border border-[rgba(0,212,255,0.15)]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 rounded-xl border border-[rgba(255,165,0,0.2)] bg-[rgba(255,165,0,0.05)]">
              <p className="text-xs text-[rgba(255,165,0,0.8)] leading-relaxed">
                ⚗️ <strong className="text-[rgba(255,165,0,1)]">Research Use Only:</strong> All information is for educational and research purposes. Not medical advice. For research use only. Not for human consumption. Consult a qualified physician.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Product CTA */}
            {relatedProducts.length > 0 && (
              <div className="p-5 rounded-2xl border border-[rgba(0,212,255,0.15)]" style={{ background: "rgba(12,12,32,0.8)" }}>
                <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-4">Featured Products</p>
                <div className="space-y-4">
                  {relatedProducts.slice(0, 2).map((product) => (
                    <div key={product.slug} className="flex items-center gap-3 p-3 rounded-xl border border-[rgba(255,255,255,0.06)]" style={{ background: "rgba(255,255,255,0.02)" }}>
                      <div>
                        <p className="text-sm font-bold text-white">{product.name}</p>
                        <p className="text-xs text-[rgba(255,255,255,0.45)]">{product.purity} purity</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold text-white">{product.price_formatted}</span>
                          <Link
                            href={`/out/${product.slug}`}
                            className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold text-black"
                            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                          >
                            <ShoppingCart className="w-3 h-3" /> Buy
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/products" className="flex items-center justify-center gap-1.5 mt-4 px-4 py-2.5 rounded-xl text-sm font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                  Shop All Peptides <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Related articles */}
            {related.length > 0 && (
              <div className="p-5 rounded-2xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(12,12,32,0.7)" }}>
                <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">Related Articles</p>
                <div className="space-y-4">
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="flex gap-3 group">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[rgba(255,255,255,0.03)]">
                        <Image src={p.image} alt={p.title} fill sizes="64px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-[#00d4ff] transition-colors line-clamp-2 leading-snug">{p.title}</p>
                        <p className="text-xs text-[rgba(255,255,255,0.4)] mt-1">{p.read_time} read</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick links */}
            <div className="p-5 rounded-2xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(12,12,32,0.7)" }}>
              <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">Quick Links</p>
              <div className="space-y-2">
                {[
                  { href: "/stacks", label: "Research Stacks" },
                  { href: "/guides", label: "Protocol Guides" },
                  { href: "/categories", label: "Browse Categories" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center justify-between p-2.5 rounded-lg text-sm text-[rgba(255,255,255,0.6)] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.05)] transition-all">
                    {link.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-12 border-t border-[rgba(0,212,255,0.08)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-white mb-6">More Research Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,212,255,0.25)] transition-all"
                  style={{ background: "rgba(12,12,32,0.7)" }}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[rgba(255,255,255,0.03)]">
                    <Image src={p.image} alt={p.title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[rgba(255,255,255,0.4)] mb-2">{p.date}</p>
                    <h3 className="font-bold text-white group-hover:text-[#00d4ff] transition-colors line-clamp-2">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
