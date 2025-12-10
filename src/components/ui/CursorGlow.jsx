// src/components/ui/CursorGlow.jsx
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation configuration
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Dot එකේ සයිස් එක w-4 (16px) නිසා මැදට ගන්න 8ක් අඩු කරනවා
      // කලින් තිබ්බ 125 අයින් කරලා 8 දැම්මා
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <motion.div
      // w-4 h-4 (16px) දැම්මා. bg-sky-500 වගේ පාටක් දුන්නා dot එක පේන්න.
      // z-50 දැම්මා අනිත් ඒවට උඩින් පේන්න ඕන නිසා.
      className="fixed top-0 left-0 w-4 h-4 bg-sky-500 rounded-full pointer-events-none z-50 hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        // Gradient සහ Blur එක අයින් කළා dot එකක් නිසා
      }}
    />
  );
};

export default CursorGlow;