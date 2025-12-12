import React, { useState } from 'react';
import { View, SpiritMetrics } from './types';
import Login from './components/Login';
import Layout from './components/Layout';
import SpiritBody from './components/SpiritBody';
import SpiritPool from './components/SpiritPool';
import SpiritState from './components/SpiritState';
import SpiritField from './components/SpiritField';
import LingdanEngine from './components/LingdanEngine';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>('spirit_body');
  
  // Mock Data for the User Session
  const [metrics] = useState<SpiritMetrics>({
    work: 85,
    product: 70,
    commodity: 60,
    item: 95
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'spirit_body':
        return <SpiritBody metrics={metrics} onNavigate={setCurrentView} />;
      case 'spirit_pool':
        return <SpiritPool />;
      case 'spirit_state':
        return <SpiritState />;
      case 'spirit_field':
        return <SpiritField />;
      case 'lingdan_engine':
        return <LingdanEngine metrics={metrics} />;
      default:
        return <SpiritBody metrics={metrics} onNavigate={setCurrentView} />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-sans">
      <Layout currentView={currentView} onNavigate={setCurrentView}>
        {renderView()}
      </Layout>
    </div>
  );
};

export default App;