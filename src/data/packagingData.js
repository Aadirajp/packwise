// Data and AI Engine models for SIH26236
// AI-Based Intelligent Food Packaging Material Recommendation System
// Ministry of Food Processing Industries (MoFPI)

export const COMMODITY_CATEGORIES = [
  { id: 'horticulture', name: 'Fresh Fruits & Vegetables', icon: '🍎' },
  { id: 'dairy', name: 'Dairy & Fats', icon: '🥛' },
  { id: 'grains_bakery', name: 'Grains, Cereals & Bakery', icon: '🌾' },
  { id: 'meat_seafood', name: 'Meat, Poultry & Seafood', icon: '🥩' },
  { id: 'spices_oils', name: 'Spices, Condiments & Oils', icon: '🌶️' },
  { id: 'rte_processed', name: 'Ready-to-Eat (RTE) & Processed', icon: '🍲' },
];

export const COMMODITIES = [
  // 1. HORTICULTURE (Fresh Fruits & Vegetables)
  {
    id: 'alphonso-mango',
    name: 'Alphonso Mango (Export Grade)',
    category: 'horticulture',
    icon: '🥭',
    image: '/images/mango-packaging.jpg',
    popularTag: 'Top Export Commodity',
    isFlagship: true,
    description: 'Highly climacteric fruit prone to rapid ripening, anthracnose fungal spoilage, and chilling injury.',
    aw: 0.98,
    moistureContent: '84%',
    respirationRate: 'High (40-90 mg CO₂/kg·h at 20°C)',
    ethyleneSensitivity: 'High (accelerates softening and senescence)',
    o2Sensitivity: 3,
    moistureSensitivity: 4,
    lightSensitivity: 2,
    microbialRisk: 'High (Colletotrichum gloeosporioides)',
    recommendedTemp: '12°C - 13°C (Avoid <10°C to prevent chilling injury)',
    optimalRH: '85% - 90%',
    baselineShelfLifeDays: 5,
    idealMAP: { o2: 5, co2: 5, n2: 90 },
    activeTech: 'Potassium permanganate (KMnO₄) ethylene scavengers + micro-perforated bio-film',
    targetOTR: '< 1500 cm³/m²·day (Equilibrium modified atmosphere)',
    targetWVTR: '15 - 30 g/m²·day (Prevents desiccation while stopping condensation)'
  },
  {
    id: 'fresh-strawberries',
    name: 'Fresh Strawberries (Table Grade)',
    category: 'horticulture',
    icon: '🍓',
    image: '/images/strawberries-packaging.jpg',
    popularTag: 'High Perishability',
    description: 'Extremely perishable, high respiration, vulnerable to Botrytis cinerea (grey mold) and moisture sweating.',
    aw: 0.99,
    moistureContent: '91%',
    respirationRate: 'Very High (50-100 mg CO₂/kg·h at 10°C)',
    ethyleneSensitivity: 'Low to Moderate',
    o2Sensitivity: 3,
    moistureSensitivity: 5,
    lightSensitivity: 2,
    microbialRisk: 'Severe (Botrytis mold within 48h if condensation occurs)',
    recommendedTemp: '0°C - 2°C',
    optimalRH: '90% - 95%',
    baselineShelfLifeDays: 3,
    idealMAP: { o2: 10, co2: 15, n2: 75 },
    activeTech: 'Antimicrobial Chitosan pad with moisture absorption layer',
    targetOTR: '1200 - 2500 cm³/m²·day',
    targetWVTR: '20 - 45 g/m²·day'
  },
  {
    id: 'table-tomatoes',
    name: 'Hydroponic Vine Tomatoes',
    category: 'horticulture',
    icon: '🍅',
    image: '/images/tomatoes-packaging.jpg',
    popularTag: 'Moderate Respiration',
    isFlagship: true,
    description: 'Climacteric fruit with skin calyx retention; sensitive to post-harvest softening and Botrytis rot.',
    aw: 0.97,
    moistureContent: '94%',
    respirationRate: 'Moderate (20-35 mg CO₂/kg·h at 20°C)',
    ethyleneSensitivity: 'High (Triggers premature over-ripening)',
    o2Sensitivity: 3,
    moistureSensitivity: 4,
    lightSensitivity: 2,
    microbialRisk: 'Moderate (Alternaria alternata & Rhizopus rot)',
    recommendedTemp: '10°C - 15°C (Chilling sensitive below 8°C)',
    optimalRH: '85% - 90%',
    baselineShelfLifeDays: 6,
    idealMAP: { o2: 4, co2: 6, n2: 90 },
    activeTech: 'Laser micro-perforated bio-film with anti-fog additive',
    targetOTR: '1800 - 3000 cm³/m²·day',
    targetWVTR: '25 - 40 g/m²·day'
  },
  {
    id: 'baby-spinach',
    name: 'Organic Baby Spinach & Microgreens',
    category: 'horticulture',
    icon: '🥬',
    image: '/images/spinach-packaging.jpg',
    popularTag: 'Extreme Transpiration',
    description: 'Ultra-high surface area to mass ratio; wilts rapidly due to moisture loss and off-odor development.',
    aw: 0.99,
    moistureContent: '92%',
    respirationRate: 'Extremely High (80-160 mg CO₂/kg·h at 10°C)',
    ethyleneSensitivity: 'High (Triggers rapid leaf yellowing / chlorophyll loss)',
    o2Sensitivity: 4,
    moistureSensitivity: 5,
    lightSensitivity: 3,
    microbialRisk: 'High (Pseudomonas soft rot & wet breakdown)',
    recommendedTemp: '0°C - 4°C',
    optimalRH: '95% - 98%',
    baselineShelfLifeDays: 2,
    idealMAP: { o2: 8, co2: 10, n2: 82 },
    activeTech: 'Biodegradable bagasse tray with moisture absorption pad & high-permeability bio-lid',
    targetOTR: '3000 - 6000 cm³/m²·day',
    targetWVTR: '30 - 50 g/m²·day'
  },
  {
    id: 'kashmiri-apple',
    name: 'Kashmiri Red Delicious Apples',
    category: 'horticulture',
    icon: '🍏',
    image: '/images/apples-packaging.jpg',
    popularTag: 'CA & Cold Storage',
    description: 'Moderate respiration rate with prolonged storage potential; vulnerable to superficial scald and bitter pit.',
    aw: 0.96,
    moistureContent: '85%',
    respirationRate: 'Moderate (10-25 mg CO₂/kg·h at 10°C)',
    ethyleneSensitivity: 'Very High (Auto-catalytic ethylene synthesis)',
    o2Sensitivity: 3,
    moistureSensitivity: 3,
    lightSensitivity: 1,
    microbialRisk: 'Low to Moderate (Penicillium expansum blue mold)',
    recommendedTemp: '0°C - 2°C',
    optimalRH: '90% - 95%',
    baselineShelfLifeDays: 14,
    idealMAP: { o2: 2, co2: 2, n2: 96 },
    activeTech: '1-MCP sachet with ethylene absorption bio-liner',
    targetOTR: '< 1000 cm³/m²·day',
    targetWVTR: '10 - 20 g/m²·day'
  },

  // 2. DAIRY & FATS
  {
    id: 'paneer',
    name: 'Artisanal Fresh Paneer (Cottage Cheese)',
    category: 'dairy',
    icon: '🧀',
    image: '/images/paneer-packaging.jpg',
    popularTag: 'Dairy MSME Core',
    isFlagship: true,
    description: 'High water activity dairy product vulnerable to yeast, molds, lactic souring, and surface slimy bacterial growth.',
    aw: 0.97,
    moistureContent: '55% - 60%',
    respirationRate: 'None (Non-respiring)',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 4,
    lightSensitivity: 3,
    microbialRisk: 'Severe (Pseudomonas, Coliforms, Staph aureus)',
    recommendedTemp: '2°C - 4°C (Strict Cold Chain)',
    optimalRH: '80% - 85%',
    baselineShelfLifeDays: 2,
    idealMAP: { o2: 0.2, co2: 50, n2: 49.8 },
    activeTech: 'Vacuum barrier pouches with nisin-infused antimicrobial coating',
    targetOTR: '< 20 cm³/m²·day',
    targetWVTR: '< 3.0 g/m²·day'
  },
  {
    id: 'desi-ghee',
    name: 'Cold-Churned Desi Cow Ghee',
    category: 'dairy',
    icon: '🧈',
    image: '/images/ghee-packaging.jpg',
    popularTag: 'High Value Dairy Fat',
    description: 'Anhydrous milk fat prone to photo-oxidation, lipid peroxide formation, and metallic off-flavors.',
    aw: 0.20,
    moistureContent: '< 0.3%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 4,
    lightSensitivity: 5,
    microbialRisk: 'Very Low (Oxidative rancidity is primary limit)',
    recommendedTemp: '20°C - 28°C (Ambient dark)',
    optimalRH: '40% - 60%',
    baselineShelfLifeDays: 60,
    idealMAP: { o2: 0.1, co2: 0, n2: 99.9 },
    activeTech: 'UV-blocking amber bio-substrate with nitrogen head-space flush',
    targetOTR: '< 1.5 cm³/m²·day',
    targetWVTR: '< 1.0 g/m²·day'
  },
  {
    id: 'pasteurized-milk',
    name: 'Pasteurized Homogenized A2 Whole Milk',
    category: 'dairy',
    icon: '🥛',
    image: '/images/milk-packaging.jpg',
    popularTag: 'Cold Chain Essential',
    description: 'Ultra-perishable liquid milk susceptible to psychrotrophic bacterial souring and light-induced riboflavin breakdown.',
    aw: 0.99,
    moistureContent: '88%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 3,
    lightSensitivity: 5,
    microbialRisk: 'Severe (Listeria, Bacillus cereus spore germination)',
    recommendedTemp: '2°C - 4°C',
    optimalRH: 'Not critical for liquid packs',
    baselineShelfLifeDays: 3,
    idealMAP: { o2: 0, co2: 10, n2: 90 },
    activeTech: 'Multi-layer bio-poly bottle with light-blocking black/white TiO₂ barrier',
    targetOTR: '< 5 cm³/m²·day',
    targetWVTR: '< 1.0 g/m²·day'
  },
  {
    id: 'shrikhand-dahi',
    name: 'Cultured Set Dahi & Cardamom Shrikhand',
    category: 'dairy',
    icon: '🥣',
    image: '/images/dahi-packaging.jpg',
    popularTag: 'Fermented Dairy',
    description: 'High solids fermented milk dessert susceptible to surface mold growth, whey syneresis, and post-acidification.',
    aw: 0.92,
    moistureContent: '42%',
    respirationRate: 'Low microbial respiration',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 4,
    lightSensitivity: 3,
    microbialRisk: 'High (Yeast & fungal surface bloom)',
    recommendedTemp: '4°C - 6°C',
    optimalRH: '75%',
    baselineShelfLifeDays: 10,
    idealMAP: { o2: 0.5, co2: 40, n2: 59.5 },
    activeTech: 'Bio-PLA tub with hermetic foil peel-lid & natamycin antifungal rim',
    targetOTR: '< 15 cm³/m²·day',
    targetWVTR: '< 2.5 g/m²·day'
  },

  // 3. GRAINS, CEREALS & BAKERY
  {
    id: 'basmati-rice',
    name: 'Aged Pusa 1121 Basmati Rice',
    category: 'grains_bakery',
    icon: '🍚',
    image: '/images/rice-packaging.jpg',
    popularTag: 'GI-Tagged Export',
    isFlagship: true,
    description: 'Dry cereal grain vulnerable to Tribolium castaneum (weevil pest ingress), moisture re-absorption, and 2-AP aroma loss.',
    aw: 0.55,
    moistureContent: '12% - 13%',
    respirationRate: 'Negligible',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 2,
    moistureSensitivity: 5,
    lightSensitivity: 2,
    microbialRisk: 'Low (Mold only if moisture > 14%)',
    recommendedTemp: '18°C - 25°C',
    optimalRH: '< 65%',
    baselineShelfLifeDays: 180,
    idealMAP: { o2: 1, co2: 30, n2: 69 },
    activeTech: 'Hermetic bio-barrier with bio-based natural pest repellent film',
    targetOTR: '< 80 cm³/m²·day',
    targetWVTR: '< 2.5 g/m²·day'
  },
  {
    id: 'sourdough-bread',
    name: 'Artisanal Whole Wheat Sourdough Loaf',
    category: 'grains_bakery',
    icon: '🥖',
    image: '/images/sourdough-packaging.jpg',
    popularTag: 'Bakery Perishable',
    description: 'Prone to rapid starch retrogradation (staling), crust softening, and Rhizopus stolonifer mold.',
    aw: 0.94,
    moistureContent: '38%',
    respirationRate: 'Low',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 4,
    lightSensitivity: 2,
    microbialRisk: 'High (Mold colonies after 72 hours at 25°C)',
    recommendedTemp: '18°C - 22°C (Do not refrigerate to prevent rapid staling)',
    optimalRH: '60% - 65%',
    baselineShelfLifeDays: 3,
    idealMAP: { o2: 0.1, co2: 60, n2: 39.9 },
    activeTech: 'Active ethanol vapor emitter sachet in recyclable high-barrier pouch',
    targetOTR: '< 10 cm³/m²·day',
    targetWVTR: '< 4.0 g/m²·day'
  },
  {
    id: 'khari-biscuits',
    name: 'Traditional Butter Khari & Nan Khatai',
    category: 'grains_bakery',
    icon: '🥐',
    image: '/images/cookies-packaging.jpg',
    popularTag: 'Ultra-Hygroscopic',
    description: 'Flaky baked puffs with high butter fat; lose signature crispness immediately upon absorbing atmospheric moisture.',
    aw: 0.25,
    moistureContent: '3% - 5%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 5,
    lightSensitivity: 4,
    microbialRisk: 'Very Low (Loss of texture & oxidative rancidity are critical limits)',
    recommendedTemp: 'Ambient Dry (20°C - 30°C)',
    optimalRH: '< 45%',
    baselineShelfLifeDays: 30,
    idealMAP: { o2: 1, co2: 0, n2: 99 },
    activeTech: 'High-barrier metallized bio-film with food-grade clay desiccant',
    targetOTR: '< 1.5 cm³/m²·day',
    targetWVTR: '< 0.8 g/m²·day'
  },
  {
    id: 'makhana-foxnuts',
    name: 'Roasted & Spiced Foxnuts (Phool Makhana)',
    category: 'grains_bakery',
    icon: '🍿',
    image: '/images/makhana-packaging.jpg',
    popularTag: 'Superfood Snack',
    description: 'Expanded porous starch matrix prone to rapid moisture sponginess and seasoning oil oxidation.',
    aw: 0.28,
    moistureContent: '4%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 5,
    lightSensitivity: 3,
    microbialRisk: 'Very Low',
    recommendedTemp: 'Ambient Dry',
    optimalRH: '< 50%',
    baselineShelfLifeDays: 45,
    idealMAP: { o2: 0.5, co2: 0, n2: 99.5 },
    activeTech: 'Nitrogen gas flushed recyclable pouch with O₂ scavenger',
    targetOTR: '< 2.0 cm³/m²·day',
    targetWVTR: '< 1.0 g/m²·day'
  },

  // 4. MEAT, POULTRY & SEAFOOD
  {
    id: 'fresh-shrimps',
    name: 'Fresh Black Tiger Shrimps (Marine)',
    category: 'meat_seafood',
    icon: '🦐',
    image: '/images/shrimp-packaging.jpg',
    popularTag: 'Seafood Export Star',
    isFlagship: true,
    description: 'Extremely vulnerable to melanosis (black spot via polyphenol oxidase) and rapid volatile basic nitrogen (TVBN) spoilage.',
    aw: 0.99,
    moistureContent: '78%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 4,
    lightSensitivity: 3,
    microbialRisk: 'Critical (Shewanella putrefaciens, Vibrio spp.)',
    recommendedTemp: '-1°C to 2°C (Slurry ice cold chain)',
    optimalRH: '95%',
    baselineShelfLifeDays: 2,
    idealMAP: { o2: 0, co2: 60, n2: 40 },
    activeTech: 'Chitosan-sodium metabisulfite active film with high-barrier EVOH',
    targetOTR: '< 5 cm³/m²·day',
    targetWVTR: '< 2.0 g/m²·day'
  },
  {
    id: 'raw-mutton',
    name: 'Fresh Prime Goat Meat (Chevon / Mutton)',
    category: 'meat_seafood',
    icon: '🥩',
    image: '/images/mutton-packaging.jpg',
    popularTag: 'Red Meat Premium',
    description: 'Requires color retention (oxymyoglobin red hue) while preventing psychrotrophic bacterial slime and lipid oxidation.',
    aw: 0.98,
    moistureContent: '74%',
    respirationRate: 'Post-mortem enzyme activity',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 4,
    lightSensitivity: 4,
    microbialRisk: 'Critical (Brochothrix thermosphacta, Pseudomonas)',
    recommendedTemp: '0°C - 3°C',
    optimalRH: '85% - 90%',
    baselineShelfLifeDays: 3,
    idealMAP: { o2: 70, co2: 25, n2: 5 },
    activeTech: 'Antimicrobial vacuum skin packaging (VSP) with cellulose super-absorbent drip pad',
    targetOTR: '< 20 cm³/m²·day (Or < 1.0 for anaerobic vacuum)',
    targetWVTR: '< 2.0 g/m²·day'
  },
  {
    id: 'farmed-chicken',
    name: 'Fresh Chilled Broiler Chicken Fillets',
    category: 'meat_seafood',
    icon: '🍗',
    image: '/images/chicken-packaging.jpg',
    popularTag: 'High Volume Poultry',
    description: 'High moisture and neutral pH make it a prime substrate for Salmonella, Campylobacter, and foul-smelling sulfides.',
    aw: 0.99,
    moistureContent: '75%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 4,
    lightSensitivity: 2,
    microbialRisk: 'Severe (Spoilage within 48h at >5°C)',
    recommendedTemp: '-1°C to 2°C',
    optimalRH: '90%',
    baselineShelfLifeDays: 2,
    idealMAP: { o2: 0, co2: 50, n2: 50 },
    activeTech: 'Silver nanoparticle doped antimicrobial bio-lidding + rigid bio-tray',
    targetOTR: '< 10 cm³/m²·day',
    targetWVTR: '< 3.0 g/m²·day'
  },
  {
    id: 'pomfret-fish',
    name: 'Fresh Whole Silver Pomfret',
    category: 'meat_seafood',
    icon: '🐟',
    image: '/images/fish-packaging.jpg',
    popularTag: 'Delicate Marine Catch',
    description: 'High unsaturated lipid content vulnerable to rapid trimethylamine (TMA) fishy degradation and fat rancidity.',
    aw: 0.98,
    moistureContent: '76%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 4,
    lightSensitivity: 3,
    microbialRisk: 'Critical (Shewanella, Photobacterium phosphoreum)',
    recommendedTemp: '-1°C to 1°C',
    optimalRH: '95%',
    baselineShelfLifeDays: 2,
    idealMAP: { o2: 0, co2: 60, n2: 40 },
    activeTech: 'Rosemary extract infused antioxidant film with vacuum seal',
    targetOTR: '< 2 cm³/m²·day',
    targetWVTR: '< 1.5 g/m²·day'
  },

  // 5. SPICES, CONDIMENTS & OILS
  {
    id: 'organic-turmeric',
    name: 'Lakadong High-Curcumin Turmeric Powder',
    category: 'spices_oils',
    icon: '🧂',
    image: '/images/turmeric-packaging.jpg',
    popularTag: 'High Value Spice',
    description: 'Curcumin pigment is highly susceptible to photo-degradation and volatile oleoresin evaporation.',
    aw: 0.35,
    moistureContent: '8%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 5,
    lightSensitivity: 5,
    microbialRisk: 'Low (Curcumin loss & lump formation from humidity)',
    recommendedTemp: 'Ambient Dry (20°C - 30°C)',
    optimalRH: '< 50%',
    baselineShelfLifeDays: 90,
    idealMAP: { o2: 1, co2: 0, n2: 99 },
    activeTech: 'Light-impermeable metallized cellulose or high-barrier kraft pouch',
    targetOTR: '< 2 cm³/m²·day',
    targetWVTR: '< 0.8 g/m²·day'
  },
  {
    id: 'cold-pressed-mustard-oil',
    name: 'Kachi Ghani Cold-Pressed Mustard Oil',
    category: 'spices_oils',
    icon: '🫒',
    image: '/images/mustard-oil-packaging.jpg',
    popularTag: 'Traditional Oil',
    description: 'Rich in monounsaturated fats and pungent allyl isothiocyanate; vulnerable to photo-oxidation and free fatty acid rise.',
    aw: 0.20,
    moistureContent: '< 0.1%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 2,
    lightSensitivity: 5,
    microbialRisk: 'None (Peroxide index deterioration is governing factor)',
    recommendedTemp: 'Ambient Dark (20°C - 25°C)',
    optimalRH: 'Ambient',
    baselineShelfLifeDays: 90,
    idealMAP: { o2: 0.1, co2: 0, n2: 99.9 },
    activeTech: 'Amber UV-absorbing recyclable bottle with nitrogen headspace doser',
    targetOTR: '< 0.8 cm³/m²·day',
    targetWVTR: '< 0.5 g/m²·day'
  },
  {
    id: 'coorg-black-pepper',
    name: 'Whole Tellicherry Grade-A Black Pepper',
    category: 'spices_oils',
    icon: '🌿',
    image: '/images/black-pepper-packaging.jpg',
    popularTag: 'Export King of Spices',
    description: 'High piperine and essential oil content; sharp corns cause pinholing in flimsy films, risking aroma loss.',
    aw: 0.40,
    moistureContent: '10%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 3,
    moistureSensitivity: 4,
    lightSensitivity: 4,
    microbialRisk: 'Low (Mold only if humidity > 70%)',
    recommendedTemp: 'Ambient Dry',
    optimalRH: '< 55%',
    baselineShelfLifeDays: 180,
    idealMAP: { o2: 2, co2: 0, n2: 98 },
    activeTech: 'High puncture-resistance multi-ply barrier pouch',
    targetOTR: '< 5 cm³/m²·day',
    targetWVTR: '< 1.5 g/m²·day'
  },
  {
    id: 'kashmiri-saffron',
    name: 'Grade-1 Kashmiri Mongra Saffron',
    category: 'spices_oils',
    icon: '🌾',
    image: '/images/saffron-packaging.jpg',
    popularTag: 'Ultra-High Value GI',
    description: 'Worlds most expensive spice; crocin (color), safranal (aroma), and picrocrocin (flavor) degrade rapidly in light/humidity.',
    aw: 0.30,
    moistureContent: '6%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 5,
    lightSensitivity: 5,
    microbialRisk: 'None',
    recommendedTemp: '15°C - 20°C (Hermetic Dark)',
    optimalRH: '< 40%',
    baselineShelfLifeDays: 120,
    idealMAP: { o2: 0.05, co2: 0, n2: 99.95 },
    activeTech: 'Airtight tinplate or metallized bio-canister with dual rubber gasket seal',
    targetOTR: '< 0.1 cm³/m²·day',
    targetWVTR: '< 0.1 g/m²·day'
  },

  // 6. READY-TO-EAT (RTE) & PROCESSED FOODS
  {
    id: 'retort-dal-makhani',
    name: 'Ready-to-Eat Retort Dal Makhani',
    category: 'rte_processed',
    icon: '🍲',
    image: '/images/dal-packaging.jpg',
    popularTag: 'Convenience Food',
    isFlagship: true,
    description: 'Thermal processed meal requiring absolute hermetic seal, 121°C retort sterilization resistance, zero pinholing.',
    aw: 0.96,
    moistureContent: '72%',
    respirationRate: 'None (Sterile post-retort)',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 5,
    moistureSensitivity: 5,
    lightSensitivity: 4,
    microbialRisk: 'Zero post-retort (Risk occurs if barrier seal is breached)',
    recommendedTemp: 'Ambient (Up to 40°C)',
    optimalRH: 'Any',
    baselineShelfLifeDays: 1,
    idealMAP: { o2: 0, co2: 0, n2: 100 },
    activeTech: 'Retortable recyclable mono-PP pouch with SiOx/AlOx nanocoating',
    targetOTR: '< 0.5 cm³/m²·day',
    targetWVTR: '< 0.5 g/m²·day'
  },
  {
    id: 'vacuum-fried-chips',
    name: 'Vacuum-Fried Jackfruit & Tapioca Crisps',
    category: 'rte_processed',
    icon: '🍌',
    image: '/images/crisps-packaging.jpg',
    popularTag: 'Healthy Snack MSME',
    description: 'Crunchy fruit snack with 15% fat; absorbs humidity within minutes, causing chewiness and rancidity.',
    aw: 0.22,
    moistureContent: '2.5%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 5,
    lightSensitivity: 3,
    microbialRisk: 'Very Low',
    recommendedTemp: 'Ambient Dry',
    optimalRH: '< 45%',
    baselineShelfLifeDays: 45,
    idealMAP: { o2: 0.2, co2: 0, n2: 99.8 },
    activeTech: 'Metallized NatureFlex bio-film pouch with nitrogen gas cushion',
    targetOTR: '< 1.0 cm³/m²·day',
    targetWVTR: '< 0.8 g/m²·day'
  },
  {
    id: 'mango-chutney',
    name: 'Artisanal Sweet Mango Murabba & Chutney',
    category: 'rte_processed',
    icon: '🍯',
    image: '/images/chutney-packaging.jpg',
    popularTag: 'Acidic Preserves',
    description: 'High sugar and natural organic acids (citric, malic); corrosive to untreated metal cans; requires acid-resistant barrier.',
    aw: 0.78,
    moistureContent: '35%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 3,
    lightSensitivity: 4,
    microbialRisk: 'Moderate (Osmophilic yeasts & xerophilic molds)',
    recommendedTemp: 'Ambient (18°C - 28°C)',
    optimalRH: 'Ambient',
    baselineShelfLifeDays: 90,
    idealMAP: { o2: 1, co2: 10, n2: 89 },
    activeTech: 'Bio-laminated barrier pouch with acid-resistant inner sealing layer',
    targetOTR: '< 2.0 cm³/m²·day',
    targetWVTR: '< 1.2 g/m²·day'
  },
  {
    id: 'instant-millet-khichdi',
    name: 'Freeze-Dried Instant Millets Khichdi',
    category: 'rte_processed',
    icon: '🥣',
    image: '/images/khichdi-packaging.jpg',
    popularTag: 'Shree Anna Superfood',
    description: 'Porous freeze-dried matrix requiring boiling water reconstitution; extremely sensitive to moisture caking.',
    aw: 0.18,
    moistureContent: '2%',
    respirationRate: 'None',
    ethyleneSensitivity: 'None',
    o2Sensitivity: 4,
    moistureSensitivity: 5,
    lightSensitivity: 3,
    microbialRisk: 'Very Low',
    recommendedTemp: 'Ambient Dry',
    optimalRH: '< 40%',
    baselineShelfLifeDays: 60,
    idealMAP: { o2: 0.1, co2: 0, n2: 99.9 },
    activeTech: 'Recyclable mono-PE high barrier pouch with silica desiccant card',
    targetOTR: '< 0.8 cm³/m²·day',
    targetWVTR: '< 0.6 g/m²·day'
  }
];

export const PACKAGING_MATERIALS = [
  {
    id: 'pha-marine-film',
    name: 'PHA (Polyhydroxyalkanoate) Marine-Compostable Bio-Film',
    category: '100% Bio-based & Compostable',
    origin: 'Bacterial fermentation of agricultural sugar/waste oil',
    image: '/images/materials-showcase.jpg',
    otr: 120, // cm3/m2.day
    wvtr: 18.0, // g/m2.day
    thicknessMicrons: 35,
    tensileStrength: '32 MPa',
    thermalResistance: '-20°C to 110°C',
    compostability: 'Home Compostable & Marine Biodegradable (180 days)',
    carbonFootprint: 0.8, // kg CO2e / kg
    costPerKg: 380, // in INR
    costRating: 'Moderate - High',
    fssaiStatus: 'Approved under IS 9845 / MoFPI Green Packaging Guidelines',
    features: ['100% Microplastic-free', 'Naturally degradable in soil', 'Excellent aroma barrier'],
    drawbacks: ['Moderate moisture barrier, requires nano-clay doping for high-humidity foods'],
    bestFor: ['horticulture', 'grains_bakery']
  },
  {
    id: 'evoh-mono-pe',
    name: 'Recyclable Mono-PE with EVOH Ultra-Barrier Layer',
    category: 'Recyclable Mono-Material (Circular Economy)',
    origin: 'Polyethylene (PE) with <5% EVOH compatible with RIC #4 recycling',
    image: '/images/paneer-packaging.jpg',
    otr: 1.2,
    wvtr: 1.5,
    thicknessMicrons: 65,
    tensileStrength: '55 MPa',
    thermalResistance: '-30°C to 95°C',
    compostability: '100% Recyclable (Meets MoFPI & Plastic Waste EPR targets)',
    carbonFootprint: 1.6,
    costPerKg: 210,
    costRating: 'Economical - Moderate',
    fssaiStatus: 'Compliant with IS 10146 & IS 9845 (Food Contact Safe)',
    features: ['Extreme oxygen barrier', 'Crystal clear optical clarity', 'Widely recyclable in India'],
    drawbacks: ['Not compostable (Requires collection & recycling stream)'],
    bestFor: ['dairy', 'meat_seafood', 'rte_processed', 'spices_oils']
  },
  {
    id: 'chitosan-active-film',
    name: 'Bio-Active Chitosan-Starch Antimicrobial Composite Film',
    category: 'Active & Antimicrobial Packaging',
    origin: 'Crustacean shell biopolymer + tapioca starch doped with essential oils',
    otr: 45,
    wvtr: 28.0,
    thicknessMicrons: 40,
    tensileStrength: '28 MPa',
    thermalResistance: '0°C to 80°C',
    compostability: '100% Soil Biodegradable (90 days)',
    carbonFootprint: 0.5,
    costPerKg: 320,
    costRating: 'Moderate',
    fssaiStatus: 'Meets FSSAI Active Packaging Guidance 2022',
    features: ['Inhibits Listeria, Salmonella and fungal molds', 'Slow release of natural bio-preservatives', 'Edible grade'],
    drawbacks: ['Sensitive to liquid immersion without wax cross-linking'],
    bestFor: ['horticulture', 'dairy', 'meat_seafood']
  },
  {
    id: 'bagasse-pla-tray',
    name: 'Molded Sugarcane Bagasse Tray with PLA Bio-Lamination',
    category: 'Agro-Waste Bio-Rigid Packaging',
    origin: 'Upcycled sugar mill bagasse fibers with bio-laminated interior',
    otr: 80,
    wvtr: 8.0,
    thicknessMicrons: 450,
    tensileStrength: 'Rigid Tray Structure',
    thermalResistance: '-18°C to 120°C (Microwavable & Oven Safe)',
    compostability: 'Industrial & Backyard Compostable (120 days)',
    carbonFootprint: 0.4,
    costPerKg: 140,
    costRating: 'Affordable (High local availability in India)',
    fssaiStatus: 'Certified Food Grade under BIS IS 16928',
    features: ['Sturdy rigid container', 'Heat sealable with bio-lidding', 'Zero tree felling'],
    drawbacks: ['Heavier packaging tare weight compared to flexible films'],
    bestFor: ['horticulture', 'rte_processed', 'grains_bakery']
  },
  {
    id: 'metallized-cellulose-bio',
    name: 'Metallized High-Barrier Cellulose (NatureFlex™ Bio-Foil)',
    category: 'Sustainable High-Barrier Foil Alternative',
    origin: 'FSC-Certified Wood Pulp with vacuum deposited aluminium atomic layer (0.02 µm)',
    otr: 0.8,
    wvtr: 0.9,
    thicknessMicrons: 30,
    tensileStrength: '48 MPa',
    thermalResistance: '-20°C to 180°C',
    compostability: 'Certified Home & Industrial Compostable (EN 13432)',
    carbonFootprint: 1.2,
    costPerKg: 490,
    costRating: 'Premium',
    fssaiStatus: 'FSSAI compliant for direct dry food contact',
    features: ['Complete light block (UV/Vis)', 'Replaces non-recyclable multi-material Al-foil laminates', 'Dead-fold characteristics'],
    drawbacks: ['Higher raw material cost'],
    bestFor: ['spices_oils', 'dairy', 'rte_processed']
  },
  {
    id: 'aqueous-kraft-barrier',
    name: 'Aqueous Coated Barrier Kraft Paper Pouch',
    category: 'Recyclable Paper-Based Packaging',
    origin: 'Unbleached virgin kraft paper with water-based dispersion coating',
    otr: 15,
    wvtr: 2.2,
    thicknessMicrons: 80,
    tensileStrength: '65 MPa',
    thermalResistance: '-10°C to 100°C',
    compostability: 'Repulpable in standard paper recycling mills (>85% paper yield)',
    carbonFootprint: 0.7,
    costPerKg: 190,
    costRating: 'Economical',
    fssaiStatus: 'Meets IS 6615 & FSSAI 2018 packaging regulations',
    features: ['Natural artisan aesthetic', 'Curbside paper recyclability', 'Excellent puncture strength'],
    drawbacks: ['Opaque (Consumers cannot inspect internal food)'],
    bestFor: ['grains_bakery', 'spices_oils']
  },
  {
    id: 'siox-retort-pouch',
    name: 'SiOx-Coated Recyclable Polypropylene Retort Pouch',
    category: 'High-Temperature Sterile Barrier',
    origin: 'Biaxially oriented PP with silicon oxide ceramic nano-barrier',
    otr: 0.4,
    wvtr: 0.4,
    thicknessMicrons: 90,
    tensileStrength: '70 MPa',
    thermalResistance: '-40°C to 135°C (Full Retort Autoclave)',
    compostability: 'Mono-Polymer Recyclable (PP Stream #5)',
    carbonFootprint: 1.9,
    costPerKg: 290,
    costRating: 'Moderate',
    fssaiStatus: 'Fully certified for retort meals up to 2 years shelf life',
    features: ['Withstands 121°C sterilization', 'Non-metallic (Microwavable and metal-detector friendly)', 'Impermeable to aromas'],
    drawbacks: ['Requires specialized heat-sealing equipment'],
    bestFor: ['rte_processed', 'meat_seafood']
  }
];

// FSSAI & BIS Standards Reference
export const REGULATORY_STANDARDS = [
  {
    code: 'FSSAI Packaging Regulations 2018',
    scope: 'General migration limits, prohibition of recycled plastic for direct food contact unless approved',
    detail: 'Overall Migration Limit (OML) shall not exceed 60 mg/kg or 10 mg/dm² of packaging surface.',
    status: 'Mandatory across India'
  },
  {
    code: 'IS 9845 : 1998 (Reaffirmed 2019)',
    scope: 'Methods of analysis for overall migration of constituents of plastics',
    detail: 'Testing simulant protocols with 3% Acetic Acid, 10% Ethanol, 50% Ethanol and n-Heptane.',
    status: 'National Standard'
  },
  {
    code: 'Plastic Waste Management Rules (EPR 2022-2026)',
    scope: 'Extended Producer Responsibility targets for packaging recyclability and minimum PCR content',
    detail: 'Category I (Rigid), Category II (Flexible single/multi-layer), Category III (Multi-layered plastics).',
    status: 'Ministry of Environment, Forest and Climate Change (MoEFCC)'
  },
  {
    code: 'IS 16928 : 2018',
    scope: 'Food Contact Tableware made from Biomass (Bagasse, Paddy Straw, Wheat Straw)',
    detail: 'Ensures zero heavy metal leaching and compostability verification under IS 17088.',
    status: 'MoFPI Recommended'
  }
];

// MoFPI Schemes for Food Processors & MSMEs
export const MOFPI_SCHEMES = [
  {
    title: 'PM Formalisation of Micro food processing Enterprises (PMFME)',
    subsidy: '35% Credit-Linked Subsidy (Up to ₹10 Lakhs)',
    focus: 'Capital investment support for MSMEs, FPOs, and SHGs to upgrade to modern sustainable packaging equipment (MAP machines, vacuum sealers, bio-film laminators).',
    link: 'https://pmfme.mofpi.gov.in',
    tag: 'Financial Grant'
  },
  {
    title: 'Pradhan Mantri Kisan SAMPADA Yojana (PMKSY)',
    subsidy: 'Grant-in-Aid up to 50% (Max ₹5 to ₹10 Crores)',
    focus: 'Creation of Mega Food Parks, Agro-Processing Clusters, and Integrated Cold Chain with advanced active packaging testing infrastructure.',
    link: 'https://mofpi.gov.in/schemes/pradhan-mantri-kisan-sampada-yojana',
    tag: 'Infrastructure Scheme'
  },
  {
    title: 'MoFPI R&D in Food Processing Sector',
    subsidy: '100% Grant for Central/State Govt Institutions; 50% for Industry',
    focus: 'Development of novel bio-based, antimicrobial, and smart biodegradable packaging films utilizing indigenous agricultural residues.',
    link: 'https://mofpi.gov.in',
    tag: 'Research & Innovation'
  }
];

// AI Recommendation Engine Logic
export function calculateRecommendation(commodity, preferences) {
  const {
    targetShelfLifeMonths = 3,
    storageCondition = 'ambient', // ambient, cold_chain, frozen
    sustainabilityPriority = 'balanced', // eco_max, balanced, cost_min
    distributionType = 'domestic', // domestic, export
    budgetConstraint = 'medium' // low, medium, premium
  } = preferences;

  const targetShelfLifeDays = targetShelfLifeMonths * 30;

  return PACKAGING_MATERIALS.map(mat => {
    // 1. Barrier Suitability (OTR & WVTR match)
    let barrierScore = 100;
    
    // Check oxygen sensitivity
    if (commodity.o2Sensitivity >= 4) {
      if (mat.otr > 50) barrierScore -= 35;
      else if (mat.otr > 10) barrierScore -= 15;
      else barrierScore += 10;
    }

    // Check moisture sensitivity
    if (commodity.moistureSensitivity >= 4) {
      if (mat.wvtr > 15) barrierScore -= 30;
      else if (mat.wvtr > 5) barrierScore -= 10;
      else barrierScore += 10;
    }

    // Retort requirement for RTE
    if (commodity.id === 'retort-dal-makhani') {
      if (!mat.thermalResistance.includes('Retort') && !mat.thermalResistance.includes('120°C')) {
        barrierScore -= 60;
      }
    }

    // 2. Shelf Life Extension Estimation
    // Base multiplier determined by barrier quality + active technology
    let shelfLifeMultiplier = 1.0;
    if (mat.otr < 2 && mat.wvtr < 2) shelfLifeMultiplier = 4.5;
    else if (mat.otr < 15 && mat.wvtr < 5) shelfLifeMultiplier = 3.2;
    else if (mat.otr < 80 && mat.wvtr < 15) shelfLifeMultiplier = 2.0;
    else shelfLifeMultiplier = 1.4;

    // Active packaging bonus for perishable items
    if (mat.id === 'chitosan-active-film' && (commodity.category === 'horticulture' || commodity.category === 'meat_seafood' || commodity.category === 'dairy')) {
      shelfLifeMultiplier += 1.2;
    }

    if (storageCondition === 'cold_chain') {
      shelfLifeMultiplier *= 1.8;
    } else if (storageCondition === 'frozen') {
      shelfLifeMultiplier *= 4.0;
    }

    const estimatedDays = Math.round(commodity.baselineShelfLifeDays * shelfLifeMultiplier);

    // 3. Sustainability Score (0 - 100)
    let sustainabilityScore = 70;
    if (mat.compostability.includes('Home')) sustainabilityScore = 98;
    else if (mat.compostability.includes('Industrial') || mat.compostability.includes('Bio')) sustainabilityScore = 90;
    else if (mat.compostability.includes('Recyclable')) sustainabilityScore = 82;

    // 4. Cost Efficiency Score
    let costScore = 80;
    if (mat.costPerKg < 180) costScore = 95;
    else if (mat.costPerKg < 300) costScore = 80;
    else costScore = 65;

    // 5. Total Weighted AI Score
    let totalScore = 0;
    if (sustainabilityPriority === 'eco_max') {
      totalScore = (barrierScore * 0.35) + (sustainabilityScore * 0.45) + (costScore * 0.20);
    } else if (sustainabilityPriority === 'cost_min') {
      totalScore = (barrierScore * 0.35) + (sustainabilityScore * 0.20) + (costScore * 0.45);
    } else { // balanced
      totalScore = (barrierScore * 0.45) + (sustainabilityScore * 0.30) + (costScore * 0.25);
    }

    // Clamp score between 40 and 99
    totalScore = Math.min(99, Math.max(45, Math.round(totalScore)));

    // Carbon reduction vs conventional multi-layer plastic (standard is ~3.5 kg CO2e/kg)
    const carbonSavingPct = Math.round(((3.5 - mat.carbonFootprint) / 3.5) * 100);

    return {
      material: mat,
      aiScore: totalScore,
      shelfLifeDays: estimatedDays,
      shelfLifeExtensionRatio: (shelfLifeMultiplier).toFixed(1),
      barrierScore: Math.min(100, Math.max(30, Math.round(barrierScore))),
      sustainabilityScore,
      costScore,
      carbonSavingPct,
      meetsTarget: estimatedDays >= targetShelfLifeDays,
      fssaiCertified: true
    };
  }).sort((a, b) => b.aiScore - a.aiScore);
}
