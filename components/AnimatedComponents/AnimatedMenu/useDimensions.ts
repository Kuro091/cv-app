import { RefObject, useState, useLayoutEffect } from 'react';

export const useDimensions = (ref: RefObject<any>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    setDimensions(ref.current.getBoundingClientRect().toJSON());
  }, [ref]);
  return dimensions;
}
