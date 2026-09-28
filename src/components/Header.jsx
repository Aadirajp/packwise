import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Cpu, FlaskConical, Database, ShieldCheck, Landmark, 
  Home, Info, Sparkles, ArrowRight
} from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Top Government & SIH Identity Bar */}
      <div className="gov-top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div className="flag-box">
            <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
            <span>Government of India • Ministry of Food Processing Industries (MoFPI)</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className="badge-sih">SIH 2026 • PS ID: SIH26236</span>
            <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>Theme: Agriculture, FoodTech & Rural Development</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="main-header">
        <div className="container header-inner">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="brand-section">
              <div className="brand-emblem">
                🌱
              </div>
              <div className="brand-text">
                <h1>
                  PACKWISE <span style={{ color: 'var(--primary)', fontWeight: 800 }}>AI</span>
                </h1>
                <p>Intelligent Food Packaging Recommendation System • MoFPI</p>
              </div>
            </div>
          </Link>

          <nav className="nav-tabs">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <Home size={15} />
              Home
            </NavLink>

            <NavLink
              to="/recommend"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <Cpu size={15} />
              AI Recommender
            </NavLink>

            <NavLink
              to="/simulation"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <FlaskConical size={15} />
              Shelf-Life Lab
            </NavLink>

            <NavLink
              to="/materials"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <Database size={15} />
              Bio-Materials
            </NavLink>

            <NavLink
              to="/compliance"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <ShieldCheck size={15} />
              FSSAI Standards
            </NavLink>

            <NavLink
              to="/grants"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <Landmark size={15} />
              MoFPI Grants
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `nav-tab-btn ${isActive ? 'active' : ''}`}
            >
              <Info size={15} />
              About
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
