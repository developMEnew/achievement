import { create } from 'zustand';
import { ClipGroup, FixEntry } from '../types/clip';

interface ClipsStore {
  clipGroups: ClipGroup[];
  fixEntries: FixEntry[];
}

export const useClipsStore = create<ClipsStore>(() => ({
  clipGroups: [
    {
      date: 'December 16, 2024',
      clips: [
        { id: 1, clipNumber: '0006', attributeCount: 6789 },
        { id: 2, clipNumber: '0006', attributeCount: 6789 },
        { id: 3, clipNumber: '0006', attributeCount: 6789 },
      ],
      total: 16789
    },
    {
      date: 'December 16, 2024',
      clips: [
        { id: 4, clipNumber: '0006', attributeCount: 6789 },
        { id: 5, clipNumber: '0006', attributeCount: 6789 },
      ],
      total: 16789
    }
  ],
  fixEntries: [
    { id: 6, clipNumber: '0006', attributeCount: 6789, fixValue: 0 },
    { id: 47, clipNumber: '0006', attributeCount: 6789, fixValue: 0 },
    { id: 48, clipNumber: 'FIX', attributeCount: 0, fixValue: 60 }
  ]
}));