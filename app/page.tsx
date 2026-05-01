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
import { ProductSearch } from "@/components/peptide-hub/product-search"
import {
  getFeaturedProducts,
  getAllCategories,
  getFeaturedBlogPosts,
  AFFILIATE_URL,
} from "@/lib/peptide-data"
import { staticProducts } from "@/lib/static-products"

export const metadata: Metadata = {
  title: "Buy Peptides Online — BPC-157, Tirzepatide & 60+ More",
  description:
    "Buy 62+ peptides online — BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, Ipamorelin and more. High purity, COA verified, fast shipping. Muscle, fat loss, anti-aging & cognitive stacks.",
  keywords: [
    "buy peptides online",
    "peptides for sale",
    "buy BPC-157",
    "buy Tirzepatide",
    "buy Epithalon",
    "buy Ipamorelin",
    "buy GHK-Cu",
    "best place to buy peptides",
    "peptide stacks for sale",
    "peptide price",
  ],
  alternates: { canonical: "https://www.peptidesmaxxing.com" },
  openGraph: {
    title: "Buy Peptides Online — BPC-157, Tirzepatide, Epithalon & 60+ More",
    description:
      "62+ peptides for sale, pre-built stacks, and expert guides. BPC-157, Tirzepatide, Epithalon, Semax & more — high purity, COA verified, fast shipping.",
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
  { label: "Peptides for Sale", value: "62+" },
  { label: "Pre-Built Stacks", value: "15+" },
  { label: "COA Verified", value: "≥99%" },
  { label: "Studies Cited", value: "5,000+" },
]

const TRUST_SIGNALS = [
  { icon: Shield, label: "COA Verified", desc: "99%+ purity" },
  { icon: TrendingUp, label: "62+ Products", desc: "Full catalog" },
  { icon: Brain, label: "Trusted Supplier", desc: "Lab grade" },
  { icon: FlaskConical, label: "Fast Shipping", desc: "Tracked & insured" },
]

const HERO_SHOWCASE_SLUGS = ["bpc-157-10mg", "tirzepatide-15mg", "epitalon-10mg", "n-acetyl-semax-amidate-30mg"]

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
        "Buy 62+ peptides online — BPC-157, Tirzepatide, Epithalon, Ipamorelin, GHK-Cu, Semax, TB-500. Muscle growth, fat loss, anti-aging, cognitive, and longevity peptide stacks. High purity, COA verified.",
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
        "Buy peptides online — BPC-157, Tirzepatide, Epithalon, peptide stacks, and expert guides. High purity, COA verified, fast shipping.",
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

  // Hero showcase products (4 top picks) — try specific slugs first, fall back to first 4 featured
  const heroShowcaseProducts = (() => {
    const bySlug = HERO_SHOWCASE_SLUGS
      .map((slug) => staticProducts.find((p) => p.slug === slug))
      .filter(Boolean) as typeof staticProducts
    if (bySlug.length === 4) return bySlug
    return featuredProducts.slice(0, 4) as typeof staticProducts
  })()

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SEO H1 — screen-reader accessible site heading */}
      <h1 className="sr-only">PeptidesMaxxing — Buy Peptides Online</h1>

      {/* TOP HERO — Brand headline + product showcase */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-8 pb-14 lg:pt-10 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Brand headline + CTAs */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 bg-cyan-50 mb-6">
                <FlaskConical className="w-3.5 h-3.5 text-cyan-600" />
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">62+ Peptides — High Purity, COA Verified</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-slate-900">
                Buy Peptides<br />
                <span className="text-cyan-500">Online</span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                BPC-157, Tirzepatide, Epithalon, Semax — 62+ peptides for sale with high purity, COA verification, and fast shipping from a trusted supplier.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link
                  href="/products"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors text-base"
                >
                  Shop All Peptides <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all text-base"
                >
                  Buy Now
                </Link>
                <Link
                  href="/stacks"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-base"
                >
                  View Stacks
                </Link>
              </div>
              {/* Search bar */}
              <div className="max-w-md">
                <ProductSearch />
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
                <div key={product.slug} className="group relative rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Full-card clickable overlay — sits above content, below buttons */}
                  <Link href={`/products/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
                  <div className="relative aspect-square overflow-hidden bg-white p-2">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain"
                        priority
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl bg-slate-100">🧪</div>
                    )}
                    {product.badge && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white z-20">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-50 text-green-700 border border-green-200 z-20">
                      In Stock
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-slate-900 text-sm leading-tight mb-1 line-clamp-1">{product.name}</p>
                    {product.shortDescription && (
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 mb-2">{product.shortDescription}</p>
                    )}
                    {/* Buttons sit above the overlay via z-20 */}
                    <div className="relative z-20 flex gap-1.5">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 text-center py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-all"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/out/${product.slug}`}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
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
          <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-2">Shop by Goal</p>
          <h2 className="text-3xl font-bold text-slate-900">Buy Peptides by Goal</h2>
          <p className="text-slate-500 mt-2 max-w-lg mx-auto">
            Curated peptide pages for every goal — products, mechanisms, and dosing protocols.
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
            <h2 className="text-4xl font-bold text-slate-900">Top Peptides for Sale</h2>
            <p className="text-slate-500 mt-2">
              Hand-picked for purity, COA documentation, and trusted-supplier verification.
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
            <h2 className="text-4xl font-bold text-slate-900">Shop by Category</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Every peptide grouped by goal — from recovery to longevity to weight loss.
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
              Peptide Stacks
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pre-Built Peptide Stacks
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            Synergistic peptide combinations curated for specific goals — Wolverine Stack, Glow Stack,
            Nova Mind, Prime Metabolic, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stacks"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors"
            >
              View Peptide Stacks <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white border border-slate-700 hover:border-slate-500 transition-all"
            >
              Shop Peptides <ArrowRight className="w-4 h-4" />
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
                Latest from the Blog
              </p>
              <h2 className="text-4xl font-bold text-slate-900">From the Blog</h2>
              <p className="text-slate-500 mt-2">
                In-depth peptide guides, mechanism breakdowns, and buyer's reviews.
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
            <h2 className="text-4xl font-bold text-slate-900">Peptide Guides</h2>
            <p className="text-slate-500 mt-2">
              Complete protocols for reconstitution, stacking, purity testing, and longevity dosing.
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
            { href: "/guides/longevity-peptide-protocols", title: "Anti-Aging Peptide Protocols", desc: "Epithalon + GHK-Cu longevity stacks and dosing schedules.", emoji: "✨" },
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
            Ready to Buy
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Buy Peptides Online — High Purity, Fast Shipping
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
            Shop 62+ peptides for sale with complete product documentation,
            COA verification, and expert dosing guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop Peptides Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Browse Catalog
            </Link>
          </div>
          <p className="mt-12 text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: Peptides are sold for laboratory and educational use only. Not for human or veterinary use. Buyers are responsible for compliance with local regulations. PeptidesMaxxing may earn compensation from purchases made through links on this site, at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Partner Banner */}
      <section className="border-t border-slate-100 bg-violet-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-1">Sister Site</p>
              <p className="text-xl font-bold text-slate-900 mb-1">LooksMaxingStack.com</p>
              <p className="text-sm text-slate-500 max-w-lg">
                Compare peptides side-by-side, explore curated stacks, and read additional guides — our sister site for comprehensive looksmaxxing protocols.
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
