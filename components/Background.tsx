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
      <div
        ref={ref}
        className={`h-[500px] aspect-[1] absolute left-[50%] top-[50%] rounded-full
          bg-gradient-to-br from-light-green-300 to-light-blue-600 opacity-50 animate-[rotate_5s_linear_infinite] blur-[200px]
          `}
      ></div>
    </>
  );
};

export default Background;
