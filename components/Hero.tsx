import { AnimatedMenuItems } from './AnimatedComponents/AnimatedMenu/AnimatedMenuItems';
import AnimatedText from './AnimatedComponents/AnimatedText';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
];

const Hero = () => {
  return (
    <section className='w-full min-h-[50rem] flex items-center justify-center'>
      <AnimatedText text='Hi! Please use the menu to navigate' />
      <AnimatedMenuItems items={menuItems} />
    </section>
  );
};

export default Hero;
