import { Duru_Sans } from '@next/font/google';
import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useColor } from '../hooks/useColor';
import Header from '../Header';
import Footer from '../Footer';

const inter = Duru_Sans({ weight: ['400'], subsets: ['latin'] });

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transtion: { duration: 0.3 },
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { currentColor } = useColor();

  return (
    <motion.main
      style={{
        background: currentColor?.dark,
      }}
      className={`h-full text-white ${inter.className} relative `}
    >
      <motion.section
        style={{
          background: currentColor?.light,
        }}
        variants={wrapperVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <Header />
        <section className='min-h-[55rem] w-full relative z-[1]'>{children}</section>
        <Footer />
      </motion.section>

      {/* HEADER IS 5rem */}
    </motion.main>
  );
};

export default Layout;
