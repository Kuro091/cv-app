import { useState } from 'react';

function MyComponent() {
  const [isHover, setIsHover] = useState(false);

  const animatedClasses = [
    `animated before:h-full before:w-full after:h-full after:w-full after:absolute before:absolute after:top-0 before:top-0`,
    'before:z-[2] before:bg-gray-400 after:z-[1] after:bg-white',
    'before:animate-rn_surface',
    'after:animate-rn_surfaceBack',
  ].join(' ');

  return (
    <div className={['bg-red-100 w-[500px] h-[500px] relative z-[10] overflow-hidden'].join(' ')}>
      <div
        className={['bg-black w-[500px] h-[500px] relative', animatedClasses].join(' ')}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      />
    </div>
  );
}

export default MyComponent;
