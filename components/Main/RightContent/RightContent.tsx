import { AboutSection } from '../../AboutSection';
import { TabLayout } from '../../Layouts';
import { Portfolio } from '../../Portfolio';
import { Resume } from '../../Resume';
import Tabs from '../../Tabs/Tabs';
import { useColor } from '../../hooks/useColor';
import { useTabs } from '../../hooks/useTabs';

const TABS = [
  {
    name: 'About Me',
    render: () => <AboutSection />,
  },
  {
    name: 'Resume',
    render: () => <Resume />,
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

  const { currentColor } = useColor();

  return (
    <div className='relative grid grid-cols-1 xl:grid-rows-[100px_5fr] items-start place-content-start bg-gray-200 text-blue-gray-900 rounded-lg rounded-tr-[1.7rem] border-2 border-blue-gray-900 shadow-lg'>
      <div
        className='absolute justify-self-end h-fit py-1 px-5 rounded-bl-3xl rounded-tr-3xl translate-x-[0.2px]'
        style={{
          backgroundColor: currentColor?.light,
        }}
      >
        <Tabs activeTab={currentIndex} tabs={TABS} onTabClick={(index) => setCurrentIndex(index)} />
      </div>
      <div className='row-span-1 justify-self-start ml-7 pt-[10rem] lg:pt-20 xl:pt-7 pb-3 font-extrabold text-3xl border-b-4 border-blue-gray-900 ='>
        {currentItem.name}
      </div>
      <TabLayout className='row-span-1 h-full' key={currentItem.name}>
        <section className='py-10 px-10'>{currentItem.render()}</section>
      </TabLayout>
    </div>
  );
};

export default RightContent;
