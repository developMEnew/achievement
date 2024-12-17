import React from 'react';

interface Props {
  clipNumber: string;
  attributeCount: number;
  fixValue: number;
}

export const FixEntry: React.FC<Props> = ({ clipNumber, attributeCount, fixValue }) => (
  <div className="flex items-center justify-between bg-white rounded-lg p-3 mb-2">
    <div className="flex items-center gap-4">
      <span className={`px-3 py-1 rounded ${
        clipNumber === 'FIX' ? 'bg-green-100 text-green-700' : 'bg-gray-100'
      }`}>
        {clipNumber}
      </span>
    </div>
    <div className="flex items-center gap-4">
      {clipNumber === 'FIX' ? (
        <>
          <span className="text-gray-500">(-)</span>
          <span className="font-medium">{fixValue}</span>
        </>
      ) : (
        <span className="font-medium">{attributeCount.toLocaleString()}</span>
      )}
    </div>
  </div>
);