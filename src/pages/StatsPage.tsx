import React from 'react';
import { AchievementCard } from '../components/cards/AchievementCard';
import { StatsCard } from '../components/cards/StatsCard';
import { ProgressBar } from '../components/progress/ProgressBar';
import { useStatsStore } from '../store/useStatsStore';

export const StatsPage: React.FC = () => {
  const stats = useStatsStore();

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <AchievementCard
        label="Label"
        value={stats.totalCount}
        month="JAN"
      />
      <ProgressBar
        current={stats.currentCount}
        max={100}
        percentage={stats.progress}
      />
      <StatsCard
        label="Available Working days"
        value={stats.workingDays}
      />
      <div className="grid grid-cols-2 gap-4">
        <StatsCard label="MORE" value={stats.moreCount} />
        <StatsCard label="percentage" value={stats.percentage} suffix="%" />
        <StatsCard label="need for 100%" value={stats.needFor100} />
        <StatsCard label="daily percentage" value={stats.dailyPercentage} suffix="%" />
      </div>
      <button
        onClick={() => stats.addNewClip()}
        className="w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors"
      >
        ADD NEW CLIP
      </button>
    </div>
  );
};