import type { Metadata } from "next"
import Link from "next/link"
import { FlaskConical, Calculator, Compass, ExternalLink } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ReconstitutionCalculator } from "@/components/peptide-hub/reconstitution-calculator"
import { DosageCalculator } from "@/components/peptide-hub/dosage-calculator"
import { PeptideFinder } from "@/components/peptide-hub/peptide-finder"

export const metadata: Metadata = {
  title: "Peptide Research Tools — Calculators & Peptide Finder",
  description:
    "Free peptide tools: Reconstitution Calculator (vial + BAC water → concentration), Dosage Calculator (body-weight dosing), and Peptide Finder quiz to match peptides to your goals.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/tools" },
  openGraph: {
    title: "Peptide Research Tools — PeptidesMaxxing",
    description: "Reconstitution calculator, dosage calculator, and peptide finder. Free tools for peptide researchers.",
    url: "https://www.peptidesmaxxing.com/tools",
    type: "website",
    images: [{ url: "https://www.peptidesmaxxing.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Research Tools — Calculators & Peptide Finder",
    description: "Free peptide tools: Reconstitution Calculator, Dosage Calculator, and Peptide Finder quiz. Match peptides to your research goals.",
  },
}

const AFFILIATE_URL = process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

const TOOLS = [
  {
    id: "reconstitution",
    icon: FlaskConical,
    color: "blue",
    label: "Reconstitution Calculator",
    description: "Enter your vial size and BAC water volume to instantly get the concentration, draw volume, and a full dose reference table.",
  },
  {
    id: "dosage",
    icon: Calculator,
    color: "violet",
    label: "Dosage Calculator",
    description: "Calculate your dose in mcg, mL, and syringe units based on body weight. Includes presets for 14 common peptides.",
  },
  {
    id: "finder",
    icon: Compass,
    color: "emerald",
    label: "Peptide Finder",
    description: "Select your research goal and get personalized peptide recommendations with direct links to product pages.",
  },
]

const COLOR_MAP: Record<string, { icon: string; border: string; bg: string; dot: string }> = {
  blue:    { icon: "text-blue-600", border: "border-blue-200", bg: "bg-blue-50", dot: "bg-blue-500" },
  violet:  { icon: "text-violet-600", border: "border-violet-200", bg: "bg-violet-50", dot: "bg-violet-500" },
  emerald: { icon: "text-emerald-600", border: "border-emerald-200", bg: "bg-emerald-50", dot: "bg-emerald-500" },
}

export default function ToolsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600">
                <FlaskConical className="w-3.5 h-3.5" />
                Research Tools
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              Peptide Research <span className="text-blue-600">Tools</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Free calculators and guides to help you plan your peptide research accurately. Reconstitute vials correctly, calculate body-weight dosing, and find the right peptides for your goals.
            </p>
            <Link
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors"
            >
              Shop Pantheon Peptides
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tool cards overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {TOOLS.map((tool) => {
            const Icon = tool.icon
            const c = COLOR_MAP[tool.color]
            return (
              <a
                key={tool.id}
                href={`#${tool.id}`}
                className={`p-5 rounded-xl border ${c.border} ${c.bg} hover:shadow-sm transition-all group`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-white border ${c.border} mb-3`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <p className="text-sm font-bold text-slate-900 mb-1">{tool.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{tool.description}</p>
              </a>
            )
          })}
        </div>

        {/* Tool 1: Reconstitution */}
        <div id="reconstitution" className="scroll-mt-20 mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold text-slate-900">Reconstitution Calculator</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6 ml-5.5">
            Enter your vial size (mg) and how much bacteriostatic water you added (mL) to calculate the exact concentration and draw volumes.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <ReconstitutionCalculator />
          </div>
        </div>

        {/* Tool 2: Dosage */}
        <div id="dosage" className="scroll-mt-20 mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
            <h2 className="text-2xl font-bold text-slate-900">Dosage Calculator</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Calculate your total dose in mcg based on body weight, then convert to mL and syringe units. Select a peptide to auto-fill the typical dose rate.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <DosageCalculator />
          </div>
        </div>

        {/* Tool 3: Peptide Finder */}
        <div id="finder" className="scroll-mt-20 mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h2 className="text-2xl font-bold text-slate-900">Peptide Finder</h2>
          </div>
          <p className="text-sm text-slate-500 mb-6">
            Not sure where to start? Select your primary research goal and get curated peptide recommendations with research notes and direct product links.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <PeptideFinder />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800 leading-relaxed">
          <p className="font-bold mb-1">Research Use Only — Disclaimer</p>
          <p>
            All tools and content on PeptidesMaxxing are for educational and research purposes only. These calculators are informational aids and do not constitute medical advice. Peptides are not approved for human use by the FDA unless otherwise indicated. We earn commissions from Pantheon Peptides links.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
