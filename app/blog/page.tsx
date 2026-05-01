import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAllBlogPosts } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Blog — Science, Dosing & Stacking Guides",
  description:
    "Evidence-based peptide articles: BPC-157 healing, Tirzepatide weight loss, Epithalon longevity, Semax cognition, GHK-Cu skin, Ipamorelin GH stacking, and looksmaxxing peptides.",
  keywords: [
    "peptide blog",
    "peptide articles",
    "BPC-157 guide",
    "Tirzepatide guide",
    "peptide stacking",
    "best peptides",
  ],
  alternates: { canonical: "https://www.peptidesmaxxing.com/blog" },
  openGraph: {
    title: "Peptide Blog — Science, Dosing & Stacking Guides",
    description: "Evidence-based peptide guides: BPC-157 healing, Tirzepatide weight loss, Epithalon longevity, Semax cognition, GHK-Cu skin, and Ipamorelin GH stacking.",
    url: "https://www.peptidesmaxxing.com/blog",
    type: "website",
    images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Blog — Dosing, Mechanisms & Stacking",
    description: "BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, Ipamorelin — evidence-based peptide articles, dosing guides, mechanisms, and looksmaxxing science.",
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [featured, ...rest] = sorted

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Blog</p>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-3">Peptide Articles & Guides</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Evidence-based peptide articles, mechanism deep-dives, and protocol guides from the PeptidesMaxxing
            editorial team.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        {blogPosts.length === 0 && (
          <div className="text-center py-24 text-slate-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-300" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Blog posts coming soon</h2>
            <p className="text-sm">In-depth peptide articles are being prepared.</p>
            <Link href="/products" className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold hover:text-blue-800">
              Browse our peptide catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Featured post */}
        {featured && (
          <div className="mb-10">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
              Featured Article
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 bg-white"
            >
              {featured.imageUrl && (
                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-slate-50">
                  <Image
                    src={featured.imageUrl}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              )}
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white mb-4 w-fit">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-slate-500 mb-5 leading-relaxed">{featured.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>{new Date(featured.date).toLocaleDateString()}</span>
                  {featured.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />{featured.readTime} read
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-blue-600">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white"
              >
                {post.imageUrl && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-50">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    {post.readTime && (
                      <>
                        <span>·</span>
                        <span>{post.readTime} read</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-blue-600">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  )
}
