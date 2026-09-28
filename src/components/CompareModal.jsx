import React from 'react';
import { X, Check, ShieldCheck, Leaf, ArrowRight, Zap, Scale } from 'lucide-react';

export default function CompareModal({ materials, onClose, onSelectMaterial }) {
  if (!materials || materials.length === 0) return null;

  return (
    <div className="dossier-overlay" onClick={onClose}>
      <div className="dossier-modal" style={{ maxWidth: '1000px' }} onClick={e => e.stopPropagation()}>
        <div className="dossier-header" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1e293b 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px' }}>
              <Scale size={22} color="#38bdf8" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>
                Material Head-to-Head Comparison Matrix
              </h2>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
                Comparing {materials.length} Sustainable Packaging Formulations (MoFPI Standards)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="dossier-body">
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${materials.length}, 1fr)`, gap: '1.5rem' }}>
            {materials.map(item => {
              const { material, aiScore, shelfLifeDays, carbonSavingPct } = item;
              return (
                <div
                  key={material.id}
                  style={{
                    background: '#f8fafc',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div>
                    {material.image && (
                      <img
                        src={material.image}
                        alt={material.name}
                        style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                      />
                    )}
                    <span className="material-type-tag" style={{ fontSize: '0.7rem' }}>{material.category}</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0.5rem 0 0.25rem' }}>
                      {material.name}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '1rem' }}>{material.origin}</p>

                    {/* Scores & Metrics */}
                    <div style={{ background: 'white', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.8rem' }}>
                        <span>AI Suitability:</span>
                        <strong className="mono" style={{ color: 'var(--primary)' }}>{aiScore || 85}%</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.8rem' }}>
                        <span>Est. Shelf-Life:</span>
                        <strong className="mono" style={{ color: '#059669' }}>{shelfLifeDays || 45} Days</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                        <span>Cost Index:</span>
                        <strong className="mono" style={{ color: '#d97706' }}>₹{material.costPerKg} / kg</strong>
                      </div>
                    </div>

                    {/* Barrier Bars */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <span>Oxygen Barrier (OTR)</span>
                        <span className="mono" style={{ fontWeight: 700 }}>{material.otr} cm³</span>
                      </div>
                      <div className="meter-track" style={{ height: '6px' }}>
                        <div
                          className="meter-fill"
                          style={{
                            width: `${Math.max(5, Math.min(100, 100 - (material.otr * 0.8)))}%`,
                            background: '#0284c7'
                          }}
                        ></div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <span>Moisture Barrier (WVTR)</span>
                        <span className="mono" style={{ fontWeight: 700 }}>{material.wvtr} g</span>
                      </div>
                      <div className="meter-track" style={{ height: '6px' }}>
                        <div
                          className="meter-fill"
                          style={{
                            width: `${Math.max(5, Math.min(100, 100 - (material.wvtr * 2)))}%`,
                            background: '#10b981'
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Eco & Regulatory */}
                    <div style={{ fontSize: '0.75rem', color: '#166534', background: '#dcfce7', padding: '0.5rem', borderRadius: '6px', marginBottom: '0.5rem' }}>
                      🌱 {material.compostability}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#1e40af', background: '#dbeafe', padding: '0.5rem', borderRadius: '6px' }}>
                      🛡️ {material.fssaiStatus}
                    </div>
                  </div>

                  <button
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '1.25rem', padding: '0.65rem', borderRadius: '6px', fontSize: '0.8rem' }}
                    onClick={() => {
                      if (onSelectMaterial) onSelectMaterial(material);
                      onClose();
                    }}
                  >
                    Select this Solution
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
