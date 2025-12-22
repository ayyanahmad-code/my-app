import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../buttons/Button';
import { 
  ArrowRight, Cpu, Layers, Settings, 
  Grid3x3, TrendingUp, Database, Users, Phone,
  Target, Zap, Shield, Award, Wrench, RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "../../../Images/Home-2.avif"

const Hero = () => {
  const features = [
    {
      icon: <TrendingUp size={28} />,
      title: '10+ Years Experience',
      description: 'Working with leading OEMs across various industries',
      stats: '10+ Years'
    },
    {
      icon: <Database size={28} />,
      title: '500+ Projects',
      description: 'Successfully delivered complex engineering projects',
      stats: '500+'
    },
    {
      icon: <Users size={28} />,
      title: 'Expert Team',
      description: 'Highly experienced Mechanical Engineers & Technocrats',
      stats: '50+'
    },
  ];

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
        duration: 0.1,
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
        duration: 0.1,
        ease: "easeIn"
      }
    }
  };

  const patternVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.08,
      transition: {
        duration: 0.1,
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
        duration: 0.1,
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

  const statsCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 250,
        damping: 20
      }
    },
    hover: {
      y: -6,
      scale: 1.03,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transition: {
        duration: 0.2,
        ease: "easeInOut"
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

  const pulseDotVariants = {
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotatingIconVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
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
    <section className="relative text-white pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img 
          src= {Image}
          alt="APMS Engineering - Mechanical Design and Analysis Services"
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
      
      {/* Optional: Grid Pattern Overlay */}
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
        <Target size={50} />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-5 md:right-10"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
        transition={{ delay: 0.2 }}
      >
        <Wrench size={50} />
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
        transition={{ delay: 0.4 }}
      >
        <Shield size={50} />
      </motion.div>
      <motion.div 
        className="absolute bottom-1/3 left-1/4"
        variants={floatingIconVariants}
        initial="hidden"
        animate={["visible", "float"]}
        transition={{ delay: 0.6 }}
      >
        <Award size={50} />
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
            <Zap size={16} />
            <span className="text-sm font-semibold">INNOVATIVE ENGINEERING SOLUTIONS</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            APMS Engineering
            <motion.span 
              className="block text-blue-400 mt-2"
              variants={taglineVariants}
            >
              "WE MAKE IT HAPPEN"
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-3xl"
            variants={itemVariants}
          >
            Engineering Services in Product Designing and Analysis for manufacturing industries. 
            With 10+ years of experience serving as a trusted technology partner.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/services">
                <Button 
                  variant="gradient"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="btn-gradient btn-icon"
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/contact">
                <Button 
                  variant="secondary"
                  size="lg"
                  icon={<Phone size={20} />}
                  className="btn-secondary btn-icon border-white text-white hover:bg-white/10"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={statsCardVariants}
                whileHover="hover"
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <motion.div 
                  className="w-3 h-3 bg-red-500 rounded-full"
                  variants={pulseDotVariants}
                  animate="pulse"
                />
                <div>
                  <div className="text-xl font-bold text-white">{feature.stats}</div>
                  <div className="text-sm text-gray-300">{feature.title}</div>
                </div>
              </motion.div>
            ))}
            
            {/* Additional stat */}
            <motion.div 
              variants={statsCardVariants}
              whileHover="hover"
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-4"
            >
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                variants={rotatingIconVariants}
                animate="rotate"
              />
              <div>
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Icons Pattern - Simplified */}
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

export default Hero;