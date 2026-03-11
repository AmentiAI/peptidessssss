import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAllGuides } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Research Guides — Reconstitution, Storage, Protocols & Science",
  description:
    "Complete research peptide guides: storage & reconstitution, GH stacking protocols, purity verification, longevity stacks. Expert guides for peptide researchers.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/guides" },
  openGraph: {
    title: "Research Peptide Guides | PeptidesMaxxing",
    description: "Complete guides to peptide reconstitution, storage, GH stacking, purity, and longevity protocols.",
    url: "https://www.peptidesmaxxing.com/guides",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptide Guides | PeptidesMaxxing",
    description: "Reconstitution, storage, stacking, and longevity protocol guides for research peptides.",
  },
}

export default async function GuidesPage() {
  const guides = await getAllGuides()

  return (
    <PageLayout>
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Research Guides</p>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-3">Peptide Research Guides</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Complete, evidence-based guides for peptide researchers — from storage and reconstitution to advanced stacking protocols.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        {guides.length === 0 && (
          <div className="text-center py-24 text-slate-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-300" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Guides coming soon</h2>
            <p className="text-sm">In-depth research guides are being prepared.</p>
            <Link href="/products" className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold hover:text-blue-800">
              Browse our peptide catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {guides.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-white"
              >
                {guide.imageUrl && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-50">
                    <Image
                      src={guide.imageUrl}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={i < 2}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 text-white">
                        Guide
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span>{new Date(guide.date).toLocaleDateString()}</span>
                    {guide.readTime && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{guide.readTime} read</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors flex-1">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-blue-600">
                    Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl border border-slate-200 bg-slate-50 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Start Your Research?</h2>
          <p className="text-slate-500 mb-6">Browse our full range of research peptides from Pantheon Peptides.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
          >
            Browse Research Peptides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
