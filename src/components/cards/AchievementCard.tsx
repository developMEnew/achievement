import React from 'react';

interface Props {
  label: string;
  value: number;
  month: string;
}

export const AchievementCard: React.FC<Props> = ({ label, value, month }) => (
  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm opacity-80">achievement</p>
        <p className="text-lg font-semibold">{label}</p>
        <p className="text-4xl font-bold mt-2">{value.toLocaleString()}</p>
      </div>
      <span className="text-lg">{month}</span>
    </div>
  </div>
);