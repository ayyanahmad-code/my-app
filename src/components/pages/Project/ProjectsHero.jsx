import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Mail, ChevronRight, Cpu, Settings, Layers, Grid3x3 } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';
import Image from "../../../Images/image2.avif";

const ProjectsHero = () => {
  // Adjusted animation variants for better flow
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const backgroundOverlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const patternVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.08,
      transition: {
        duration: 1,
        delay: 0.3
      }
    }
  };

  // Simplified floating animation
  const floatingIconVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.06,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.4
      }
    },
    bounce: {
      y: [0, 8, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img 
          src={Image} 
          alt="Engineering Projects Portfolio - APMS Engineering"
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Dark Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/70"
          variants={backgroundOverlayVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
      
      {/* Optional: Engineering Pattern Overlay */}
      <motion.div 
        className="absolute inset-0"
        variants={patternVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
      </motion.div>
      
      {/* Floating Engineering Elements */}
      <motion.div 
        className="absolute top-1/4 left-5 md:left-10"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
      >
        <Cpu size={50} />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-5 md:right-10"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
        transition={{ delay: 0.2 }}
      >
        <Settings size={50} />
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
        transition={{ delay: 0.4 }}
      >
        <Layers size={50} />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/3 left-1/4"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
        transition={{ delay: 0.6 }}
      >
        <Grid3x3 size={50} />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            variants={badgeVariants}
          >
            <BarChart3 size={16} />
            <span className="text-sm font-semibold">OUR PORTFOLIO</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Engineering Projects
            <motion.span 
              className="block text-blue-400 mt-2"
              variants={taglineVariants}
            >
              That Define Excellence
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            variants={itemVariants}
          >
            Explore our successful engineering projects across various industries, 
            showcasing our expertise and innovative solutions.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/contact">
                <Button 
                  variant="gradient"
                  size="lg"
                  icon={<Mail size={20} />}
                  className="btn-gradient btn-icon"
                >
                  Discuss Your Project
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a href="#projects-grid">
                <Button 
                  variant="secondary"
                  size="lg"
                  icon={<ChevronRight size={20} />}
                  iconPosition="right"
                  className="btn-secondary btn-icon border-white text-white hover:bg-white/10"
                >
                  View Projects
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
        </motion.div>
      </div>

      {/* Subtle Background Icons Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-3 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex flex-wrap justify-center items-center h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i} 
              className="mx-3 my-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
            >
              {i % 4 === 0 && <Cpu size={20} />}
              {i % 4 === 1 && <Settings size={20} />}
              {i % 4 === 2 && <Layers size={20} />}
              {i % 4 === 3 && <Grid3x3 size={20} />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsHero;