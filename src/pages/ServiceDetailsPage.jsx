// src/pages/ServiceDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData, getRelatedServices } from '../data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';
import CTA from '../components/sections/CTA';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { 
  ArrowLeft, 
  CheckCircle, 
  Zap, 
  Code2, 
  ShieldCheck,
  ArrowRight,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Award,
  Sparkles,
  Play,
  ExternalLink
} from 'lucide-react';
import ParticleBackground from '../components/ui/ParticleBackground';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const service = servicesData.find((s) => s.slug === slug);
  const relatedServices = service?.relatedServices 
    ? getRelatedServices(service.relatedServices) 
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageLoaded(false);
  }, [slug]);

  // ============================================
  // ERROR STATE
  // ============================================
  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <ParticleBackground />
        </div>
        
        <div className="container-custom relative text-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-500/20 flex items-center justify-center"
          >
            <span className="text-6xl">🔍</span>
          </motion.div>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">Service Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The service you're looking for doesn't exist or may have been moved.
          </p>
          <Button onClick={() => navigate('/services')} variant="primary" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </section>
    );
  }

  // Parse title for styling
  const titleWords = service.title.split(' ');
  const firstWord = titleWords[0];
  const remainingWords = titleWords.slice(1).join(' ');
  const Icon = service.icon;

  // ============================================
  // MAIN CONTENT
  // ============================================
  return (
    <>
      <div className="relative min-h-screen bg-dark-950 text-white selection:bg-primary-500/30">
        
        {/* ============================================ */}
        {/* DYNAMIC BACKGROUND */}
        {/* ============================================ */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-dark-950" />
          <div className="absolute inset-0 opacity-30">
            <ParticleBackground />
          </div>
          {/* Dynamic gradient based on service color */}
          <div className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-[150px]`} />
          <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-[150px]`} />
        </div>

        {/* ============================================ */}
        {/* CONTENT */}
        {/* ============================================ */}
        <div className="relative z-10">
          
          {/* ============================================ */}
          {/* HERO SECTION */}
          {/* ============================================ */}
          <section className="pt-32 pb-20">
            <div className="container-custom">
              
              {/* Back Button */}
              <FadeIn>
                <button 
                  onClick={() => navigate('/services')}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-12"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500 transition-all border border-white/10 group-hover:border-primary-500">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Back to services</span>
                </button>
              </FadeIn>

              {/* Hero Grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Left - Content */}
                <FadeIn delay={0.1}>
                  <div className="space-y-8">
                    {/* Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-3"
                    >
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-white text-sm font-semibold`}>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                        </span>
                        Available Now
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.timeline}
                      </span>
                    </motion.div>
                    
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1]">
                      {firstWord}{' '}
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                        {remainingWords}
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                      {service.longDescription}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {service.stats?.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                        >
                          <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button 
                        as={Link}
                        to="/contact" 
                        variant="primary" 
                        size="lg" 
                        className={`shadow-lg shadow-primary-500/25 bg-gradient-to-r ${service.gradient}`}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                      <Button variant="outline" size="lg">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    </div>

                    {/* Pricing Hint */}
                    {service.pricing && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        Starting from ${service.pricing.starting.toLocaleString()} {service.pricing.currency}
                        <span className="text-gray-600">•</span>
                        <span>{service.pricing.note}</span>
                      </div>
                    )}
                  </div>
                </FadeIn>

                {/* Right - Hero Image */}
                <FadeIn delay={0.2}>
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-20 blur-3xl transform rotate-6 scale-105`} />
                    
                    {/* Main Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                      {/* Loading Skeleton */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-800 via-dark-700 to-dark-800 animate-pulse" />
                      )}
                      
                      <img 
                        src={service.heroImage}
                        alt={service.title}
                        onLoad={() => setImageLoaded(true)}
                        className={`w-full h-[400px] lg:h-[500px] object-cover transition-opacity duration-500 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />

                      {/* Floating Icon */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}
                      >
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </motion.div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-white/10 rounded-2xl" />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-white/10 rounded-full" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* FEATURES SECTION */}
          {/* ============================================ */}
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-white/[0.02]" />
            <div className="container-custom relative">
              <FadeIn>
                <div className="text-center mb-16">
                  <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-sm font-semibold mb-4`}>
                    Features
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                    What's <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Included</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Comprehensive solutions tailored to your needs
                  </p>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.features.map((feature, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all group overflow-hidden"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}>
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-white text-lg group-hover:text-primary-400 transition-colors">
                          {feature}
                        </h3>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* PROCESS SECTION */}
          {/* ============================================ */}
          {service.process && (
            <section className="py-20">
              <div className="container-custom">
                <FadeIn>
                  <div className="text-center mb-16">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-sm font-semibold mb-4`}>
                      Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      How We <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      A proven methodology that delivers results
                    </p>
                  </div>
                </FadeIn>

                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
                  
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {service.process.map((step, index) => (
                      <FadeIn key={index} delay={index * 0.1}>
                        <motion.div
                          whileHover={{ y: -10 }}
                          className="relative text-center"
                        >
                          {/* Step Number */}
                          <div className="relative z-10 mx-auto mb-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl shadow-xl mx-auto`}>
                              {step.icon}
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-dark-900 border-2 border-white/20 flex items-center justify-center text-sm font-bold">
                              {step.step}
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                          <p className="text-gray-400 text-sm">{step.description}</p>
                        </motion.div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* TECH STACK SECTION */}
          {/* ============================================ */}
          {service.techStack && (
            <section className="py-20 relative">
              <div className="absolute inset-0 bg-white/[0.02]" />
              <div className="container-custom relative">
                <FadeIn>
                  <div className="text-center mb-12">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-sm font-semibold mb-4`}>
                      Technology
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      Tools & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Technologies</span>
                    </h2>
                  </div>
                </FadeIn>

                <div className="flex flex-wrap justify-center gap-4">
                  {service.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:border-primary-500/50 hover:text-white transition-all cursor-default`}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* FAQ SECTION */}
          {/* ============================================ */}
          {service.faqs && (
            <section className="py-20">
              <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  {/* Left - Title */}
                  <FadeIn>
                    <div className="lg:sticky lg:top-32">
                      <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-sm font-semibold mb-4`}>
                        FAQ
                      </span>
                      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Frequently Asked{' '}
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Questions</span>
                      </h2>
                      <p className="text-gray-400 mb-8">
                        Everything you need to know about our {service.title.toLowerCase()} service.
                      </p>
                      <Button as={Link} to="/contact" variant="outline" size="lg">
                        Have more questions?
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </FadeIn>

                  {/* Right - Accordions */}
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <FadeIn key={index} delay={index * 0.1}>
                        <motion.div
                          className={`rounded-2xl border overflow-hidden transition-all ${
                            activeAccordion === index 
                              ? 'bg-white/5 border-primary-500/50' 
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <button
                            onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className="font-semibold text-white pr-4">{faq.question}</span>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                              activeAccordion === index ? `bg-gradient-to-r ${service.gradient}` : 'bg-white/10'
                            }`}>
                              {activeAccordion === index ? (
                                <ChevronUp className="w-4 h-4 text-white" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {activeAccordion === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6 text-gray-400">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* RELATED SERVICES */}
          {/* ============================================ */}
          {relatedServices.length > 0 && (
            <section className="py-20 relative">
              <div className="absolute inset-0 bg-white/[0.02]" />
              <div className="container-custom relative">
                <FadeIn>
                  <div className="text-center mb-12">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-sm font-semibold mb-4`}>
                      Explore More
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      Related <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Services</span>
                    </h2>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                  {relatedServices.map((related, index) => {
                    const RelatedIcon = related.icon;
                    return (
                      <FadeIn key={related.slug} delay={index * 0.1}>
                        <Link to={`/services/${related.slug}`}>
                          <motion.div
                            whileHover={{ y: -10 }}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all overflow-hidden"
                          >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${related.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            
                            <div className="relative">
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${related.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}>
                                {RelatedIcon && <RelatedIcon className="w-7 h-7" />}
                              </div>
                              <h3 className="font-bold text-white text-xl mb-2 group-hover:text-primary-400 transition-colors">
                                {related.title}
                              </h3>
                              <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                {related.description}
                              </p>
                              <div className="flex items-center text-sm font-medium text-primary-400 group-hover:text-primary-300">
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* WHY CHOOSE US */}
          {/* ============================================ */}
          <section className="py-20">
            <div className="container-custom">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-white/10 text-sm font-semibold mb-4`}>
                    Why CoreX
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold">
                    Why Choose <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Us</span>
                  </h2>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Zap, title: 'Fast Delivery', desc: 'Rapid development without compromising quality', color: 'blue' },
                  { icon: Code2, title: 'Clean Code', desc: 'Scalable, maintainable architecture', color: 'purple' },
                  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Built-in security best practices', color: 'green' },
                  { icon: Users, title: '24/7 Support', desc: 'Always here when you need us', color: 'orange' },
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <GlassCard className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all text-center group">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 mx-auto rounded-2xl bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center mb-4`}
                      >
                        <item.icon className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </GlassCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default ServiceDetailsPage;