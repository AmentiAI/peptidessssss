export interface StackGuide {
  slug: string
  name: string
  emoji: string
  tagline: string
  peptides: string[]
  peptideSlugs: string[]
  tags: string[]
  mechanism: string
  protocol: string
  benefits: {
    title: string
    description: string
  }[]
  synergy: string
  timeline: {
    phase: string
    duration: string
    description: string
  }[]
  whoIsItFor: string
  content: string
  seoTitle: string
  seoDescription: string
}

const AFFILIATE_URL = "https://pantheonpeptides.com/partner/AmentiAI/"

export const stackGuides: StackGuide[] = [
  {
    slug: "ultimate-healing-stack",
    name: "Ultimate Healing Stack",
    emoji: "🔄",
    tagline: "Gold standard for tissue repair",
    peptides: ["BPC-157", "TB-500"],
    peptideSlugs: ["bpc-157", "tb-500"],
    tags: ["Tendon", "Ligament", "Gut Health", "Anti-Inflammatory"],
    mechanism:
      "BPC-157 targets specific injury sites through angiogenesis and nitric oxide pathway activation — recruiting blood vessels directly to damaged tissue. TB-500 works systemically by upregulating actin, the protein responsible for cell migration and muscle repair, mobilising repair cells throughout the entire body. Together they cover both local and whole-body healing pathways simultaneously.",
    protocol:
      "BPC-157: 250–500 mcg/day subcutaneous near the injury site. TB-500: 2–2.5 mg twice weekly subcutaneous. Duration: 4–12 weeks depending on severity.",
    synergy:
      "BPC-157 is site-specific — it recruits blood flow to a precise location. TB-500 is systemic — it floods the body with repair signals. When stacked, BPC-157 maximises healing intensity at the injury while TB-500 ensures the rest of the body supports that healing from within. Studies suggest their combined regenerative effect exceeds either peptide alone by addressing both vascular and cytoskeletal repair mechanisms concurrently.",
    benefits: [
      {
        title: "Accelerated Tendon & Ligament Repair",
        description:
          "BPC-157 has demonstrated in multiple animal models the ability to regenerate tendon and ligament tissue far faster than controls. Its pro-angiogenic effects mean injured connective tissue receives the blood supply needed for collagen deposition and structural remodelling. TB-500 reinforces this by promoting cell migration into the injury zone.",
      },
      {
        title: "Systemic Muscle Recovery",
        description:
          "TB-500's thymosin beta-4 content upregulates actin across muscle fibres, accelerating the clearing of damaged cells and replacement with healthy tissue. This makes it particularly valuable after intense training, surgery, or acute injuries where muscle damage extends beyond the primary site.",
      },
      {
        title: "Gut Lining Support",
        description:
          "BPC-157 is one of the most studied peptides for gastrointestinal health. It promotes healing of the intestinal lining, protects against NSAID damage, and reduces inflammation throughout the gut. This makes it uniquely dual-purpose — systemic healing plus GI support in a single compound.",
      },
      {
        title: "Reduced Inflammation",
        description:
          "Both peptides independently reduce inflammatory cytokines at injury sites. Combined, they blunt the chronic low-grade inflammation that stalls recovery — allowing the repair phase to proceed without inflammatory interference.",
      },
      {
        title: "Angiogenesis & Blood Flow",
        description:
          "New blood vessel formation is a prerequisite for tissue healing. BPC-157 directly stimulates angiogenesis via VEGF and nitric oxide pathways. Better vascular supply means more oxygen, more nutrients, and faster clearance of metabolic waste at injury sites.",
      },
      {
        title: "Neuroprotection",
        description:
          "BPC-157 has shown neuroprotective properties in preclinical data, protecting nerve tissue at injury sites. This is particularly relevant for injuries involving nerves — tendon or ligament tears near nerve bundles, spinal tissue damage, or gut-brain axis dysfunction.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1–2",
        duration: "Loading Phase",
        description:
          "Initial high-frequency dosing establishes peptide presence at injury sites. Acute inflammation typically begins to subside. Some users notice reduced pain and swelling.",
      },
      {
        phase: "Weeks 3–6",
        duration: "Active Repair",
        description:
          "Peak angiogenesis and cell migration activity. Structural repair of collagen and connective tissue is most active during this window. Most users report significant improvement in function.",
      },
      {
        phase: "Weeks 7–12",
        duration: "Consolidation",
        description:
          "Newly formed tissue matures and strengthens. Continued dosing supports full tensile strength restoration. Optional taper or cycle break assessed based on recovery progress.",
      },
    ],
    whoIsItFor:
      "Researchers focusing on musculoskeletal injury recovery, post-surgical healing, chronic tendinopathy, gut permeability, or athletes studying peptide-mediated recovery acceleration.",
    content: "",
    seoTitle: "Ultimate Healing Stack: BPC-157 + TB-500 — Benefits, Protocol & Synergy",
    seoDescription:
      "BPC-157 and TB-500 combined — the gold standard healing stack. Learn how these two peptides cover local and systemic repair pathways for tendons, muscles, gut, and nerves.",
  },
  {
    slug: "gh-optimization-stack",
    name: "GH Optimization Stack",
    emoji: "📈",
    tagline: "Maximum GH release with high selectivity",
    peptides: ["CJC-1295", "Ipamorelin"],
    peptideSlugs: ["cjc-1295-without-dac", "ipamorelin"],
    tags: ["Growth Hormone", "Body Composition", "Fat Loss", "Lean Mass"],
    mechanism:
      "CJC-1295 is a GHRH analogue that amplifies GH pulse amplitude — essentially making each natural GH pulse bigger. Ipamorelin is a selective GHRP that triggers GH release without raising cortisol, prolactin, or ACTH. Combined, their GH pulse amplitude is 2–10× higher than either peptide alone, while maintaining the selectivity and safety profile that makes this stack widely favoured in GH optimization protocols.",
    protocol:
      "CJC-1295 (no DAC): 100–200 mcg subcutaneous. Ipamorelin: 200–300 mcg subcutaneous. Administer both together 2–3× per week, ideally before sleep when natural GH pulses peak.",
    synergy:
      "CJC-1295 and Ipamorelin operate on different receptors — GHRH-R and ghrelin/GHSR-1a respectively. This means they are additive, not redundant. CJC-1295 loads the pituitary and amplifies the signal; Ipamorelin pulls the trigger. Neither causes the side effects associated with synthetic GH — no water retention spikes, no insulin resistance, no cortisol elevation. This makes the stack not only more effective than either alone, but cleaner in its hormonal profile.",
    benefits: [
      {
        title: "Amplified GH Pulse Amplitude",
        description:
          "Clinical data shows CJC-1295 alone can increase GH levels 2–10× above baseline. Ipamorelin adds an independent pulse trigger. When combined, the synergistic effect on GH secretion is greater than the sum of parts — delivering sustained GH elevation across the dosing window.",
      },
      {
        title: "Fat Loss & Body Recomposition",
        description:
          "Elevated GH directly stimulates lipolysis — the breakdown of stored fat for energy. Combined with the lean-mass preserving effects of Ipamorelin, this stack is among the most studied for simultaneous fat loss and muscle preservation without the catabolic risks of caloric restriction alone.",
      },
      {
        title: "Enhanced Muscle Growth",
        description:
          "GH stimulates IGF-1 production in the liver, which drives satellite cell activation and muscle protein synthesis. Higher GH pulses translate directly into elevated IGF-1 and the downstream anabolic effects researchers associate with youthful GH status.",
      },
      {
        title: "Improved Sleep Quality",
        description:
          "Natural GH peaks during slow-wave sleep. By amplifying the GH pulse at sleep onset, this stack reinforces the biological relationship between sleep architecture and recovery. Users in protocol studies commonly report deeper, more restorative sleep within the first 2–3 weeks.",
      },
      {
        title: "No Cortisol or Prolactin Elevation",
        description:
          "Unlike GHRP-2 or GHRP-6, Ipamorelin does not stimulate cortisol or prolactin release at therapeutic doses. This selectivity is a primary reason this stack is preferred over older GH peptide protocols — all the anabolic benefit, none of the stress hormone elevation.",
      },
      {
        title: "Skin & Connective Tissue Benefits",
        description:
          "GH plays a central role in collagen synthesis and skin elasticity. Restored GH signalling through this stack has been associated with improvements in skin thickness, joint lubrication, and overall connective tissue quality — particularly relevant in anti-aging protocols.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1–3",
        duration: "Priming",
        description: "GH pulse amplitude begins increasing. Sleep improvements often noticed first. Mild increases in hunger are common.",
      },
      {
        phase: "Weeks 4–8",
        duration: "Active Response",
        description: "Body composition changes become measurable. Increased muscle fullness, reduced subcutaneous fat. IGF-1 levels peak.",
      },
      {
        phase: "Weeks 9–16",
        duration: "Consolidation",
        description: "Sustained body recomposition continues. Skin and connective tissue improvements become visible. Cycle break recommended after 16 weeks.",
      },
    ],
    whoIsItFor:
      "Researchers studying GH secretagogue protocols, body composition optimisation, anti-aging interventions, or sleep quality enhancement.",
    content: "",
    seoTitle: "GH Optimization Stack: CJC-1295 + Ipamorelin — Benefits, Protocol & Science",
    seoDescription:
      "CJC-1295 and Ipamorelin combined create 2–10× higher GH pulses with no cortisol elevation. Learn the mechanisms, protocol, and full benefits of the gold standard GH stack.",
  },
  {
    slug: "anti-aging-stack",
    name: "Anti-Aging Stack",
    emoji: "✨",
    tagline: "Collagen synthesis + GH restoration",
    peptides: ["GHK-Cu", "Sermorelin"],
    peptideSlugs: ["ghk-cu", "sermorelin-acetate"],
    tags: ["Collagen", "Skin Health", "Bone Density", "Longevity"],
    mechanism:
      "GHK-Cu (copper peptide) stimulates over 4,000 genes involved in collagen production, tissue remodelling, and antioxidant defence — directly reversing the molecular hallmarks of skin and connective tissue aging. Sermorelin restores age-declining GH levels by stimulating the pituitary gland, addressing the hormonal dimension of aging. Together they target the cellular and structural components of aging simultaneously.",
    protocol:
      "GHK-Cu: 1–2 mg/day subcutaneous or topical application. Sermorelin: 200–500 mcg subcutaneous before bed. Duration: 12–24 weeks for full anti-aging benefit.",
    synergy:
      "GHK-Cu and Sermorelin address aging through entirely different pathways — one at the gene expression level, one at the endocrine level. GHK-Cu resets the epigenetic age of cells by modifying which genes are expressed. Sermorelin restores the hormonal environment of youth by increasing GH and downstream IGF-1. Neither pathway overlaps, meaning the effects are purely additive and reinforce each other across different biological systems.",
    benefits: [
      {
        title: "Collagen Synthesis & Skin Regeneration",
        description:
          "GHK-Cu is one of the most studied compounds for collagen upregulation. Research has demonstrated its ability to stimulate Types I, III, and IV collagen — the structural proteins that give skin firmness, elasticity, and wound-healing capacity. Clinical studies show measurable improvements in skin density and wrinkle depth with sustained use.",
      },
      {
        title: "GH Restoration",
        description:
          "After age 30, natural GH production declines approximately 14% per decade. Sermorelin stimulates the pituitary to restore youthful GH secretion patterns without the side effects of exogenous synthetic GH. Restored GH supports muscle tone, fat distribution, bone density, and metabolic function.",
      },
      {
        title: "Gene Expression Reset",
        description:
          "GHK-Cu has been shown to modulate the expression of over 4,000 human genes — activating anti-aging genes while downregulating inflammation and disease-related genes. This broad epigenetic effect means its benefits extend far beyond skin, touching immune function, DNA repair, and nerve health.",
      },
      {
        title: "Bone Density Support",
        description:
          "Both GH (stimulated by Sermorelin) and collagen (stimulated by GHK-Cu) are essential to bone matrix quality. GH promotes bone mineral density directly. GHK-Cu supports the collagen scaffolding within bone tissue. Together they address two of the three pillars of bone health.",
      },
      {
        title: "Hair Growth & Follicle Regeneration",
        description:
          "GHK-Cu has demonstrated the ability to increase hair follicle size, stimulate follicle growth factors, and reverse follicle miniaturisation in animal and in vitro studies. GH also plays a role in hair cycle regulation. This stack is frequently studied in the context of hair density and scalp health.",
      },
      {
        title: "Antioxidant & Inflammation Control",
        description:
          "GHK-Cu is a potent antioxidant, neutralising free radicals and upregulating superoxide dismutase — the body's primary endogenous antioxidant enzyme. Chronic low-grade inflammation is a primary driver of biological aging; this stack's combined anti-inflammatory effects address both the gene and hormone dimensions of inflammaging.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1–4",
        duration: "Hormonal Priming",
        description: "Sermorelin begins restoring GH pulsatility. Sleep quality improves. GHK-Cu begins activating collagen genes at the cellular level.",
      },
      {
        phase: "Weeks 5–12",
        duration: "Visible Change",
        description: "Skin texture, firmness, and hydration improve measurably. Energy and body composition benefits from restored GH become apparent.",
      },
      {
        phase: "Weeks 13–24",
        duration: "Deep Remodelling",
        description: "Sustained collagen remodelling produces lasting structural improvements. Bone density and connective tissue quality consolidate. Maximum benefit at 24 weeks.",
      },
    ],
    whoIsItFor:
      "Researchers studying epigenetic aging, skin biology, GH decline, longevity interventions, bone health, or the relationship between hormonal status and tissue aging.",
    content: "",
    seoTitle: "Anti-Aging Stack: GHK-Cu + Sermorelin — Benefits, Protocol & Science",
    seoDescription:
      "GHK-Cu activates 4,000+ anti-aging genes. Sermorelin restores GH levels. Together they're the most comprehensive dual-mechanism anti-aging peptide stack available.",
  },
  {
    slug: "post-workout-recovery-stack",
    name: "Post-Workout Recovery Stack",
    emoji: "💪",
    tagline: "Faster recovery and lean mass support",
    peptides: ["TB-500", "Ipamorelin"],
    peptideSlugs: ["tb-500", "ipamorelin"],
    tags: ["Muscle Recovery", "Exercise Science", "Sleep Quality", "Anti-Inflammatory"],
    mechanism:
      "TB-500 repairs exercise-induced micro-tears and inflammation in muscle tissue by upregulating actin and promoting cell migration into damaged areas. Ipamorelin triggers GH release during sleep — the critical anabolic recovery window — driving muscle protein synthesis and fat oxidation while the body repairs. Physical repair and hormonal signalling are addressed simultaneously.",
    protocol:
      "TB-500: 2–2.5 mg twice weekly subcutaneous. Ipamorelin: 200–300 mcg subcutaneous before sleep. Best used in 8–16 week blocks aligned with training cycles.",
    synergy:
      "TB-500 addresses the physical damage of training — micro-tears, inflammation, connective tissue stress. Ipamorelin addresses the hormonal environment needed for rebuilding — GH, IGF-1, and the anabolic signalling cascade that occurs during sleep. Neither overlaps. The result is a stack that accelerates both the repair and the rebuild phase of recovery, compressing the time between training sessions.",
    benefits: [
      {
        title: "Accelerated Muscle Repair",
        description:
          "TB-500 upregulates thymosin beta-4, which promotes the migration of repair cells (myoblasts and fibroblasts) into damaged muscle fibres. This accelerates the clearance of cellular debris and the formation of new muscle tissue — reducing soreness duration and improving return-to-training speed.",
      },
      {
        title: "GH-Mediated Anabolic Drive",
        description:
          "Ipamorelin's GH pulse during sleep coincides with the body's peak anabolic window. Elevated GH stimulates IGF-1 production, which drives satellite cell activation and muscle protein synthesis — the foundational mechanism of hypertrophy and adaptation.",
      },
      {
        title: "Reduced Delayed Onset Muscle Soreness",
        description:
          "TB-500's anti-inflammatory effects directly blunt the cytokine cascade responsible for DOMS. Users in protocols commonly report reduced soreness within 24–48 hours post-training, enabling higher training frequency without accumulated fatigue.",
      },
      {
        title: "Connective Tissue Resilience",
        description:
          "High-intensity training places extreme stress on tendons, ligaments, and joint capsules — structures that heal slowly due to poor blood supply. TB-500 specifically addresses connective tissue repair through its pro-angiogenic effects, reducing injury risk over time.",
      },
      {
        title: "Improved Sleep Architecture",
        description:
          "Ipamorelin's GH release is tightly coupled to slow-wave sleep. By amplifying the GH pulse at sleep onset, this stack reinforces and deepens the restorative sleep stages where the majority of physical recovery occurs — creating a positive feedback loop between sleep quality and recovery rate.",
      },
      {
        title: "Body Recomposition",
        description:
          "The combination of TB-500's repair acceleration and Ipamorelin's GH-driven lipolysis creates conditions for simultaneous fat loss and muscle preservation. This is particularly valuable during caloric restriction phases where the risk of muscle catabolism is highest.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1–2",
        duration: "Acute Phase",
        description: "Reduced post-training inflammation. Faster clearance of metabolic waste. Improved sleep onset and depth within first week.",
      },
      {
        phase: "Weeks 3–6",
        duration: "Adaptation Phase",
        description: "Measurable improvement in training recovery between sessions. Increased training frequency becomes sustainable. Body composition shifts begin.",
      },
      {
        phase: "Weeks 7–16",
        duration: "Peak Performance",
        description: "Sustained body recomposition. Connective tissue resilience markedly improved. Training capacity expanded without accumulation of overuse injuries.",
      },
    ],
    whoIsItFor:
      "Athletes, sports scientists, and researchers studying exercise recovery, overtraining prevention, GH secretagogue effects on performance, or peptide-mediated body recomposition.",
    content: "",
    seoTitle: "Post-Workout Recovery Stack: TB-500 + Ipamorelin — Benefits, Protocol & Science",
    seoDescription:
      "TB-500 repairs muscle damage; Ipamorelin drives GH during sleep. Combined, this stack compresses recovery time, supports lean mass, and reduces injury risk.",
  },
  {
    slug: "cognitive-enhancement-stack",
    name: "Cognitive Enhancement Stack",
    emoji: "🧠",
    tagline: "Nootropic peptides for focus and resilience",
    peptides: ["Semax", "Selank"],
    peptideSlugs: ["semax", "selank"],
    tags: ["Focus", "Memory", "Anxiety Relief", "BDNF", "Neuroprotection"],
    mechanism:
      "Semax upregulates BDNF (brain-derived neurotrophic factor) and stimulates dopamine and serotonin pathways — driving focus, memory encoding, and cognitive stamina. Selank modulates GABAergic and serotonergic activity for anxiolysis, stress resilience, and mental clarity. Their mechanisms are complementary with no receptor overlap, delivering focused energy without anxiety and calm without sedation.",
    protocol:
      "Semax: 100–300 mcg intranasal 1–2× per day. Selank: 250–500 mcg intranasal 1–2× per day. Use in 2–4 week cycles with equal breaks to preserve receptor sensitivity.",
    synergy:
      "Semax alone can increase drive and focus but may amplify underlying anxiety in sensitive individuals. Selank alone provides calm and resilience but lacks the stimulatory BDNF drive. Together, Selank modulates the excitatory pressure of Semax while Semax provides the cognitive upregulation that Selank alone doesn't deliver. The combination produces a uniquely balanced nootropic state: heightened focus with emotional stability — what researchers describe as 'high performance without the edge.'",
    benefits: [
      {
        title: "BDNF Upregulation",
        description:
          "Semax is one of the most potent known stimulators of BDNF — the growth factor responsible for neuronal survival, synaptic plasticity, and the formation of new neural connections. Higher BDNF is associated with faster learning, better memory consolidation, and protection against neurodegeneration.",
      },
      {
        title: "Anxiety Reduction & Stress Resilience",
        description:
          "Selank's mechanism involves modulation of the enkephalin system and GABAergic tone, producing anxiolytic effects comparable to benzodiazepines in animal models — without dependence, sedation, or cognitive impairment. This makes it a uniquely clean anxiolytic for use alongside cognitive enhancers.",
      },
      {
        title: "Enhanced Focus & Working Memory",
        description:
          "Semax's dopaminergic and serotonergic effects are directly linked to prefrontal cortex function — the brain region governing executive function, attention, and working memory. Studies in Russian clinical settings showed measurable cognitive improvements in healthy subjects, not just those with impairment.",
      },
      {
        title: "Neuroprotection",
        description:
          "Both peptides demonstrate neuroprotective properties in preclinical models. Semax has been studied in the context of stroke recovery and nerve damage. Selank has shown protection against oxidative stress in neural tissue. Together they form a dual-pathway neuroprotective shield.",
      },
      {
        title: "Immune Modulation",
        description:
          "Selank has demonstrated immunomodulatory effects — regulating IL-6 and other cytokines involved in neuroinflammation. Chronic low-grade brain inflammation is increasingly recognised as a driver of cognitive decline. Selank's anti-inflammatory profile adds a systemic dimension to this stack's cognitive benefits.",
      },
      {
        title: "Mood Stabilisation",
        description:
          "The serotonergic effects of both peptides produce measurable mood stabilisation without the blunting associated with pharmaceutical antidepressants. Users in clinical protocols reported improved emotional regulation, reduced reactivity to stressors, and sustained positive affect — supporting the cognitive environment needed for high performance.",
      },
    ],
    timeline: [
      {
        phase: "Days 1–7",
        duration: "Acute Effects",
        description: "Anxiety reduction and mood stabilisation typically felt within the first doses. Focus improvements emerge by end of first week as BDNF begins upregulating.",
      },
      {
        phase: "Weeks 2–4",
        duration: "Peak Cognitive State",
        description: "Full nootropic effect established. Sustained focus, reduced mental fatigue, improved memory recall. Emotional baseline stabilised.",
      },
      {
        phase: "Week 4+",
        duration: "Cycle Break",
        description: "2–4 week break to preserve receptor sensitivity. Benefits persist beyond the cycle due to BDNF-mediated structural changes in neural circuitry.",
      },
    ],
    whoIsItFor:
      "Researchers studying neurotrophin biology, anxiety pharmacology, cognitive performance, neuroprotection, or the intersection of emotional regulation and executive function.",
    content: "",
    seoTitle: "Cognitive Enhancement Stack: Semax + Selank — Focus, Memory & Anxiety Relief",
    seoDescription:
      "Semax boosts BDNF and dopamine for focus and memory. Selank provides anxiolysis and resilience. Together they create the most balanced nootropic peptide stack studied.",
  },
  {
    slug: "metabolic-stack",
    name: "Metabolic Stack",
    emoji: "⚡",
    tagline: "GLP-1 + mitochondrial optimization",
    peptides: ["Tirzepatide", "MOTS-C"],
    peptideSlugs: ["tirzepatide", "mots-c"],
    tags: ["Glucose Control", "Insulin Sensitivity", "Fat Loss", "AMPK", "Mitochondria"],
    mechanism:
      "Tirzepatide acts on both GLP-1 and GIP receptors to regulate appetite signalling, glucose disposal, and fat metabolism from the top down — through hormonal and neurological pathways. MOTS-C is a mitochondrial-derived peptide that activates AMPK, improving insulin sensitivity and energy metabolism at the cellular level. Together they represent a top-down hormonal approach paired with a bottom-up cellular approach to metabolic health.",
    protocol:
      "Tirzepatide: 2.5–5 mg once weekly subcutaneous. MOTS-C: 5–10 mg once weekly subcutaneous. Duration: 12–24 weeks for full metabolic remodelling.",
    synergy:
      "Tirzepatide's GLP-1/GIP dual agonism regulates appetite and glucose at the systemic level — reducing caloric intake and improving pancreatic insulin secretion. MOTS-C acts at the mitochondrial level to make cells more responsive to insulin independent of pancreatic function. This means the stack addresses insulin resistance at every level simultaneously: appetite, secretion, and cellular uptake. Neither mechanism interferes with the other; they stack purely additively.",
    benefits: [
      {
        title: "Dual GLP-1/GIP Receptor Activation",
        description:
          "Tirzepatide's unique dual-agonism on GLP-1 and GIP receptors produces superior weight loss outcomes compared to GLP-1-only agonists in clinical trials. GIP receptor activation adds metabolic benefits beyond appetite suppression — including improved lipid metabolism and adipocyte function.",
      },
      {
        title: "AMPK Activation & Mitochondrial Health",
        description:
          "MOTS-C activates AMPK — often called the 'master metabolic switch' — which drives fatty acid oxidation, glucose uptake, and mitochondrial biogenesis. This produces effects similar to exercise at the cellular level, making it particularly studied in the context of metabolic disease and longevity.",
      },
      {
        title: "Superior Insulin Sensitivity",
        description:
          "MOTS-C improves insulin sensitivity independently of body weight — a critical distinction. Even at equal body weights, MOTS-C-treated subjects show dramatically improved glucose uptake. Combined with Tirzepatide's improvement in insulin secretion, this stack addresses both sides of the insulin equation.",
      },
      {
        title: "Sustainable Fat Loss",
        description:
          "Tirzepatide's appetite regulation combined with MOTS-C's metabolic rate support creates conditions for fat loss without the compensatory metabolic slowdown that characterises caloric restriction alone. The body's set point is lowered while cellular fat-burning capacity is simultaneously increased.",
      },
      {
        title: "Cardiovascular Risk Reduction",
        description:
          "Both GLP-1 receptor agonism and AMPK activation have demonstrated cardiovascular protective effects in studies — reducing arterial inflammation, improving lipid profiles, and protecting against atherogenesis. This stack's cardiovascular benefits extend well beyond body weight.",
      },
      {
        title: "Longevity Pathway Activation",
        description:
          "MOTS-C is derived from mitochondrial DNA and appears to act as a mitochondrial hormone regulating systemic metabolism. AMPK activation by MOTS-C overlaps with the same longevity pathways activated by caloric restriction and exercise — making this stack of significant interest to longevity researchers.",
      },
    ],
    timeline: [
      {
        phase: "Weeks 1–4",
        duration: "Metabolic Reset",
        description: "Appetite normalisation begins within first week of Tirzepatide. MOTS-C begins improving cellular insulin sensitivity. Early weight and glucose improvements.",
      },
      {
        phase: "Weeks 5–12",
        duration: "Active Fat Loss",
        description: "Sustained caloric deficit achieved through appetite regulation. Mitochondrial efficiency improving. Body composition measurably shifting.",
      },
      {
        phase: "Weeks 13–24",
        duration: "Metabolic Remodelling",
        description: "Set point adaptation. Sustained improvements in fasting glucose, insulin sensitivity, and lipid profiles. Long-term metabolic health markers improving.",
      },
    ],
    whoIsItFor:
      "Researchers studying metabolic syndrome, obesity pharmacology, type 2 diabetes mechanisms, mitochondrial biology, or GLP-1/GIP receptor pharmacology.",
    content: "",
    seoTitle: "Metabolic Stack: Tirzepatide + MOTS-C — Fat Loss, Insulin Sensitivity & AMPK",
    seoDescription:
      "Tirzepatide targets GLP-1/GIP receptors for appetite and glucose control. MOTS-C activates AMPK at the cellular level. The most comprehensive metabolic peptide stack.",
  },
  {
    slug: "longevity-stack",
    name: "Longevity Stack",
    emoji: "🌿",
    tagline: "Telomere support + cellular rejuvenation",
    peptides: ["Epithalon", "GHK-Cu"],
    peptideSlugs: ["epithalon", "ghk-cu"],
    tags: ["Telomeres", "Melatonin", "Collagen", "Cellular Aging", "DNA Repair"],
    mechanism:
      "Epithalon stimulates telomerase — the enzyme that lengthens telomeres — directly targeting one of the core molecular mechanisms of cellular aging. It also restores melatonin production from the pineal gland, improving circadian regulation and antioxidant defence. GHK-Cu drives collagen synthesis and broadly resets gene expression towards a youthful phenotype. Together they target aging at both the DNA and structural protein levels.",
    protocol:
      "Epithalon: 5–10 mg/day subcutaneous for 10–20 day cycles. GHK-Cu: 1–2 mg/day subcutaneous or topical. Run 2–4× per year with breaks between cycles.",
    synergy:
      "Epithalon addresses aging at the deepest biological level — the telomere, the DNA clock of the cell. GHK-Cu addresses aging at the gene expression and structural protein level — resetting the epigenetic age of tissues. Neither mechanism overlaps. The result is a stack that simultaneously extends the replicative lifespan of cells (Epithalon) while restoring the structural and functional quality of existing cells (GHK-Cu). Research suggests these two mechanisms are additive and may be complementary in ways that remain under active investigation.",
    benefits: [
      {
        title: "Telomerase Activation",
        description:
          "Epithalon is the most studied peptide for telomerase stimulation. Telomeres shorten with each cell division; when too short, cells enter senescence or die. Epithalon's ability to activate telomerase — demonstrated in cell culture, animal, and some human studies — positions it as one of the few compounds with direct evidence of telomere lengthening in living subjects.",
      },
      {
        title: "Epigenetic Age Reversal",
        description:
          "GHK-Cu has been shown in multiple studies to reverse markers of biological aging at the gene expression level. By modulating over 4,000 genes, it effectively 'reprints' the cellular instruction set toward a younger phenotype — reducing expression of senescence-associated genes while upregulating repair and regeneration.",
      },
      {
        title: "Pineal Gland & Melatonin Restoration",
        description:
          "The pineal gland calcifies and loses function with age, reducing melatonin production. Epithalon has demonstrated the ability to restore pineal function and melatonin secretion in aged animal models. Since melatonin is both a sleep regulator and a potent antioxidant, its restoration has cascading longevity benefits.",
      },
      {
        title: "Antioxidant System Upregulation",
        description:
          "Both peptides independently upregulate antioxidant defences. GHK-Cu activates superoxide dismutase (SOD) and other endogenous antioxidant enzymes. Epithalon's restoration of melatonin adds a potent free radical scavenger to the system. Together they build one of the most comprehensive antioxidant defences achievable with peptides.",
      },
      {
        title: "Collagen & Tissue Structural Renewal",
        description:
          "GHK-Cu's collagen stimulation provides the structural renewal that Epithalon's cellular longevity effects demand. Living longer at the cellular level without maintaining structural integrity produces aged-looking tissue regardless of cellular age. This stack ensures both dimensions are addressed.",
      },
      {
        title: "Immune System Regulation",
        description:
          "Epithalon has shown immunomodulatory effects in aged animal models — restoring immune function toward younger baselines. GHK-Cu similarly modulates inflammatory cytokines. Together they address the chronic, dysregulated inflammation (inflammaging) that drives most age-related disease.",
      },
    ],
    timeline: [
      {
        phase: "Cycle 1 (Days 1–20)",
        duration: "Initial Cycle",
        description: "Epithalon administered daily for 10–20 days. GHK-Cu concurrent. Melatonin and sleep improvements typically first to emerge. Skin changes begin.",
      },
      {
        phase: "Break (4–8 weeks)",
        duration: "Rest Period",
        description: "Telomerase effects consolidate. GHK-Cu may continue topically. Cellular responses to Epithalon are lasting — short courses produce sustained benefit.",
      },
      {
        phase: "Cycle 2–4 (Per Year)",
        duration: "Annual Protocol",
        description: "Repeat 2–4× per year. Cumulative longevity benefits compound across cycles. Long-term users report sustained improvements in energy, skin, and recovery.",
      },
    ],
    whoIsItFor:
      "Longevity researchers, geroscientists, and those studying telomere biology, epigenetic aging, pineal function, or the molecular mechanisms of biological age reversal.",
    content: "",
    seoTitle: "Longevity Stack: Epithalon + GHK-Cu — Telomeres, Anti-Aging & Cellular Renewal",
    seoDescription:
      "Epithalon activates telomerase and restores melatonin. GHK-Cu resets 4,000+ genes toward youth. The most science-backed longevity peptide combination.",
  },
  {
    slug: "immune-defense-stack",
    name: "Immune Defense Stack",
    emoji: "🛡️",
    tagline: "Dual-pathway immune modulation",
    peptides: ["Thymosin Alpha-1", "LL-37"],
    peptideSlugs: ["thymosin-alpha-1", "ll-37"],
    tags: ["T-Cell", "Adaptive Immunity", "Antimicrobial", "Innate Immunity", "Inflammation"],
    mechanism:
      "Thymosin Alpha-1 (TA-1) modulates T-cell maturation, enhances antigen presentation, and drives the adaptive immune response — the targeted, memory-forming arm of immunity. LL-37 is the only human cathelicidin — a broad-spectrum antimicrobial peptide that activates the innate immune system, the rapid first-response arm. Together they reinforce both branches of immunity: the fast-acting innate and the precise, adaptive.",
    protocol:
      "Thymosin Alpha-1: 1–1.6 mg twice weekly subcutaneous. LL-37: 100–200 mcg per day subcutaneous. Duration: 4–8 weeks for acute immune support; longer for chronic conditions.",
    synergy:
      "The innate and adaptive immune systems are complementary — the innate system responds within hours using broad mechanisms; the adaptive system responds over days with high precision. LL-37 powers the first wave of defence, killing pathogens directly and signalling the immune system to escalate. TA-1 powers the second wave, ensuring that T-cells are mature, correctly differentiated, and capable of mounting a targeted response. This stack covers the immune cascade from initial threat detection to pathogen-specific eradication.",
    benefits: [
      {
        title: "T-Cell Maturation & Differentiation",
        description:
          "Thymosin Alpha-1 was originally isolated from the thymus gland — the organ responsible for T-cell education. TA-1 promotes the differentiation of naive T-cells into functional effector and memory T-cells, directly addressing one of the primary immune failures associated with aging and chronic disease.",
      },
      {
        title: "Broad-Spectrum Antimicrobial Activity",
        description:
          "LL-37 disrupts bacterial cell membranes, is active against viruses and fungi, and can even inhibit biofilm formation — the protective shield that makes chronic bacterial infections resistant to antibiotics. Its antimicrobial mechanism is physical (membrane disruption) rather than biochemical, meaning resistance development is nearly impossible.",
      },
      {
        title: "Innate Immune Activation",
        description:
          "LL-37 directly activates toll-like receptors (TLRs) and stimulates the production of other antimicrobial peptides, cytokines, and chemokines — amplifying the entire innate immune response rather than acting as a single agent. It essentially puts the innate immune system on high alert.",
      },
      {
        title: "Antigen Presentation Enhancement",
        description:
          "TA-1 improves the ability of antigen-presenting cells (dendritic cells and macrophages) to process and display foreign antigens to T-cells — a critical step in mounting an effective adaptive immune response. Weak antigen presentation is a key failure mode in chronic infection and in immunosenescence.",
      },
      {
        title: "Wound Healing & Tissue Repair",
        description:
          "LL-37 is not merely antimicrobial — it also promotes wound closure, angiogenesis, and re-epithelialisation at infection sites. This dual role as both pathogen killer and tissue repairer makes it uniquely valuable in the context of infected wounds, surgical recovery, and mucosal healing.",
      },
      {
        title: "Immunosenescence Reversal",
        description:
          "The aging immune system (immunosenescence) is characterised by reduced T-cell diversity, impaired T-cell function, and heightened systemic inflammation. TA-1 directly addresses two of these three failure modes — restoring T-cell function and number. This stack is of significant interest to researchers studying immune aging.",
      },
    ],
    timeline: [
      {
        phase: "Days 1–7",
        duration: "Innate Activation",
        description: "LL-37 immediately enhances innate immune readiness. Antimicrobial barriers strengthened. Reduced susceptibility to environmental pathogens.",
      },
      {
        phase: "Weeks 2–4",
        duration: "Adaptive Build",
        description: "TA-1 drives T-cell maturation and differentiation. Adaptive immune capacity improves. Antigen presentation efficiency increases.",
      },
      {
        phase: "Weeks 5–8",
        duration: "Full Spectrum",
        description: "Both branches of immunity operating at enhanced capacity. Sustained immune resilience. Appropriate for acute boosting or chronic immune optimisation.",
      },
    ],
    whoIsItFor:
      "Researchers studying immunology, infectious disease, immunosenescence, cancer immunotherapy support, or the role of antimicrobial peptides in immune regulation.",
    content: "",
    seoTitle: "Immune Defense Stack: Thymosin Alpha-1 + LL-37 — Dual Immune Modulation",
    seoDescription:
      "Thymosin Alpha-1 drives adaptive immunity and T-cell maturation. LL-37 activates innate immunity with broad-spectrum antimicrobial action. The complete immune defense stack.",
  },
]

export function getStackGuide(slug: string): StackGuide | undefined {
  return stackGuides.find((s) => s.slug === slug)
}

export function getAllStackGuides(): StackGuide[] {
  return stackGuides
}
