import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecommenderView from './components/RecommenderView';
import SimulationLabView from './components/SimulationLabView';
import MaterialsDatabaseView from './components/MaterialsDatabaseView';
import ComplianceView from './components/ComplianceView';
import SchemesView from './components/SchemesView';
import AboutPage from './pages/AboutPage';
import DossierModal from './components/DossierModal';

export default function App() {
  const [dossierData, setDossierData] = useState(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Navigation Header */}
      <Header />

      {/* Multi-Page Route Switcher */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/recommend"
            element={<RecommenderView onOpenDossier={(data) => setDossierData(data)} />}
          />
          <Route path="/simulation" element={<SimulationLabView />} />
          <Route path="/materials" element={<MaterialsDatabaseView />} />
          <Route path="/compliance" element={<ComplianceView />} />
          <Route path="/grants" element={<SchemesView />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Printable / Downloadable MoFPI Technical Dossier */}
      {dossierData && (
        <DossierModal
          data={dossierData}
          onClose={() => setDossierData(null)}
        />
      )}

      {/* Global Multi-Page Footer */}
      <Footer />
    </div>
  );
}
