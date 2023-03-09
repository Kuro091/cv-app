import { Duru_Sans } from '@next/font/google';
import { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useColor } from '../components/hooks/useColor';

const inter = Duru_Sans({ weight: ['400'], subsets: ['latin'] });

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.5 },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { currentColor } = useColor();

  return (
    <motion.section
      className={`min-h-screen text-white ${inter.className} bg-red-100`}
      style={{
        background: currentColor?.dark,
      }}
      exit={{ opacity: 0 }}
    >
      <Background />
      <Header />
      <motion.section
        style={{
          background: currentColor?.light,
        }}
        variants={wrapperVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.main
          className='min-h-[57rem] w-full z-10'
          initial={{ x: 300, opacity: 0, zIndex: -9999 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
          exit={{ x: 300, opacity: 0, transition: { delay: 0 } }}
        >
          {children}
        </motion.main>
      </motion.section>

      {/* HEADER IS 5rem */}
      <Footer />
    </motion.section>
  );
};

export default Layout;
