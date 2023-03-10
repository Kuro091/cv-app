import { Dispatch, FC, SetStateAction } from 'react';
import { MotionValue, motion, useSpring } from 'framer-motion';
import { GAP, SQUARE_SIZE } from './gridconfig';
import { distance } from '@popmotion/popcorn';

interface SquareProps {
  active: { row: number; col: number };
  setActive: Dispatch<SetStateAction<{ row: number; col: number }>>;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const Square: FC<SquareProps> = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });

  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: isDragging ? 'black' : 'white',
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        position: 'absolute',
        borderRadius: '50%',
        top: rowIndex * (SQUARE_SIZE + GAP),
        left: colIndex * (SQUARE_SIZE + GAP),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    ></motion.div>
  );
};

export default Square;
