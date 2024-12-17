import React from 'react';

interface Props {
  title: string;
}

export const Navbar: React.FC<Props> = ({ title }) => (
  <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
    <div className="max-w-md mx-auto px-4 py-3">
      <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
    </div>
  </div>
);