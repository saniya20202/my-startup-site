import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import AnimatedText from '../animations/AnimatedText';
import HeroScene from '../3d/HeroScene';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 
                      dark:from-dark-300 dark:via-dark-200 dark:to-dark-300" />
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 -left-40 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 -right-40 w-96 h-96 bg-accent-pink/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[800px] h-[800px] bg-accent-cyan/20 rounded-full blur-3xl"
        />
      </div>

      {/* 3D Scene */}
      <HeroScene className="opacity-60 dark:opacity-40" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Now accepting new projects for 2024
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 
                         text-gray-900 dark:text-white leading-tight">
            <AnimatedText 
              text="Building the" 
              className="justify-center"
            />
            <span className="gradient-text">
              <AnimatedText 
                text="Future of Software" 
                className="justify-center"
                delay={0.3}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            We craft innovative digital solutions that transform businesses, 
            delight users, and drive measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              to="/contact" 
              variant="primary" 
              size="lg"
              icon={<HiArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              icon={<HiPlay className="w-5 h-5" />}
              iconPosition="left"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-white/10"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 
                     flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent-purple"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;