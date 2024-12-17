import React from 'react';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { TAB_NAMES } from '../../constants/navigation';

interface Props {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const TabBar: React.FC<Props> = ({ activeTab, onTabChange }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
    <div className="max-w-md mx-auto grid grid-cols-5 gap-1 p-2">
      {TAB_NAMES.map((tab, index) => (
        <button
          key={tab}
          onClick={() => onTabChange(index)}
          className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
        >
          {index === activeTab ? (
            <StarSolid className="h-6 w-6 text-blue-500" />
          ) : (
            <StarOutline className="h-6 w-6" />
          )}
          <span className="text-xs mt-1">{tab}</span>
        </button>
      ))}
    </div>
  </div>
);