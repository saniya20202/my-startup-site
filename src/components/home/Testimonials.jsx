import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import FadeIn from '../animations/FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'TechNova transformed our business with their innovative solutions. The team\'s expertise and dedication exceeded all our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, DataFlow',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Working with TechNova was a game-changer. They delivered a world-class product that has significantly improved our operations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Founder, HealthHub',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    content: 'The mobile app they built for us is simply outstanding. Our users love it, and it\'s helped us grow our business exponentially.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-dark-200" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-accent-purple/10 text-accent-purple mb-4">
              Testimonials
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </FadeIn>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 md:p-12 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <HiStar key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-accent-purple/20"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center
                           text-gray-600 dark:text-gray-400 hover:text-accent-purple"
              >
                <HiChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full glass flex items-center justify-center
                           text-gray-600 dark:text-gray-400 hover:text-accent-purple"
              >
                <HiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-accent-purple'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;