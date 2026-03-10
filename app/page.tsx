import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  FlaskConical,
  ArrowRight,
  Shield,
  Award,
  TrendingUp,
  Zap,
  Brain,
  Clock,
  Flame,
  Heart,
  CheckCircle,
  ExternalLink,
  BookOpen,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { HeroCarousel } from "@/components/peptide-hub/hero-carousel"
import {
  getFeaturedProducts,
  categories,
  getFeaturedBlogPosts,
} from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "PeptideLab — Premium Research Peptides | BPC-157, TB-500, Ipamorelin & More",
  description:
    "The definitive source for research peptides. Compare BPC-157, TB-500, Ipamorelin, CJC-1295, Epithalon, Semax, and 15+ more. ≥99% purity, third-party tested, COA available.",
  alternates: { canonical: "https://peptidelab.com" },
  openGraph: {
    title: "PeptideLab — Premium Research Peptides",
    description: "The definitive research peptide resource. 20+ compounds, ≥99% purity, expert guides.",
    url: "https://peptidelab.com",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
}

const ICON_MAP: Record<string, React.ElementType> = {
  Zap, TrendingUp, Clock, Brain, Flame, Heart, Shield,
}

const SITE_STATS = [
  { label: "Research Compounds", value: "20+" },
  { label: "Min. Purity", value: "≥99%" },
  { label: "Third-Party Tested", value: "100%" },
  { label: "Research Studies", value: "5,000+" },
]

const TRUST_SIGNALS = [
  { icon: Shield, label: "HPLC Verified", desc: "Every batch tested" },
  { icon: Award, label: "COA Provided", desc: "Mass spec confirmed" },
  { icon: CheckCircle, label: "In-Stock Guarantee", desc: "Ships within 24hrs" },
  { icon: FlaskConical, label: "Research Grade", desc: "≥99% purity standard" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://peptidelab.com/#website",
      url: "https://peptidelab.com",
      name: "PeptideLab",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://peptidelab.com/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://peptidelab.com/#organization",
      name: "PeptideLab",
      url: "https://peptidelab.com",
      description: "Premier research peptide information and affiliate resource",
    },
  ],
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const featuredPosts = getFeaturedBlogPosts()

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── SITE STATS ── */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SITE_STATS.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-[rgba(0,212,255,0.1)] bg-[rgba(0,212,255,0.04)]">
              <div className="text-2xl font-bold" style={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {stat.value}
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-8 border-y border-[rgba(0,212,255,0.08)]" style={{ background: "rgba(12,12,32,0.5)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST_SIGNALS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[rgba(0,212,255,0.2)]" style={{ background: "rgba(0,212,255,0.08)" }}>
                  <Icon className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.45)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-2">Featured Compounds</p>
            <h2 className="text-4xl font-bold text-white">Top Research Peptides</h2>
            <p className="text-[rgba(255,255,255,0.5)] mt-2">Hand-picked for research quality, purity, and documentation.</p>
          </div>
          <Link href="/products" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#00d4ff] hover:text-white transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
          >
            Browse All 20+ Research Peptides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-2">Browse by Goal</p>
            <h2 className="text-4xl font-bold text-white">Research Categories</h2>
            <p className="text-[rgba(255,255,255,0.5)] mt-2 max-w-xl mx-auto">
              Every peptide categorized by research application — from recovery to longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = ICON_MAP[cat.icon] ?? FlaskConical
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(12,12,32,0.7)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cat.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">{cat.name}</h3>
                    <p className="text-sm text-[rgba(255,255,255,0.5)] line-clamp-2 leading-relaxed">{cat.description}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold transition-colors" style={{ color: cat.color }}>
                      Explore {cat.name} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STACKS CTA BANNER ── */}
      <section className="py-16 mx-4 sm:mx-6 my-4 rounded-3xl overflow-hidden relative border border-[rgba(0,212,255,0.15)]"
        style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.08) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.08)] mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">Research Stacks</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pre-Built Research{" "}
            <span style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Protocols</span>
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-xl mx-auto mb-8">
            Synergistic peptide combinations curated by our research team — the recovery stack, GH protocol, longevity stack, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stacks"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-black transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 25px rgba(0,212,255,0.25)" }}
            >
              View Research Stacks <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guides" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-[rgba(255,255,255,0.15)] hover:border-[rgba(0,212,255,0.4)] transition-all">
              Research Guides <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-2">Latest Science</p>
            <h2 className="text-4xl font-bold text-white">Research Blog</h2>
            <p className="text-[rgba(255,255,255,0.5)] mt-2">In-depth guides, mechanism breakdowns, and research reviews.</p>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#00d4ff] hover:text-white transition-colors">
            All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,32,0.8)] to-transparent" />
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
                <h3 className="font-bold text-white leading-snug mb-2 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.5)] line-clamp-2 leading-relaxed flex-1">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#00d4ff]">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-4">Start Your Research</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Explore the Science?
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.6)] mb-10 max-w-xl mx-auto">
            Browse 20+ research-grade peptides with ≥99% purity, complete COA documentation, and expert research guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-bold text-black transition-all hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                boxShadow: "0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(124,58,237,0.15)",
              }}
            >
              Shop Research Peptides <ExternalLink className="w-5 h-5" />
            </Link>
            <Link href="/guides" className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-semibold text-white border border-[rgba(255,255,255,0.15)] hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.05)] transition-all">
              Research Guides
            </Link>
          </div>
          <p className="mt-12 text-xs text-[rgba(255,255,255,0.3)] max-w-2xl mx-auto leading-relaxed">
            ⚗️ All products are for research use only. Not for human consumption. PeptideLab earns affiliate commissions at no extra cost to you. Consult a qualified physician before any use.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
