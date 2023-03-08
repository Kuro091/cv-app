import { useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import AnimatedMenuBtn from '../AnimatedMenuBtn/AnimatedMenuBtn';

interface AnimatedMenuProps {
  renderMenu?: () => JSX.Element;
  className?: string;
}

const AnimatedMenu = ({ renderMenu, className }: AnimatedMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const sidebar = {
    open: () => ({
      clipPath: `inset(0 0 0 0 round 5rem)`,
      transition: {
        type: 'spring',
        duration: 0.2,
        bounce: 0.5,
      },
    }),
    closed: () => ({
      clipPath: `inset(0px 0px 0px 100% round 2rem)`,
      transition: {
        type: 'spring',
        duration: 0.5,
        bounce: 0.2,
      },
    }),
  };

  // const { width } = useDimensions(containerRef);

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
