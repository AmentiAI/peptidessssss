import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  FlaskConical,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Heart,
  Flame,
  AlertTriangle,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Star,
  Repeat,
  Syringe,
  BookOpen,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { AFFILIATE_URL } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Peptide Protocols — Dosing, Timing & Cycle Guides",
  description:
    "Complete peptide dosing protocols for muscle growth, fat loss, recovery, anti-aging, and cognitive goals. Beginner to advanced dosing schedules, injection timing, and cycle lengths. Buy linked peptides with one click.",
  keywords: [
    "peptide protocols",
    "peptide dosing guide",
    "BPC-157 protocol",
    "Ipamorelin CJC-1295 protocol",
    "Tirzepatide dosing",
    "Epithalon dosing",
    "peptide cycle guide",
  ],
  alternates: { canonical: "https://www.peptidesmaxxing.com/protocols" },
  openGraph: {
    title: "Peptide Protocols — Dosing, Timing & Cycle Library",
    description:
      "Detailed dosing protocols for BPC-157, Ipamorelin + CJC-1295, Tirzepatide, Epithalon, and more. Buy the peptides linked in each protocol.",
    url: "https://www.peptidesmaxxing.com/protocols",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Protocols — Beginner to Advanced Cycle Guides",
    description:
      "BPC-157, Ipamorelin + CJC-1295, Tirzepatide metabolic, Epithalon longevity, and cognitive peptide protocols with full dosing schedules and buy links.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.peptidesmaxxing.com/protocols",
  url: "https://www.peptidesmaxxing.com/protocols",
  name: "Peptide Protocols — PeptidesMaxxing",
  description: "Complete dosing protocols for peptides — timing, cycling, and stacking guides.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Peptide Protocols", item: "https://www.peptidesmaxxing.com/protocols" },
    ],
  },
}

interface Protocol {
  id: string
  name: string
  goal: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  frequency: string
  compounds: { name: string; dose: string; timing: string; route: string; slug?: string }[]
  schedule: { period: string; instructions: string }[]
  notes: string[]
  expectedOutcomes: string[]
  icon: React.ElementType
  accentColor: string
  bgColor: string
}

const PROTOCOLS: Protocol[] = [
  {
    id: "gh-pulse-beginner",
    name: "GH Pulse Protocol — Beginner",
    goal: "Growth Hormone Optimization",
    level: "Beginner",
    duration: "12 weeks",
    frequency: "Daily (pre-sleep)",
    icon: TrendingUp,
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-100",
    compounds: [
      { name: "Ipamorelin", dose: "100–200 mcg", timing: "30 min pre-sleep", route: "Subcutaneous", slug: "ipamorelin" },
      { name: "Sermorelin", dose: "100–200 mcg", timing: "30 min pre-sleep (same injection window)", route: "Subcutaneous", slug: "sermorelin-acetate" },
    ],
    schedule: [
      { period: "Weeks 1–2", instructions: "Start at 100 mcg each compound to assess individual response. Inject 30 minutes before sleep on an empty stomach (3+ hours post-meal). Do not eat for 30 minutes post-injection." },
      { period: "Weeks 3–8", instructions: "Increase to 150–200 mcg each if tolerating well. Maintain fasted injection window. Monitor for water retention, tingling in extremities, and sleep quality improvement." },
      { period: "Weeks 9–12", instructions: "Continue at established dose. Begin planning 4-week off-cycle to allow pituitary receptor recovery. Note: Sermorelin's pulsatile release mimics natural GHRH, reducing desensitization risk." },
      { period: "Off-Cycle (4 weeks)", instructions: "No GHRH/GHRP compounds. Monitor IGF-1 levels if bloodwork is part of your research protocol. Allow pituitary receptors to recover before restarting." },
    ],
    notes: [
      "Always inject in a fasted state — insulin blunts GH release",
      "Pre-sleep timing aligns with natural GH pulse (released in slow-wave sleep)",
      "Combining GHRH (Sermorelin) + GHRP (Ipamorelin) is synergistic — amplified pulse vs either alone",
      "Water retention in first 2 weeks is normal as IGF-1 rises",
      "No cortisol or prolactin elevation expected with Ipamorelin — it is GHSR-1a selective",
    ],
    expectedOutcomes: [
      "Improved sleep quality (deeper slow-wave sleep) — weeks 1–3",
      "Enhanced recovery and reduced DOMS — weeks 3–6",
      "Visible body composition changes (lean mass / reduced fat) — weeks 6–12",
      "Improved skin texture and collagen tone — weeks 8–12",
    ],
  },
  {
    id: "recovery-wolverine",
    name: "Wolverine Recovery Protocol",
    goal: "Injury Repair & Tissue Healing",
    level: "Intermediate",
    duration: "8–12 weeks",
    frequency: "Daily (BPC-157) + 2×/week (TB-500)",
    icon: Heart,
    accentColor: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-100",
    compounds: [
      { name: "BPC-157", dose: "250–500 mcg", timing: "Morning — near injury site if local, or systemic subcutaneous", route: "Subcutaneous or IM", slug: "bpc-157" },
      { name: "TB-500", dose: "2–2.5 mg", timing: "Twice weekly — any subcutaneous site", route: "Subcutaneous", slug: "tb-500" },
      { name: "GHK-Cu", dose: "1–2 mg", timing: "Evening — complementary collagen support", route: "Subcutaneous", slug: "ghk-cu" },
    ],
    schedule: [
      { period: "Weeks 1–2 (Loading)", instructions: "BPC-157: 500 mcg daily, injected closest to injury site if accessible. TB-500: 2.5 mg twice per week (Monday + Thursday). GHK-Cu: 1 mg daily evening injection. This loading phase maximizes peptide availability in damaged tissue." },
      { period: "Weeks 3–8 (Maintenance)", instructions: "BPC-157: 250–500 mcg daily. TB-500: 2 mg twice weekly. GHK-Cu: 1–2 mg 3×/week. Tissue remodeling occurs during this phase — avoid aggressive training on injured area but maintain light movement for circulation." },
      { period: "Weeks 9–12 (Consolidation)", instructions: "BPC-157: 250 mcg daily or every other day. TB-500: 2 mg once per week. GHK-Cu: 1 mg 3×/week. Gradually reintroduce loading to healed tissue. Assess pain response and functional range of motion." },
    ],
    notes: [
      "Local injection near injury site for BPC-157 has stronger evidence than systemic for tendon/ligament repairs",
      "TB-500 distributes systemically regardless of injection site — any subcutaneous location is equivalent",
      "GHK-Cu adds collagen synthesis support and anti-inflammatory signaling",
      "BPC-157 oral tablets can substitute for subcutaneous for gut/intestinal injury research",
      "Evidence strongest for tendon, ligament, muscle, and gastrointestinal tissue",
    ],
    expectedOutcomes: [
      "Reduced acute inflammation — days 3–7",
      "Improved tendon/ligament flexibility and reduced pain — weeks 2–4",
      "Structural tissue remodeling (collagen deposition) — weeks 4–8",
      "Near-complete functional recovery for moderate injuries — weeks 8–12",
    ],
  },
  {
    id: "metabolic-slim",
    name: "Metabolic Fat Loss Protocol",
    goal: "Body Composition & Weight Loss",
    level: "Intermediate",
    duration: "16 weeks",
    frequency: "Weekly (Tirzepatide) + Daily (AOD9604)",
    icon: Flame,
    accentColor: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-100",
    compounds: [
      { name: "Tirzepatide", dose: "2.5 mg → 5 mg → 7.5 mg (titrated)", timing: "Weekly, fixed day", route: "Subcutaneous", slug: "tirzepatide" },
      { name: "AOD9604", dose: "250–500 mcg", timing: "Morning, fasted (30 min pre-workout or pre-breakfast)", route: "Subcutaneous", slug: "aod9604" },
    ],
    schedule: [
      { period: "Weeks 1–4 (2.5 mg Tirzepatide)", instructions: "Begin Tirzepatide at 2.5 mg weekly. AOD9604 at 250 mcg daily, fasted morning. Primary goal: GI adaptation to GLP-1 receptor agonism. Expect nausea reduction over 2–3 weeks. Eat small, protein-first meals." },
      { period: "Weeks 5–8 (5 mg Tirzepatide)", instructions: "Titrate Tirzepatide to 5 mg if 2.5 mg tolerated well. AOD9604 can increase to 500 mcg if desired. This phase typically shows the steepest weight reduction. Ensure adequate protein (≥1.6 g/kg) to preserve lean mass." },
      { period: "Weeks 9–12 (7.5 mg Tirzepatide)", instructions: "Titrate to 7.5 mg if appetite control insufficient at 5 mg. Many research subjects plateau here in appetite suppression. Continue AOD9604 daily for lipolysis support independent of GLP-1 pathway." },
      { period: "Weeks 13–16 (Maintenance)", instructions: "Stabilize at most effective dose. AOD9604 can be reduced to 3–4× per week in maintenance. Begin planning transition to lower dose or cycling off." },
    ],
    notes: [
      "Tirzepatide acts via GIP + GLP-1 receptors — differentiated from pure GLP-1 agonists",
      "AOD9604 is a modified fragment of HGH (176–191) that acts on fat cell β-3 receptors without IGF-1 axis stimulation",
      "Protein intake is critical — GLP-1 agonists do not discriminate fat vs lean mass during caloric restriction",
      "GI side effects (nausea, constipation) peak in weeks 1–3 and typically resolve",
      "Weekly injection day should be consistent — do not vary by more than 1–2 days",
    ],
    expectedOutcomes: [
      "Significant appetite reduction — weeks 1–3",
      "4–8% body weight reduction — weeks 4–8",
      "15–22% body weight reduction possible at 16 weeks with consistent protocol",
      "Improved fasting glucose and insulin sensitivity — weeks 6–12",
    ],
  },
  {
    id: "longevity-epithalon",
    name: "Longevity & Telomere Protocol",
    goal: "Anti-Aging & Longevity",
    level: "Advanced",
    duration: "20-day cycle, 2–4× per year",
    frequency: "Daily during active cycle",
    icon: Shield,
    accentColor: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-100",
    compounds: [
      { name: "Epithalon", dose: "5–10 mg", timing: "Morning injection", route: "Subcutaneous", slug: "epithalon" },
      { name: "MOTS-c", dose: "5–10 mg", timing: "Morning — 30 min before exercise for mitochondrial activation", route: "Subcutaneous", slug: "mots-c" },
      { name: "GHK-Cu", dose: "1–2 mg", timing: "Evening — skin + collagen support", route: "Subcutaneous", slug: "ghk-cu" },
      { name: "Thymosin Alpha-1", dose: "1 mg", timing: "EOD (every other day)", route: "Subcutaneous", slug: "thymosin-alpha-1" },
    ],
    schedule: [
      { period: "Days 1–5 (Initiation)", instructions: "Epithalon 5 mg AM. MOTS-c 5 mg AM pre-exercise. GHK-Cu 1 mg PM. Thymosin Alpha-1 1 mg (Days 1, 3, 5). Begin at conservative doses to establish individual response before full-dose continuation." },
      { period: "Days 6–15 (Peak Phase)", instructions: "Epithalon 10 mg AM. MOTS-c 10 mg AM. GHK-Cu 2 mg PM. Thymosin Alpha-1 1 mg EOD. This is the core longevity window — Vlad Khavinson's original protocols used 10 days of Epitalon; this extends to 15 active days." },
      { period: "Days 16–20 (Taper)", instructions: "Epithalon 5 mg AM. MOTS-c 5 mg AM. GHK-Cu 1 mg PM. Thymosin Alpha-1 1 mg on Day 17 and Day 19. Taper reduces abrupt discontinuation effects and consolidates telomere signaling." },
      { period: "Off-Cycle (8–16 weeks)", instructions: "No Epithalon or MOTS-c. GHK-Cu and Thymosin Alpha-1 can continue at reduced frequency (2–3×/week) during inter-cycle periods for maintenance. Repeat full cycle 2–4 times annually in research protocols." },
    ],
    notes: [
      "Epithalon was developed by the St. Petersburg Institute of Bioregulation — V. Khavinson's original work used 5 mg/day for 10 days",
      "MOTS-c is a mitochondrial-derived peptide (MDT) — upregulates AMPK and mitochondrial biogenesis",
      "Thymosin Alpha-1 modulates immune function — particularly NK cell and T-cell activity",
      "This stack addresses multiple hallmarks of aging: telomere attrition (Epithalon), mitochondrial dysfunction (MOTS-c), and immune senescence (Thymosin Alpha-1)",
      "Cycle frequency of 2–4×/year is based on Khavinson's longevity research protocols in elderly subjects",
    ],
    expectedOutcomes: [
      "Improved sleep depth and melatonin regulation (Epithalon) — days 5–10",
      "Enhanced exercise capacity and mitochondrial efficiency (MOTS-c) — days 7–14",
      "Measurable NK cell activity increase (Thymosin Alpha-1) — weeks 2–4",
      "Skin elasticity and collagen improvement (GHK-Cu) — weeks 3–6",
      "Potential telomere length maintenance with repeated cycles — 6–12 month horizon",
    ],
  },
  {
    id: "cognitive-nova",
    name: "Nova Mind Cognitive Protocol",
    goal: "Neuroplasticity & Cognitive Enhancement",
    level: "Intermediate",
    duration: "8 weeks on / 4 weeks off",
    frequency: "Daily",
    icon: Brain,
    accentColor: "text-violet-600",
    bgColor: "bg-violet-50 border-violet-100",
    compounds: [
      { name: "Semax", dose: "100–300 mcg", timing: "Morning — intranasal", route: "Intranasal", slug: "semax" },
      { name: "Selank", dose: "250–500 mcg", timing: "Afternoon or as-needed for anxiety — intranasal", route: "Intranasal", slug: "selank" },
      { name: "DSIP", dose: "100–200 mcg", timing: "Pre-sleep", route: "Subcutaneous", slug: "dsip-delta-sleep-inducing-peptide" },
    ],
    schedule: [
      { period: "Week 1 (Induction)", instructions: "Semax 100 mcg AM intranasal. Selank 250 mcg PM intranasal. DSIP 100 mcg pre-sleep SC. Begin at minimum doses — Semax can produce transient stimulant-like effects in the first week. Do not take Semax within 6 hours of sleep." },
      { period: "Weeks 2–6 (Active Phase)", instructions: "Semax 200–300 mcg AM. Selank 500 mcg as needed for anxiolysis or cognitive clarity. DSIP 100–200 mcg pre-sleep. This window represents peak BDNF upregulation and GABAergic rebalancing. Cognitive tasks, creative work, and learning benefit most during this phase." },
      { period: "Weeks 7–8 (Consolidation)", instructions: "Reduce Semax to 100–200 mcg AM. Selank PRN (as needed). DSIP 100 mcg 3–4 nights per week. Consolidation phase embeds learned material and synaptic potentiation without continued stimulation." },
      { period: "Off-Cycle (4 weeks)", instructions: "No Semax or Selank. DSIP can continue for sleep support. Allow BDNF receptor downregulation to normalize before restarting. Many research subjects report 'baseline reset' before the next cycle produces fresh benefits." },
    ],
    notes: [
      "Semax is an ACTH-derived heptapeptide that upregulates BDNF, NGF, and CNTF in the brain",
      "Selank is a tuftsin-based anxiolytic that modulates GABA and serotonin — not sedating at standard doses",
      "DSIP (Delta Sleep-Inducing Peptide) is not a sedative — it entrains circadian delta wave sleep naturally",
      "Intranasal delivery bypasses blood-brain barrier issues — both Semax and Selank are formulated for nasal administration",
      "These peptides are studied in Russia/Eastern Europe — evidence base includes clinical trials, not just rodent studies",
    ],
    expectedOutcomes: [
      "Improved focus and mental clarity — days 3–7 (Semax)",
      "Reduced anxiety and improved mood stability — days 5–10 (Selank)",
      "Deeper, more restorative sleep — weeks 1–3 (DSIP)",
      "Enhanced memory consolidation and learning retention — weeks 3–6",
      "Improved verbal fluency and creative cognition — weeks 4–8",
    ],
  },
  {
    id: "looksmaxxing-glow",
    name: "Glow Protocol — Skin & Aesthetics",
    goal: "Skin, Hair & Aesthetic Enhancement",
    level: "Beginner",
    duration: "12 weeks",
    frequency: "Daily",
    icon: Star,
    accentColor: "text-pink-600",
    bgColor: "bg-pink-50 border-pink-100",
    compounds: [
      { name: "GHK-Cu", dose: "1–2 mg", timing: "Evening — can be combined with topical GHK-Cu cream", route: "Subcutaneous + Topical", slug: "ghk-cu" },
      { name: "Melanotan II", dose: "0.1–0.5 mg", timing: "Evening — begin at 0.1 mg minimum effective dose", route: "Subcutaneous", slug: "mt-2-melanotan-2-acetate" },
      { name: "Epithalon", dose: "5 mg", timing: "AM — 10-day loading cycle at weeks 1 and 7", route: "Subcutaneous", slug: "epithalon" },
      { name: "BPC-157", dose: "250 mcg", timing: "AM — skin healing and anti-inflammatory support", route: "Subcutaneous", slug: "bpc-157" },
    ],
    schedule: [
      { period: "Weeks 1–2 (Baseline + Loading)", instructions: "GHK-Cu 1 mg PM daily. Epithalon 5 mg AM for 10 consecutive days (loading phase). Melanotan II starting at 0.1 mg EOD — increase slowly to assess melanogenesis response and GI tolerance. BPC-157 250 mcg AM." },
      { period: "Weeks 3–6 (Core Phase)", instructions: "GHK-Cu 2 mg PM. Melanotan II 0.25–0.5 mg EOD or as desired. BPC-157 250 mcg daily. Epithalon paused until week 7 loading cycle. Maximum collagen synthesis window — this phase drives most of the skin texture and tone improvement." },
      { period: "Weeks 7–8 (Second Epithalon Cycle)", instructions: "Run second 10-day Epithalon cycle (5 mg AM daily). Continue GHK-Cu 1 mg PM and Melanotan II at maintenance dose. BPC-157 can be reduced to EOD. This second cycle reinforces cellular longevity signals." },
      { period: "Weeks 9–12 (Maintenance)", instructions: "GHK-Cu 1 mg PM, 4–5×/week. Melanotan II at minimal effective dose for desired tan maintenance. BPC-157 optional at 250 mcg 3×/week. Focus on sustaining gains established in core phase." },
    ],
    notes: [
      "GHK-Cu directly upregulates COL1A1, COL3A1, and COL7A1 — the primary structural collagens",
      "Melanotan II also has appetite-suppressive effects (MC4R agonism) — a secondary benefit in looksmaxxing protocols",
      "Topical GHK-Cu creams can supplement subcutaneous for facial skin targets",
      "Epithalon's sleep improvement effects (melatonin modulation) indirectly improve skin quality via overnight repair cycles",
      "BPC-157 reduces inflammation that degrades collagen and accelerates skin aging",
    ],
    expectedOutcomes: [
      "Improved skin hydration and plumpness — weeks 2–4 (GHK-Cu)",
      "Progressive melanogenesis and tan development — weeks 2–6 (Melanotan II)",
      "Visible reduction in fine lines and improved elasticity — weeks 4–8 (GHK-Cu + Epithalon)",
      "Improved hair density and follicle health — weeks 6–12 (GHK-Cu)",
      "Overall skin texture and tone improvement — weeks 8–12",
    ],
  },
]

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
}

const HALF_LIFE_TABLE = [
  { peptide: "Tirzepatide", halfLife: "~5 days", frequency: "Weekly", mechanism: "GIP + GLP-1 agonist" },
  { peptide: "Retatrutide", halfLife: "~6 days", frequency: "Weekly", mechanism: "GIP + GLP-1 + Glucagon agonist" },
  { peptide: "CJC-1295 (DAC)", halfLife: "6–8 days", frequency: "1–2× weekly", mechanism: "GHRH analog (albumin-bound)" },
  { peptide: "TB-500", halfLife: "24–48 h", frequency: "2× weekly", mechanism: "Thymosin β4 fragment (Actin/cell migration)" },
  { peptide: "MK-677", halfLife: "~24 h", frequency: "Daily (oral)", mechanism: "Oral ghrelin mimetic (GHSR agonist)" },
  { peptide: "BPC-157", halfLife: "4–6 h", frequency: "Daily", mechanism: "Angiogenesis + growth factor upregulation" },
  { peptide: "Ipamorelin", halfLife: "~2 h", frequency: "Daily (pre-sleep)", mechanism: "Selective GHRP / GHSR-1a agonist" },
  { peptide: "GHRP-2", halfLife: "~2 h", frequency: "Daily", mechanism: "GHRP / GHSR agonist (cortisol bleed)" },
  { peptide: "Sermorelin", halfLife: "10–20 min", frequency: "Daily", mechanism: "GHRH(1-29) analog" },
  { peptide: "CJC-1295 (no DAC)", halfLife: "30 min", frequency: "Daily", mechanism: "GHRH analog (short-acting)" },
  { peptide: "Epithalon", halfLife: "Minutes", frequency: "Daily during cycle", mechanism: "Tetrapeptide / telomerase activator" },
  { peptide: "Semax", halfLife: "Minutes (intranasal)", frequency: "Daily", mechanism: "ACTH analog / BDNF upregulator" },
  { peptide: "Selank", halfLife: "Minutes (intranasal)", frequency: "Daily", mechanism: "Tuftsin analog / GABAergic modulator" },
  { peptide: "GHK-Cu", halfLife: "~30 min", frequency: "Daily", mechanism: "Copper tripeptide / collagen + gene regulation" },
]

export default function ProtocolsPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="py-20 border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-6 h-6 text-purple-600" />
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">Protocol Library</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-5 max-w-3xl leading-tight">
            Peptide Protocols<br />& Dosing Guides
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Complete, evidence-referenced dosing protocols for every major peptide goal. Each protocol
            includes peptide selection rationale, week-by-week dosing schedules, injection timing,
            expected outcomes, and off-cycle considerations — with direct links to buy each peptide.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Protocols", value: `${PROTOCOLS.length}` },
              { label: "Peptides Covered", value: "25+" },
              { label: "Goals", value: "6" },
              { label: "Difficulty Levels", value: "3" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOL CARDS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Level Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-10 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Difficulty Levels:</span>
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <span key={level} className={`px-3 py-1 rounded-full text-xs font-bold ${LEVEL_COLORS[level]}`}>
              {level}
            </span>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:block">
            Beginner = well-tolerated entry-level compounds · Advanced = multi-compound intensive cycles
          </span>
        </div>

        <div className="space-y-12">
          {PROTOCOLS.map((protocol) => {
            const Icon = protocol.icon
            return (
              <div
                key={protocol.id}
                id={protocol.id}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
              >
                {/* Protocol Header */}
                <div className={`p-6 border-b border-slate-100 ${protocol.bgColor}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0`}>
                        <Icon className={`w-6 h-6 ${protocol.accentColor}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${LEVEL_COLORS[protocol.level]}`}>
                            {protocol.level}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">{protocol.goal}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{protocol.name}</h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 sm:text-right">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="font-semibold">{protocol.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Repeat className="w-4 h-4 text-slate-400" />
                        <span className="font-semibold">{protocol.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Compounds Table */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Syringe className="w-4 h-4" /> Peptides in this Protocol
                    </h3>
                    <div className="rounded-xl border border-slate-200 overflow-hidden">
                      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] bg-slate-50 border-b border-slate-200">
                        {["Compound", "Dose", "Timing", "Route"].map((h) => (
                          <div key={h} className="p-3 text-xs font-bold text-slate-500 uppercase tracking-wider first:pl-4">{h}</div>
                        ))}
                      </div>
                      {protocol.compounds.map((c, i) => (
                        <div key={c.name} className={`grid grid-cols-[1fr_1fr_1fr_1fr] border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                          <div className="p-3 pl-4">
                            {c.slug ? (
                              <Link href={`/products/${c.slug}`} className="font-semibold text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                {c.name} <ArrowRight className="w-3 h-3" />
                              </Link>
                            ) : (
                              <span className="font-semibold text-sm text-slate-900">{c.name}</span>
                            )}
                          </div>
                          <div className="p-3 text-sm text-slate-700">{c.dose}</div>
                          <div className="p-3 text-sm text-slate-700">{c.timing}</div>
                          <div className="p-3 text-sm text-slate-700">{c.route}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Timeline */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Week-by-Week Schedule
                    </h3>
                    <div className="space-y-3">
                      {protocol.schedule.map((s, idx) => (
                        <div key={s.period} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </div>
                            {idx < protocol.schedule.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-1" />}
                          </div>
                          <div className="pb-4 flex-1">
                            <p className="text-sm font-bold text-slate-900 mb-1">{s.period}</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{s.instructions}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notes + Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl bg-amber-50 border border-amber-100">
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-amber-600" /> Notes
                      </h3>
                      <ul className="space-y-2">
                        {protocol.notes.map((note) => (
                          <li key={note} className="flex items-start gap-2 text-sm text-slate-700">
                            <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-emerald-600" /> Expected Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {protocol.expectedOutcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                    {protocol.compounds.slice(0, 2).map((c) =>
                      c.slug ? (
                        <Link
                          key={c.slug}
                          href={`/products/${c.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                        >
                          Buy {c.name} <ArrowRight className="w-3 h-3" />
                        </Link>
                      ) : null
                    )}
                    <Link
                      href={AFFILIATE_URL}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
                    >
                      Buy All Peptides <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* HALF-LIFE REFERENCE TABLE */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Reference Data</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Peptide Half-Life & Dosing Frequency</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Half-life determines dosing frequency and injection timing. Use this table when designing
              multi-peptide protocols to avoid under- or over-dosing.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_2fr] bg-slate-50 border-b border-slate-200">
              {["Peptide", "Half-Life", "Frequency", "Mechanism"].map((h) => (
                <div key={h} className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</div>
              ))}
            </div>
            {HALF_LIFE_TABLE.map((row, idx) => (
              <div
                key={row.peptide}
                className={`grid grid-cols-[1.5fr_1fr_1fr_2fr] border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}
              >
                <div className="p-4 font-semibold text-sm text-slate-900">{row.peptide}</div>
                <div className="p-4 text-sm text-slate-700 font-mono">{row.halfLife}</div>
                <div className="p-4 text-sm text-slate-700">{row.frequency}</div>
                <div className="p-4 text-sm text-slate-500">{row.mechanism}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Half-life estimates based on published pharmacokinetic research. Values may vary by route of administration and individual metabolism.
          </p>
        </div>
      </section>

      {/* GENERAL PROTOCOL RULES */}
      <section className="py-20 border-t border-slate-100 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Universal Guidelines</p>
          <h2 className="text-4xl font-bold text-slate-900">Protocol Design Principles</h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto">
            Core principles that apply across all peptide protocols regardless of peptide or goal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: Clock,
              title: "Timing Windows Matter",
              desc: "GH-stimulating peptides (GHRP/GHRH) should be injected fasted — insulin directly suppresses GH release. Pre-sleep injection aligns with the body's largest natural GH pulse (slow-wave sleep). Metabolic peptides (GLP-1 class) are time-insensitive.",
            },
            {
              icon: Repeat,
              title: "Cycle On/Off to Prevent Desensitization",
              desc: "Receptor downregulation occurs with continuous stimulation. GH secretagogues benefit from 4-week off-cycles every 12–16 weeks. Epithalon is already cycled by design (10–20 day intensive cycles). GLP-1 agonists don't require cycling for receptor reasons, but metabolic adaptation occurs.",
            },
            {
              icon: BarChart3,
              title: "Start Low and Titrate Up",
              desc: "All new peptide introductions should begin at 50–75% of target dose for weeks 1–2. This establishes individual pharmacodynamic response, identifies idiosyncratic sensitivities, and prevents unnecessary discomfort. Escalate only after confirming baseline tolerance.",
            },
            {
              icon: FlaskConical,
              title: "Reconstitution Precision Is Non-Negotiable",
              desc: "Improper reconstitution — using wrong diluent, incorrect volume, or inadequate mixing — degrades peptide activity. Use bacteriostatic water (not sterile water) for multi-use vials. Calculate mcg-to-volume conversions before drawing. See our Reconstitution Guide for full protocol.",
            },
            {
              icon: Shield,
              title: "Store at Correct Temperature",
              desc: "Lyophilized (powder) peptides: refrigerate at 2–8°C or freeze at −20°C for long-term storage. After reconstitution: 2–8°C, use within 30 days. Avoid repeated freeze-thaw cycles. Never leave reconstituted peptides at room temperature for extended periods.",
            },
            {
              icon: Zap,
              title: "Stack Only When Mechanisms Are Complementary",
              desc: "Two GHRPs (e.g., GHRP-2 + Ipamorelin) compete at the same receptor — stacking is counterproductive. BPC-157 + TB-500 act on different tissue repair pathways — stacking is additive. Always map receptor targets before adding a second compound to a protocol.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all">
              <Icon className="w-7 h-7 text-slate-700 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="py-16 border-t border-slate-100 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-200 bg-white mb-10">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900 mb-1">Disclaimer</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Peptides are sold for laboratory and educational use only. Not for human or veterinary use.
                Buyers are responsible for compliance with local regulations. Dosing, timing, and cycle
                information on this page reflects published literature and is not medical advice.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Buy Your Peptides</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">High Purity, COA Verified, Fast Shipping</h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Every peptide listed in our protocols is available with third-party HPLC verification and
              complete certificate of analysis documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
              >
                Shop Peptides Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/guides"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-300 hover:border-slate-900 transition-colors"
              >
                Read Peptide Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
