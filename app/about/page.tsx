import type { Metadata } from "next"
import Link from "next/link"
import { FlaskConical, Shield, Award, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

export const metadata: Metadata = {
  title: "About PeptidesMaxxing — Research Standards & Mission",
  description:
    "PeptidesMaxxing is an independent research authority covering 62+ research peptides. Read our transparency disclosure, sourcing standards, and research philosophy.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/about" },
  openGraph: {
    title: "About PeptidesMaxxing — Research Standards & Mission",
    description: "PeptidesMaxxing is an independent research authority covering 62+ research peptides. Read our transparency disclosure, sourcing standards, and research philosophy.",
    url: "https://www.peptidesmaxxing.com/about",
    type: "website",
    images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PeptidesMaxxing — Research Standards & Mission",
    description: "PeptidesMaxxing is an independent research authority covering 62+ research peptides. Full transparency disclosure and sourcing philosophy.",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.peptidesmaxxing.com/#organization",
  name: "PeptidesMaxxing",
  url: "https://www.peptidesmaxxing.com",
  description: "PeptidesMaxxing is an independent research resource covering 62+ research peptides including BPC-157, Tirzepatide, Epithalon, Semax, and GHK-Cu.",
  sameAs: [
    "https://www.reddit.com/r/PeptidesMaxxing",
    "https://x.com/peptidesmaxxing",
  ],
}

export default function AboutPage() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">About PeptidesMaxxing</h1>
              <p className="text-slate-500">The definitive research peptide resource</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg">
              PeptidesMaxxing was created by peptide researchers for peptide researchers. Our mission is to provide
              the most accurate, up-to-date, and scientifically grounded information on research peptides
              available anywhere online.
            </p>
            <p>
              We review, compare, and evaluate peptides based on published research literature, purity
              standards, and supplier quality. Every product recommendation on PeptidesMaxxing has been vetted
              for research quality, purity documentation, and supplier reliability.
            </p>
            <p>
              Our team brings together expertise in biochemistry, pharmacology, and research methodology to
              provide content that goes beyond surface-level descriptions. We read the primary research, we
              understand the mechanisms, and we present it clearly.
            </p>
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

        {/* Research Disclaimer */}
        <div className="mt-6 p-8 rounded-2xl border border-red-200 bg-red-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Award className="w-6 h-6 text-red-500" />
            Research Use Only Disclaimer
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">
                All peptides listed on PeptidesMaxxing are sold strictly for laboratory research purposes only.
              </strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Not for human consumption</li>
              <li>Not for veterinary use</li>
              <li>Not intended to treat, cure, prevent, or diagnose any disease</li>
              <li>Not approved by the FDA for any therapeutic use (unless specifically noted)</li>
              <li>Must be handled by qualified research personnel in appropriate laboratory settings</li>
            </ul>
            <p>
              The information on this website is for educational purposes only. It is not intended as medical
              advice and should not be construed as such. Always consult a qualified healthcare professional
              before any use of research compounds.
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
          <p className="text-slate-500 mb-6">Ready to explore our research peptide catalog?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop Research Peptides <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/guides"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Research Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
