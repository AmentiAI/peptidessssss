import {
  Activity,
  Zap,
  Clock,
  Flame,
  Brain,
  Shield,
  Heart,
  Star,
  Package,
  Package2,
  ChevronRight,
  CheckCircle2,
  Dna,
  Microscope,
  FlaskConical,
  Target,
  BarChart3,
  Layers,
  Syringe,
  Droplets,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Leaf,
  Eye,
  Wind,
  Cpu,
  GitBranch,
  Pill,
} from "lucide-react"

// ─── MUSCLE GROWTH ────────────────────────────────────────────────────────────

function MuscleGrowthFeatures() {
  const steps = [
    {
      label: "Peptide Binds Receptor",
      sublabel: "GHRH-R or GHSR-1a on pituitary somatotrophs",
      num: "01",
    },
    {
      label: "GH Pulse Released",
      sublabel: "Amplitude + frequency both increase",
      num: "02",
    },
    {
      label: "IGF-1 Secretion",
      sublabel: "Liver and peripheral tissue respond",
      num: "03",
    },
    {
      label: "Muscle Adaptation",
      sublabel: "Satellite cell activation & myofibril growth",
      num: "04",
    },
  ]

  const ghrhPeptides = [
    { name: "CJC-1295 (with DAC)", detail: "6–8 day half-life via albumin binding. Sustained baseline GH elevation." },
    { name: "CJC-1295 (no DAC)", detail: "Short-pulse physiological rhythm. Mimics natural GHRH bursts." },
    { name: "Sermorelin Acetate", detail: "Gentle, well-studied secretagogue. Strong safety profile in research." },
    { name: "Tesamorelin", detail: "Documented visceral fat reduction + muscle maintenance." },
  ]

  const ghrelinPeptides = [
    { name: "Ipamorelin", detail: "Most selective class member. Minimal cortisol or prolactin elevation." },
    { name: "GHRP-2", detail: "Stronger GH spike. Stimulates appetite — useful for mass-building phases." },
    { name: "MK-677 (Oral)", detail: "24-hour GH + IGF-1 elevation. Bioavailable oral capsule form." },
  ]

  const stats = [
    { label: "GHRH Alone", value: "1×", sub: "baseline GH release" },
    { label: "Ghrelin Alone", value: "1.5×", sub: "above baseline" },
    { label: "Combined Stack", value: "4–6×", sub: "synergistic release" },
  ]

  const recoveryPeptides = [
    { name: "BPC-157", role: "Tendon & ligament repair, angiogenesis, gut health" },
    { name: "TB-500", role: "Systemic cell migration, actin polymerization, anti-inflammatory" },
    { name: "IGF-1 LR3", role: "Direct myocyte signaling, satellite cell activation" },
    { name: "ACE-031", role: "Myostatin inhibition — genetic ceiling bypass in research" },
  ]

  return (
    <div className="space-y-14">
      {/* Pathway */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Mechanism of Action</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">The GH Axis Pathway</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative rounded-2xl border-2 border-blue-100 bg-white p-5 overflow-hidden">
              <div className="absolute top-3 right-3 text-4xl font-black text-blue-50 select-none leading-none">
                {step.num}
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                <span className="text-white font-bold text-xs">{i + 1}</span>
              </div>
              <p className="font-bold text-slate-900 text-sm leading-snug">{step.label}</p>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{step.sublabel}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-200 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Two peptide classes */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Two Complementary Classes</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">GHRH Analogues vs Ghrelin Mimetics</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900">GHRH Analogues</p>
                <p className="text-xs text-slate-500">Increase GH pulse amplitude</p>
              </div>
            </div>
            <div className="space-y-3">
              {ghrhPeptides.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-blue-100 shadow-sm">
                  <p className="font-semibold text-slate-800 text-sm">{p.name}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Ghrelin Mimetics</p>
                <p className="text-xs text-slate-500">Increase GH pulse frequency</p>
              </div>
            </div>
            <div className="space-y-3">
              {ghrelinPeptides.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-indigo-100 shadow-sm">
                  <p className="font-semibold text-slate-800 text-sm">{p.name}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Synergy callout */}
      <div className="rounded-2xl bg-blue-600 p-8 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
        <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">Research Finding</p>
        <p className="text-2xl font-bold mb-1">Combination Protocols Produce Synergistic Results</p>
        <p className="text-blue-100 text-sm mb-7 max-w-xl">
          Pairing a GHRH analogue with a ghrelin mimetic stimulates both GH pulse amplitude and frequency simultaneously — producing effects neither compound achieves in isolation.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-md">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
              <p className="text-2xl font-black">{s.value}</p>
              <p className="text-xs font-bold text-blue-100 mt-1">{s.label}</p>
              <p className="text-xs text-blue-200 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery peptides */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Supporting Compounds</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Recovery & Anabolic Support Peptides</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {recoveryPeptides.map((p, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <FlaskConical className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{p.name}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── RECOVERY & REPAIR ────────────────────────────────────────────────────────

function RecoveryRepairFeatures() {
  const phases = [
    {
      phase: "01",
      name: "Inflammation",
      duration: "0–72 hours",
      desc: "Vasodilation, immune cell recruitment, and cytokine signaling clear debris and prepare the repair scaffold.",
      peptide: "BPC-157 reduces excessive TNF-α and IL-6 to prevent chronic inflammation",
      color: "bg-red-50 border-red-200",
      dot: "bg-red-500",
    },
    {
      phase: "02",
      name: "Proliferation",
      duration: "3–21 days",
      desc: "Fibroblasts and tenocytes migrate into the wound, new collagen is deposited, and angiogenesis establishes vascularity.",
      peptide: "TB-500 promotes cell migration via actin polymerization; BPC-157 drives angiogenesis",
      color: "bg-amber-50 border-amber-200",
      dot: "bg-amber-500",
    },
    {
      phase: "03",
      name: "Remodeling",
      duration: "21 days – 2 years",
      desc: "Collagen fibers cross-link and align along stress lines, restoring tensile strength and tissue architecture.",
      peptide: "Both peptides promote organized collagen type I deposition and reduce fibrous adhesions",
      color: "bg-green-50 border-green-200",
      dot: "bg-green-600",
    },
  ]

  const comparison = [
    { prop: "Source", bpc: "Gastric juice protein fragment", tb: "Thymosin Beta-4 (natural)" },
    { prop: "Primary Mechanism", bpc: "GH receptor upregulation + angiogenesis", tb: "Actin polymerization + AKT activation" },
    { prop: "Best Application", bpc: "Tendon, ligament, gut, nerve repair", tb: "Systemic, cardiac, neural, muscle" },
    { prop: "Anti-Inflammatory", bpc: "Strong local TNF-α / IL-6 reduction", tb: "Systemic oxidative stress reduction" },
    { prop: "Angiogenesis", bpc: "Primary mechanism — VEGF stimulation", tb: "Secondary benefit via cell migration" },
    { prop: "Delivery", bpc: "Injectable or oral tablets", tb: "Injectable" },
  ]

  const tissues = [
    { icon: Target, label: "Tendon & Ligament", desc: "Collagen I deposition, tensile strength restoration" },
    { icon: Activity, label: "Skeletal Muscle", desc: "Satellite cell activation, inflammation resolution" },
    { icon: Layers, label: "Gut & GI Tract", desc: "Mucosal repair, permeability reduction (BPC-157)" },
    { icon: BarChart3, label: "Bone & Cartilage", desc: "Periosteal healing, fracture callus formation" },
    { icon: Cpu, label: "Neural Tissue", desc: "Nerve repair support, neuroprotective effects" },
    { icon: Heart, label: "Cardiac Muscle", desc: "Post-ischemia recovery (TB-500 primary)" },
  ]

  return (
    <div className="space-y-14">
      {/* 3-phase timeline */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Healing Biology</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">The 3 Phases of Tissue Repair</h3>
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${phase.color}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full ${phase.dot} text-white flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-slate-900 text-lg">{phase.name}</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70 text-slate-600 border border-white">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{phase.desc}</p>
                  <div className="flex items-start gap-2 bg-white/60 rounded-xl p-3 border border-white">
                    <FlaskConical className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 font-medium">{phase.peptide}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BPC vs TB comparison */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Compound Comparison</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">BPC-157 vs TB-500: Complementary Mechanisms</h3>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
            <div className="p-4">Property</div>
            <div className="p-4 border-l border-slate-700 text-green-400">BPC-157</div>
            <div className="p-4 border-l border-slate-700 text-emerald-400">TB-500</div>
          </div>
          {comparison.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-t border-slate-100`}>
              <div className="p-4 font-semibold text-slate-700 text-xs">{row.prop}</div>
              <div className="p-4 text-slate-600 text-xs border-l border-slate-100 leading-relaxed">{row.bpc}</div>
              <div className="p-4 text-slate-600 text-xs border-l border-slate-100 leading-relaxed">{row.tb}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Target tissues */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Research Applications</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Target Tissue Categories</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {tissues.map(({ icon: Icon, label, desc }, i) => (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-green-200 hover:bg-green-50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                <Icon className="w-5 h-5 text-green-700" />
              </div>
              <p className="font-bold text-slate-900 text-sm">{label}</p>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── ANTI-AGING ───────────────────────────────────────────────────────────────

function AntiAgingFeatures() {
  const hallmarks = [
    { name: "Telomere Attrition", peptide: "Epithalon", icon: Dna, desc: "Activates telomerase to rebuild chromosome end-caps" },
    { name: "Genomic Instability", peptide: "GHK-Cu", icon: Shield, desc: "Downregulates DNA damage and pro-cancer gene expression" },
    { name: "Epigenetic Alterations", peptide: "GHK-Cu + Epithalon", icon: Layers, desc: "Modulates gene expression toward youthful patterns" },
    { name: "Mitochondrial Dysfunction", peptide: "MOTS-C", icon: Zap, desc: "Restores AMPK and mitochondrial metabolic signaling" },
    { name: "Deregulated Nutrient Sensing", peptide: "MOTS-C + 5-Amino-1MQ", icon: BarChart3, desc: "AMPK activation + NAD+ restoration via NNMT inhibition" },
    { name: "Cellular Senescence", peptide: "Epithalon", icon: Clock, desc: "Extends replicative lifespan beyond Hayflick limit in research" },
    { name: "Loss of Proteostasis", peptide: "GHK-Cu", icon: Target, desc: "Upregulates proteasome and antioxidant pathways" },
    { name: "Stem Cell Exhaustion", peptide: "GH Secretagogues", icon: Sparkles, desc: "GH/IGF-1 restoration supports stem cell activity in aging tissue" },
    { name: "Intercellular Signaling", peptide: "GHK-Cu + MOTS-C", icon: GitBranch, desc: "Broad gene expression and cytokine environment rebalancing" },
  ]

  const peptideData = [
    {
      name: "Epithalon",
      origin: "Pineal gland derived",
      mechanism: "Telomerase activation, melatonin restoration",
      highlight: "+13–34% lifespan extension in animal models",
      color: "border-purple-200 bg-purple-50",
      badge: "bg-purple-100 text-purple-700",
    },
    {
      name: "GHK-Cu",
      origin: "Naturally in blood plasma",
      mechanism: "4,000+ gene modulation, collagen synthesis, antioxidant",
      highlight: "Declines 60% between age 20–60",
      color: "border-violet-200 bg-violet-50",
      badge: "bg-violet-100 text-violet-700",
    },
    {
      name: "MOTS-C",
      origin: "Mitochondrial genome encoded",
      mechanism: "AMPK activation, Nrf2, insulin sensitization",
      highlight: "Reversed metabolic aging in animal models",
      color: "border-fuchsia-200 bg-fuchsia-50",
      badge: "bg-fuchsia-100 text-fuchsia-700",
    },
    {
      name: "5-Amino-1MQ",
      origin: "NNMT inhibitor",
      mechanism: "NAD+ restoration, SIRT1 activation, fat cell metabolism",
      highlight: "Synergizes with Epithalon on longevity pathways",
      color: "border-pink-200 bg-pink-50",
      badge: "bg-pink-100 text-pink-700",
    },
  ]

  return (
    <div className="space-y-14">
      {/* Hallmarks grid */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">Science Foundation</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">The 9 Hallmarks of Aging — Addressed</h3>
        <p className="text-slate-500 text-sm mb-7">Modern longevity research targets specific molecular mechanisms of biological aging. Each hallmark has at least one research peptide documented to act on it.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hallmarks.map(({ name, peptide, icon: Icon, desc }, i) => (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-purple-200 hover:bg-purple-50 transition-colors group">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Icon className="w-4 h-4 text-purple-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-snug">{name}</p>
                  <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 rounded-full px-2 py-0.5 mt-1.5">{peptide}</span>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Peptide spotlight cards */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">Key Compounds</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Featured Anti-Aging Peptides</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {peptideData.map((p, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${p.color}`}>
              <div className="flex items-start justify-between mb-4">
                <p className="font-bold text-slate-900 text-lg">{p.name}</p>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.badge}`}>{p.origin}</span>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">{p.mechanism}</p>
              <div className="flex items-center gap-2 bg-white/70 rounded-xl p-3 border border-white">
                <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <p className="text-xs font-semibold text-slate-700">{p.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decline + restoration banner */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-900 to-violet-900 p-8 text-white overflow-hidden relative">
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 translate-x-1/3" />
        <p className="text-xs font-bold uppercase tracking-widest text-purple-300 mb-3">Why Timing Matters</p>
        <h4 className="text-xl font-bold mb-2">Key Biomarkers Decline Steadily After Age 25</h4>
        <p className="text-purple-200 text-sm max-w-lg mb-6">Research peptides targeting the aging cascade work most effectively when the decline is addressed rather than treated after significant loss has occurred.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "GH decline", value: "~14%", sub: "per decade after 25" },
            { label: "GHK-Cu decline", value: "~60%", sub: "between age 20–60" },
            { label: "Melatonin decline", value: "~80%", sub: "by age 70 in research" },
            { label: "Telomere loss", value: "~1kb", sub: "per decade of cell division" },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
              <p className="text-xl font-black">{s.value}</p>
              <p className="text-xs font-bold text-purple-200 mt-1">{s.label}</p>
              <p className="text-xs text-purple-300">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── WEIGHT LOSS ──────────────────────────────────────────────────────────────

function WeightLossFeatures() {
  const agonistTiers = [
    {
      tier: "GLP-1 Agonist",
      example: "Semaglutide (reference)",
      avgLoss: "~15%",
      mechanism: "Reduces appetite, slows gastric emptying, stimulates insulin",
      color: "border-orange-200 bg-orange-50",
      badge: "bg-orange-100 text-orange-700",
    },
    {
      tier: "Dual Agonist",
      example: "Tirzepatide (GLP-1 + GIP)",
      avgLoss: "~20–22%",
      mechanism: "Adds GIP receptor — enhances insulin sensitivity + energy expenditure",
      color: "border-red-200 bg-red-50",
      badge: "bg-red-100 text-red-700",
    },
    {
      tier: "Triple Agonist",
      example: "Retatrutide (GLP-1 + GIP + GCG)",
      avgLoss: "~24%",
      mechanism: "Adds glucagon — increases energy expenditure + hepatic fat breakdown",
      color: "border-rose-300 bg-rose-50",
      badge: "bg-rose-100 text-rose-700",
    },
  ]

  const mechanisms = [
    {
      name: "GLP-1 / GIP / Glucagon Agonism",
      peptides: ["Tirzepatide", "Retatrutide", "Mazdutide", "Cagrilintide"],
      how: "Reduce caloric intake through satiety signaling, slow stomach emptying, and improve insulin sensitivity.",
      icon: Pill,
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "GH Fragment Lipolysis",
      peptides: ["AOD9604"],
      how: "Activates beta-3 adrenergic receptors in adipose tissue, triggering fat breakdown without GH's anabolic effects.",
      icon: Flame,
      color: "bg-red-100 text-red-700",
    },
    {
      name: "NNMT Inhibition",
      peptides: ["5-Amino-1MQ"],
      how: "Raises intracellular NAD+ and activates SIRT1/AMPK. Shifts fat cells from energy storage to energy expenditure.",
      icon: Zap,
      color: "bg-amber-100 text-amber-700",
    },
    {
      name: "AMPK Activation",
      peptides: ["AICAR", "MOTS-C"],
      how: "Mimics the cellular effects of exercise at the enzyme level — increases fatty acid oxidation and mitochondrial biogenesis.",
      icon: Activity,
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  const trialData = [
    { compound: "Tirzepatide", population: "Adults with obesity (Phase 3)", reduction: "20–22.5%", weeks: "72 weeks", notes: "SURMOUNT-1 trial. FDA approved for obesity 2023." },
    { compound: "Retatrutide", population: "Adults with obesity (Phase 2)", reduction: "24.2%", weeks: "48 weeks", notes: "Highest weight reduction ever recorded for a pharmacological agent." },
    { compound: "AOD9604", population: "Preclinical (animal)", reduction: "Visceral fat preferential", weeks: "Varies", notes: "No lean mass loss observed in rodent models." },
    { compound: "5-Amino-1MQ", population: "Diet-induced obese mice", reduction: "Significant fat mass ↓", weeks: "4 weeks", notes: "Without changes in food intake — purely metabolic mechanism." },
  ]

  return (
    <div className="space-y-14">
      {/* Agonist tiers */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">The Receptor Agonist Progression</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">GLP-1 → Dual → Triple Agonism</h3>
        <p className="text-slate-500 text-sm mb-7">Each additional receptor target adds a complementary mechanism, producing progressively greater fat loss in clinical research.</p>
        <div className="space-y-4">
          {agonistTiers.map((tier, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${tier.color} flex gap-6 items-start`}>
              <div className="flex-shrink-0 text-center">
                <p className="text-3xl font-black text-slate-900">{tier.avgLoss}</p>
                <p className="text-xs text-slate-500 mt-1">avg body wt loss</p>
              </div>
              <div className="flex-1 border-l border-current/20 pl-6">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-slate-900">{tier.tier}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tier.badge}`}>{tier.example}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{tier.mechanism}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mechanism cards */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Distinct Pathways</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Four Independent Fat-Loss Mechanisms</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {mechanisms.map((m, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${m.color}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <p className="font-bold text-slate-900 mb-1">{m.name}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {m.peptides.map((p, j) => (
                  <span key={j} className="text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{p}</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{m.how}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research data table */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Research Data</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Clinical & Preclinical Highlights</h3>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="grid grid-cols-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
            {["Compound", "Avg Reduction", "Duration", "Notes"].map((h, i) => (
              <div key={i} className={`p-4 ${i > 0 ? "border-l border-slate-700" : ""}`}>{h}</div>
            ))}
          </div>
          {trialData.map((row, i) => (
            <div key={i} className={`grid grid-cols-4 text-xs border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <div className="p-4 font-bold text-slate-800">{row.compound}</div>
              <div className="p-4 font-black text-orange-600 border-l border-slate-100">{row.reduction}</div>
              <div className="p-4 text-slate-600 border-l border-slate-100">{row.weeks}</div>
              <div className="p-4 text-slate-500 border-l border-slate-100 leading-relaxed">{row.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── BRAIN / NERVE ────────────────────────────────────────────────────────────

function BrainNerveFeatures() {
  const domains = [
    { name: "Working Memory", peptide: "Semax", icon: Cpu, desc: "BDNF upregulation strengthens hippocampal memory consolidation" },
    { name: "Focus & Attention", peptide: "Semax", icon: Target, desc: "Dopaminergic enhancement sharpens attentional control" },
    { name: "Anxiety Regulation", peptide: "Selank", icon: Wind, desc: "GABA-A modulation reduces anxious arousal without sedation" },
    { name: "Mood Stability", peptide: "Selank", icon: Heart, desc: "Serotonin metabolism regulation stabilizes emotional baseline" },
    { name: "Neuroprotection", peptide: "Cerebrolysin", icon: Shield, desc: "Neurotrophic factors defend against excitotoxicity and ischemia" },
    { name: "Neuroplasticity", peptide: "Semax + Cerebrolysin", icon: GitBranch, desc: "Synergistic BDNF and synaptic growth factor stimulation" },
  ]

  const semaxVsSelank = [
    { prop: "Class", semax: "ACTH(4-7)Pro-Gly-Pro analogue", selank: "Tuftsin analogue" },
    { prop: "Primary Receptor", semax: "MC4R, dopamine, serotonin systems", selank: "GABA-A modulation, enkephalinase inhibition" },
    { prop: "Key Effect", semax: "BDNF & NGF upregulation, cognitive drive", selank: "Anxiolytic, mood stabilization, immune modulation" },
    { prop: "Stimulation Profile", semax: "Activating — may increase energy/focus", selank: "Calming — reduces anxiety, improves sleep" },
    { prop: "Best Combination", semax: "With Selank for balanced effect", selank: "With Semax for full cognitive stack" },
    { prop: "Research Status", semax: "Registered drug in Russia (cognitive impairment)", selank: "Registered anxiolytic drug in Russia (2009)" },
  ]

  const cerebroFactors = [
    { factor: "BDNF", role: "Primary neurotrophic factor for memory and synaptic plasticity" },
    { factor: "NGF", role: "Nerve Growth Factor — peripheral and central neuron survival" },
    { factor: "GDNF", role: "Glial cell line-derived — dopaminergic neuron protection" },
    { factor: "CNTF", role: "Ciliary neurotrophic factor — motor neuron and glial support" },
    { factor: "IGF-1 (CNS)", role: "Insulin-like GF-1 — neurogenesis and synaptic maturation" },
  ]

  return (
    <div className="space-y-14">
      {/* Cognitive domains */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">Cognitive Framework</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Six Domains of Brain Function Targeted by Research Peptides</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map(({ name, peptide, icon: Icon, desc }, i) => (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-cyan-200 hover:bg-cyan-50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-200 transition-colors">
                <Icon className="w-5 h-5 text-cyan-700" />
              </div>
              <p className="font-bold text-slate-900 text-sm mb-1">{name}</p>
              <span className="inline-block text-xs font-semibold bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full mb-2">{peptide}</span>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Semax vs Selank */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">The Core Stack</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Semax vs Selank: Complementary by Design</h3>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
            <div className="p-4">Property</div>
            <div className="p-4 border-l border-slate-700 text-cyan-400">Semax</div>
            <div className="p-4 border-l border-slate-700 text-sky-400">Selank</div>
          </div>
          {semaxVsSelank.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-xs border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <div className="p-4 font-semibold text-slate-700">{row.prop}</div>
              <div className="p-4 text-slate-600 border-l border-slate-100 leading-relaxed">{row.semax}</div>
              <div className="p-4 text-slate-600 border-l border-slate-100 leading-relaxed">{row.selank}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-5 rounded-2xl bg-cyan-600 text-white">
          <p className="font-bold mb-1">Why the Combination Works</p>
          <p className="text-cyan-100 text-sm leading-relaxed">Semax drives active cognitive enhancement — focus, memory, BDNF. Selank regulates the emotional and arousal state. Together they create a balanced nootropic profile: sharp but calm, focused but not anxious. Available as a pre-combined Selank + Semax product and as the Nova Mind Cycle.</p>
        </div>
      </div>

      {/* Cerebrolysin neurotrophic factors */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">Advanced Neuroprotection</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Cerebrolysin: Neurotrophic Factor Complex</h3>
        <p className="text-slate-500 text-sm mb-6">Cerebrolysin contains multiple low-molecular-weight neuropeptides that mirror endogenous neurotrophic factors — proteins that govern neuron survival, growth, and connectivity.</p>
        <div className="space-y-3">
          {cerebroFactors.map((f, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-cyan-200 hover:bg-cyan-50 transition-colors">
              <span className="font-black text-cyan-600 text-sm w-12 flex-shrink-0">{f.factor}</span>
              <p className="text-sm text-slate-600 leading-relaxed">{f.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-cyan-200 bg-cyan-50">
            <p className="font-bold text-slate-900 mb-1 text-sm">Nova Mind Cycle</p>
            <p className="text-xs text-slate-600 leading-relaxed">Semax + Selank in a structured 10-week cognitive optimization protocol. Best for: focus, anxiety reduction, mood, sleep quality.</p>
          </div>
          <div className="p-5 rounded-2xl border border-cyan-300 bg-cyan-100">
            <p className="font-bold text-slate-900 mb-1 text-sm">Alpha Mind Cycle</p>
            <p className="text-xs text-slate-600 leading-relaxed">Advanced protocol adding Cerebrolysin. Best for: neurodegenerative research, stroke recovery, Alzheimer's pathology, serious cognitive decline.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── IMMUNITY ─────────────────────────────────────────────────────────────────

function ImmunityFeatures() {
  const innateVsAdaptive = [
    {
      system: "Innate Immunity",
      peptide: "LL-37",
      color: "border-green-200 bg-green-50",
      badge: "bg-green-100 text-green-700",
      icon: Shield,
      points: [
        "First line of defense — responds within minutes",
        "LL-37 directly disrupts bacterial membrane integrity",
        "Broad-spectrum: gram+, gram−, fungi, enveloped viruses",
        "Neutralizes bacterial endotoxin (LPS) preventing septic shock",
        "Disrupts antibiotic-resistant biofilms",
      ],
    },
    {
      system: "Adaptive Immunity",
      peptide: "Thymosin Alpha-1 + Thymulin",
      color: "border-emerald-200 bg-emerald-50",
      badge: "bg-emerald-100 text-emerald-700",
      icon: Target,
      points: [
        "Targeted response — requires days to weeks to mount",
        "TA1 promotes T-cell maturation and Th1 differentiation",
        "Upregulates MHC class I/II for enhanced antigen presentation",
        "Stimulates interferon-α/γ and NK cell activation",
        "Thymulin drives thymocyte development and T-cell trafficking",
      ],
    },
  ]

  const ta1Pathway = [
    { step: "TA1 Administered", detail: "Thymosin Alpha-1 binds Toll-like receptors on dendritic cells" },
    { step: "Dendritic Cell Activation", detail: "Upregulates MHC class I/II + costimulatory molecules" },
    { step: "T-Cell Priming", detail: "Naive T-cells differentiate toward Th1 effector phenotype" },
    { step: "Interferon Induction", detail: "IFN-α and IFN-γ secretion increases viral and tumor surveillance" },
    { step: "NK Cell Activation", detail: "Natural killer cells receive activation signal for direct cytotoxicity" },
  ]

  const ll37Spectrum = [
    { target: "Gram+ Bacteria", examples: "S. aureus (including MRSA), Streptococcus", status: "High efficacy" },
    { target: "Gram− Bacteria", examples: "E. coli, P. aeruginosa, K. pneumoniae", status: "High efficacy" },
    { target: "Fungal Pathogens", examples: "C. albicans, C. tropicalis", status: "Moderate efficacy" },
    { target: "Enveloped Viruses", examples: "Influenza, HIV, HSV", status: "Documented activity" },
    { target: "Biofilm Disruption", examples: "All major wound pathogens", status: "Strong evidence" },
  ]

  return (
    <div className="space-y-14">
      {/* Innate vs Adaptive */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Immune System Overview</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Targeting Both Arms of the Immune System</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {innateVsAdaptive.map((arm, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${arm.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-current/20">
                  <arm.icon className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{arm.system}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${arm.badge}`}>{arm.peptide}</span>
                </div>
              </div>
              <div className="space-y-2.5">
                {arm.points.map((pt, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TA1 pathway */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Mechanism Pathway</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">How Thymosin Alpha-1 Activates Immunity</h3>
        <div className="space-y-3">
          {ta1Pathway.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-green-200 hover:bg-green-50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{s.step}</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 p-5 rounded-2xl bg-green-700 text-white">
          <p className="font-bold mb-1">Clinical Context</p>
          <p className="text-green-100 text-sm leading-relaxed">Thymosin Alpha-1 is approved or clinically available in 35+ countries for hepatitis B, hepatitis C, and cancer immunotherapy. It has been studied for sepsis-induced immunoparalysis, HIV, tuberculosis, and as a vaccine adjuvant to improve antibody titers in elderly subjects.</p>
        </div>
      </div>

      {/* LL-37 spectrum */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">LL-37 Antimicrobial Activity</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Broad-Spectrum Antimicrobial Targets</h3>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
            <div className="p-4">Target Type</div>
            <div className="p-4 border-l border-slate-700">Examples</div>
            <div className="p-4 border-l border-slate-700">Research Status</div>
          </div>
          {ll37Spectrum.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-xs border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <div className="p-4 font-bold text-slate-800">{row.target}</div>
              <div className="p-4 text-slate-600 border-l border-slate-100">{row.examples}</div>
              <div className="p-4 border-l border-slate-100">
                <span className="font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">{row.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── LIBIDO ───────────────────────────────────────────────────────────────────

function LibidoFeatures() {
  const pathways = [
    {
      name: "Central Nervous System",
      peptide: "PT-141 (Bremelanotide)",
      icon: Brain,
      color: "border-rose-200 bg-rose-50",
      badge: "bg-rose-100 text-rose-700",
      mechanism: "Activates MC3R and MC4R receptors in the hypothalamus — triggers dopamine release and increases sexual motivation at the neurological level.",
      keyFact: "FDA approved as Vyleesi for HSDD in premenopausal women (2019)",
      differentiator: "Works on desire — not just physical response",
    },
    {
      name: "HPG Axis (Hormonal)",
      peptide: "Kisspeptin-10",
      icon: Activity,
      color: "border-pink-200 bg-pink-50",
      badge: "bg-pink-100 text-pink-700",
      mechanism: "Stimulates hypothalamic GnRH neurons → LH + FSH release from pituitary → testosterone / estrogen production. Restores hormonal drive from the source.",
      keyFact: "Research shows increased LH pulsatility and testosterone in hypogonadal men",
      differentiator: "Addresses hormonal root cause — not downstream symptoms",
    },
    {
      name: "Melanocortin System",
      peptide: "MT-2 (Melanotan II)",
      icon: Sparkles,
      color: "border-red-200 bg-red-50",
      badge: "bg-red-100 text-red-700",
      mechanism: "Activates MC1R (tanning), MC3R/MC4R (sexual arousal), MC4R (appetite suppression). Also activates spinal cord mechanism promoting erection independent of brain stimulation.",
      keyFact: "Multi-target: libido + UV-independent skin tanning + appetite suppression",
      differentiator: "Only peptide combining libido + photoprotection research",
    },
  ]

  const ptPathway = [
    { step: "PT-141 Administered", detail: "Subcutaneous injection 45–90 min before target window" },
    { step: "MC4R Binding in Hypothalamus", detail: "Paraventricular nucleus activation — the key sexual arousal center" },
    { step: "Dopamine Release", detail: "Reward pathway activation drives sexual motivation and desire" },
    { step: "Arousal Enhancement", detail: "Both subjective desire and physiological arousal responses increase" },
  ]

  const cycles = [
    {
      name: "Eros Stamina Cycle",
      focus: "Complete sexual health optimization",
      includes: ["PT-141 for libido activation", "Vascular support compounds", "Sleep quality optimization", "Hormone balance support"],
      color: "border-rose-200 bg-rose-50",
    },
    {
      name: "Kiss Peptides Cycle",
      focus: "HPG axis & hormonal restoration",
      includes: ["Kisspeptin-10 for GnRH stimulation", "Natural testosterone upregulation", "Fertility hormone support", "Reproductive hormone balance for him & her"],
      color: "border-pink-200 bg-pink-50",
    },
  ]

  return (
    <div className="space-y-14">
      {/* 3 pathways */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2">Mechanism Science</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Three Distinct Sexual Health Pathways</h3>
        <p className="text-slate-500 text-sm mb-7">Unlike conventional approaches that target only blood flow, research peptides act on three separate biological pathways — enabling researchers to study different dimensions of sexual health physiology.</p>
        <div className="space-y-5">
          {pathways.map((p, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${p.color}`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-current/20 flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-rose-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <p className="font-bold text-slate-900">{p.name}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badge}`}>{p.peptide}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.mechanism}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 bg-white/70 rounded-xl p-3">
                      <Sparkles className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-slate-700">{p.keyFact}</p>
                    </div>
                    <div className="flex items-start gap-2 bg-white/70 rounded-xl p-3">
                      <Target className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-slate-700">{p.differentiator}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PT-141 step pathway */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2">PT-141 Pathway</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">How Bremelanotide Works — Step by Step</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ptPathway.map((s, i) => (
            <div key={i} className="relative rounded-2xl border-2 border-rose-100 bg-white p-5">
              <div className="absolute top-3 right-3 text-3xl font-black text-rose-50 select-none">0{i + 1}</div>
              <div className="w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white font-black text-xs mb-3">
                {i + 1}
              </div>
              <p className="font-bold text-slate-900 text-sm leading-snug mb-1.5">{s.step}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cycle comparison */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-2">Research Protocols</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Pre-Built Sexual Health Cycles</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {cycles.map((c, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${c.color}`}>
              <p className="font-bold text-slate-900 text-lg mb-1">{c.name}</p>
              <p className="text-sm text-slate-500 mb-4">{c.focus}</p>
              <div className="space-y-2">
                {c.includes.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SKIN / TISSUE / BONE ─────────────────────────────────────────────────────

function SkinTissueBoneFeatures() {
  const ghkStats = [
    { value: "4,000+", label: "Genes modulated by GHK-Cu" },
    { value: "60%", label: "Decline in blood GHK-Cu from age 20–60" },
    { value: "200 ng/mL", label: "Young adult plasma GHK-Cu level" },
    { value: "~80 ng/mL", label: "Elderly plasma GHK-Cu level" },
  ]

  const collagenTimeline = [
    { week: "Week 1–2", event: "GHK-Cu activates collagen I, III, IV gene expression; BPC-157 initiates angiogenesis at wound sites" },
    { week: "Week 2–4", event: "Fibroblast proliferation increases; new collagen fibers deposited in wound matrix" },
    { week: "Week 4–8", event: "Elastin and glycosaminoglycan synthesis increases; skin density begins improving" },
    { week: "Week 8–12", event: "Collagen cross-linking and matrix remodeling produces measurable improvements in skin elasticity" },
    { week: "Week 12+", event: "Continued remodeling; tendon tensile strength restoration; measurable reduction in fine lines in skin research" },
  ]

  const applications = [
    { area: "Anti-Aging Skin", peptide: "GHK-Cu", icon: Sparkles, desc: "Reverses thinning, restores elasticity, reduces fine lines through gene expression reprogramming" },
    { area: "Wound Healing", peptide: "BPC-157 + LL-37", icon: Zap, desc: "Accelerates re-epithelialization, reduces scarring, clears biofilm in chronic wounds" },
    { area: "Hair Growth", peptide: "GHK-Cu", icon: Leaf, desc: "Increases hair follicle size and density; upregulates follicle growth factor signaling" },
    { area: "Tendon & Ligament", peptide: "BPC-157 + TB-500", icon: Activity, desc: "Collagen type I restoration, tensile strength recovery, reduced adhesion formation" },
    { area: "Bone Healing", peptide: "BPC-157 + MK-677", icon: Shield, desc: "Accelerated fracture callus formation; MK-677 increases bone mineral density over 12 months" },
    { area: "UV Protection", peptide: "MT-2", icon: Eye, desc: "Stimulates melanin synthesis independent of UV exposure, providing natural photoprotection" },
  ]

  const ghkGenes = [
    { category: "Collagen Synthesis", genes: "COL1A1, COL1A2, COL3A1, COL4A1", direction: "↑ Upregulated" },
    { category: "Antioxidant Defense", genes: "SOD1, SOD2, catalase, GPX4", direction: "↑ Upregulated" },
    { category: "Anti-Inflammatory", genes: "TNF-α, IL-1β, IL-6, NF-κB", direction: "↓ Downregulated" },
    { category: "Nerve & Skin", genes: "NGF, BDNF, VEGF, elastin", direction: "↑ Upregulated" },
    { category: "Cancer-Suppressing", genes: "Multiple oncogenes", direction: "↓ Downregulated" },
  ]

  return (
    <div className="space-y-14">
      {/* GHK-Cu stats */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">GHK-Cu: Master Regulator</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Why GHK-Cu is the Most Broadly Active Skin Peptide</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ghkStats.map((s, i) => (
            <div key={i} className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 text-center">
              <p className="text-2xl font-black text-amber-700">{s.value}</p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
            <div className="p-4">Gene Category</div>
            <div className="p-4 border-l border-slate-700">Key Genes</div>
            <div className="p-4 border-l border-slate-700">Direction</div>
          </div>
          {ghkGenes.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-xs border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <div className="p-4 font-bold text-slate-800">{row.category}</div>
              <div className="p-4 text-slate-500 border-l border-slate-100 font-mono">{row.genes}</div>
              <div className="p-4 border-l border-slate-100">
                <span className={`font-bold text-xs px-2 py-0.5 rounded-full ${row.direction.startsWith("↑") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {row.direction}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collagen timeline */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Structural Renewal Timeline</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Collagen Synthesis & Remodeling Over Time</h3>
        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-amber-200" />
          <div className="space-y-4">
            {collagenTimeline.map((t, i) => (
              <div key={i} className="flex gap-6 pl-12 relative">
                <div className="absolute left-3 top-3 w-5 h-5 rounded-full bg-amber-500 border-2 border-white shadow-sm flex-shrink-0" />
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex-1">
                  <p className="font-bold text-amber-700 text-xs mb-1">{t.week}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application grid */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Research Applications</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Target Applications by Tissue Type</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map(({ area, peptide, icon: Icon, desc }, i) => (
            <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-amber-200 hover:bg-amber-50 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-colors">
                <Icon className="w-5 h-5 text-amber-700" />
              </div>
              <p className="font-bold text-slate-900 text-sm mb-1">{area}</p>
              <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full mb-2">{peptide}</span>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── PEPTIDES CYCLES ──────────────────────────────────────────────────────────

function PeptidesCyclesFeatures() {
  const cyclesByGoal = [
    {
      goal: "Tissue Recovery & Performance",
      cycle: "Wolverine Cycle",
      icon: Zap,
      duration: "Multi-week",
      compounds: ["BPC-157", "TB-500"],
      desc: "The gold-standard injury recovery protocol. Addresses all three phases of healing with complementary mechanisms.",
      color: "border-green-200 bg-green-50",
      badge: "bg-green-100 text-green-700",
    },
    {
      goal: "Lean Muscle Building",
      cycle: "Stack Up Cycle",
      icon: TrendingUp,
      duration: "5 or 10 weeks",
      compounds: ["GH Secretagogues", "IGF-1 Support", "Recovery"],
      desc: "GH axis optimization + recovery support for comprehensive muscle research.",
      color: "border-blue-200 bg-blue-50",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      goal: "Cognitive Optimization",
      cycle: "Nova Mind Cycle",
      icon: Brain,
      duration: "10 weeks",
      compounds: ["Semax", "Selank"],
      desc: "Balanced nootropic protocol for focus, memory, anxiety reduction, and sleep quality.",
      color: "border-cyan-200 bg-cyan-50",
      badge: "bg-cyan-100 text-cyan-700",
    },
    {
      goal: "Advanced Neuroprotection",
      cycle: "Alpha Mind Cycle",
      icon: Microscope,
      duration: "10 weeks",
      compounds: ["Semax", "Selank", "Cerebrolysin"],
      desc: "For neurodegenerative research, stroke recovery, and serious cognitive decline models.",
      color: "border-sky-200 bg-sky-50",
      badge: "bg-sky-100 text-sky-700",
    },
    {
      goal: "Immune Resilience",
      cycle: "T-Force Immunity Plus",
      icon: Shield,
      duration: "Multi-week",
      compounds: ["Thymosin Alpha-1", "Thymulin"],
      desc: "Dual thymic peptide protocol targeting both T-cell maturation and inflammatory regulation.",
      color: "border-emerald-200 bg-emerald-50",
      badge: "bg-emerald-100 text-emerald-700",
    },
    {
      goal: "Skin & Anti-Aging",
      cycle: "Glow Plus Cycle",
      icon: Sparkles,
      duration: "Multi-week",
      compounds: ["GHK-Cu", "Longevity peptides"],
      desc: "Collagen restoration + cellular longevity combined into a full-spectrum rejuvenation protocol.",
      color: "border-amber-200 bg-amber-50",
      badge: "bg-amber-100 text-amber-700",
    },
    {
      goal: "Fat Loss & Metabolism",
      cycle: "Prime Metabolic / Slim",
      icon: Flame,
      duration: "6 or 12 weeks",
      compounds: ["GH axis", "AMPK activators", "Lipolytic agents"],
      desc: "Multi-mechanism metabolic optimization for body composition and sustained fat loss research.",
      color: "border-orange-200 bg-orange-50",
      badge: "bg-orange-100 text-orange-700",
    },
    {
      goal: "Sexual Health",
      cycle: "Eros Stamina / Kiss",
      icon: Heart,
      duration: "Multi-week",
      compounds: ["PT-141", "Kisspeptin-10"],
      desc: "CNS libido activation and HPG axis hormonal restoration for comprehensive sexual health research.",
      color: "border-rose-200 bg-rose-50",
      badge: "bg-rose-100 text-rose-700",
    },
  ]

  const synergyData = [
    { example: "CJC-1295 + Ipamorelin", ratio: "4–6×", vs: "vs either alone", note: "Synergistic GH pulse amplitude + frequency" },
    { example: "BPC-157 + TB-500", ratio: "Superior", vs: "vs either alone", note: "Complementary angiogenesis + cell migration" },
    { example: "Semax + Selank", ratio: "Balanced", vs: "vs Semax alone", note: "Cognitive drive without anxious activation" },
    { example: "TA1 + Thymulin", ratio: "Dual coverage", vs: "vs single thymic peptide", note: "T-cell maturation + inflammatory regulation" },
  ]

  return (
    <div className="space-y-14">
      {/* Why cycles */}
      <div className="rounded-2xl bg-gradient-to-br from-violet-900 to-purple-900 p-8 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <p className="text-xs font-bold uppercase tracking-widest text-violet-300 mb-3">The Science of Combinations</p>
        <h3 className="text-2xl font-bold mb-3">Why Synergistic Cycles Outperform Individual Peptides</h3>
        <p className="text-violet-200 text-sm max-w-2xl mb-8 leading-relaxed">Well-designed combinations where each compound addresses a distinct but complementary mechanism produce outcomes that single agents cannot achieve. The synergy is often multiplicative — not merely additive.</p>
        <div className="space-y-3">
          {synergyData.map((s, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 flex items-center gap-4 border border-white/10">
              <div className="flex-shrink-0 w-24 text-center">
                <p className="text-lg font-black">{s.ratio}</p>
                <p className="text-xs text-violet-300">{s.vs}</p>
              </div>
              <div className="flex-1 border-l border-white/20 pl-4">
                <p className="font-bold text-sm">{s.example}</p>
                <p className="text-xs text-violet-200 mt-0.5">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cycle goal grid */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2">Available Cycles</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Find the Right Cycle for Your Research Goal</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {cyclesByGoal.map((c, i) => (
            <div key={i} className={`rounded-2xl border-2 p-5 ${c.color}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-current/20 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-4 h-4 text-violet-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-0.5">{c.goal}</p>
                  <p className="font-bold text-slate-900">{c.cycle}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${c.badge}`}>{c.duration}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.compounds.map((comp, j) => (
                  <span key={j} className="text-xs bg-white/70 border border-white text-slate-700 font-medium px-2 py-0.5 rounded-full">{comp}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── SUPPLIES ─────────────────────────────────────────────────────────────────

function SuppliesFeatures() {
  const reconSteps = [
    {
      step: "1",
      title: "Gather Supplies",
      detail: "Collect your peptide vial, bacteriostatic water, reconstitution syringe (3mL 21G), vial vent tip, and alcohol pads.",
      icon: Package2,
    },
    {
      step: "2",
      title: "Disinfect Vial Tops",
      detail: "Wipe both the peptide vial rubber septum and the BAC water vial top with a 70% isopropyl alcohol pad. Allow to air dry completely.",
      icon: Droplets,
    },
    {
      step: "3",
      title: "Insert Vial Vent",
      detail: "Insert the 27G vent tip into the peptide vial to prevent vacuum buildup during BAC water addition.",
      icon: Zap,
    },
    {
      step: "4",
      title: "Draw Bacteriostatic Water",
      detail: "Using the reconstitution syringe, draw the desired volume of BAC water. Typically 1–2mL for standard peptide vials.",
      icon: Syringe,
    },
    {
      step: "5",
      title: "Add Water Slowly",
      detail: "Insert the syringe into the peptide vial and inject BAC water slowly down the side of the vial — do not inject directly onto the powder cake.",
      icon: Droplets,
    },
    {
      step: "6",
      title: "Gentle Swirl — Do Not Shake",
      detail: "Gently swirl the vial until the powder is fully dissolved. Never shake — agitation can denature peptide structure.",
      icon: AlertTriangle,
    },
    {
      step: "7",
      title: "Label & Refrigerate",
      detail: "Label the vial with date of reconstitution. Store at 2–8°C (refrigerated). Most peptides stable for 4–6 weeks when refrigerated.",
      icon: Clock,
    },
  ]

  const syringeGuide = [
    {
      type: "Injection Syringe",
      spec: "1mL · 31G · 8mm needle",
      use: "Subcutaneous peptide administration",
      why: "Ultra-thin 31G minimizes discomfort. 8mm for subcutaneous fat layer. 1mL for precise small-volume dosing.",
      color: "border-slate-200 bg-slate-50",
    },
    {
      type: "Reconstitution Syringe",
      spec: "3mL · 21G · 1 inch needle",
      use: "Adding BAC water to peptide vials",
      why: "Wide 21G bore allows fast fluid transfer. 3mL handles full reconstitution volumes. Not for injection.",
      color: "border-slate-200 bg-slate-50",
    },
  ]

  const safetyChecklist = [
    "Confirm bacteriostatic water is within 28 days of first use",
    "Always disinfect vial tops before needle entry",
    "Let alcohol dry completely before inserting needle",
    "Never inject reconstituted peptide if the solution is cloudy or has visible particles",
    "Use a fresh injection syringe for each administration",
    "Discard reconstitution syringes after use — do not reuse for injection",
    "Store reconstituted peptides refrigerated at 2–8°C and away from light",
  ]

  return (
    <div className="space-y-14">
      {/* Step-by-step reconstitution */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Preparation Protocol</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Peptide Reconstitution: Step-by-Step Guide</h3>
        <div className="space-y-3">
          {reconSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 transition-colors">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${i === 5 ? "bg-amber-100" : "bg-slate-900"}`}>
                <s.icon className={`w-5 h-5 ${i === 5 ? "text-amber-600" : "text-white"}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-black text-slate-400">STEP {s.step}</span>
                  <p className="font-bold text-slate-900 text-sm">{s.title}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Syringe guide */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">Equipment Guide</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-7">Choosing the Right Syringe</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {syringeGuide.map((s, i) => (
            <div key={i} className={`rounded-2xl border-2 p-6 ${s.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{s.type}</p>
                  <p className="text-xs font-mono text-slate-500">{s.spec}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3 border border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Used For</p>
                  <p className="text-sm text-slate-800">{s.use}</p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Why This Spec</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety checklist + BAC water info */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">Safety Checklist</p>
          <h3 className="text-lg font-bold text-slate-900 mb-5">Pre-Administration Checklist</h3>
          <div className="space-y-2.5">
            {safetyChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">Bacteriostatic Water</p>
          <h3 className="text-lg font-bold text-slate-900 mb-5">Why BAC Water — Not Plain Sterile Water</h3>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 text-white">
              <p className="font-bold mb-2">0.9% Benzyl Alcohol</p>
              <p className="text-slate-300 text-sm leading-relaxed">Prevents bacterial growth after vial entry. Plain sterile water must be used within a single session once opened — BAC water allows multiple uses over 28 days.</p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="font-bold text-slate-900 mb-2">Stability Benefit</p>
              <p className="text-slate-600 text-sm leading-relaxed">The slight acidity from benzyl alcohol (pH ~5.0) improves peptide stability for most research compounds. Refrigerated reconstituted peptides typically remain stable for 4–6 weeks.</p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <p className="font-bold text-slate-900 mb-2">Starter Kit Contents</p>
              <p className="text-slate-600 text-xs leading-relaxed">2× BAC Water (10mL) · 30× Injection Syringes · 5× Reconstitution Syringes · 5× Vent Tips · 100× Alcohol Pads — everything needed to begin a research protocol.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── COMPONENT MAP ────────────────────────────────────────────────────────────

const FEATURES_MAP: Record<string, () => React.JSX.Element> = {
  "muscle-growth": MuscleGrowthFeatures,
  "recovery-repair": RecoveryRepairFeatures,
  "anti-aging": AntiAgingFeatures,
  "weight-loss": WeightLossFeatures,
  "brain-nerve": BrainNerveFeatures,
  immunity: ImmunityFeatures,
  libido: LibidoFeatures,
  "skin-tissue-bone": SkinTissueBoneFeatures,
  "peptides-cycles": PeptidesCyclesFeatures,
  supplies: SuppliesFeatures,
}

export function CategoryFeatures({ slug }: { slug: string }) {
  const FeatureComponent = FEATURES_MAP[slug]
  if (!FeatureComponent) return null
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <FeatureComponent />
      </div>
    </section>
  )
}
