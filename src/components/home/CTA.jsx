import React from 'react';
import { motion } from 'framer-motion';
import Button from '../layout/Button';
import FadeIn from '../animations/FadeIn';
import { HiArrowRight } from 'react-icons/hi';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Ready to Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">
                Extraordinary?
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that will take your business to the next level.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100"
                size="lg"
                icon={<HiArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                