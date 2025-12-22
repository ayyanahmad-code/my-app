import React from 'react';
import { Star, CheckCircle, TrendingUp, Database, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseApms = () => {
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

  const points = [
    'Handled complicated FEA, FMEA and CFD analysis',
    'Engineering Teams with High Experience & Domain Expertise',
    'Collaborative infrastructure for superior time and cost savings',
    'Proficient in state-of-the-art engineering technologies'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
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
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-2 section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="badge badge-primary mb-4"
              variants={badgeVariants}
            >
              <Star size={16} />
              <span>WHY APMS</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Our Core Philosophy
            </motion.h2>
            <motion.p 
              className="text-2xl font-bold text-blue-600 mb-6 italic"
              variants={itemVariants}
            >
              "FOR YOU, WITH YOU ALWAYS"
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={itemVariants}
            >
              This philosophy communicates our belief in providing Quality services and 
              specific attention for our customers and employees. Our team comprises 
              seasoned technocrats with rich experience from Core Manufacturing and 
              Software Engineering.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {points.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  variants={checkItemVariants}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="card bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center"
                variants={statCardVariants}
                whileHover="hover"
              >
                <div className="text-4xl font-bold mb-2">{feature.stats}</div>
                <div className="text-sm text-gray-300">{feature.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseApms;