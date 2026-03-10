import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, User, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getAllBlogPosts,
} from "@/lib/peptide-data"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

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
  return {
    title: `${post.title} | PeptideLab Blog`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://peptidelab.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://peptidelab.com/blog/${slug}`,
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
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const allPosts = await getAllBlogPosts()
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)

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
            {line.slice(2)}
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
          {line}
        </p>
      )
    })
  }

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400">
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

        {/* Buy CTA */}
        <div className="mt-8 p-6 rounded-2xl border border-slate-200 bg-slate-50 text-center">
          <h3 className="font-bold text-slate-900 mb-2">Explore Research Peptides</h3>
          <p className="text-sm text-slate-500 mb-4">
            Browse the full Pantheon Peptides catalog — for research use only.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Shop on Pantheon Peptides <ArrowRight className="w-4 h-4" />
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
