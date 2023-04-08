import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function Card({ icon, description, title }: CardProps) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div
      className={`grid place-content-start py-2 w-full max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-white ${
        isHovering ? '' : 'h-24 2xl:h-16'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='h-fit px-6 py-4 cursor-pointer flex items-center text-left gap-2'>
        <div className='flex items-center'>{icon}</div>
        <div className='font-bold text-xl'>{title}</div>
      </div>
      {isHovering && (
        <div className='px-6 py-4 bg-gray-100'>
          <p className='text-gray-700 text-left'>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
