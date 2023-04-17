import { FC } from 'react';

interface AnimatedCardStacksProps {
  className?: string;
}

const cards = [{}];

const AnimatedCardStacks: FC<AnimatedCardStacksProps> = ({ className }) => {
  return <section className={className}></section>;
};

export default AnimatedCardStacks;
