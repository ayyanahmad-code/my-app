import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const IndustriesWeServe = () => {
  const industries = [
    { name: 'Traction Propulsion Systems', icon: '🚂', count: 120 },
    { name: 'Rolling Stock', icon: '🚃', count: 85 },
    { name: 'Heavy Engineering', icon: '🏗️', count: 150 },
    { name: 'Industrial Engineering', icon: '⚙️', count: 95 },
    { name: 'Power & Energy', icon: '⚡', count: 75 },
    { name: 'Precast', icon: '🗃️', count: 110 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
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
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
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
    <section className="py-10  section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.div 
            className="badge badge-primary mb-4"
            variants={badgeVariants}
          >
            <Globe size={16} />
            <span>INDUSTRIES WE SERVE</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Industrial Sectors We Cover
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Extending our services to diverse manufacturing industries with specialized solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="card text-center hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer group"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="text-3xl mb-4 opacity-80 group-hover:opacity-100"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {industry.icon}
              </motion.div>
              <h4 className="font-bold text-gray-800 group-hover:text-white mb-2">
                {industry.name}
              </h4>
              <p className="text-sm text-gray-500 group-hover:text-white/80">
                {industry.count}+ Projects
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;