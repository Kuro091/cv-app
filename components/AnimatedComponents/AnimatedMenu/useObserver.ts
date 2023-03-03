import { useEffect, useRef, RefObject } from 'react';

export const useObserver = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const observer = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (ref.current) {
      observer.current = new ResizeObserver(callback);
      observer.current.observe(ref.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref, callback]);
}