import type { Metadata } from "next"
import Link from "next/link"
import { FlaskConical, Shield, Award, ExternalLink, ArrowRight } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { vendor } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "About PeptideLab — Research Peptide Affiliate Site | PeptideLab",
  description:
    "About PeptideLab — our mission, affiliate disclosure, research philosophy, and commitment to accurate peptide information.",
  alternates: { canonical: "https://peptidelab.com/about" },
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-20 border-b border-[rgba(0,212,255,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}>
              <FlaskConical className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">About PeptideLab</h1>
              <p className="text-[rgba(255,255,255,0.5)]">The definitive research peptide resource</p>
            </div>
          </div>

          <div className="space-y-6 text-[rgba(255,255,255,0.7)] leading-relaxed">
            <p className="text-lg">
              PeptideLab was created by peptide researchers for peptide researchers. Our mission is to provide the most accurate, up-to-date, and scientifically grounded information on research peptides available anywhere online.
            </p>
            <p>
              We review, compare, and evaluate peptides based on published research literature, purity standards, and supplier quality. Every product recommendation on PeptideLab has been vetted for research quality, purity documentation, and supplier reliability.
            </p>
            <p>
              Our team brings together expertise in biochemistry, pharmacology, and research methodology to provide content that goes beyond surface-level descriptions. We read the primary research, we understand the mechanisms, and we present it clearly.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-2xl border border-[rgba(255,165,0,0.25)] bg-[rgba(255,165,0,0.05)]">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-[#f59e0b]" />
            Affiliate Disclosure
          </h2>
          <div className="space-y-4 text-[rgba(255,255,255,0.7)] leading-relaxed">
            <p>
              PeptideLab is an affiliate marketing website. We earn commissions from qualifying purchases made through links on this site — at no extra cost to you.
            </p>
            <p>
              When you click "Buy Now" or any purchase link, you will be redirected to{" "}
              <a
                href={vendor.url}
                rel="nofollow noopener noreferrer"
                className="text-[#00d4ff] underline underline-offset-2"
              >
                {vendor.name}
              </a>{" "}
              (or another affiliate partner), and PeptideLab may receive a commission on your purchase.
            </p>
            <p>
              This compensation does not influence our recommendations. We only recommend products that meet our strict purity and quality standards. Our reviews reflect genuine research into product quality, purity documentation, and scientific validity.
            </p>
            <p className="text-sm text-[rgba(255,255,255,0.5)]">
              This disclosure is provided in accordance with the FTC&apos;s guidelines for endorsements and testimonials.
            </p>
          </div>
        </div>

        {/* Research Disclaimer */}
        <div className="mt-6 p-8 rounded-2xl border border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.04)]">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Award className="w-6 h-6 text-red-400" />
            Research Use Only Disclaimer
          </h2>
          <div className="space-y-4 text-[rgba(255,255,255,0.7)] leading-relaxed">
            <p>
              <strong className="text-white">All peptides listed on PeptideLab are sold strictly for laboratory research purposes only.</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Not for human consumption</li>
              <li>Not for veterinary use</li>
              <li>Not intended to treat, cure, prevent, or diagnose any disease</li>
              <li>Not approved by the FDA for any therapeutic use (unless specifically noted)</li>
              <li>Must be handled by qualified research personnel in appropriate laboratory settings</li>
            </ul>
            <p>
              The information on this website is for educational purposes only. It is not intended as medical advice and should not be construed as such. Always consult a qualified healthcare professional before any use of research compounds.
            </p>
          </div>
        </div>

        {/* Our standards */}
        <div className="mt-6 p-8 rounded-2xl border border-[rgba(0,212,255,0.15)]" style={{ background: "rgba(12,12,32,0.7)" }}>
          <h2 className="text-2xl font-bold text-white mb-6">Our Quality Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "≥99% Purity", desc: "We only recommend suppliers with HPLC-verified ≥99% purity standards." },
              { title: "COA Required", desc: "Every product must have a Certificate of Analysis with lot-specific testing data." },
              { title: "Mass Spectrometry", desc: "We require molecular identity confirmation via mass spectrometry, not just purity." },
              { title: "Reputable Suppliers", desc: "We evaluate supplier track records, lab certifications, and community reputation." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 rounded-xl border border-[rgba(255,255,255,0.07)]" style={{ background: "rgba(255,255,255,0.02)" }}>
                <p className="font-bold text-[#00d4ff] mb-1">{title}</p>
                <p className="text-sm text-[rgba(255,255,255,0.6)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-[rgba(255,255,255,0.55)] mb-6">Ready to explore our research peptide catalog?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
            >
              Shop Research Peptides <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="/guides" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border border-[rgba(255,255,255,0.15)] hover:border-[rgba(0,212,255,0.4)] transition-all">
              Research Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
