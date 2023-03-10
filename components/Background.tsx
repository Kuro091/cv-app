import { useEffect, useRef } from 'react';

const Background = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        );
      }
    };
    window.addEventListener('pointermove', setFromEvent);

    return () => {
      window.removeEventListener('pointermove', setFromEvent);
    };
  }, []);

  return (
    <>
      <div className='w-full h-full absolute backdrop-blur-[10vmax] z-[-2]'></div>
      <div
        ref={ref}
        className={`h-[25rem] aspect-[1] absolute rounded-full
          bg-gradient-to-br from-blue-600 to-deep-purple-900 opacity-50 animate-[rotate_5s_linear_infinite]
          z-[-3] object-fill`}
      ></div>
    </>
  );
};

export default Background;
