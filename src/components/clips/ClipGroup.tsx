import React from 'react';
import { ClipEntry } from './ClipEntry';
import type { Clip } from '../../types/clip';

interface Props {
  date: string;
  clips: Clip[];
  total: number;
}

export const ClipGroup: React.FC<Props> = ({ date, clips, total }) => (
  <div className="mb-6">
    <h2 className="text-sm font-medium text-gray-600 mb-2">{date}</h2>
    <div className="bg-gray-100 rounded-xl p-4">
      {clips.map((clip) => (
        <ClipEntry
          key={clip.id}
          id={clip.id}
          clipNumber={clip.clipNumber}
          attributeCount={clip.attributeCount}
        />
      ))}
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
        <span className="font-medium">Total</span>
        <span className="font-bold">{total.toLocaleString()}</span>
      </div>
    </div>
  </div>
);