import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-dark-300 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-20 h-20 rounded-2xl animated-gradient flex items-center justify-center"
        >
          <span className="text-white font-bold text-3xl">T</span>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-pink blur-xl opacity-50 animate-pulse" />

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;