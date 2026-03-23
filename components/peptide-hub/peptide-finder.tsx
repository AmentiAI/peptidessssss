"use client"
import { useState } from "react"
import { ArrowRight, RotateCcw, ExternalLink } from "lucide-react"

const AFFILIATE_URL = "https://pantheonpeptides.com/partner/AmentiAI/"

type Goal = {
  id: string
  label: string
  emoji: string
  description: string
}

type Peptide = {
  name: string
  slug: string
  why: string
  badge?: string
}

type Results = Record<string, Peptide[]>

const PRIMARY_GOALS: Goal[] = [
  { id: "muscle", label: "Muscle & Performance", emoji: "💪", description: "Build lean mass, boost strength and recovery" },
  { id: "fat-loss", label: "Fat Loss", emoji: "🔥", description: "Lose body fat, improve metabolism, reduce cravings" },
  { id: "anti-aging", label: "Anti-Aging & Longevity", emoji: "⏳", description: "Slow aging, extend healthspan, boost vitality" },
  { id: "recovery", label: "Injury & Recovery", emoji: "🩹", description: "Heal injuries, tendons, joints, and gut" },
  { id: "cognitive", label: "Brain & Cognitive", emoji: "🧠", description: "Focus, memory, mood, neuroprotection" },
  { id: "skin", label: "Skin, Hair & Collagen", emoji: "✨", description: "Glow, collagen, hair growth, wound healing" },
  { id: "libido", label: "Libido & Sexual Health", emoji: "❤️", description: "Enhance libido and sexual function" },
  { id: "immunity", label: "Immunity", emoji: "🛡️", description: "Strengthen immune defenses and resilience" },
]

const RESULTS: Results = {
  muscle: [
    { name: "BPC-157", slug: "bpc-157", why: "Accelerates recovery and tissue repair, synergizes with any muscle-building cycle.", badge: "Top Pick" },
    { name: "Ipamorelin", slug: "ipamorelin", why: "Stimulates GH release with minimal side effects. Ideal for lean mass and sleep quality." },
    { name: "CJC-1295 + Ipamorelin", slug: "cjc-1295-ipamorelin", why: "Gold-standard GH secretagogue stack for muscle growth and body composition.", badge: "Best Stack" },
    { name: "GHRP-2", slug: "ghrp-2-acetate", why: "Potent GH pulse stimulator. Great for aggressive GH protocols." },
    { name: "IGF-1 LR3", slug: "igf-1lr3", why: "Directly drives muscle cell growth and nutrient uptake post-workout." },
    { name: "MK-677 Oral", slug: "mk-677-oral-capsules", why: "Oral GH secretagogue. Convenient capsule form, great for sleep and recovery." },
  ],
  "fat-loss": [
    { name: "Tirzepatide", slug: "tirzepatide", why: "Dual GIP/GLP-1 agonist. Most powerful peptide option for sustained fat loss.", badge: "Top Pick" },
    { name: "Retatrutide", slug: "retatrutide", why: "Triple hormone agonist — the strongest weight loss peptide available." },
    { name: "AOD9604", slug: "aod9604", why: "Targets abdominal fat specifically. No blood sugar effects." },
    { name: "5-AMINO-1MQ", slug: "5-amino-1mq", why: "NNMT inhibitor. Boosts cellular metabolism and fat breakdown." },
    { name: "Tesamorelin", slug: "tesamorelin", why: "Clinically proven to reduce visceral/abdominal fat via GH." },
    { name: "Mazdutide", slug: "mazdutide", why: "GLP-1/glucagon dual action for metabolic efficiency and fat loss." },
  ],
  "anti-aging": [
    { name: "Epithalon", slug: "epithalon", why: "Activates telomerase and lengthens telomeres. The gold standard anti-aging peptide.", badge: "Top Pick" },
    { name: "GHK-CU", slug: "ghk-cu", why: "Copper peptide that regenerates tissue, boosts collagen, and has systemic anti-aging effects." },
    { name: "MOTS-C", slug: "mots-c", why: "Mitochondrial-derived peptide. Improves metabolic health and slows aging at the cellular level." },
    { name: "Sermorelin Acetate", slug: "sermorelin-acetate", why: "Restores youthful GH levels naturally for anti-aging, sleep, and vitality." },
    { name: "Ipamorelin + Sermorelin", slug: "ipamorelin-sermorelin", why: "Powerful combination for GH restoration and long-term anti-aging." },
    { name: "MK-677 Oral", slug: "mk-677-oral-capsules", why: "Sustained GH elevation for anti-aging, sleep quality, and skin health." },
  ],
  recovery: [
    { name: "BPC-157 + TB-500", slug: "bpc-157-tb-500", why: "The ultimate healing stack. Combines systemic repair (TB-500) with local tissue healing (BPC-157).", badge: "Best Stack" },
    { name: "BPC-157", slug: "bpc-157", why: "Most versatile healing peptide — tendons, gut, nerves, muscle. Works fast." },
    { name: "TB-500", slug: "tb-500", why: "Promotes systemic repair and flexibility. Excellent for chronic injuries." },
    { name: "BPC-157 Oral", slug: "bpc-157-oral-tablets-500mcg", why: "Oral BPC-157 especially effective for gut health and systemic inflammation." },
    { name: "GHK-CU", slug: "ghk-cu", why: "Collagen synthesis and wound healing. Excellent for skin and connective tissue." },
    { name: "LL-37", slug: "ll-37", why: "Antimicrobial peptide that supports wound healing and reduces chronic inflammation." },
  ],
  cognitive: [
    { name: "Semax", slug: "semax", why: "Top nootropic peptide — focus, memory, neuroprotection without stimulation.", badge: "Top Pick" },
    { name: "Selank", slug: "selank", why: "Anxiolytic and cognitive enhancer. Reduces anxiety while improving mental clarity." },
    { name: "Selank + Semax", slug: "selank-semax", why: "Best of both worlds — calm focus, memory, and mood balance." },
    { name: "Cerebrolysin", slug: "cerebrolysin", why: "Neurotrophic peptide complex. Supports neuroplasticity and brain repair." },
    { name: "Nova Mind Cycle", slug: "nova-mind-cycle", why: "Pre-built brain optimization cycle for focus, mood, and cognitive resilience.", badge: "Best Cycle" },
    { name: "Alpha Mind Cycle", slug: "alpha-mind-cycle", why: "Advanced cycle for neurogenesis and cognitive longevity support." },
  ],
  skin: [
    { name: "GHK-CU", slug: "ghk-cu", why: "Stimulates collagen, regenerates skin, promotes hair growth. Research gold standard.", badge: "Top Pick" },
    { name: "MT-2", slug: "mt-2-melanotan-2-acetate", why: "Stimulates melanin production for a sunless tan and UV protection." },
    { name: "Glow Plus Cycle", slug: "glow-plus-cycle", why: "Complete skin, hair, and body rejuvenation cycle.", badge: "Best Cycle" },
    { name: "Glow Cycle", slug: "glow-cycle", why: "Collagen-focused skin and hair regeneration stack." },
    { name: "BPC-157", slug: "bpc-157", why: "Accelerates wound healing and skin repair systemically." },
    { name: "Epithalon + 5-Amino-1MQ", slug: "epithalon-5-amino-1mq", why: "Anti-aging combo targeting cellular longevity and metabolic skin health." },
  ],
  libido: [
    { name: "PT-141", slug: "pt-141-bremelanotide", why: "Acts on brain melanocortin receptors to enhance libido in both men and women.", badge: "Top Pick" },
    { name: "Kisspeptin-10", slug: "kisspeptin-10", why: "Stimulates reproductive hormones. Powerful for libido and fertility." },
    { name: "MT-2", slug: "mt-2-melanotan-2-acetate", why: "Enhances libido alongside tanning effects." },
    { name: "Eros Stamina Cycle", slug: "eros-stamina-cycle", why: "Complete libido and sexual health restoration cycle.", badge: "Best Cycle" },
    { name: "Kiss Peptides Cycle", slug: "kiss-peptides-cycle", why: "Advanced libido enhancement stack for men and women." },
  ],
  immunity: [
    { name: "Thymosin Alpha-1", slug: "thymosin-alpha-1", why: "Most studied immune peptide. Stimulates T-cells and enhances immune surveillance.", badge: "Top Pick" },
    { name: "Thymulin", slug: "thymulin", why: "Thymic peptide supporting immune signaling and anti-inflammatory effects." },
    { name: "LL-37", slug: "ll-37", why: "Broad-spectrum antimicrobial and immune-modulating peptide." },
    { name: "T-Force Immunity Cycle", slug: "t-force-immunity-cycle", why: "Pre-built immunity and recovery cycle.", badge: "Best Cycle" },
    { name: "T-Force Immunity Plus Cycle", slug: "t-force-immunity-plus-cycle", why: "Advanced dual-thymic peptide cycle for deep immune resilience." },
    { name: "BPC-157", slug: "bpc-157", why: "Anti-inflammatory and gut-healing — foundational immune support." },
  ],
}

const BADGE_COLORS: Record<string, string> = {
  "Top Pick": "bg-blue-100 text-blue-700",
  "Best Stack": "bg-violet-100 text-violet-700",
  "Best Cycle": "bg-emerald-100 text-emerald-700",
}

export function PeptideFinder() {
  const [selected, setSelected] = useState<string | null>(null)

  const results = selected ? RESULTS[selected] ?? [] : []

  return (
    <div className="space-y-6">
      {/* Goal selector */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">What is your primary goal?</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRIMARY_GOALS.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelected(goal.id === selected ? null : goal.id)}
              className={`p-4 rounded-xl border text-left transition-all hover:shadow-sm ${
                selected === goal.id
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-slate-200 hover:border-slate-300 bg-white"
              }`}
            >
              <span className="text-2xl block mb-2">{goal.emoji}</span>
              <p className={`text-sm font-semibold leading-tight ${selected === goal.id ? "text-blue-700" : "text-slate-800"}`}>
                {goal.label}
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-tight">{goal.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {selected && results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Recommended Peptides
            </p>
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {results.map((p) => (
              <div
                key={p.slug}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-bold text-slate-900">{p.name}</span>
                    {p.badge && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${BADGE_COLORS[p.badge] ?? "bg-slate-100 text-slate-600"}`}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.why}</p>
                </div>
                <div className="flex flex-col gap-1.5 flex-shrink-0">
                  <a
                    href={`/products/${p.slug}`}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-700 transition-colors whitespace-nowrap"
                  >
                    View
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-medium hover:border-blue-400 hover:text-blue-600 transition-colors whitespace-nowrap"
                  >
                    Buy
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!selected && (
        <div className="text-center py-8 text-slate-400 text-sm">
          Select a goal above to see personalized peptide recommendations
        </div>
      )}
    </div>
  )
}
