import { create } from 'zustand';
import { Stats } from '../types/stats';

interface StatsStore extends Stats {
  addNewClip: () => void;
}

export const useStatsStore = create<StatsStore>((set) => ({
  totalCount: 45890,
  currentCount: 45890,
  progress: 75,
  workingDays: 22,
  moreCount: 22,
  percentage: 22.56,
  needFor100: 6544,
  dailyPercentage: 67.56,
  
  addNewClip: () => {
    set((state) => ({
      totalCount: state.totalCount + 1,
      currentCount: state.currentCount + 1,
    }));
  },
}));