import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const QuickContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
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

  return (
    <motion.section 
      className="py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-secondary-800 mb-2">Need Immediate Assistance?</h3>
            <p className="text-gray-600">Our team is ready to help you.</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a href="tel:+917987074614">
                <Button 
                  variant="primary"
                  size="md"
                  icon={<Phone size={18} />}
                  className="btn-primary btn-icon"
                >
                  Call Now
                </Button>
              </a>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <a href="mailto:support@apmsengineering.com">
                <Button 
                  variant="secondary"
                  size="md"
                  icon={<Mail size={18} />}
                  className="btn-secondary btn-icon"
                >
                  Email Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuickContactSection;