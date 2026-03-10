import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import {
  getGuideBySlug,
  getAllGuideSlugs,
  guides,
} from "@/lib/peptide-data"

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: `${guide.title} | PeptideLab Guides`,
    description: guide.description,
    alternates: { canonical: `https://peptidelab.com/guides/${slug}` },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const related = guides.filter((g) => g.slug !== slug).slice(0, 2)

  function renderContent(content: string) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## "))
        return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 pb-3 border-b border-[rgba(0,212,255,0.12)]">{line.slice(3)}</h2>
      if (line.startsWith("### "))
        return <h3 key={i} className="text-lg font-semibold text-[rgba(255,255,255,0.9)] mt-6 mb-3">{line.slice(4)}</h3>
      if (line.startsWith("- "))
        return <li key={i} className="text-[rgba(255,255,255,0.7)] leading-relaxed ml-4 mb-1.5 list-disc">{line.slice(2)}</li>
      if (line.startsWith("**") && line.endsWith("**"))
        return <p key={i} className="font-semibold text-white leading-relaxed mb-2">{line.slice(2, -2)}</p>
      if (line.trim() === "")
        return <div key={i} className="mb-3" />
      return <p key={i} className="text-[rgba(255,255,255,0.68)] leading-[1.85] mb-3">{line}</p>
    })
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[rgba(255,255,255,0.4)]">
          <Link href="/" className="hover:text-[#00d4ff] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/guides" className="hover:text-[#00d4ff] transition-colors">Guides</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[rgba(255,255,255,0.7)] truncate max-w-xs">{guide.title}</span>
        </nav>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,6,18,0.9)] via-[rgba(6,6,18,0.4)] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-black mb-4"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
              Research Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl leading-tight">{guide.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          <article>
            <div className="flex items-center gap-4 text-sm text-[rgba(255,255,255,0.45)] mb-8 pb-6 border-b border-[rgba(255,255,255,0.07)]">
              <span>By {guide.author}</span>
              <span>·</span>
              <span>{guide.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{guide.read_time} read</span>
            </div>
            <div className="prose-peptide">
              {renderContent(guide.content)}
            </div>
            <div className="mt-8 p-4 rounded-xl border border-[rgba(255,165,0,0.2)] bg-[rgba(255,165,0,0.05)]">
              <p className="text-xs text-[rgba(255,165,0,0.8)] leading-relaxed">
                ⚗️ <strong className="text-[rgba(255,165,0,1)]">Research Use Only:</strong> All information is for educational purposes. Not medical advice. For research use only.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="p-5 rounded-2xl border border-[rgba(0,212,255,0.15)]" style={{ background: "rgba(12,12,32,0.8)" }}>
              <p className="text-sm font-bold text-white mb-4">Ready to Research?</p>
              <p className="text-xs text-[rgba(255,255,255,0.5)] mb-4">Browse our full range of high-purity research peptides.</p>
              <Link href="/products" className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-black"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
                Shop Peptides <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="p-5 rounded-2xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(12,12,32,0.7)" }}>
                <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">More Guides</p>
                <div className="space-y-3">
                  {related.map((g) => (
                    <Link key={g.slug} href={`/guides/${g.slug}`} className="block p-3 rounded-lg hover:bg-[rgba(0,212,255,0.05)] transition-colors">
                      <p className="text-sm font-semibold text-white hover:text-[#00d4ff] transition-colors line-clamp-2">{g.title}</p>
                      <p className="text-xs text-[rgba(255,255,255,0.4)] mt-1">{g.read_time} read</p>
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
