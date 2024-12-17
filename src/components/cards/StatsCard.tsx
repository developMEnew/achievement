import React from 'react';

interface Props {
  label: string;
  value: number | string;
  suffix?: string;
}

export const StatsCard: React.FC<Props> = ({ label, value, suffix = '' }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-xl font-bold text-gray-900">
      {value}
      {suffix}
    </p>
  </div>
);