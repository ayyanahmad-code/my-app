// App.jsx (simplified version)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Services from './components/pages/Services/Services';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MechanicalAnalysis from './components/pages/Services/MechanicalAnalysis';
import AssemblyModeling from './components/pages/Services/AssemblyModeling';
import ProductDesign from './components/pages/Services/ProductDesign';
import ReverseEngineering from './components/pages/Services/ReverseEngineering';
import Jigs from './components/pages/Services/Jigs';
import CAD from './components/pages/Services/CAD';
import WorkMethodology from './components/pages/WorkMethodology';
// Ultra-fast animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
};

const childVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  }
};

// Optimized wrapper component for animated pages
const AnimatedPage = ({ children }) => {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ willChange: 'transform, opacity' }}
      className="min-h-screen"
    >
      <motion.div variants={childVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

// AnimatedRoutes component with optimized transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          } />
          <Route path="services" element={
            <AnimatedPage>
              <Services />
            </AnimatedPage>
          } />
          <Route path="projects" element={
            <AnimatedPage>
              <Projects />
            </AnimatedPage>
          } />
          <Route path="about" element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          } />
          <Route path="contact" element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          } />
          <Route path="services/mechanical-analysis" element={
            <AnimatedPage>
              <MechanicalAnalysis />
            </AnimatedPage>
          } />
          <Route path="services/assembly-modeling" element={
            <AnimatedPage>
              <AssemblyModeling />
            </AnimatedPage>
          } />
          <Route path="services/product-design" element={
            <AnimatedPage>
              <ProductDesign />
            </AnimatedPage>
          } />
          <Route path="services/reverse-engineering" element={
            <AnimatedPage>
              <ReverseEngineering />
            </AnimatedPage>
          } />
          <Route path="services/jigs" element={
            <AnimatedPage>
              <Jigs />
            </AnimatedPage>
          } />
          <Route path="services/CAD" element={
            <AnimatedPage>
              <CAD />
            </AnimatedPage>
          } />
          <Route path="Work" element={
            <AnimatedPage>
              <WorkMethodology />
            </AnimatedPage>
          } />
        </Route>
        {/* Remove the incorrect Services route */}
      </Routes>
    </AnimatePresence>
  );
};

// Main App component with performance optimization
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;