import React, { useState } from 'react';
import { PACKAGING_MATERIALS } from '../data/packagingData';
import { Database, Filter, CheckCircle2, Leaf, Shield, ArrowDownUp, Sparkles } from 'lucide-react';

export default function MaterialsDatabaseView() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

  const filtered = PACKAGING_MATERIALS.filter(m => {
    const matchesCat = filterCategory === 'all' || m.category.toLowerCase().includes(filterCategory.toLowerCase());
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.origin.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="container" style={{ padding: '2rem 0 4rem' }}>
      
      {/* Visual Header with Real Materials Showcase Photography */}
      <div className="materials-hero-banner">
        <div className="banner-left">
          <span className="material-type-tag" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', marginBottom: '0.75rem' }}>
            <Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} />
            MoFPI & CFTRI Validated Database
          </span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
            Sustainable Food-Grade Bio-Polymers & Barrier Library
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', maxWidth: '650px', lineHeight: 1.6 }}>
            Explore verified mechanical, barrier, and biodegradation metrics for next-generation agricultural films, marine-compostable resins, and recyclable mono-materials designed to replace single-use plastics in the Indian food supply chain.
          </p>
        </div>

        <div className="banner-right-img">
          <img
            src="/images/materials-showcase.jpg"
            alt="Biopolymer Materials Showcase"
          />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2rem 0 1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flex: 1, maxWidth: '600px' }}>
          <input
            type="text"
            placeholder="Search by polymer name, bagasse, PHA, EVOH, or origin..."
            className="input-custom"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div className="pill-selector">
            {['all', 'Bio-based', 'Mono-Material', 'Active', 'Recyclable'].map(c => (
              <button
                key={c}
                className={`pill-option ${filterCategory === c ? 'selected' : ''}`}
                onClick={() => setFilterCategory(c)}
              >
                {c === 'all' ? 'All Materials' : c}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', background: '#e2e8f0', padding: '0.2rem', borderRadius: '6px', marginLeft: '0.5rem' }}>
            <button
              style={{ border: 'none', background: viewMode === 'grid' ? 'white' : 'transparent', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button
              style={{ border: 'none', background: viewMode === 'table' ? 'white' : 'transparent', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
              onClick={() => setViewMode('table')}
            >
              Table View
            </button>
          </div>
        </div>
      </div>

      {/* Grid View with Rich Cards */}
      {viewMode === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
          {filtered.map(m => (
            <div key={m.id} className="material-card-rich">
              {m.image && (
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={m.image}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(6px)', color: 'white', fontSize: '0.68rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                    {m.category}
                  </span>
                </div>
              )}

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  {m.name}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {m.origin}
                </p>

                {/* Tech barrier spec box */}
                <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.75rem' }}>
                  <div>
                    <span style={{ color: '#64748b' }}>OTR: </span>
                    <strong className="mono" style={{ color: m.otr < 10 ? '#059669' : '#0f172a' }}>{m.otr} cm³</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>WVTR: </span>
                    <strong className="mono" style={{ color: m.wvtr < 5 ? '#059669' : '#0f172a' }}>{m.wvtr} g</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Tensile: </span>
                    <strong className="mono">{m.tensileStrength}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b' }}>Est. Cost: </span>
                    <strong className="mono" style={{ color: '#d97706' }}>₹{m.costPerKg}/kg</strong>
                  </div>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#166534', background: '#dcfce7', padding: '0.4rem 0.6rem', borderRadius: '6px', marginBottom: '0.75rem' }}>
                  🌱 {m.compostability}
                </div>

                <div style={{ fontSize: '0.75rem', color: '#1e40af', background: '#eff6ff', padding: '0.4rem 0.6rem', borderRadius: '6px' }}>
                  🛡️ {m.fssaiStatus}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View */
        <table className="gov-table">
          <thead>
            <tr>
              <th>Material Name & Origin</th>
              <th>Category</th>
              <th>OTR (cm³/m²·d)</th>
              <th>WVTR (g/m²·d)</th>
              <th>Tensile / Thermal</th>
              <th>Compostability / Recycling</th>
              <th>Carbon Footprint</th>
              <th>Cost (INR)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(m => (
              <tr key={m.id}>
                <td>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{m.origin}</div>
                </td>
                <td>
                  <span className="material-type-tag" style={{ fontSize: '0.7rem' }}>{m.category}</span>
                </td>
                <td className="mono" style={{ fontWeight: 700, color: m.otr < 10 ? '#059669' : '#0f172a' }}>
                  {m.otr}
                </td>
                <td className="mono" style={{ fontWeight: 700, color: m.wvtr < 5 ? '#059669' : '#0f172a' }}>
                  {m.wvtr}
                </td>
                <td style={{ fontSize: '0.8rem' }}>
                  <div>{m.tensileStrength}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{m.thermalResistance}</div>
                </td>
                <td style={{ fontSize: '0.8rem', color: '#166534' }}>
                  {m.compostability}
                </td>
                <td className="mono" style={{ fontWeight: 700 }}>
                  {m.carbonFootprint} kg
                </td>
                <td className="mono" style={{ fontWeight: 700, color: 'var(--primary)' }}>
                  ₹{m.costPerKg} / kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
