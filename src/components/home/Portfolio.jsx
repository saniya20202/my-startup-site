import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import Card from '../layout/Card';
import Button from '../layout/Button';

const categories = ['All', 'Web Apps', 'Mobile', 'UI/UX', 'E-Commerce'];

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    description: 'Advanced financial analytics platform',
    tags: ['React', 'Node.js', 'D3.js'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800',
    description: 'Personal wellness tracking application',
    tags: ['React Native', 'Firebase'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    description: 'Modern shopping experience',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    description: 'Clean and intuitive admin interface',
    tags: ['Figma', 'Framer'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'Social Media App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    description: 'Connect and share with friends',
    tags: ['Flutter', 'GraphQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: 'Travel Booking',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    description: 'Seamless travel planning experience',
    tags: ['Vue.js', 'Python', 'AWS'],
    color: 'from-red-500 to-pink-500',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden group cursor-pointer" hover>
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 
                       group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 rounded-full bg-white text-gray-900 font-medium"
            >
              View Project
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
                           bg-gradient-to-r ${project.color} text-white mb-3`}>
            {project.category}
          </span>
          <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-dark-100 
                           text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-accent-purple/10 text-accent-purple mb-4">
              Our Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our latest work and see how we've helped businesses succeed.
            </p>
          </FadeIn>
        </div>

        {/* Category Filter */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Button to="/portfolio" variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;