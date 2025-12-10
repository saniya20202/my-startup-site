// src/components/ui/Loader3DSimple.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader3DSimple = ({ companyName = "COREX ", tagline = "INNOVATIONS" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev >= 100 ? 100 : prev + 1);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%)'
      }}
    >
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}
      />

      {/* 3D Rotating Cube */}
      <div className="absolute" style={{ perspective: '1000px' }}>
        <motion.div
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="relative w-40 h-40"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cube Faces */}
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, i) => {
            const transforms = {
              front: 'translateZ(70px)',
              back: 'translateZ(-70px) rotateY(180deg)',
              right: 'translateX(70px) rotateY(90deg)',
              left: 'translateX(-70px) rotateY(-90deg)',
              top: 'translateY(-70px) rotateX(90deg)',
              bottom: 'translateY(70px) rotateX(-90deg)'
            };
            return (
              <div
                key={face}
                className="absolute w-40 h-40 border border-primary-500/30 bg-primary-500/5 backdrop-blur-sm"
                style={{ transform: transforms[face] }}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ['#6366f1', '#a855f7', '#22d3ee', '#f472b6', '#34d399', '#fbbf24'][i]
            }40, transparent)`,
            filter: 'blur(20px)'
          }}
          animate={{
            x: [0, Math.cos(i) * 200, 0],
            y: [0, Math.sin(i) * 200, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* 3D Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2"
              style={{
                width: 200 + i * 60,
                height: 200 + i * 60,
                borderColor: `rgba(99, 102, 241, ${0.5 - i * 0.15})`,
                transformStyle: 'preserve-3d'
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <h1
            className="text-6xl md:text-8xl font-black tracking-wider mb-4"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 60px rgba(99,102,241,0.5)'
            }}
          >
            {companyName.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-400 tracking-[0.3em] text-sm"
          >
            {tagline}
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-16 w-64 mx-auto"
        >
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)'
              }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 font-mono">{progress}%</p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </motion.div>
  );
};

export default Loader3DSimple;