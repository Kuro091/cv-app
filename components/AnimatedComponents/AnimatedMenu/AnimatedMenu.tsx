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
    <>
      <motion.nav
        className='absolute top-0 w-full h-full'
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
      >
        <motion.div
          className='fixed w-full h-full bg-white top-0 z-[2]'
          variants={sidebar}
          initial={false}
        >
          {renderMenu &&
            renderMenu({
              onItemClick: () => {
                toggleOpen();
                setIsMenuOpen(true);
              },
            })}
        </motion.div>
        <AnimatedMenuBtn
          onClick={() => {
            toggleOpen();
            setIsMenuOpen(isOpen);
          }}
          className='fixed right-[5%] top-[2%] cursor-pointer z-[99]'
          enabled={isOpen}
        />
      </motion.nav>
    </>
  );
};

export default AnimatedMenu;
