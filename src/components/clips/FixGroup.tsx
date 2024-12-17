import React from 'react';
import { FixEntry } from './FixEntry';
import type { FixEntry as FixEntryType } from '../../types/clip';

interface Props {
  date: string;
  entries: FixEntryType[];
  total: number;
}

export const FixGroup: React.FC<Props> = ({ date, entries, total }) => (
  <div className="mb-6">
    <h2 className="text-sm font-medium text-gray-600 mb-2">{date}</h2>
    <div className="bg-gray-100 rounded-xl p-4">
      {entries.map((entry) => (
        <FixEntry
          key={entry.id}
          clipNumber={entry.clipNumber}
          attributeCount={entry.attributeCount}
          fixValue={entry.fixValue}
        />
      ))}
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
        <span className="font-medium">Total</span>
        <span className="font-bold">{total.toLocaleString()}</span>
      </div>
    </div>
  </div>
);