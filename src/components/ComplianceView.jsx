import React from 'react';
import { REGULATORY_STANDARDS } from '../data/packagingData';
import { ShieldCheck, FileCheck, AlertCircle, BookOpen } from 'lucide-react';

export default function ComplianceView() {
  return (
    <div className="container" style={{ padding: '2rem 0 4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          📜 FSSAI, BIS & MoEFCC Regulatory Standards Matrix
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Statutory compliance guidelines for food contact materials, overall migration limits (OML), and Extended Producer Responsibility (EPR) mandates in India.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '1.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <ShieldCheck size={24} color="#16a34a" />
            <h3 style={{ fontSize: '1.1rem', color: '#15803d', fontWeight: 700 }}>
              FSSAI Migration Limits (IS 9845)
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#166534', lineHeight: 1.6 }}>
            Overall Migration Limit (OML) shall not exceed <strong>60 mg/kg</strong> or <strong>10 mg/dm²</strong> of the surface area in contact with food. Plastic materials must be virgin food-grade, or approved decontaminated rPET with NOC from FSSAI.
          </p>
        </div>

        <div style={{ background: '#eff6ff', border: '1px solid #93c5fd', padding: '1.5rem', borderRadius: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <FileCheck size={24} color="#2563eb" />
            <h3 style={{ fontSize: '1.1rem', color: '#1d4ed8', fontWeight: 700 }}>
              MoEFCC Plastic Waste Rules (EPR 2026)
            </h3>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#1e40af', lineHeight: 1.6 }}>
            Mandatory recyclability and recycling obligations for Brand Owners and Importers. Multi-layered plastics (MLP) must transition towards recyclable mono-materials (e.g. Mono-PE or Mono-PP) or certified compostable bioplastics under IS 17088.
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
        Key Indian Standards for Packaging Materials
      </h3>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {REGULATORY_STANDARDS.map((reg, idx) => (
          <div key={idx} style={{ background: 'white', padding: '1.25rem 1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{reg.code}</h4>
              <span className="material-type-tag" style={{ background: '#f1f5f9', color: '#475569' }}>{reg.status}</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
              <strong>Scope:</strong> {reg.scope}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#047857' }}>
              <strong>Prescribed Requirement:</strong> {reg.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
