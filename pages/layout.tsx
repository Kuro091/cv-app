import { Duru_Sans } from '@next/font/google';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Background from '../components/Background';
import { AnimatedMenu } from '../components/AnimatedComponents/AnimatedMenu';
import Navigation from '../components/Navigation';

const inter = Duru_Sans({ weight: ['400'], subsets: ['latin'] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className={`min-h-screen text-white ${inter.className} relative overflow-hidden`}>
      <Header />
      {children}
      <Background />
      <AnimatedMenu className='fixed top-0 right-0' renderMenu={() => <Navigation />} />
    </section>
  );
};

export default Layout;
