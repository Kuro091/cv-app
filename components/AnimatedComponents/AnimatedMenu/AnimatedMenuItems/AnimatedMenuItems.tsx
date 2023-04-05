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
        className='flex justify-end my-10 p-5 lg:p-10 md:pl-40 lg:self-end lg:justify-end lg:min-w-[50rem] lg:pr-10 lg:mr-5 rounded-3xl text-xl lg:text-2xl font-extrabold text-right'
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
      className='flex flex-col pt-10 pr-5 pl-5 lg:pt-52 lg:pr-10 select-none items-end lg:gap-y-5  cursor-pointer'
    >
      {items.map((item, index) => {
        const color = _colorMap[index as keyof typeof _colorMap];

        return <MenuItem item={item} key={item.name} color={color} onClick={onItemClick} />;
      })}
    </motion.ul>
  );
};

export default AnimatedMenuItems;
