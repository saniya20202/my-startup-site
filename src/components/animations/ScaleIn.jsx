import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ScaleIn = ({ 
  children, 
  delay = 0, 
  className = '',
  hover = true 
}) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      whileHover={hover ? { scale: 1.05 } : {}}
      whileTap={hover ? { scale: 0.95 } : {}}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;