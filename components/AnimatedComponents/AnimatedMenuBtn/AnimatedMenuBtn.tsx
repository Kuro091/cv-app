import { MouseEventHandler, FC, SVGAttributes } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const Path = ({
  strokeColor = 'hsl(0, 100%, 100%)',
  ...rest
}: {
  strokeColor?: string;
} & SVGMotionProps<SVGPathElement>) => {
  return (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke={strokeColor}
      strokeLinecap='round'
      {...rest}
    />
  );
};
const AnimatedMenuBtn = ({
  onClick,
  className,
  enabled = true,
}: {
  onClick: MouseEventHandler<HTMLElement>;
  className?: string | undefined;
  enabled?: boolean;
}) => {
  const strokeColor = enabled ? 'hsl(0, 100%, 0%)' : 'hsl(0, 100%, 100%)';

  return (
    <>
      <button className={className} onClick={onClick}>
        <svg width='50' height='50' viewBox='0 0 23 23'>
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
            strokeColor={strokeColor}
          />
          <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            strokeColor={strokeColor}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
            strokeColor={strokeColor}
          />
        </svg>
      </button>
    </>
  );
};

export default AnimatedMenuBtn;
