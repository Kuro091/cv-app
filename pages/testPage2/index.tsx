import Image from 'next/image';
import { Layout } from '../../components/Layouts';
import { useRef, useEffect, useState } from 'react';
const imgSrc = [
  {
    src: 'https://placekitten.com/1300/1300?image=1',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=2',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=3',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=4',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=5',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=6',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=7',
  },
  {
    src: 'https://placekitten.com/1300/1300?image=8',
  },
];

const TestPage2 = () => {
  return (
    <Layout>
      <SlideShow />
    </Layout>
  );
};

const SlideShow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<(HTMLImageElement | null)[]>();
  const galaryContainer = containerRef.current as unknown as HTMLElement & {
    dataset: {
      mouseDownAt: string;
      prevPercentage: string;
      percentage: string;
    };
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | Touch) => {
      if (galaryContainer) galaryContainer.dataset.mouseDownAt = e.clientX.toString();
    };

    const handleMouseUp = (e: MouseEvent | Touch) => {
      if (galaryContainer) {
        galaryContainer.dataset.prevPercentage = galaryContainer.dataset.percentage;
        galaryContainer.dataset.mouseDownAt = '0';
      }
    };

    const handleMouseMove = (e: MouseEvent | Touch) => {
      if (galaryContainer) {
        if (galaryContainer.dataset.mouseDownAt === '0') return;
        const mouseDelta = parseFloat(galaryContainer.dataset.mouseDownAt) - e.clientX;
        const maxDelta = Math.min(window.innerWidth / 2, 300);

        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentage = Math.max(
          Math.min(parseFloat(galaryContainer.dataset.prevPercentage) + percentage, 0),
          -100
        );

        galaryContainer.dataset.percentage = nextPercentage.toString();
        galaryContainer?.animate(
          {
            transform: `translateX(${nextPercentage}%)`,
          },
          {
            duration: 1000,
            fill: 'forwards',
          }
        );

        childrenRef.current?.forEach((child) => {
          if (child) {
            child.animate(
              {
                objectPosition: `${nextPercentage + 100}% 50%`,
              },
              {
                duration: 1000,
                fill: 'forwards',
              }
            );
          }
        });
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', (e) => handleMouseDown(e.touches[0]));
    window.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
    window.addEventListener('touchend', (e) => handleMouseUp(e.touches[0]));
  }, [galaryContainer]);

  return (
    <>
      <div
        ref={containerRef}
        id='gallery-container'
        className='flex absolute left-[50%] top-[20%]'
        data-mouse-down-at='0'
        data-prev-percentage='0'
        data-percentage='0'
      >
        {imgSrc.map((img, i) => (
          <div
            key={i}
            className='relative object bg-red-100 w-[300px] h-[460px] mr-[4vmin] select-none'
          >
            <Image
              ref={(ref) => {
                if (childrenRef.current) {
                  childrenRef.current.push(ref);
                }
              }}
              fill
              style={{
                objectFit: 'cover',
                pointerEvents: 'none',
                userSelect: 'none',
                objectPosition: '50% 50%',
              }}
              src={img.src}
              id={`img${i}`}
              alt='kitty'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TestPage2;
