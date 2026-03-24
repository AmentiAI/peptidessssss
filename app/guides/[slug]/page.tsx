import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import {
  getGuideBySlug,
  getAllGuideSlugs,
  getAllGuides,
} from "@/lib/peptide-data"

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `https://www.peptidesmaxxing.com/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `https://www.peptidesmaxxing.com/guides/${slug}`,
      type: "article",
      images: guide.imageUrl ? [{ url: guide.imageUrl, width: 1200, height: 630, alt: guide.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = await getGuideBySlug(slug)
  if (!guide) notFound()

  const allGuides = await getAllGuides()
  const related = allGuides.filter((g) => g.slug !== slug).slice(0, 2)

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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.peptidesmaxxing.com/guides/${slug}`,
    headline: guide.title,
    description: guide.description,
    url: `https://www.peptidesmaxxing.com/guides/${slug}`,
    datePublished: guide.date?.toISOString(),
    dateModified: guide.updatedAt?.toISOString() ?? guide.date?.toISOString(),
    author: {
      "@type": "Organization",
      name: guide.author ?? "PeptidesMaxxing Research Team",
      url: "https://www.peptidesmaxxing.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PeptidesMaxxing",
      url: "https://www.peptidesmaxxing.com",
      logo: { "@type": "ImageObject", url: "https://www.peptidesmaxxing.com/images/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.peptidesmaxxing.com/guides/${slug}` },
    ...(guide.imageUrl ? { image: { "@type": "ImageObject", url: guide.imageUrl, width: 1200, height: 630 } } : {}),
    inLanguage: "en-US",
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Research Guides", item: "https://www.peptidesmaxxing.com/guides" },
      { "@type": "ListItem", position: 3, name: guide.title, item: `https://www.peptidesmaxxing.com/guides/${slug}` },
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
          <Link href="/guides" className="hover:text-slate-700 transition-colors">Guides</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700 truncate max-w-xs">{guide.title}</span>
        </nav>
      </div>

      {/* Hero image */}
      {guide.imageUrl && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            <Image
              src={guide.imageUrl}
              alt={guide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white mb-4">
            Research Guide
          </span>
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">{guide.title}</h1>
          <p className="text-lg text-slate-500 mb-6">{guide.description}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pb-6 border-b border-slate-200">
            <span>By {guide.author}</span>
            <span>{new Date(guide.date).toLocaleDateString()}</span>
            {guide.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />{guide.readTime} read
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          <article>
            <div className="prose-peptide">
              {renderContent(guide.content)}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong className="text-amber-900">Research Use Only:</strong> All information is for
                educational and research purposes. Not medical advice. For research use only. Not for human
                consumption. Consult a qualified physician.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="text-sm font-bold text-slate-900 mb-3">Ready to Research?</p>
              <p className="text-xs text-slate-500 mb-4">Browse research peptides.</p>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
              >
                Browse Peptides <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="p-5 rounded-2xl border border-slate-200 bg-white">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">More Guides</p>
                <div className="space-y-3">
                  {related.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="block p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <p className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2">
                        {g.title}
                      </p>
                      {g.readTime && (
                        <p className="text-xs text-slate-400 mt-1">{g.readTime} read</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </PageLayout>
  )
}
