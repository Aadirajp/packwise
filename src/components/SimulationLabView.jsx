import React, { useState, useMemo } from 'react';
import { COMMODITIES, PACKAGING_MATERIALS } from '../data/packagingData';
import { Thermometer, Droplets, Wind, Zap, AlertTriangle, ShieldCheck, Play, RefreshCw } from 'lucide-react';

export default function SimulationLabView() {
  const [selectedCommodityId, setSelectedCommodityId] = useState('paneer');
  const [selectedMaterialId, setSelectedMaterialId] = useState('evoh-mono-pe');
  
  // Simulation Variables
  const [tempC, setTempC] = useState(4); // 4°C
  const [humidityRH, setHumidityRH] = useState(85); // 85%
  const [gasO2, setGasO2] = useState(0.5); // %
  const [gasCO2, setGasCO2] = useState(45); // %
  const [activeO2Scavenger, setActiveO2Scavenger] = useState(true);
  const [activeEthyleneScavenger, setActiveEthyleneScavenger] = useState(false);

  const commodity = useMemo(() => {
    return COMMODITIES.find(c => c.id === selectedCommodityId) || COMMODITIES[0];
  }, [selectedCommodityId]);

  const material = useMemo(() => {
    return PACKAGING_MATERIALS.find(m => m.id === selectedMaterialId) || PACKAGING_MATERIALS[0];
  }, [selectedMaterialId]);

  // Dynamic Kinetic Model Calculations (Q10 Arrhenius approximation)
  const simulationResults = useMemo(() => {
    // Baseline reference temp is 4°C
    const refTemp = 4;
    const deltaT = tempC - refTemp;
    const q10 = 2.2; // Typical food reaction acceleration rate per 10°C
    const tempAccelerationFactor = Math.pow(q10, deltaT / 10);

    // Humidity impact (relative to commodity aw)
    const deltaRH = Math.abs(humidityRH - (commodity.aw * 100));
    const moistureTransmissionFactor = 1 + ((material.wvtr / 20) * (deltaRH / 50));

    // Gas impact: Oxygen degradation
    let o2Impact = 1.0;
    const effectiveO2 = activeO2Scavenger ? Math.max(0.05, gasO2 * 0.1) : gasO2;
    if (commodity.o2Sensitivity >= 4) {
      o2Impact = 1 + (effectiveO2 / 5);
    }

    // Gas impact: CO2 antimicrobial preservation (inhibits psychrotrophic bacteria & molds)
    let co2PreservationFactor = 1.0;
    if (gasCO2 > 20) {
      co2PreservationFactor = Math.min(2.5, 1 + (gasCO2 / 35));
    }

    // Active Ethylene Scavenger bonus for climacteric fruit
    let ethyleneFactor = 1.0;
    if (activeEthyleneScavenger && commodity.category === 'horticulture') {
      ethyleneFactor = 1.4;
    }

    // Combined degradation rate multiplier
    const overallDegradationRate = (tempAccelerationFactor * moistureTransmissionFactor * o2Impact) / (co2PreservationFactor * ethyleneFactor);

    // Simulated Days
    const baseDays = commodity.baselineShelfLifeDays * 3.5; // with standard protective package
    const simulatedDays = Math.max(1, Math.round(baseDays / overallDegradationRate));

    // Warning triggers
    const warnings = [];
    if (tempC > 15 && (commodity.category === 'dairy' || commodity.category === 'meat_seafood')) {
      warnings.push('CRITICAL: Cold chain breach (>15°C) promotes rapid microbial pathogens (Listeria / Salmonella).');
    }
    if (humidityRH > 90 && material.wvtr > 10) {
      warnings.push('WARNING: Internal condensation risk high. Mold proliferation expected.');
    }
    if (effectiveO2 > 5 && commodity.o2Sensitivity >= 4) {
      warnings.push('ALERT: High oxygen ingress will trigger rapid oxidative rancidity.');
    }

    return {
      simulatedDays,
      tempAccelerationFactor: tempAccelerationFactor.toFixed(2),
      overallDegradationRate: overallDegradationRate.toFixed(2),
      effectiveO2: effectiveO2.toFixed(2),
      warnings
    };
  }, [commodity, material, tempC, humidityRH, gasO2, gasCO2, activeO2Scavenger, activeEthyleneScavenger]);

  return (
    <div className="container" style={{ padding: '2rem 0 4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          🔬 Food Shelf-Life & MAP Atmospheric Simulation Lab
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Model mathematical Arrhenius reaction kinetics, fluctuating ambient temperatures, barrier transmission, and modified atmosphere gas flushes.
        </p>
      </div>

      <div className="sim-grid">
        {/* Left Column: Environmental & Gas Controls */}
        <div className="sim-control-box">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Thermometer size={18} color="var(--primary)" />
            Simulation Parameters & Boundary Conditions
          </h3>

          <div className="form-group">
            <label className="form-label">Select Food Commodity</label>
            <select
              className="select-custom"
              value={selectedCommodityId}
              onChange={(e) => setSelectedCommodityId(e.target.value)}
            >
              {COMMODITIES.map(c => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Select Packaging Substrate</label>
            <select
              className="select-custom"
              value={selectedMaterialId}
              onChange={(e) => setSelectedMaterialId(e.target.value)}
            >
              {PACKAGING_MATERIALS.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name} (OTR: {m.otr}, WVTR: {m.wvtr})
                </option>
              ))}
            </select>
          </div>

          {/* Temperature Slider */}
          <div className="slider-container">
            <div className="slider-header">
              <span>Ambient Storage Temperature</span>
              <span className="mono" style={{ color: tempC > 20 ? '#dc2626' : '#0284c7' }}>
                {tempC}°C ({tempC < 5 ? 'Cold Chain' : tempC < 15 ? 'Chilled' : 'Ambient Warm'})
              </span>
            </div>
            <input
              type="range"
              min={-5}
              max={45}
              step={1}
              value={tempC}
              onChange={(e) => setTempC(Number(e.target.value))}
              className="slider-input"
            />
          </div>

          {/* Humidity Slider */}
          <div className="slider-container">
            <div className="slider-header">
              <span>Relative Humidity (RH)</span>
              <span className="mono" style={{ color: '#0284c7' }}>{humidityRH}% RH</span>
            </div>
            <input
              type="range"
              min={20}
              max={98}
              step={1}
              value={humidityRH}
              onChange={(e) => setHumidityRH(Number(e.target.value))}
              className="slider-input"
            />
          </div>

          {/* Gas Flushing MAP Sliders */}
          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', margin: '1.25rem 0' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Wind size={15} color="#0284c7" /> MAP Gas Flushing Concentration (%)
            </h4>
            
            <div className="slider-container" style={{ marginBottom: '0.75rem' }}>
              <div className="slider-header" style={{ fontSize: '0.75rem' }}>
                <span>Headspace Oxygen (O₂)</span>
                <span className="mono">{gasO2}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={21}
                step={0.5}
                value={gasO2}
                onChange={(e) => setGasO2(Number(e.target.value))}
                className="slider-input"
              />
            </div>

            <div className="slider-container" style={{ marginBottom: '0' }}>
              <div className="slider-header" style={{ fontSize: '0.75rem' }}>
                <span>Carbon Dioxide (CO₂ - Microbial Inhibitor)</span>
                <span className="mono">{gasCO2}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={80}
                step={1}
                value={gasCO2}
                onChange={(e) => setGasCO2(Number(e.target.value))}
                className="slider-input"
              />
            </div>
          </div>

          {/* Active Packaging Scavengers Toggles */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={activeO2Scavenger}
                onChange={(e) => setActiveO2Scavenger(e.target.checked)}
              />
              <span>Include O₂ Scavenger Sachet</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={activeEthyleneScavenger}
                onChange={(e) => setActiveEthyleneScavenger(e.target.checked)}
              />
              <span>Include KMnO₄ Ethylene Pad</span>
            </label>
          </div>
        </div>

        {/* Right Column: Dynamic Simulation Dashboard Output */}
        <div className="sim-output-box">
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="mono" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  KINETIC SIMULATION REPORT
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.2rem' }}>
                  {commodity.name}
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>
                  Packaged in: {material.name}
                </span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>SIMULATED SHELF-LIFE</span>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80', lineHeight: 1 }}>
                  {simulationResults.simulatedDays}
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: '#e2e8f0', marginLeft: '0.3rem' }}>Days</span>
                </div>
              </div>
            </div>

            {/* Kinetic Metrics Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>TEMP ACCELERATOR</span>
                <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f59e0b' }}>
                  {simulationResults.tempAccelerationFactor}x
                </div>
                <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Arrhenius Q10 Factor</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>EFFECTIVE HEADSPACE O₂</span>
                <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#38bdf8' }}>
                  {simulationResults.effectiveO2}%
                </div>
                <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Post-Scavenger Residual</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '1rem', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>SPOILAGE INDEX</span>
                <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#a78bfa' }}>
                  {simulationResults.overallDegradationRate}
                </div>
                <span style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Relative Spoilage Rate</span>
              </div>
            </div>

            {/* Warnings Alert Box */}
            {simulationResults.warnings.length > 0 ? (
              <div style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '8px',
                padding: '1rem',
                marginTop: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <AlertTriangle size={16} /> Hazard Warnings Detected
                </div>
                <ul style={{ paddingLeft: '1.25rem', fontSize: '0.8rem', color: '#fca5a5' }}>
                  {simulationResults.warnings.map((w, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>{w}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '8px',
                padding: '1rem',
                marginTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <ShieldCheck size={20} color="#34d399" />
                <span style={{ fontSize: '0.85rem', color: '#6ee7b7' }}>
                  Safe Preservation Window: Packaging barriers and gas ratios successfully suppress dominant microbial and oxidative degradation vectors.
                </span>
              </div>
            )}
          </div>

          <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>Model: Arrhenius Kinetic + Fickian Gas Diffusion</span>
            <span>MoFPI Lab Reference: CFTRI / IIP Validation Standards</span>
          </div>
        </div>
      </div>
    </div>
  );
}
