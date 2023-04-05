import { AboutSection } from '../../AboutSection';
import { Portfolio } from '../../Portfolio';
import Tabs from '../../Tabs/Tabs';
import { useTabs } from '../../hooks/useTabs';

const TABS = [
  {
    name: 'About Me',
    render: () => <AboutSection />,
  },
  {
    name: 'Resume',
    render: () => <div>Resume</div>,
  },
  {
    name: 'Portfolio',
    render: () => <Portfolio />,
  },
];

const RightContent = () => {
  const { currentIndex, setCurrentIndex, currentItem } = useTabs({
    initialTab: 0,
    allTabs: TABS,
  });

  return (
    <div className='relative grid bg-gray-200 text-blue-gray-900 rounded-lg rounded-tr-[1.7rem] border-2 border-blue-gray-900 shadow-lg'>
      <div className='absolute justify-self-end h-fit py-1 px-5 rounded-bl-3xl rounded-tr-3xl translate-x-[0.2px] bg-blue-500 '>
        <Tabs activeTab={currentIndex} tabs={TABS} onTabClick={(index) => setCurrentIndex(index)} />
      </div>

      <div className='justify-self-start ml-7 pt-7  pb-3 font-extrabold text-3xl border-b-4 border-blue-gray-900'>
        {currentItem.name}
      </div>

      {currentItem.render()}
    </div>
  );
};

export default RightContent;
