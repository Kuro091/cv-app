import { AnimatedMenuItems } from './AnimatedComponents/AnimatedMenuItems';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
];

const contacts = [
  { name: 'Github', link: '' },
  { name: 'LinkedIn', link: '' },
  { name: 'Email', link: '' },
];

const Navigation = () => {
  return (
    <>
      <section className='grid lg:grid-cols-2 grid-flow-row h-full'>
        <div className=' text-indigo-900 self-end lg:p-20 p-10'>
          <p className='text-5xl font-extrabold'>MINHLC</p>
          <p className='text-2xl font-extrabold'>Frontend Developer</p>
          <p className='text-xl font-semibold mb-5'>(+84) 88 600 2391</p>
          <div className='flex gap-x-3'>
            {contacts.map((contact, index) => (
              <div key={contact.name} className='w-10 h-10 bg-red-100'></div>
            ))}
          </div>
        </div>
        <AnimatedMenuItems items={menuItems} />
      </section>
    </>
  );
};

export default Navigation;
