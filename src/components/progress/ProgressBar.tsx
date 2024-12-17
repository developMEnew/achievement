import React from 'react';

interface Props {
  current: number;
  max: number;
  percentage: number;
}

export const ProgressBar: React.FC<Props> = ({ current, max, percentage }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm text-gray-600">
      <span>{current.toLocaleString()}</span>
      <span>{max}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full">
      <div
        className="h-full bg-blue-500 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);