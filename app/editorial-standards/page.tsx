import type { Metadata } from "next"
import Link from "next/link"
import { Shield, BookOpen, FileCheck, Users, AlertCircle } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAuthor, authorPersonSchema, DEFAULT_AUTHOR_SLUG } from "@/lib/authors"

export const metadata: Metadata = {
  title: "Editorial Standards — PeptidesMaxxing",
  description:
    "How PeptidesMaxxing sources, reviews, and updates research peptide content. Full editorial workflow, citation standards, affiliate transparency, and correction policy.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/editorial-standards" },
  openGraph: {
    title: "Editorial Standards — PeptidesMaxxing",
    description:
      "How PeptidesMaxxing sources, reviews, and updates research peptide content. Full editorial workflow, citation standards, affiliate transparency, and correction policy.",
    url: "https://www.peptidesmaxxing.com/editorial-standards",
    type: "article",
  },
}

export default function EditorialStandardsPage() {
  const author = getAuthor()

  const personSchema = {
    "@context": "https://schema.org",
    ...authorPersonSchema(author),
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.peptidesmaxxing.com/editorial-standards",
    name: "Editorial Standards",
    url: "https://www.peptidesmaxxing.com/editorial-standards",
    description:
      "How PeptidesMaxxing sources, reviews, and updates research peptide content.",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.peptidesmaxxing.com/#website",
    },
  }

  const sections = [
    {
      icon: BookOpen,
      title: "Sourcing",
      body: "Every claim in our articles is grounded in primary peer-reviewed research. We lean on PubMed-indexed studies, preprints from bioRxiv and medRxiv where clearly labelled, and clinical trial registries. We do not cite marketing material from suppliers as evidence. When a mechanism is theoretical or preclinical-only, we say so explicitly.",
    },
    {
      icon: Users,
      title: "Author attribution",
      body: "Every article on PeptidesMaxxing is attributed to a named author. The editor-in-chief reviews each article before publication. Author bios with credentials are linked from the byline on every post.",
    },
    {
      icon: FileCheck,
      title: "Review cycle",
      body: "Articles are reviewed at least once every 12 months. If newer research materially changes a recommendation, the article is updated and a visible \"Updated\" date is surfaced near the byline. Schema.org dateModified reflects the most recent edit.",
    },
    {
      icon: Shield,
      title: "Affiliate transparency",
      body: "PeptidesMaxxing earns affiliate commission on purchases made through links routed via /out/. Affiliate links are marked rel=\"nofollow sponsored\" and disclosed on every product page, in article footers, and on the About page. Compensation never determines which compounds we cover or how we describe their evidence base.",
    },
    {
      icon: AlertCircle,
      title: "Research-only framing",
      body: "Every peptide discussed is discussed in a research context. Dosing ranges cited reflect published laboratory and clinical research — not medical recommendations. No article on this site is medical advice, and nothing here is intended to diagnose, treat, cure, or prevent any disease. Consumers should consult a licensed healthcare professional before any use.",
    },
    {
      icon: FileCheck,
      title: "Corrections",
      body: "If you find a factual error, email corrections@peptidesmaxxing.com. We publicly log corrections at the foot of the affected article, including the original text, the corrected text, and the date of the change.",
    },
  ]

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Editorial Standards</h1>
          <p className="text-lg text-slate-500">
            How we source, review, and update every article on PeptidesMaxxing — plus the transparency rules
            governing affiliate links and corrections.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Maintained by <Link href={`/authors/${DEFAULT_AUTHOR_SLUG}`} className="text-blue-600 hover:text-blue-800 underline underline-offset-2">{author.name}, {author.jobTitle}</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        {sections.map(({ icon: Icon, title, body }) => (
          <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-900">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
                <p className="text-slate-600 leading-relaxed">{body}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>Research use only.</strong> All peptides discussed on PeptidesMaxxing are referenced for
            laboratory research and are not intended for human consumption. See the full disclosure at{" "}
            <Link href="/about" className="underline underline-offset-2">/about</Link>.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
