import React from 'react';
import { MOFPI_SCHEMES } from '../data/packagingData';
import { Landmark, ArrowUpRight, HelpCircle, CheckCircle, Percent } from 'lucide-react';

export default function SchemesView() {
  return (
    <div className="container" style={{ padding: '2rem 0 4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          🏛️ MoFPI Schemes & Financial Subsidies for MSMEs & FPOs
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Access Central Sector grants, credit-linked capital subsidies, and packaging modernization assistance directly through Ministry initiatives.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {MOFPI_SCHEMES.map((scheme, idx) => (
          <div key={idx} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'var(--shadow-sm)' }}>
            <div>
              <span className="material-type-tag" style={{ marginBottom: '0.75rem' }}>{scheme.tag}</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0.5rem 0', color: 'var(--text-primary)' }}>
                {scheme.title}
              </h3>
              <div style={{ background: '#fef3c7', color: '#92400e', padding: '0.5rem 0.75rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', margin: '0.75rem 0' }}>
                <Percent size={14} style={{ display: 'inline', marginRight: '4px' }} />
                {scheme.subsidy}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {scheme.focus}
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <a
                href={scheme.link}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}
              >
                View Scheme Guidelines <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MSME Eligibility Quick Check */}
      <div style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1e293b 100%)', color: 'white', padding: '2rem 2.5rem', borderRadius: '16px' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Who is eligible for PMFME Sustainable Packaging Subsidies?
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Individual Micro-Units, Farmer Producer Organisations (FPOs), Producer Cooperatives, and Self-Help Groups (SHGs) engaged in agri-food processing.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#38bdf8', marginBottom: '0.3rem' }}>✓ Individual Enterprises</h4>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Credit-linked capital subsidy @ 35% of eligible project cost with max ceiling of ₹10.0 lakh per unit.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#4ade80', marginBottom: '0.3rem' }}>✓ FPOs & Cooperatives</h4>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Grant for common infrastructure, MAP packaging machinery, and primary processing facilities.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#fbbf24', marginBottom: '0.3rem' }}>✓ Seed Capital for SHGs</h4>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Seed capital of ₹40,000 per SHG member for working capital and purchase of small tools and sealers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
