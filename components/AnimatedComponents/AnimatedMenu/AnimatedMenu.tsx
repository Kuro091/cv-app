import { useRef, useState } from 'react';
import { useCycle, motion } from 'framer-motion';
import AnimatedGrid from '../AnimatedGrid/AnimatedGrid';
import AnimatedMenuBtn from '../AnimatedMenuBtn/AnimatedMenuBtn';
import { useObserver } from './useObserver';

interface AnimatedMenuProps {
  renderMenu?: () => JSX.Element;
  className?: string;
}

const AnimatedMenu = ({ renderMenu, className }: AnimatedMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const sidebar = {
    open: (height = 2000) => ({
      clipPath: `circle(${height}rem at right top)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(0.1px at right top)`,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      className={className + ` w-full h-full `}
      ref={containerRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className='w-full h-full bg-white sticky top-0' variants={sidebar}>
        {renderMenu && renderMenu()}
      </motion.div>
      <AnimatedMenuBtn
        onClick={() => toggleOpen()}
        className='absolute right-[2.5%] top-[5%] cursor-pointer'
        enabled={isOpen}
      />
    </motion.nav>
  );
};

export default AnimatedMenu;
