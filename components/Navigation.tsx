import Link from 'next/link';
import contacts from '../data/contacts';
import { AnimatedMenuItems } from './AnimatedComponents/AnimatedMenu/AnimatedMenuItems';
import { FC, memo } from 'react';

const menuItems = [
  { name: "these doesn't actually navigate anywhere", link: '/' },
  { name: 'but they still look cool as a menu navigation', link: '/' },
  { name: 'so I kinda left them here', link: '/' },
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
              <Link href={contact.link} key={contact.name} className='grid place-content-center'>
                {contact.icon}
              </Link>
            ))}
          </div>
        </div>
        <AnimatedMenuItems items={menuItems} onItemClick={onItemClick} />
      </section>
    </>
  );
};

export default Navigation;
