// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Loader3D from './components/ui/Loader3D';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/about" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/services" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/portfolio" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <PortfolioPage />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/pricing" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <PricingPage />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="*" element={
          <PageWrapper>
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

// Mini loader for page transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-950">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full"
    />
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate realistic loading with progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    // Minimum loading time for animation to complete
    const minLoadingTime = setTimeout(() => {
      setLoadingProgress(100);
    }, 3000);

    // Actual loading complete
    const loadingComplete = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minLoadingTime);
      clearTimeout(loadingComplete);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader3D 
              key="loader"
              companyName="COREX "      // 👈 ඔයාගේ company name දාන්න
              tagline="INNOVATIONS"     // 👈 ඔයාගේ tagline දාන්න
            />
          ) : (
            <motion.div
              key="main-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Layout>
                <AnimatedRoutes />
              </Layout>
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};

export default App;