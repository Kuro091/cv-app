import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function Card({ icon, description, title }: CardProps) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <>
      <div
        className={`grid items-center w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg  ${
          isHovering ? 'h-fit bg-gray-100' : 'h-24 2xl:h-16 bg-white'
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className='pl-5 cursor-pointer flex items-center text-left gap-2 h-24 2xl:h-16'>
          <div className=''>{icon}</div>
          <div className='font-bold text-xl'>{title}</div>
        </div>
          <motion.div
            className='py-2 px-6 bg-gray-100'
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              type: 'spring',
            }}
          >
            <p className='text-gray-700 text-left'>{description}</p>
          </motion.div>
      </div>
    </>
  );
}

export default Card;
