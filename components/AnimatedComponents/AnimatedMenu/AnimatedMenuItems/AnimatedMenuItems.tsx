import { motion } from 'framer-motion';
import Link from 'next/link';
import { Color } from '../../../hooks/types';
import { useColor } from '../../../hooks/useColor';

export interface MenuItem {
  name: string;
  link: string;
}

interface AnimatedMenuItemsProps {
  items: MenuItem[];
  onItemClick?: () => void;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({
  item,
  color,
  onClick,
}: {
  item: MenuItem;
  color: Color;
  onClick?: () => void;
}) => {
  const { currentColor, setCurrentColor } = useColor(color);

  return (
    <Link href={item.link}>
      <motion.li
        style={{
          background: '#ffffff',
          color: currentColor?.dark,
        }}
        className='flex justify-end my-10 p-10 pl-40 lg:self-end lg:justify-end lg:w-[25rem] lg:pr-10 lg:mr-5 rounded-3xl'
        onClick={() => {
          setCurrentColor(color);
          onClick && onClick();
        }}
        variants={menuItemVariants}
        whileHover={{
          scale: 1.1,
          background: currentColor?.dark,
          color: '#ffffff',
        }}
        whileTap={{ scale: 0.95 }}
      >
        {item.name}
      </motion.li>
    </Link>
  );
};

const _colorMap = {
  0: Color.BLUE,
  1: Color.RED,
  2: Color.TEAL,
};

const AnimatedMenuItems = ({ items, onItemClick }: AnimatedMenuItemsProps) => {
  return (
    <motion.ul
      variants={variants}
      className='flex flex-col lg:pt-40 select-none pl-20 pr-10 items-end lg:gap-y-5 text-6xl lg:text-7xl font-extrabold cursor-pointer'
    >
      {items.map((item, index) => {
        const color = _colorMap[index as keyof typeof _colorMap];

        return <MenuItem item={item} key={item.name} color={color} onClick={onItemClick} />;
      })}
    </motion.ul>
  );
};

export default AnimatedMenuItems;
