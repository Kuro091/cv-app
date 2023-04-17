import { FC } from 'react';
import { motion } from 'framer-motion';

type BorderPosition = 'borderTop' | 'borderBottom' | 'borderLeft' | 'borderRight';
type Variant = 'default' | 'outlined';

interface AnimatedContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  borderPosition?: BorderPosition;
  variant?: Variant;
  className?: string;
}

const AnimatedContainer: FC<AnimatedContainerProps> = ({
  children,
  backgroundColor = 'white',
  borderPosition = 'borderBottom',
  variant = 'default',
  borderColor = 'darkgrey',
  className,
}) => {
  const style = {
    background: 'transparent',
  };
  switch (variant) {
    case 'default':
      style[borderPosition as keyof typeof style] = `2px solid ${borderColor}`;
      break;
    case 'outlined':
      style['border' as keyof typeof style] = `2px solid ${borderColor}`;
      break;
  }

  return (
    <motion.div
      className={[
        className,
        `rounded-xl grid place-content-center p-6 mb-10 font-extrabold text-4xl w-full h-full`,
      ].join(' ')}
      style={style}
      whileHover={{
        background: `${backgroundColor}`,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
