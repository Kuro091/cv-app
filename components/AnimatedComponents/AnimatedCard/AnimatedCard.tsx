// import framer hooks
import { FC, useState } from 'react';
import { useMotionValue, useTransform, motion, useCycle } from 'framer-motion';
import Image from 'next/image';

interface AnimatedCardProps {
  className?: string;
  imgSrc: string;
  cardBackgroundColor?: string;
  title?: string;
  subtitle?: string;
}

const AnimatedCard: FC<AnimatedCardProps> = ({
  imgSrc,
  className,
  cardBackgroundColor = '#e4dfdc',
  title,
  subtitle,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const [isHover, setIsHover] = useState(false);

  return (
    // card wrapper
    <div className={[className, ''].join(' ')}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100, background: cardBackgroundColor }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        initial={{
          rotateX: -10,
          rotateY: 5,
        }}
        animate={
          isHover
            ? {}
            : {
                rotateX: [-10, 6],
                rotateY: [5, 10],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }
        }
        transition={{}}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileTap={{ cursor: 'grabbing' }}
        className='m-auto max-w-[20rem] min-h-[25rem] rounded-3xl cursor-grab relative'
      >
        <img className='rounded-t-3xl' src={imgSrc} alt='' draggable={false} />
        <h1 className='grid place-content-center text-center h-full text-2xl mt-4 font-extrabold text-white'>
          {title}
          <p className='max-w-[300px] text-xs mb-4 italic'>{subtitle}</p>
        </h1>
        <motion.div
          style={{
            y: -395,
            x: -20,
          }}
          className='absolute h-full w-full rounded-3xl border-2 border-blue-gray-900'
        />
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
