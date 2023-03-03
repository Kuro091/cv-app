import { useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import AnimatedGrid from '../AnimatedGrid/AnimatedGrid';

interface AnimatedMenuProps {
  renderMenu?: () => JSX.Element;
}

const AnimatedMenu = ({ renderMenu }: AnimatedMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const sidebar = {
    open: (height = 80) => ({
      clipPath: `circle(${height}rem at right top)`,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 40,
        restDelta: 2,
        duration: 1,
      },
    }),
    closed: {
      clipPath: `circle(1px at right top)`,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed w-full h-full top-0`}
      ref={containerRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className='w-full h-full bg-white sticky top-0' variants={sidebar}>
        {renderMenu && renderMenu()}
      </motion.div>
      <div ref={menuRef} className='absolute right-[3%] top-[7%]'>
        <AnimatedGrid
          callback={() => {
            toggleOpen();
          }}
        />
      </div>
    </motion.nav>
  );
};

export default AnimatedMenu;
