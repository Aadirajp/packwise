import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { COMMODITY_CATEGORIES, COMMODITIES, calculateRecommendation } from '../data/packagingData';
import { 
  Sparkles, ShieldCheck, Leaf, ArrowRight, Award, Zap, 
  Wind, Droplets, Thermometer, AlertCircle, FileText, Check,
  Scale, Layers, ChevronRight, HelpCircle, Eye
} from 'lucide-react';
import CompareModal from './CompareModal';

export default function RecommenderView({ onOpenDossier }) {
  const [searchParams] = useSearchParams();
  const initialCommodityParam = searchParams.get('commodity');

  const [userMode, setUserMode] = useState('simple'); // 'simple' or 'expert'
  const [selectedCategory, setSelectedCategory] = useState('horticulture');
  const [selectedCommodityId, setSelectedCommodityId] = useState('alphonso-mango');

  useEffect(() => {
    if (initialCommodityParam) {
      const match = COMMODITIES.find(c => c.id === initialCommodityParam);
      if (match) {
        setSelectedCategory(match.category);
        setSelectedCommodityId(match.id);
      }
    }
  }, [initialCommodityParam]);
  
  // Preferences
  const [targetShelfLifeMonths, setTargetShelfLifeMonths] = useState(3);
  const [storageCondition, setStorageCondition] = useState('cold_chain');
  const [sustainabilityPriority, setSustainabilityPriority] = useState('balanced');
  const [distributionType, setDistributionType] = useState('export');

  // Compare Tray State
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Filter commodities by category
  const filteredCommodities = useMemo(() => {
    return COMMODITIES.filter(c => c.category === selectedCategory);
  }, [selectedCategory]);

  // Current selected commodity
  const currentCommodity = useMemo(() => {
    return COMMODITIES.find(c => c.id === selectedCommodityId) || COMMODITIES[0];
  }, [selectedCommodityId]);

  // Auto-switch commodity when category changes
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const firstInCat = COMMODITIES.find(c => c.category === catId);
    if (firstInCat) setSelectedCommodityId(firstInCat.id);
  };

  // Quick preset selector
  const handlePresetSelect = (commodityId) => {
    const item = COMMODITIES.find(c => c.id === commodityId);
    if (item) {
      setSelectedCategory(item.category);
      setSelectedCommodityId(item.id);
    }
  };

  // Run AI recommendation engine
  const recommendations = useMemo(() => {
    return calculateRecommendation(currentCommodity, {
      targetShelfLifeMonths,
      storageCondition,
      sustainabilityPriority,
      distributionType
    });
  }, [currentCommodity, targetShelfLifeMonths, storageCondition, sustainabilityPriority, distributionType]);

  // Toggle compare item
  const toggleCompare = (recItem) => {
    const exists = compareList.find(x => x.material.id === recItem.material.id);
    if (exists) {
      setCompareList(compareList.filter(x => x.material.id !== recItem.material.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare a maximum of 3 materials side-by-side.');
        return;
      }
      setCompareList([...compareList, recItem]);
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      
      {/* Visual Hero Banner with High-Res Photography */}
      <div className="recommender-hero-card">
        <div className="hero-banner-content">
          <div className="hero-badge-tag">
            <Sparkles size={14} /> Ministry of Food Processing Industries (MoFPI) AI Engine
          </div>
          <h2>
            Intelligent Food Packaging <br/>
            <span style={{ color: '#38bdf8' }}>Material Recommendation System</span>
          </h2>
          <p>
            Eliminate agricultural post-harvest food losses with customized bio-polymers, active atmospheric barriers, and FSSAI-certified sustainable packaging.
          </p>

          {/* 3-Step Guided Roadmap */}
          <div className="hero-steps-row">
            <div className="step-pill">
              <span className="step-num">1</span>
              <span>Select Commodity</span>
            </div>
            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
            <div className="step-pill">
              <span className="step-num">2</span>
              <span>Set Supply Chain</span>
            </div>
            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
            <div className="step-pill">
              <span className="step-num">3</span>
              <span>Get AI Blueprint & Subsidy</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="/images/hero-banner.jpg"
            alt="Sustainable Food Packaging Lab"
            className="hero-card-img"
          />
          <div className="hero-img-badge">
            🌱 100% Bio-Compostable & Recyclable Solutions
          </div>
        </div>
      </div>

      {/* Mode Switcher & Quick Indian Commodity Presets */}
      <div className="preset-bar-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Flagship Staples:
          </span>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {COMMODITIES.filter(c => c.isFlagship).map(c => (
              <button
                key={c.id}
                className={`quick-commodity-chip ${selectedCommodityId === c.id ? 'active' : ''}`}
                onClick={() => handlePresetSelect(c.id)}
                style={{ padding: '0.35rem 0.75rem' }}
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.name}
                    style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.1)' }}
                  />
                ) : (
                  <span>{c.icon}</span>
                )}
                <span>{c.name.split(' (')[0]}</span>
                {c.popularTag && (
                  <span className="chip-tag">{c.popularTag}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* User Mode Toggle: Simple vs R&D Expert */}
        <div className="mode-toggle-box">
          <button
            className={`mode-btn ${userMode === 'simple' ? 'active' : ''}`}
            onClick={() => setUserMode('simple')}
          >
            🌾 Simple Mode (Farmers & MSMEs)
          </button>
          <button
            className={`mode-btn ${userMode === 'expert' ? 'active' : ''}`}
            onClick={() => setUserMode('expert')}
          >
            🔬 R&D / Expert Mode
          </button>
        </div>
      </div>

      {/* Main Two-Column Interactive Layout */}
      <div className="recommender-layout">
        
        {/* Left Column: Input Form & Commodity Bio-Profile */}
        <div className="config-card">
          <div className="section-title">
            <span>1. Commodity Selection</span>
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>STEP 01</span>
          </div>

          <div className="form-group">
            <label className="form-label">Food Category</label>
            <div className="pill-selector">
              {COMMODITY_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`pill-option ${selectedCategory === cat.id ? 'selected' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Select Food Item ({filteredCommodities.length} in this Category)</span>
            </label>
            
            {/* Visual Photo Cards for Commodity Selection */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 1fr))', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {filteredCommodities.map(c => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCommodityId(c.id)}
                  style={{
                    border: selectedCommodityId === c.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: selectedCommodityId === c.id ? '#f0f9ff' : 'white',
                    textAlign: 'center',
                    padding: '0.35rem',
                    transition: 'var(--transition)',
                    boxShadow: selectedCommodityId === c.id ? '0 2px 8px rgba(2,132,199,0.2)' : 'none'
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    style={{ width: '100%', height: '52px', objectFit: 'cover', borderRadius: '5px' }}
                  />
                  <div style={{ fontSize: '0.72rem', fontWeight: selectedCommodityId === c.id ? 800 : 600, color: selectedCommodityId === c.id ? 'var(--primary)' : 'var(--text-primary)', marginTop: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {c.icon} {c.name.split(' (')[0]}
                  </div>
                </div>
              ))}
            </div>

            <select
              className="select-custom"
              value={selectedCommodityId}
              onChange={(e) => setSelectedCommodityId(e.target.value)}
              style={{ fontSize: '0.8rem', padding: '0.5rem 0.75rem' }}
            >
              {filteredCommodities.map(c => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Commodity Bio-Profile with Photo Card */}
          <div className="commodity-widget-enhanced">
            {currentCommodity.image && (
              <div className="commodity-img-banner">
                <img src={currentCommodity.image} alt={currentCommodity.name} />
                <span className="commodity-tag-floating">
                  {currentCommodity.icon} {currentCommodity.category.toUpperCase()}
                </span>
              </div>
            )}

            <div style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>{currentCommodity.name}</h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {currentCommodity.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.75rem', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <div>
                  <span style={{ color: '#64748b' }}>Water Activity (aw): </span>
                  <span className="mono" style={{ fontWeight: 700 }}>{currentCommodity.aw}</span>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Moisture: </span>
                  <span className="mono" style={{ fontWeight: 700 }}>{currentCommodity.moistureContent}</span>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ color: '#64748b' }}>Baseline Unpacked: </span>
                  <strong style={{ color: '#dc2626' }}>{currentCommodity.baselineShelfLifeDays} Days Spoilage Limit</strong>
                </div>
              </div>

              {userMode === 'expert' && (
                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                  <span className={`vuln-badge ${currentCommodity.o2Sensitivity >= 4 ? 'vuln-high' : 'vuln-med'}`}>
                    O₂ Sens: {currentCommodity.o2Sensitivity}/5
                  </span>
                  <span className={`vuln-badge ${currentCommodity.moistureSensitivity >= 4 ? 'vuln-high' : 'vuln-med'}`}>
                    Moisture: {currentCommodity.moistureSensitivity}/5
                  </span>
                  <span className={`vuln-badge ${currentCommodity.lightSensitivity >= 4 ? 'vuln-high' : 'vuln-low'}`}>
                    Light: {currentCommodity.lightSensitivity}/5
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Environmental & Supply Chain Parameters */}
          <div className="section-title" style={{ marginTop: '1.75rem' }}>
            <span>2. Supply Chain & Storage</span>
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>STEP 02</span>
          </div>

          <div className="form-group">
            <label className="form-label">Storage Temperature Regime</label>
            <select
              className="select-custom"
              value={storageCondition}
              onChange={(e) => setStorageCondition(e.target.value)}
            >
              <option value="ambient">Ambient (20°C - 35°C, Tropical Retail)</option>
              <option value="cold_chain">Cold Chain (2°C - 8°C, Controlled)</option>
              <option value="frozen">Deep Frozen (-18°C)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Distribution Route</label>
            <div className="pill-selector">
              <button
                className={`pill-option ${distributionType === 'domestic' ? 'selected' : ''}`}
                onClick={() => setDistributionType('domestic')}
              >
                🚚 Domestic Transit
              </button>
              <button
                className={`pill-option ${distributionType === 'export' ? 'selected' : ''}`}
                onClick={() => setDistributionType('export')}
              >
                ✈️ Long-Haul Export
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Desired Commercial Shelf-Life</label>
            <select
              className="select-custom"
              value={targetShelfLifeMonths}
              onChange={(e) => setTargetShelfLifeMonths(Number(e.target.value))}
            >
              <option value={1}>1 Month (Fast Turnaround)</option>
              <option value={3}>3 Months (Quarterly Retail)</option>
              <option value={6}>6 Months (Interstate / Export)</option>
              <option value={12}>12 Months (Ambient Stable)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Packaging Priority</label>
            <div className="pill-selector">
              <button
                className={`pill-option ${sustainabilityPriority === 'balanced' ? 'selected' : ''}`}
                onClick={() => setSustainabilityPriority('balanced')}
              >
                Balanced AI
              </button>
              <button
                className={`pill-option ${sustainabilityPriority === 'eco_max' ? 'selected' : ''}`}
                onClick={() => setSustainabilityPriority('eco_max')}
              >
                🌱 100% Compostable
              </button>
              <button
                className={`pill-option ${sustainabilityPriority === 'cost_min' ? 'selected' : ''}`}
                onClick={() => setSustainabilityPriority('cost_min')}
              >
                💰 MSME Cost Focus
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Recommendations Ranked Output */}
        <div>
          <div className="results-header">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                AI Recommended Formulations ({recommendations.length} Evaluated)
              </h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Top matching packaging materials for <strong>{currentCommodity.name}</strong> under <strong>{storageCondition.replace('_', ' ')}</strong> conditions
              </p>
            </div>

            {compareList.length > 0 && (
              <button
                className="btn-primary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '8px' }}
                onClick={() => setIsCompareOpen(true)}
              >
                <Scale size={16} /> Compare ({compareList.length})
              </button>
            )}
          </div>

          {/* Cards List */}
          {recommendations.map((rec, index) => {
            const isTopRank = index === 0;
            const { material } = rec;
            const isCompared = compareList.some(x => x.material.id === material.id);

            return (
              <div key={material.id} className={`result-card ${isTopRank ? 'top-rank' : ''}`}>
                {isTopRank && (
                  <div className="top-rank-badge">
                    <Award size={14} /> #1 Best MoFPI Match
                  </div>
                )}

                <div className="card-top-row">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span className="material-type-tag">{material.category}</span>
                      <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <Leaf size={12} /> {material.compostability.split(' (')[0]}
                      </span>
                    </div>

                    <h3 className="material-title">{material.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <strong>Polymer Origin:</strong> {material.origin}
                    </p>
                  </div>

                  {/* Animated Circular Score Display */}
                  <div className="ai-score-pill">
                    <div className="score-circle-enhanced">
                      <svg width="68" height="68" viewBox="0 0 68 68">
                        <circle
                          cx="34" cy="34" r="28"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="5"
                        />
                        <circle
                          cx="34" cy="34" r="28"
                          fill="none"
                          stroke={isTopRank ? '#059669' : '#0284c7'}
                          strokeWidth="5"
                          strokeDasharray="175"
                          strokeDashoffset={175 - (175 * rec.aiScore) / 100}
                          strokeLinecap="round"
                          transform="rotate(-90 34 34)"
                          style={{ transition: 'stroke-dashoffset 1s ease' }}
                        />
                      </svg>
                      <div className="score-inner-text">
                        <span className="number">{rec.aiScore}</span>
                        <span className="label">AI FIT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Dual-Barrier & Mechanical Metrics */}
                <div className="tech-metrics-grid">
                  <div className="metric-item">
                    <span className="metric-label">Oxygen Barrier (OTR)</span>
                    <span className="metric-value" style={{ color: material.otr < 10 ? '#059669' : '#0f172a' }}>
                      {material.otr} <span style={{ fontSize: '0.65rem' }}>cm³/m²·d</span>
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#64748b' }}>Target: {currentCommodity.targetOTR.split(' ')[1]}</span>
                  </div>

                  <div className="metric-item">
                    <span className="metric-label">Moisture Barrier (WVTR)</span>
                    <span className="metric-value" style={{ color: material.wvtr < 5 ? '#059669' : '#0f172a' }}>
                      {material.wvtr} <span style={{ fontSize: '0.65rem' }}>g/m²·d</span>
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#64748b' }}>Target: {currentCommodity.targetWVTR.split(' ')[0]}</span>
                  </div>

                  <div className="metric-item">
                    <span className="metric-label">Predicted Shelf-Life</span>
                    <span className="metric-value" style={{ color: 'var(--primary)' }}>
                      {rec.shelfLifeDays} <span style={{ fontSize: '0.75rem' }}>Days</span>
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#16a34a', fontWeight: 600 }}>
                      +{rec.shelfLifeExtensionRatio}x Extension
                    </span>
                  </div>

                  <div className="metric-item">
                    <span className="metric-label">Est. Cost & Subsidy</span>
                    <span className="metric-value" style={{ color: '#d97706' }}>
                      ₹{material.costPerKg} <span style={{ fontSize: '0.65rem' }}>/ kg</span>
                    </span>
                    <span style={{ fontSize: '0.65rem', color: '#0369a1', fontWeight: 600 }}>
                      Eligible for 35% PMFME
                    </span>
                  </div>
                </div>

                {/* Shelf-Life Progress Meter */}
                <div className="shelf-life-meter">
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span>
                      Lifespan Extension: <strong style={{ color: 'var(--primary)' }}>{rec.shelfLifeDays} Days</strong>
                      <span style={{ color: '#059669', marginLeft: '0.5rem' }}>
                        (from {currentCommodity.baselineShelfLifeDays}d unpacked baseline)
                      </span>
                    </span>
                    <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      {rec.meetsTarget ? '✓ Meets Target Goal' : 'Extended Lifespan'}
                    </span>
                  </div>
                  <div className="meter-track">
                    <div
                      className="meter-fill"
                      style={{
                        width: `${Math.min(100, (rec.shelfLifeDays / 180) * 100)}%`,
                        background: isTopRank
                          ? 'linear-gradient(90deg, #10b981, #0284c7)'
                          : 'linear-gradient(90deg, #3b82f6, #6366f1)'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Active Packaging & Atmospheric Guidance */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.8rem',
                  marginTop: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <Zap size={14} color="#d97706" />
                    <strong>Active Tech Integration:</strong>
                    <span style={{ color: 'var(--text-secondary)' }}>{currentCommodity.activeTech}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Wind size={14} color="#0284c7" />
                    <strong>Modified Atmosphere (MAP):</strong>
                    <span className="mono" style={{ color: '#0369a1', fontWeight: 600 }}>
                      O₂: {currentCommodity.idealMAP.o2}% | CO₂: {currentCommodity.idealMAP.co2}% | N₂: {currentCommodity.idealMAP.n2}%
                    </span>
                  </div>
                </div>

                {/* Features & Sustainability Badges */}
                <div className="tags-row">
                  {material.features.map((feat, i) => (
                    <span key={i} className="tag-item positive">
                      <Check size={12} /> {feat}
                    </span>
                  ))}
                  <span className="tag-item" style={{ background: '#ecfdf5', color: '#047857' }}>
                    🌱 Carbon Reduction: -{rec.carbonSavingPct}% CO₂e
                  </span>
                  <span className="tag-item" style={{ background: '#fef3c7', color: '#92400e' }}>
                    🏛️ PMFME 35% Capital Subsidy Applicable
                  </span>
                </div>

                {/* Card Action Row */}
                <div className="card-actions-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#15803d' }}>
                      <ShieldCheck size={16} />
                      <span>{material.fssaiStatus}</span>
                    </div>

                    <button
                      className={`compare-checkbox-btn ${isCompared ? 'active' : ''}`}
                      onClick={() => toggleCompare(rec)}
                    >
                      <Scale size={13} />
                      {isCompared ? 'Added to Compare ✓' : '+ Compare'}
                    </button>
                  </div>

                  <button
                    className="btn-dossier"
                    onClick={() => onOpenDossier({ commodity: currentCommodity, recommendation: rec })}
                  >
                    <FileText size={15} />
                    Generate MoFPI Dossier
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Compare Drawer Bar if items are added */}
      {compareList.length > 0 && (
        <div className="floating-compare-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>
              Comparison Tray ({compareList.length} of 3 selected):
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {compareList.map(item => (
                <span key={item.material.id} className="compare-mini-chip">
                  {item.material.name.split(' (')[0]}
                  <button onClick={() => toggleCompare(item)}>×</button>
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              className="btn-ghost"
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
              onClick={() => setCompareList([])}
            >
              Clear
            </button>
            <button
              className="btn-primary"
              style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 700, padding: '0.4rem 1rem', fontSize: '0.8rem', border: 'none', borderRadius: '6px' }}
              onClick={() => setIsCompareOpen(true)}
            >
              Compare Side-by-Side →
            </button>
          </div>
        </div>
      )}

      {/* Compare Modal */}
      {isCompareOpen && (
        <CompareModal
          materials={compareList}
          onClose={() => setIsCompareOpen(false)}
        />
      )}
    </div>
  );
}
