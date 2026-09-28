import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#0a192f',
      color: '#94a3b8',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3.5rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: '3rem', marginBottom: '2.5rem' }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🌱</span>
              <span>PACKWISE <span style={{ color: '#38bdf8' }}>AI</span></span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#cbd5e1', maxWidth: '380px', marginBottom: '1.25rem' }}>
              Intelligent Food Packaging Material Recommendation System for Indian Food Commodities. Developed for the Ministry of Food Processing Industries (MoFPI) under Smart India Hackathon 2026.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge-sih">Problem ID: SIH26236</span>
              <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.68rem', color: '#cbd5e1' }}>
                Software Edition
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/" style={{ color: '#cbd5e1' }}>Home Overview</Link></li>
              <li><Link to="/recommend" style={{ color: '#cbd5e1' }}>AI Recommender</Link></li>
              <li><Link to="/simulation" style={{ color: '#cbd5e1' }}>Shelf-Life & MAP Lab</Link></li>
              <li><Link to="/materials" style={{ color: '#cbd5e1' }}>Bio-Materials Library</Link></li>
              <li><Link to="/about" style={{ color: '#cbd5e1' }}>About SIH26236</Link></li>
            </ul>
          </div>

          {/* Governance & Compliance */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Standards & Schemes
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/compliance" style={{ color: '#cbd5e1' }}>FSSAI Regulations 2018</Link></li>
              <li><Link to="/compliance" style={{ color: '#cbd5e1' }}>IS 9845 Migration Tests</Link></li>
              <li><Link to="/compliance" style={{ color: '#cbd5e1' }}>Plastic Waste Rules (EPR)</Link></li>
              <li><Link to="/grants" style={{ color: '#cbd5e1' }}>PMFME 35% Capital Subsidy</Link></li>
              <li><Link to="/grants" style={{ color: '#cbd5e1' }}>PMKSY Cold-Chain Grants</Link></li>
            </ul>
          </div>

          {/* Gov Portals External */}
          <div>
            <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Official Portals
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a href="https://mofpi.gov.in" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  MoFPI Official Portal <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="https://pmfme.mofpi.gov.in" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  PMFME Scheme Portal <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="https://www.fssai.gov.in" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  FSSAI Food Safety <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="https://www.sih.gov.in" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Smart India Hackathon 2026 <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} PACKWISE AI • Ministry of Food Processing Industries (MoFPI), Government of India.
          </div>
          <div>
            Theme: Agriculture, FoodTech & Rural Development • Built for Smart India Hackathon
          </div>
        </div>
      </div>
    </footer>
  );
}
