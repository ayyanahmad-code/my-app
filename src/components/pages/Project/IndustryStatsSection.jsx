import React from 'react';
import { motion } from 'framer-motion';

const IndustryStatsSection = () => {
  const industryStats = [
    { icon: '🚂', label: 'Rolling Stock Projects', value: '85+' },
    { icon: '⚡', label: 'Power Systems Projects', value: '95+' },
    { icon: '🏗️', label: 'Heavy Machinery Projects', value: '150+' },
    { icon: '📱', label: 'Consumer Goods Projects', value: '75+' }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6
      }
    }
  };

  const valueVariants = {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {industryStats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="text-3xl mb-2"
                variants={iconVariants}
                whileHover="hover"
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                className="text-2xl font-bold text-primary-600 mb-1"
                variants={valueVariants}
              >
                {stat.value}
              </motion.div>
              
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryStatsSection;