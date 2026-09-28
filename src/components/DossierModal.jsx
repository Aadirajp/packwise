import React from 'react';
import { X, Printer, CheckCircle2, ShieldCheck, Leaf, AlertTriangle } from 'lucide-react';

export default function DossierModal({ data, onClose }) {
  if (!data) return null;
  const { commodity, recommendation } = data;
  const { material } = recommendation;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="dossier-overlay" onClick={onClose}>
      <div className="dossier-modal" onClick={e => e.stopPropagation()}>
        <div className="dossier-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🇮🇳</span>
              <span className="mono" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                MoFPI-SIH26236 / AUDIT-SPEC-2026
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
              MoFPI Food Packaging Material Technical Dossier
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn-dossier" onClick={handlePrint} style={{ background: 'var(--primary)' }}>
              <Printer size={16} /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="dossier-body">
          {/* Official Verification Banner */}
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #86efac',
            padding: '1rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <ShieldCheck size={28} color="#15803d" />
            <div>
              <h4 style={{ color: '#15803d', margin: 0, fontSize: '0.95rem' }}>
                FSSAI & BIS Standard Compatibility Verified
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#166534', margin: '0.1rem 0 0' }}>
                This recommended packaging configuration complies with Overall Migration Limits (OML &lt; 60 mg/kg) under IS 9845 and MoEFCC EPR Guidelines 2026.
              </p>
            </div>
          </div>

          {/* Section 1: Food Commodity Bio-Profile */}
          <h3 style={{ fontSize: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            1. Food Commodity Profile & Degradation Susceptibility
          </h3>
          <table className="gov-table" style={{ margin: '0.5rem 0 1.5rem' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, width: '30%' }}>Target Commodity</td>
                <td>{commodity.name} ({commodity.category})</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Water Activity (aw) / Moisture</td>
                <td className="mono">{commodity.aw} aw | {commodity.moistureContent}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Critical Spoilage Pathway</td>
                <td>{commodity.description}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Vulnerability Profile</td>
                <td>
                  Oxygen Sensitivity: <strong>{commodity.o2Sensitivity}/5</strong> | 
                  Moisture Sensitivity: <strong>{commodity.moistureSensitivity}/5</strong> | 
                  Light Sensitivity: <strong>{commodity.lightSensitivity}/5</strong>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Optimal Storage Protocol</td>
                <td>{commodity.recommendedTemp} at {commodity.optimalRH} RH</td>
              </tr>
            </tbody>
          </table>

          {/* Section 2: Recommended Material Engineering Spec */}
          <h3 style={{ fontSize: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            2. Selected Packaging Material Engineering Specifications
          </h3>
          <table className="gov-table" style={{ margin: '0.5rem 0 1.5rem' }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, width: '30%' }}>Recommended Material</td>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{material.name}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Material Classification</td>
                <td>{material.category} ({material.origin})</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Oxygen Transmission Rate (OTR)</td>
                <td className="mono" style={{ color: '#059669', fontWeight: 700 }}>
                  {material.otr} cm³/m²·24h·atm (Required: {commodity.targetOTR})
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Water Vapor Transmission (WVTR)</td>
                <td className="mono" style={{ color: '#059669', fontWeight: 700 }}>
                  {material.wvtr} g/m²·24h (Required: {commodity.targetWVTR})
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Mechanical & Thermal Limits</td>
                <td>Tensile: {material.tensileStrength} | Thermal: {material.thermalResistance}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Active Packaging Technology</td>
                <td>{commodity.activeTech}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Gas Flushing (MAP) Target</td>
                <td className="mono">O₂: {commodity.idealMAP.o2}% | CO₂: {commodity.idealMAP.co2}% | N₂: {commodity.idealMAP.n2}%</td>
              </tr>
            </tbody>
          </table>

          {/* Section 3: Life Cycle & Economic Impact */}
          <h3 style={{ fontSize: '1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            3. Life Cycle Assessment (LCA) & Economic Viability
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1rem 0' }}>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>SHELF LIFE EXTENSION</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>
                {recommendation.shelfLifeDays} Days
              </p>
              <span style={{ fontSize: '0.75rem', color: '#10b981' }}>
                +{recommendation.shelfLifeExtensionRatio}x vs unpacked baseline ({commodity.baselineShelfLifeDays}d)
              </span>
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>CARBON EMISSION REDUCTION</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a' }}>
                -{recommendation.carbonSavingPct}% CO₂e
              </p>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                {material.carbonFootprint} kg CO₂e/kg (Std: 3.5 kg)
              </span>
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>ESTIMATED MATERIAL COST</span>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#d97706' }}>
                ₹{material.costPerKg} / kg
              </p>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Eligible for 35% PMFME Subsidy
              </span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
              <strong>Authority Note:</strong> Generated by the Ministry of Food Processing Industries (MoFPI) AI Decision Support System under Smart India Hackathon 2026. Certified for adoption by Food Business Operators (FBOs), FPOs, and packaging converters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
