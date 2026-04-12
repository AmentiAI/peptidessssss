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
  Activity,
  Dumbbell,
  Sparkles,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { HeroCarousel } from "@/components/peptide-hub/hero-carousel"
import {
  getFeaturedProducts,
  getAllCategories,
  getFeaturedBlogPosts,
  AFFILIATE_URL,
} from "@/lib/peptide-data"
import { staticProducts } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "PeptidesMaxxing — BPC-157, Tirzepatide & 60+ Peptides",
  description:
    "62+ research peptides. BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu — muscle growth, anti-aging, fat loss, and cognitive stacks with complete cycle guides.",
  alternates: { canonical: "https://www.peptidesmaxxing.com" },
  openGraph: {
    title: "PeptidesMaxxing — Buy BPC-157, Tirzepatide, Epithalon & 60+ Peptides",
    description:
      "62+ peptides, pre-built cycles, and expert science guides. BPC-157, Tirzepatide, Epithalon, Semax & more.",
    url: "https://www.peptidesmaxxing.com",
    type: "website",
  },
}

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
  { label: "COA Verified", value: "≥99%" },
  { label: "Research Studies", value: "5,000+" },
]

const TRUST_SIGNALS = [
  { icon: Shield, label: "COA Verified", desc: "Research grade" },
  { icon: TrendingUp, label: "62+ Products", desc: "Full catalog" },
  { icon: Brain, label: "Research Grade", desc: "For lab use only" },
  { icon: FlaskConical, label: "Independent Resource", desc: "Science-first editorial" },
]

const HERO_SHOWCASE_SLUGS = ["bpc-157", "tirzepatide", "epithalon", "semax"]

const GOAL_PAGES = [
  { href: "/recovery", label: "Recovery & Repair", desc: "BPC-157, TB-500, LL-37", icon: Activity, color: "#ef4444" },
  { href: "/fat-loss", label: "Fat Loss", desc: "Tirzepatide, Retatrutide, AOD9604", icon: Flame, color: "#f97316" },
  { href: "/anti-aging", label: "Anti-Aging", desc: "Epithalon, GHK-Cu, MOTS-C", icon: Sparkles, color: "#8b5cf6" },
  { href: "/cognitive", label: "Cognitive", desc: "Semax, Selank, Cerebrolysin", icon: Brain, color: "#3b82f6" },
  { href: "/muscle-growth", label: "Muscle Growth", desc: "IGF-1LR3, GHRP-2, Ipamorelin", icon: Dumbbell, color: "#22c55e" },
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
        "62+ research-grade peptides — BPC-157, Tirzepatide, Epithalon, Ipamorelin, GHK-Cu, Semax, TB-500. Muscle growth, fat loss, anti-aging, cognitive, and longevity peptide cycles.",
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
        "Premier independent peptide information resource. BPC-157, Tirzepatide, Epithalon, peptide cycles, and research guides.",
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

  // Hero showcase products (4 top picks, one per goal)
  const heroShowcaseProducts = HERO_SHOWCASE_SLUGS
    .map((slug) => staticProducts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof staticProducts

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SEO H1 — screen-reader accessible site heading */}
      <h1 className="sr-only">PeptidesMaxxing — Independent Research Peptide Resource</h1>

      {/* TOP HERO — Brand headline + product showcase */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Brand headline + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 bg-cyan-50 mb-6">
                <FlaskConical className="w-3.5 h-3.5 text-cyan-600" />
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">62+ Research-Grade Peptides</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-slate-900">
                The #1 Peptide<br />
                <span className="text-cyan-500">Research Hub</span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                BPC-157, Tirzepatide, Epithalon, Semax — 62+ research-grade peptides with complete science documentation, COA verification, and expert protocols.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/products"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors text-base"
                >
                  Browse All Peptides <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all text-base"
                >
                  Shop Phiogen
                </Link>
                <Link
                  href="/stacks"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-base"
                >
                  View Cycles
                </Link>
              </div>
              {/* Goal quick-links */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-xs text-slate-400 font-medium">Browse by goal:</span>
                {GOAL_PAGES.map((g) => (
                  <Link key={g.href} href={g.href} className="text-xs font-bold hover:underline underline-offset-2 transition-colors" style={{ color: g.color }}>
                    {g.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: 2×2 product cards with images */}
            <div className="grid grid-cols-2 gap-4">
              {heroShowcaseProducts.map((product) => (
                <div key={product.slug} className="group rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl bg-slate-100">🧪</div>
                    )}
                    {product.badge && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-200">
                      In Stock
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-slate-900 text-sm leading-tight mb-1 line-clamp-1">{product.name}</p>
                    {product.shortDescription && (
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 mb-2">{product.shortDescription}</p>
                    )}
                    <div className="flex gap-1.5">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 text-center py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-all"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/out/${product.slug}`}
                        target="_blank"
                        className="flex-1 text-center py-1.5 rounded-lg text-xs font-bold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
                      >
                        Buy →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Subtle background accents */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-50 rounded-full blur-3xl pointer-events-none opacity-60" />
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-blue-50 rounded-full blur-2xl pointer-events-none opacity-40" />
      </section>

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

      {/* BROWSE BY GOAL */}
      <section className="py-16 border-b border-slate-100 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-2">Goal-Based Research</p>
          <h2 className="text-3xl font-bold text-slate-900">Browse Peptides by Goal</h2>
          <p className="text-slate-500 mt-2 max-w-lg mx-auto">
            Curated peptide pages for every research goal — with products, mechanisms, and protocols.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {GOAL_PAGES.map(({ href, label, desc, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{ borderTopColor: color, borderTopWidth: "3px" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{desc}</p>
              <span className="text-xs font-bold flex items-center gap-1 mt-auto" style={{ color }}>
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
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
              Hand-picked for research quality, purity documentation, and COA verification.
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
              Shop Research Peptides <ArrowRight className="w-4 h-4" />
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

      {/* GUIDES SECTION */}
      <section className="py-16 border-t border-slate-100 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">
              Protocol Library
            </p>
            <h2 className="text-4xl font-bold text-slate-900">Research Guides</h2>
            <p className="text-slate-500 mt-2">
              Complete protocols for reconstitution, stacking, purity testing, and longevity research.
            </p>
          </div>
          <Link
            href="/guides"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            All Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { href: "/guides/peptide-storage-reconstitution-guide", title: "Peptide Storage & Reconstitution", desc: "Step-by-step protocol for BW ratios, temperature, and stability.", emoji: "🧪" },
            { href: "/guides/gh-peptide-stacking-guide", title: "GH Peptide Stacking Guide", desc: "Ipamorelin + CJC-1295 synergy, dosing, and protocols.", emoji: "📈" },
            { href: "/guides/peptide-purity-testing-guide", title: "Peptide Purity Testing (HPLC)", desc: "How to read COAs, interpret HPLC data, and spot red flags.", emoji: "🔬" },
            { href: "/guides/longevity-peptide-protocols", title: "Anti-Aging Peptide Protocols", desc: "Epithalon + GHK-Cu longevity stacks and research cycles.", emoji: "✨" },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group p-5 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white flex flex-col"
            >
              <span className="text-3xl mb-3">{g.emoji}</span>
              <h3 className="font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-2 leading-snug">
                {g.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{g.desc}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-purple-600">
                Read Guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

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
            Browse 62+ research-grade peptides with complete product documentation
            and expert research guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop Research Peptides <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Browse Catalog
            </Link>
          </div>
          <p className="mt-12 text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            All products are for research use only. Not for human consumption. PeptidesMaxxing may earn compensation from purchases made through links on this site, at no extra cost to you. Consult a qualified physician before any use.
          </p>
        </div>
      </section>

      {/* Research Partner Banner */}
      <section className="border-t border-slate-100 bg-violet-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-1">Research Partner</p>
              <p className="text-xl font-bold text-slate-900 mb-1">LooksMaxingStack.com</p>
              <p className="text-sm text-slate-500 max-w-lg">
                Compare peptides side-by-side, explore curated research stacks, and read additional science guides — our research partner for comprehensive looksmaxxing protocols.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a href="https://looksmaxingstack.com/compare" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-violet-600 text-white hover:bg-violet-700 transition-colors">
                Compare Peptides
              </a>
              <a href="https://looksmaxingstack.com/stacks" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-violet-700 border border-violet-300 bg-white hover:border-violet-500 transition-colors">
                View Stacks
              </a>
              <a href="https://looksmaxingstack.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-violet-700 border border-violet-300 bg-white hover:border-violet-500 transition-colors">
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
