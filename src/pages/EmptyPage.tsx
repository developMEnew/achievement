import React from 'react';

interface Props {
  tabNumber: number;
}

export const EmptyPage: React.FC<Props> = ({ tabNumber }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center pb-20">
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-600">Tab {tabNumber}</h1>
      <p className="text-gray-500 mt-2">This page is under construction</p>
    </div>
  </div>
);