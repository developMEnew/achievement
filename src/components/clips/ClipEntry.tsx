import React from 'react';

interface Props {
  id: number;
  clipNumber: string;
  attributeCount: number;
}

export const ClipEntry: React.FC<Props> = ({ id, clipNumber, attributeCount }) => (
  <div className="flex items-center justify-between bg-white rounded-lg p-3 mb-2">
    <div className="flex items-center gap-4">
      <span className="text-gray-600">{id}</span>
      <span className="bg-gray-100 px-3 py-1 rounded">{clipNumber}</span>
    </div>
    <span className="font-medium">{attributeCount.toLocaleString()}</span>
  </div>
);