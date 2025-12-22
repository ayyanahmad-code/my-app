import React from 'react';
import { motion } from 'framer-motion';

const TrackRecordSection = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statValueVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const statCardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-secondary-800 mb-4"
            variants={textVariants}
          >
            Our Track Record
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={textVariants}
          >
            10+ years of delivering successful engineering projects across industries
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '50+', label: 'Clients Worldwide' },
            { value: '10+', label: 'Years Experience' },
            { value: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <motion.div 
                className="text-5xl font-bold text-primary-600 mb-3"
                variants={statValueVariants}
                whileHover="hover"
              >
                {stat.value}
              </motion.div>
              
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrackRecordSection;