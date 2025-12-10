import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import FadeIn from '../animations/FadeIn';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed', description: 'Successfully delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients', description: 'Worldwide' },
  { value: 15, suffix: '+', label: 'Team Experts', description: 'Industry veterans' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', description: 'And growing' },
];

const AnimatedNumber = ({ value, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, value, { duration: 2, ease: 'easeOut' });
      return animation.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      <div className="absolute inset-0 bg-white/80 dark:bg-dark-300/80 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl glass-card"
              >
                <div className="font-display font-bold text-5xl md:text-6xl gradient-text mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;