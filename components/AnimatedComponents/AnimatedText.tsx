import { useAnimation, motion, useInView } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const controls = useAnimation();

  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, {
    margin: '0px 0px -100px 0px',
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  const wordVariants = {
    hidden: {},
    visible: {},
  };

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: '0.5em',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <div className='font-bold text-white pl-4'>
        {text.split(' ').map((word, index) => (
          <motion.h1
            key={index}
            ref={ref}
            className='inline-block text-center whitespace-nowrap mr-2 ml-5 text-5xl lg:text-8xl'
            variants={wordVariants}
            initial='hidden'
            animate={controls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.02,
            }}
          >
            {word.split('').map((char, index) => (
              <motion.span key={index} className='inline-block ' variants={characterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        ))}
      </div>
    </>
  );
};

export default AnimatedText;
