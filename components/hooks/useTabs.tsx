import { useState } from 'react';

interface IUseTabs {
  initialTab: number;
  allTabs: Tab[];
}

export interface Tab {
  name: string;
  render: () => JSX.Element;
}

export const useTabs = ({ initialTab, allTabs }: IUseTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentIndex,
    currentItem: allTabs[currentIndex],
    setCurrentIndex,
  };
};
