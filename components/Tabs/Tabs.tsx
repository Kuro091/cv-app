import { Tab } from '../hooks/useTabs';

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => {
  return (
    <>
      <ul className='flex flex-wrap text-sm text-center text-gray-500 '>
        {tabs.map((tab, index) => (
          <li key={index} className='inline-block px-5 py-4 text-white rounded-t-lg'>
            <a
              href='#'
              onClick={() => onTabClick(index)}
              aria-current='page'
              className={`py-2 ${activeTab === index && 'font-bold  border-b-4  border-gray-200'}`}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tabs;
