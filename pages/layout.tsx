import { Duru_Sans } from '@next/font/google';
import { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useColorsStore } from '../components/hooks/useColorsStore';
import { Color } from '../components/hooks/types';

const inter = Duru_Sans({ weight: ['400'], subsets: ['latin'] });
const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    zIndex: 9999,
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.5 },
    zIndex: 9999,
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.1 },
    zIndex: 1,
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { colors, currentColor } = useColorsStore();
  const _currentColor = colors.find((color) => color.name === currentColor);

  return (
    <section
      className={[
        `min-h-screen text-white ${inter.className} overflow-hidden relative`,
        _currentColor?.darkBgClass,
      ].join(' ')}
    >
      <Background />
      <Header />
      <motion.section
        className={`${_currentColor?.lightBgClass}`}
        variants={wrapperVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.main
          className='pt-[7rem] pb-5 px-20 min-h-[57rem] w-full z-10'
          initial={{ x: 300, opacity: 0, zIndex: -9999 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
          exit={{ x: 300, opacity: 0, transition: { delay: 0 } }}
        >
          {children}
        </motion.main>
      </motion.section>

      {/* HEADER IS 5rem */}
      <Footer />
    </section>
  );
};

export default Layout;
