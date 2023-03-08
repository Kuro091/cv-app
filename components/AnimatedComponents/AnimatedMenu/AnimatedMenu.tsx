import { useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import AnimatedMenuBtn from './AnimatedMenuBtn/AnimatedMenuBtn';
import { useClientStore } from '../../hooks/useClientStore';

interface AnimatedMenuProps {
  renderMenu?: ({ onItemClick }: { onItemClick?: () => void }) => JSX.Element;
  className?: string;
}

const AnimatedMenu = ({ renderMenu, className }: AnimatedMenuProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { setIsMenuOpen } = useClientStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const sidebar = {
    open: () => ({
      clipPath: `inset(0)`,
      transition: {
        type: 'spring',
        duration: 0.2,
        bounce: 0.1,
      },
    }),
    closed: () => ({
      clipPath: `inset(0px 0px 0px 100%)`,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.2,
      },
    }),
  };

  return (
    <motion.nav
      className={[className, `w-full h-full`].join(' ')}
      ref={containerRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className='w-full h-full bg-white sticky top-0' variants={sidebar}>
        {renderMenu &&
          renderMenu({
            onItemClick: () => {
              setIsMenuOpen(false);
              toggleOpen();
            },
          })}
      </motion.div>
      <AnimatedMenuBtn
        onClick={() => {
          toggleOpen();
        }}
        className='absolute right-[2.5%] top-[5%] cursor-pointer'
        enabled={isOpen}
      />
    </motion.nav>
  );
};

export default AnimatedMenu;
