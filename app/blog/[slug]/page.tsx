import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, User, ArrowRight, ExternalLink } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getAllBlogPosts,
  AFFILIATE_URL,
} from "@/lib/peptide-data"

export const dynamic = "force-static"
export const revalidate = 86400

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return {}
  const titleStr = `${post.title} | PeptidesMaxxing`
  return {
    title: { absolute: titleStr },
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author ?? "PeptidesMaxxing Research Team" }],
    alternates: { canonical: `https://www.peptidesmaxxing.com/blog/${slug}` },
    openGraph: {
      title: titleStr,
      description: post.description,
      url: `https://www.peptidesmaxxing.com/blog/${slug}`,
      siteName: "PeptidesMaxxing",
      type: "article",
      publishedTime: post.date?.toISOString(),
      authors: [post.author ?? "PeptidesMaxxing Research Team"],
      images: post.imageUrl ? [{ url: post.imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: titleStr,
      description: post.description.slice(0, 155),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const allPosts = await getAllBlogPosts()
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

  function parseInline(text: string, keyPrefix: number): React.ReactNode {
    const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g
    const parts: React.ReactNode[] = []
    let lastIndex = 0
    let match
    let k = 0
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
      if (match[0].startsWith("[")) {
        const href = match[3]
        parts.push(
          href.startsWith("http") ? (
            <a key={`${keyPrefix}-${k++}`} href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium transition-colors">
              {match[2]}
            </a>
          ) : (
            <Link key={`${keyPrefix}-${k++}`} href={href} className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium transition-colors">
              {match[2]}
            </Link>
          )
        )
      } else {
        parts.push(<strong key={`${keyPrefix}-${k++}`}>{match[4]}</strong>)
      }
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex))
    return parts.length === 1 ? parts[0] : <>{parts}</>
  }

  function renderContent(content: string) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## "))
        return (
          <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-3 border-b border-slate-200">
            {line.slice(3)}
          </h2>
        )
      if (line.startsWith("### "))
        return (
          <h3 key={i} className="text-lg font-semibold text-slate-800 mt-6 mb-3">
            {line.slice(4)}
          </h3>
        )
      if (line.startsWith("- "))
        return (
          <li key={i} className="text-slate-600 leading-relaxed ml-4 mb-1 list-disc">
            {parseInline(line.slice(2), i)}
          </li>
        )
      if (line.startsWith("**") && line.endsWith("**"))
        return (
          <p key={i} className="font-semibold text-slate-900 leading-relaxed mb-2">
            {line.slice(2, -2)}
          </p>
        )
      if (line.trim() === "") return <div key={i} className="mb-3" />
      return (
        <p key={i} className="text-slate-600 leading-[1.85] mb-3">
          {parseInline(line, i)}
        </p>
      )
    })
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.peptidesmaxxing.com/blog/${slug}`,
    headline: post.title,
    description: post.description,
    url: `https://www.peptidesmaxxing.com/blog/${slug}`,
    datePublished: post.date?.toISOString(),
    dateModified: post.updatedAt?.toISOString() ?? post.date?.toISOString(),
    author: {
      "@type": "Organization",
      name: post.author ?? "PeptidesMaxxing Research Team",
      url: "https://www.peptidesmaxxing.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PeptidesMaxxing",
      url: "https://www.peptidesmaxxing.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.peptidesmaxxing.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.peptidesmaxxing.com/blog/${slug}`,
    },
    ...(post.imageUrl ? { image: { "@type": "ImageObject", url: post.imageUrl, width: 1200, height: 630 } } : {}),
    keywords: post.tags?.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Research Blog", item: "https://www.peptidesmaxxing.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.peptidesmaxxing.com/blog/${slug}` },
    ],
  }

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700 truncate max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Article layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-slate-500 mb-6">{post.description}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pb-6 border-b border-slate-200">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />{post.author}
            </span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />{post.readTime} read
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="prose-peptide">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Partner CTA */}
        <div className="mt-8 p-5 rounded-2xl border border-violet-200 bg-violet-50">
          <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-1">Research Partner</p>
          <p className="font-semibold text-slate-900 mb-1">Compare Peptides Side-by-Side</p>
          <p className="text-sm text-slate-500 mb-3">
            Use LooksMaxingStack&apos;s interactive comparison tool to evaluate peptide mechanisms, half-lives, dosing, and protocols head-to-head.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://looksmaxingstack.com/compare" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-violet-600 text-white hover:bg-violet-700 transition-colors">
              Compare Peptides <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://looksmaxingstack.com/stacks" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-violet-600 bg-white border border-violet-200 hover:border-violet-400 transition-colors">
              View Stacks <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://looksmaxingstack.com/guides" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-violet-600 bg-white border border-violet-200 hover:border-violet-400 transition-colors">
              Guides <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Buy CTA */}
        <div className="mt-6 p-6 rounded-2xl border border-slate-200 bg-slate-50 text-center">
          <h3 className="font-bold text-slate-900 mb-2">Explore Research Peptides</h3>
          <p className="text-sm text-slate-500 mb-4">
            Browse our full research peptide catalog — for research use only.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Shop Research Peptides <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong className="text-amber-900">Research Use Only:</strong> All information is for
            educational and research purposes. Not medical advice. For research use only. Not for human
            consumption. Consult a qualified physician.
          </p>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">More Research Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all p-5 bg-white"
                >
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400">{new Date(p.date).toLocaleDateString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
