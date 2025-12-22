import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const MoreProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 10,
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
      className="py-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p 
          className="text-gray-600 mb-4"
          variants={textVariants}
        >
          Looking for more?
        </motion.p>
        
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link to="/services">
            <Button 
              variant="ghost"
              icon={<ChevronRight size={16} />}
              iconPosition="right"
              className="text-primary-600 hover:text-primary-700"
            >
              Explore Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MoreProjectsSection;