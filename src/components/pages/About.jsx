// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Settings, Mail, ArrowRight, 
  Shield, Phone, CheckCircle, Users, BarChart3, Cpu,
  Target, Zap, Wrench
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../buttons/Button';
import CompanyOverview from './About/CompanyOverview';
import ValuesSection from './About/ValuesSection';
import TimelineSection from './About/TimelineSection';
import TeamSection from './About/TeamSection';
import AboutCTASection from './About/AboutCTASection';
import QuickLinksSection from './About/QuickLinksSection';
import Image from "../../Images/image3.avif";
const About = () => {
  const teamStats = [
    {
      icon: <Users size={32} />,
      value: '50+',
      label: 'Engineering Experts',
      description: 'Highly experienced Mechanical Engineers'
    },
    {
      icon: <Award size={32} />,
      value: '10+',
      label: 'Years Experience',
      description: 'Working with leading OEMs'
    },
    {
      icon: <Phone size={32} />,
      value: '24/7',
      label: 'Support',
      description: 'Dedicated project lifecycle support'
    },
    {
      icon: <Cpu size={32} />,
      value: '500+',
      label: 'Projects',
      description: 'Successfully completed'
    }
  ];

  // Animation variants matching the same style
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

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            src={Image}
            alt="APMS Engineering - About Our Company and Mission"
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
          <Award size={50} />
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
          <Target size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.6 }}
        >
          <Shield size={50} />
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
              <Award size={16} />
              <span className="text-sm font-semibold">ABOUT APMS</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              About APMS Engineering
              <motion.span 
                className="block text-blue-400 mt-2"
                variants={taglineVariants}
              >
                "WE MAKE IT HAPPEN"
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              variants={itemVariants}
            >
              For over a decade, APMS Engineering has been a trusted technology partner 
              delivering exceptional engineering solutions to manufacturing industries worldwide.
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
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/services">
                  <Button 
                    variant="secondary"
                    size="lg"
                    icon={<ArrowRight size={20} />}
                    iconPosition="right"
                    className="btn-secondary btn-icon border-white text-white hover:bg-white/10"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
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
                {i % 3 === 0 && <Award size={20} />}
                {i % 3 === 1 && <Settings size={20} />}
                {i % 3 === 2 && <CheckCircle size={20} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamStats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statsItemVariants}
                whileHover="hover"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <motion.div 
                  className="text-primary-600 mb-3 flex justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-secondary-800 mb-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-bold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <CompanyOverview />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <AboutCTASection />

      {/* Quick Links */}
      <QuickLinksSection />
      
      <hr/>
    </div>
  );
};

export default About;