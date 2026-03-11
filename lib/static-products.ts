// Static fallback data derived from pantheon_products.json
// Used when the database is not available (e.g., during build without DB)

export const AFFILIATE_URL = "https://pantheonpeptides.com/partner/AmentiAI/"

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function isBundle(name: string): boolean {
  return name.includes("+") || name.includes("Cycle")
}

const FEATURED_NAMES = new Set([
  "BPC-157",
  "TB-500",
  "Ipamorelin",
  "CJC-1295 + Ipamorelin",
  "Epithalon",
  "GHK-CU",
  "Semax",
  "Tirzepatide",
  "Wolverine Cycle",
  "Glow Plus Cycle",
])

type RawProduct = {
  name: string
  price: null
  product_url: string
  image_url: string | null
  description: string
  category: string
}

// Inline static product data from pantheon_products.json
const RAW_PRODUCTS: RawProduct[] = [
  { name: "BPC-157", price: null, product_url: "https://pantheonpeptides.com/product/bpc-157/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC-157-2mg-scaled.jpg", description: "Speeds tissue & muscle repair. Accelerates recovery from injuries. Improves blood circulation. Reduces inflammation. Supports gut health. Improves joint health & mobility. Enhances physical resilience. Supports brain and nerve regeneration.", category: "All Peptides, Skin/Tissue/Bone, Muscle Growth" },
  { name: "TB-500", price: null, product_url: "https://pantheonpeptides.com/product/tb-500/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/TD-500-2mg-scaled.jpg", description: "Muscle Recovery, Tissue Repair and Wound Healing, Reduced Inflammation, Improved Joint and Tendon Health, Increased Flexibility and Range of Motion.", category: "All Peptides, Muscle Growth, Skin/Tissue/Bone" },
  { name: "BPC-157 + TB-500", price: null, product_url: "https://pantheonpeptides.com/product/bpc-157-tb-500/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/BPC157TB500-5mg-scaled.jpg", description: "Accelerates Muscle Recovery, Tissue Repair and Wound Healing, Promotes Tendon and Ligament Healing, Supports Gut Health, Reduces Inflammation, Increased Flexibility and Range of Motion, Enhances Brain and Nerve Repair.", category: "All Peptides, Muscle Growth, Skin/Tissue/Bone" },
  { name: "Ipamorelin", price: null, product_url: "https://pantheonpeptides.com/product/ipamorelin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELIN-2mg-scaled.jpg", description: "Promotes Muscle Growth, Enhances Fat Loss, Accelerates tissue repair and regeneration, Improves Sleep Quality, Boosts Skin Elasticity.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "CJC-1295 (with DAC)", price: null, product_url: "https://pantheonpeptides.com/product/cjc-1295-with-dac/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/CJC1295-DAC-2mg-scaled.jpg", description: "Promotes lean muscle growth, Boosts metabolism, Accelerates recovery, Improves sleep quality, Anti-aging effects.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "CJC-1295 (without DAC)", price: null, product_url: "https://pantheonpeptides.com/product/cjc-1295-without-dac/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/CJC1295-2mg-scaled.jpg", description: "Promotes lean muscle growth, Accelerates recovery, Boosts metabolism, Improves sleep quality, Anti-aging effects.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "GHRP-2 (Acetate)", price: null, product_url: "https://pantheonpeptides.com/product/ghrp-2-acetate/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/GHRP-2-5mg-scaled.jpg", description: "Enhances muscle growth, accelerates recovery, supports fat loss by boosting metabolism, improves sleep quality, strengthens immune function.", category: "All Peptides, Muscle Growth" },
  { name: "Sermorelin Acetate", price: null, product_url: "https://pantheonpeptides.com/product/sermorelin-acetate/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/SERMORELIN-2mg-scaled.jpg", description: "Boosts muscle growth, Reduce body fat, Increases energy and vitality, Improves sleep quality, Supports anti-aging.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Tesamorelin", price: null, product_url: "https://pantheonpeptides.com/product/tesamorelin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/TESAMORELIN-2mg-scaled.jpg", description: "Reduces abdominal fat, enhances metabolic function, supports muscle maintenance, improves skin elasticity, enhance mental clarity.", category: "All Peptides, Weight Loss, Muscle Growth" },
  { name: "Retatrutide", price: null, product_url: "https://pantheonpeptides.com/product/retatrutide/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/08/Retatrutide-5mg-scaled.jpg", description: "Supports weight loss, helps preserve lean muscle, reduces food cravings, aids metabolic health, lowers blood pressure, improves blood sugar control.", category: "All Peptides, Weight Loss" },
  { name: "Tirzepatide", price: null, product_url: "https://pantheonpeptides.com/product/tirzeptide/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/TIRZEPTIDE-5mg-scaled.jpg", description: "Weight management, Diabetes control, Cardiovascular health, Improves insulin sensitivity, Supports metabolic health.", category: "All Peptides, Weight Loss" },
  { name: "Mazdutide", price: null, product_url: "https://pantheonpeptides.com/product/mazdutide/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/Mazdutide-5mg-1-scaled.jpg", description: "Promotes sustainable weight reduction. Curbs appetite and food cravings. Enhances metabolic efficiency and energy expenditure (GLP-1/glucagon dual action). Helps preserve lean muscle during fat loss.", category: "All Peptides, Weight Loss" },
  { name: "Cagrilintide", price: null, product_url: "https://pantheonpeptides.com/product/cagrilintide/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/Cagrilintide-5mg-scaled.jpg", description: "Supports sustainable weight loss, reduces appetite and food cravings, enhances metabolic efficiency, preserves muscle mass during fat loss.", category: "All Peptides, Weight Loss" },
  { name: "AOD9604", price: null, product_url: "https://pantheonpeptides.com/product/aod9604/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/10/AOD9604-2mg-scaled.jpg", description: "Reduces Abdominal Fat, Improves metabolism, Supports Joint and Cartilage Health.", category: "All Peptides, Weight Loss" },
  { name: "5-AMINO-1MQ", price: null, product_url: "https://pantheonpeptides.com/product/5-amino-1mq/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/10/5-AMINO-1MQ-5mg-scaled.jpg", description: "Promotes fat loss by increasing fat breakdown. Supports weight management by enhancing metabolism. Preserves lean muscle mass. Improves Insulin Sensitivity. Boosts cellular energy.", category: "All Peptides, Weight Loss" },
  { name: "MK-677 Oral (Capsules)", price: null, product_url: "https://pantheonpeptides.com/product/mk-677-capsules/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/12/MK-677-15mg-Oral-1.jpg", description: "Enhanced Muscle Growth and Recovery. Improved Bone Density. Better Sleep Quality. Fat Metabolism and Body Composition. Anti-Aging Benefits.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "PT-141 (Bremelanotide)", price: null, product_url: "https://pantheonpeptides.com/product/pt-141/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/PT141-10mg-scaled.jpg", description: "Enhances libido in men and women. Supports Treatment of Sexual Dysfunction, Non-vascular Mechanism, Improves Mood and Well-being.", category: "All Peptides, Libido" },
  { name: "Kisspeptin-10", price: null, product_url: "https://pantheonpeptides.com/product/kisspeptin-10/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/KISSPEPTINE-5mg-scaled.jpg", description: "Enhance libido, Enhances fertility in both men and women. Mood support due to hormone balance.", category: "All Peptides, Libido" },
  { name: "MT-2 (Melanotan 2 Acetate)", price: null, product_url: "https://pantheonpeptides.com/product/mt-2-melanotan-2-acetate/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/MT2-10mg-scaled.jpg", description: "Sunless skin tan by stimulating melanin production, reduce sunburn risk, enhance libido, support weight loss through appetite suppression, protect against UV damage.", category: "All Peptides, Libido, Skin/Tissue/Bone" },
  { name: "GHK-CU", price: null, product_url: "https://pantheonpeptides.com/product/ghk-cu/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/GHKCU-50mg-scaled.jpg", description: "Stimulates collagen production, Skin Regeneration and Wound Healing, Anti-Aging, Anti-Inflammatory and Antioxidant, Promotes Hair Growth, Protects against oxidative stress, Supports Brain Health, Improves nervous system health, Chronic Disease Management.", category: "All Peptides, Skin/Tissue/Bone, Anti-Aging" },
  { name: "Epithalon", price: null, product_url: "https://pantheonpeptides.com/product/epithalon/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/EPITALON-10mg-scaled.jpg", description: "Anti-aging benefits by stimulating telomerase, improvements to sleep quality, immune system support, antioxidant properties, potential cancer prevention capabilities.", category: "All Peptides, Anti-Aging" },
  { name: "MOTS-C", price: null, product_url: "https://pantheonpeptides.com/product/mots-c/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/MOTSC-10mg-scaled.jpg", description: "Enhances insulin sensitivity, Promotes glucose metabolism, Anti-inflammatory properties, Supports mitochondrial health, Slow down aging processes.", category: "All Peptides, Anti-Aging, Weight Loss" },
  { name: "Semax", price: null, product_url: "https://pantheonpeptides.com/product/semax/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/SEMAX-10mg-scaled.jpg", description: "Improves focus, memory, and mental clarity, Reduces mental fatigue, Neuroprotection and neuroregeneration, Antidepressant and anti-anxiety, Non-Stimulant.", category: "All Peptides, Brain/Nerve" },
  { name: "Selank", price: null, product_url: "https://pantheonpeptides.com/product/selank/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/SELANK-5mg-scaled.jpg", description: "Reduces Anxiety, Enhances Cognitive Function, Supports Mood Stabilization, Immune System Support, Improves Sleep.", category: "All Peptides, Brain/Nerve" },
  { name: "Selank + Semax", price: null, product_url: "https://pantheonpeptides.com/product/selank-semax/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/04/selank-semax-scaled.jpg", description: "Reduces anxiety and mood stabilization, Enhances overall cognitive function, Neuroprotection and neuroregeneration, Reduces mental fatigue, Improves Sleep, Boosts Immune Function.", category: "All Peptides, Brain/Nerve" },
  { name: "Cerebrolysin", price: null, product_url: "https://pantheonpeptides.com/product/cerebrolysin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/11/CEREBROLYSIN-60mg-scaled.jpg", description: "Enhances cognitive function, promotes growth and repair of neurons, supports recovery from brain injury, reduces neuroinflammation, boosts brain resilience and longevity.", category: "All Peptides, Brain/Nerve" },
  { name: "Thymosin Alpha-1", price: null, product_url: "https://pantheonpeptides.com/product/thymosin-alpha-1/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/THYMOSIN-ALPHA1-2mg-1-scaled.jpg", description: "Enhances immune function, Reduces chronic inflammation, Aids in recovery from illness, Increase infection resistance, Stimulates T-cell production, Improves outcomes in chronic conditions.", category: "All Peptides, Immunity" },
  { name: "Thymulin", price: null, product_url: "https://pantheonpeptides.com/product/thymulin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/THYMULIN-10mg-scaled.jpg", description: "Strengthen immune system, Anti-inflammatory effects, Supports autoimmune health, Improves infection resistance, Promotes tissue repair.", category: "All Peptides, Immunity" },
  { name: "LL-37", price: null, product_url: "https://pantheonpeptides.com/product/ll37/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/10/LL37-5mg-scaled.jpg", description: "Strengthens the immune system, Reduce chronic inflammation, Promotes wound healing, Supports gut health, Improves skin health.", category: "All Peptides, Immunity, Skin/Tissue/Bone" },
  { name: "DSIP (Delta Sleep-Inducing Peptide)", price: null, product_url: "https://pantheonpeptides.com/product/dsip-copy/", image_url: null, description: "Delta Sleep-Inducing Peptide.", category: "All Peptides, Sleep" },
  { name: "AICAR", price: null, product_url: "https://pantheonpeptides.com/product/aicar/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_09_14T03_02_18_646Z.png", description: "Enhances endurance, Improves cardiovascular health, Promotes weight management, Supports metabolic health, Boosts overall vitality.", category: "All Peptides, Muscle Growth, Weight Loss" },
  { name: "ACE-031", price: null, product_url: "https://pantheonpeptides.com/product/ace-031/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_09_14T03_02_12_168Z.png", description: "Promotes Muscle Growth, Enhances Muscle Recovery, Improves Bone Density, Reduces Fat Accumulation, Supports Physical Performance.", category: "All Peptides, Muscle Growth" },
  { name: "IGF-1LR3", price: null, product_url: "https://pantheonpeptides.com/product/igf-1lr3/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/image_2024_10_24T01_11_01_146Z.png", description: "Promotes muscle growth, Reduce body fat, Accelerates injury recovery, Improves bone density, Enhances cellular regeneration.", category: "All Peptides, Muscle Growth" },
  { name: "BPC-157 Oral (Tablets 500MCG)", price: null, product_url: "https://pantheonpeptides.com/product/bpc-157-oral/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/11/BPC-157-500mcg-Oral-1.jpg", description: "Accelerates Muscle Recovery, Promotes Tendon and Ligament Healing, Supports Gut Health, Reduces Inflammation, Enhances Brain and Nerve Repair.", category: "All Peptides, Skin/Tissue/Bone, Muscle Growth" },
  { name: "Epithalon + 5-Amino-1MQ", price: null, product_url: "https://pantheonpeptides.com/product/epithalon5-amino-1mq/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/Epithalon-10ml5-Amino-1mq-5ml-scaled.jpg", description: "Cellular Longevity & Repair, Metabolic Boost, Synergistic Anti-Aging, Cognitive Support, Enhanced Mitochondrial Function, Potential Longevity Benefits.", category: "All Peptides, Anti-Aging, Weight Loss" },
  { name: "Ipamorelin + Sermorelin", price: null, product_url: "https://pantheonpeptides.com/product/ipamorelin-sermorelin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELINSERMORELIN-scaled.jpg", description: "Promotes muscle growth, enhancing fat loss, and accelerating recovery from exercise or injury. Supports better sleep, improves skin elasticity, and aids in overall tissue repair.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "CJC-1295 + Ipamorelin", price: null, product_url: "https://pantheonpeptides.com/product/cjc-1295-ipamorelin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/CJC1295IPAMORELIN-scaled.jpg", description: "Boost growth hormone secretion, promoting muscle growth, fat loss, and improved recovery. Supports collagen production, enhances skin health, and may improve sleep quality.", category: "All Peptides, Muscle Growth, Anti-Aging" },
  { name: "Tesamorelin + CJC-1295 + Ipamorelin", price: null, product_url: "https://pantheonpeptides.com/product/tesamorelin-cjc-1295-ipamorelin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/TESAMORELINCJC1295IPAMORELIN-scaled.jpg", description: "Stimulates release of growth hormone, particularly effective in reducing abdominal fat, improving metabolism, and enhancing muscle mass.", category: "All Peptides, Muscle Growth, Weight Loss" },
  { name: "Ipamorelin + Tesamorelin", price: null, product_url: "https://pantheonpeptides.com/product/ipamorelin-tesamorelin/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELINTESAMORELIN-scaled.jpg", description: "Promotes muscle growth, Enhances fat loss, Accelerates tissue repair and regeneration, Improves Sleep Quality, Boosts Skin Elasticity, Reduces abdominal fat, Enhances metabolic function, Enhance mental clarity.", category: "All Peptides, Muscle Growth, Weight Loss" },
  { name: "CJC-1295 + GHRP-2", price: null, product_url: "https://pantheonpeptides.com/product/cjc-1295-ghrp-2/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/CJC1295GHRP2-scaled.jpg", description: "Boosts growth hormone secretion, promotes muscle growth, fat loss, and improved recovery. Supports collagen production, enhances skin health, and may improve sleep quality.", category: "All Peptides, Muscle Growth" },
  { name: "Sermorelin + GHRP-2", price: null, product_url: "https://pantheonpeptides.com/product/sermorelin-ghrp-2/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/SERMORELINGHRP2-scaled.jpg", description: "Enhances muscle growth, accelerates recovery, supports fat loss by boosting metabolism, improves sleep quality, strengthens immune function.", category: "All Peptides, Muscle Growth" },
  { name: "Ipamorelin + CJC-1295 + GHRP-2", price: null, product_url: "https://pantheonpeptides.com/product/ipamorelin-cjc-1295-ghrp-2/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2024/09/IPAMORELINCJC1295GHRP2-scaled.jpg", description: "Stimulates the release of growth hormone, promoting muscle growth, enhancing fat loss, and accelerating recovery from exercise or injury.", category: "All Peptides, Muscle Growth" },
  { name: "Bacteriostatic Water", price: null, product_url: "https://pantheonpeptides.com/product/bacteriostatic-water/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/BAC-10ml-1-scaled.jpg", description: "Sterile & non-pyrogenic ensuring purity. Contains 0.9% benzyl alcohol to prevent bacterial growth. Extended shelf life for multiple uses after opening. Ideal for peptide reconstitution.", category: "Supplies" },
  { name: "Injection Syringes", price: null, product_url: "https://pantheonpeptides.com/product/injection-syringes/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/Sterile-Disposable-Injection-Syringes-4-scaled.jpg", description: "Ultra-thin needle (1ml - 31G - 8mm). Sterile & Individually wrapped. Ideal for Peptides. Disposable.", category: "Supplies" },
  { name: "Reconstitution Syringes", price: null, product_url: "https://pantheonpeptides.com/product/reconstitution-syringes/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/syringes-3ml-21g-1-reconstitution-scaled.jpg", description: "3mL - 21G x 1\" Medical-grade (Sterile). Individually wrapped. Ideal for Peptides Reconstitution. Disposable.", category: "Supplies" },
  { name: "Alcohol Pads", price: null, product_url: "https://pantheonpeptides.com/product/alcohol-pads/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/alcohal-pads-scaled.jpg", description: "70% Isopropyl Alcohol. 100 pads per box. For cleaning injection sites. For cleaning vials.", category: "Supplies" },
  { name: "Syringe Tips (Vial Vent)", price: null, product_url: "https://pantheonpeptides.com/product/syringe-tips/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/Valves-Needles-scaled.jpg", description: "27G-0.5\" Syringe tips Medical-grade (sterile). Functions as a vent to release pressure in vials. Individually bagged.", category: "Supplies" },
  { name: "Starter Kit", price: null, product_url: "https://pantheonpeptides.com/product/starter-kit/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/03/starter-kit-scaled.jpg", description: "Contains: 2 Bacteriostatic Water Vials (10ml), 30 Injection Syringes (1ml – 8mm), 5 Reconstitution Syringes (3ml – 1\"), 5 Syringe Tips (Vent for Reconstitution - 0.5\"), 1 Box Alcohol Pads (x100).", category: "Supplies" },
  { name: "Wolverine Cycle", price: null, product_url: "https://pantheonpeptides.com/product/wolverine-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/09/WOLVERINE-MAIN3.jpg", description: "FAST HEALING, RECOVERY, AND PERFORMANCE. Accelerates Muscle Growth and Recovery. Tissue Repair and Wound Healing. Promotes Tendon and Ligament Healing.", category: "Peptides Cycles, Peptides Bundles" },
  { name: "Eros Stamina Cycle", price: null, product_url: "https://pantheonpeptides.com/product/eros-stamina-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/09/EROS-CYCLE-MAIN5.jpg", description: "Restore sexual health through enhanced libido, hormone support, improved blood flow, erectile performance enhancement, and better sleep quality.", category: "Peptides Cycles, Peptides Bundles, Libido" },
  { name: "T-Force Immunity Cycle", price: null, product_url: "https://pantheonpeptides.com/product/t-force-immunity-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2026/01/T-FORCE-3-Main5.jpg", description: "Supports immunity, accelerates recovery, and optimizes sleep. Boosts viral and bacterial immunity, supports immune readiness and response, enhances T-cell activity and immune surveillance.", category: "Peptides Cycles, Peptides Bundles, Immunity" },
  { name: "T-Force Immunity Plus Cycle", price: null, product_url: "https://pantheonpeptides.com/product/t-force-immunity-plus-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2026/01/T-FORCE-PLUS-Main-8.jpg", description: "Advanced cycle for deep, sustained immune resilience. Dual thymic peptides: Thymosin Alpha-1 + Thymulin. Supports immune signaling, regulation, and resilience.", category: "Peptides Cycles, Peptides Bundles, Immunity" },
  { name: "Alpha Mind Cycle", price: null, product_url: "https://pantheonpeptides.com/product/alpha-mind-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2026/01/ALPHAMIND-CYCLE-MAIN2.jpg", description: "Advanced cognitive support for Alzheimer's, Dementia, Stroke and Brain Injury. Enhances neurogenesis and synaptic plasticity. Stimulates brain-derived growth factors. Supports telomere health and longevity signaling.", category: "Peptides Cycles, Peptides Bundles, Brain/Nerve" },
  { name: "Nova Mind Cycle", price: null, product_url: "https://pantheonpeptides.com/product/nova-mind-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/09/NOVAMIND-10-WEEK-CYCLE-MAIN.jpg", description: "Brain optimization, emotional balance, & cognitive resilience. Promotes calm, reduces anxiety, enhances focus and mental clarity, supports memory and learning, neuroprotection, restores sleep quality.", category: "Peptides Cycles, Peptides Bundles, Brain/Nerve" },
  { name: "Glow Cycle", price: null, product_url: "https://pantheonpeptides.com/product/glow-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/12/GLOW-CYCLE-MAIN2.jpg", description: "Regenerative formula for skin, hair, & connective tissue. Boosts collagen production, supports skin regeneration, enhances hair thickness and shine, and strengthens joints and tissues.", category: "Peptides Cycles, Peptides Bundles, Skin/Tissue/Bone" },
  { name: "Glow Plus Cycle", price: null, product_url: "https://pantheonpeptides.com/product/glow-plus-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/09/GLOWPLUS-CYCLE-MAIN5.jpg", description: "Anti-aging program for skin, hair, and total body rejuvenation. Boosts collagen production, supports skin regeneration, enhances hair thickness, promotes cellular health and cognitive function.", category: "Peptides Cycles, Peptides Bundles, Skin/Tissue/Bone, Anti-Aging" },
  { name: "Prime Metabolic 6-Week Cycle", price: null, product_url: "https://pantheonpeptides.com/product/prime-metabolic-6-week-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/Prime-Metabolic-6-Week-Cycle-Main7.jpg", description: "TOTAL METABOLIC SUPPORT FOR ENERGY, WEIGHT LOSS, AND RECOVERY. Promotes Metabolic Efficiency. Boosts Cellular Energy. Supports Sustained Weight Loss. Strengthens Tissue Repair & Resilience.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
  { name: "Prime Metabolic 12-Week Cycle", price: null, product_url: "https://pantheonpeptides.com/product/prime-metabolic-12-week-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/PRIME-METABOLIC-CYCLE-MAIN5.jpg", description: "Total metabolic support for energy, weight loss, recovery, & body composition. Promotes metabolic efficiency, boosts cellular energy, supports sustained weight loss, and strengthens tissue repair.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
  { name: "Slim Peptides Cycle", price: null, product_url: "https://pantheonpeptides.com/product/slim-peptides-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/SLIMPEPTIDES-Main6.jpg", description: "Drives effective fat loss. Tames hunger and reduces cravings. Improves insulin sensitivity and glucose regulation. Boosts energy and cellular performance.", category: "Peptides Cycles, Peptides Bundles, Weight Loss" },
  { name: "Stack Up 10-Week Cycle", price: null, product_url: "https://pantheonpeptides.com/product/stack-up-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/stack-up-main2.jpg", description: "Builds and preserves lean muscle. Burns fat and supports muscle definition. Supports deep sleep and improves recovery. Boosts vitality and cellular energy. Promotes natural growth hormone release.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth" },
  { name: "Stack Up 5-Week Cycle", price: null, product_url: "https://pantheonpeptides.com/product/stack-up-5-week-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/stack-up-5-week-main.jpg", description: "Builds and preserves lean muscle. Burns fat and supports muscle definition. Supports deep sleep and improves recovery. Boosts vitality and cellular energy. Promotes natural growth hormone release.", category: "Peptides Cycles, Peptides Bundles, Muscle Growth" },
  { name: "Kiss Peptides Cycle", price: null, product_url: "https://pantheonpeptides.com/product/kiss-peptides-cycle/", image_url: "https://pantheonpeptides.com/wp-content/uploads/2025/10/KISS-PEPTIDES-MAIN2.jpg", description: "Enhances libido & deepens sexual intimacy for her and him. Enhances libido, increases sexual desire through brain pathways, enhances erectile function, promotes healthy reproductive hormone balancing, enhances blood flow, supports natural testosterone production.", category: "Peptides Cycles, Peptides Bundles, Libido" },
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
  const slug = generateSlug(p.name)
  const cats = p.category.split(",").map((c) => c.trim()).filter((c) => c !== "All Peptides")
  const descParts = p.description.split(".")
  const shortDescription = descParts[0] ? descParts[0].trim() + "." : p.description.slice(0, 120) + "..."

  return {
    id: `static-${slug}`,
    name: p.name,
    slug,
    price: null,
    priceFormatted: null,
    imageUrl: p.image_url,
    productUrl: AFFILIATE_URL,
    description: p.description,
    shortDescription,
    categories: cats,
    isFeatured: FEATURED_NAMES.has(p.name),
    badge: null,
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
    seoDescription: "Buy muscle growth peptides — Ipamorelin, CJC-1295, BPC-157, GHRP-2, IGF-1LR3, ACE-031, TB-500. Boost lean mass, accelerate recovery, and optimize GH levels from Pantheon Peptides.",
    stats: [],
    content: `## The Science of Peptide-Driven Muscle Growth

Skeletal muscle development depends on an intricate signaling cascade anchored by growth hormone (GH) and insulin-like growth factor 1 (IGF-1). As GH declines with age — beginning as early as the mid-20s at roughly 14% per decade — lean muscle mass erodes while body fat accumulates in its place. Research peptides targeting the GH axis offer a precise, receptor-level approach to restoring youthful hormonal signaling without exogenous hormones.

## Growth Hormone Secretagogues

Growth hormone secretagogues (GHS) are the foundation of any peptide-based muscle-building protocol. They act on two complementary receptor pathways to amplify pulsatile GH release from the anterior pituitary gland.

### GHRH Analogues

CJC-1295 (with and without DAC), Sermorelin Acetate, and Tesamorelin mimic growth hormone-releasing hormone (GHRH). They bind to GHRH receptors on somatotroph cells, increasing both the amplitude and frequency of natural GH pulses. CJC-1295 with Drug Affinity Complex (DAC) extends the half-life to 6-8 days by binding to albumin, providing sustained baseline GH elevation. Sermorelin offers a shorter, more physiological pulse pattern preferred in some research protocols.

### Ghrelin Mimetics

Ipamorelin, GHRP-2, and MK-677 (Ibutamoren) act on the ghrelin receptor (GHSR-1a) to trigger a complementary GH pulse. Ipamorelin is the most selective of this class — it stimulates GH release with minimal cortisol or prolactin elevation, making it valuable for research requiring clean GH stimulation. GHRP-2 produces a stronger GH spike and simultaneously stimulates appetite, making it well-suited for mass-building research phases. MK-677 is an oral ghrelin mimetic that provides sustained 24-hour GH and IGF-1 elevation, along with documented improvements in sleep architecture.

### IGF-1 Pathway Peptides

IGF-1 LR3 is a long-acting analogue of insulin-like growth factor 1 that bypasses hepatic clearance to act directly on peripheral muscle tissue. It promotes satellite cell activation, myofibril hypertrophy, and cellular nutrient uptake at concentrations relevant to research models. ACE-031 inhibits myostatin — the primary biological brake on muscle growth — by competitively binding activin receptors, enabling muscle development beyond normal genetic thresholds in preclinical studies.

## Recovery Support Peptides

Muscle hypertrophy requires efficient repair of training-induced micro-damage. BPC-157 (Body Protection Compound) has demonstrated accelerated tendon-to-bone healing, reduced inflammatory cytokine expression, and enhanced angiogenesis in multiple animal models. TB-500 (Thymosin Beta-4) promotes actin polymerization, reduces oxidative stress, and has shown systemic tissue repair effects across diverse injury models. The BPC-157 and TB-500 combination is among the most referenced repair stacks in the research literature.

## Choosing the Right Protocol

For research purposes, secretagogue combinations consistently outperform single-agent protocols. Pairing a GHRH analogue with a ghrelin mimetic produces synergistic GH release — research suggests the combination can be 4 to 6 times more effective than either compound alone. BPC-157 and TB-500 are frequently co-administered to support connective tissue integrity during high-intensity training protocols. Pre-built options like the Stack Up Cycle combine these synergies into a structured research framework.`,
    faq: [
      { question: "What are the best peptides for muscle growth research?", answer: "The most studied peptides for lean muscle include Ipamorelin, CJC-1295, GHRP-2, Sermorelin, IGF-1 LR3, and MK-677. Combining a GHRH analogue with a ghrelin mimetic produces synergistic GH release significantly greater than either compound alone, which is why CJC-1295 + Ipamorelin is one of the most widely researched stacks." },
      { question: "How do GH secretagogues differ from exogenous HGH?", answer: "GH secretagogues stimulate the pituitary gland to release the body's own growth hormone in natural pulsatile bursts, preserving the feedback loop that prevents excess GH accumulation. Exogenous HGH bypasses this regulation entirely. Secretagogues are generally studied for their more physiological GH profiles and lower risk of receptor downregulation." },
      { question: "How long before muscle growth peptides show effects in animal research?", answer: "In rodent models, measurable increases in lean body mass have been documented within 4-8 weeks of consistent GH secretagogue administration. IGF-1 LR3 studies show acute myogenic signaling changes within 24-72 hours at the cellular level. These timelines may not translate directly to human applications, which are not established for research compounds." },
      { question: "Can muscle growth peptides be combined in research stacks?", answer: "Yes, combination protocols are standard in the research literature. The CJC-1295 + Ipamorelin stack is among the most studied. Adding BPC-157 or TB-500 addresses the recovery and connective tissue repair component, which is critical to sustainable muscle remodeling. The Ipamorelin + CJC-1295 + GHRP-2 triple combination is also documented in research settings." },
      { question: "What is ACE-031 and how does it affect muscle growth?", answer: "ACE-031 is a recombinant fusion protein that inhibits myostatin and activin, two proteins that act as biological brakes on skeletal muscle growth. In preclinical studies, it produced significant increases in muscle mass independent of GH signaling, representing a distinct and complementary mechanism to secretagogues." },
      { question: "Are research peptides legal to purchase?", answer: "Research peptides are legally sold for laboratory and in-vitro scientific research in many jurisdictions. They are not approved for human consumption by regulatory agencies and are not classified as controlled substances in most countries. Always verify the regulations in your specific region before purchasing." },
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
    heroDescription: "BPC-157 and TB-500 are the most studied peptides for tissue repair — individually powerful, together one of the most referenced healing stacks in all of peptide research. BPC-157 drives angiogenesis and GH receptor upregulation at injury sites while TB-500 promotes the cell migration and actin polymerization needed to rebuild damaged tissue. Together they address every phase of healing: inflammation resolution, cellular proliferation, and extracellular matrix remodeling.",
    seoDescription: "Buy recovery peptides — BPC-157 (tendon, gut, nerve repair), TB-500 (systemic muscle healing), BPC-157 + TB-500 stack. The best healing peptides for injury recovery from Pantheon Peptides.",
    stats: [],
    content: `## Peptide Science for Tissue Repair and Recovery

Recovery is where adaptation happens. Whether the context is musculoskeletal injury, surgical healing, or the cumulative microtrauma of intensive training, the speed and quality of tissue repair directly determine long-term function and resilience. Research peptides in this category work at the molecular level to accelerate the three overlapping phases of healing: inflammation resolution, cellular proliferation, and tissue remodeling.

## BPC-157: Body Protection Compound

BPC-157 is a 15-amino acid peptide sequence derived from a protein found naturally in gastric juice. It has been studied across dozens of animal models covering tendon, ligament, muscle, bone, gut, and neurological tissue repair.

### Key Mechanisms

BPC-157 upregulates growth hormone receptors in healing tissue, amplifying local GH responsiveness independent of systemic GH levels. It promotes angiogenesis — the formation of new blood vessels — which is essential for delivering oxygen and nutrients to damaged tissue. BPC-157 also modulates the nitric oxide system, reducing ischemic injury, and has demonstrated anti-inflammatory activity by downregulating pro-inflammatory cytokines including TNF-alpha and IL-6.

In tendon repair models, BPC-157 significantly accelerated the maturation of collagen fibers and restoration of biomechanical tensile strength. Studies on gut permeability show it can heal intestinal lesions and protect against NSAID-induced gastric damage, suggesting systemic protective properties beyond musculoskeletal applications.

## TB-500: Thymosin Beta-4

TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring 43-amino acid peptide present in virtually all human tissues at low concentrations but upregulated dramatically at wound sites.

### Key Mechanisms

TB-500 promotes actin polymerization — the cellular process that drives cell migration, a fundamental requirement for wound closure. It activates the AKT signaling pathway, stimulating cell survival and differentiation. Research has shown TB-500 to reduce inflammation, decrease oxidative damage, promote angiogenesis, and improve cardiac recovery following ischemic injury in rodent models.

Unlike BPC-157, which has stronger gut and localized tendon repair effects, TB-500 is particularly notable for its systemic distribution and effects on cardiac and neural tissue repair. The two peptides are frequently studied in combination for their complementary mechanisms.

## BPC-157 + TB-500 Combination

The combined protocol has become the most referenced repair stack in peptide research. The synergy is mechanistic: BPC-157 drives local angiogenesis and receptor upregulation while TB-500 promotes the cell migration needed to populate new vasculature with regenerative cells. Multiple animal studies suggest superior healing outcomes with the combination compared to either compound alone.

## BPC-157 Oral Form

Oral BPC-157 tablets offer a gastrointestinal delivery route that may be particularly relevant for gut health, leaky gut, and systemic inflammatory conditions. Research suggests BPC-157 retains bioactivity when administered orally, though injectable forms are used in most musculoskeletal studies.

## Choosing a Recovery Peptide

For acute musculoskeletal injury research, the injectable BPC-157 + TB-500 combination is the most studied protocol. For gut health and systemic inflammation, oral BPC-157 is frequently referenced. For systemic and cardiac tissue studies, TB-500 alone or with BPC-157 is the standard. The Wolverine Cycle pre-packages this synergy into a structured research cycle.`,
    faq: [
      { question: "How does BPC-157 accelerate tissue repair?", answer: "BPC-157 works through multiple mechanisms: it upregulates GH receptors in local tissue, promotes angiogenesis (new blood vessel formation), modulates the nitric oxide system to reduce ischemia, and downregulates pro-inflammatory cytokines like TNF-alpha and IL-6. In research models, it has shown accelerated healing of tendons, ligaments, muscles, and gut tissue." },
      { question: "What is the difference between BPC-157 and TB-500?", answer: "BPC-157 excels in localized tendon, ligament, gut, and musculoskeletal repair through GH receptor upregulation and angiogenesis. TB-500 is more systemically distributed and particularly effective for cardiac and neural tissue recovery through actin polymerization and AKT pathway activation. The two compounds have complementary mechanisms and are often studied together." },
      { question: "What is the BPC-157 + TB-500 combination used for in research?", answer: "The combination is one of the most studied repair protocols in peptide research. It provides complementary mechanisms: BPC-157 drives local vascularization and growth factor receptor expression while TB-500 promotes the cell migration needed to populate healing tissue. Research suggests superior outcomes with the combination versus either compound alone." },
      { question: "Can BPC-157 be taken orally?", answer: "Yes. Oral BPC-157 tablets have been studied for gastrointestinal applications including leaky gut, gastric lesions, and systemic inflammatory conditions. Research suggests BPC-157 retains meaningful bioactivity when administered orally, though injectable forms are standard in most musculoskeletal healing studies." },
      { question: "How long does BPC-157 take to show effects in research?", answer: "In animal tendon and ligament studies, measurable improvements in collagen maturation and tissue tensile strength have been documented within 7-14 days of daily administration. Gut healing studies have shown protective effects within 24-48 hours in acute damage models. Research timeframes may not translate directly to human applications." },
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
    heroDescription: "Epithalon activates telomerase to rebuild telomere length. GHK-Cu modulates over 4,000 genes toward repair and rejuvenation. MOTS-C restores mitochondrial signaling and metabolic youth. These peptides target the molecular hallmarks of aging — telomere attrition, mitochondrial dysfunction, and declining gene expression — in ways that no single supplement or lifestyle intervention can match.",
    seoDescription: "Buy anti-aging peptides — Epithalon (telomerase, melatonin), GHK-Cu (collagen, 4000+ genes), MOTS-C (mitochondria, AMPK), Sermorelin (GH restoration). Longevity peptides from Pantheon Peptides.",
    stats: [],
    content: `## The Molecular Hallmarks of Aging

Modern longevity science identifies nine overlapping hallmarks of biological aging: genomic instability, telomere attrition, epigenetic alterations, loss of proteostasis, deregulated nutrient sensing, mitochondrial dysfunction, cellular senescence, stem cell exhaustion, and altered intercellular communication. Research peptides in the anti-aging category target several of these hallmarks simultaneously, offering a multi-mechanism approach to slowing or partially reversing cellular aging.

## Epithalon: The Telomerase Activator

Epithalon (Epitalon) is a tetrapeptide — Ala-Glu-Asp-Gly — originally derived from the pineal gland extract Epithalamin by Russian longevity researcher Vladimir Khavinson. It is one of the most studied peptides for direct intervention in the aging process.

### Telomere Biology

Telomeres are protective caps on chromosome ends that shorten with each cell division. When telomeres reach a critical minimum length, the cell enters senescence or apoptosis. Telomerase is the enzyme that rebuilds telomere length, but it is suppressed in most adult somatic cells. Epithalon has been shown in multiple studies to activate telomerase expression, enable cells to rebuild telomere length, and extend the replicative lifespan of cultured human cells beyond the Hayflick limit.

### Melatonin Restoration

Epithalon also stimulates the pineal gland to restore melatonin secretion toward youthful levels. Since melatonin declines dramatically with age and serves as both a master antioxidant and circadian regulator, this effect has broad systemic implications for sleep quality, immune function, and oxidative stress management.

### Research Highlights

In long-term animal studies, Epithalon reduced the incidence of spontaneous tumors, improved immune function, and extended median lifespan by 13-34% depending on the model. In elderly human subjects, it restored near-normal melatonin rhythms and improved sleep quality markers.

## GHK-Cu: The Gene Expression Peptide

GHK-Cu (Copper Peptide GHK) is a naturally occurring tripeptide that declines sharply from 200 ng/mL in young adults to below 80 ng/mL in the elderly. It has been identified as a master regulator of gene expression — research by Loren Pickart and colleagues identified over 4,000 genes modulated by GHK-Cu, with the majority shifted toward tissue repair, anti-inflammatory, and antioxidant pathways.

GHK-Cu stimulates collagen, elastin, and glycosaminoglycan synthesis; activates antioxidant enzymes SOD1 and SOD2; promotes nerve growth factor (NGF) and BDNF expression; and downregulates genes associated with cancer-promoting and inflammatory pathways. It is studied for skin regeneration, wound healing, hair growth, and systemic anti-aging applications.

## MOTS-C: Mitochondrial Peptide

MOTS-C is encoded within the mitochondrial genome itself — a peptide derived from the 12S rRNA gene. It acts as a mitochondria-to-nucleus signaling molecule that activates AMPK, upregulates antioxidant response pathways (via Nrf2), and improves insulin sensitivity and glucose metabolism. In aging animal models, MOTS-C administration restored the metabolic phenotype of old mice toward that of young mice, with improvements in exercise capacity, insulin sensitivity, and inflammatory markers.

## Growth Hormone Restoration

Age-related GH decline (somatopause) contributes significantly to increased adiposity, reduced lean mass, declining skin integrity, and impaired immune function. Sermorelin, CJC-1295, and Ipamorelin all restore youthful GH pulsatility and its downstream IGF-1 signaling. MK-677 provides oral GH restoration with documented improvements in body composition and bone density over 12-month research periods.

## The Epithalon + 5-Amino-1MQ Combination

This combination pairs telomere restoration with metabolic rejuvenation. 5-Amino-1MQ inhibits NNMT (nicotinamide N-methyltransferase), an enzyme overexpressed in adipose tissue and associated with metabolic aging. By inhibiting NNMT, 5-Amino-1MQ raises NAD+ availability and activates SIRT1 pathways, synergizing with Epithalon's genomic repair mechanisms.`,
    faq: [
      { question: "How does Epithalon extend cellular lifespan in research?", answer: "Epithalon activates telomerase — the enzyme that rebuilds telomere length — in somatic cells that normally suppress it. By enabling cells to maintain longer telomeres across divisions, research studies have shown it can extend the replicative lifespan of human cells beyond the Hayflick limit and extend median lifespan in multiple animal models by 13-34%." },
      { question: "What does GHK-Cu do at the gene level?", answer: "Research by Loren Pickart identified over 4,000 human genes modulated by GHK-Cu, with the majority shifted toward tissue repair, antioxidant defense, anti-inflammatory signaling, and anti-cancer pathways. It stimulates collagen and elastin production, activates superoxide dismutase, and promotes nerve growth factor expression — making it one of the most broadly active peptides in aging research." },
      { question: "What is MOTS-C and how does it relate to aging?", answer: "MOTS-C is a peptide encoded within the mitochondrial genome itself. It acts as a retrograde signaling molecule from mitochondria to the nucleus, activating AMPK and Nrf2 pathways to improve insulin sensitivity, reduce oxidative stress, and restore metabolic function. In aging animal models it reversed metabolic dysfunction associated with aging." },
      { question: "Can anti-aging peptides be stacked for greater effect?", answer: "Yes. The Epithalon + 5-Amino-1MQ combination is a documented research stack that pairs telomere restoration with NAD+ pathway activation. Adding GHK-Cu addresses gene expression and collagen synthesis. MOTS-C adds metabolic and mitochondrial support. GH secretagogues complete the protocol by restoring systemic hormonal signaling." },
      { question: "How does the Glow Plus Cycle relate to anti-aging?", answer: "The Glow Plus Cycle combines skin and tissue regeneration peptides with broader anti-aging compounds, targeting collagen production, cellular longevity, and hair and skin health simultaneously. It is designed as a comprehensive rejuvenation protocol rather than a single-mechanism approach." },
      { question: "Are there human clinical trials for anti-aging peptides?", answer: "Epithalon has been studied in human subjects in Russian research programs, with documented improvements in melatonin rhythms and immune function in elderly populations. GHK-Cu has been studied in wound healing and skin aging contexts. Most other peptides in this category remain in preclinical research stages outside of specific approved applications." },
    ],
    sortOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-4",
    name: "Weight Loss",
    slug: "weight-loss",
    icon: "Flame",
    color: "#ea580c",
    description: "Peptides that support fat metabolism, reduce appetite, and improve body composition.",
    heroDescription: "Tirzepatide, Retatrutide, Mazdutide, and Cagrilintide represent the cutting edge of metabolic peptide research — with clinical trials documenting weight reductions of 20-24% that were unthinkable a decade ago. These GLP-1, GIP, and glucagon receptor agonists work at the hormonal root of weight regulation rather than simply suppressing appetite. AOD9604 and 5-Amino-1MQ add targeted lipolysis and NNMT inhibition to the arsenal.",
    seoDescription: "Buy weight loss peptides — Tirzepatide (GLP-1/GIP dual agonist), Retatrutide (triple agonist), AOD9604 (fat metabolism), Cagrilintide, Mazdutide, 5-Amino-1MQ. Fat loss peptides from Pantheon Peptides.",
    stats: [],
    content: `## The Peptide Revolution in Metabolic Research

The last decade has produced a transformation in how science understands weight regulation. Rather than viewing obesity as a failure of willpower, researchers now understand it as a dysregulation of hormonal signaling — specifically the gut-brain peptide axis that governs hunger, satiety, energy expenditure, and glucose metabolism. Research peptides targeting this axis represent the most significant advance in metabolic science in a generation.

## GLP-1 and Dual/Triple Receptor Agonists

Glucagon-like peptide-1 (GLP-1) is a hormone produced in the gut after eating. It signals satiety to the hypothalamus, slows gastric emptying, stimulates insulin secretion, and reduces glucagon release. Research peptides that mimic or enhance GLP-1 activity have demonstrated remarkable fat loss and metabolic improvement in clinical and preclinical studies.

### Tirzepatide

Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist. By targeting both incretin receptors simultaneously, it produces greater weight loss than GLP-1 alone — Phase 3 clinical trials documented average weight reductions of 20-22.5% in subjects with obesity over 72 weeks. It also significantly improves insulin sensitivity, HbA1c, cardiovascular risk markers, and blood pressure.

### Retatrutide

Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. Adding glucagon receptor activity increases energy expenditure and hepatic fat breakdown beyond what dual agonists achieve. Phase 2 trials documented average weight reductions of 24.2% at 48 weeks — among the highest ever recorded for a pharmacological weight loss agent.

### Mazdutide and Cagrilintide

Mazdutide is a GLP-1/glucagon dual agonist that promotes sustainable fat reduction while preserving lean muscle mass. Cagrilintide is an amylin analogue — amylin is a pancreatic hormone that works synergistically with GLP-1 to reduce food intake and slow gastric emptying. When combined with GLP-1 agents, cagrilintide produces additive weight loss beyond either compound alone.

## AOD9604: The Growth Hormone Fragment

AOD9604 is a peptide fragment of the growth hormone molecule (amino acids 177-191) that retains GH's lipolytic properties without its anabolic or diabetogenic effects. It stimulates lipolysis (fat breakdown) and inhibits lipogenesis (fat storage) by activating beta-3 adrenergic receptors in adipose tissue. Preclinical studies showed preferential reduction of visceral and abdominal fat with preservation of lean mass.

## 5-Amino-1MQ: NNMT Inhibition

5-Amino-1MQ inhibits NNMT (nicotinamide N-methyltransferase), an enzyme overexpressed in adipose tissue that suppresses NAD+ availability and blunts SIRT1 activity. By inhibiting NNMT, 5-Amino-1MQ raises intracellular NAD+, activates SIRT1 and AMPK pathways, and shifts adipocytes from energy storage toward energy expenditure. Research in diet-induced obese mice showed significant reductions in fat mass without changes in food intake — suggesting a primarily metabolic mechanism.

## AICAR: AMPK Activation

AICAR (5-aminoimidazole-4-carboxamide ribonucleoside) activates AMP-activated protein kinase (AMPK) — the master metabolic regulator that mimics the cellular effects of exercise and caloric restriction. It improves insulin sensitivity, increases fatty acid oxidation, and has been shown to improve endurance capacity in animal models independent of training.

## MOTS-C and Tesamorelin

MOTS-C improves insulin sensitivity and glucose metabolism through mitochondrial signaling, while Tesamorelin specifically targets visceral adiposity by restoring GH pulsatility — it is the only GH secretagogue with documented clinical data specifically showing visceral fat reduction.`,
    faq: [
      { question: "How does Tirzepatide produce such large weight reductions?", answer: "Tirzepatide's dual GIP and GLP-1 receptor agonism produces synergistic effects beyond either pathway alone. GLP-1 reduces appetite and slows gastric emptying. GIP enhances insulin sensitivity and energy expenditure. Together they reduce caloric intake significantly while improving how the body processes and stores energy, resulting in clinical trial weight reductions averaging 20-22.5%." },
      { question: "What makes Retatrutide different from Tirzepatide?", answer: "Retatrutide adds glucagon receptor agonism to the GLP-1 and GIP activity found in Tirzepatide. Glucagon receptor activation increases energy expenditure and promotes hepatic fat breakdown. This triple mechanism produced average weight reductions of 24.2% in Phase 2 trials — greater than any dual-agonist compound tested to date." },
      { question: "Which weight loss peptide is best for preserving lean muscle?", answer: "AOD9604 specifically promotes fat breakdown with minimal effect on lean mass. Mazdutide and Cagrilintide have been studied for muscle mass preservation during caloric deficit. 5-Amino-1MQ works through a purely metabolic mechanism without caloric restriction, also preserving lean tissue. GLP-1 agonists can cause some lean mass loss without concurrent resistance training protocols." },
      { question: "How does AOD9604 differ from growth hormone?", answer: "AOD9604 is a fragment of the GH molecule (amino acids 177-191) that retains the lipolytic effects of GH without its growth-promoting or insulin-desensitizing properties. It activates beta-3 adrenergic receptors in fat tissue rather than the full GH receptor, making it a targeted fat-loss agent rather than a systemic anabolic compound." },
      { question: "Can weight loss peptides be stacked?", answer: "Yes. The Slim Peptides Cycle and Prime Metabolic Cycles combine multiple complementary mechanisms. Common research combinations include GLP-1 agonists with AICAR or MOTS-C for additional AMPK activation, or AOD9604 with 5-Amino-1MQ for dual fat-reduction pathways. These combinations are studied for additive and potentially synergistic effects." },
      { question: "What is the difference between Mazdutide and Cagrilintide?", answer: "Mazdutide is a GLP-1/glucagon dual receptor agonist that promotes fat oxidation and appetite reduction. Cagrilintide is an amylin analogue — amylin is a pancreatic satiety hormone that works through a completely different pathway than GLP-1, slowing gastric emptying and reducing meal-time caloric intake. When combined with GLP-1 agents, cagrilintide produces additive weight loss beyond either compound alone." },
    ],
    sortOrder: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cat-5",
    name: "Brain/Nerve",
    slug: "brain-nerve",
    icon: "Brain",
    color: "#0891b2",
    description: "Nootropic peptides that enhance cognition, memory, and neuroprotection.",
    heroDescription: "Semax dramatically upregulates BDNF and dopaminergic tone for sharper focus and memory. Selank modulates GABA-A receptors to eliminate anxiety without sedation or addiction. Cerebrolysin delivers a full spectrum of neurotrophic factors — BDNF, NGF, GDNF — used clinically for stroke and neurodegeneration in over 50 countries. These neuropeptides operate at a fundamentally deeper level than conventional nootropics.",
    seoDescription: "Buy cognitive peptides — Semax (BDNF, dopamine, focus), Selank (anxiety, GABA, resilience), Cerebrolysin (neuroregeneration), DSIP (sleep), Selank + Semax stack. Brain peptides from Pantheon Peptides.",
    stats: [],
    content: `## Neuropeptides and Cognitive Research

The brain operates through an extraordinarily complex network of peptide signaling. Neuropeptides regulate neurotransmitter release, modulate synaptic plasticity, promote the growth and survival of neurons, and orchestrate the neuroinflammatory responses that determine long-term brain health. Research peptides in this category were developed primarily in Russian and Eastern European academic institutions over the last 40 years, with a focus on cognitive resilience, neuroprotection, and mood regulation.

## Semax: Cognitive Enhancement Through BDNF

Semax is a heptapeptide analogue of ACTH (adrenocorticotropic hormone) developed by the Institute of Molecular Genetics of the Russian Academy of Sciences. Unlike ACTH itself, Semax lacks hormonal activity on the adrenal glands — instead it acts directly in the brain.

### Mechanisms of Action

Semax dramatically upregulates brain-derived neurotrophic factor (BDNF) — the primary growth factor for neurons and synaptic connections — and nerve growth factor (NGF). It modulates dopaminergic and serotonergic transmission, contributing to improved mood, motivation, and attention. It also activates the melanocortin system through MC4R receptors, which play roles in memory consolidation and cognitive flexibility.

### Research Applications

Human research with Semax has documented improvements in attention, learning, and working memory in both healthy subjects and those with cognitive impairment. In stroke models, it reduced neurological deficit scores, improved blood flow, and accelerated functional recovery. Its neuroprotective effects are attributed to upregulation of antioxidant enzymes and reduction of ischemia-induced excitotoxicity.

## Selank: Anxiolytic and Cognitive Modulator

Selank is a heptapeptide analogue of tuftsin (a natural immunomodulatory tetrapeptide) developed at the same Russian institute. It was registered as an anxiolytic drug in Russia in 2009.

### Mechanisms of Action

Selank modulates GABA-A receptor activity — similar in site to benzodiazepines but without sedation, dependence, or withdrawal effects. It also increases the expression of BDNF, upregulates serotonin metabolism, and has been shown to modulate T-helper cell ratios and cytokine production, suggesting a brain-immune axis effect.

### Research Applications

Selank has been studied for generalized anxiety disorder, showing reductions in anxiety scores comparable to pharmaceutical anxiolytics without cognitive blunting or addiction potential. It simultaneously improves memory and learning in research models, a combination rarely seen with conventional anxiolytics.

## Selank + Semax Combination

The Selank + Semax combination targets complementary pathways: Selank addresses anxiety, emotional regulation, and sleep quality while Semax drives BDNF upregulation, dopaminergic tone, and active cognitive enhancement. Research suggests the combination may prevent the paradoxical activation some subjects experience with Semax alone, creating a more balanced nootropic profile.

## Cerebrolysin: Neurotrophic Factor Concentrate

Cerebrolysin is a peptide mixture derived from porcine brain tissue containing multiple low-molecular-weight neuropeptides that mirror the activity of endogenous neurotrophic factors including BDNF, NGF, CNTF, and GDNF. It is used clinically for stroke rehabilitation and vascular dementia in over 50 countries.

Cerebrolysin promotes neurogenesis, enhances synaptic plasticity, reduces amyloid precursor protein processing (relevant to Alzheimer's pathology), and has demonstrated neuroprotective effects in multiple models of traumatic brain injury, stroke, and age-related neurodegeneration. The Alpha Mind Cycle uses Cerebrolysin as a foundation for advanced neurodegenerative research protocols.

## Choosing a Cognitive Peptide

For general cognitive enhancement and anxiety reduction, the Semax + Selank combination is the most studied starting protocol. For neuroprotection, recovery from neural injury, or neurodegenerative research, Cerebrolysin provides the broadest neurotrophic factor activity. The Nova Mind Cycle packages Semax and Selank into a structured 10-week research framework.`,
    faq: [
      { question: "What is Semax and how does it improve cognition?", answer: "Semax is an ACTH analogue developed in Russia that dramatically upregulates BDNF and NGF in the brain, modulates dopaminergic and serotonergic neurotransmission, and activates melanocortin receptors involved in memory consolidation. Research in humans has documented improvements in attention, learning speed, and working memory, as well as neuroprotective effects in stroke models." },
      { question: "Is Selank similar to a benzodiazepine?", answer: "Selank modulates GABA-A receptors at a similar site to benzodiazepines but through a different mechanism, producing anxiolytic effects without sedation, cognitive impairment, tolerance, or withdrawal. It was registered as a prescription anxiolytic drug in Russia in 2009. Research suggests it simultaneously improves memory and learning while reducing anxiety — a profile not seen with conventional anxiolytics." },
      { question: "What is Cerebrolysin used for in research?", answer: "Cerebrolysin is a concentrate of low-molecular-weight neuropeptides that mimic endogenous neurotrophic factors including BDNF, NGF, and GDNF. It is studied for stroke rehabilitation, traumatic brain injury, Alzheimer's disease, and vascular dementia. It promotes neurogenesis, synaptic plasticity, and neuroprotection, and is used clinically in over 50 countries for neurological conditions." },
      { question: "Can Semax and Selank be used together?", answer: "Yes. The Semax + Selank combination is one of the most common research stacks for cognitive optimization. Selank reduces anxiety and stabilizes mood while Semax drives BDNF upregulation and active cognitive enhancement. The combination addresses both the emotional and executive cognitive dimensions of brain function simultaneously." },
      { question: "How do brain peptides differ from conventional nootropics like racetams?", answer: "Racetams primarily modulate neurotransmitter receptor sensitivity with relatively short-lasting effects. Neuropeptides like Semax and Cerebrolysin act upstream by promoting the production of neurotrophic factors — proteins that support the long-term health, growth, and connectivity of neurons. This represents a more fundamental and potentially more durable approach to cognitive support." },
      { question: "What is the Nova Mind Cycle?", answer: "The Nova Mind Cycle is a pre-built 10-week research protocol combining Semax and Selank for comprehensive cognitive optimization. It is designed for brain optimization, emotional balance, anxiety reduction, improved focus, and better sleep quality. The Alpha Mind Cycle is a more advanced protocol adding Cerebrolysin for neurodegenerative and recovery-focused research." },
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
    color: "#15803d",
    description: "Peptides that strengthen immune function, reduce inflammation, and fight infection.",
    heroDescription: "Thymosin Alpha-1 is approved in 35+ countries for hepatitis, cancer, and sepsis — one of the most clinically validated immunomodulatory peptides in existence. LL-37, the only human cathelicidin, provides broad-spectrum antimicrobial defense and wound-healing signals at the innate immunity level. Thymulin restores thymic signaling for T-cell maturation as immune function declines with age.",
    seoDescription: "Buy immune peptides — Thymosin Alpha-1 (T-cell modulation, adaptive immunity), LL-37 (antimicrobial, innate immunity), Thymulin (immune regulation). Immunity-boosting peptides from Pantheon Peptides.",
    stats: [],
    content: `## The Immune System and Peptide Research

The immune system is itself a peptide-signaling network. Cytokines, chemokines, thymic hormones, and antimicrobial peptides all belong to the family of endogenous signaling molecules that orchestrate immune surveillance, response, and resolution. As these signals decline with age — a process called immunosenescence — susceptibility to infection, cancer, and chronic inflammatory disease increases. Research peptides in this category target specific nodes in the immune network to restore or enhance immune function.

## Thymosin Alpha-1: T-Cell Activator

Thymosin Alpha-1 (TA1) is a 28-amino acid peptide naturally produced by the thymus gland. It was first isolated in the 1970s by Allan Goldstein and has since accumulated one of the largest clinical research datasets of any immunomodulatory peptide, with studies in hepatitis B, hepatitis C, HIV, tuberculosis, sepsis, and cancer immunotherapy.

### Mechanisms of Action

TA1 acts primarily on dendritic cells and T-lymphocytes. It promotes the differentiation and maturation of T-helper 1 (Th1) cells — the arm of the immune system responsible for attacking viruses, intracellular bacteria, and tumor cells. It upregulates major histocompatibility complex (MHC) class I and II expression, enhancing antigen presentation. TA1 also induces interferon-alpha and gamma production, raises natural killer (NK) cell activity, and reduces regulatory T-cell suppression of immune responses when immune function has become inappropriately dampened.

### Research Applications

TA1 is approved or available for clinical use in over 35 countries for hepatitis B, hepatitis C, and as an adjuvant to cancer therapy. In sepsis research, it restored immune responsiveness in critically ill patients with immunoparalysis. In cancer immunotherapy studies, it enhanced the efficacy of checkpoint inhibitors. For healthy adults, it has been studied as an adjuvant to influenza vaccination, improving antibody titers in elderly subjects.

## Thymulin: Thymic Hormone

Thymulin is a nonapeptide produced specifically by thymic epithelial cells and requires zinc for biological activity. It promotes T-cell differentiation, reduces pro-inflammatory cytokine production (particularly IL-1 and IL-6 in models of chronic inflammation), and has demonstrated anti-nociceptive (pain-reducing) properties in inflammatory pain models. As thymic involution occurs with aging, thymulin production declines dramatically — making it a natural target for immune restoration research.

## LL-37: Antimicrobial Peptide

LL-37 is a 37-amino acid cathelicidin — the only human cathelicidin — and is part of the innate immune system's first line of defense. It is produced by neutrophils, monocytes, macrophages, and epithelial cells at sites of infection and injury.

### Mechanisms of Action

LL-37 disrupts bacterial cell membranes through electrostatic interactions, providing direct broad-spectrum antimicrobial activity against gram-positive bacteria, gram-negative bacteria, fungi, and enveloped viruses. Beyond direct killing, LL-37 modulates immune signaling: it neutralizes bacterial lipopolysaccharide (LPS) to prevent septic shock, promotes wound healing through chemotaxis of immune cells and angiogenesis, and regulates inflammatory resolution.

### Research Applications

LL-37 has been studied for chronic wound healing (particularly diabetic wounds where LL-37 is deficient), respiratory infections, and as an immune adjuvant. Its anti-biofilm activity is particularly notable — LL-37 disrupts established biofilms that resist conventional antibiotic treatment.

## T-Force Immunity Cycles

The T-Force Immunity Cycle and T-Force Immunity Plus Cycle combine thymic peptides with supportive compounds for comprehensive immune optimization. The Plus version adds dual thymic peptide activity (TA1 + Thymulin) for deeper immune modulation across both T-cell maturation and inflammatory regulation pathways.`,
    faq: [
      { question: "What is Thymosin Alpha-1 and what is it used for?", answer: "Thymosin Alpha-1 is a 28-amino acid thymic peptide that activates T-helper 1 immunity, enhances antigen presentation, stimulates interferon production, and raises NK cell activity. It is approved or clinically available in over 35 countries for hepatitis B, hepatitis C, and cancer immunotherapy, and has been studied for sepsis, HIV, tuberculosis, and vaccine adjuvancy." },
      { question: "How does LL-37 fight infection differently from antibiotics?", answer: "LL-37 is a broad-spectrum antimicrobial peptide that physically disrupts bacterial cell membranes through electrostatic interactions — a mechanism bacteria cannot easily develop resistance to. Unlike antibiotics that target specific bacterial proteins or enzymes, LL-37 kills gram-positive and gram-negative bacteria, fungi, and some viruses. It also disrupts established biofilms and modulates the immune response to prevent septic shock." },
      { question: "What is the role of Thymulin in immune function?", answer: "Thymulin is a nonapeptide produced exclusively by thymic epithelial cells that promotes T-lymphocyte differentiation and maturation. It requires zinc for biological activity, and zinc deficiency is a significant cause of immune decline in aging populations. Thymulin also reduces pro-inflammatory cytokines IL-1 and IL-6, making it relevant for both immune activation and inflammatory resolution research." },
      { question: "Who benefits most from immune peptide research?", answer: "Research applications are most relevant for studies of immunosenescence (age-related immune decline), post-infectious immune dysfunction, cancer immunotherapy adjuvancy, chronic inflammatory disease, and vaccine efficacy optimization. Thymosin Alpha-1 has the strongest clinical evidence base for specific infectious disease and cancer contexts." },
      { question: "What is the difference between T-Force and T-Force Plus?", answer: "The T-Force Immunity Cycle provides a single-thymic-peptide protocol using Thymosin Alpha-1 for T-cell activation and immune surveillance enhancement. The T-Force Plus Cycle adds Thymulin, providing dual thymic peptide coverage across both T-cell maturation (TA1) and inflammatory regulation (Thymulin) pathways — making it a more comprehensive immune optimization protocol for research purposes." },
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
    heroDescription: "PT-141 (Bremelanotide) is FDA-approved and acts in the brain through melanocortin receptors to enhance desire and arousal — not just blood flow. Kisspeptin-10 activates the HPG axis at its source, restoring the LH and testosterone signaling that drives hormonal drive in both men and women. Melanotan II adds UV-independent tanning and appetite suppression alongside its libido effects.",
    seoDescription: "Buy libido peptides — PT-141 / Bremelanotide (melanocortin libido), Kisspeptin-10 (hormone axis), MT-2 / Melanotan 2 (libido + tanning), Kiss Peptides Cycle. Sexual health peptides from Pantheon Peptides.",
    stats: [],
    content: `## Sexual Health and the Peptide Axis

Sexual desire and function are regulated by a sophisticated cascade of hormonal and neurotransmitter signals — one that extends from the hypothalamus and pituitary gland to peripheral reproductive organs. Age, stress, hormonal dysregulation, and vascular health all converge to diminish sexual function. Research peptides in this category operate through distinct pathways to address these underlying mechanisms rather than simply increasing blood flow as many conventional approaches do.

## PT-141 (Bremelanotide): Central Nervous System Activation

PT-141 is a melanocortin peptide analogue derived from Melanotan II. It was discovered during Melanotan II research when subjects reported unexpected increases in sexual arousal. Unlike PDE5 inhibitors (which work peripherally on blood vessel smooth muscle), PT-141 acts centrally in the brain through melanocortin MC3R and MC4R receptors in the hypothalamus.

### Mechanism of Action

PT-141 activates the melanocortin system — a network of brain receptors involved in sexual motivation, appetite regulation, and mood. By acting on MC4R receptors in the paraventricular nucleus of the hypothalamus, it increases dopamine release in reward pathways, enhancing sexual motivation and desire at the neurological level. This central mechanism means it can produce libido enhancement even in cases where peripheral mechanisms are intact.

### Research Applications

PT-141 completed Phase 3 clinical trials for hypoactive sexual desire disorder (HSDD) in premenopausal women and was approved by the FDA as Vyleesi in 2019. Research documents improvements in sexual desire, arousal, and satisfaction in both men and women. Its mechanism independent of testosterone makes it relevant even for subjects with normal hormonal levels.

## Kisspeptin-10: HPG Axis Activation

Kisspeptin is a neuropeptide produced in the hypothalamus that acts as the master upstream regulator of the hypothalamic-pituitary-gonadal (HPG) axis. It stimulates GnRH (gonadotropin-releasing hormone) neurons, which in turn drive LH and FSH release from the pituitary, stimulating testosterone and estrogen production in the gonads.

Kisspeptin-10 is the biologically active fragment. It restores hormonal drive from the upstream signaling level — a fundamentally different approach from directly administering sex hormones. Research in hypogonadal men documented significant increases in LH pulsatility and testosterone levels following Kisspeptin-10 administration. It also plays roles in fertility, with documented effects on spermatogenesis and follicular development.

## MT-2 (Melanotan II): Multifaceted Melanocortin

Melanotan II is a cyclic peptide that activates the full spectrum of melanocortin receptors (MC1R through MC5R). MC1R activation drives melanin production for UV-independent skin tanning. MC3R and MC4R activation stimulates sexual desire and arousal — the same pathways as PT-141, since Bremelanotide is derived from MTII. MC4R activation in the hypothalamus also reduces appetite. Additionally, MT-2 increases penile erection through a spinal cord mechanism, making it relevant for erectile function research independent of PT-141's purely central action.

## The Eros Stamina Cycle and Kiss Peptides Cycle

The Eros Stamina Cycle combines PT-141 with supporting compounds for comprehensive sexual health optimization, including enhanced blood flow, hormonal support, and improved sleep quality — all of which contribute to sexual function. The Kiss Peptides Cycle focuses specifically on the Kisspeptin pathway for HPG axis restoration and hormone balance, addressing both libido and fertility-related hormonal signaling.

## Key Distinctions for Research

PT-141 and MT-2 both activate melanocortin receptors centrally but differ in selectivity — MT-2 is less selective and adds tanning and appetite effects. Kisspeptin operates entirely upstream at the HPG axis level, relevant when the deficit is hormonal rather than motivational. These distinct mechanisms make them valuable for investigating different aspects of sexual health physiology.`,
    faq: [
      { question: "How does PT-141 differ from medications like Viagra or Cialis?", answer: "PT-141 (Bremelanotide) acts centrally in the brain through melanocortin receptors in the hypothalamus, increasing dopamine and enhancing sexual motivation at the neurological level. PDE5 inhibitors like Viagra work peripherally by relaxing vascular smooth muscle in the genitals to increase blood flow. PT-141 addresses desire and arousal; PDE5 inhibitors address physical blood flow mechanics. They work through entirely different pathways and can be complementary in research contexts." },
      { question: "What is Kisspeptin and how does it affect hormones?", answer: "Kisspeptin is the upstream master regulator of the HPG axis — it stimulates GnRH neurons in the hypothalamus to release GnRH, which drives LH and FSH release from the pituitary, which in turn stimulates testosterone in men and estrogen in women. By activating the HPG axis from the top, Kisspeptin-10 can restore gonadotropin signaling and sex hormone production in research models of hormonal dysregulation." },
      { question: "What is MT-2 (Melanotan II) used for in research?", answer: "Melanotan II activates all five melanocortin receptors. MC1R activation produces UV-independent skin tanning. MC3R and MC4R activation drives sexual arousal and libido enhancement. MC4R also reduces appetite. Additionally, MT-2 activates a spinal cord mechanism that promotes penile erection. It is studied for sexual dysfunction, tanning, and appetite regulation simultaneously." },
      { question: "Is PT-141 FDA approved?", answer: "Yes. PT-141 (branded as Vyleesi) was approved by the FDA in 2019 for hypoactive sexual desire disorder (HSDD) in premenopausal women. Clinical trials documented statistically significant improvements in sexual desire scores compared to placebo. Research use of the compound extends beyond this approved indication to study male sexual function, arousal neuroscience, and the melanocortin system broadly." },
      { question: "Can libido peptides help with hormonal imbalances?", answer: "Kisspeptin-10 specifically targets hormonal imbalances by restoring upstream HPG axis signaling. Research in hypogonadal men showed it increased LH pulse frequency and testosterone levels. For cases where the deficit is at the receptor level rather than hormone production, MT-2 and PT-141 can restore function independent of circulating hormone levels." },
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
    heroDescription: "GHK-Cu modulates over 4,000 genes to stimulate collagen, elastin, and hair follicle renewal — and its blood levels drop 60% between ages 20 and 60. BPC-157 accelerates wound closure, tendon tensile strength restoration, and bone remodeling across dozens of animal models. LL-37 addresses the antimicrobial and angiogenic requirements of hard-to-heal wounds where other therapies fail.",
    seoDescription: "Buy skin and tissue peptides — GHK-Cu (collagen, wrinkles, hair growth), BPC-157 (wound healing, gut), LL-37 (skin repair, antimicrobial), MT-2 (melanin, tanning). Skin peptides from Pantheon Peptides.",
    stats: [],
    content: `## The Biology of Structural Tissue Renewal

Skin, connective tissue, and bone are dynamic structures in constant remodeling. Collagen — the most abundant protein in the body — requires precise biosynthesis, cross-linking, and turnover to maintain structural integrity. As this system declines with age, skin thins and loses elasticity, tendons and ligaments weaken, and bone density decreases. Research peptides in this category act as precise molecular signals at the collagen synthesis level, the gene expression level, and the cellular repair level to support and restore structural tissue.

## GHK-Cu: Master Regulator of Skin Biology

GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) is naturally present at 200 ng/mL in young blood plasma, declining to below 80 ng/mL by age 60. This decline correlates with the loss of tissue repair capacity seen across aging skin and connective tissue.

### Gene Expression Effects

Research by Loren Pickart identified GHK-Cu as a modulator of over 4,000 human genes. Skin-relevant effects include: upregulation of collagen I, III, and IV synthesis; increased elastin and glycosaminoglycan production; activation of matrix metalloproteinases for collagen turnover and wound remodeling; upregulation of nerve growth factor for skin innervation; and downregulation of genes associated with inflammation and oxidative damage.

### Practical Skin Research

GHK-Cu has been studied in wound healing (including chronic diabetic wounds), post-procedure skin recovery, UV-induced photoaging, and hair loss (alopecia). In controlled skin studies, topical and systemic GHK-Cu improved skin density, reduced fine lines, restored barrier function, and increased hair follicle size.

## BPC-157: Tissue Repair Across Systems

BPC-157's tissue repair effects extend prominently to skin, tendon, ligament, and bone healing. Its angiogenic activity — promoting formation of new blood vessels — is particularly critical for skin wound healing, where vascularity determines the oxygen and nutrient supply to regenerating tissue. Research has shown BPC-157 to significantly accelerate full-thickness wound closure, reduce scar formation, and promote more organized collagen deposition in healing skin.

For tendon and ligament research, BPC-157 has demonstrated superior restoration of tensile strength compared to control animals in multiple injury models. It promotes tenocyte and fibroblast proliferation, increases collagen type I expression in healing tendons, and reduces the disorganized scar tissue (fibrous adhesions) that often limit functional recovery.

## LL-37: Wound Healing and Skin Immune Defense

LL-37 is deficient in chronic wounds — including diabetic foot ulcers and venous leg ulcers — where its absence allows persistent biofilm colonization and failure of the normal healing cascade. Research administering LL-37 to chronic wound models documented accelerated re-epithelialization, reduced bacterial burden, and improved angiogenic signaling. Its dual role as an antimicrobial and a pro-healing signal makes it uniquely relevant for infected or non-healing wound research.

## MT-2 and Skin Pigmentation

Melanotan II activates MC1R receptors on melanocytes to stimulate melanin synthesis and distribution independent of UV radiation. This UV-independent tanning effect is studied for protection against UV-induced DNA damage in fair-skinned populations — melanin provides physical protection for nuclear DNA by absorbing and scattering UV photons before they can cause thymine dimer formation.

## Glow Cycle and Glow Plus Cycle

The Glow Cycle focuses on skin, hair, and connective tissue regeneration using GHK-Cu and collagen-stimulating peptides. The Glow Plus Cycle extends this with additional anti-aging compounds, combining skin regeneration with cellular longevity pathways for a comprehensive rejuvenation research protocol. Both are designed as structured multi-week cycles to allow time for collagen synthesis and tissue remodeling to produce measurable structural changes.

## Bone Health Considerations

BPC-157 has shown positive effects in fracture healing models, accelerating callus formation and bone remodeling. MK-677, through its IGF-1 elevation, has documented bone mineral density improvements in 12-month clinical studies. TB-500 supports periosteal and endosteal healing through its actin polymerization and cell migration effects.`,
    faq: [
      { question: "What is the best peptide for skin regeneration research?", answer: "GHK-Cu is the most comprehensively studied peptide for skin biology, with documented effects on collagen synthesis, gene expression, wound healing, photoaging, and hair growth. BPC-157 is the strongest for structural wound healing and scar reduction. For chronic or infected wounds, LL-37 addresses both antimicrobial and pro-healing requirements simultaneously." },
      { question: "How does GHK-Cu improve skin at the molecular level?", answer: "GHK-Cu modulates over 4,000 genes relevant to skin biology. It upregulates collagen types I, III, and IV; increases elastin and glycosaminoglycan production; activates collagen turnover enzymes for remodeling; promotes nerve growth factor expression; and downregulates inflammation and oxidative stress pathways. The net effect is more youthful skin architecture, improved elasticity, and enhanced barrier function." },
      { question: "Can peptides improve tendon and ligament healing?", answer: "Yes. BPC-157 has the strongest tendon and ligament healing evidence, with multiple studies documenting accelerated restoration of tensile strength, increased collagen type I deposition, and reduced fibrous adhesion formation in injury models. TB-500 complements this with systemic cell migration promotion and connective tissue remodeling support. The Wolverine Cycle combines these for comprehensive connective tissue research." },
      { question: "How does MT-2 produce a tan without sun exposure?", answer: "MT-2 activates MC1R receptors on melanocytes — the skin cells that produce melanin — stimulating them to synthesize and distribute melanin granules independently of UV light. The resulting pigmentation is identical in composition to UV-induced tanning but achieved through hormonal signaling rather than DNA damage, providing UV protection without the carcinogenic stimulus." },
      { question: "How long do skin regeneration peptides take to show effects?", answer: "Collagen synthesis and structural skin remodeling are intrinsically slow processes. GHK-Cu skin studies have documented measurable improvements in skin density and fine line reduction over 8-12 weeks of consistent administration. Wound healing effects from BPC-157 are more acute, with accelerated wound closure visible within 7-14 days in animal models." },
      { question: "What is the Glow Plus Cycle?", answer: "The Glow Plus Cycle is an advanced skin, hair, and total body rejuvenation protocol combining collagen-stimulating peptides with anti-aging compounds for a comprehensive approach to structural and cellular renewal. It extends the Glow Cycle by adding cellular longevity and cognitive support, making it a full-spectrum rejuvenation research cycle rather than a targeted skin-only protocol." },
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
    description: "Pre-built synergistic peptide cycles for comprehensive results.",
    heroDescription: "Pre-built peptide cycles combine complementary compounds around a unified research goal — so you're not guessing at compatibility, ratios, or sequencing. The Wolverine Cycle pairs BPC-157 + TB-500 for total tissue repair. The Nova Mind Cycle stacks Semax + Selank for cognitive and emotional optimization. The Stack Up, Prime Metabolic, and Glow Plus Cycles cover muscle, fat loss, and rejuvenation with fully structured protocols.",
    seoDescription: "Buy peptide cycles — Wolverine (BPC-157 + TB-500 healing), Glow Plus (anti-aging), Nova Mind (cognitive), Prime Metabolic (fat loss), T-Force Immunity, Eros Stamina (libido), Stack Up (muscle). From Pantheon Peptides.",
    stats: [],
    content: `## Why Research Cycles Outperform Single Peptides

Individual peptides are powerful. But research consistently demonstrates that well-designed combinations — where each compound addresses a distinct but complementary mechanism — produce outcomes that single agents cannot achieve alone. The synergy is not merely additive; in many cases it is multiplicative. Growth hormone secretagogue combinations release 4-6 times more GH than either compound alone. BPC-157 and TB-500 together heal tissue faster than either individually. Cognitive peptide stacks address both neurotrophic signaling and anxiety modulation simultaneously.

Pre-built research cycles take the guesswork out of combination design. Each cycle is structured around a specific research goal, with compounds selected for mechanistic synergy, sequencing logic, and appropriate research duration.

## Recovery and Performance: The Wolverine Cycle

The Wolverine Cycle is the definitive tissue repair and performance research protocol. Named for its regenerative focus, it combines BPC-157 and TB-500 — the two most studied tissue repair peptides — in a structured multi-week framework. BPC-157 drives local angiogenesis and GH receptor upregulation at injury sites. TB-500 promotes the systemic cell migration and actin polymerization needed to populate healing tissue. Together they address every phase of the tissue repair cascade: inflammation resolution, cellular proliferation, and extracellular matrix remodeling.

## Cognitive Optimization: Nova Mind and Alpha Mind Cycles

The Nova Mind Cycle combines Semax and Selank for comprehensive cognitive and emotional optimization. Semax drives BDNF upregulation and dopaminergic enhancement — the active cognitive enhancement component. Selank provides anxiolytic action through GABA-A modulation without sedation, simultaneously stabilizing mood and improving sleep quality. The combination creates a balanced nootropic profile that addresses both the performance and the regulatory aspects of brain function.

The Alpha Mind Cycle extends this with Cerebrolysin — a concentrate of neurotrophic factors including BDNF, NGF, and GDNF — for advanced neuroprotection, neurogenesis, and recovery from neural injury. It is designed for research into Alzheimer's pathology, cognitive aging, stroke recovery, and serious neurodegenerative conditions.

## Immune Resilience: T-Force Cycles

The T-Force Immunity Cycle provides structured thymic peptide research using Thymosin Alpha-1 to restore T-cell activation, antigen presentation, and interferon production. The T-Force Immunity Plus Cycle adds Thymulin for dual thymic peptide coverage across both T-cell maturation and pro-inflammatory cytokine regulation.

## Sexual Health: Eros and Kiss Cycles

The Eros Stamina Cycle targets sexual health comprehensively through PT-141's central melanocortin activation combined with vascular, hormonal, and sleep-quality supporting compounds. The Kiss Peptides Cycle focuses on the Kisspeptin-10 pathway for HPG axis restoration — restoring hormonal drive from the upstream signaling level rather than at the hormone itself.

## Skin and Anti-Aging: Glow and Glow Plus Cycles

The Glow Cycle delivers a structured collagen synthesis and tissue regeneration protocol targeting skin, hair, and connective tissue. The Glow Plus Cycle extends this with anti-aging compounds for cellular longevity, making it a comprehensive rejuvenation research protocol.

## Metabolic and Weight Loss: Prime Metabolic and Slim Cycles

The Prime Metabolic cycles (6-week and 12-week) combine multiple metabolic pathways — GH axis restoration, AMPK activation, and cellular energy optimization — for comprehensive metabolic support. The Slim Peptides Cycle focuses specifically on fat reduction through complementary mechanisms including appetite regulation, insulin sensitization, and enhanced lipolysis.

## Muscle Building: Stack Up Cycles

The Stack Up Cycles (5-week and 10-week) are engineered for lean muscle research, combining GH secretagogues, IGF-1 pathway support, and recovery peptides into a structured framework that addresses all three components of muscle growth: hormonal signaling, protein synthesis, and tissue repair.`,
    faq: [
      { question: "What is a peptide cycle and why is it structured as a cycle?", answer: "A peptide cycle is a pre-designed combination of complementary research peptides organized into a defined time period with specific compounds chosen for mechanistic synergy. The cycle structure ensures compounds are used for appropriate durations to allow biological effects to develop (collagen synthesis, telomere restoration, neurotrophic factor upregulation all require weeks to manifest at the tissue level) while avoiding potential receptor accommodation." },
      { question: "Which cycle is best for beginners to peptide research?", answer: "The Wolverine Cycle (BPC-157 + TB-500) is often the most accessible starting point — both compounds are extensively studied, have complementary mechanisms, and cover broad applications from injury recovery to gut health and performance. For cognitive research, the Nova Mind Cycle is similarly well-characterized with Semax and Selank." },
      { question: "Can peptide cycles be stacked with individual peptides?", answer: "Yes. Cycles are designed around core mechanisms, and individual peptides can be added to address additional research goals. A researcher might run the Wolverine Cycle while also administering GHK-Cu for skin and gene expression effects, or adding Thymosin Alpha-1 for immune support during recovery. Mechanistic compatibility should guide combination decisions." },
      { question: "How long are the peptide cycles?", answer: "Cycle lengths vary by goal. The Stack Up 5-Week Cycle provides an accelerated muscle research protocol. The Stack Up 10-Week and Prime Metabolic 12-Week Cycle allow more complete biological adaptation. The Nova Mind and Alpha Mind cycles run for 10 weeks. Longer cycles allow for slow-onset mechanisms like collagen synthesis, neurogenesis, and telomere restoration to produce measurable outcomes." },
      { question: "What is the difference between the Glow Cycle and Glow Plus Cycle?", answer: "The Glow Cycle is a focused skin, hair, and connective tissue regeneration protocol. The Glow Plus Cycle extends this with anti-aging compounds targeting cellular longevity, adding GH restoration and broader systemic rejuvenation to the structural tissue focus of the base cycle." },
      { question: "Are pre-built cycles more effective than custom stacks?", answer: "Pre-built cycles have been designed with mechanistic synergy and appropriate compound ratios. For researchers new to peptide combinations, they provide a researched framework with known compound compatibility. Experienced researchers may prefer custom stacks that precisely target their specific research variables, but cycles offer a reliable and documented starting point." },
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
    description: "Reconstitution supplies: bacteriostatic water, syringes, alcohol pads, and starter kits.",
    heroDescription: "Lyophilized peptides must be reconstituted with sterile bacteriostatic water before use — and the quality of your supplies directly determines solution sterility, peptide stability, and dosing accuracy. Pantheon Peptides carries pharmaceutical-grade bacteriostatic water, 31G injection syringes, 21G reconstitution syringes, vial vents, alcohol pads, and complete starter kits so every protocol begins with the right foundation.",
    seoDescription: "Peptide supplies — bacteriostatic water for reconstitution, injection syringes (31G 1ml), reconstitution syringes (21G 3ml), alcohol pads, syringe tips, and complete starter kits from Pantheon Peptides.",
    stats: [],
    content: `## Proper Preparation is Essential for Research Integrity

Research peptides are supplied as lyophilized (freeze-dried) powders that must be reconstituted with sterile diluent before use. The quality and sterility of reconstitution supplies directly affects peptide stability, solution sterility, and the accuracy of dosing in research applications. Using the correct supplies — bacteriostatic water, properly sized syringes, and sterile technique — is not optional; it is foundational to valid research and, in laboratory settings, to subject safety.

## Bacteriostatic Water: The Essential Diluent

Bacteriostatic water (BAC water) is sterile water for injection containing 0.9% benzyl alcohol as a bacteriostatic preservative. This distinguishes it from plain sterile water or saline in a critical way: the benzyl alcohol prevents bacterial growth in the vial even after the seal is broken and the vial is entered multiple times.

### Why Bacteriostatic Water for Peptides

Plain sterile water must be used in a single dose once opened — without a preservative, any bacterial contamination from needle entry will proliferate rapidly. BAC water allows multiple entries over an extended period (typically 28 days after opening) without bacterial growth. Since a single vial of reconstituted peptide is typically used over multiple research sessions, BAC water is the universally recommended diluent.

The 0.9% benzyl alcohol concentration also slightly acidifies the solution, which can improve stability for some peptides. For pH-sensitive peptides, alternative diluents may be used, but BAC water is the standard for the vast majority of research peptides.

### Storage After Reconstitution

Once reconstituted, peptide solutions should be stored at 2-8°C (refrigerated) and protected from light. Most peptides remain stable for 4-6 weeks when properly reconstituted with BAC water and refrigerated. Freezing reconstituted solutions is generally not recommended as freeze-thaw cycles can degrade peptide integrity.

## Syringe Selection

Two syringe types serve distinct purposes in peptide research:

### Injection Syringes (1mL, 31G x 8mm)

The ultra-thin 31-gauge needle (0.26mm diameter) minimizes injection site discomfort and tissue trauma. The 8mm needle length is appropriate for subcutaneous administration into the subcutaneous fat layer. 1mL capacity allows precise dosing of small peptide volumes. These insulin-style syringes are the standard for subcutaneous peptide administration.

### Reconstitution Syringes (3mL, 21G x 1 inch)

The larger 21-gauge bore allows rapid fluid transfer for reconstitution without the risk of damaging the lyophilized peptide cake through excessive pressure (which can occur with fine-gauge needles). The 3mL capacity accommodates the volume of BAC water typically needed for reconstitution. These are used only for drawing up and adding diluent, not for injection.

## Syringe Tips (Vial Vents)

27G vial vent tips serve a critical but often overlooked function: they allow air to enter the vial as fluid is drawn out, preventing a vacuum from building up. Without venting, progressive vacuum makes fluid withdrawal increasingly difficult and can introduce negative pressure effects on the vial seal integrity. Vent tips are typically inserted before reconstitution begins and removed after the procedure is complete.

## Alcohol Pads

70% isopropyl alcohol pads are used to disinfect both vial rubber septa and injection sites before needle entry. Isopropyl alcohol at 70% concentration is bactericidal within 10-30 seconds of contact — lower concentrations lack sufficient dehydrating effect while higher concentrations evaporate too quickly for effective disinfection. Allow the area to dry completely after application before proceeding.

## Starter Kit: Complete Research Setup

The Starter Kit bundles all essential supplies: 2 vials of bacteriostatic water, 30 injection syringes, 5 reconstitution syringes, 5 vent tips, and 100 alcohol pads. For researchers setting up a new protocol, it eliminates the need to source each component individually and ensures supply compatibility.`,
    faq: [
      { question: "What is bacteriostatic water and why is it used for peptides?", answer: "Bacteriostatic water is sterile water for injection containing 0.9% benzyl alcohol, which prevents bacterial growth after the vial is opened. Unlike plain sterile water (which must be used immediately after opening), BAC water allows a reconstituted peptide vial to be entered multiple times over 28 days without contamination risk — essential since most research peptide protocols involve multiple administrations per week from a single vial." },
      { question: "What is the correct syringe size for peptide injection?", answer: "1mL insulin-style syringes with a 31-gauge, 8mm needle are standard for subcutaneous peptide injection. The ultra-fine 31G needle minimizes discomfort and tissue damage. The 1mL capacity is sufficient for typical peptide dose volumes. For reconstitution (adding BAC water to the peptide vial), a separate 3mL, 21-gauge syringe is used for efficient fluid transfer without damaging the peptide powder." },
      { question: "How long can reconstituted peptides be stored?", answer: "Most research peptides reconstituted with bacteriostatic water and stored refrigerated at 2-8°C remain stable for 4-6 weeks. Lyophilized (freeze-dried) powder prior to reconstitution typically has a much longer shelf life when stored frozen at -20°C. Once reconstituted, avoid freezing and protect from light to maximize stability." },
      { question: "What are vial vent tips used for?", answer: "Vial vent tips (27G syringe tips used as vents) are inserted into a vial's rubber septum to allow air in as fluid is drawn out, preventing vacuum buildup. Without venting, withdrawing multiple doses from a sealed vial creates progressive negative pressure that makes accurate dosing increasingly difficult and can compromise vial seal integrity over time." },
      { question: "Why use 70% isopropyl alcohol pads rather than a higher concentration?", answer: "70% isopropyl alcohol is bactericidal because it penetrates cell membranes and denatures proteins effectively — the 30% water content slows evaporation, allowing sufficient contact time for disinfection. Pure or 90%+ isopropyl alcohol evaporates too quickly for reliable surface disinfection. Allow the alcohol to dry completely on injection sites and vial tops before needle entry." },
      { question: "What is included in the Starter Kit?", answer: "The Starter Kit includes 2 vials of bacteriostatic water (10mL each), 30 injection syringes (1mL, 31G, 8mm), 5 reconstitution syringes (3mL, 21G, 1 inch), 5 vial vent tips (27G), and 100 alcohol pads. It provides a complete research setup for a new peptide protocol without needing to source individual components separately." },
    ],
    sortOrder: 9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
