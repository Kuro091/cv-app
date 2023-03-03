import { useMotionValue, motion, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import Square from './Square';
import { GAP, GRID, SQUARE_SIZE } from './gridconfig';

interface AnimatedGridProps {
  callback?: () => void;
}

const AnimatedGrid = ({ callback }: AnimatedGridProps) => {
  const [active, setActive] = useState({ row: 0, col: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      onClick={() => {
        callback && callback();
      }}
      onHoverStart={() => {
        x.set(30);
        setTimeout(() => {
          x.set(0);
        }, 100);
      }}
      style={{
        cursor: 'pointer',
        display: 'flex',
        width: (SQUARE_SIZE + GAP) * 4 - GAP,
        height: (SQUARE_SIZE + GAP) * 4 - GAP,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
        zIndex: 99,
      }}
    >
      {GRID.map((row, rowIndex) =>
        row.map((_item, colIndex) => {
          return (
            <Square
              x={x}
              y={y}
              active={active}
              setActive={setActive}
              rowIndex={rowIndex}
              colIndex={colIndex}
              key={rowIndex + _item}
            />
          );
        })
      )}
    </motion.div>
  );
};

export default AnimatedGrid;
