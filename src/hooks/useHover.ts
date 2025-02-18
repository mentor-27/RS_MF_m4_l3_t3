import { useCallback, useEffect, useRef, useState } from 'react';
import { IUseHover } from '../types';

export const useHover = (): IUseHover => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const enter = useCallback(() => setHovered(true), []);
  const leave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    ref.current?.addEventListener('mouseenter', enter);
    ref.current?.addEventListener('mouseout', leave);

    return () => {
      ref.current?.removeEventListener('mouseover', enter);
      ref.current?.removeEventListener('mouseout', leave);
    };
  }, []);

  return {
    hovered,
    ref,
  };
};
