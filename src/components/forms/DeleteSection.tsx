import React, { useState } from 'react';

interface Props {
  onDelete: (number: string) => void;
}

export const DeleteSection: React.FC<Props> = ({ onDelete }) => {
  const [selectedNumber, setSelectedNumber] = useState('');

  return (
    <div className="bg-gray-200 p-4 rounded-lg mt-8">
      <h2 className="text-lg font-semibold mb-4">DELETE</h2>
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm text-gray-600">select number</label>
          <input
            type="number"
            value={selectedNumber}
            onChange={(e) => setSelectedNumber(e.target.value)}
            className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          onClick={() => onDelete(selectedNumber)}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};