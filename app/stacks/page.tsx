import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Package, Zap, Clock, Brain, Shield, Flame, Star, Heart, TrendingUp, ChevronRight, CheckCircle, FlaskConical } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { getAllProducts } from "@/lib/peptide-data"
import { ProductCard } from "@/components/peptide-hub/product-card"

export const metadata: Metadata = {
  title: "Peptide Cycles & Stacks — Pre-Built Research Protocols | PeptideLab",
  description:
    "Pre-built synergistic peptide cycles from Pantheon Peptides: Wolverine Cycle, Glow Plus, Nova Mind, Alpha Mind, T-Force Immunity, Prime Metabolic, and more. Complete multi-week research protocols targeting recovery, anti-aging, cognition, fat loss, and sexual health.",
  alternates: { canonical: "https://peptidelab.com/stacks" },
  openGraph: {
    title: "Peptide Cycles & Stacks | PeptideLab",
    description:
      "Pre-built synergistic peptide cycles from Pantheon Peptides for recovery, anti-aging, cognitive enhancement, fat loss, and sexual health research.",
    url: "https://peptidelab.com/stacks",
  },
}

const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_AFFILIATE_URL || "https://pantheonpeptides.com/partner/AmentiAI/"

// Detailed stack data for the high-level content sections
const FEATURED_CYCLES = [
  {
    slug: "wolverine-cycle",
    name: "Wolverine Cycle",
    tagline: "Fast Healing, Recovery & Performance",
    goal: "Recovery & Repair",
    icon: Zap,
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50 border-green-200 text-green-700",
    compounds: ["BPC-157", "TB-500"],
    duration: "Multi-week",
    benefits: [
      "Accelerates muscle, tendon & ligament healing",
      "Reduces inflammation body-wide",
      "Promotes new blood vessel formation at injury sites",
      "Activates stem cells for systemic tissue repair",
      "Restores gut health and mucosal integrity",
      "Improves joint mobility and connective tissue quality",
    ],
    idealFor: "Athletes, active researchers, post-injury recovery, anyone seeking faster physical repair.",
    science: "BPC-157 drives local angiogenesis and growth hormone receptor upregulation at injury sites. TB-500 mobilizes stem cells systemically and regulates actin for cell migration. Together they cover local and systemic tissue repair simultaneously — making this the most comprehensive healing protocol in peptide research.",
  },
  {
    slug: "glow-plus-cycle",
    name: "Glow Plus Cycle",
    tagline: "Anti-Aging Skin, Hair & Total Rejuvenation",
    goal: "Anti-Aging & Aesthetics",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50 border-purple-200 text-purple-700",
    compounds: ["GHK-Cu", "BPC-157", "Epithalon"],
    duration: "Multi-week",
    benefits: [
      "Increases skin thickness and collagen density up to 70%",
      "Activates 4,000+ genes for cellular rejuvenation",
      "Stimulates hair follicle growth and thickness",
      "Inhibits collagen-degrading enzymes (MMPs)",
      "Activates telomerase for cellular longevity",
      "Restores youthful gene expression in aged skin cells",
    ],
    idealFor: "Those focused on skin quality, hair density, anti-aging, and the biological drivers of physical appearance.",
    science: "GHK-Cu modulates over 4,000 human genes — reversing the transcriptional signature of aged skin back toward youthful patterns. BPC-157 supplies the vascular infrastructure that sustains collagen-producing fibroblasts. Epithalon activates telomerase, extending the replicative lifespan of skin and follicle stem cells. Together they address aesthetics at the gene, cell, and tissue level simultaneously.",
  },
  {
    slug: "nova-mind-cycle",
    name: "Nova Mind Cycle",
    tagline: "Cognitive Enhancement, Calm Focus & Neuroprotection",
    goal: "Brain & Cognition",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
    lightColor: "bg-cyan-50 border-cyan-200 text-cyan-700",
    compounds: ["Semax", "Selank"],
    duration: "Multi-week",
    benefits: [
      "Upregulates BDNF up to 800% in hippocampal tissue",
      "Enhances memory, focus and mental clarity",
      "Reduces anxiety without sedation or dependency risk",
      "Neuroprotection against oxidative and excitotoxic damage",
      "Improves sleep quality and cognitive recovery",
      "Modulates dopamine and serotonin for mood stability",
    ],
    idealFor: "Those seeking sharpened cognitive performance, reduced anxiety, neuroprotection, or enhanced learning capacity.",
    science: "Semax drives BDNF upregulation — the primary neurotrophic factor for neurogenesis, synaptic plasticity, and cognitive performance. Selank provides anxiolytic effects via GABA modulation and enkephalin stabilization, without the dependency of benzodiazepines. Both independently upregulate BDNF — potentially producing additive neuroplasticity effects when combined.",
  },
  {
    slug: "alpha-mind-cycle",
    name: "Alpha Mind Cycle",
    tagline: "Advanced Cognitive Repair for Severe Neurological Decline",
    goal: "Brain & Cognition",
    icon: Brain,
    color: "from-indigo-500 to-purple-600",
    lightColor: "bg-indigo-50 border-indigo-200 text-indigo-700",
    compounds: ["Cerebrolysin", "Dihexa", "Epithalon"],
    duration: "Multi-week",
    benefits: [
      "Promotes synaptogenesis millions of times more potently than BDNF",
      "Mimics multiple endogenous neurotrophic factors simultaneously",
      "Supports recovery from stroke, TBI, and neurodegeneration",
      "Activates telomerase for neural stem cell longevity",
      "Reduces neuroinflammation and oxidative neural damage",
      "Enhances hippocampal neurogenesis and memory circuits",
    ],
    idealFor: "Advanced cognitive research targeting Alzheimer's, dementia, stroke recovery, TBI, or severe age-related cognitive decline.",
    science: "Cerebrolysin provides neurotrophic factor mimicry across BDNF, NGF, and CNTF pathways — backed by 40+ years of clinical use in stroke and Alzheimer's research. Dihexa, derived from Angiotensin IV, promotes synaptogenesis at potency orders of magnitude above BDNF. Epithalon extends neural stem cell replicative capacity through telomerase activation and restores pineal function.",
  },
  {
    slug: "t-force-immunity-plus-cycle",
    name: "T-Force Immunity Plus",
    tagline: "Advanced Dual-Thymic Immune Restoration",
    goal: "Immune System",
    icon: Shield,
    color: "from-green-600 to-teal-600",
    lightColor: "bg-teal-50 border-teal-200 text-teal-700",
    compounds: ["Thymosin Alpha-1", "Thymulin"],
    duration: "Multi-week",
    benefits: [
      "Activates T-cells, dendritic cells, and NK cells",
      "Restores thymic T-cell education and self-tolerance",
      "Shifts immune response toward Th1 cell-mediated immunity",
      "Reduces chronic inflammation and autoimmune activity",
      "Enhances antiviral defense and cancer immunosurveillance",
      "Addresses both mature immune activation and upstream T-cell development",
    ],
    idealFor: "Research targeting immunosenescence, immune restoration after illness, antiviral preparedness, or autoimmune immune balance.",
    science: "Thymosin Alpha-1 activates mature immune effectors — dendritic cells, NK cells, T-lymphocytes — for enhanced immune surveillance. Thymulin governs T-cell maturation within the thymus itself, addressing the upstream developmental processes that determine immune system quality. Together they cover the full thymic immune axis: development and activation.",
  },
  {
    slug: "glow-cycle",
    name: "Glow Cycle",
    tagline: "Skin, Hair & Connective Tissue Regeneration",
    goal: "Anti-Aging & Aesthetics",
    icon: Star,
    color: "from-rose-400 to-orange-500",
    lightColor: "bg-rose-50 border-rose-200 text-rose-700",
    compounds: ["GHK-Cu", "BPC-157"],
    duration: "Multi-week",
    benefits: [
      "Stimulates collagen I, III, and elastin gene expression",
      "Inhibits MMP enzymes that degrade existing collagen",
      "Accelerates hair follicle activation from resting phase",
      "Promotes angiogenesis for improved skin nutrient delivery",
      "Reduces skin inflammation and accelerates wound healing",
      "Modulates 4,000+ genes toward youthful expression patterns",
    ],
    idealFor: "Those focused on skin firmness, hair density, connective tissue quality, and visible anti-aging results.",
    science: "GHK-Cu's 4,000-gene modulation drives collagen synthesis while simultaneously suppressing degradation — a net positive collagen balance that thickens and firms skin. BPC-157's VEGF-driven angiogenesis creates the vascular supply that sustains the metabolic demands of active fibroblasts. The combination is greater than the sum of its parts.",
  },
  {
    slug: "eros-stamina-cycle",
    name: "Eros Stamina Cycle",
    tagline: "Comprehensive Sexual Health Restoration",
    goal: "Sexual Health",
    icon: Heart,
    color: "from-red-500 to-rose-600",
    lightColor: "bg-red-50 border-red-200 text-red-700",
    compounds: ["PT-141", "Kisspeptin-10"],
    duration: "Multi-week",
    benefits: [
      "Enhances sexual desire and arousal through central CNS pathways",
      "Activates the HPG axis to optimize testosterone and estradiol",
      "FDA-approved MC3R/MC4R mechanism for both men and women",
      "Non-vascular pathway — no cardiovascular effects",
      "Restores hormonal baseline driving long-term libido",
      "Improves mood, motivation, and well-being",
    ],
    idealFor: "Research targeting sexual dysfunction, low libido, hypogonadism, or HPG axis restoration in either sex.",
    science: "PT-141 (FDA-approved Vyleesi) activates melanocortin receptors in the hypothalamus to directly enhance arousal through central neural circuits. Kisspeptin-10 drives the GnRH pulse generator — elevating LH and downstream sex hormones. Together they address both the neurological (desire) and hormonal (substrate) dimensions of sexual health.",
  },
  {
    slug: "prime-metabolic-12-week-cycle",
    name: "Prime Metabolic 12-Week Cycle",
    tagline: "Total Metabolic Support for Energy, Fat Loss & Recovery",
    goal: "Metabolic & Body Composition",
    icon: Flame,
    color: "from-orange-500 to-amber-500",
    lightColor: "bg-orange-50 border-orange-200 text-orange-700",
    compounds: ["AOD-9604", "5-Amino-1MQ", "BPC-157"],
    duration: "12 weeks",
    benefits: [
      "Targeted fat oxidation without IGF-1 elevation",
      "AMPK activation for mitochondrial efficiency and glucose metabolism",
      "NAD+ enhancement through NNMT inhibition",
      "Muscle and tissue resilience during metabolic stress",
      "Improved insulin sensitivity and glucose regulation",
      "Sustained energy production at the cellular level",
    ],
    idealFor: "Comprehensive metabolic health research, fat loss with muscle preservation, metabolic syndrome, and body recomposition.",
    science: "AOD-9604 stimulates adipose lipolysis via beta-3 adrenergic pathways without IGF-1 elevation — TGA-approved with Phase IIb clinical safety data. 5-Amino-1MQ inhibits NNMT to raise NAD+ and activate sirtuins, driving mitochondrial efficiency. BPC-157 maintains tissue integrity throughout the metabolic protocol.",
  },
  {
    slug: "stack-up-10-week-cycle",
    name: "Stack Up 10-Week Cycle",
    tagline: "Build Lean Muscle, Burn Fat & Maximize Performance",
    goal: "Muscle & Body Composition",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50 border-blue-200 text-blue-700",
    compounds: ["Ipamorelin", "CJC-1295", "BPC-157"],
    duration: "10 weeks",
    benefits: [
      "8-10x greater GH pulse than either peptide alone",
      "Significant lean mass accretion through IGF-1 elevation",
      "Simultaneous fat loss via GH-driven lipolysis",
      "Faster recovery enabling higher training volume",
      "Enhanced deep sleep for maximum GH secretion",
      "Improved skin thickness and collagen quality",
    ],
    idealFor: "Body composition research, sports performance, anti-aging, and anyone targeting simultaneous fat loss and muscle preservation.",
    science: "Ipamorelin + CJC-1295 is the gold standard GH peptide combination — dual-pathway GHSR + GHRH synergy producing GH pulses 8-10x above either compound alone. BPC-157 accelerates recovery from training stimulus, allowing greater training volume and amplifying the body composition response to GH axis activation.",
  },
]

const COMBO_STACKS = [
  {
    slug: "cjc-1295-ipamorelin",
    name: "CJC-1295 + Ipamorelin",
    tagline: "The Gold Standard GH Peptide Stack",
    goal: "Growth Hormone",
    compounds: ["CJC-1295", "Ipamorelin"],
    benefits: ["Synergistic GH release (8-10x amplification)", "Clean pulsatile GH pattern", "Lean mass and fat loss", "Improved sleep and recovery"],
  },
  {
    slug: "bpc-157-tb-500",
    name: "BPC-157 + TB-500",
    tagline: "The Ultimate Healing Combination",
    goal: "Recovery",
    compounds: ["BPC-157", "TB-500"],
    benefits: ["Local + systemic tissue repair", "Synergistic angiogenesis", "Stem cell mobilization", "Tendon, muscle, gut healing"],
  },
  {
    slug: "selank-semax",
    name: "Selank + Semax",
    tagline: "Calm Focus & Neuroprotection",
    goal: "Cognitive",
    compounds: ["Selank", "Semax"],
    benefits: ["Combined BDNF upregulation", "Anxiety reduction + cognitive enhancement", "Neuroprotection", "Improved sleep quality"],
  },
  {
    slug: "ipamorelin-sermorelin",
    name: "Ipamorelin + Sermorelin",
    tagline: "Clinical-Grade GH Stimulation",
    goal: "Growth Hormone",
    compounds: ["Ipamorelin", "Sermorelin"],
    benefits: ["Dual-pathway GH synergy", "Sermorelin's decades of clinical data", "Clean hormonal selectivity", "Anti-aging & body composition"],
  },
  {
    slug: "tesamorelin-cjc-1295-ipamorelin",
    name: "Tesamorelin + CJC-1295 + Ipamorelin",
    tagline: "Maximum GH + Visceral Fat Reduction",
    goal: "Body Composition",
    compounds: ["Tesamorelin", "CJC-1295", "Ipamorelin"],
    benefits: ["FDA-validated visceral fat reduction", "Triple-pathway GH stimulation", "Maximum GH output", "Superior body recomposition"],
  },
  {
    slug: "cjc-1295-ghrp-2",
    name: "CJC-1295 + GHRP-2",
    tagline: "High-Amplitude GH Research Stack",
    goal: "Growth Hormone",
    compounds: ["CJC-1295", "GHRP-2"],
    benefits: ["Largest GH pulse amplitude", "Muscle mass and strength", "Fat metabolism", "Strong recovery support"],
  },
  {
    slug: "kiss-peptides-cycle",
    name: "Kiss Peptides Cycle",
    tagline: "Dual-Mechanism Sexual Health",
    goal: "Sexual Health",
    compounds: ["PT-141", "Kisspeptin-10"],
    benefits: ["Central arousal + hormonal optimization", "For men and women", "HPG axis restoration", "Improved libido and well-being"],
  },
  {
    slug: "epithalon-5-amino-1mq",
    name: "Epithalon + 5-Amino-1MQ",
    tagline: "Dual Anti-Aging Longevity Stack",
    goal: "Longevity",
    compounds: ["Epithalon", "5-Amino-1MQ"],
    benefits: ["Telomere elongation", "NAD+ enhancement via NNMT inhibition", "Sirtuin activation", "Comprehensive cellular anti-aging"],
  },
]

const WHY_CYCLES = [
  {
    icon: FlaskConical,
    title: "Synergistic Mechanisms",
    desc: "Compounds are selected for complementary pathways — so each peptide amplifies the others rather than competing. The result is effects greater than the sum of individual parts.",
  },
  {
    icon: Clock,
    title: "Structured Protocols",
    desc: "Research shows timing and cycle length matter. Pre-built cycles incorporate loading phases, maintenance windows, and optimal administration intervals based on published data.",
  },
  {
    icon: CheckCircle,
    title: "Purity Verified",
    desc: "Every compound in Pantheon Peptides cycles undergoes HPLC purity testing (≥98%) and mass spectrometry verification. CoAs available for each batch.",
  },
  {
    icon: Shield,
    title: "Research-Grade Quality",
    desc: "Lyophilized peptides with documented stability. Manufactured to research-grade standards with full quality traceability from synthesis to delivery.",
  },
]

export default async function StacksPage() {
  const allProducts = await getAllProducts()
  const bundleProducts = allProducts.filter((p) => p.isBundle)
  const cycles = bundleProducts.filter((p) => p.name.toLowerCase().includes("cycle"))
  const combos = bundleProducts.filter((p) => !p.name.toLowerCase().includes("cycle"))

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-24 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-6 shadow-sm">
            <Package className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">
              Peptide Cycles & Stacks
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Research Cycles &<br />
            <span className="text-blue-600">Synergistic Stacks</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
            Pre-built peptide protocols from Pantheon Peptides — each combining compounds with
            complementary mechanisms to maximize research outcomes across recovery, anti-aging,
            cognitive enhancement, fat loss, and sexual health.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Shop All Cycles on Pantheon <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#cycles" className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-700 border-2 border-slate-200 hover:border-slate-400 transition-colors">
              Explore Cycles <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Cycles */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">The Science of Stacking</p>
            <h2 className="text-3xl font-bold text-slate-900">Why Cycles Outperform Single Peptides</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Research consistently shows that peptides with complementary mechanisms produce synergistic effects
              — not just additive ones. A well-designed cycle is a precision instrument.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CYCLES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose by Goal */}
      <section className="py-16 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Find Your Protocol</p>
            <h2 className="text-3xl font-bold text-slate-900">Choose by Research Goal</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Recovery", icon: Zap, slug: "wolverine-cycle", color: "text-green-600 bg-green-50 border-green-200" },
              { label: "Anti-Aging", icon: Star, slug: "glow-plus-cycle", color: "text-purple-600 bg-purple-50 border-purple-200" },
              { label: "Cognition", icon: Brain, slug: "nova-mind-cycle", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
              { label: "Immunity", icon: Shield, slug: "t-force-immunity-plus-cycle", color: "text-teal-600 bg-teal-50 border-teal-200" },
              { label: "Fat Loss", icon: Flame, slug: "slim-peptides-cycle", color: "text-orange-600 bg-orange-50 border-orange-200" },
              { label: "Muscle", icon: TrendingUp, slug: "stack-up-10-week-cycle", color: "text-blue-600 bg-blue-50 border-blue-200" },
            ].map(({ label, icon: Icon, slug, color }) => (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border ${color} hover:shadow-md transition-all text-center`}
              >
                <Icon className="w-7 h-7" />
                <span className="font-bold text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cycles — detailed breakdowns */}
      <section id="cycles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Complete Programs</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Peptide Cycles</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Structured multi-week protocols with defined loading and maintenance phases.
              Each cycle is purpose-built around a specific research goal.
            </p>
          </div>

          <div className="space-y-12">
            {FEATURED_CYCLES.map((cycle, i) => {
              const Icon = cycle.icon
              return (
                <div
                  key={cycle.slug}
                  className={`rounded-3xl border border-slate-200 overflow-hidden ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left — info */}
                    <div className="p-8 lg:p-10">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cycle.lightColor} border`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${cycle.lightColor}`}>
                          {cycle.goal}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-slate-900 mb-2">{cycle.name}</h3>
                      <p className="text-lg text-slate-500 mb-6">{cycle.tagline}</p>

                      {/* Compounds */}
                      <div className="mb-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Compounds</p>
                        <div className="flex flex-wrap gap-2">
                          {cycle.compounds.map((c) => (
                            <span key={c} className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Science */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                        <span className="font-semibold text-blue-900">The Science: </span>
                        {cycle.science}
                      </p>

                      {/* Ideal for */}
                      <p className="text-sm text-slate-500">
                        <span className="font-semibold text-slate-700">Ideal for: </span>
                        {cycle.idealFor}
                      </p>
                    </div>

                    {/* Right — benefits + CTA */}
                    <div className="p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                          Key Research Benefits
                        </p>
                        <ul className="space-y-3 mb-8">
                          {cycle.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href={`/products/${cycle.slug}`}
                          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-slate-700 border-2 border-slate-200 hover:border-slate-400 transition-colors"
                        >
                          Full Research Overview <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={AFFILIATE_URL}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
                        >
                          Order {cycle.name} on Pantheon
                        </a>
                        <p className="text-xs text-center text-slate-400">
                          Affiliate disclosure: PeptideLab earns a commission at no cost to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other Cycles (grid) */}
      {cycles.length > FEATURED_CYCLES.length && (
        <section className="py-16 border-t border-slate-100 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">All Programs</p>
              <h2 className="text-3xl font-bold text-slate-900">All Peptide Cycles</h2>
              <p className="text-slate-500 mt-1">Every available cycle from Pantheon Peptides.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cycles.map((product, i) => (
                <ProductCard key={product.slug} product={product} priority={i < 4} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Combination Stacks — detailed */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Synergistic Combos</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Peptide Combinations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Pre-combined two and three-peptide stacks — each pairing compounds that activate independent
              but complementary pathways for amplified research outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {COMBO_STACKS.map((combo) => (
              <div key={combo.slug} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{combo.name}</h3>
                    <p className="text-slate-500 text-sm">{combo.tagline}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap">
                    {combo.goal}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {combo.compounds.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-xs font-semibold">
                      {c}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-5">
                  {combo.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Link
                    href={`/products/${combo.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold text-sm text-slate-700 border border-slate-200 hover:border-slate-400 transition-colors"
                  >
                    Research Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold text-sm bg-slate-900 text-white hover:bg-slate-700 transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* All combos grid */}
          {combos.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">All Peptide Combinations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {combos.map((product, i) => (
                  <ProductCard key={product.slug} product={product} priority={i < 4} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Research disclaimer + final CTA */}
      <section className="py-16 border-t border-slate-100 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Research Protocol?</h2>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            Every cycle and stack on Pantheon Peptides is research-grade, HPLC-verified, and
            backed by peer-reviewed science. Choose your goal, order your protocol, and start
            building on decades of published peptide research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Shop All Cycles on Pantheon <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-slate-700 hover:border-slate-500 transition-colors"
            >
              Browse Individual Peptides
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            For research use only. Not for human consumption. Not FDA-approved for any therapeutic use.
            Consult a qualified physician before any use. Affiliate disclosure: PeptideLab earns a
            commission from Pantheon Peptides at no additional cost to you.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
