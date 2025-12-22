import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Users } from 'lucide-react';

const KeyBenefitsSection = () => {
  const benefits = [
    {
      title: 'Structured Process',
      description: 'Clear milestones and defined deliverables ensure project success',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality Focus',
      description: 'Multiple validation points guarantee engineering excellence',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Client Collaboration',
      description: 'Regular milestone meetings keep clients involved and informed',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 15,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4"
              variants={badgeVariants}
            >
              <Shield size={16} />
              <span className="text-sm font-semibold uppercase tracking-wider">WHY IT WORKS</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              The APMS Advantage
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Our systematic approach delivers consistent results
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  whileHover="hover"
                >
                  <motion.div 
                    className={` bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;