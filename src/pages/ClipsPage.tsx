import React from 'react';
import { ClipGroup } from '../components/clips/ClipGroup';
import { FixGroup } from '../components/clips/FixGroup';
import { useClipsStore } from '../store/useClipsStore';

export const ClipsPage: React.FC = () => {
  const { clipGroups, fixEntries } = useClipsStore();

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="max-w-md mx-auto p-4">
        {clipGroups.map((group, index) => (
          <ClipGroup
            key={index}
            date={group.date}
            clips={group.clips}
            total={group.total}
          />
        ))}
        <FixGroup
          date="December 16, 2024"
          entries={fixEntries}
          total={16789}
        />
      </div>
    </div>
  );
};