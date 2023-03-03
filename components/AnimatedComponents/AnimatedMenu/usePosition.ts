import { RefObject, useEffect, useState } from 'react';
import { useObserver } from './useObserver';

export const usePosition = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useObserver(ref, () => {
    setPosition({ x: 0, y: 0 });
  })

  return position;
}