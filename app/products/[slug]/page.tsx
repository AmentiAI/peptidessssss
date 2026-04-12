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
import { productResearch } from "@/lib/product-research"
import { getProductFAQs } from "@/lib/product-faqs"

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
  const desc = (product.shortDescription ?? product.description?.slice(0, 140) ?? "") + " Research-grade — mechanisms, dosing, and benefits."
  const titleStr = `Buy ${product.name} — Research Overview, Benefits & Dosing | PeptidesMaxxing`
  const ogDesc = product.shortDescription ?? product.description?.slice(0, 155) ?? ""
  return {
    title: { absolute: titleStr },
    description: desc,
    keywords: [product.name, ...product.categories, "research peptide", "research grade peptides", "buy " + product.name, product.name + " benefits"],
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
  const researchContent = productResearch[slug] ?? null

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

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-700 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-slate-700 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🧪
                </div>
              )}
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold bg-slate-900 text-white">
                  {product.badge}
                </div>
              )}
            </div>
            {/* In stock badge */}
            <div className="absolute -bottom-4 right-6 px-4 py-2 rounded-xl border border-green-200 bg-green-50 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-green-700">
                {product.isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="pt-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-3">Buy {product.name}</h1>
            {product.shortDescription && (
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {product.shortDescription}
              </p>
            )}

            {/* Benefits */}
            {benefits.length > 0 && (
              <div className="mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Research Benefits
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buy CTA Box */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Available at</p>
                  <p className="text-xl font-bold text-slate-900">Research Grade</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Trusted Supplier</span>
                </div>
              </div>
              <Link
                href={`/out/${slug}`}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors mb-3"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy {product.name} — Research Grade
              </Link>
              <p className="text-xs text-center text-slate-400">
                PeptidesMaxxing may earn compensation from purchases at no extra cost to you.
              </p>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-4 mt-4">
              {[
                { icon: Shield, label: "COA Verified" },
                { icon: CheckCircle, label: "Trusted Supplier" },
                { icon: ArrowRight, label: "Research Grade" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="max-w-4xl">
          {researchContent ? (
            <>
              {/* Research label */}
              <div className="flex items-center gap-2 mb-6">
                <FlaskConical className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Research Overview
                </span>
              </div>
              {/* Rich research content */}
              <div className="prose-peptide">
                {renderResearch(researchContent)}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About {product.name}</h2>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </>
          )}

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
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

          {/* Stack CTA */}
          <div className="mt-8 p-4 rounded-xl border border-violet-200 bg-violet-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Stack {product.name} with other peptides</p>
              <p className="text-xs text-slate-500 mt-0.5">Browse pre-built research cycles and protocol combinations.</p>
            </div>
            <Link
              href="/stacks"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-violet-600 text-white hover:bg-violet-700 transition-colors"
            >
              View Stacks <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Research disclaimer */}
          <div className="mt-4 p-4 rounded-xl border border-amber-200 bg-amber-50">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong className="text-amber-900">Research Use Only:</strong> This product is for laboratory
              research purposes only. Not intended for human consumption. Not approved by the FDA for any
              therapeutic use. Consult a qualified physician before any use.
            </p>
          </div>

          {/* Second CTA */}
          <div className="mt-8 p-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-lg">Ready to order {product.name}?</p>
                <p className="text-sm text-slate-500">Research-grade purity — COA verified.</p>
              </div>
              <Link
                href={`/out/${slug}`}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                  Related Research
                </p>
                <h2 className="text-2xl font-bold text-slate-900">You Might Also Need</h2>
              </div>
              <Link
                href="/products"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* From the Research Blog */}
      {relatedBlogPosts.length > 0 && (
        <section className="py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Research Blog</p>
                <h2 className="text-2xl font-bold text-slate-900">From the Research Blog</h2>
              </div>
              <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all p-5 bg-white"
                >
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{post.category}</span>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {post.readTime ? `${post.readTime} read` : "Research article"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to Order?</h2>
          <p className="text-slate-500 mb-6">
            Get {product.name} — research grade, COA verified.
          </p>
          <Link
            href={`/out/${slug}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Buy {product.name}
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
