import type { Metadata } from "next"
import Link from "next/link"
import { PageLayout } from "@/components/peptide-hub/page-layout"

export const metadata: Metadata = {
  title: "Privacy Policy — PeptidesMaxxing",
  description: "PeptidesMaxxing privacy policy. How we collect, use, and protect your data.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
            <p>
              PeptidesMaxxing (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates peptidesmaxxing.com. This Privacy Policy explains
              what information we collect, how we use it, and your rights regarding that information.
              By using our site you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We do not require account registration. We may collect:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Usage data</strong> — pages visited, time on site, referring URL, browser type, and device type via Google Analytics and Vercel Analytics.</li>
              <li><strong>Cookies</strong> — analytics and functional cookies to understand traffic patterns and improve the site.</li>
              <li>We do <strong>not</strong> collect names, email addresses, or payment information directly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To analyze site performance and improve content.</li>
              <li>To understand which research topics users find most valuable.</li>
              <li>To monitor for technical errors and uptime issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Affiliate Links & Third Parties</h2>
            <p>
              PeptidesMaxxing contains affiliate links to Pantheon Peptides. When you click an affiliate
              link, you are transferred to a third-party website governed by their own privacy policy.
              We earn a commission on qualifying purchases at no extra cost to you. We are not responsible
              for the data practices of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Analytics & Cookies</h2>
            <p>
              We use Google Analytics (GA4) and Vercel Analytics to collect anonymized usage statistics.
              These services may set cookies in your browser. You can opt out of Google Analytics by
              installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                rel="noopener noreferrer"
                target="_blank"
                className="text-cyan-400 underline underline-offset-2"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              Analytics data is retained according to the default retention policies of Google Analytics
              and Vercel. We do not maintain a separate user database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>
              Depending on your jurisdiction you may have rights to access, correct, or delete personal
              data we hold. Since we do not collect personally identifiable information directly, most
              requests should be directed to Google Analytics or Vercel. For questions, contact us via
              our{" "}
              <Link href="/about" className="text-cyan-400 underline underline-offset-2">
                About page
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of the site after changes
              constitutes acceptance of the updated policy. The &quot;Last updated&quot; date at the top of this
              page indicates when changes were last made.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>
              Questions about this policy? Visit our{" "}
              <Link href="/about" className="text-cyan-400 underline underline-offset-2">
                About page
              </Link>{" "}
              for contact information.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex gap-6 text-sm text-slate-500">
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        </div>
      </div>
    </PageLayout>
  )
}
