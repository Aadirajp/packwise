# PACKWISE AI 🌿📦
### AI-Based Intelligent Food Packaging Material Recommendation System for Food Commodities
**Problem Statement ID:** SIH26236  
**Ministry / Organization:** Ministry of Food Processing Industries (MoFPI)  
**Theme / Domain:** Agriculture, FoodTech & Rural Development  
**Category:** Software Edition (Smart India Hackathon 2026)

---

## 🚀 Overview

**PACKWISE AI** is a state-of-the-art decision-support and material recommendation engine built to slash India's post-harvest agricultural losses (₹1.5+ Lakh Crore annually) by replacing single-use petrochemical plastics with certified bio-polymers, compostable barriers, and active modified-atmosphere packaging.

Developed under the guidelines of the **Ministry of Food Processing Industries (MoFPI)** and aligned with **FSSAI (IS 9845)** and **CPCB Extended Producer Responsibility (EPR 2026)** norms.

---

## ✨ Key Capabilities

1. **Dual-Barrier AI Recommendation Engine**
   - Correlates commodity water activity ($a_w$), respiration rate ($R_{CO_2}$), and ethylene sensitivity against Oxygen Transmission Rate (OTR) and Water Vapor Transmission Rate (WVTR).
   - Recommends tailored bio-materials (PHA, PLA, Bagasse, Chitosan, Cellulose, Recyclable Mono-materials).

2. **Arrhenius Shelf-Life Simulation Lab**
   - Dynamic kinetic models calculating shelf-life extension based on ambient temperature ($Q_{10}$ factor), humidity (% RH), and gas flush concentrations ($O_2, CO_2, N_2$).

3. **Government Grants & Subsidy Integrator (MoFPI)**
   - Automatic subsidy calculator for **PMFME** (35% capital grant up to ₹10 Lakhs) and **PMKSY** agro-processing schemes for farmers, FPOs, and food MSMEs.

4. **Multi-Page Architecture**
   - `/` — Landing page with value proposition, roadmap, and trust indicators.
   - `/recommend` — Interactive AI Recommender with dual simple/expert modes and visual commodity selectors.
   - `/simulation` — Kinetic shelf-life and gas equilibrium simulation laboratory.
   - `/materials` — Bio-polymer materials encyclopedia with search, filters, and migration limits.
   - `/compliance` — FSSAI IS 9845 migration compliance & CPCB EPR guidelines.
   - `/grants` — MoFPI subsidy schemes and application guides.
   - `/about` — SIH26236 problem statement and team mission.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite 8, React Router v7
- **Styling:** Bespoke Responsive Vanilla CSS (Design system with clean tokens, cards, micro-animations)
- **Icons:** Lucide React
- **Asset Pipeline:** High-resolution verified commodity imagery matching each food item (Apples, Mangoes, Strawberries, Milk, Paneer, Ghee, Grains, Seafood, Spices, RTE meals).

---

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/Aadirajp/packwise.git

# Enter the directory
cd packwise

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 🏛️ Regulatory & Standards Alignment

- **FSSAI Regulation (IS 9845):** Overall migration limit $< 60$ mg/kg (or $< 10$ mg/dm²).
- **CPCB EPR Framework 2026:** Target compliance for Category I (Rigid), Category II (Flexible mono-material), and Category IV (Compostable).
- **MoFPI PMFME Scheme:** Credit-linked 35% capital equipment subsidy.
