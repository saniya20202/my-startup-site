import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiCode, HiDeviceMobile, HiColorSwatch, HiCloud, 
  HiChartBar, HiShieldCheck 
} from 'react-icons/hi';
import FadeIn from '../animations/FadeIn';
import Card from '../layout/Card';

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and scalability.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: HiColorSwatch,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user-centered principles and modern aesthetics.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: HiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps services for reliable, high-performance systems.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: HiChartBar,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: HiShieldCheck,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    color: 'from-red-500 to-pink-500',
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <FadeIn delay={index * 0.1}>
      <Card className="p-6 h-full" glow>
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} 
                         flex items-center justify-center mb-5 shadow-lg`}>
          <service.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {service.description}
        </p>
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-4 inline-flex items-center gap-2 text-accent-purple font-medium text-sm"
        >
          Learn more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </Card>
    </FadeIn>
  );
};

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-dark-200" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-accent-purple/10 text-accent-purple mb-4">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Solutions that <span className="gradient-text">Drive Results</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer comprehensive digital services to help your business thrive in the modern landscape.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;