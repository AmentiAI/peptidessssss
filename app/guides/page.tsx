import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { guides } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Research Peptide Guides — Storage, Reconstitution, Protocols | PeptideLab",
  description:
    "Complete research peptide guides: storage & reconstitution, GH stacking protocols, purity verification, and longevity research stacks. Expert guides for peptide researchers.",
  alternates: { canonical: "https://peptidelab.com/guides" },
}

export default function GuidesPage() {
  return (
    <PageLayout>
      <section className="py-16 border-b border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#00d4ff]" />
            <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest">Research Guides</p>
          </div>
          <h1 className="text-5xl font-bold text-white mb-3">Peptide Research Guides</h1>
          <p className="text-[rgba(255,255,255,0.55)] text-lg max-w-2xl">
            Complete, evidence-based guides for peptide researchers — from storage and reconstitution to advanced stacking protocols.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, i) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,212,255,0.25)] transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(12,12,32,0.7)" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[rgba(255,255,255,0.03)]">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,32,0.8)] to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-black"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                    Guide
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[rgba(255,255,255,0.4)] mb-3">
                  <span>{guide.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{guide.read_time} read</span>
                </div>
                <h2 className="font-bold text-white text-lg leading-snug mb-2 group-hover:text-[#00d4ff] transition-colors flex-1">
                  {guide.title}
                </h2>
                <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed line-clamp-2">{guide.description}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#00d4ff]">
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl border border-[rgba(0,212,255,0.15)] text-center"
          style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))" }}>
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Your Research?</h2>
          <p className="text-[rgba(255,255,255,0.55)] mb-6">Browse our full range of research peptides with ≥99% purity.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
          >
            Shop Research Peptides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
