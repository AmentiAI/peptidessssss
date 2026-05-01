import type { Metadata } from "next"
import Link from "next/link"
import { FlaskConical, Shield, Award, ArrowRight, BookOpen } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { AFFILIATE_URL } from "@/lib/peptide-data"
import { getAuthor, authorPersonSchema, DEFAULT_AUTHOR_SLUG } from "@/lib/authors"

export const metadata: Metadata = {
  title: "About PeptidesMaxxing — Quality Standards & Mission",
  description:
    "PeptidesMaxxing is an independent peptide buyer's guide covering 62+ peptides. Read our transparency disclosure, sourcing standards, and editorial philosophy.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/about" },
  openGraph: {
    title: "About PeptidesMaxxing — Quality Standards & Mission",
    description: "PeptidesMaxxing is an independent peptide buyer's guide covering 62+ peptides. Read our transparency disclosure and quality standards.",
    url: "https://www.peptidesmaxxing.com/about",
    type: "website",
    images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PeptidesMaxxing — Quality Standards & Mission",
    description: "PeptidesMaxxing is an independent peptide buyer's guide covering 62+ peptides.",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.peptidesmaxxing.com/#organization",
  name: "PeptidesMaxxing",
  url: "https://www.peptidesmaxxing.com",
  description: "PeptidesMaxxing is an independent peptide buyer's guide covering 62+ peptides including BPC-157, Tirzepatide, Epithalon, Semax, and GHK-Cu.",
  sameAs: [
    "https://www.reddit.com/r/PeptidesMaxxing",
    "https://x.com/peptidesmaxxing",
  ],
  founder: {
    "@type": "Person",
    "@id": "https://www.peptidesmaxxing.com/authors/peptidesmaxxing-editorial#person",
  },
  publishingPrinciples: "https://www.peptidesmaxxing.com/editorial-standards",
}

export default function AboutPage() {
  const author = getAuthor()
  const personSchema = {
    "@context": "https://schema.org",
    ...authorPersonSchema(author),
  }
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">About PeptidesMaxxing</h1>
              <p className="text-slate-500">The definitive peptide buyer's guide</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg">
              PeptidesMaxxing was created to help buyers find the best peptides online. Our mission is to provide
              the most accurate, up-to-date, and scientifically grounded information on peptides
              available anywhere — so you can buy with confidence.
            </p>
            <p>
              We review, compare, and evaluate peptides based on published literature, purity
              standards, and supplier quality. Every product recommendation on PeptidesMaxxing has been vetted
              for purity documentation, COA verification, and supplier reliability.
            </p>
            <p>
              Our team brings together expertise in biochemistry, pharmacology, and content publishing to
              provide guides that go beyond surface-level descriptions. We read the primary research, we
              understand the mechanisms, and we present it clearly to buyers.
            </p>
          </div>

          {/* Editor-in-chief card */}
          <div className="mt-10 p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Editorial lead</p>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-lg">{author.name}</p>
                <p className="text-sm text-slate-500 mb-3">{author.jobTitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{author.shortBio}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`/authors/${DEFAULT_AUTHOR_SLUG}`}
                    className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-semibold"
                  >
                    Full bio
                  </Link>
                  <Link
                    href="/editorial-standards"
                    className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-semibold"
                  >
                    Editorial standards
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & Transparency */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl border border-amber-200 bg-amber-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-amber-600" />
            Partnerships &amp; Transparency
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              PeptidesMaxxing may earn compensation from purchases made through links on this site, at no extra cost to you.
            </p>
            <p>
              When you click &quot;Buy Now&quot; or any purchase link, you will be redirected to{" "}
              <a
                href={AFFILIATE_URL}
                rel="nofollow sponsored noopener noreferrer"
                target="_blank"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                our trusted supplier
              </a>{" "}
              and PeptidesMaxxing may receive compensation on your purchase.
            </p>
            <p>
              This compensation does not influence our recommendations. We only recommend products that meet
              our strict purity and quality standards. Our reviews reflect genuine research into product
              quality, purity documentation, and scientific validity.
            </p>
            <p className="text-sm text-slate-500">
              This disclosure is provided in accordance with the FTC&apos;s guidelines for endorsements and
              testimonials.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-8 rounded-2xl border border-amber-200 bg-amber-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-600" />
            Disclaimer
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">
                Peptides listed on PeptidesMaxxing are sold for laboratory and educational use only.
              </strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Not for human or veterinary use</li>
              <li>Not intended to treat, cure, prevent, or diagnose any disease</li>
              <li>Not approved by the FDA for any therapeutic use</li>
              <li>Buyers are responsible for compliance with local regulations</li>
            </ul>
            <p>
              The information on this website is for educational purposes only and is not medical advice.
            </p>
          </div>
        </div>

        {/* Our Standards */}
        <div className="mt-6 p-8 rounded-2xl border border-slate-200 bg-white">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Quality Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "≥99% Purity", desc: "We only recommend suppliers with HPLC-verified ≥99% purity standards." },
              { title: "COA Required", desc: "Every product must have a Certificate of Analysis with lot-specific testing data." },
              { title: "Mass Spectrometry", desc: "We require molecular identity confirmation via mass spectrometry, not just purity." },
              { title: "Reputable Suppliers", desc: "We evaluate supplier track records, lab certifications, and community reputation." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <p className="font-bold text-blue-600 mb-1">{title}</p>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 mb-6">Ready to buy peptides online?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop Peptides Now <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/guides"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Peptide Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
