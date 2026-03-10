import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { blogPosts } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Research Blog — In-Depth Guides & Reviews 2026 | PeptideLab",
  description:
    "In-depth research articles on BPC-157, TB-500, Ipamorelin, Epithalon, Semax, and more. Evidence-based peptide guides written by the PeptideLab research team.",
  alternates: { canonical: "https://peptidelab.com/blog" },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 border-b border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#00d4ff]" />
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest">Research Blog</p>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">Peptide Research Articles</h1>
          <p className="text-[rgba(255,255,255,0.55)] text-lg max-w-2xl">
            Evidence-based research articles, mechanism deep-dives, and protocol guides from the PeptideLab research team.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Featured post */}
        {featured && (
          <div className="mb-10">
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-4">Featured Article</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,212,255,0.25)] transition-all duration-300"
              style={{ background: "rgba(12,12,32,0.8)" }}
            >
              <div className="relative aspect-video md:aspect-auto overflow-hidden bg-[rgba(255,255,255,0.03)]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(12,12,32,0.3)]" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-black mb-4"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                  {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-[rgba(255,255,255,0.6)] mb-5 leading-relaxed">{featured.description}</p>
                <div className="flex items-center gap-4 text-xs text-[rgba(255,255,255,0.4)]">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.read_time} read</span>
                </div>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#00d4ff]">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,212,255,0.25)] transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(12,12,32,0.7)" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[rgba(255,255,255,0.03)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,32,0.7)] to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-black"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[rgba(255,255,255,0.4)] mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.read_time} read</span>
                </div>
                <h3 className="font-bold text-white leading-snug mb-2 group-hover:text-[#00d4ff] transition-colors line-clamp-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] line-clamp-2 leading-relaxed">{post.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#00d4ff]">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
