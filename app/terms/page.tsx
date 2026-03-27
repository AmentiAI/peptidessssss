import type { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/peptide-hub/page-layout"

export const metadata: Metadata = {
  title: "Terms of Service — PeptidesMaxxing",
  description: "Terms of service for PeptidesMaxxing. Research-only disclaimer, affiliate disclosure, and conditions of use.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using peptidesmaxxing.com you agree to these Terms of Service. If you do
              not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Research & Educational Use Only</h2>
            <p>
              All content on PeptidesMaxxing is provided for <strong>research and educational purposes
              only</strong>. Nothing on this site constitutes medical advice, diagnosis, or treatment
              recommendations. Peptides referenced on this site are sold strictly for laboratory and
              research use by qualified professionals. They are <strong>not approved for human
              consumption</strong> by the FDA or any equivalent regulatory body unless explicitly stated.
            </p>
            <p className="mt-3">
              Always consult a qualified healthcare professional before making any health, medical, or
              supplement decisions. PeptidesMaxxing assumes no liability for decisions made based on
              content published on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Affiliate Disclosure</h2>
            <p>
              PeptidesMaxxing participates in affiliate programs. We earn commissions when you purchase
              through our links to Pantheon Peptides at no additional cost to you. Affiliate
              relationships do not influence our research content or product descriptions, which are
              based on publicly available scientific literature.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Accuracy of Information</h2>
            <p>
              We make reasonable efforts to keep product information, pricing references, and research
              summaries accurate and up to date. However, we make no warranties — express or implied —
              regarding the completeness, accuracy, or fitness for any particular purpose of any content
              on this site. Product availability, formulations, and pricing are controlled by third-party
              vendors and may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, PeptidesMaxxing and its operators shall not be
              liable for any direct, indirect, incidental, consequential, or punitive damages arising
              from your use of this site or any products purchased through affiliate links. Your sole
              remedy for dissatisfaction with the site is to stop using it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Third-Party Links</h2>
            <p>
              This site contains links to third-party websites including affiliate vendors. We are not
              responsible for the content, privacy practices, or reliability of any third-party sites.
              Visiting third-party sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
            <p>
              All original content on PeptidesMaxxing — including text, research summaries, and site
              design — is the property of PeptidesMaxxing. You may not reproduce, redistribute, or
              republish content without express written permission. Product images remain the property
              of their respective vendors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States. Any disputes shall be resolved
              through binding arbitration in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the site
              following any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex gap-6 text-sm text-slate-500">
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        </div>
      </div>
    </PageLayout>
  )
}
