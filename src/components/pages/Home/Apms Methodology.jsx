import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Methodologies = () => {
  const methodologies = [
    { step: '01', title: 'Requirement Gathering', desc: 'Understanding client needs' },
    { step: '02', title: 'Mathematical Modeling', desc: 'Creating accurate models' },
    { step: '03', title: 'Analysis & Design', desc: 'FEA, CFD, structural analysis' },
    { step: '04', title: 'Design Review', desc: 'Client review and feedback' },
    { step: '05', title: 'Manufacturing Support', desc: 'Implementation support' }
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
      y: -8,
      transition: {
        duration: 0.3
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
    <section className="py-20 section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.div 
            className="badge badge-primary mb-4 gap-2"
            variants={badgeVariants}
          >
            <FileText size={16} />
            <span>OUR METHODOLOGY</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 mb-4">
            APMS Work Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Systematic approach ensuring quality at every stage of project execution
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {methodologies.map((method, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="card text-center min-h-[180px] lg:min-h-[200px] flex flex-col justify-center">
                  <motion.div 
                    className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1 * index
                    }}
                  >
                    {method.step}
                  </motion.div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {method.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodologies;