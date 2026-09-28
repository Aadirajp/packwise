import React from 'react';
import { ShieldCheck, Cpu, Leaf, Award, CheckCircle2, Landmark, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '3rem 0 5rem', maxWidth: '1000px' }}>
      
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: '#e0f2fe',
          color: '#0284c7',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>
          <Award size={16} /> Smart India Hackathon 2026 • Problem ID: SIH26236
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
          About <span style={{ color: 'var(--primary)' }}>PACKWISE AI</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
          AI-Based Intelligent Food Packaging Material Recommendation System for Indian Food Commodities.
        </p>
      </div>

      {/* Problem Statement Card */}
      <div style={{
        background: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '2rem 2.5rem',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Target size={20} color="var(--primary)" /> Problem Statement Overview
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', fontSize: '0.85rem', marginBottom: '1.5rem', border: '1px solid #f1f5f9' }}>
          <div><strong>Problem Statement ID:</strong> SIH26236</div>
          <div><strong>Category:</strong> Software Edition</div>
          <div><strong>Ministry / Org:</strong> Ministry of Food Processing Industries (MoFPI)</div>
          <div><strong>Theme:</strong> Agriculture, FoodTech & Rural Development</div>
        </div>

        <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Post-harvest food losses in India exceed ₹1,50,000 Crore annually, driven predominantly by inadequate packaging, thermal abuse, and moisture condensation during transit. Concurrently, stringent Plastic Waste Management Rules (EPR 2026) mandate a phased elimination of unrecyclable multi-layer plastics (MLPs).
        </p>
        <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7 }}>
          <strong>PACKWISE AI</strong> was conceived to solve this dual dilemma. By leveraging intelligent multi-objective optimization, the system matches the microbiological, respiration, and lipid oxidation vulnerability of any food commodity against certified biodegradable and recyclable packaging substrates.
        </p>
      </div>

      {/* The 4 Core Architectural Modules */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '1.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Cpu size={20} color="#15803d" />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#15803d' }}>Dual-Barrier Physics Engine</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#166534', lineHeight: 1.6 }}>
            Calculates exact Oxygen Transmission Rate (OTR) and Water Vapor Transmission Rate (WVTR) thresholds to prevent anaerobic spoilage while halting desiccation.
          </p>
        </div>

        <div style={{ background: '#eff6ff', border: '1px solid #93c5fd', padding: '1.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Leaf size={20} color="#1d4ed8" />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1d4ed8' }}>Bio-Polymer Circular Economy</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#1e40af', lineHeight: 1.6 }}>
            Prioritizes indigenous Indian agricultural residues (sugarcane bagasse, seaweed extracts, starch) and recyclable mono-materials (Mono-PE/Mono-PP) compliant with EPR 2026.
          </p>
        </div>

        <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '1.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={20} color="#b45309" />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#b45309' }}>FSSAI & BIS Standard Tested</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#92400e', lineHeight: 1.6 }}>
            Automated compliance audits ensuring Overall Migration Limits (OML &lt; 60 mg/kg under IS 9845) are never violated.
          </p>
        </div>

        <div style={{ background: '#faf5ff', border: '1px solid #e9d5ff', padding: '1.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Landmark size={20} color="#6b21a8" />
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#6b21a8' }}>MoFPI MSME Subsidies</h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#581c87', lineHeight: 1.6 }}>
            Instant eligibility calculation for PMFME 35% credit-linked subsidies and PMKSY cold-chain infrastructure grants.
          </p>
        </div>
      </div>
    </div>
  );
}
