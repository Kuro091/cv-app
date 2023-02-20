import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';

export default function Main() {
  const data = [
    {
      label: 'Summary',
      value: 'summary',
      desc: <Summary />,
    },
    {
      label: 'Skills',
      value: 'skills',
      desc: <Skills />,
    },
    {
      label: 'Experience',
      value: 'experience',
      desc: <Experience />,
    },
  ];

  return (
    <div className='w-[80%] m-5 h-5/6 bg-white rounded-md'>
      <Tabs value='summary'>
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              <div className='font-bold text-gray-700'>{label}</div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
