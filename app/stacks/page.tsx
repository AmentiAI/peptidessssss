import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FlaskConical, Zap, Shield, TrendingUp, Brain } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { ProductCard } from "@/components/peptide-hub/product-card"
import { products } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "Research Peptide Stacks — Synergistic Protocols 2026 | PeptideLab",
  description:
    "Pre-built research peptide stacks: The Ultimate Recovery Stack (BPC-157 + TB-500), Peak GH Protocol (Ipamorelin + CJC-1295), Anti-Aging Blueprint, Cognitive Stack, and more.",
  alternates: { canonical: "https://peptidelab.com/stacks" },
  openGraph: {
    title: "Research Peptide Stacks & Protocols | PeptideLab",
    description: "Pre-built synergistic peptide combinations for recovery, GH optimization, longevity, and cognitive enhancement research.",
    url: "https://peptidelab.com/stacks",
  },
}

function getP(name: string) {
  return products.find((p) => p.name === name)
}

const STACKS = [
  {
    id: "ultimate-recovery",
    badge: "#1 Stack",
    badgeColor: "#00d4ff",
    icon: Zap,
    iconColor: "#00d4ff",
    name: "Ultimate Recovery Stack",
    tagline: "The Gold Standard for Tissue Repair Research",
    description:
      "The most studied peptide combination for tissue repair. BPC-157 provides targeted local healing while TB-500 delivers systemic recovery — together they create a comprehensive dual-action healing protocol unmatched in research literature.",
    productNames: ["BPC-157 5mg", "TB-500 5mg"],
    synergy: "BPC-157's local angiogenesis + TB-500's systemic actin polymerization creates comprehensive tissue repair at both local and systemic levels.",
    stats: [
      { label: "Studies", value: "400+" },
      { label: "Healing Targets", value: "8+" },
      { label: "Avg Purity", value: "99.2%" },
    ],
    useCases: ["Tendon/Ligament research", "Muscle injury models", "GI inflammation studies", "Systemic healing protocols"],
    highlight: true,
  },
  {
    id: "peak-gh-protocol",
    badge: "Best GH Stack",
    badgeColor: "#7c3aed",
    icon: TrendingUp,
    iconColor: "#7c3aed",
    name: "Peak GH Protocol",
    tagline: "Maximum GH Stimulation Through Dual-Pathway Synergy",
    description:
      "The most researched GH peptide combination — Ipamorelin + CJC-1295 Without DAC. Ipamorelin's clean, selective GH secretion pairs perfectly with CJC-1295's GHRH mimicry for a GH pulse 8-10x larger than either compound alone.",
    productNames: ["Ipamorelin 5mg", "CJC-1295 Without DAC 5mg"],
    synergy: "GHRP (ghrelin receptor) + GHRH (GHRH receptor) co-activation with simultaneous somatostatin suppression = exponential GH pulse.",
    stats: [
      { label: "GH Increase", value: "8-10x" },
      { label: "Half-life", value: "~30min" },
      { label: "Side Effects", value: "Minimal" },
    ],
    useCases: ["Body composition research", "Sleep quality studies", "Recovery optimization", "Anti-aging GH research"],
    highlight: false,
  },
  {
    id: "anti-aging-blueprint",
    badge: "Longevity Stack",
    badgeColor: "#f59e0b",
    icon: Shield,
    iconColor: "#f59e0b",
    name: "Anti-Aging Blueprint",
    tagline: "Multi-Hallmark Longevity Research Protocol",
    description:
      "Address three fundamental hallmarks of aging simultaneously: telomere attrition (Epithalon), mitochondrial dysfunction (SS-31), and cellular decline (GHK-Cu). The most comprehensive longevity peptide stack in research science.",
    productNames: ["Epithalon 10mg", "GHK-Cu 50mg"],
    synergy: "Epithalon activates telomerase (genomic stability) + GHK-Cu activates 4,000+ regenerative genes (cellular repair) = multi-hallmark anti-aging.",
    stats: [
      { label: "Research Years", value: "35+" },
      { label: "Genes Activated", value: "4,000+" },
      { label: "Avg Purity", value: "99.4%" },
    ],
    useCases: ["Telomere biology research", "Cellular aging models", "Regeneration studies", "Longevity protocols"],
    highlight: false,
  },
  {
    id: "cognitive-enhancement",
    badge: "Top Nootropic",
    badgeColor: "#10b981",
    icon: Brain,
    iconColor: "#10b981",
    name: "Cognitive Enhancement Stack",
    tagline: "BDNF Maximization + Anxiety-Free Focus Protocol",
    description:
      "The complementary cognitive research stack: Semax maximizes BDNF (up to 800% in hippocampal tissue) for memory and focus, while Selank provides anxiolytic effects and GABA balance — enhancing cognitive performance without anxiety or side effects.",
    productNames: ["Semax 5mg", "Selank 5mg"],
    synergy: "Semax's BDNF upregulation + Selank's anxiolytic GABA modulation = enhanced cognition with simultaneous anxiety reduction. Complementary, not competing mechanisms.",
    stats: [
      { label: "BDNF Increase", value: "800%" },
      { label: "Mechanisms", value: "Dual" },
      { label: "Avg Purity", value: "99.1%" },
    ],
    useCases: ["Memory research", "Stress/anxiety models", "Neuroprotection studies", "BDNF biology"],
    highlight: false,
  },
  {
    id: "body-recomp",
    badge: "Body Comp Stack",
    badgeColor: "#ef4444",
    icon: Zap,
    iconColor: "#ef4444",
    name: "Body Recomposition Stack",
    tagline: "Fat-Targeting + GH Synergy for Body Composition Research",
    description:
      "AOD-9604 provides targeted fat metabolism through HGH fragment lipolysis pathways (TGA-approved mechanism) while Ipamorelin simultaneously supports lean mass preservation via clean GH stimulation — without IGF-1 elevation.",
    productNames: ["AOD-9604 5mg", "Ipamorelin 5mg"],
    synergy: "AOD-9604's targeted beta-3 adrenergic fat metabolism + Ipamorelin's lean-mass-preserving GH pulse = comprehensive body composition research model.",
    stats: [
      { label: "TGA Approved", value: "AOD ✓" },
      { label: "IGF-1 Effect", value: "None" },
      { label: "Avg Purity", value: "99.2%" },
    ],
    useCases: ["Fat loss models", "Body composition studies", "Metabolic research", "Lean mass protocols"],
    highlight: false,
  },
]

export default function StacksPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 border-b border-[rgba(0,212,255,0.08)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(0,212,255,0.06)] mb-6">
            <FlaskConical className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span className="text-xs font-semibold text-[#00d4ff] tracking-wider uppercase">Synergistic Protocols</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Research{" "}
            <span style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Stacks</span>
          </h1>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
            Pre-built synergistic peptide combinations curated by our research team. Each stack is designed to maximize efficacy through complementary mechanisms.
          </p>
        </div>
      </section>

      {/* Stacks */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-10">
          {STACKS.map((stack) => {
            const stackProducts = stack.productNames
              .map((name) => getP(name))
              .filter(Boolean) as NonNullable<ReturnType<typeof getP>>[]
            const Icon = stack.icon

            return (
              <div
                key={stack.id}
                className={`rounded-3xl border overflow-hidden ${stack.highlight ? "border-[rgba(0,212,255,0.3)]" : "border-[rgba(255,255,255,0.08)]"}`}
                style={{ background: "rgba(12,12,32,0.8)" }}
              >
                {/* Stack header */}
                <div className="p-8 border-b border-[rgba(255,255,255,0.06)]">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${stack.iconColor}12`, border: `1px solid ${stack.iconColor}25` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: stack.iconColor }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-black"
                          style={{ background: `linear-gradient(135deg, ${stack.badgeColor}, #7c3aed)` }}>
                          {stack.badge}
                        </span>
                        {stack.highlight && (
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold border text-[#00d4ff] border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.08)]">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-1">{stack.name}</h2>
                      <p className="text-sm font-semibold" style={{ color: stack.iconColor }}>{stack.tagline}</p>
                    </div>
                  </div>

                  <p className="text-[rgba(255,255,255,0.65)] leading-relaxed mt-5 max-w-3xl">{stack.description}</p>

                  {/* Synergy note */}
                  <div className="mt-4 p-3 rounded-xl border border-[rgba(0,212,255,0.15)] bg-[rgba(0,212,255,0.04)]">
                    <p className="text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-1">Synergy Mechanism</p>
                    <p className="text-sm text-[rgba(255,255,255,0.7)]">{stack.synergy}</p>
                  </div>

                  {/* Stats + use cases */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-5">
                    {stack.stats.map((stat) => (
                      <div key={stat.label} className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <p className="text-lg font-bold" style={{ color: stack.iconColor }}>{stat.value}</p>
                        <p className="text-xs text-[rgba(255,255,255,0.4)]">{stat.label}</p>
                      </div>
                    ))}
                    {stack.useCases.slice(0, 1).map((uc) => (
                      <div key={uc} className="p-3 rounded-lg col-span-full sm:col-span-1" style={{ background: "rgba(255,255,255,0.03)" }}>
                        <p className="text-xs text-[rgba(255,255,255,0.4)] mb-1">Primary Use</p>
                        <p className="text-sm font-semibold text-white">{uc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product cards */}
                <div className="p-8">
                  <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-5">Stack Components</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {stackProducts.map((product) => (
                      <ProductCard key={product.slug} product={product} />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/products"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
                      style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.15)" }}
                    >
                      Shop Stack Components <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/guides" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border border-[rgba(255,255,255,0.12)] hover:border-[rgba(0,212,255,0.4)] transition-all">
                      Research Protocol Guide
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Protocol?</h2>
          <p className="text-[rgba(255,255,255,0.55)] mb-8">Browse all research peptides and build your own custom stack.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
          >
            Browse All Peptides <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-6 text-xs text-[rgba(255,255,255,0.3)]">
            For research use only. Not for human consumption. Consult a physician before any use.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
