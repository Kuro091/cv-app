import { Duru_Sans } from '@next/font/google';
import { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const inter = Duru_Sans({ weight: ['400'], subsets: ['latin'] });
const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.4, staggerChildren: 0.2 },
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: 0.4 },
  },
};

const defaultBg = 'bg-[#1E1E1E]';

const Layout = ({ children }: { children: ReactNode }) => {
  const [bg, setBg] = useState(defaultBg);
  return (
    <section className={`min-h-screen text-white ${inter.className} overflow-hidden relative`}>
      <Background />
      <Header />
      <motion.section
        className={bg}
        variants={wrapperVariants}
        initial='initial'
        onAnimationStart={() => setBg('bg-red-100')}
        animate='animate'
        exit='exit'
      >
        <main className='pt-[7rem] px-20 min-h-[57rem] w-full z-10 '>{children}</main>
      </motion.section>

      {/* HEADER IS 5rem */}
      <Footer />
    </section>
  );
};

export default Layout;
