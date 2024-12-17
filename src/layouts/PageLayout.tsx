import React, { ReactNode } from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { TabBar } from '../components/navigation/TabBar';

interface Props {
  children: ReactNode;
  title: string;
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const PageLayout: React.FC<Props> = ({
  children,
  title,
  activeTab,
  onTabChange
}) => (
  <div className="min-h-screen bg-gray-100">
    <Navbar title={title} />
    <div className="pt-14 pb-20">
      {children}
    </div>
    <TabBar activeTab={activeTab} onTabChange={onTabChange} />
  </div>
);