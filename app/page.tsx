import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Zap,
  Brain,
  Clock,
  Flame,
  Heart,
  Star,
  Package,
  Package2,
  FlaskConical,
  BookOpen,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { HeroCarousel } from "@/components/peptide-hub/hero-carousel"
import {
  getFeaturedProducts,
  getAllCategories,
  getFeaturedBlogPosts,
} from "@/lib/peptide-data"
import { staticProducts } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "PeptidesMaxxing — BPC-157, Tirzepatide & 60+ Peptides",
  description:
    "62+ research peptides from Pantheon Peptides. BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu — muscle growth, anti-aging, fat loss, and cognitive stacks with complete cycle guides.",
  alternates: { canonical: "https://www.peptidesmaxxing.com" },
  openGraph: {
    title: "PeptidesMaxxing — Buy BPC-157, Tirzepatide, Epithalon & 60+ Peptides",
    description:
      "62+ peptides, pre-built cycles, and expert science guides. BPC-157, Tirzepatide, Epithalon, Semax & more.",
    url: "https://www.peptidesmaxxing.com",
    type: "website",
  },
}

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  TrendingUp,
  Clock,
  Brain,
  Flame,
  Heart,
  Shield,
  Star,
  Package,
  Package2,
  FlaskConical,
}

const SITE_STATS = [
  { label: "Research Peptides", value: "62+" },
  { label: "Peptide Cycles", value: "15+" },
  { label: "Trusted Supplier", value: "Pantheon" },
  { label: "Research Studies", value: "5,000+" },
]

const TRUST_SIGNALS = [
  { icon: Shield, label: "Pantheon Peptides", desc: "Trusted supplier" },
  { icon: TrendingUp, label: "62+ Products", desc: "Full catalog" },
  { icon: Brain, label: "Research Grade", desc: "For lab use only" },
  { icon: FlaskConical, label: "Affiliate Disclosure", desc: "We earn commissions" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.peptidesmaxxing.com/#website",
      url: "https://www.peptidesmaxxing.com",
      name: "PeptidesMaxxing",
      description:
        "62+ peptides from Pantheon Peptides — BPC-157, Tirzepatide, Epithalon, Ipamorelin, GHK-Cu, Semax, TB-500. Muscle growth, fat loss, anti-aging, cognitive, and longevity peptide cycles.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.peptidesmaxxing.com/#organization",
      name: "PeptidesMaxxing",
      url: "https://www.peptidesmaxxing.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.peptidesmaxxing.com/images/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Premier peptide information and affiliate resource for Pantheon Peptides. BPC-157, Tirzepatide, Epithalon, peptide cycles, and research guides.",
      sameAs: [
        "https://www.reddit.com/r/PeptidesMaxxing",
        "https://x.com/peptidesmaxxing",
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.peptidesmaxxing.com/#categories",
      name: "Peptide Categories",
      description: "Browse peptides by category",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Muscle Growth Peptides", url: "https://www.peptidesmaxxing.com/categories/muscle-growth" },
        { "@type": "ListItem", position: 2, name: "Anti-Aging Peptides", url: "https://www.peptidesmaxxing.com/categories/anti-aging" },
        { "@type": "ListItem", position: 3, name: "Weight Loss Peptides", url: "https://www.peptidesmaxxing.com/categories/weight-loss" },
        { "@type": "ListItem", position: 4, name: "Brain & Nerve Peptides", url: "https://www.peptidesmaxxing.com/categories/brain-nerve" },
        { "@type": "ListItem", position: 5, name: "Immunity Peptides", url: "https://www.peptidesmaxxing.com/categories/immunity" },
        { "@type": "ListItem", position: 6, name: "Skin, Tissue & Bone Peptides", url: "https://www.peptidesmaxxing.com/categories/skin-tissue-bone" },
      ],
    },
  ],
}

export default async function HomePage() {
  const [featuredProducts, categories, featuredPosts] = await Promise.all([
    getFeaturedProducts(),
    getAllCategories(),
    getFeaturedBlogPosts(),
  ])

  // Use first 6 featured for carousel
  const carouselProducts = featuredProducts.slice(0, 6)

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SEO H1 — screen-reader accessible site heading */}
      <h1 className="sr-only">PeptidesMaxxing — Research Peptides from Pantheon Peptides</h1>

      {/* HERO CAROUSEL */}
      <HeroCarousel products={carouselProducts} />

      {/* SITE STATS */}
      <section className="py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SITE_STATS.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl border border-slate-100 bg-slate-50">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-6 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST_SIGNALS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-slate-200">
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="text-xs text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              Featured Compounds
            </p>
            <h2 className="text-4xl font-bold text-slate-900">Top Peptides</h2>
            <p className="text-slate-500 mt-2">
              Hand-picked from Pantheon Peptides catalog for research quality and documentation.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Browse All 62+ Peptides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              Browse by Goal
            </p>
            <h2 className="text-4xl font-bold text-slate-900">Research Categories</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Every peptide categorized by research application — from recovery to longevity to weight loss.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.filter((c) => c.name !== "Supplies").map((cat) => {
              const Icon = ICON_MAP[cat.icon ?? ""] ?? FlaskConical
              const catCount = staticProducts.filter((p) => p.categories.includes(cat.name)).length
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}35` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cat.color ?? "#0f172a" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {cat.name}
                      </h3>
                      {catCount > 0 && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {catCount}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 mt-3 text-xs font-semibold transition-colors"
                      style={{ color: cat.color ?? "#2563eb" }}
                    >
                      Explore {cat.name} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CYCLES CTA BANNER */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Peptide Cycles
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pre-Built Peptide Cycles
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Synergistic peptide combinations curated for specific research goals — Wolverine Cycle, Glow Cycle,
            Nova Mind, Prime Metabolic, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stacks"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors"
            >
              View Peptide Cycles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-slate-700 hover:border-slate-500 transition-all"
            >
              Shop on Pantheon <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG POSTS */}
      {featuredPosts.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                Latest Science
              </p>
              <h2 className="text-4xl font-bold text-slate-900">Research Blog</h2>
              <p className="text-slate-500 mt-2">
                In-depth guides, mechanism breakdowns, and research reviews.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
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
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
            Start Your Research
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Ready to Explore the Science?
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
            Browse 62+ peptides from Pantheon Peptides with complete product documentation
            and expert research guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop Pantheon Peptides <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Browse Catalog
            </Link>
          </div>
          <p className="mt-12 text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            All products are for research use only. Not for human consumption. PeptidesMaxxing earns affiliate
            commissions at no extra cost to you. Consult a qualified physician before any use.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
