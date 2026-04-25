import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart, ArrowRight, CheckCircle, Shield, ChevronRight, FlaskConical } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
  getAllBlogPosts,
  AFFILIATE_URL,
} from "@/lib/peptide-data"
import { getResearchForSlug } from "@/lib/product-research"
import { generateFallbackResearch } from "@/lib/product-fallback-research"
import { getProductFAQs } from "@/lib/product-faqs"

export const dynamic = "force-static"
export const revalidate = 86400

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}
  const priceBit = product.price != null ? ` From $${product.price.toFixed(2)}.` : ""
  const desc = (product.shortDescription ?? product.description?.slice(0, 130) ?? "") + ` Buy ${product.name} online — high purity, COA verified, fast shipping.` + priceBit
  const titleStr = `Buy ${product.name} Online — Price, Benefits & Dosing | PeptidesMaxxing`
  const ogDesc = product.shortDescription ?? product.description?.slice(0, 155) ?? ""
  return {
    title: { absolute: titleStr },
    description: desc,
    keywords: [
      `buy ${product.name}`,
      `${product.name} for sale`,
      `${product.name} price`,
      `${product.name} online`,
      `order ${product.name}`,
      `${product.name} benefits`,
      `${product.name} dosage`,
      product.name,
      ...product.categories,
      "peptides for sale",
      "buy peptides online",
    ],
    alternates: { canonical: `https://www.peptidesmaxxing.com/products/${slug}` },
    openGraph: {
      title: titleStr,
      description: ogDesc,
      url: `https://www.peptidesmaxxing.com/products/${slug}`,
      siteName: "PeptidesMaxxing",
      type: "website",
      images: product.imageUrl
        ? [{ url: product.imageUrl, width: 800, height: 800, alt: product.name }]
        : [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleStr,
      description: ogDesc.slice(0, 155),
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const [related, allBlogPosts] = await Promise.all([
    getRelatedProducts(slug),
    getAllBlogPosts(),
  ])
  const researchContent = getResearchForSlug(slug) ?? generateFallbackResearch(product)

  const productKeywords = [
    product.name.toLowerCase(),
    slug.replace(/-/g, " "),
    ...product.categories.map((c) => c.toLowerCase()),
  ]
  const relatedBlogPosts = allBlogPosts
    .filter((p) =>
      productKeywords.some(
        (kw) =>
          p.title.toLowerCase().includes(kw) ||
          p.tags.some((t) => t.toLowerCase().includes(kw)) ||
          p.description.toLowerCase().includes(kw)
      )
    )
    .slice(0, 3)

  // Parse description into benefits list
  const benefits = product.description
    .split(/[.,]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 10)
    .slice(0, 6)

  function parseInline(text: string): React.ReactNode {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: React.ReactNode[] = []
    let lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
      const [, label, href] = match
      if (href.startsWith("/")) {
        parts.push(
          <Link key={match.index} href={href} className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium transition-colors">
            {label}
          </Link>
        )
      } else {
        parts.push(<a key={match.index} href={href} className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">{label}</a>)
      }
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex))
    return parts.length === 0 ? text : parts.length === 1 ? parts[0] : <>{parts}</>
  }

  function renderResearch(content: string) {
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
            {parseInline(line.slice(2))}
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
          {parseInline(line)}
        </p>
      )
    })
  }

  // Deterministic hash → picks unique heading variants per product
  const hash = (() => {
    let h = 0
    for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
    return h
  })()
  const pick = <T,>(arr: T[]) => arr[hash % arr.length]
  const primaryCat = product.categories[0] ?? "Peptide"

  const h1Variants = [
    `Buy ${product.name} Online`,
    `${product.name} for Sale`,
    `Order ${product.name}`,
    `${product.name} — Buy Online`,
    `Buy ${product.name} — High Purity`,
    `${product.name} — ${primaryCat} Peptide`,
    `Get ${product.name} — Fast Shipping`,
    `${product.name}: Benefits, Dosage & Price`,
  ]
  const researchLabelVariants = [
    `${product.name} Overview`,
    `Inside ${product.name}`,
    `${product.name} — How It Works`,
    `About ${product.name}`,
    `${product.name} — Profile`,
    `${product.name} — Mechanism & Benefits`,
    `${product.name} Deep Dive`,
    `The Science Behind ${product.name}`,
  ]
  const aboutVariants = [
    `About ${product.name}`,
    `What Is ${product.name}?`,
    `${product.name} — At a Glance`,
    `Understanding ${product.name}`,
    `${product.name}: Background`,
    `${product.name} Primer`,
  ]
  const faqVariants = [
    `${product.name} — FAQs`,
    `Common Questions About ${product.name}`,
    `${product.name}: Buyer Q&A`,
    `Frequently Asked: ${product.name}`,
    `${product.name} — Q&A`,
    `Questions About Buying ${product.name}`,
    `${product.name} — What Buyers Ask`,
    `FAQ — ${product.name}`,
  ]
  const relatedVariants = [
    `Peptides Often Paired with ${product.name}`,
    `Buy Alongside ${product.name}`,
    `Complementary Peptides to ${product.name}`,
    `Commonly Stacked with ${product.name}`,
    `More Peptides Like ${product.name}`,
    `Related to ${product.name}`,
    `Customers Also Buy With ${product.name}`,
    `${product.name} — Companion Peptides`,
  ]
  const relatedKickerVariants = [
    `Related Peptides`,
    `Adjacent Compounds`,
    `Pair With ${product.name}`,
    `In the Same Category`,
    `Customer Favorites`,
    `Also Worth Buying`,
    `Complementary Picks`,
  ]
  const blogVariants = [
    `${product.name} — From the Blog`,
    `Articles on ${product.name}`,
    `${product.name} Guides & Articles`,
    `Further Reading on ${product.name}`,
    `Featured ${product.name} Articles`,
    `${product.name} — Deep-Dive Reads`,
    `Blog Coverage: ${product.name}`,
    `${product.name} — Editorial Coverage`,
  ]
  const blogKickerVariants = [
    `From the Blog`,
    `Editorial`,
    `Long-Form Reads`,
    `Buyer's Journal`,
    `From Our Writers`,
    `Background Reading`,
  ]
  const finalCtaVariants = [
    `Ready to Order ${product.name}?`,
    `Buy ${product.name} Today`,
    `Get ${product.name} — High Purity`,
    `Order ${product.name} Now`,
    `Purchase ${product.name} Online`,
    `Secure Your ${product.name} Vial`,
    `Add ${product.name} to Your Cart`,
    `Buy ${product.name} — Verified Supplier`,
  ]

  const h1 = pick(h1Variants)
  const researchLabel = pick(researchLabelVariants)
  const aboutHeading = pick(aboutVariants)
  const faqHeading = pick(faqVariants)
  const relatedHeading = pick(relatedVariants)
  const relatedKicker = pick(relatedKickerVariants)
  const blogHeading = pick(blogVariants)
  const blogKicker = pick(blogKickerVariants)
  const finalCtaHeading = pick(finalCtaVariants)

  // Structural variants — each page gets a different skeleton (not just different text)
  const heroLayout = hash % 3 // 0=image-left, 1=image-right, 2=stacked
  const benefitsStyle = (hash >> 2) % 3 // 0=list, 1=grid-cards, 2=pills
  const buyBoxStyle = (hash >> 4) % 3 // 0=slate, 1=gradient, 2=bold-outline
  const trustRowStyle = (hash >> 5) & 1 // 0=inline, 1=badge row
  const showQuickFacts = ((hash >> 6) & 1) === 1
  const showStorageNote = ((hash >> 8) & 1) === 1
  const showCategorySpotlight = ((hash >> 10) & 1) === 1 && product.categories.length > 0
  const showStackCta = ((hash >> 12) & 1) === 1
  const showSafetyCallout = ((hash >> 14) & 1) === 1
  const showSupplierBlurb = ((hash >> 16) & 1) === 1

  function shuffle<T>(arr: T[], seed: number): T[] {
    const a = [...arr]
    let s = (seed || 1) >>> 0
    for (let i = a.length - 1; i > 0; i--) {
      s = ((s * 1664525) + 1013904223) >>> 0
      const j = s % (i + 1)
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp
    }
    return a
  }

  const faqs = getProductFAQs(slug, product.name, product.description, product.categories)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.peptidesmaxxing.com/products/${slug}`,
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    url: `https://www.peptidesmaxxing.com/products/${slug}`,
    brand: { "@type": "Brand", name: "PeptidesMaxxing" },
    category: product.categories[0],
    offers: {
      "@type": "Offer",
      availability: product.isInStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://www.peptidesmaxxing.com/products/${slug}`,
      ...(product.price != null ? { price: product.price.toString(), priceCurrency: "USD" } : {}),
      seller: { "@type": "Organization", name: "PeptidesMaxxing", url: "https://www.peptidesmaxxing.com" },
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.peptidesmaxxing.com/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://www.peptidesmaxxing.com/products/${slug}` },
    ],
  }

  const catSlug = (c: string) => c.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

  const heroImage = (
    <div className="relative">
      <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
        {product.imageUrl ? (
          <Image src={product.imageUrl} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority unoptimized />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-8xl">🧪</div>
        )}
        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold bg-slate-900 text-white">{product.badge}</div>
        )}
      </div>
      <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-xl border border-green-200 bg-green-50 flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        <span className="text-sm font-bold text-green-700">{product.isInStock ? "In Stock" : "Out of Stock"}</span>
      </div>
    </div>
  )

  const benefitsBlock = benefits.length === 0 ? null : (
    <div className="mb-8">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Benefits</p>
      {benefitsStyle === 0 && (
        <div className="grid grid-cols-1 gap-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              {b}
            </div>
          ))}
        </div>
      )}
      {benefitsStyle === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-700">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              {b}
            </div>
          ))}
        </div>
      )}
      {benefitsStyle === 2 && (
        <div className="flex flex-wrap gap-2">
          {benefits.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 bg-blue-50 border border-blue-100">
              <CheckCircle className="w-3 h-3 text-blue-600" />
              {b}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  const buyBoxClass =
    buyBoxStyle === 0 ? "p-6 rounded-2xl border border-slate-200 bg-slate-50" :
    buyBoxStyle === 1 ? "p-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-50" :
    "p-6 rounded-2xl border-2 border-slate-900 bg-white"

  const buyCta = (
    <div className={buyBoxClass}>
      <div className="flex items-center justify-between mb-4">
        <div>
          {product.price != null ? (
            <>
              <p className="text-xs text-slate-500 mb-1">Starting at</p>
              <p className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
            </>
          ) : (
            <>
              <p className="text-xs text-slate-500 mb-1">Available from</p>
              <p className="text-xl font-bold text-slate-900">Verified Supplier</p>
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-700">In Stock</span>
        </div>
      </div>
      <Link href={`/out/${slug}`} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors mb-3">
        <ShoppingCart className="w-5 h-5" />
        Buy {product.name} Now
      </Link>
      <p className="text-xs text-center text-slate-400">Fast shipping &middot; COA verified &middot; PeptidesMaxxing may earn from qualifying purchases.</p>
    </div>
  )

  const trustItems = [
    { icon: Shield, label: "COA Verified" },
    { icon: CheckCircle, label: "Trusted Supplier" },
    { icon: ArrowRight, label: "Fast Shipping" },
  ]
  const trustRow = trustRowStyle === 0 ? (
    <div className="flex flex-wrap gap-4 mt-4">
      {trustItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
          <Icon className="w-3.5 h-3.5 text-slate-400" />
          {label}
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {trustItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600">
          <Icon className="w-3.5 h-3.5 text-slate-500" />
          {label}
        </div>
      ))}
    </div>
  )

  const heroDetails = (
    <div className={heroLayout === 2 ? "" : "pt-4"}>
      <div className="flex flex-wrap gap-2 mb-4">
        {product.categories.map((cat) => (
          <Link key={cat} href={`/categories/${catSlug(cat)}`} className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors">
            {cat}
          </Link>
        ))}
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-3">{h1}</h1>
      {product.shortDescription && (
        <p className="text-slate-600 text-lg leading-relaxed mb-6">{product.shortDescription}</p>
      )}
      {benefitsBlock}
      {buyCta}
      {trustRow}
    </div>
  )

  // Reorderable middle sections
  const researchSection = (
    <section key="research" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-4xl">
        {researchContent ? (
          <>
            <div className="flex items-center gap-2 mb-6">
              <FlaskConical className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{researchLabel}</span>
            </div>
            <div className="prose-peptide">{renderResearch(researchContent)}</div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{aboutHeading}</h2>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </>
        )}
      </div>
    </section>
  )

  const faqSection = (
    <section key="faq" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-100">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{faqHeading}</h2>
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.question}</span>
                <span className="text-slate-400 text-lg flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )

  const stackCtaSection = !showStackCta ? null : (
    <section key="stack" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl p-4 rounded-xl border border-violet-200 bg-violet-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Stack {product.name} with other peptides</p>
          <p className="text-xs text-slate-500 mt-0.5">Browse pre-built peptide stacks and bundle deals.</p>
        </div>
        <Link href="/stacks" className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-violet-600 text-white hover:bg-violet-700 transition-colors">
          View Stacks <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  )

  const disclaimerSection = (
    <section key="disclaimer" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl p-4 rounded-xl border border-amber-200 bg-amber-50">
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong className="text-amber-900">Research Use Only:</strong> This product is for laboratory
          research purposes only. Not intended for human consumption. Not approved by the FDA for any
          therapeutic use. Consult a qualified physician before any use.
        </p>
      </div>
    </section>
  )

  const secondCtaSection = (
    <section key="secondCta" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl p-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-900 text-lg">Buy {product.name} today</p>
            <p className="text-sm text-slate-500">High purity &middot; COA verified &middot; ships fast.</p>
          </div>
          <Link href={`/out/${slug}`} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors whitespace-nowrap">
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  )

  const relatedSection = related.length === 0 ? null : (
    <section key="related" className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{relatedKicker}</p>
            <h2 className="text-2xl font-bold text-slate-900">{relatedHeading}</h2>
          </div>
          <Link href="/products" className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
      </div>
    </section>
  )

  const blogSection = relatedBlogPosts.length === 0 ? null : (
    <section key="blog" className="py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{blogKicker}</p>
            <h2 className="text-2xl font-bold text-slate-900">{blogHeading}</h2>
          </div>
          <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {relatedBlogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all p-5 bg-white">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{post.category}</span>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 flex-1">{post.title}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                {post.readTime ? `${post.readTime} read` : "Buyer's guide"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )

  const quickFactsSection = !showQuickFacts ? null : (
    <section key="quickFacts" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Compound</p>
          <p className="text-sm font-bold text-slate-900 leading-tight">{product.name}</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Category</p>
          <p className="text-sm font-bold text-slate-900 leading-tight">{primaryCat}</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Purity</p>
          <p className="text-sm font-bold text-slate-900 leading-tight">99%+</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Shipping</p>
          <p className="text-sm font-bold text-slate-900 leading-tight">Fast &amp; Tracked</p>
        </div>
      </div>
    </section>
  )

  const storageNoteSection = !showStorageNote ? null : (
    <section key="storage" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl p-5 rounded-xl border border-slate-200 bg-slate-50">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Storage &amp; Handling</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Ships lyophilized for stability. Store unopened {product.name} per the supplier label.
          Reconstituted vials are kept refrigerated. Always follow the COA included with your order.
        </p>
      </div>
    </section>
  )

  const categorySpotlightSection = !showCategorySpotlight ? null : (
    <section key="categorySpotlight" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl p-6 rounded-2xl border border-blue-200 bg-blue-50">
        <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">Shop {primaryCat}</p>
        <p className="text-slate-700 leading-relaxed text-sm mb-3">
          {product.name} is part of our {primaryCat.toLowerCase()} peptide collection. Browse the full
          category to compare prices, dosages, and find the right peptide for your goals.
        </p>
        <Link href={`/categories/${catSlug(primaryCat)}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900">
          Browse {primaryCat} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  )

  const safetyCalloutSection = !showSafetyCallout ? null : (
    <section key="safety" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl p-5 rounded-xl border-l-4 border-amber-400 bg-amber-50">
        <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Disclaimer</p>
        <p className="text-sm text-amber-900 leading-relaxed">
          {product.name} is sold for laboratory and educational use only and is not a drug,
          supplement, or food. Not for human or veterinary use. Buyers are responsible for compliance
          with local regulations.
        </p>
      </div>
    </section>
  )

  const supplierBlurbSection = !showSupplierBlurb ? null : (
    <section key="supplier" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <Shield className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm font-bold text-slate-900 mb-1">Third-Party Tested</p>
          <p className="text-xs text-slate-500 leading-relaxed">Independent HPLC and MS verification on every batch.</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <CheckCircle className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm font-bold text-slate-900 mb-1">99%+ Purity</p>
          <p className="text-xs text-slate-500 leading-relaxed">{product.name} ships from a verified supplier with documented purity.</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-200 bg-white">
          <FlaskConical className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-sm font-bold text-slate-900 mb-1">COA On Request</p>
          <p className="text-xs text-slate-500 leading-relaxed">Certificate of Analysis available from the supplier on file.</p>
        </div>
      </div>
    </section>
  )

  // Deterministic section arrangement — pin research in first half, shuffle rest
  const middle = [
    researchSection,
    faqSection,
    stackCtaSection,
    disclaimerSection,
    secondCtaSection,
    relatedSection,
    blogSection,
    quickFactsSection,
    storageNoteSection,
    categorySpotlightSection,
    safetyCalloutSection,
    supplierBlurbSection,
  ].filter(Boolean) as React.ReactElement[]

  const ordered = shuffle(middle, hash)
  const researchIdx = ordered.findIndex((s) => s.key === "research")
  if (researchIdx > 1) {
    const target = hash % 2
    const [r] = ordered.splice(researchIdx, 1)
    ordered.splice(target, 0, r)
  }

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-slate-700 transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero — layout varies by slug */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {heroLayout === 2 ? (
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">{heroImage}</div>
            {heroDetails}
          </div>
        ) : heroLayout === 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {heroImage}
            {heroDetails}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">{heroImage}</div>
            <div className="lg:order-1">{heroDetails}</div>
          </div>
        )}
      </section>

      {ordered}

      {/* Final CTA — always last */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{finalCtaHeading}</h2>
          <p className="text-slate-500 mb-6">Buy {product.name} online — high purity, COA verified, fast shipping.</p>
          <Link href={`/out/${slug}`} target="_blank" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            Buy {product.name} Now
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
