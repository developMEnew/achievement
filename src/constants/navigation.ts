export const TAB_NAMES = ['Statistics', 'Clips', 'Management', 'Reports', 'Settings'] as const;

export type TabName = typeof TAB_NAMES[number];

export const getTabTitle = (index: number): string => {
  return TAB_NAMES[index] || 'Unknown Tab';
};