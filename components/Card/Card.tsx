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
        <div className='2xl:h-16 flex items-center h-24 gap-2 pl-5 text-left cursor-pointer'>
          <div className=''>{icon}</div>
          <div className='text-xl font-bold'>{title}</div>
        </div>
          <motion.div
            className='px-6 py-2 bg-gray-100'
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
            <p className='text-left text-gray-700'>{description}</p>
          </motion.div>
      </div>
    </>
  );
}

export default Card;
