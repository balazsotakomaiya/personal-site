'use client';

import { motion } from 'motion/react';
import useMousePosition from '../../hooks/useMousePosition';

export const CursorCircle = () => {
  const mousePosition = useMousePosition();

  if (mousePosition.x === null || mousePosition.y === null) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-[12px] h-[12px] rounded-full pointer-events-none z-50 bg-custom-cream"
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
      }}
      transition={{
        type: "spring",
        mass: 1.2,
        stiffness: 400,
        damping: 80,
      }}
    />
  );
};