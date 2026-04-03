import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  FlaskConical,
  Zap,
  Brain,
  Shield,
  TrendingUp,
  Dna,
  Activity,
  Microscope,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  BarChart3,
  Layers,
  Cpu,
} from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { AFFILIATE_URL } from "@/lib/peptide-data"

export const metadata: Metadata = {
  title: "The Science of Peptides — Mechanisms, Receptors & Research Evidence",
  description:
    "How peptides work at the molecular level: receptor binding, signal transduction, gene expression, and downstream biological effects. From GPCR pharmacology to telomerase activation — complete mechanistic science.",
  alternates: { canonical: "https://www.peptidesmaxxing.com/science" },
  openGraph: {
    title: "Peptide Science — Mechanisms, Receptors & Research Evidence",
    description:
      "How peptides work: GPCR binding, GH axis regulation, tissue repair mechanisms, metabolic signaling, and cognitive neuroplasticity. Science-first breakdown of research peptide pharmacology.",
    url: "https://www.peptidesmaxxing.com/science",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Science of Peptides — Mechanism Deep-Dives",
    description:
      "From GPCR pharmacology to telomerase activation — how BPC-157, Ipamorelin, Tirzepatide, Epithalon, GHK-Cu, and Semax work at the molecular level.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.peptidesmaxxing.com/science",
  url: "https://www.peptidesmaxxing.com/science",
  headline: "The Science of Research Peptides",
  description: "Comprehensive guide to peptide mechanisms: GPCR pharmacology, GH axis regulation, tissue repair, metabolic signaling, and cognitive neuroplasticity.",
  author: { "@type": "Organization", name: "PeptidesMaxxing" },
  publisher: {
    "@type": "Organization",
    name: "PeptidesMaxxing",
    url: "https://www.peptidesmaxxing.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptidesmaxxing.com" },
      { "@type": "ListItem", position: 2, name: "Peptide Science", item: "https://www.peptidesmaxxing.com/science" },
    ],
  },
}

const PEPTIDE_FAMILIES = [
  {
    id: "ghrp-ghrh",
    family: "Growth Hormone Secretagogues",
    subtitle: "GHRPs, GHRHs & Ghrelin Mimetics",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    accent: "#2563eb",
    overview: `Growth hormone secretagogues are peptides that stimulate the pituitary gland's somatotroph cells to release growth hormone (GH). They split into two pharmacological classes: GHRH analogs (which mimic endogenous growth hormone-releasing hormone) and GHRPs (growth hormone-releasing peptides, which mimic ghrelin).`,
    mechanism: `GHRPs bind the growth hormone secretagogue receptor 1a (GHSR-1a), a G protein-coupled receptor expressed primarily on pituitary somatotrophs. Activation of GHSR-1a triggers phospholipase C signaling, leading to intracellular calcium release and GH exocytosis. GHRH analogs (like CJC-1295 and Sermorelin) bind the GHRH receptor (GHRHR), activating adenylyl cyclase via Gs protein coupling — increasing cyclic AMP and triggering separate GH release.

The reason combining a GHRP with a GHRH analog produces synergistically larger GH pulses is that they act on two distinct receptor systems. The GHRP provides a permissive "pulse trigger" signal while GHRH amplifies the amplitude of each pulse via the cAMP pathway. The result is a GH release pulse 3–5× larger than either compound alone.`,
    keyCompounds: [
      { name: "Ipamorelin", note: "Selective GHSR-1a agonist — minimal cortisol/prolactin", slug: "ipamorelin" },
      { name: "CJC-1295 (DAC)", note: "Long-acting GHRH analog — 6–8 day half-life", slug: "cjc-1295-with-dac" },
      { name: "Sermorelin", note: "GHRH(1-29) fragment — physiologically pulsatile", slug: "sermorelin-acetate" },
      { name: "GHRP-2", note: "High-amplitude GHRP — some cortisol bleed", slug: "ghrp-2-acetate" },
      { name: "MK-677", note: "Oral ghrelin mimetic — non-peptide GHSR agonist", slug: "mk-677-oral-capsules" },
    ],
    keyPoints: [
      "GHRPs and GHRH analogs work on distinct receptor systems — combination is synergistic",
      "GH release is blocked by somatostatin (SST) — timing injections to coincide with natural SST troughs improves pulse amplitude",
      "Pre-sleep injection exploits the largest natural GH pulse, which occurs during slow-wave sleep",
      "All GH stimulation downstream depends on GH binding the GH receptor (GHR) in the liver to generate IGF-1",
      "Chronic continuous GH stimulation can lead to receptor desensitization — cycling prevents this",
    ],
  },
  {
    id: "tissue-repair",
    family: "Tissue Repair Peptides",
    subtitle: "BPC-157, TB-500 & Healing Cascade Modulators",
    icon: Activity,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    accent: "#059669",
    overview: `Tissue repair peptides accelerate the biological processes of wound healing, angiogenesis, tendon remodeling, and cellular repair. Unlike anti-inflammatory drugs that merely suppress the immune response, repair peptides actively upregulate the body's endogenous regenerative machinery — angiogenesis, growth factor expression, and extracellular matrix remodeling.`,
    mechanism: `BPC-157 (Body Protection Compound-157) is a 15-amino acid synthetic peptide derived from a protective protein found in gastric juice. Its primary mechanism involves upregulation of VEGF (Vascular Endothelial Growth Factor) — the master regulator of new blood vessel formation — and EGR-1 (Early Growth Response Protein 1), which drives transcription of tendon-related growth factors including PDGF and FGF.

BPC-157 also modulates nitric oxide synthesis through eNOS upregulation, improving microvascular blood flow to damaged tissue. In the gut, it restores tight junction integrity by upregulating ZO-1 and occludin — the proteins that physically seal the intestinal barrier.

TB-500's mechanism is fundamentally different. As a synthetic fragment of Thymosin Beta-4, it acts by binding actin monomers (G-actin) and preventing their polymerization into F-actin filaments. This creates a pool of free monomeric actin that becomes available for directed cell migration. When injury occurs, cells with high TB-500 activity migrate more effectively toward the wound site, dramatically accelerating the cellular recruitment phase of healing.`,
    keyCompounds: [
      { name: "BPC-157", note: "VEGF + EGR-1 + eNOS — localized repair", slug: "bpc-157" },
      { name: "TB-500", note: "Thymosin β4 fragment — actin/cell migration", slug: "tb-500" },
      { name: "GHK-Cu", note: "Copper tripeptide — collagen synthesis + gene regulation", slug: "ghk-cu" },
      { name: "IGF-1 LR3", note: "Long-acting IGF-1 analog — muscle satellite cell activation", slug: "igf-1lr3" },
    ],
    keyPoints: [
      "BPC-157 works best near the injury site for tendon/ligament repair — local injection preferred",
      "TB-500 distributes systemically regardless of injection site — remote injection is equally effective",
      "VEGF upregulation by BPC-157 creates new capillary networks, restoring nutrient/oxygen delivery to damaged tissue",
      "GHK-Cu upregulates over 4,000 genes in skin and connective tissue, not just collagen genes",
      "Combining BPC-157 + TB-500 provides complementary mechanisms: growth factor signaling (BPC) + cell migration (TB)",
    ],
  },
  {
    id: "incretin-metabolic",
    family: "Incretin & Metabolic Peptides",
    subtitle: "GLP-1 Class, GIP, and Metabolic Regulators",
    icon: BarChart3,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
    accent: "#ea580c",
    overview: `Incretin peptides mimic or modulate hormones secreted by the gut in response to food intake. The two primary incretin hormones — GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) — regulate insulin secretion, appetite, gastric emptying, and energy homeostasis. Research peptides in this class represent the most clinically validated peptide category, with Tirzepatide and similar compounds producing mean weight loss of 20%+ in Phase 3 trials.`,
    mechanism: `GLP-1 receptor agonists bind the GLP-1R receptor, a class B GPCR (secretin family). Activation triggers adenylyl cyclase via Gs coupling, increasing intracellular cAMP. In the pancreatic beta cell, this triggers insulin secretion in a glucose-dependent manner — a critical safety feature that prevents hypoglycemia. In the brain, GLP-1R activation in the hypothalamus (particularly the arcuate nucleus and nucleus tractus solitarius) suppresses appetite by reducing NPY/AgRP neuron activity and increasing POMC neuron firing.

Tirzepatide (GIP/GLP-1 dual agonist) adds GIP receptor agonism to this profile. While GIP was historically considered "diabetogenic" in obese states, GIP receptor agonism combined with GLP-1 agonism produces synergistic weight loss exceeding either alone. The mechanism appears to involve enhanced adipose tissue GIP receptor sensitivity when GLP-1 receptors are co-activated.

Retatrutide extends this further with glucagon receptor (GCGR) agonism — the "third target." Glucagon receptor activation in the liver drives hepatic glucose output and accelerates lipolysis (fat cell breakdown). Combined GCGR + GLP-1R + GIPR activation creates a broader metabolic perturbation that explains Retatrutide's superior mean weight loss vs Tirzepatide in Phase 2 head-to-head comparisons.`,
    keyCompounds: [
      { name: "Tirzepatide", note: "GIP + GLP-1 dual agonist — 20–22% weight loss", slug: "tirzepatide" },
      { name: "Retatrutide", note: "GIP + GLP-1 + Glucagon triple agonist", slug: "retatrutide" },
      { name: "Mazdutide", note: "GLP-1 + Glucagon dual agonist", slug: "mazdutide" },
      { name: "AOD9604", note: "HGH(176–191) fragment — lipolysis via β3-AR", slug: "aod9604" },
      { name: "Cagrilintide", note: "Long-acting amylin analog — satiety + GLP-1 synergy", slug: "cagrilintide" },
    ],
    keyPoints: [
      "GLP-1 agonists suppress appetite by acting on hypothalamic NPY/AgRP neurons — not through willpower",
      "Glucose-dependent insulin secretion means GLP-1 agonists don't cause hypoglycemia in normal glucose conditions",
      "Gastric emptying slows significantly — this contributes to both the satiety effect and GI side effects (nausea)",
      "AOD9604 acts on beta-3 adrenergic receptors in adipocytes directly — different from incretin peptides, additive effect",
      "Retatrutide's glucagon arm drives hepatic fat clearance — particularly useful for fatty liver research",
    ],
  },
  {
    id: "longevity-telomere",
    family: "Longevity & Anti-Aging Peptides",
    subtitle: "Telomere Biology, Mitochondrial Function & Cellular Aging",
    icon: Dna,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    accent: "#7c3aed",
    overview: `Anti-aging peptides target multiple hallmarks of aging simultaneously: telomere attrition, mitochondrial dysfunction, cellular senescence, epigenetic alterations, and altered intercellular communication. Unlike single-target interventions, peptide-based longevity research addresses the biological mechanisms that drive aging at the cellular level — making them uniquely suited for combination longevity protocols.`,
    mechanism: `Epithalon (Epitalon) is a tetrapeptide (Ala-Glu-Asp-Gly) developed by the St. Petersburg Institute of Bioregulation. Its primary mechanism is the stimulation of telomerase (TERT — telomerase reverse transcriptase), the enzyme responsible for extending telomere length. In the normal course of cellular division, telomeres shorten with each replication cycle — a fundamental driver of replicative senescence. Epithalon counters this by upregulating TERT expression, slowing the telomere erosion rate.

Epithalon also acts on the pineal gland as a bioregulator, normalizing melatonin secretion and circadian rhythm signaling. Dysregulated melatonin and circadian biology are independently associated with accelerated aging, cancer risk, and metabolic deterioration.

MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA type-c) is a remarkable compound — it is encoded not in the nuclear genome but in the mitochondrial DNA itself. MOTS-c peptide is released by mitochondria under metabolic stress and acts as a signal to upregulate AMPK (AMP-activated protein kinase) — the central cellular energy sensor. AMPK activation triggers mitophagy (mitochondrial quality control), glucose uptake, fatty acid oxidation, and inhibition of mTORC1, which is associated with aging. MOTS-c essentially communicates mitochondrial health status to the rest of the cell and coordinates the adaptive response.`,
    keyCompounds: [
      { name: "Epithalon", note: "Telomerase activator + pineal bioregulator", slug: "epithalon" },
      { name: "MOTS-c", note: "Mitochondrial peptide — AMPK + mitophagy", slug: "mots-c" },
      { name: "Thymosin Alpha-1", note: "Thymic peptide — NK cell + T-cell immune function", slug: "thymosin-alpha-1" },
      { name: "GHK-Cu", note: "Gene expression modulator — 4,000+ genes", slug: "ghk-cu" },
      { name: "5-Amino-1MQ", note: "NNMT inhibitor — adipogenesis + SAM cycle", slug: "5-amino-1mq" },
    ],
    keyPoints: [
      "Telomere shortening is a measurable biomarker of biological aging — Epithalon is the most-studied telomerase activator",
      "MOTS-c is one of only a handful of known mitochondrial-encoded peptides (mitokines)",
      "AMPK and mTOR are reciprocally regulated — AMPK inhibition of mTORC1 is one of the best-validated longevity mechanisms",
      "Thymosin Alpha-1 addresses immune senescence — the progressive deterioration of T-cell diversity with aging",
      "GHK-Cu's gene expression panel activates genes associated with proteasome function and DNA repair — directly targeting epigenetic aging",
    ],
  },
  {
    id: "cognitive-neuro",
    family: "Cognitive & Neuropeptides",
    subtitle: "BDNF Upregulation, GABAergic Modulation & Nootropics",
    icon: Brain,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
    accent: "#7c3aed",
    overview: `Cognitive-enhancing peptides modulate neuroplasticity, neurotransmitter systems, and cerebral blood flow through mechanisms that diverge fundamentally from classical stimulants. Rather than forcing neurotransmitter release (amphetamine mechanism) or blocking reuptake (cocaine/SSRI mechanism), these peptides upregulate the brain's endogenous neuroplasticity machinery — making them categorically different in their safety profile and mechanism of action.`,
    mechanism: `Semax is a synthetic heptapeptide analog of ACTH(4-10) — the melanocortin receptor-binding domain of adrenocorticotropic hormone — without the adrenal steroid-releasing activity. Semax's key mechanism is upregulation of BDNF (Brain-Derived Neurotrophic Factor), the primary growth factor governing neuronal survival, synaptic plasticity, and long-term potentiation. BDNF activates TrkB receptors on neurons, triggering MAPK/ERK and PI3K/AKT signaling cascades that promote dendritic growth, spine density, and synaptic strength. In essence, Semax makes neurons structurally more capable of forming and maintaining memories.

Selank is a synthetic analog of tuftsin (a naturally occurring immune tetrapeptide). Unlike anxiolytics that directly potentiate GABA-A receptors (benzodiazepines), Selank modulates the GABAergic system indirectly — normalizing baseline GABA signaling without creating dependency or tolerance. Selank also upregulates enkephalin metabolism and modulates serotonergic and dopaminergic tone, contributing to its unique "anxiolytic without sedation" profile reported in clinical research.

DSIP (Delta Sleep-Inducing Peptide) is a hypothalamic neuropeptide that does not act as a sedative. It does not bind GABA-A or histamine receptors. Instead, it entrains circadian delta wave (slow-wave) activity by modulating the suprachiasmatic nucleus circadian pacemaker, enhancing the quality of the deep sleep phase where GH secretion, memory consolidation, and cellular repair are maximized.`,
    keyCompounds: [
      { name: "Semax", note: "ACTH analog — BDNF + NGF upregulation", slug: "semax" },
      { name: "Selank", note: "Tuftsin analog — GABAergic + anxiolytic", slug: "selank" },
      { name: "DSIP", note: "Delta sleep-inducing peptide — circadian entrainment", slug: "dsip-delta-sleep-inducing-peptide" },
      { name: "Cerebrolysin", note: "Neuropeptide mixture — multiple neurotrophic factors", slug: "cerebrolysin" },
    ],
    keyPoints: [
      "BDNF is to neurons what IGF-1 is to muscle — the primary growth and plasticity signal",
      "Semax increases BDNF 2–4× in rodent models — concentrations sufficient for measurable neuroplastic effects",
      "Selank's anxiolytic effect without sedation is explained by indirect GABAergic modulation vs direct receptor allosteric modulation",
      "Intranasal delivery is the preferred route for both Semax and Selank — olfactory mucosa provides direct CNS access",
      "These peptides are extensively studied in Russian clinical research — dozens of human trials, not merely animal data",
    ],
  },
  {
    id: "melanocortin-sex",
    family: "Melanocortin & Libido Peptides",
    subtitle: "MC1R, MC3R, MC4R Receptor Pharmacology",
    icon: Zap,
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-100",
    accent: "#e11d48",
    overview: `Melanocortin peptides act on the melanocortin receptor family (MC1R through MC5R), a group of GPCRs with diverse roles in pigmentation, sexual function, appetite, inflammation, and energy regulation. Research in this category spans from tanning and photoprotection to sexual arousal and libido, all mediated through the same fundamental receptor system.`,
    mechanism: `PT-141 (Bremelanotide) is a cyclic analog of alpha-MSH (alpha-melanocyte stimulating hormone). Unlike PDE5 inhibitors (sildenafil/tadalafil) that work peripherally by increasing penile blood flow via NO-cGMP signaling, PT-141 acts centrally — it binds MC4R receptors in the hypothalamus and brainstem, directly modulating the CNS circuits controlling sexual arousal and motivation. This is why it produces desire and arousal rather than merely mechanical erection — and why it works for both male and female sexual dysfunction research.

Melanotan II (MT-II) is a non-selective melanocortin agonist — it acts on MC1R, MC3R, and MC4R simultaneously. MC1R activation in melanocytes triggers melanogenesis, the production of eumelanin (the brown/black pigment) via the cAMP/PKA/MITF pathway. MC3R and MC4R activation produces the systemic effects: appetite suppression (MC4R hypothalamic signaling) and arousal (MC4R limbic signaling). The "tan without sun" effect is due to MC1R-mediated melanin production independent of UV radiation.`,
    keyCompounds: [
      { name: "PT-141 (Bremelanotide)", note: "MC4R agonist — central sexual arousal", slug: "pt-141-bremelanotide" },
      { name: "Melanotan II", note: "MC1R/MC3R/MC4R — melanogenesis + arousal + appetite", slug: "mt-2-melanotan-2-acetate" },
      { name: "Kisspeptin-10", note: "KISS1R agonist — GnRH + LH + testosterone axis", slug: "kisspeptin-10" },
    ],
    keyPoints: [
      "PT-141 acts centrally on hypothalamic MC4R — produces desire and arousal, not just mechanical effect",
      "MC4R is expressed in the arcuate nucleus (appetite) and limbic system (motivation/arousal) — explains dual effects of MT-II",
      "Kisspeptin-10 operates upstream of GnRH, making it the master regulator of the hypothalamic-pituitary-gonadal (HPG) axis",
      "Melanogenesis via MT-II is UV-independent — eumelanin production occurs from MC1R stimulation alone",
      "Nausea is a common transient side effect of melanocortin peptides — due to MC3R/MC4R activation in the area postrema",
    ],
  },
]

const BIOAVAILABILITY_TABLE = [
  { route: "Subcutaneous (SC)", bioavailability: "~85–100%", onset: "15–30 min", notes: "Most common research route — predictable absorption, depot effect" },
  { route: "Intramuscular (IM)", bioavailability: "~90–100%", onset: "10–20 min", notes: "Faster than SC for some compounds, used for large volumes" },
  { route: "Intranasal", bioavailability: "~10–50%", onset: "5–15 min", notes: "Preferred for CNS peptides — direct olfactory mucosa to CNS route" },
  { route: "Intravenous (IV)", bioavailability: "100%", onset: "<2 min", notes: "Research lab setting only — precise dosing control" },
  { route: "Oral", bioavailability: "~1–15% (most peptides)", onset: "30–90 min", notes: "Most peptides are degraded by proteases — exceptions: BPC-157, MK-677" },
  { route: "Topical", bioavailability: "Low systemic, high local", onset: "1–4 h", notes: "Effective for GHK-Cu, BPC-157 cream — localized skin/tissue action" },
]

export default function SciencePage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="py-20 border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Microscope className="w-6 h-6 text-blue-400" />
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Peptide Science</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 max-w-3xl leading-tight">
            The Science Behind<br />Research Peptides
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Receptor pharmacology, signal transduction, gene expression, and downstream biological effects —
            a mechanistic deep-dive into how the most important research peptides actually work at the molecular level.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Peptide Families", value: `${PEPTIDE_FAMILIES.length}` },
              { label: "Receptor Systems", value: "12+" },
              { label: "Signaling Pathways", value: "20+" },
              { label: "Research Citations", value: "5,000+" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-white/10 border border-white/10 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ARE PEPTIDES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Fundamentals</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What Are Peptides?</h2>
            <div className="prose prose-slate max-w-none space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Peptides are short chains of amino acids — typically 2 to 50 residues — linked by peptide bonds
                (covalent amide bonds formed between the carboxyl group of one amino acid and the amine group of
                the next). They occupy the molecular space between amino acids (single monomers) and full proteins
                (which are polypeptide chains typically exceeding 50 residues and acquiring complex tertiary structure).
              </p>
              <p className="text-slate-600 leading-relaxed">
                The human body produces thousands of endogenous peptides, ranging from dipeptides like carnosine to
                the 51-amino acid insulin. These endogenous peptides function as hormones, neurotransmitters, growth
                factors, immune modulators, and antimicrobial agents. Research peptides are either identical to these
                endogenous compounds or are modified analogs designed to enhance stability, potency, or selectivity.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The key pharmacological advantage of peptides over small-molecule drugs is their ability to modulate
                complex biological processes with high specificity and lower off-target toxicity. Because peptides can
                be designed to mimic natural signaling molecules, they engage receptors and pathways that evolved
                specifically for their action — rather than forcing those pathways via non-physiological mechanisms.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Peptide vs Small Molecule vs Protein</h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
                {["", "Peptide", "Small Mol.", "Protein"].map((h) => (
                  <div key={h} className="p-3 text-xs font-bold text-slate-500 uppercase">{h}</div>
                ))}
              </div>
              {[
                { label: "Size (residues)", peptide: "2–50 AA", sm: "N/A (<500 Da)", protein: "50–1000+ AA" },
                { label: "Receptor Specificity", peptide: "High", sm: "Variable", protein: "Very high" },
                { label: "Oral Bioavailability", peptide: "Low (most)", sm: "High (most)", protein: "Very low" },
                { label: "Blood-Brain Barrier", peptide: "Selected (intranasal)", sm: "Yes (lipophilic)", protein: "No" },
                { label: "Half-Life", peptide: "Minutes to days", sm: "Hours to days", protein: "Days to weeks" },
                { label: "Manufacturing", peptide: "Solid-phase synthesis", sm: "Chemical synthesis", protein: "Recombinant DNA" },
                { label: "Immunogenicity", peptide: "Low", sm: "Very low", protein: "Moderate–high" },
              ].map((row, i) => (
                <div key={row.label} className={`grid grid-cols-4 border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}>
                  <div className="p-3 text-xs font-semibold text-slate-600">{row.label}</div>
                  <div className="p-3 text-xs text-emerald-700 font-semibold">{row.peptide}</div>
                  <div className="p-3 text-xs text-slate-600">{row.sm}</div>
                  <div className="p-3 text-xs text-slate-600">{row.protein}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECEPTOR BIOLOGY EXPLAINER */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Receptor Pharmacology</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Peptides Signal Inside Cells</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Almost all research peptides exert their effects through cell surface receptors — predominantly
              G protein-coupled receptors (GPCRs). Understanding GPCR pharmacology is the key to understanding
              why timing, dosing, and cycling matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Layers,
                title: "Step 1: Ligand Binding",
                desc: "The peptide (ligand) binds the extracellular domain of its target receptor. Binding affinity (Ki or Kd) determines how much peptide is needed and how long the interaction lasts. High-affinity peptides like Tirzepatide (picomolar) produce effects at very low concentrations.",
                color: "text-blue-600 bg-blue-100",
              },
              {
                icon: Cpu,
                title: "Step 2: G Protein Activation",
                desc: "Receptor binding causes a conformational change that activates the associated G protein (Gs, Gi, Gq, etc.). Different G proteins trigger different intracellular cascades — Gs activates adenylyl cyclase (cAMP), Gq activates phospholipase C (IP3/DAG), Gi inhibits adenylyl cyclase.",
                color: "text-purple-600 bg-purple-100",
              },
              {
                icon: Zap,
                title: "Step 3: Second Messenger Cascades",
                desc: "cAMP activates PKA, which phosphorylates transcription factors like CREB — ultimately changing gene expression. IP3 triggers calcium release from the ER, activating CaM kinases. These cascades amplify the initial signal 1,000–10,000× before reaching the nucleus.",
                color: "text-emerald-600 bg-emerald-100",
              },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-slate-200">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white mb-6">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Why Receptor Saturation and Desensitization Matter
            </h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              When a GPCR is continuously occupied by an agonist (ligand), the cell responds with two adaptive mechanisms:
              receptor internalization (the receptor is removed from the cell surface via clathrin-coated pit endocytosis)
              and β-arrestin recruitment (which decouples the receptor from its G protein before internalization). The
              combined result is receptor desensitization — the same dose of peptide produces progressively smaller effects.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This is why pulsatile GH peptide protocols outperform continuous infusion — short bursts of GHSR-1a
              activation allow receptor recovery between pulses. It's also why GH secretagogue cycles include 4-week
              off-periods, and why CJC-1295 without DAC (short-acting) is sometimes preferred over CJC-1295 with DAC
              (long-acting) for protocols emphasizing physiological fidelity over convenience.
            </p>
          </div>
        </div>
      </section>

      {/* PEPTIDE FAMILIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">By Mechanism</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Peptide Families & Mechanisms</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Research peptides are grouped by receptor family and biological function.
            Understanding these families is the foundation of rational protocol design.
          </p>
        </div>

        <div className="space-y-16">
          {PEPTIDE_FAMILIES.map((family) => {
            const Icon = family.icon
            return (
              <div key={family.id} id={family.id} className="scroll-mt-20">
                <div className={`p-6 rounded-2xl border ${family.bg} mb-6`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${family.color}`} />
                    </div>
                    <div>
                      <h3 className={`text-xs font-bold uppercase tracking-widest mb-1 ${family.color}`}>{family.subtitle}</h3>
                      <h2 className="text-2xl font-bold text-slate-900">{family.family}</h2>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Overview</h4>
                      <p className="text-slate-600 leading-relaxed">{family.overview}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Molecular Mechanism</h4>
                      <div className="space-y-3">
                        {family.mechanism.split("\n\n").map((para, i) => (
                          <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-xl border border-slate-200 bg-white">
                      <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Key Compounds</h4>
                      <div className="space-y-2">
                        {family.keyCompounds.map((c) => (
                          <div key={c.name} className="flex flex-col">
                            <Link
                              href={`/products/${c.slug}`}
                              className={`text-sm font-semibold hover:underline ${family.color}`}
                            >
                              {c.name}
                            </Link>
                            <span className="text-xs text-slate-500">{c.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-white">
                      <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Key Research Points</h4>
                      <ul className="space-y-2">
                        {family.keyPoints.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                            <ChevronRight className={`w-3 h-3 ${family.color} shrink-0 mt-0.5`} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {family.keyCompounds.slice(0, 3).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                    >
                      Explore {c.name} <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* BIOAVAILABILITY TABLE */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Pharmacokinetics</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Routes of Administration & Bioavailability</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Bioavailability — the fraction of administered compound that reaches systemic circulation in active
              form — varies dramatically by administration route. This table defines the research-relevant parameters
              for each route used in peptide research.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white mb-8">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_2fr] bg-slate-50 border-b border-slate-200">
              {["Route", "Bioavailability", "Onset", "Notes"].map((h) => (
                <div key={h} className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{h}</div>
              ))}
            </div>
            {BIOAVAILABILITY_TABLE.map((row, i) => (
              <div
                key={row.route}
                className={`grid grid-cols-[1.5fr_1fr_1fr_2fr] border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}
              >
                <div className="p-4 font-semibold text-sm text-slate-900">{row.route}</div>
                <div className="p-4 text-sm font-bold text-emerald-700">{row.bioavailability}</div>
                <div className="p-4 text-sm text-slate-700">{row.onset}</div>
                <div className="p-4 text-sm text-slate-500">{row.notes}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Why Most Peptides Cannot Be Taken Orally</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Peptide bonds are cleaved by proteases — enzymes in the stomach (pepsin), small intestine
                (trypsin, chymotrypsin, elastase), and intestinal brush border (dipeptidyl peptidase).
                A 15-amino acid peptide like BPC-157 is broken into individual amino acids within minutes
                of gastric exposure in most cases, losing all biological activity before absorption.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Exceptions exist: BPC-157 has demonstrated significant oral activity in rodent gut models —
                likely because gastric juice itself is its native biological environment. MK-677 is not a
                true peptide but a non-peptide ghrelin mimetic, conferring oral stability. Cyclic peptides
                (like PT-141) have enhanced protease resistance due to their ring structure.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">The Intranasal CNS Route</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                The olfactory mucosa in the nasal cavity has unique properties: it provides direct access
                to the CNS via the olfactory nerve pathway, bypassing both the blood-brain barrier and
                first-pass hepatic metabolism. Small peptides (under ~3 kDa) applied intranasally can
                reach the olfactory bulb, cerebrospinal fluid, and key brain regions within 30 minutes.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                This is why Semax and Selank are specifically formulated as intranasal preparations. Their
                CNS bioavailability via the intranasal route substantially exceeds what would be achievable
                via subcutaneous injection for brain-targeted peptides — explaining why Russian clinical
                research on these compounds defaults to nasal administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH EVIDENCE STANDARDS */}
      <section className="py-20 border-t border-slate-100 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Evidence Hierarchy</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How to Evaluate Peptide Research</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Not all peptide evidence is created equal. The research quality hierarchy matters when
            interpreting claims and setting protocol expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            {
              level: "Level 4",
              type: "In Vitro",
              desc: "Cell culture experiments. Establishes mechanism plausibility but does not predict in vivo effect magnitude. Many peptides work in vitro but fail to translate to living organisms.",
              badge: "bg-slate-100 text-slate-600",
            },
            {
              level: "Level 3",
              type: "Rodent In Vivo",
              desc: "Animal models establish pharmacokinetics, efficacy, and toxicology. Most peptides in this catalog have extensive rodent data. Rodent-to-human translation is imperfect but meaningful for mechanism validation.",
              badge: "bg-amber-100 text-amber-700",
            },
            {
              level: "Level 2",
              type: "Human Phase 1/2",
              desc: "Early human trials establish safety, tolerability, and preliminary efficacy signals. Epithalon, Semax, Selank, and Thymosin Alpha-1 have human trial data at this level.",
              badge: "bg-blue-100 text-blue-700",
            },
            {
              level: "Level 1",
              type: "Human Phase 3/RCT",
              desc: "Randomized controlled trials with large sample sizes. Tirzepatide, Retatrutide, and related GLP-1 class peptides have this level of evidence — the gold standard.",
              badge: "bg-emerald-100 text-emerald-700",
            },
          ].map((e) => (
            <div key={e.type} className="p-5 rounded-2xl border border-slate-200 bg-white flex flex-col">
              <span className={`self-start px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 ${e.badge}`}>{e.level}</span>
              <h3 className="font-bold text-slate-900 mb-2">{e.type}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white">
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <h3 className="font-bold text-white">How PeptidesMaxxing Presents Evidence</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-2">
            Every product description and protocol on this site distinguishes between preclinical (in vitro / rodent)
            evidence and human clinical trial data. We do not extrapolate rodent dosing directly to human equivalents
            without acknowledging the distinction. Claims about mechanisms are grounded in published literature
            and are linked to their source tier.
          </p>
          <p className="text-slate-400 text-sm">
            We are an independent editorial resource, not affiliated with any academic institution or pharmaceutical company.
            Our editorial standard is: cite the evidence, state its tier, and let the researcher draw conclusions.
          </p>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="py-16 border-t border-slate-100 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-amber-200 bg-white mb-10">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900 mb-1">For Educational and Research Purposes Only</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The mechanistic information on this page is intended for educational and research purposes. None of it constitutes
                medical advice or a recommendation for human therapeutic use. Research peptides are not approved drugs.
                Regulations governing their purchase, possession, and use vary by jurisdiction. Always consult qualified legal
                and medical professionals before conducting any research involving these compounds.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Continue Researching</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Products, Protocols & Comparisons</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-700 transition-colors"
              >
                Browse All Peptides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/protocols"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-300 hover:border-slate-900 transition-colors"
              >
                View Protocols
              </Link>
              <Link
                href="/compare"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-900 border-2 border-slate-300 hover:border-slate-900 transition-colors"
              >
                Compare Peptides
              </Link>
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-blue-600 border-2 border-blue-200 hover:border-blue-500 transition-colors"
              >
                Shop Pantheon Peptides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
