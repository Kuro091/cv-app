import { AnimatedMenuItems } from './AnimatedComponents/AnimatedMenu/AnimatedMenuItems';
import { FC, memo } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const menuItems = [
  { name: "these doesn't actually navigate anywhere", link: '/' },
  { name: 'but they still look cool as a menu navigation', link: '/' },
  { name: 'so I kinda left them here', link: '/' },
];

const contacts = [
  {
    name: 'Github',
    link: 'https://github.com/Kuro091/',
    icon: <GitHubIcon width={50} height={50} />,
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/lcminhhp/',
    icon: <LinkedInIcon width={150} height={150} />,
  },
  { name: 'Email', link: '' },
];

interface NavigationProps {
  onItemClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onItemClick }) => {
  return (
    <>
      <section className='grid grid-rows-[10rem_1fr] lg:grid-cols-2 lg:grid-flow-row h-full'>
        <div className=' text-indigo-900 lg:self-start justify-self-start h-fit lg:justify-self-start lg:p-20 p-10'>
          <p className='text-5xl font-extrabold'>MINHLC</p>
          <p className='text-2xl font-extrabold'>Frontend Developer</p>
          <p className='text-xl font-semibold mb-5'>(+84) 88 600 2391</p>
          <div className='flex gap-x-3'>
            {contacts.map((contact, index) => (
              <div
                key={contact.name}
                className='grid place-content-center cursor-pointer'
                onClick={() => {
                  if (contact.link) {
                    window.open(contact.link, '_blank');
                  }
                }}
              >
                {contact.icon}
              </div>
            ))}
          </div>
        </div>
        <AnimatedMenuItems items={menuItems} onItemClick={onItemClick} />
      </section>
    </>
  );
};

export default Navigation;
