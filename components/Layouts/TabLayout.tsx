import { Duru_Sans } from '@next/font/google';
import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useColor } from '../hooks/useColor';

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

const TabLayout = ({
  children,
  key,
  className,
}: {
  children: ReactNode;
  key: string;
  className: string;
}) => {
  const { currentColor } = useColor();

  return (
    <AnimatePresence mode='wait'>
      <motion.main className={className}>
        <motion.section
          key={key}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
};

export default TabLayout;
