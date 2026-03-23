import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, ShoppingCart, ArrowRight, CheckCircle, Zap, Clock, Users } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAllStackGuides, getStackGuide } from "@/lib/stack-guides"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

export function generateStaticParams() {
  return getAllStackGuides().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const stack = getStackGuide(slug)
  if (!stack) return {}
  return {
    title: stack.seoTitle,
    description: stack.seoDescription,
    alternates: { canonical: `https://www.peptidesmaxxing.com/stacks/${slug}` },
    openGraph: {
      title: stack.seoTitle,
      description: stack.seoDescription,
      url: `https://www.peptidesmaxxing.com/stacks/${slug}`,
      type: "website",
      images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: stack.seoTitle,
      description: stack.seoDescription,
    },
  }
}

export default async function StackGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const stack = getStackGuide(slug)
  if (!stack) notFound()

  const allStacks = getAllStackGuides()
  const related = allStacks.filter((s) => s.slug !== slug).slice(0, 3)

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Stacks", item: "https://www.peptidesmaxxing.com/stacks" },
      { "@type": "ListItem", position: 3, name: stack.name, item: `https://www.peptidesmaxxing.com/stacks/${slug}` },
    ],
  }

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/stacks" className="hover:text-slate-700 transition-colors">Stacks</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700 truncate max-w-xs">{stack.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{stack.emoji}</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
              Peptide Stack Guide
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {stack.name}
          </h1>
          <p className="text-xl text-slate-500 mb-8">{stack.tagline}</p>

          {/* Peptide pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {stack.peptides.map((p, i) => (
              <span
                key={p}
                className="px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white"
              >
                {p}
                {i < stack.peptides.length - 1 && (
                  <span className="ml-3 text-slate-400 font-normal">+</span>
                )}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {stack.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div className="space-y-12">

            {/* Mechanism */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
                How This Stack Works
              </h2>
              <p className="text-slate-600 leading-[1.85] text-lg">{stack.mechanism}</p>
            </section>

            {/* Synergy */}
            <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Why This Combination Works</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{stack.synergy}</p>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                Benefits in Detail
              </h2>
              <div className="space-y-6">
                {stack.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Protocol */}
            <section className="p-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Protocol</h3>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">{stack.protocol}</p>
              <p className="text-xs text-slate-500 mt-3">
                For laboratory use only. Not for human consumption.
              </p>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                Expected Timeline
              </h2>
              <div className="space-y-4">
                {stack.timeline.map((phase, i) => (
                  <div key={phase.phase} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < stack.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="font-bold text-slate-900">{phase.phase}</p>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                        {phase.duration}
                      </p>
                      <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Who is it for */}
            <section className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-slate-900">Who Is This Stack For?</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{stack.whoIsItFor}</p>
            </section>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong className="text-amber-900">For Laboratory Use Only:</strong> All information
                is for educational purposes. Not medical advice. Not for human consumption. Consult
                a qualified physician before any use.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24">
            {/* Buy CTA */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="text-sm font-bold text-slate-900 mb-1">Source This Stack</p>
              <p className="text-xs text-slate-500 mb-4">
                All peptides available from Pantheon Peptides.
              </p>
              <Link
                href={`/out/${slug}`}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors mb-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Shop All Stack Peptides
              </Link>
              <p className="text-xs text-center text-slate-400">
                Affiliate disclosure: we earn a commission.
              </p>
            </div>

            {/* Individual peptide links */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Peptides in This Stack
              </p>
              <div className="space-y-2">
                {stack.peptides.map((name, i) => (
                  <div key={name} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <span className="text-sm font-semibold text-slate-900">{name}</span>
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${stack.peptideSlugs[i]}`}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Details
                      </Link>
                      <span className="text-slate-300">·</span>
                      <Link
                        href={`/out/${stack.peptideSlugs[i]}`}
                        target="_blank"
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related stacks */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                More Stacks
              </p>
              <div className="space-y-2">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/stacks/${s.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-xl">{s.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {s.name}
                      </p>
                      <p className="text-xs text-slate-400">{s.peptides.join(" + ")}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
              <Link
                href="/stacks"
                className="flex items-center gap-1 mt-4 text-xs text-slate-500 hover:text-blue-600 transition-colors"
              >
                View all stacks →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
            Source This Stack
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Ready to Order the {stack.name}?
          </h2>
          <p className="text-slate-500 mb-8">
            {stack.peptides.join(" + ")} — all available directly from Pantheon Peptides.
          </p>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Shop All Stack Peptides on Pantheon
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
