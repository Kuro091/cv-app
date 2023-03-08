import { motion } from 'framer-motion';
import Link from 'next/link';
import { useColorsStore } from '../../hooks/useColors';

export interface MenuItem {
  name: string;
  link: string;
}

interface AnimatedMenuItemsProps {
  items: MenuItem[];
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

const MenuItem = ({ item, index }: { item: MenuItem; index: number }) => {
  const colorStore = useColorsStore();
  const itemColor = colorStore.colors[index];

  const inTextColor = `hover:text-white text-[${itemColor.primary}]`;

  const inBgColor = `hover:bg-[${itemColor.secondary}]`;
  const className = [
    `flex justify-end lg:w-[25rem] pr-10 lg:mr-5 mb-5 py-10 w-full rounded-3xl`,
    inTextColor,
    inBgColor,
  ].join(' ');

  return (
    <Link href={item.link} className={className} onClick={() => colorStore.setChosenColor(index)}>
      <motion.li variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {item.name}
      </motion.li>
    </Link>
  );
};

const AnimatedMenuItems = ({ items }: AnimatedMenuItemsProps) => {
  return (
    <motion.ul
      variants={variants}
      className='flex flex-col justify-center select-none px-20 h-full items-end lg:gap-y-5 text-5xl lg:text-7xl font-extrabold cursor-pointer '
    >
      {items.map((item, index) => {
        return <MenuItem item={item} key={item.name} index={index} />;
      })}
    </motion.ul>
  );
};

export default AnimatedMenuItems;
