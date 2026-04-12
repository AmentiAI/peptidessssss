import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Scale,
  CheckCircle,
  XCircle,
  Minus,
  TrendingUp,
  Zap,
  Clock,
  Shield,
  FlaskConical,
  ChevronRight,
  BarChart3,
  Target,
  AlertTriangle,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { AFFILIATE_URL } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Comparison — BPC-157 vs TB-500, Tirzepatide vs Retatrutide & More",
  description:
    "Side-by-side peptide comparisons: BPC-157 vs TB-500, Ipamorelin vs GHRP-2, CJC-1295 vs Sermorelin, Tirzepatide vs Retatrutide. Mechanism, dosing, half-life, and research evidence compared.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/compare" },
  openGraph: {
    title: "Peptide Comparison Hub — Side-by-Side Research Analysis",
    description:
      "Compare BPC-157 vs TB-500, Ipamorelin vs GHRP-2, Tirzepatide vs Retatrutide, and more. Mechanism, potency, half-life, and protocol differences explained.",
    url: "https://www.peptidesmaxxing.com/compare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Comparison — BPC-157 vs TB-500, Tirzepatide vs Retatrutide",
    description:
      "Head-to-head peptide comparisons with mechanism breakdowns, dosing protocols, and research evidence.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.peptidesmaxxing.com/compare",
  url: "https://www.peptidesmaxxing.com/compare",
  name: "Peptide Comparison Hub — PeptidesMaxxing",
  description:
    "Side-by-side comparisons of research peptides: mechanism, dosing, half-life, and research evidence.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Peptide Comparisons", item: "https://www.peptidesmaxxing.com/compare" },
    ],
  },
}

type Rating = "high" | "moderate" | "low" | "n/a"
type Win = "A" | "B" | "tie"

interface CompareMetric {
  label: string
  a: string
  b: string
  winner: Win
  note?: string
}

interface CompareBlock {
  id: string
  title: string
  tagline: string
  peptideA: string
  peptideB: string
  slugA: string
  slugB: string
  goal: string
  verdict: string
  metrics: CompareMetric[]
  aStrengths: string[]
  bStrengths: string[]
  bestFor: { a: string; b: string }
}

const COMPARISONS: CompareBlock[] = [
  {
    id: "bpc157-vs-tb500",
    title: "BPC-157 vs TB-500",
    tagline: "The ultimate recovery peptide showdown",
    peptideA: "BPC-157",
    peptideB: "TB-500",
    slugA: "bpc-157",
    slugB: "tb-500",
    goal: "Recovery & Repair",
    verdict:
      "BPC-157 excels at gut lining repair and tendon attachment-site healing with local injection precision. TB-500 (Thymosin Beta-4 fragment) distributes systemically, making it superior for multi-site injuries and muscle fiber repair. Most research protocols combine both for synergistic benefit.",
    metrics: [
      { label: "Half-life", a: "~4–6 h (systemic)", b: "~24–48 h", winner: "B", note: "TB-500 supports once/twice-weekly dosing" },
      { label: "Mechanism", a: "Angiogenesis + growth factor upregulation", b: "Actin polymerization + cell migration", winner: "tie" },
      { label: "Injection Site Flexibility", a: "Local preferred for targeted repair", b: "Systemic — anywhere works", winner: "B" },
      { label: "Gut Healing Evidence", a: "Extensive (gastric ulcer, IBD models)", b: "Limited", winner: "A" },
      { label: "Tendon & Ligament", a: "Strong — especially attachment sites", b: "Moderate — diffuse tissue support", winner: "A" },
      { label: "Muscle Fiber Repair", a: "Moderate", b: "Strong — actin filament restructuring", winner: "B" },
      { label: "Systemic Distribution", a: "Moderate", b: "Excellent — distributes to all tissue", winner: "B" },
      { label: "Typical Research Dose", a: "200–500 mcg/day", b: "2–2.5 mg twice/week", winner: "tie" },
      { label: "Stack Compatibility", a: "Stacks well with TB-500 + GHK-Cu", b: "Stacks well with BPC-157 + IGF-1 LR3", winner: "tie" },
    ],
    aStrengths: [
      "Superior for gut, intestinal, and mucosal healing",
      "Precise local injection targeting",
      "Upregulates VEGF and EGR-1 growth factors",
      "Oral bioavailability documented in gut research",
      "Strong anti-inflammatory COX-2 modulation",
    ],
    bStrengths: [
      "Systemic distribution reaches all tissue compartments",
      "Longer half-life supports less frequent dosing",
      "Superior for diffuse multi-site muscle damage",
      "Promotes cell migration and wound closure",
      "Used in cardiac tissue repair research",
    ],
    bestFor: {
      a: "Gut issues, localized tendon injuries, post-surgical recovery",
      b: "Systemic recovery, multi-site injuries, cardiac & muscle tissue",
    },
  },
  {
    id: "ipamorelin-vs-ghrp2",
    title: "Ipamorelin vs GHRP-2",
    tagline: "Clean GH pulse vs maximum GH output",
    peptideA: "Ipamorelin",
    peptideB: "GHRP-2",
    slugA: "ipamorelin",
    slugB: "ghrp-2-acetate",
    goal: "GH Stimulation",
    verdict:
      "Ipamorelin is the cleaner, side-effect-friendly GH secretagogue — it raises GH with minimal cortisol or prolactin bleed. GHRP-2 produces a larger, broader GH pulse but comes with more pronounced hunger stimulation and cortisol elevation. For long-term research protocols, Ipamorelin is generally preferred; GHRP-2 is used when maximum GH amplitude is the research goal.",
    metrics: [
      { label: "GH Pulse Amplitude", a: "Moderate–high", b: "High–very high", winner: "B" },
      { label: "Selectivity (GH only)", a: "High — GHSR-1a selective", b: "Moderate — partial cortisol/prolactin", winner: "A" },
      { label: "Hunger Stimulation", a: "Minimal", b: "Significant (ghrelin-like)", winner: "A" },
      { label: "Cortisol Impact", a: "Negligible", b: "Moderate elevation", winner: "A" },
      { label: "Half-life", a: "~2 h", b: "~2 h", winner: "tie" },
      { label: "Typical Dose", a: "100–300 mcg/injection", b: "100–300 mcg/injection", winner: "tie" },
      { label: "Stack Synergy with CJC-1295", a: "Excellent — gold standard combo", b: "Good", winner: "A" },
      { label: "Research Safety Profile", a: "Very clean — minimal off-target effects", b: "Moderate — cortisol warrants monitoring", winner: "A" },
    ],
    aStrengths: [
      "Highly selective — GH only, no cortisol/prolactin bleed",
      "Best-in-class stack partner for CJC-1295 protocols",
      "Minimal hunger side effects",
      "Well-tolerated in long-term research cycles",
      "Ideal for sleep-time GH pulse research",
    ],
    bStrengths: [
      "Larger GH amplitude — useful for maximum pulse research",
      "More potent anabolic signaling at higher doses",
      "Appetite stimulation useful in cachexia research",
      "Well-documented in rodent and human GHSR studies",
    ],
    bestFor: {
      a: "Long-term anti-aging and GH optimization protocols",
      b: "Short-term maximum GH output research",
    },
  },
  {
    id: "tirzepatide-vs-retatrutide",
    title: "Tirzepatide vs Retatrutide",
    tagline: "Dual agonist vs triple agonist metabolic research",
    peptideA: "Tirzepatide",
    peptideB: "Retatrutide",
    slugA: "tirzepatide",
    slugB: "retatrutide",
    goal: "Metabolic & Weight Loss",
    verdict:
      "Tirzepatide (GIP/GLP-1 dual agonist) is the most clinically validated dual-incretin peptide with extensive human trial data. Retatrutide adds glucagon receptor agonism as a third target (GIP/GLP-1/GCGR), producing greater mean weight loss in Phase 2 trials but with a less mature safety dataset. For documented metabolic research, Tirzepatide is the reference standard; Retatrutide is the frontier.",
    metrics: [
      { label: "Receptor Targets", a: "GIP + GLP-1 (dual)", b: "GIP + GLP-1 + Glucagon (triple)", winner: "B", note: "More targets = broader metabolic effect" },
      { label: "Phase 3 Trial Data", a: "Extensive (SURPASS series)", b: "Phase 2 only (Phase 3 ongoing)", winner: "A" },
      { label: "Mean Weight Loss (peak trial)", a: "~20–22%", b: "~24–26%", winner: "B" },
      { label: "Half-life", a: "~5 days (weekly dosing)", b: "~6 days (weekly dosing)", winner: "tie" },
      { label: "Gastrointestinal Tolerability", a: "Moderate — standard GLP-1 class", b: "Moderate–high — additional glucagon effects", winner: "A" },
      { label: "Hepatic Fat Reduction", a: "Significant (NASH trial data)", b: "Very significant — glucagon drives hepatic fat clearance", winner: "B" },
      { label: "Lean Mass Preservation", a: "Moderate — some muscle loss at high doses", b: "Better — glucagon receptor promotes lipolysis over proteolysis", winner: "B" },
      { label: "Research Availability", a: "Widely available research grade", b: "Available — rapidly expanding catalog", winner: "A" },
    ],
    aStrengths: [
      "Largest and most replicated human trial dataset",
      "Proven cardiovascular risk reduction data",
      "Established dose-titration protocols",
      "Best documented GLP-1 + GIP synergy",
      "Preferred standard for metabolic research comparison",
    ],
    bStrengths: [
      "Superior mean weight loss in head-to-head models",
      "Triple-receptor mechanism for broader metabolic targeting",
      "Greater hepatic fat clearance via glucagon arm",
      "Better lean mass preservation at similar weight loss",
      "Next-generation metabolic research frontier",
    ],
    bestFor: {
      a: "Established metabolic research, insulin sensitivity, cardiovascular endpoints",
      b: "Maximum fat loss, hepatic steatosis, novel triple-agonist mechanism research",
    },
  },
  {
    id: "cjc1295-vs-sermorelin",
    title: "CJC-1295 vs Sermorelin",
    tagline: "Long-acting GHRH analog vs natural GHRH fragment",
    peptideA: "CJC-1295 (DAC)",
    peptideB: "Sermorelin",
    slugA: "cjc-1295-with-dac",
    slugB: "sermorelin-acetate",
    goal: "GH Stimulation",
    verdict:
      "CJC-1295 with DAC binds albumin in the bloodstream, extending its half-life to 6–8 days and creating a sustained GH pulse elevation throughout the week. Sermorelin mimics the natural 1-29 fragment of GHRH with a short 10–20 minute half-life, producing pulsatile GH release that more closely mirrors natural physiology. Sermorelin is considered the 'gentler' choice; CJC-1295 DAC is preferred for sustained GH elevation.",
    metrics: [
      { label: "Half-life", a: "6–8 days (albumin-bound)", b: "10–20 minutes", winner: "A", note: "DAC enables once or twice-weekly dosing" },
      { label: "GH Pulse Pattern", a: "Sustained bleed elevation", b: "Pulsatile — mimics natural release", winner: "tie" },
      { label: "Physiological Fidelity", a: "Moderate — continuous elevation deviates from natural", b: "High — pulse matches endogenous rhythm", winner: "B" },
      { label: "Dosing Convenience", a: "1–2× per week", b: "Daily or nightly injections", winner: "A" },
      { label: "IGF-1 Elevation", a: "Significant sustained increase", b: "Moderate pulsatile increase", winner: "A" },
      { label: "Pituitary Desensitization Risk", a: "Higher — continuous stimulation concern", b: "Lower — pulsatile reduces receptor fatigue", winner: "B" },
      { label: "Stack with Ipamorelin", a: "Very effective", b: "Very effective", winner: "tie" },
    ],
    aStrengths: [
      "Infrequent dosing (1–2× per week) — high compliance",
      "Sustained IGF-1 elevation for anabolic research",
      "DAC linkage provides exceptional stability",
      "High-amplitude GH pulse potential",
    ],
    bStrengths: [
      "Most physiologically accurate GHRH mimetic",
      "Lower risk of pituitary desensitization",
      "Gentler profile suited for anti-aging longevity research",
      "Lower chance of GH bleed side effects",
      "Preferred starting point for first-time GH axis research",
    ],
    bestFor: {
      a: "Convenience-focused GH optimization, high-IGF-1 anabolic protocols",
      b: "Physiologically accurate GHRH research, longevity and anti-aging protocols",
    },
  },
  {
    id: "epithalon-vs-ghkcu",
    title: "Epithalon vs GHK-Cu",
    tagline: "Telomere longevity vs collagen-copper anti-aging",
    peptideA: "Epithalon",
    peptideB: "GHK-Cu",
    slugA: "epithalon",
    slugB: "ghk-cu",
    goal: "Anti-Aging & Longevity",
    verdict:
      "Epithalon (Epitalon) operates through telomerase activation and pineal gland regulation, addressing aging at the cellular/genetic level. GHK-Cu works through copper complex signaling to upregulate collagen synthesis, skin repair, and wound healing with significant effects on skin and connective tissue. Both are cornerstone longevity peptides with complementary — not competing — mechanisms.",
    metrics: [
      { label: "Primary Mechanism", a: "Telomerase activation → telomere extension", b: "Copper-tripeptide → collagen + gene expression", winner: "tie" },
      { label: "Skin Collagen Effects", a: "Indirect — via GH/IGF-1 axis", b: "Direct — upregulates collagen I, III, VII", winner: "B" },
      { label: "Cellular Longevity Evidence", a: "Strong — telomere lengthening in vitro/in vivo", b: "Moderate — gene expression rejuvenation panel", winner: "A" },
      { label: "Sleep & Circadian Regulation", a: "Yes — pineal gland melatonin modulation", b: "No", winner: "A" },
      { label: "Topical Application", a: "Subcutaneous only for research", b: "Both topical and subcutaneous", winner: "B" },
      { label: "Wound Healing", a: "Indirect — angiogenesis support", b: "Direct — primary wound healing peptide", winner: "B" },
      { label: "Half-life", a: "Short — minutes to hours", b: "Short — minutes to hours", winner: "tie" },
      { label: "Typical Cycle", a: "10–20 day intensive cycles, 1–4× per year", b: "Continuous or cycled as needed", winner: "tie" },
    ],
    aStrengths: [
      "Only well-studied telomerase-activating peptide",
      "Pineal bioregulator — melatonin and sleep regulation",
      "Significant mortality reduction in rodent longevity studies",
      "Combined with MOTS-c for mitochondrial longevity stack",
      "Addresses root cause of cellular aging",
    ],
    bStrengths: [
      "One of the most studied repair peptides (1,000+ publications)",
      "Topical delivery for cosmetic and dermal research",
      "Direct collagen I, III, and VII gene upregulation",
      "Anti-inflammatory via NFkB pathway modulation",
      "Wound healing, nerve regeneration, and hair follicle research",
    ],
    bestFor: {
      a: "Cellular longevity, telomere biology, sleep optimization, systemic anti-aging",
      b: "Skin repair, wound healing, topical anti-aging, collagen synthesis",
    },
  },
]

const GOAL_FILTERS = ["All", "Recovery & Repair", "GH Stimulation", "Metabolic & Weight Loss", "Anti-Aging & Longevity"]

function WinnerBadge({ winner, side }: { winner: Win; side: "A" | "B" }) {
  if (winner === "tie") return <Minus className="w-4 h-4 text-slate-400" />
  if (winner === side) return <CheckCircle className="w-4 h-4 text-emerald-500" />
  return <XCircle className="w-4 h-4 text-slate-300" />
}

export default function ComparePage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="py-20 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-blue-600" />
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Peptide Comparisons</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-5 max-w-3xl leading-tight">
            Head-to-Head<br />Peptide Analysis
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Side-by-side breakdowns of the most-compared research peptide pairs. Mechanism, half-life, dosing,
            research evidence, and stack compatibility — everything you need to choose the right compound for
            your research goals.
          </p>
          <div className="flex flex-wrap gap-3">
            {GOAL_FILTERS.slice(1).map((goal) => (
              <span
                key={goal}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-slate-200 text-slate-700"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON QUICK NAV */}
      <section className="py-8 border-b border-slate-100 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-2">Jump to:</span>
            {COMPARISONS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap"
              >
                {c.peptideA} vs {c.peptideB}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO EXPLAINER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: BarChart3,
              title: "Mechanism-First Analysis",
              desc: "Each comparison starts with receptor biology and downstream signaling — so you understand why two peptides differ, not just that they do.",
              color: "text-blue-600",
              bg: "bg-blue-50 border-blue-100",
            },
            {
              icon: Target,
              title: "Research Goal Matching",
              desc: "Every head-to-head concludes with a 'Best For' recommendation tied to specific research endpoints, not vague generalizations.",
              color: "text-purple-600",
              bg: "bg-purple-50 border-purple-100",
            },
            {
              icon: FlaskConical,
              title: "Evidence-Graded Claims",
              desc: "Claims are graded by preclinical vs clinical evidence. We distinguish rodent data from human trial data throughout every comparison.",
              color: "text-emerald-600",
              bg: "bg-emerald-50 border-emerald-100",
            },
          ].map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className={`p-6 rounded-2xl border ${bg}`}>
              <Icon className={`w-8 h-8 ${color} mb-3`} />
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* COMPARISON BLOCKS */}
        <div className="space-y-24">
          {COMPARISONS.map((comp) => (
            <div key={comp.id} id={comp.id} className="scroll-mt-24">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 uppercase tracking-wide">
                    {comp.goal}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{comp.title}</h2>
                <p className="text-slate-500 text-lg">{comp.tagline}</p>
              </div>

              {/* Verdict Card */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <Scale className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Research Verdict</p>
                </div>
                <p className="text-slate-200 leading-relaxed">{comp.verdict}</p>
              </div>

              {/* Comparison Table */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] bg-slate-50 border-b border-slate-200">
                  <div className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Metric</div>
                  <div className="p-4 text-sm font-bold text-slate-900 border-l border-slate-200">{comp.peptideA}</div>
                  <div className="p-4 text-sm font-bold text-slate-900 border-l border-slate-200">{comp.peptideB}</div>
                  <div className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-l border-slate-200">Edge</div>
                </div>
                {comp.metrics.map((m, idx) => (
                  <div
                    key={m.label}
                    className={`grid grid-cols-[1fr_1fr_1fr_1fr] border-b border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <div className="p-4">
                      <div className="text-sm font-semibold text-slate-800">{m.label}</div>
                      {m.note && <div className="text-xs text-slate-400 mt-0.5">{m.note}</div>}
                    </div>
                    <div className={`p-4 border-l border-slate-100 text-sm text-slate-700 ${m.winner === "A" ? "font-semibold text-emerald-700" : ""}`}>
                      {m.a}
                    </div>
                    <div className={`p-4 border-l border-slate-100 text-sm text-slate-700 ${m.winner === "B" ? "font-semibold text-emerald-700" : ""}`}>
                      {m.b}
                    </div>
                    <div className="p-4 border-l border-slate-100 flex items-center gap-2">
                      <WinnerBadge winner={m.winner} side="A" />
                      <span className="text-xs text-slate-400">vs</span>
                      <WinnerBadge winner={m.winner} side="B" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Strengths Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl border border-emerald-100 bg-emerald-50">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    {comp.peptideA} — Key Strengths
                  </h3>
                  <ul className="space-y-2">
                    {comp.aStrengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                        <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {comp.peptideB} — Key Strengths
                  </h3>
                  <ul className="space-y-2">
                    {comp.bStrengths.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <Target className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Best For — {comp.peptideA}</p>
                    <p className="text-sm text-slate-700">{comp.bestFor.a}</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <Target className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Best For — {comp.peptideB}</p>
                    <p className="text-sm text-slate-700">{comp.bestFor.b}</p>
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/products/${comp.slugA}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
                >
                  Research {comp.peptideA} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/products/${comp.slugB}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 border border-slate-300 hover:border-slate-500 transition-colors"
                >
                  Research {comp.peptideB} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-blue-600 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  Shop Both at Phiogen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO CHOOSE SECTION */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Decision Framework</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How to Choose Between Peptides</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              The right peptide for a research protocol depends on four factors. Work through this framework
              before committing to a compound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Define the Research Endpoint",
                desc: "What biological outcome is being studied? Tendon repair, GH axis stimulation, metabolic regulation, and telomere biology each require different peptide classes. A recovery peptide will not meaningfully impact GH secretion, and vice versa.",
                color: "text-blue-600 bg-blue-100",
              },
              {
                step: "02",
                title: "Match Mechanism to Target",
                desc: "Read the receptor binding profile of each candidate. BPC-157 works through VEGF and growth factor upregulation; TB-500 through actin polymerization. Same category, completely different mechanisms — and different tissue targets as a result.",
                color: "text-purple-600 bg-purple-100",
              },
              {
                step: "03",
                title: "Consider Half-life and Protocol Fit",
                desc: "CJC-1295 DAC's 6–8 day half-life enables weekly dosing while Sermorelin requires daily injections. The right half-life depends on whether continuous or pulsatile signaling matches your research model.",
                color: "text-emerald-600 bg-emerald-100",
              },
              {
                step: "04",
                title: "Check Stack Compatibility",
                desc: "Many peptides show synergistic effects when combined — BPC-157 + TB-500 for recovery, Ipamorelin + CJC-1295 for GH stimulation. Check whether candidates share complementary or competing pathways before designing a multi-peptide protocol.",
                color: "text-orange-600 bg-orange-100",
              },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="p-6 rounded-2xl bg-white border border-slate-200 flex gap-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${color}`}>
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Combination Recommendations */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Commonly Researched Combinations</h3>
              <p className="text-sm text-slate-500 mt-1">Peptide pairs and stacks with documented synergistic research rationale</p>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                {
                  stack: "BPC-157 + TB-500",
                  goal: "Recovery & Repair",
                  rationale: "BPC-157 handles localized tendon and gut repair via VEGF; TB-500 provides systemic tissue distribution via actin polymerization. Complementary — not redundant.",
                  href: "/stacks",
                  badge: "Synergistic",
                },
                {
                  stack: "Ipamorelin + CJC-1295",
                  goal: "GH Optimization",
                  rationale: "Ipamorelin triggers GH release from somatotroph cells; CJC-1295 amplifies GHRH signaling. Combined pulse is significantly larger than either alone.",
                  href: "/stacks",
                  badge: "Gold Standard",
                },
                {
                  stack: "Epithalon + GHK-Cu",
                  goal: "Anti-Aging",
                  rationale: "Epithalon works at the telomere/telomerase level; GHK-Cu works at the extracellular matrix and gene expression level. Complementary longevity mechanisms.",
                  href: "/stacks",
                  badge: "Complementary",
                },
                {
                  stack: "Tirzepatide + AOD9604",
                  goal: "Weight Loss",
                  rationale: "Tirzepatide drives appetite and incretin regulation; AOD9604 acts on fat cell lipolysis directly. Potential for additive fat loss via different pathways.",
                  href: "/stacks",
                  badge: "Additive",
                },
                {
                  stack: "Semax + Selank",
                  goal: "Cognitive & Anxiolytic",
                  rationale: "Semax upregulates BDNF for neuroplasticity; Selank modulates the GABAergic and serotonergic systems for anxiolytic effects. Cognitive + mood complementarity.",
                  href: "/stacks",
                  badge: "Complementary",
                },
              ].map((row) => (
                <div key={row.stack} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900">{row.stack}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">{row.badge}</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-600 mb-1">{row.goal}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{row.rationale}</p>
                  </div>
                  <Link
                    href={row.href}
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
                  >
                    View Stack <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="py-16 border-t border-slate-100 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-200 bg-white mb-10">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900 mb-1">Research Use Only</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                All comparisons on this page are for educational and research purposes. These compounds are not
                approved for human therapeutic use. No comparison constitutes medical advice. Consult a qualified
                physician and review applicable regulations before any research use.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Ready to Research?</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Source Research-Grade Peptides</h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              All peptides reviewed on this page are available from Phiogen with COA documentation,
              ≥99% purity verification, and independent HPLC testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
              >
                Shop Phiogen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/stacks"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-300 hover:border-slate-900 transition-colors"
              >
                Browse Peptide Stacks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
