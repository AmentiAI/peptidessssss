// Static product data — Phiogen (phiogen.is)

export const AFFILIATE_URL = "https://phiogen.is/?ref=PEPS"

function phiogenUrl(slug: string): string {
  return `https://phiogen.is/products/${slug}?ref=PEPS`
}

function phiogenImg(slug: string): string {
  return `https://phiogen.is/images/products/${slug}.png`
}

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function isBundle(name: string): boolean {
  return name.includes("Blend") || name.includes("Stack") || name.includes("GLOW") || name.includes("KLOW") || name.includes("Cagri-")
}

const FEATURED_NAMES = new Set([
  "BPC-157 10mg",
  "TB-500 (Thymosin Beta-4) 10mg",
  "Ipamorelin 10mg",
  "CJC-1295 No DAC 5mg",
  "Semaglutide 3mg",
  "Tirzepatide 15mg",
  "Epitalon 10mg",
  "GHK-Cu 50mg",
  "Selank 10mg",
  "BPC-157 + TB-500 Blend 10mg",
])

type RawProduct = {
  name: string
  phiogen_slug: string
  description: string
  category: string
  price: number | null
  purity: string | null
}

const RAW_PRODUCTS: RawProduct[] = [
  // ── FAT LOSS / METABOLIC ──────────────────────────────────────────────────
  { name: "5-Amino-1MQ 5mg", phiogen_slug: "5-amino-1mq-5mg", price: 19.99, purity: "98.9%", description: "Promotes fat loss by blocking NNMT enzyme to accelerate fat breakdown. Supports weight management by enhancing metabolism and boosting cellular energy. Preserves lean muscle mass and improves insulin sensitivity.", category: "All Peptides, Weight Loss" },
  { name: "5-Amino-1MQ 50mg", phiogen_slug: "5-amino-1mq-50mg", price: 79.99, purity: "98.9%", description: "High-dose 5-Amino-1MQ for extended metabolic research. Blocks NNMT to promote fat breakdown, preserves lean muscle mass, improves insulin sensitivity, and boosts mitochondrial energy output.", category: "All Peptides, Weight Loss" },
  { name: "5-Amino-1MQ 50mg x60 Capsules", phiogen_slug: "5-amino-1mq-capsules-50mg-x-60-capsules", price: 119.99, purity: "98.9%", description: "Oral capsule form of 5-Amino-1MQ for convenient metabolic research. Each capsule contains 50mg; 60-capsule supply. Enhances fat metabolism, preserves lean muscle, and boosts cellular NAD+ levels.", category: "All Peptides, Weight Loss" },
  { name: "AOD9604 2mg", phiogen_slug: "aod9604-2mg", price: 39.99, purity: "99.0%", description: "Modified fragment of human growth hormone that targets abdominal fat reduction without IGF-1-related side effects. Stimulates lipolysis, inhibits lipogenesis, and supports cartilage and joint health.", category: "All Peptides, Weight Loss" },
  { name: "AOD9604 5mg", phiogen_slug: "aod9604-5mg", price: 69.99, purity: "99.0%", description: "Mid-range AOD9604 vial for sustained fat loss research. Promotes lipolysis of adipose tissue, inhibits new fat formation, and offers documented joint and cartilage protective properties.", category: "All Peptides, Weight Loss" },
  { name: "AOD9604 10mg", phiogen_slug: "aod9604-10mg", price: 119.99, purity: "99.0%", description: "High-dose AOD9604 for comprehensive fat metabolism research. Reduces abdominal fat, improves metabolic rate, and supports joint and cartilage health across extended study periods.", category: "All Peptides, Weight Loss" },
  { name: "L-Carnitine 400mg/mL", phiogen_slug: "l-carnitine-400mg-ml", price: 39.99, purity: "99.5%", description: "Injectable L-Carnitine at 400mg/mL concentration. Transports long-chain fatty acids into mitochondria for beta-oxidation, enhances exercise performance, reduces muscle damage, and supports cardiovascular health.", category: "All Peptides, Weight Loss, Muscle Growth" },
  { name: "L-Carnitine 600mg/mL", phiogen_slug: "l-carnitine-600mg-ml", price: 49.99, purity: "99.5%", description: "High-concentration injectable L-Carnitine at 600mg/mL. Maximizes fatty acid transport into mitochondria, improves energy metabolism, reduces fatigue, and supports lean body composition research.", category: "All Peptides, Weight Loss, Muscle Growth" },
  { name: "L-Carnitine 5-Pack 600mg", phiogen_slug: "l-carnitine-5-pack-600mg", price: 89.99, purity: "99.5%", description: "Five-vial pack of L-Carnitine 600mg/mL for extended research. Supports sustained fatty acid oxidation, endurance enhancement, and lean mass preservation across multi-week protocols.", category: "All Peptides, Weight Loss, Muscle Growth" },
  { name: "SLU-PP-332 1mg x30 Capsules", phiogen_slug: "slu-pp-332-1mg-x-30-capsules", price: 39.99, purity: "98.6%", description: "ERR-alpha/gamma agonist that mimics the metabolic effects of endurance exercise. Activates oxidative muscle fiber gene expression, enhances mitochondrial biogenesis, and promotes fat utilization.", category: "All Peptides, Weight Loss" },
  { name: "SLU-PP-332 1mg/mL 30mL", phiogen_slug: "slu-pp-332-1mg-ml-30ml", price: 79.99, purity: "98.6%", description: "Injectable SLU-PP-332 ERR agonist. Activates the same metabolic pathways as endurance exercise, increasing fat oxidation and mitochondrial density in muscle tissue.", category: "All Peptides, Weight Loss" },
  { name: "SLU-PP-332 5mg/mL 30mL", phiogen_slug: "slu-pp-332-5mg-ml-30ml", price: 99.99, purity: "98.6%", description: "High-concentration injectable SLU-PP-332 for advanced exercise-mimetic research. Drives ERR-alpha/gamma activation, oxidative fiber switching, and enhanced metabolic efficiency.", category: "All Peptides, Weight Loss" },
  { name: "SLU-PP-332 100mg x30 Capsules", phiogen_slug: "slu-pp-332-100mg-x-30-capsules", price: 59.99, purity: "98.6%", description: "Oral SLU-PP-332 capsules at 100mg each. Activates ERR nuclear receptors to enhance fat oxidation, mitochondrial biogenesis, and aerobic capacity without physical exercise.", category: "All Peptides, Weight Loss" },
  { name: "SLU-PP-332 100mg x120 Capsules", phiogen_slug: "slu-pp-332-100mg-x-120-capsules", price: 159.99, purity: "98.6%", description: "Extended-supply SLU-PP-332 capsules (100mg x120). Provides four months of ERR agonist research, supporting sustained fat oxidation, metabolic adaptation, and mitochondrial enhancement.", category: "All Peptides, Weight Loss" },
  { name: "Semaglutide 3mg", phiogen_slug: "semaglutide-3mg", price: 49.99, purity: "99.1%", description: "GLP-1 receptor agonist that reduces appetite, slows gastric emptying, and promotes sustained weight loss. Improves insulin sensitivity and supports cardiovascular metabolic health.", category: "All Peptides, Weight Loss" },
  { name: "Semaglutide 6mg", phiogen_slug: "semaglutide-6mg", price: 79.99, purity: "99.1%", description: "Mid-dose Semaglutide for multi-week GLP-1 research. Suppresses appetite through hypothalamic GLP-1 receptors, improves glycemic control, and supports progressive fat loss.", category: "All Peptides, Weight Loss" },
  { name: "Semaglutide 12mg", phiogen_slug: "semaglutide-12mg", price: 129.99, purity: "99.0%", description: "High-dose Semaglutide for extended GLP-1 receptor agonist research. Provides sustained appetite suppression, blood sugar regulation, and significant fat mass reduction over longer study durations.", category: "All Peptides, Weight Loss" },
  { name: "Semaglutide 20mg", phiogen_slug: "semaglutide-20mg", price: 189.99, purity: "99.0%", description: "Large-format Semaglutide vial for prolonged obesity and metabolic research. GLP-1 receptor agonism drives robust appetite reduction, improved insulin secretion, and progressive weight management.", category: "All Peptides, Weight Loss" },
  { name: "Semaglutide 30mg", phiogen_slug: "semaglutide-30mg", price: 249.99, purity: "99.0%", description: "Bulk Semaglutide for comprehensive longitudinal GLP-1 studies. Supports sustained weight reduction, metabolic health improvement, and cardiovascular risk factor management.", category: "All Peptides, Weight Loss" },
  { name: "AICAR 50mg", phiogen_slug: "aicar-50mg", price: 69.99, purity: "99.1%", description: "AMPK activator that mimics the metabolic effects of exercise. Enhances fat oxidation, improves cardiovascular endurance, promotes glucose uptake, and supports metabolic health without physical activity.", category: "All Peptides, Weight Loss, Muscle Growth" },
  { name: "BAM-15 30mg/mL 30mL", phiogen_slug: "bam-15-30mg-ml-30ml", price: 89.99, purity: "98.5%", description: "Mitochondrial uncoupler that dissipates the proton gradient as heat to increase metabolic rate and fat oxidation. Promotes weight loss without reducing food intake or causing muscle wasting.", category: "All Peptides, Weight Loss" },
  { name: "BAM-15 50mg/mL 30mL", phiogen_slug: "bam-15-50mg-ml-30ml", price: 129.99, purity: "98.5%", description: "High-concentration BAM-15 mitochondrial uncoupler. Accelerates fat oxidation by converting stored energy to heat, supporting obesity research with preserved lean mass and muscle function.", category: "All Peptides, Weight Loss" },
  { name: "Adipotide (FTPP) 5mg", phiogen_slug: "adipotide-fttp-5mg", price: 89.99, purity: "98.7%", description: "Pro-apoptotic peptide that selectively targets blood vessels feeding white adipose tissue. Induces apoptosis of adipocyte-specific vasculature, leading to fat cell death and targeted fat mass reduction.", category: "All Peptides, Weight Loss" },
  { name: "Adipotide (FTPP) 10mg", phiogen_slug: "adipotide-fttp-10mg", price: 149.99, purity: "98.7%", description: "High-dose Adipotide (FTPP) for advanced fat loss research. Selectively eliminates adipose vasculature, causing apoptosis of fat cells with documented reduction in abdominal and overall fat mass.", category: "All Peptides, Weight Loss" },
  { name: "Cagrilintide 5mg", phiogen_slug: "cagrilintide-5mg", price: 99.99, purity: "98.8%", description: "Long-acting amylin analogue that reduces appetite, slows gastric emptying, and complements GLP-1-based weight loss protocols. Supports sustainable weight reduction and muscle mass preservation.", category: "All Peptides, Weight Loss" },
  { name: "Cagrilintide 10mg", phiogen_slug: "cagrilintide-10mg", price: 169.99, purity: "98.8%", description: "High-dose Cagrilintide amylin analogue for extended appetite and weight research. Reduces caloric intake, improves glycemic control, and synergizes with GLP-1 agonists for additive fat loss.", category: "All Peptides, Weight Loss" },
  { name: "Mazdutide 6mg", phiogen_slug: "mazdutide-6mg", price: 129.99, purity: "98.5%", description: "Dual GLP-1/glucagon receptor agonist promoting sustainable weight reduction through appetite suppression and enhanced energy expenditure. Preserves lean muscle during fat loss and improves metabolic efficiency.", category: "All Peptides, Weight Loss" },
  { name: "Survodutide 10mg", phiogen_slug: "survodutide-10mg", price: 159.99, purity: "98.5%", description: "GLP-1/glucagon dual receptor agonist with potent metabolic effects. Reduces body weight through appetite suppression and increased energy expenditure, with additional hepatic fat reduction properties.", category: "All Peptides, Weight Loss" },
  { name: "O-304 (ATX-304) 100mg x60 Capsules", phiogen_slug: "o-304-atx-304-100mg-x-60-capsules", price: 119.99, purity: "98.8%", description: "Pan-AMPK activator that mimics exercise-induced metabolic benefits. Improves insulin sensitivity, enhances fat oxidation, supports cardiovascular function, and reduces liver fat in metabolic research models.", category: "All Peptides, Weight Loss" },
  { name: "Tirzepatide 15mg", phiogen_slug: "tirzepatide-15mg", price: 149.99, purity: "99.2%", description: "Dual GIP/GLP-1 receptor agonist delivering superior weight loss compared to single-agonist approaches. Controls appetite, improves insulin sensitivity, enhances metabolic health, and supports cardiovascular function.", category: "All Peptides, Weight Loss" },
  { name: "Tirzepatide 30mg", phiogen_slug: "tirzepatide-30mg", price: 249.99, purity: "99.2%", description: "Mid-range Tirzepatide supply for extended dual incretin research. Potent GIP/GLP-1 co-agonism drives significant fat mass reduction, blood sugar control, and metabolic improvements.", category: "All Peptides, Weight Loss" },
  { name: "Tirzepatide 60mg", phiogen_slug: "tirzepatide-60mg", price: 399.99, purity: "99.2%", description: "Bulk Tirzepatide for comprehensive longitudinal metabolic studies. Dual incretin co-agonism delivers the most clinically documented weight loss among incretin-based peptides.", category: "All Peptides, Weight Loss" },
  { name: "Retatrutide 10mg", phiogen_slug: "retatrutide-10mg", price: 149.99, purity: "98.9%", description: "Triple GLP-1/GIP/glucagon receptor agonist for powerful metabolic research. Supports weight loss, preserves lean muscle, reduces food cravings, lowers blood pressure, and improves blood sugar control.", category: "All Peptides, Weight Loss" },
  { name: "Retatrutide 15mg", phiogen_slug: "retatrutide-15mg", price: 199.99, purity: "98.9%", description: "Mid-dose triple agonist Retatrutide. Combines GLP-1, GIP, and glucagon receptor activation for synergistic appetite suppression, enhanced energy expenditure, and superior fat mass reduction.", category: "All Peptides, Weight Loss" },
  { name: "Retatrutide 20mg", phiogen_slug: "retatrutide-20mg", price: 249.99, purity: "98.9%", description: "High-dose Retatrutide for extended triple incretin research. Delivers comprehensive metabolic optimization through simultaneous GLP-1, GIP, and glucagon receptor co-agonism.", category: "All Peptides, Weight Loss" },
  { name: "Retatrutide 30mg", phiogen_slug: "retatrutide-30mg", price: 329.99, purity: "98.9%", description: "Bulk Retatrutide for longitudinal obesity research. Triple-receptor agonism provides the most comprehensive pharmacological weight loss mechanism available for research applications.", category: "All Peptides, Weight Loss" },
  { name: "Tesofensine 500mcg x30 Capsules", phiogen_slug: "tesofensine-500mcg-x-30-capsules", price: 99.99, purity: "99.0%", description: "Triple monoamine reuptake inhibitor (serotonin, dopamine, noradrenaline) that reduces appetite through central nervous system mechanisms. Supports significant weight reduction and improved metabolic parameters.", category: "All Peptides, Weight Loss" },
  { name: "Tesofensine 500mcg x30 Tablets", phiogen_slug: "tesofensine-500mcg-x-30-tablets", price: 99.99, purity: "99.0%", description: "Tablet form Tesofensine for CNS-mediated appetite suppression research. Inhibits reuptake of serotonin, dopamine, and noradrenaline to reduce caloric intake and support sustained weight loss.", category: "All Peptides, Weight Loss" },

  // ── GROWTH PEPTIDES ───────────────────────────────────────────────────────
  { name: "GHRP-2 10mg", phiogen_slug: "ghrp-2-10mg", price: 49.99, purity: "99.0%", description: "Ghrelin receptor agonist that triggers a strong growth hormone pulse. Enhances muscle growth, accelerates recovery, supports fat loss by boosting metabolism, and improves sleep quality.", category: "All Peptides, Muscle Growth" },
  { name: "GHRP-6 10mg", phiogen_slug: "ghrp-6-10mg", price: 49.99, purity: "99.0%", description: "Potent ghrelin mimetic that stimulates GH release and appetite. Promotes muscle growth, accelerates tissue repair, supports fat metabolism, and improves immune function through elevated GH secretion.", category: "All Peptides, Muscle Growth" },
  { name: "CJC-1295 No DAC 5mg", phiogen_slug: "cjc-1295-no-dac-5mg", price: 49.99, purity: "99.1%", description: "GHRH analogue producing a short, physiological GH pulse. Promotes lean muscle growth, accelerates recovery, boosts metabolism, and improves sleep quality with a natural pulsatile GH release pattern.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "CJC-1295 No DAC 10mg", phiogen_slug: "cjc-1295-no-dac-10mg", price: 79.99, purity: "99.1%", description: "High-dose CJC-1295 (no DAC) for extended GH secretagogue research. Stimulates physiological GH pulses to support lean muscle accrual, fat metabolism, and tissue repair.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "CJC-1295 with DAC 10mg", phiogen_slug: "cjc-1295-with-dac-10mg", price: 99.99, purity: "99.0%", description: "Long-acting GHRH analogue with Drug Affinity Complex extending half-life to 6-8 days via albumin binding. Provides sustained GH elevation, promoting lean muscle growth and anti-aging effects.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Gonadorelin Acetate", phiogen_slug: "gonadorelin-acetate", price: 49.99, purity: "99.0%", description: "GnRH analogue that stimulates pituitary LH and FSH secretion. Supports testosterone production, maintains gonadal function, and is studied for HPG axis restoration and fertility research.", category: "All Peptides, Muscle Growth, Libido" },
  { name: "Ipamorelin 10mg", phiogen_slug: "ipamorelin-10mg", price: 59.99, purity: "99.2%", description: "Highly selective ghrelin receptor agonist with minimal cortisol or prolactin elevation. Promotes lean muscle growth, enhances fat loss, accelerates tissue regeneration, and improves sleep quality.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Sermorelin 2mg", phiogen_slug: "sermorelin-2mg", price: 39.99, purity: "99.0%", description: "29-amino acid GHRH analogue that stimulates natural GH release from the pituitary. Supports muscle growth, reduces body fat, increases energy, improves sleep quality, and has anti-aging properties.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Sermorelin 5mg", phiogen_slug: "sermorelin-5mg", price: 69.99, purity: "99.0%", description: "Mid-dose Sermorelin for extended GH axis research. Stimulates pulsatile GH secretion, supporting lean muscle development, fat reduction, improved sleep architecture, and systemic anti-aging effects.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Sermorelin 10mg", phiogen_slug: "sermorelin-10mg", price: 119.99, purity: "99.0%", description: "High-dose Sermorelin for prolonged GHRH research studies. Provides sustained pituitary GH stimulation for lean body composition improvement, metabolic enhancement, and longevity research.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Hexarelin 5mg", phiogen_slug: "hexarelin-5mg", price: 59.99, purity: "99.0%", description: "Potent GHRP that produces one of the strongest GH pulses among secretagogues. Also has direct cardioprotective properties through GHS-R1a receptors in cardiac tissue. Enhances muscle growth and recovery.", category: "All Peptides, Muscle Growth" },
  { name: "Kisspeptin-10 5mg", phiogen_slug: "kisspeptin-10-5mg", price: 59.99, purity: "98.9%", description: "Upstream HPG axis activator that stimulates GnRH release to drive LH and testosterone production. Enhances libido, supports fertility, and restores hormonal drive from the hypothalamic signaling level.", category: "All Peptides, Libido, Muscle Growth" },
  { name: "Kisspeptin-10 10mg", phiogen_slug: "kisspeptin-10-10mg", price: 99.99, purity: "98.9%", description: "High-dose Kisspeptin-10 for extended HPG axis research. Activates GnRH neurons to restore gonadotropin pulsatility, testosterone secretion, fertility signaling, and sexual motivation.", category: "All Peptides, Libido, Muscle Growth" },
  { name: "PEG-MGF 2mg", phiogen_slug: "peg-mgf-2mg", price: 69.99, purity: "98.8%", description: "PEGylated Mechano Growth Factor activates satellite cells for muscle repair and hypertrophy. Extended half-life via PEGylation allows systemic distribution, supporting muscle recovery and lean mass accrual.", category: "All Peptides, Muscle Growth" },
  { name: "IGF-1 LR3 1mg", phiogen_slug: "igf-1-lr3-1mg", price: 79.99, purity: "98.7%", description: "Long-acting IGF-1 analogue that bypasses hepatic clearance to act directly on muscle tissue. Promotes satellite cell activation, myofibril hypertrophy, fat reduction, and enhanced cellular nutrient uptake.", category: "All Peptides, Muscle Growth" },
  { name: "Tesamorelin 10mg", phiogen_slug: "tesamorelin-10mg", price: 119.99, purity: "99.1%", description: "GHRH analogue clinically proven to reduce visceral/abdominal fat. Enhances metabolic function, supports muscle maintenance, improves skin elasticity, and enhances mental clarity through GH axis activation.", category: "All Peptides, Muscle Growth, Weight Loss" },
  { name: "Tesamorelin 20mg", phiogen_slug: "tesamorelin-20mg", price: 199.99, purity: "99.1%", description: "High-dose Tesamorelin for extended visceral fat and GH axis research. Provides sustained GHRH receptor activation for progressive abdominal fat reduction and metabolic improvement.", category: "All Peptides, Muscle Growth, Weight Loss" },

  // ── RECOVERY & HEALING ────────────────────────────────────────────────────
  { name: "Bacteriostatic Water 30mL", phiogen_slug: "bacteriostatic-water-30ml", price: 12.99, purity: null, description: "Sterile water containing 0.9% benzyl alcohol for peptide reconstitution. Prevents bacterial growth after vial entry, extends multi-use shelf life, and maintains solution sterility across research sessions.", category: "Supplies" },
  { name: "Bacteriostatic Water USP 30mL", phiogen_slug: "usp-bacteriostatic-water-30ml", price: 14.99, purity: null, description: "USP-grade bacteriostatic water for injection. Highest purity standard for peptide reconstitution, ensuring sterility, non-pyrogenicity, and reliable pH consistency across research protocols.", category: "Supplies" },
  { name: "BPC-157 10mg", phiogen_slug: "bpc-157-10mg", price: 59.99, purity: "99.3%", description: "15-amino acid body protection compound with extensive tendon, muscle, gut, and nerve repair research. Upregulates GH receptors, promotes angiogenesis, reduces inflammation, and accelerates wound closure.", category: "All Peptides, Recovery & Repair, Muscle Growth" },
  { name: "BPC-157 Capsules 500mcg x60", phiogen_slug: "bpc-157-capsules-500mcg-x-60-capsules", price: 79.99, purity: "99.0%", description: "Oral BPC-157 capsules for gastrointestinal and systemic research. Retains bioactivity when administered orally; studied for leaky gut, gastric protection, and systemic anti-inflammatory effects.", category: "All Peptides, Recovery & Repair" },
  { name: "TB-500 (Thymosin Beta-4) 10mg", phiogen_slug: "tb-500-thymosin-beta-4-10mg", price: 59.99, purity: "99.0%", description: "Synthetic Thymosin Beta-4 promoting actin polymerization, cell migration, and AKT pathway activation for systemic tissue repair. Reduces inflammation, supports cardiac recovery, and improves flexibility.", category: "All Peptides, Recovery & Repair, Muscle Growth" },
  { name: "Thymulin 10mg", phiogen_slug: "thymulin-10mg", price: 59.99, purity: "98.8%", description: "Thymic nonapeptide that promotes T-cell differentiation and maturation. Reduces pro-inflammatory cytokines IL-1 and IL-6, supports autoimmune regulation, and has documented anti-nociceptive properties.", category: "All Peptides, Immunity" },
  { name: "KPV 5mg", phiogen_slug: "kpv-5mg", price: 59.99, purity: "99.0%", description: "Alpha-MSH-derived tripeptide with potent anti-inflammatory properties. Inhibits NF-kB signaling, reduces gut inflammation, supports wound healing, and modulates immune responses at mucosal surfaces.", category: "All Peptides, Recovery & Repair, Immunity" },
  { name: "KPV 10mg", phiogen_slug: "kpv-10mg", price: 99.99, purity: "99.0%", description: "High-dose KPV for extended gut inflammation and immune modulation research. Effectively inhibits inflammatory cascades, promotes intestinal healing, and reduces systemic inflammatory burden.", category: "All Peptides, Recovery & Repair, Immunity" },
  { name: "Oxytocin 8mg", phiogen_slug: "oxytocin-8mg", price: 69.99, purity: "99.0%", description: "Neuropeptide hormone with roles in social bonding, stress reduction, anti-inflammatory signaling, and wound healing. Studied for gut motility support, anxiety reduction, and tissue repair facilitation.", category: "All Peptides, Recovery & Repair, Brain/Nerve" },
  { name: "Oxytocin 10mg", phiogen_slug: "oxytocin-10mg", price: 79.99, purity: "99.0%", description: "High-dose Oxytocin for comprehensive neuropeptide research. Supports prosocial behavior studies, stress hormone regulation, gut barrier function, and anti-inflammatory healing applications.", category: "All Peptides, Recovery & Repair, Brain/Nerve" },
  { name: "Thymosin Alpha-1 5mg", phiogen_slug: "thymosin-alpha-1-5mg", price: 69.99, purity: "99.0%", description: "28-amino acid thymic peptide that activates T-helper 1 immunity, enhances antigen presentation, stimulates interferon production, and raises NK cell activity. Clinically used in 35+ countries.", category: "All Peptides, Immunity" },
  { name: "Thymosin Alpha-1 10mg", phiogen_slug: "thymosin-alpha-1-10mg", price: 119.99, purity: "99.0%", description: "High-dose Thymosin Alpha-1 for extended immune optimization research. Restores T-cell function, enhances viral and bacterial immunity, and supports immune resilience in immunocompromised research models.", category: "All Peptides, Immunity" },
  { name: "Bronchogen 20mg", phiogen_slug: "bronchogen-20mg", price: 79.99, purity: "98.8%", description: "Short peptide bioregulator targeting bronchial and lung tissue. Promotes bronchial epithelial cell restoration, reduces airway inflammation, and supports pulmonary function and respiratory health.", category: "All Peptides, Recovery & Repair, Immunity" },
  { name: "Cardiogen 20mg", phiogen_slug: "cardiogen-20mg", price: 79.99, purity: "98.8%", description: "Peptide bioregulator specific to cardiac tissue. Supports cardiomyocyte function, promotes cardiac protein synthesis, reduces oxidative damage to heart tissue, and supports cardiovascular resilience.", category: "All Peptides, Recovery & Repair" },
  { name: "Cartalax 20mg", phiogen_slug: "cartalax-20mg", price: 79.99, purity: "98.8%", description: "Connective tissue peptide bioregulator supporting cartilage and bone regeneration. Promotes chondrocyte and osteoblast activity, reduces joint degeneration, and supports musculoskeletal structural integrity.", category: "All Peptides, Recovery & Repair, Skin/Tissue/Bone" },
  { name: "Chonluten 20mg", phiogen_slug: "chonluten-20mg", price: 79.99, purity: "98.8%", description: "Peptide bioregulator that targets bronchial and mucosal tissues. Supports epithelial cell regeneration, improves mucosal barrier integrity, and promotes respiratory tissue recovery.", category: "All Peptides, Recovery & Repair, Brain/Nerve" },
  { name: "Cortagen 20mg", phiogen_slug: "cortagen-20mg", price: 79.99, purity: "98.8%", description: "Neuropeptide bioregulator supporting cerebral cortex and central nervous system function. Promotes neuronal recovery, supports cognitive resilience, and reduces age-related neurological decline.", category: "All Peptides, Recovery & Repair, Brain/Nerve" },
  { name: "Crystagen 20mg", phiogen_slug: "crystagen-20mg", price: 79.99, purity: "98.8%", description: "Connective tissue bioregulator promoting collagen synthesis and structural tissue integrity. Supports skin firmness, joint cartilage health, and connective tissue remodeling.", category: "All Peptides, Recovery & Repair, Skin/Tissue/Bone" },
  { name: "Livagen 20mg", phiogen_slug: "livagen-20mg", price: 79.99, purity: "98.8%", description: "Hepatic peptide bioregulator that supports liver cell function and regeneration. Promotes hepatoprotective activity, reduces liver inflammation, and supports detoxification pathway integrity.", category: "All Peptides, Recovery & Repair" },
  { name: "Ovagen 20mg", phiogen_slug: "ovagen-20mg", price: 79.99, purity: "98.8%", description: "Peptide bioregulator targeting gastrointestinal and hepatic tissue. Supports liver and gut tissue regeneration, reduces oxidative damage, and improves organ-specific protein synthesis.", category: "All Peptides, Recovery & Repair" },
  { name: "Pancragen 20mg", phiogen_slug: "pancragen-20mg", price: 79.99, purity: "98.8%", description: "Pancreatic peptide bioregulator supporting exocrine and endocrine pancreatic function. Promotes beta-cell health, supports insulin regulation, and reduces pancreatic oxidative stress.", category: "All Peptides, Recovery & Repair" },
  { name: "Prostamax 20mg", phiogen_slug: "prostamax-20mg", price: 79.99, purity: "98.8%", description: "Prostate-specific peptide bioregulator supporting prostate gland health and function. Reduces prostate inflammation, promotes healthy tissue turnover, and supports urogenital function.", category: "All Peptides, Recovery & Repair" },
  { name: "Thymogen 20mg", phiogen_slug: "thymogen-20mg", price: 79.99, purity: "98.8%", description: "Dipeptide thymic factor that stimulates T-lymphocyte production and immune maturation. Supports immune system restoration, improves infection resistance, and reduces immunosenescence.", category: "All Peptides, Immunity" },
  { name: "Vesilute 20mg", phiogen_slug: "vesilute-20mg", price: 79.99, purity: "98.8%", description: "Peptide bioregulator targeting bladder and urinary tract tissue. Supports urothelial cell restoration, reduces urinary tract inflammation, and promotes healthy bladder function.", category: "All Peptides, Recovery & Repair" },
  { name: "Vesugen 20mg", phiogen_slug: "vesugen-20mg", price: 79.99, purity: "98.8%", description: "Vascular peptide bioregulator that promotes endothelial cell health and blood vessel integrity. Supports angiogenesis, reduces vascular oxidative stress, and improves circulation.", category: "All Peptides, Recovery & Repair" },
  { name: "Vilon 20mg", phiogen_slug: "vilon-20mg", price: 79.99, purity: "98.8%", description: "Dipeptide bioregulator with immunomodulatory and anti-aging properties. Stimulates thymic activity, restores immune function, and supports longevity signaling through epigenetic mechanisms.", category: "All Peptides, Recovery & Repair, Anti-Aging" },
  { name: "Testagen 20mg", phiogen_slug: "testagen-20mg", price: 89.99, purity: "98.8%", description: "Peptide bioregulator targeting testicular and male reproductive tissue. Supports testosterone production, promotes Leydig cell function, and maintains male reproductive health.", category: "All Peptides, Recovery & Repair, Muscle Growth" },
  { name: "ARA-290 10mg", phiogen_slug: "ara-290-10mg", price: 89.99, purity: "98.7%", description: "Non-hematopoietic EPO analogue that activates the innate repair receptor to reduce chronic inflammation and neuropathic pain without erythropoietic effects. Supports tissue protection and metabolic health.", category: "All Peptides, Recovery & Repair" },
  { name: "SS-31 10mg", phiogen_slug: "ss-31-10mg", price: 99.99, purity: "98.9%", description: "Mitochondria-targeted antioxidant peptide that concentrates at the inner mitochondrial membrane. Reduces oxidative stress, restores ATP production, and protects against ischemia-reperfusion injury.", category: "All Peptides, Anti-Aging, Recovery & Repair" },
  { name: "SS-31 25mg", phiogen_slug: "ss-31-25mg", price: 189.99, purity: "98.9%", description: "Mid-dose SS-31 for extended mitochondrial protection research. Maintains cardiolipin function, reduces mitochondrial ROS, improves bioenergetics, and protects cardiac and renal tissue from oxidative damage.", category: "All Peptides, Anti-Aging, Recovery & Repair" },
  { name: "SS-31 50mg", phiogen_slug: "ss-31-50mg", price: 329.99, purity: "98.9%", description: "Bulk SS-31 for comprehensive mitochondrial health studies. Provides sustained mitochondria-targeted antioxidant protection, supports energy metabolism restoration, and reduces oxidative pathology.", category: "All Peptides, Anti-Aging, Recovery & Repair" },
  { name: "LL-37 10mg", phiogen_slug: "ll-37-10mg", price: 99.99, purity: "98.9%", description: "Human cathelicidin antimicrobial peptide with broad-spectrum bactericidal activity and wound healing properties. Disrupts bacterial membranes, neutralizes LPS, promotes angiogenesis, and modulates immune responses.", category: "All Peptides, Immunity, Skin/Tissue/Bone" },
  { name: "MOTS-c 10mg", phiogen_slug: "mots-c-10mg", price: 129.99, purity: "98.8%", description: "Mitochondria-derived peptide that activates AMPK and restores metabolic homeostasis. Enhances insulin sensitivity, promotes glucose metabolism, reduces inflammation, and slows aging processes.", category: "All Peptides, Anti-Aging, Weight Loss" },
  { name: "MOTS-c 20mg", phiogen_slug: "mots-c-20mg", price: 219.99, purity: "98.8%", description: "High-dose MOTS-c for extended mitochondrial and metabolic research. Restores youthful insulin sensitivity, activates AMPK-driven fat oxidation, and reduces systemic inflammation.", category: "All Peptides, Anti-Aging, Weight Loss" },
  { name: "MOTS-c 40mg", phiogen_slug: "mots-c-40mg", price: 379.99, purity: "98.8%", description: "Bulk MOTS-c for longitudinal mitochondrial signaling and longevity studies. Provides comprehensive AMPK and metabolic pathway activation for aging, obesity, and insulin resistance research.", category: "All Peptides, Anti-Aging, Weight Loss" },
  { name: "VIP 5mg", phiogen_slug: "vip-5mg", price: 79.99, purity: "98.8%", description: "Vasoactive Intestinal Peptide with potent anti-inflammatory, immunomodulatory, and neuroprotective properties. Reduces cytokine storms, supports gut motility, and promotes pulmonary and neurological health.", category: "All Peptides, Recovery & Repair, Immunity" },
  { name: "VIP 10mg", phiogen_slug: "vip-10mg", price: 139.99, purity: "98.8%", description: "High-dose Vasoactive Intestinal Peptide for advanced immune and neurological research. Suppresses inflammatory cytokines, regulates gut function, and provides neuroprotective effects across multiple tissue types.", category: "All Peptides, Recovery & Repair, Immunity" },

  // ── ANTI-AGING & LONGEVITY ────────────────────────────────────────────────
  { name: "Epitalon 10mg", phiogen_slug: "epitalon-10mg", price: 59.99, purity: "99.2%", description: "Tetrapeptide that activates telomerase to extend telomere length, providing anti-aging benefits. Improves sleep quality, strengthens immune function, and has documented antioxidant and potential cancer-preventive properties.", category: "All Peptides, Anti-Aging" },
  { name: "Epitalon 50mg", phiogen_slug: "epitalon-50mg", price: 139.99, purity: "99.4%", description: "High-dose Epitalon for extended telomerase activation research. Supports telomere restoration, immune rejuvenation, circadian rhythm normalization, and longevity signaling across prolonged study periods.", category: "All Peptides, Anti-Aging" },
  { name: "NA-Epitalon 10mg", phiogen_slug: "na-epitalon-10mg", price: 79.99, purity: "99.0%", description: "N-acetylated Epitalon variant with potentially enhanced bioavailability. Activates telomerase, supports telomere integrity, and provides anti-aging benefits through improved peptide stability.", category: "All Peptides, Anti-Aging" },
  { name: "GHK-Cu 50mg", phiogen_slug: "ghk-cu-50mg", price: 50.00, purity: "99.1%", description: "Copper-binding tripeptide that modulates over 4,000 genes involved in skin, hair, and tissue regeneration. Boosts collagen synthesis, stimulates wound healing, reduces inflammation, and protects against oxidative damage.", category: "All Peptides, Skin/Tissue/Bone, Anti-Aging" },
  { name: "GHK-Cu 100mg", phiogen_slug: "ghk-cu-100mg", price: 89.99, purity: "99.1%", description: "High-dose GHK-Cu for comprehensive skin biology and anti-aging research. Upregulates collagen I/III/IV, elastin, and glycosaminoglycans; activates hair follicle renewal and nerve growth factor expression.", category: "All Peptides, Skin/Tissue/Bone, Anti-Aging" },
  { name: "Glutathione 200mg", phiogen_slug: "glutathione-200mg", price: 49.99, purity: "99.3%", description: "Master endogenous antioxidant that neutralizes free radicals, supports detoxification, and maintains cellular redox balance. Reduces oxidative stress, supports immune function, and has skin-brightening properties.", category: "All Peptides, Anti-Aging" },
  { name: "Glutathione 600mg", phiogen_slug: "glutathione-600mg", price: 89.99, purity: "99.3%", description: "Mid-dose Glutathione for sustained antioxidant and detoxification research. Replenishes cellular GSH stores, supports hepatic Phase II detoxification, and reduces systemic oxidative burden.", category: "All Peptides, Anti-Aging" },
  { name: "Glutathione 1500mg", phiogen_slug: "glutathione-1500mg", price: 179.99, purity: "99.3%", description: "High-dose Glutathione for comprehensive oxidative stress and longevity research. Restores cellular antioxidant capacity, supports mitochondrial health, and provides broad systemic protective effects.", category: "All Peptides, Anti-Aging" },
  { name: "NAD+ 500mg", phiogen_slug: "nad-500mg", price: 79.99, purity: "99.5%", description: "Nicotinamide adenine dinucleotide coenzyme critical for energy metabolism and cellular repair. Supports mitochondrial function, activates sirtuins, promotes DNA repair, and combats age-related NAD+ decline.", category: "All Peptides, Anti-Aging" },
  { name: "NAD+ 1000mg", phiogen_slug: "nad-1000mg", price: 139.99, purity: "99.5%", description: "High-dose NAD+ for extended longevity and metabolic research. Restores sirtuin activity, enhances mitochondrial biogenesis, supports neurological health, and counters the progressive NAD+ decline of aging.", category: "All Peptides, Anti-Aging" },
  { name: "Methylene Blue 10mg/mL 50mL", phiogen_slug: "methylene-blue-10mg-ml-50ml", price: 59.99, purity: "99.5%", description: "Mitochondrial electron carrier that enhances cellular respiration and ATP production. Studied for cognitive enhancement, neuroprotection, anti-aging effects, and antimicrobial properties.", category: "All Peptides, Anti-Aging, Brain/Nerve" },
  { name: "Melanotan I 10mg", phiogen_slug: "melanotan-1-10mg", price: 59.99, purity: "99.0%", description: "Linear α-MSH analogue that selectively activates MC1R for UV-independent skin tanning. Provides photoprotection by stimulating melanin production without the broader melanocortin receptor effects of MT-II.", category: "All Peptides, Libido, Skin/Tissue/Bone" },
  { name: "Melanotan II 10mg", phiogen_slug: "melanotan-2-10mg", price: 59.99, purity: "99.0%", description: "Cyclic melanocortin peptide activating MC1R–MC5R. Produces UV-independent tanning, enhances libido through MC4R activation, reduces appetite, and has documented erectile function effects.", category: "All Peptides, Libido, Skin/Tissue/Bone" },
  { name: "PT-141 10mg", phiogen_slug: "pt-141-10mg", price: 69.99, purity: "99.0%", description: "FDA-approved (Vyleesi) melanocortin peptide acting centrally on MC3R/MC4R to enhance libido and sexual motivation. Addresses sexual dysfunction through brain pathways rather than peripheral blood flow mechanisms.", category: "All Peptides, Libido" },
  { name: "SNAP-8 10mg", phiogen_slug: "snap-8-10mg", price: 45.00, purity: "98.9%", description: "Octapeptide analogue of SNAP-25 that reduces muscle contraction-induced facial wrinkles by inhibiting catecholamine release at neuromuscular junctions. Studied as a topical anti-wrinkle agent.", category: "All Peptides, Anti-Aging, Skin/Tissue/Bone" },
  { name: "P21 10mg", phiogen_slug: "p21-10mg", price: 89.99, purity: "98.7%", description: "CNTF-derived nootropic peptide with neurogenic and BDNF-stimulating properties. Promotes neurogenesis, enhances memory consolidation, and supports cognitive resilience through STAT3 and BDNF pathway activation.", category: "All Peptides, Brain/Nerve, Anti-Aging" },
  { name: "RU-58841 50mg x30mL", phiogen_slug: "ru-58841-50mg-x-30ml", price: 79.99, purity: "98.8%", description: "Topical androgen receptor antagonist studied for androgenetic alopecia. Blocks DHT binding at the hair follicle level without systemic anti-androgenic effects, supporting hair retention research.", category: "All Peptides, Skin/Tissue/Bone" },
  { name: "RU-58841 50mg x60mL", phiogen_slug: "ru-58841-50mg-x-60ml", price: 129.99, purity: "98.8%", description: "Extended-supply topical RU-58841 for prolonged hair loss research. Provides two-month supply of topical androgen receptor blockade for androgenetic alopecia studies.", category: "All Peptides, Skin/Tissue/Bone" },
  { name: "PNC-27 30mg", phiogen_slug: "pnc-27-30mg", price: 119.99, purity: "98.6%", description: "p53-derived peptide that selectively targets cancer cell membranes, inducing membranolysis in tumor cells overexpressing HDM-2. Studied for anti-cancer properties without toxicity to normal cells.", category: "All Peptides, Anti-Aging" },
  { name: "Abaloparatide 3mg", phiogen_slug: "abaloparatide-3mg", price: 149.99, purity: "98.7%", description: "PTHrP analogue with FDA approval for osteoporosis. Promotes osteoblast-driven bone formation with preferential anabolic activity, improving bone mineral density and reducing fracture risk.", category: "All Peptides, Anti-Aging, Skin/Tissue/Bone" },
  { name: "FOXO4-DRI 10mg", phiogen_slug: "fox04-dri-10mg", price: 149.99, purity: "98.7%", description: "Senolytic peptide that disrupts FOXO4-p53 interaction in senescent cells, triggering apoptosis of dysfunctional cells while sparing healthy tissue. Studied for cellular rejuvenation and age-related dysfunction.", category: "All Peptides, Anti-Aging" },
  { name: "ACE-031 1mg", phiogen_slug: "ace-031-1mg", price: 199.99, purity: "98.5%", description: "Recombinant fusion protein inhibiting myostatin and activin to remove the biological brake on skeletal muscle growth. Produces significant lean mass increases independent of GH signaling in preclinical studies.", category: "All Peptides, Muscle Growth" },

  // ── COGNITIVE & NOOTROPIC ─────────────────────────────────────────────────
  { name: "DSIP 5mg", phiogen_slug: "dsip-delta-sleep-inducing-peptide-5mg", price: 49.99, purity: "99.0%", description: "Delta sleep-inducing peptide that promotes deep, restorative sleep by modulating delta-wave brain activity. Regulates cortisol levels, normalizes circadian rhythms, and has neuroprotective and antioxidant properties.", category: "All Peptides, Brain/Nerve" },
  { name: "DSIP 10mg", phiogen_slug: "dsip-delta-sleep-inducing-peptide-10mg", price: 79.99, purity: "99.0%", description: "Mid-dose DSIP for extended sleep architecture research. Enhances delta-wave sleep, reduces sleep-onset latency, normalizes cortisol, and supports neuroprotection through sustained delta wave modulation.", category: "All Peptides, Brain/Nerve" },
  { name: "DSIP 15mg", phiogen_slug: "dsip-delta-sleep-inducing-peptide-15mg", price: 99.99, purity: "99.0%", description: "High-dose DSIP for longitudinal sleep and stress hormone research. Provides sustained delta sleep promotion, circadian regulation, and stress hormone normalization across extended study periods.", category: "All Peptides, Brain/Nerve" },
  { name: "Selank 10mg", phiogen_slug: "selank-10mg", price: 69.99, purity: "99.0%", description: "Anxiolytic heptapeptide derived from tuftsin with GABA-A modulation, BDNF upregulation, and anti-anxiety effects. Reduces anxiety, enhances cognitive function, stabilizes mood, and improves sleep without sedation.", category: "All Peptides, Brain/Nerve" },
  { name: "NA-Selank Amidate 10mg", phiogen_slug: "na-selank-amidate-10mg", price: 79.99, purity: "99.0%", description: "N-acetylated, C-amidated Selank with enhanced bioavailability and stability. Provides improved anxiolytic and cognitive-enhancing effects versus standard Selank through increased peptide resistance to enzymatic degradation.", category: "All Peptides, Brain/Nerve" },
  { name: "NA-Selank Amidate 30mg", phiogen_slug: "na-selank-amidate-30mg", price: 179.99, purity: "99.0%", description: "High-dose NA-Selank Amidate for extended anxiolytic and cognitive research. Superior stability formulation provides sustained GABA modulation, BDNF elevation, and immune support across long protocols.", category: "All Peptides, Brain/Nerve" },
  { name: "Pinealon 10mg", phiogen_slug: "pinealon-10mg", price: 69.99, purity: "98.8%", description: "Tripeptide pineal gland bioregulator with neuroprotective and anti-aging brain effects. Promotes neuronal regeneration, supports melatonin regulation, improves cognitive resilience, and reduces cerebral oxidative stress.", category: "All Peptides, Brain/Nerve, Anti-Aging" },
  { name: "Pinealon 20mg", phiogen_slug: "pinealon-20mg", price: 119.99, purity: "98.8%", description: "High-dose Pinealon for extended pineal gland and neuroprotection research. Supports circadian regulation, reduces neuronal oxidative damage, and promotes cognitive longevity through pineal bioregulation.", category: "All Peptides, Brain/Nerve, Anti-Aging" },
  { name: "PE-22-28 10mg", phiogen_slug: "pe-22-28-10mg", price: 79.99, purity: "98.8%", description: "BDNF loop domain peptide mimetic that activates TrkB receptors to produce rapid antidepressant effects. Promotes neuroplasticity, supports synaptic remodeling, and enhances mood regulation.", category: "All Peptides, Brain/Nerve" },
  { name: "Adamax 10mg", phiogen_slug: "adamax-10mg", price: 99.99, purity: "98.7%", description: "BDNF-mimetic cognitive enhancer that activates TrkB signaling without the side effects of full-length BDNF. Promotes neuroprotection, synaptic plasticity, memory consolidation, and neurogenesis.", category: "All Peptides, Brain/Nerve" },
  { name: "N-Acetyl Semax Amidate 30mg", phiogen_slug: "n-acetyl-semax-amidate-30mg", price: 149.99, purity: "99.0%", description: "Most potent Semax variant with N-acetylation and C-amidation for maximum bioavailability. Drives BDNF production, enhances dopaminergic signaling, sharpens focus and memory, and provides neuroprotection.", category: "All Peptides, Brain/Nerve" },

  // ── BLENDS & STACKS ───────────────────────────────────────────────────────
  { name: "BPC-157 + TB-500 Blend 10mg", phiogen_slug: "bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg", price: 59.99, purity: "99.0%", description: "Premier tissue repair stack combining BPC-157 5mg + TB-500 5mg. Complementary mechanisms: BPC-157 drives local angiogenesis and GH receptor upregulation while TB-500 promotes systemic cell migration and actin polymerization.", category: "Peptides Cycles, Peptides Bundles, Recovery & Repair" },
  { name: "BPC-157 + TB-500 Blend 20mg", phiogen_slug: "bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg", price: 99.99, purity: "99.0%", description: "High-dose BPC-157 10mg + TB-500 10mg synergistic recovery blend. Double-strength repair stack for comprehensive musculoskeletal healing, addressing inflammation resolution, proliferation, and tissue remodeling.", category: "Peptides Cycles, Peptides Bundles, Recovery & Repair" },
  { name: "Ipamorelin/CJC-1295 Blend 10mg", phiogen_slug: "ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg", price: 89.99, purity: "99.0%", description: "Classic GH stack: CJC-1295 5mg (GHRH) + Ipamorelin 5mg (ghrelin mimetic). Synergistic dual-pathway GH release — 4-6× more effective than either alone. Promotes lean muscle growth, fat loss, and recovery.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth" },
  { name: "Ipamorelin/CJC-1295 Blend 10mg v2", phiogen_slug: "ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipamorelin-5mg", price: 89.99, purity: "99.0%", description: "Alternate batch CJC-1295 5mg + Ipamorelin 5mg growth hormone stack. Stimulates complementary GH pathways for superior lean mass, fat metabolism, recovery acceleration, and sleep quality improvement.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth" },
  { name: "Ipamorelin/Tesamorelin Blend 13mg", phiogen_slug: "ipamorelin-tesamorelin-blend-ipa-3mg-tesa-10mg", price: 129.99, purity: "99.0%", description: "Ipamorelin 3mg + Tesamorelin 10mg blend targeting visceral fat reduction and lean mass. Tesamorelin reduces abdominal fat while Ipamorelin drives muscle-sparing GH pulses for optimized body composition.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth, Weight Loss" },
  { name: "Ipamorelin/Tesamorelin Blend 15mg", phiogen_slug: "ipamorelin-tesamorelin-blend-ipa-5mg-tesa-10mg", price: 149.99, purity: "99.0%", description: "Higher-dose Ipamorelin 5mg + Tesamorelin 10mg blend for comprehensive GH and visceral fat research. Combines anabolic GH pulse stimulation with proven abdominal fat-reducing GHRH activity.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth, Weight Loss" },
  { name: "IPA/TESA Blend 15mg", phiogen_slug: "ipa-tesa-blend-ipa-5mg-tesa-10mg-15mg", price: 149.99, purity: "99.0%", description: "Ipamorelin 5mg + Tesamorelin 10mg body composition stack. Drives simultaneous lean muscle growth through GH pulsation and visceral fat reduction through GHRH receptor activation.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth, Weight Loss" },
  { name: "GLOW Blend 50mg", phiogen_slug: "glow-blend-50mg", price: 89.99, purity: "98.8%", description: "Skin and tissue regeneration blend combining collagen-stimulating peptides. Boosts collagen synthesis, supports skin regeneration, enhances hair thickness, and strengthens connective tissue for a comprehensive glow protocol.", category: "Peptides Cycles, Peptides Bundles, Skin/Tissue/Bone, Anti-Aging" },
  { name: "GLOW Blend 70mg", phiogen_slug: "glow-blend-70mg", price: 109.99, purity: "98.8%", description: "Enhanced GLOW formula at 70mg total for advanced skin and tissue research. Amplifies collagen and elastin production, promotes hair follicle renewal, and supports deep connective tissue remodeling.", category: "Peptides Cycles, Peptides Bundles, Skin/Tissue/Bone, Anti-Aging" },
  { name: "KLOW Blend 80mg", phiogen_slug: "klow-blend-80mg", price: 119.99, purity: "98.8%", description: "Premium 80mg skin and longevity synergy blend. Combines regenerative peptides for comprehensive skin health, collagen restoration, hair rejuvenation, and cellular anti-aging across a structured research cycle.", category: "Peptides Cycles, Peptides Bundles, Skin/Tissue/Bone, Anti-Aging" },
  { name: "Cagri-Reta 5mg", phiogen_slug: "cagri-reta-5mg", price: 129.99, purity: "98.5%", description: "Cagrilintide + Retatrutide synergy blend for powerful weight loss research. Combines amylin analogue appetite suppression with triple GLP-1/GIP/glucagon agonism for additive fat reduction.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
  { name: "Cagri-Reta 10mg", phiogen_slug: "cagri-reta-10mg", price: 189.99, purity: "98.5%", description: "High-dose Cagrilintide + Retatrutide blend for extended metabolic obesity research. Multi-pathway appetite and energy regulation: amylin + triple incretin agonism for superior fat mass reduction.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
  { name: "Cagri-Sema Blend 10mg", phiogen_slug: "cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg", price: 179.99, purity: "98.7%", description: "Cagrilintide 5mg + Semaglutide blend combining amylin and GLP-1 receptor agonism. Complementary appetite suppression mechanisms produce additive weight loss, improved glycemic control, and metabolic benefits.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
  { name: "Reta-Cagri 5mg/5mg", phiogen_slug: "reta-cagri-5mg-5mg", price: 149.99, purity: "98.5%", description: "Retatrutide 5mg + Cagrilintide 5mg balanced dual-compound stack. Pairs the triple incretin agonist Retatrutide with Cagrilintide amylin receptor activation for synergistic fat loss and appetite regulation.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
]

export interface StaticProduct {
  id: string
  name: string
  slug: string
  price: number | null
  priceFormatted: string | null
  imageUrl: string | null
  productUrl: string
  description: string
  shortDescription: string | null
  categories: string[]
  isFeatured: boolean
  badge: string | null
  isBundle: boolean
  isInStock: boolean
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export const staticProducts: StaticProduct[] = RAW_PRODUCTS.map((p, i) => {
  const slug = p.phiogen_slug
  const cats = p.category.split(",").map((c) => c.trim()).filter((c) => c !== "All Peptides")
  const descParts = p.description.split(".")
  const shortDescription = descParts[0] ? descParts[0].trim() + "." : p.description.slice(0, 120) + "..."

  return {
    id: `static-${slug}`,
    name: p.name,
    slug,
    price: p.price,
    priceFormatted: p.price ? `$${p.price.toFixed(2)}` : null,
    imageUrl: phiogenImg(slug),
    productUrl: phiogenUrl(slug),
    description: p.description,
    shortDescription,
    categories: cats,
    isFeatured: FEATURED_NAMES.has(p.name),
    badge: p.purity ? `${p.purity} Pure` : null,
    isBundle: isBundle(p.name),
    isInStock: true,
    sortOrder: i,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

export interface StaticCategory {
  id: string
  name: string
  slug: string
  icon: string | null
  color: string | null
  description: string | null
  heroDescription: string | null
  seoDescription: string | null
  stats: unknown
  content: string | null
  faq: unknown
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export const staticCategories: StaticCategory[] = [
  {
    id: "cat-1",
    name: "Muscle Growth",
    slug: "muscle-growth",
    icon: "TrendingUp",
    color: "#2563eb",
    description: "Peptides that promote lean muscle growth, enhance recovery, and support GH secretion.",
    heroDescription: "Ipamorelin, CJC-1295, GHRP-2, IGF-1 LR3, and ACE-031 are among the most studied peptides for lean muscle development, GH secretion, and body composition. These compounds work by stimulating the pituitary-GH-IGF-1 axis — the same hormonal pathway that drives anabolic adaptation — producing increases in lean mass, accelerated recovery, and improved fat metabolism without the side effect profile of exogenous hormones.",
    seoDescription: "Buy muscle growth peptides — Ipamorelin, CJC-1295, Sermorelin, GHRP-2, IGF-1 LR3, Tesamorelin, ACE-031. Boost lean mass, accelerate recovery, and optimize GH levels from Phiogen.",
    stats: [],
    content: `## The Science of Peptide-Driven Muscle Growth

Skeletal muscle development depends on an intricate signaling cascade anchored by growth hormone (GH) and insulin-like growth factor 1 (IGF-1). As GH declines with age — beginning as early as the mid-20s at roughly 14% per decade — lean muscle mass erodes while body fat accumulates in its place. Research peptides targeting the GH axis offer a precise, receptor-level approach to restoring youthful hormonal signaling without exogenous hormones.

## Growth Hormone Secretagogues

Growth hormone secretagogues (GHS) are the foundation of any peptide-based muscle-building protocol. They act on two complementary receptor pathways to amplify pulsatile GH release from the anterior pituitary gland.

### GHRH Analogues

CJC-1295 (with and without DAC), Sermorelin, and Tesamorelin mimic growth hormone-releasing hormone (GHRH). They bind to GHRH receptors on somatotroph cells, increasing both the amplitude and frequency of natural GH pulses. CJC-1295 with DAC extends the half-life to 6-8 days by binding to albumin, providing sustained baseline GH elevation. Sermorelin offers a shorter, more physiological pulse pattern preferred in some research protocols.

### Ghrelin Mimetics

Ipamorelin, GHRP-2, GHRP-6, and Hexarelin act on the ghrelin receptor (GHSR-1a) to trigger a complementary GH pulse. Ipamorelin is the most selective — it stimulates GH release with minimal cortisol or prolactin elevation, making it valuable for research requiring clean GH stimulation. GHRP-2 produces a stronger GH spike and simultaneously stimulates appetite. Hexarelin is one of the most potent GHRPs with additional direct cardioprotective properties.

### IGF-1 Pathway Peptides

IGF-1 LR3 is a long-acting analogue of insulin-like growth factor 1 that bypasses hepatic clearance to act directly on peripheral muscle tissue. PEG-MGF activates satellite cells for muscle repair and hypertrophy. ACE-031 inhibits myostatin to remove the biological brake on muscle growth.

## Recovery Support Peptides

BPC-157 has demonstrated accelerated tendon-to-bone healing, reduced inflammatory cytokine expression, and enhanced angiogenesis in multiple animal models. TB-500 promotes actin polymerization, reduces oxidative stress, and has shown systemic tissue repair effects. The BPC-157 and TB-500 combination is among the most referenced repair stacks in the research literature.`,
    faq: [
      { question: "What are the best peptides for muscle growth research?", answer: "The most studied peptides for lean muscle include Ipamorelin, CJC-1295, GHRP-2, Sermorelin, IGF-1 LR3, and Hexarelin. Combining a GHRH analogue with a ghrelin mimetic produces synergistic GH release significantly greater than either compound alone — CJC-1295 + Ipamorelin is one of the most widely researched stacks available from Phiogen." },
      { question: "How do GH secretagogues differ from exogenous HGH?", answer: "GH secretagogues stimulate the pituitary gland to release the body's own growth hormone in natural pulsatile bursts, preserving the feedback loop that prevents excess GH accumulation. Exogenous HGH bypasses this regulation entirely. Secretagogues are generally studied for their more physiological GH profiles and lower risk of receptor downregulation." },
      { question: "How long before muscle growth peptides show effects in animal research?", answer: "In rodent models, measurable increases in lean body mass have been documented within 4-8 weeks of consistent GH secretagogue administration. IGF-1 LR3 studies show acute myogenic signaling changes within 24-72 hours at the cellular level." },
      { question: "Can muscle growth peptides be combined in research stacks?", answer: "Yes, combination protocols are standard in the research literature. Phiogen's Ipamorelin/CJC-1295 Blend provides a ready-made synergy stack. Adding BPC-157 or TB-500 addresses recovery and connective tissue repair — the BPC-157 + TB-500 Blend 10mg covers this comprehensively." },
      { question: "What is ACE-031 and how does it affect muscle growth?", answer: "ACE-031 is a recombinant fusion protein that inhibits myostatin and activin, two proteins that act as biological brakes on skeletal muscle growth. In preclinical studies, it produced significant increases in muscle mass independent of GH signaling, representing a distinct and complementary mechanism to secretagogues." },
    ],
    sortOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-2",
    name: "Recovery & Repair",
    slug: "recovery-repair",
    icon: "Zap",
    color: "#16a34a",
    description: "Peptides that accelerate tissue healing, reduce inflammation, and speed recovery.",
    heroDescription: "BPC-157 and TB-500 are the most studied peptides for tissue repair — individually powerful, together one of the most referenced healing stacks in all of peptide research. BPC-157 drives angiogenesis and GH receptor upregulation at injury sites while TB-500 promotes the cell migration and actin polymerization needed to rebuild damaged tissue. Phiogen's catalog also includes KPV, ARA-290, VIP, Oxytocin, and the complete range of peptide bioregulators for targeted organ-level recovery.",
    seoDescription: "Buy recovery peptides — BPC-157 10mg, TB-500 10mg, BPC-157+TB-500 Blend, KPV, ARA-290, VIP, SS-31, Oxytocin, and bioregulator peptides. The best healing peptides from Phiogen.",
    stats: [],
    content: `## Peptide Science for Tissue Repair and Recovery

Recovery is where adaptation happens. Research peptides in this category work at the molecular level to accelerate the three overlapping phases of healing: inflammation resolution, cellular proliferation, and tissue remodeling.

## BPC-157: Body Protection Compound

BPC-157 is a 15-amino acid peptide sequence derived from a protein found naturally in gastric juice. It has been studied across dozens of animal models covering tendon, ligament, muscle, bone, gut, and neurological tissue repair.

BPC-157 upregulates growth hormone receptors in healing tissue, promotes angiogenesis, modulates the nitric oxide system, and downregulates pro-inflammatory cytokines including TNF-alpha and IL-6.

## TB-500: Thymosin Beta-4

TB-500 promotes actin polymerization, activates the AKT signaling pathway, and has shown systemic distribution with particular effectiveness in cardiac and neural tissue repair. The combination with BPC-157 has become the most referenced repair stack in peptide research.

## Peptide Bioregulators

Phiogen carries a comprehensive range of short peptide bioregulators targeting specific organs: Cardiogen (cardiac), Bronchogen (pulmonary), Cartalax (cartilage/bone), Livagen (hepatic), Pancragen (pancreatic), Vesugen (vascular), Crystagen (connective tissue), and more. These represent a unique class of tissue-specific regulatory peptides developed from decades of Russian peptide research.

## Additional Recovery Peptides

KPV (anti-inflammatory, gut healing), ARA-290 (innate repair receptor activation), VIP (immune and inflammatory modulation), SS-31 (mitochondrial protection), and Oxytocin (tissue repair and stress modulation) round out a comprehensive recovery research catalog.`,
    faq: [
      { question: "How does BPC-157 accelerate tissue repair?", answer: "BPC-157 works through multiple mechanisms: it upregulates GH receptors in local tissue, promotes angiogenesis (new blood vessel formation), modulates the nitric oxide system to reduce ischemia, and downregulates pro-inflammatory cytokines like TNF-alpha and IL-6. In research models, it has shown accelerated healing of tendons, ligaments, muscles, and gut tissue." },
      { question: "What is the difference between BPC-157 and TB-500?", answer: "BPC-157 excels in localized tendon, ligament, gut, and musculoskeletal repair through GH receptor upregulation and angiogenesis. TB-500 is more systemically distributed and particularly effective for cardiac and neural tissue recovery through actin polymerization and AKT pathway activation. The two compounds have complementary mechanisms and Phiogen offers both a 10mg and 20mg blend." },
      { question: "What are peptide bioregulators?", answer: "Peptide bioregulators are short (2-4 amino acid) organ-specific peptides developed from Russian research that regulate gene expression in targeted tissues. Phiogen's bioregulator range includes Cardiogen (heart), Bronchogen (lungs), Livagen (liver), Cartalax (cartilage), Vesugen (blood vessels), and others — each studied for their tissue-specific regenerative effects." },
      { question: "Can BPC-157 be taken orally?", answer: "Yes. BPC-157 Capsules 500mcg x60 offer a gastrointestinal delivery route particularly relevant for gut health, leaky gut, and systemic inflammatory conditions. Research suggests BPC-157 retains meaningful bioactivity when administered orally." },
    ],
    sortOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-3",
    name: "Anti-Aging",
    slug: "anti-aging",
    icon: "Clock",
    color: "#9333ea",
    description: "Peptides that combat cellular aging, activate telomerase, and promote longevity.",
    heroDescription: "Epitalon activates telomerase to rebuild telomere length. GHK-Cu modulates over 4,000 genes toward repair and rejuvenation. NAD+ restores sirtuin activity and mitochondrial biogenesis. FOXO4-DRI clears senescent cells. SS-31 protects mitochondria. These peptides target the molecular hallmarks of aging — telomere attrition, mitochondrial dysfunction, cellular senescence, and declining gene expression.",
    seoDescription: "Buy anti-aging peptides — Epitalon (telomerase), GHK-Cu (collagen/gene expression), NAD+ (sirtuin activation), FOXO4-DRI (senolytic), SS-31 (mitochondria), Glutathione, MOTS-c. From Phiogen.",
    stats: [],
    content: `## The Molecular Hallmarks of Aging

Aging is not a single process — it is the convergence of multiple cellular and molecular failures. Research peptides targeting longevity address these distinct mechanisms: telomere shortening, mitochondrial dysfunction, accumulation of senescent cells, loss of proteostasis, and declining intercellular communication.

## Epitalon: Telomerase Activation

Epitalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) that activates telomerase — the enzyme that rebuilds telomere length. Telomere attrition is one of the primary drivers of cellular senescence, as shortened telomeres trigger irreversible cell cycle arrest. Multiple animal and human studies have documented Epitalon's ability to increase telomerase activity, extend telomere length, normalize melatonin secretion, and improve immune function.

## GHK-Cu: Master Regulator of Renewal

GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) is naturally present at 200 ng/mL in young blood plasma, declining to below 80 ng/mL by age 60. Research by Loren Pickart identified GHK-Cu as a modulator of over 4,000 human genes — upregulating repair and regeneration pathways while downregulating inflammation and oncogene expression.

## NAD+ and Mitochondrial Health

NAD+ is the essential coenzyme linking cellular metabolism to longevity signaling. Declining NAD+ with age reduces sirtuin activity, impairing DNA repair, mitochondrial biogenesis, and inflammatory resolution. SS-31 directly targets the inner mitochondrial membrane to reduce ROS and restore ATP production. MOTS-c, a mitochondria-derived peptide, activates AMPK to restore metabolic homeostasis.

## Senolytics: FOXO4-DRI

FOXO4-DRI disrupts the FOXO4-p53 interaction that prevents apoptosis in senescent cells, triggering selective clearance of dysfunctional cells while sparing healthy tissue. Senescent cell accumulation drives systemic inflammation ("inflammaging") and is linked to multiple age-related diseases.`,
    faq: [
      { question: "How does Epitalon extend lifespan in research?", answer: "Epitalon activates telomerase, the enzyme responsible for maintaining telomere length. As telomeres shorten with each cell division, they eventually trigger irreversible cellular senescence. By restoring telomerase activity, Epitalon extends the replicative lifespan of cells. Studies in rats documented 30-40% increases in mean lifespan, reduced tumor incidence, and improved immune function." },
      { question: "What makes NAD+ critical for anti-aging research?", answer: "NAD+ is required for sirtuin deacetylase activity — sirtuins regulate DNA repair, mitochondrial biogenesis, inflammation, and cellular stress responses. NAD+ declines ~50% between ages 40 and 70, impairing all of these functions. Restoring NAD+ levels reactivates sirtuin pathways and has documented effects on energy metabolism, cognitive function, and inflammatory resolution." },
      { question: "What is a senolytic peptide and how does FOXO4-DRI work?", answer: "Senolytic compounds selectively eliminate senescent cells — dysfunctional cells that resist apoptosis and secrete a pro-inflammatory mixture called the SASP. FOXO4-DRI works by disrupting the FOXO4-p53 protein interaction that senescent cells rely on to survive. This triggers apoptosis specifically in senescent cells while healthy cells remain unaffected, reducing systemic inflammaging." },
      { question: "Can GHK-Cu reverse skin aging?", answer: "GHK-Cu modulates 4,000+ genes toward a younger expression profile. Skin studies document upregulation of collagen I, III, and IV; increased elastin production; enhanced barrier function; and reduced oxidative damage markers. Clinical studies showed measurable improvements in skin density, fine line reduction, and wound healing over 8-12 week protocols." },
    ],
    sortOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-4",
    name: "Brain/Nerve",
    slug: "brain-nerve",
    icon: "Brain",
    color: "#0891b2",
    description: "Nootropic peptides for cognitive enhancement, neuroprotection, and sleep optimization.",
    heroDescription: "N-Acetyl Semax Amidate and NA-Selank Amidate represent the most bioavailable formulations of Russia's most studied cognitive peptides — BDNF-upregulating and anxiolytic respectively. PE-22-28 and Adamax act as TrkB receptor agonists for rapid neuroplasticity enhancement. Pinealon restores pineal-driven circadian and neuroprotective signaling. DSIP promotes delta-wave sleep architecture.",
    seoDescription: "Buy nootropic peptides — N-Acetyl Semax Amidate, NA-Selank Amidate, Selank, Pinealon, DSIP, PE-22-28, Adamax, Methylene Blue. Cognitive enhancement and sleep peptides from Phiogen.",
    stats: [],
    content: `## The Neuroscience of Peptide Cognition

Cognitive function depends on neurotrophic factor expression, monoamine balance, synaptic plasticity, and inflammatory regulation. Research peptides in this category act on these foundational mechanisms to enhance memory, reduce anxiety, improve focus, and protect neural tissue from age-related decline.

## Semax Variants: BDNF and Dopaminergic Enhancement

Semax is a heptapeptide derived from ACTH(4-10) with demonstrated BDNF upregulation, dopaminergic enhancement, and neuroprotective properties. N-Acetyl Semax Amidate is the most potent formulation — N-acetylation and C-amidation confer resistance to enzymatic degradation, maximizing bioavailability and duration of action. Research documents improvements in focus, working memory, and neuroprotection in rodent models of cognitive decline.

## Selank Variants: Anxiolysis Without Sedation

Selank is a synthetic heptapeptide derived from tuftsin that modulates GABA-A receptors to reduce anxiety without sedation or dependence. It also stimulates BDNF expression, stabilizes enkephalin metabolism, and has immunomodulatory properties. NA-Selank Amidate provides enhanced stability for research requiring sustained receptor engagement.

## BDNF-Mimetic Peptides

PE-22-28 is a BDNF loop domain mimetic that activates TrkB receptors with documented rapid antidepressant effects in preclinical models. Adamax is a TrkB agonist promoting neuroprotection, synaptic remodeling, and memory consolidation. Both represent a newer class of neurotrophin-mimetic peptides acting independently of BDNF itself.

## Sleep and Pineal Regulation

DSIP (Delta Sleep-Inducing Peptide) promotes slow-wave sleep by modulating delta-wave brain activity, regulating cortisol secretion, and normalizing circadian rhythm. Pinealon is a tripeptide bioregulator targeting the pineal gland to support melatonin regulation, neuroprotection, and cognitive longevity. Methylene Blue enhances mitochondrial electron transport in neurons, improving cellular energy and cognitive function.`,
    faq: [
      { question: "What is the difference between Semax and Selank?", answer: "Semax primarily enhances cognitive performance by upregulating BDNF, enhancing dopaminergic and serotonergic signaling, and providing neuroprotection — it is the activating, performance-enhancing peptide of the pair. Selank primarily reduces anxiety and stabilizes mood through GABA-A modulation and enkephalin stabilization — it is the regulatory, anxiolytic peptide. Used together, they create a balanced nootropic profile." },
      { question: "What makes N-Acetyl Semax Amidate more potent than regular Semax?", answer: "N-acetylation and C-amidation modifications protect the peptide from enzymatic degradation, significantly extending half-life and bioavailability compared to standard Semax. Research suggests these modifications produce 10-100× greater potency per unit dose, making NA-Semax Amidate the preferred formulation for research protocols." },
      { question: "How does DSIP improve sleep quality?", answer: "DSIP modulates delta-wave brain activity — the slow oscillations associated with deep, restorative sleep. It also reduces cortisol and CRH levels that disrupt sleep onset, and appears to normalize circadian signaling disrupted by stress or aging. Research documents reductions in sleep-onset latency and improvements in sleep architecture." },
      { question: "What are PE-22-28 and Adamax?", answer: "PE-22-28 and Adamax are BDNF-mimetic peptides that activate TrkB neurotrophin receptors — the same receptors targeted by brain-derived neurotrophic factor. By directly stimulating TrkB, they promote neuroplasticity, synaptic growth, and antidepressant-like effects documented in rodent models, without requiring the large BDNF protein molecule." },
    ],
    sortOrder: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-5",
    name: "Weight Loss",
    slug: "weight-loss",
    icon: "Flame",
    color: "#ea580c",
    description: "Peptides for fat loss, appetite suppression, and metabolic optimization.",
    heroDescription: "Tirzepatide's dual GIP/GLP-1 agonism delivers 20%+ body weight reduction in clinical research. Retatrutide's triple receptor agonism combines GLP-1, GIP, and glucagon for unmatched metabolic impact. Semaglutide's GLP-1 pathway suppresses appetite at the hypothalamic level. AOD9604 targets abdominal fat directly. BAM-15 and SLU-PP-332 work through mitochondrial and exercise-mimetic mechanisms for comprehensive fat loss research.",
    seoDescription: "Buy weight loss peptides — Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, AOD9604, 5-Amino-1MQ, BAM-15, Adipotide, SLU-PP-332, AICAR. Best fat loss peptides from Phiogen.",
    stats: [],
    content: `## The Science of Peptide-Driven Fat Loss

Modern fat loss research has moved far beyond simple caloric restriction models. Peptides acting on GLP-1 receptors, GIP receptors, glucagon receptors, AMPK pathways, and mitochondrial uncoupling offer precise pharmacological control over the hormonal and metabolic systems that govern fat storage and utilization.

## GLP-1 Receptor Agonists

Semaglutide binds GLP-1 receptors in the hypothalamus, gut, and pancreas to produce potent appetite suppression, improved insulin secretion, and slowed gastric emptying. Clinical trials documented average weight loss of 15-17% body weight over 68 weeks. Phiogen offers Semaglutide from 3mg through 30mg for research across a full dose-range.

## Dual and Triple Incretin Agonists

Tirzepatide co-activates GLP-1 and GIP receptors simultaneously — GIP receptor synergy produces appetite suppression and improved adipose tissue remodeling superior to GLP-1 alone. Phase 3 trials showed 22.5% mean weight reduction. Retatrutide adds glucagon receptor activation to the GLP-1/GIP dual agonism, providing a third mechanism through increased energy expenditure. Phase 2 trials showed up to 24.2% weight reduction over 48 weeks.

## Novel Fat Loss Mechanisms

AOD9604 is a modified HGH fragment that directly activates fat breakdown without IGF-1 effects. 5-Amino-1MQ blocks NNMT enzyme to increase cellular NAD+ and fat metabolism. BAM-15 uncouples mitochondrial proton gradient to increase heat production from stored fat. Adipotide selectively destroys the blood vessels feeding white adipose tissue. SLU-PP-332 activates ERR-alpha/gamma to mimic exercise-induced metabolic adaptations. AICAR activates AMPK for improved fat oxidation and endurance.`,
    faq: [
      { question: "How does Tirzepatide compare to Semaglutide for weight loss research?", answer: "Tirzepatide's dual GIP/GLP-1 co-agonism produces greater weight loss than GLP-1 agonism alone. Phase 3 trials showed Tirzepatide achieving up to 22.5% mean body weight reduction versus ~15-17% for Semaglutide at matched timepoints. GIP receptor activation provides complementary mechanisms including improved adipose tissue remodeling and enhanced post-prandial insulin response." },
      { question: "What is Retatrutide's mechanism?", answer: "Retatrutide is a triple GLP-1/GIP/glucagon receptor agonist. GLP-1 and GIP activation suppress appetite and improve insulin dynamics. The addition of glucagon receptor agonism increases hepatic glucose production (requiring more energy) and boosts thermogenesis, providing a third fat-loss mechanism. Phase 2 data showed up to 24.2% weight reduction over 48 weeks." },
      { question: "How does AOD9604 differ from other weight loss peptides?", answer: "AOD9604 is a modified fragment (176-191) of human growth hormone that specifically activates fat metabolism pathways without stimulating IGF-1 production. It directly inhibits lipogenesis and stimulates lipolysis in adipose tissue, reducing abdominal fat with documented cartilage and joint-protective secondary effects." },
      { question: "What is SLU-PP-332 and how does it work?", answer: "SLU-PP-332 is an ERR-alpha/gamma nuclear receptor agonist that activates the gene expression program of endurance exercise without physical activity. It increases oxidative muscle fiber expression, enhances mitochondrial density, improves fat oxidation, and in rodent models has shown improved endurance and resistance to obesity." },
    ],
    sortOrder: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-6",
    name: "Immunity",
    slug: "immunity",
    icon: "Shield",
    color: "#0d9488",
    description: "Peptides that modulate immune function, enhance T-cell activity, and fight infection.",
    heroDescription: "Thymosin Alpha-1 is approved in 35+ countries for hepatitis and cancer immunotherapy — it activates the T-helper 1 arm of immunity at the cellular level. Thymulin requires zinc to drive T-cell differentiation and reduce inflammatory cytokines. LL-37 is the only human cathelicidin: broad-spectrum antimicrobial, anti-biofilm, and pro-healing simultaneously. KPV, VIP, and Thymogen complete a comprehensive immune optimization toolkit.",
    seoDescription: "Buy immune peptides — Thymosin Alpha-1 (T-cell activation), Thymulin (thymic hormone), LL-37 (antimicrobial), KPV (anti-inflammatory), VIP (immune modulation), Thymogen. From Phiogen.",
    stats: [],
    content: `## Peptide Immunology

The immune system's effectiveness declines with age (immunosenescence), chronic stress, illness, and systemic inflammation. Research peptides in this category act on specific immune pathways — thymic T-cell maturation, innate antimicrobial defense, cytokine regulation, and mucosal immunity — to restore and optimize immune function.

## Thymosin Alpha-1: T-Cell Activation

Thymosin Alpha-1 (TA1) is a 28-amino acid thymic peptide. It promotes Th1 T-cell differentiation, upregulates MHC class I and II for improved antigen presentation, induces interferon-alpha and gamma, and raises NK cell activity. TA1 is approved or clinically available in over 35 countries for hepatitis B, hepatitis C, cancer immunotherapy adjuvancy, and sepsis management.

## Thymulin: Thymic Hormone

Thymulin is a nonapeptide produced specifically by thymic epithelial cells. It requires zinc for biological activity and promotes T-lymphocyte differentiation. Thymulin reduces pro-inflammatory cytokines IL-1 and IL-6, making it relevant for both immune activation and inflammatory resolution research. Its production declines dramatically with age-related thymic involution.

## LL-37: Innate Defense

LL-37 is the only human cathelicidin — part of the innate immune system's first-line defense. It physically disrupts bacterial cell membranes through electrostatic interactions (resistant to antibiotic resistance development), neutralizes bacterial LPS to prevent septic shock, promotes wound healing through chemotaxis, and disrupts established biofilms.

## KPV and VIP: Inflammatory Modulation

KPV (Lys-Pro-Val) is derived from alpha-MSH and potently inhibits NF-kB signaling, reducing mucosal and systemic inflammation. VIP (Vasoactive Intestinal Peptide) suppresses cytokine storms, supports gut barrier integrity, and provides neuroprotective anti-inflammatory effects through VPAC1/2 receptors.`,
    faq: [
      { question: "What is Thymosin Alpha-1 and what is it used for?", answer: "Thymosin Alpha-1 is a 28-amino acid thymic peptide that activates T-helper 1 immunity, enhances antigen presentation, stimulates interferon production, and raises NK cell activity. It is approved or clinically available in over 35 countries for hepatitis B, hepatitis C, cancer immunotherapy, and sepsis management." },
      { question: "How does LL-37 fight infection differently from antibiotics?", answer: "LL-37 is a broad-spectrum antimicrobial peptide that physically disrupts bacterial cell membranes through electrostatic interactions — a mechanism bacteria cannot easily develop resistance to. Unlike antibiotics that target specific bacterial proteins or enzymes, LL-37 kills gram-positive and gram-negative bacteria, fungi, and some viruses. It also disrupts established biofilms that resist conventional antibiotic treatment." },
      { question: "What is KPV and how does it reduce inflammation?", answer: "KPV is a tripeptide derived from the C-terminus of alpha-MSH. It inhibits NF-kB nuclear translocation — the master inflammatory signaling switch — without suppressing the immune system broadly. This makes it particularly relevant for gut inflammation, wound healing, and conditions of excessive inflammatory signaling like IBD." },
      { question: "What is VIP and why is it studied for immunity?", answer: "Vasoactive Intestinal Peptide is a 28-amino acid neuropeptide with potent anti-inflammatory properties through VPAC1/2 receptors on immune cells. It suppresses TNF-alpha, IL-6, and IL-12 while promoting regulatory T-cell activity, making it relevant for cytokine storm research, autoimmune conditions, and pulmonary inflammation." },
    ],
    sortOrder: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-7",
    name: "Libido",
    slug: "libido",
    icon: "Heart",
    color: "#e11d48",
    description: "Peptides that support sexual health, enhance libido, and improve reproductive function.",
    heroDescription: "PT-141 (Bremelanotide) is FDA-approved and acts in the brain through melanocortin receptors to enhance desire and arousal — not just blood flow. Kisspeptin-10 activates the HPG axis at its source, restoring the LH and testosterone signaling that drives hormonal drive. Melanotan II adds UV-independent tanning and appetite suppression alongside its libido effects.",
    seoDescription: "Buy libido peptides — PT-141 / Bremelanotide (FDA-approved libido), Kisspeptin-10 (HPG axis), Melanotan I & II (tanning + libido), Gonadorelin (testosterone support). From Phiogen.",
    stats: [],
    content: `## Sexual Health and the Peptide Axis

Sexual desire and function are regulated by a sophisticated cascade of hormonal and neurotransmitter signals extending from the hypothalamus and pituitary gland to peripheral reproductive organs. Research peptides in this category operate through distinct pathways to address these underlying mechanisms.

## PT-141 (Bremelanotide): Central Nervous System Activation

PT-141 acts centrally in the brain through melanocortin MC3R and MC4R receptors in the hypothalamus. By activating MC4R receptors in the paraventricular nucleus, it increases dopamine release in reward pathways, enhancing sexual motivation at the neurological level. PT-141 completed Phase 3 trials for HSDD in premenopausal women and was FDA-approved as Vyleesi in 2019.

## Kisspeptin-10: HPG Axis Activation

Kisspeptin is the master upstream regulator of the HPG axis. It stimulates GnRH neurons, which drive LH and FSH release, stimulating testosterone in men and estrogen in women. Kisspeptin-10 restores hormonal drive from the upstream signaling level. Research in hypogonadal men documented significant increases in LH pulsatility and testosterone following administration.

## Melanotan I and II: Melanocortin Tanning and Libido

Melanotan I selectively activates MC1R for UV-independent tanning with minimal libido effects. Melanotan II activates the full spectrum (MC1R-MC5R): tanning, sexual arousal through MC3R/MC4R, appetite reduction through MC4R, and erectile function through a spinal mechanism. Gonadorelin (GnRH analogue) supports testosterone production by stimulating pituitary LH secretion.`,
    faq: [
      { question: "How does PT-141 differ from Viagra or Cialis?", answer: "PT-141 acts centrally in the brain through melanocortin receptors to increase dopamine and enhance sexual motivation at the neurological level. PDE5 inhibitors like Viagra work peripherally by relaxing vascular smooth muscle to increase genital blood flow. PT-141 addresses desire and arousal; PDE5 inhibitors address mechanical blood flow — they work through entirely different pathways." },
      { question: "What is Kisspeptin-10 used for?", answer: "Kisspeptin-10 stimulates GnRH neurons in the hypothalamus to restore LH and FSH pulsatility, driving testosterone production in men and estrogen in women. It is studied for hypogonadism, HPG axis dysregulation, fertility, and libido enhancement at the hormonal root cause level." },
      { question: "What is the difference between Melanotan I and Melanotan II?", answer: "Melanotan I (afamelanotide) selectively activates MC1R for UV-independent skin tanning with high selectivity and minimal libido effects. Melanotan II is non-selective, activating MC1R through MC5R — providing tanning, libido enhancement via MC4R, appetite suppression, and erectile effects through a spinal mechanism." },
      { question: "Is PT-141 FDA approved?", answer: "Yes. PT-141 (branded as Vyleesi) was approved by the FDA in 2019 for hypoactive sexual desire disorder (HSDD) in premenopausal women. Clinical trials documented statistically significant improvements in sexual desire scores compared to placebo." },
    ],
    sortOrder: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-8",
    name: "Skin/Tissue/Bone",
    slug: "skin-tissue-bone",
    icon: "Star",
    color: "#d97706",
    description: "Peptides for skin regeneration, collagen synthesis, hair growth, and bone health.",
    heroDescription: "GHK-Cu modulates over 4,000 genes to stimulate collagen, elastin, and hair follicle renewal — and its blood levels drop 60% between ages 20 and 60. BPC-157 accelerates wound closure, tendon tensile strength restoration, and bone remodeling. RU-58841 blocks DHT at the follicle level. SNAP-8 reduces expression wrinkles. Cartalax and Crystagen target cartilage and connective tissue respectively.",
    seoDescription: "Buy skin and tissue peptides — GHK-Cu (collagen, hair growth), BPC-157 (wound healing), SNAP-8 (anti-wrinkle), LL-37 (skin repair), RU-58841 (hair loss), Abaloparatide (bone). From Phiogen.",
    stats: [],
    content: `## The Biology of Structural Tissue Renewal

Skin, connective tissue, and bone are dynamic structures in constant remodeling. As collagen synthesis and gene expression programs decline with age, skin thins and loses elasticity, tendons weaken, and bone density decreases. Research peptides in this category act as precise molecular signals at the collagen synthesis, gene expression, and cellular repair levels.

## GHK-Cu: Master Regulator of Skin Biology

GHK-Cu is naturally present at 200 ng/mL in young blood plasma, declining to below 80 ng/mL by age 60. Research by Loren Pickart identified GHK-Cu as a modulator of over 4,000 human genes — upregulating collagen I, III, and IV synthesis; increasing elastin and glycosaminoglycan production; activating hair follicle renewal; and downregulating inflammation and oxidative damage.

## BPC-157: Structural Tissue Repair

BPC-157's tissue repair effects extend prominently to skin, tendon, ligament, and bone healing. Its angiogenic activity is critical for skin wound healing. Research has shown BPC-157 to accelerate full-thickness wound closure, reduce scar formation, and promote more organized collagen deposition.

## Hair Loss Research Peptides

RU-58841 is a topical androgen receptor antagonist studied for androgenetic alopecia, blocking DHT binding at the hair follicle level without systemic anti-androgenic effects. GHK-Cu has documented hair follicle enlargement effects and increased hair growth in research models.

## Anti-Wrinkle Peptides

SNAP-8 inhibits catecholamine release at neuromuscular junctions, reducing facial muscle contractions that cause expression wrinkles — studied as a topical Botox-alternative mechanism.

## Bone Health

Abaloparatide is an FDA-approved PTHrP analogue with preferential osteoblast anabolic activity, documented to increase bone mineral density and reduce fracture risk. BPC-157 accelerates fracture callus formation and bone remodeling in animal models.`,
    faq: [
      { question: "What is the best peptide for skin regeneration research?", answer: "GHK-Cu is the most comprehensively studied peptide for skin biology, with documented effects on collagen synthesis, gene expression, wound healing, photoaging, and hair growth. BPC-157 is the strongest for structural wound healing and scar reduction. SNAP-8 provides an anti-wrinkle mechanism through neuromuscular junction modulation." },
      { question: "Can peptides improve tendon and ligament healing?", answer: "Yes. BPC-157 has the strongest tendon and ligament healing evidence, with multiple studies documenting accelerated restoration of tensile strength, increased collagen type I deposition, and reduced fibrous adhesion formation. TB-500 complements this with systemic cell migration promotion. Phiogen's BPC-157 + TB-500 Blend covers both mechanisms." },
      { question: "How does RU-58841 work for hair loss?", answer: "RU-58841 is a topical androgen receptor antagonist that blocks dihydrotestosterone (DHT) binding at androgen receptors in hair follicles. DHT binding triggers follicle miniaturization in androgenetic alopecia. By blocking DHT locally without systemic anti-androgenic effects, RU-58841 is studied for maintaining follicle size and hair density." },
      { question: "How long do skin regeneration peptides take to show effects?", answer: "Collagen synthesis and structural skin remodeling are slow processes. GHK-Cu skin studies have documented measurable improvements in skin density and fine line reduction over 8-12 weeks of consistent administration. Wound healing effects from BPC-157 are more acute, with accelerated wound closure visible within 7-14 days in animal models." },
    ],
    sortOrder: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-9",
    name: "Peptides Cycles",
    slug: "peptides-cycles",
    icon: "Package",
    color: "#7c3aed",
    description: "Pre-built synergistic peptide blends and stacks for comprehensive results.",
    heroDescription: "Phiogen's blends combine complementary compounds for targeted research outcomes. The BPC-157 + TB-500 Blend covers the full tissue repair cascade. The Ipamorelin/CJC-1295 Blend delivers synergistic dual-pathway GH release. The GLOW and KLOW Blends combine regenerative peptides for skin and longevity. The Cagri-Reta and Cagri-Sema stacks pair cutting-edge incretin combinations for advanced weight loss research.",
    seoDescription: "Buy peptide blends and stacks — BPC-157+TB-500 Blend, Ipamorelin/CJC-1295 Blend, GLOW Blend, KLOW Blend, Cagri-Reta, Cagri-Sema, Ipamorelin/Tesamorelin Blend. Research blends from Phiogen.",
    stats: [],
    content: `## Why Research Blends Outperform Single Peptides

Individual peptides are powerful. But research consistently demonstrates that well-designed combinations — where each compound addresses a distinct but complementary mechanism — produce outcomes single agents cannot achieve alone. Phiogen's blend catalog is designed around proven mechanistic synergies.

## Tissue Repair: BPC-157 + TB-500 Blends

The BPC-157 + TB-500 Blend is the most referenced repair stack in peptide research. BPC-157 drives local angiogenesis and GH receptor upregulation at injury sites. TB-500 promotes the systemic cell migration and actin polymerization needed to populate healing tissue. Available in 10mg (5mg+5mg) and 20mg (10mg+10mg) formats.

## Growth Hormone: Ipamorelin/CJC-1295 Blend

The CJC-1295 (GHRH analogue) + Ipamorelin (ghrelin mimetic) stack produces synergistic GH release — research suggests the combination is 4-6× more effective than either compound alone. Phiogen also offers Ipamorelin/Tesamorelin blends for research combining lean mass support with targeted visceral fat reduction.

## Skin and Longevity: GLOW and KLOW Blends

The GLOW Blend (50mg and 70mg) and KLOW Blend (80mg) combine regenerative peptides for comprehensive skin, hair, and connective tissue research. These structured formulations reduce individual compound preparation and provide calibrated ratios for reproducible research.

## Weight Loss Combinations

Cagri-Reta blends pair Cagrilintide (amylin analogue) with Retatrutide (triple GLP-1/GIP/glucagon agonist) for multi-pathway appetite and fat reduction. The Cagri-Sema Blend pairs Cagrilintide with Semaglutide for amylin/GLP-1 complementary mechanisms.`,
    faq: [
      { question: "Why use a blend instead of separate peptides?", answer: "Pre-formulated blends ensure accurate compound ratios, simplify reconstitution, and reduce preparation complexity. Phiogen's blends are designed around documented synergistic mechanisms — the BPC-157+TB-500 combination produces superior tissue repair versus either compound alone, and the Ipamorelin/CJC-1295 stack produces 4-6× more GH than single secretagogues." },
      { question: "What is the difference between the 10mg and 20mg BPC-157+TB-500 blends?", answer: "The 10mg blend contains 5mg BPC-157 + 5mg TB-500 for standard recovery research protocols. The 20mg blend contains 10mg each for higher-dose studies or extended research periods. Both maintain the 1:1 ratio that is most commonly referenced in the research literature." },
      { question: "What makes the Ipamorelin/Tesamorelin blend different from the CJC-1295 blend?", answer: "The Ipamorelin/CJC-1295 blend targets general lean muscle growth and GH optimization through GHRH+ghrelin receptor dual activation. The Ipamorelin/Tesamorelin blend specifically combines Tesamorelin's documented visceral fat reduction activity with Ipamorelin's anabolic GH pulse, making it more relevant for research targeting body composition improvement alongside metabolic health." },
      { question: "What are the Cagri-Reta blends?", answer: "Cagri-Reta blends combine Cagrilintide (a long-acting amylin analogue that slows gastric emptying and reduces appetite) with Retatrutide (a triple GLP-1/GIP/glucagon receptor agonist). This combination targets appetite and fat loss through three distinct receptor systems simultaneously, representing one of the most mechanistically comprehensive weight loss stacks available." },
    ],
    sortOrder: 8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-10",
    name: "Supplies",
    slug: "supplies",
    icon: "Package2",
    color: "#6b7280",
    description: "Reconstitution supplies: bacteriostatic water for peptide research.",
    heroDescription: "Lyophilized peptides must be reconstituted with sterile bacteriostatic water before use. Phiogen offers pharmaceutical-grade bacteriostatic water and USP-grade bacteriostatic water in 30mL vials — the essential foundation for every peptide research protocol.",
    seoDescription: "Bacteriostatic water for peptide reconstitution — standard and USP-grade 30mL vials. Essential research supplies from Phiogen.",
    stats: [],
    content: `## Proper Preparation is Essential for Research Integrity

Research peptides are supplied as lyophilized (freeze-dried) powders that must be reconstituted with sterile diluent before use. The quality of reconstitution supplies directly affects peptide stability, solution sterility, and dosing accuracy.

## Bacteriostatic Water: The Essential Diluent

Bacteriostatic water (BAC water) is sterile water for injection containing 0.9% benzyl alcohol as a bacteriostatic preservative. Unlike plain sterile water, the benzyl alcohol prevents bacterial growth in the vial even after the seal is broken and the vial is entered multiple times.

Phiogen offers both standard Bacteriostatic Water 30mL and the higher-purity USP Bacteriostatic Water 30mL. The USP designation ensures conformance to United States Pharmacopeia standards for sterility, purity, and endotoxin content — the preferred choice for research protocols requiring maximum quality assurance.

### Storage After Reconstitution

Once reconstituted, peptide solutions should be stored at 2-8°C and protected from light. Most peptides remain stable for 4-6 weeks when properly reconstituted with BAC water and refrigerated.`,
    faq: [
      { question: "Why use bacteriostatic water instead of regular sterile water?", answer: "Plain sterile water must be used in a single dose once opened — without a preservative, any bacterial contamination from needle entry will proliferate rapidly. Bacteriostatic water's 0.9% benzyl alcohol prevents bacterial growth after multiple vial entries, allowing safe multi-dose use over 28 days — essential for research protocols using a single reconstituted vial across multiple sessions." },
      { question: "What is the difference between standard and USP bacteriostatic water?", answer: "USP (United States Pharmacopeia) bacteriostatic water meets additional pharmacopeial standards for sterility testing, endotoxin limits, and purity parameters versus standard bacteriostatic water. For research applications where maximum quality assurance is required, USP-grade is the preferred choice." },
    ],
    sortOrder: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
