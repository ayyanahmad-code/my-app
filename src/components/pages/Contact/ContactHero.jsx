import React from 'react';
import { MessageSquare, Send, Phone } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';
import Image from "../../../Images/logo-1.avif";

const ContactHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const backgroundPatternVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.15,
      transition: {
        duration: 1.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      className="section-padding relative text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Professional Contact Background */}
      <div className="absolute inset-0">
        <img 
          src={Image}
          alt="Engineering Consultation and Project Discussion"
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay for Professional Look */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-900/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      
      {/* Connection Pattern */}
      <motion.div 
        className="absolute inset-0"
        variants={backgroundPatternVariants}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
      </motion.div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            variants={badgeVariants}
          >
            <MessageSquare size={16} />
            <span>CONNECT WITH OUR TEAM</span>
          </motion.div>
          
          <motion.h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Start Your Engineering Journey
            <motion.span 
              className="block text-blue-400 mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Expert Solutions Await
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-3xl"
            variants={itemVariants}
          >
            Share your vision with our engineering experts. Let's collaborate to transform 
            your concepts into innovative, reliable solutions that drive success.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a href="#contact-form">
                <Button 
                  variant="gradient"
                  size="lg"
                  icon={<Send size={20} />}
                  className="btn-gradient btn-icon shadow-lg"
                >
                  Send Project Details
                </Button>
              </a>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a href="tel:+917987074614">
                <Button 
                  variant="white"
                  size="lg"
                  icon={<Phone size={20} />}
                  className="btn-white btn-icon shadow-lg"
                >
                  Schedule a Call
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactHero;