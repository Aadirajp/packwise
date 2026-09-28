import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, ShieldCheck, Leaf, Cpu, FlaskConical, 
  Database, Landmark, Award, CheckCircle2, TrendingUp, ChevronRight
} from 'lucide-react';
import { COMMODITIES } from '../data/packagingData';

export default function HomePage() {
  const featuredCommodities = COMMODITIES.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #064e3b 100%)',
        color: 'white',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#38bdf8',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={15} />
                Smart India Hackathon (SIH26236) • MoFPI Initiative
              </div>

              <h1 style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}>
                Next-Gen Food Packaging Powered by <span style={{ color: '#38bdf8' }}>PACKWISE AI</span>
              </h1>

              <p style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '560px'
              }}>
                An intelligent recommendation platform engineered for the <strong>Ministry of Food Processing Industries (MoFPI)</strong> to slash post-harvest losses and replace single-use plastics with certified sustainable bio-polymers.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/recommend">
                  <button className="btn-primary" style={{
                    padding: '0.85rem 1.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(2, 132, 199, 0.4)'
                  }}>
                    Launch AI Recommender <ArrowRight size={18} />
                  </button>
                </Link>

                <Link to="/simulation">
                  <button className="btn-ghost" style={{
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.3)',
                    padding: '0.85rem 1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255,255,255,0.05)'
                  }}>
                    <FlaskConical size={18} /> Shelf-Life Lab
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4ade80' }}>+150-450%</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Shelf-Life Extension</div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8' }}>IS 9845</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>FSSAI Migration Compliant</div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fbbf24' }}>35% Subsidy</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>PMFME Capital Grant</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                <img
                  src="/images/hero-banner.jpg"
                  alt="Sustainable Food Packaging Lab"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Pill Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                left: '20px',
                background: 'white',
                color: '#0f172a',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ background: '#dcfce7', padding: '0.5rem', borderRadius: '8px', color: '#16a34a' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>100% Bio-Compostable</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Microplastic-Free Packaging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Cards */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Intelligent Decision Support Architecture
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '0.4rem', color: '#0f172a' }}>
              Engineered to Solve Critical Food Loss in India
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              PACKWISE AI bridges food chemistry, polymer barrier science, and government subsidy schemes in a unified platform.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
            
            {/* Card 1 */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Dual-Barrier AI Engine</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Matches commodity water activity (aw), respiration rates, and oxidative rancidity vectors against Oxygen (OTR) and Moisture (WVTR) transmission metrics.
              </p>
              <Link to="/recommend" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Try Recommender <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2 */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <FlaskConical size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Shelf-Life Simulation Lab</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Simulate Arrhenius reaction kinetics under temperature spikes (cold-chain failures) and modified atmosphere gas flushes (O₂, CO₂, N₂) before packaging investment.
              </p>
              <Link to="/simulation" style={{ color: '#16a34a', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Launch Simulator <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3 */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Landmark size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>PMFME & MoFPI Subsidies</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Direct integration with Ministry capital schemes offering up to 35% credit-linked subsidies (max ₹10 Lakhs) for micro-processors and FPOs adopting green machinery.
              </p>
              <Link to="/grants" style={{ color: '#d97706', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Check Eligibility <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Real Commodity Packaging Section */}
      <section style={{ padding: '4.5rem 0', background: 'white', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-green)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Validated Formulations
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.25rem' }}>
                Tailored Solutions for High-Value Food Chains
              </h2>
            </div>
            <Link to="/recommend" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Explore All 24 Commodities <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {featuredCommodities.map(c => (
              <div key={c.id} style={{
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#f8fafc',
                transition: 'transform 0.3s ease',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ height: '220px', position: 'relative' }}>
                  <img
                    src={c.image}
                    alt={c.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(6px)',
                    color: 'white',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px'
                  }}>
                    {c.icon} {c.category.toUpperCase()}
                  </span>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>{c.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {c.description}
                  </p>

                  <div style={{ background: 'white', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.78rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <span style={{ color: '#64748b' }}>Active Tech:</span>
                      <strong style={{ color: '#0284c7' }}>{c.activeTech.split(' +')[0]}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Optimal Temp:</span>
                      <strong>{c.recommendedTemp.split(' (')[0]}</strong>
                    </div>
                  </div>

                  <Link to={`/recommend?commodity=${c.id}`}>
                    <button className="btn-primary" style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                      Analyze Packaging Options →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoFPI Government Callout Banner */}
      <section style={{
        background: '#091321',
        color: 'white',
        padding: '3.5rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🇮🇳</span>
              <span className="mono" style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700 }}>
                MINISTRY OF FOOD PROCESSING INDUSTRIES (MoFPI)
              </span>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
              Ready to Upgrade to Certified Sustainable Food Packaging?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '600px', marginTop: '0.25rem' }}>
              Generate your official FSSAI-compliant technical dossier and apply for capital equipment subsidies today.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/recommend">
              <button className="btn-primary" style={{ padding: '0.85rem 1.5rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}>
                Start Free Recommendation
              </button>
            </Link>
            <Link to="/compliance">
              <button className="btn-ghost" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', padding: '0.85rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
                FSSAI Standards
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
