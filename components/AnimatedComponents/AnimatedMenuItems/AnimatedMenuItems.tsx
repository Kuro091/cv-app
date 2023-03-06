import { motion } from 'framer-motion';
import Link from 'next/link';

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

const MenuItem = ({ item }: { item: MenuItem }) => {
  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='hover:bg-[#313715] hover:text-[#e2f9b8] flex justify-end items-center pr-10 lg:pr-36 py-10 w-full'
    >
      <Link href={item.link}>{item.name}</Link>
    </motion.li>
  );
};

const AnimatedMenuItems = ({ items }: AnimatedMenuItemsProps) => {
  return (
    <motion.ul
      variants={variants}
      className='flex flex-col justify-center select-none px-20 h-full items-center lg:gap-y-5 text-black text-5xl lg:text-7xl font-extrabold cursor-pointer '
    >
      {items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </motion.ul>
  );
};

export default AnimatedMenuItems;
