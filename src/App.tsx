import React, { useState } from 'react';
import { PageLayout } from './layouts/PageLayout';
import { StatsPage } from './pages/StatsPage';
import { ClipsPage } from './pages/ClipsPage';
import { ClipManagementPage } from './pages/ClipManagementPage';
import { EmptyPage } from './pages/EmptyPage';
import { getTabTitle } from './constants/navigation';
import GoogleAuth from './components/login/GoogleAuth';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <StatsPage />;
      case 1:
        return <ClipsPage />;
      case 2:
        return <ClipManagementPage />;
      case 3:
        return <GoogleAuth />;
      case 4:
        return <EmptyPage tabNumber={5} />;
      default:
        return null;
    }
  };

  return (
    <PageLayout
      title={getTabTitle(activeTab)}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {renderContent()}
    </PageLayout>
  );
}

export default App;