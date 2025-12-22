import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, BarChart3, Mail } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const QuickLinksSection = () => {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link to="/services">
              <Button 
                variant="ghost"
                icon={<Cpu size={16} />}
                className="text-primary-600 hover:text-primary-700"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link to="/projects">
              <Button 
                variant="ghost"
                icon={<BarChart3 size={16} />}
                className="text-primary-600 hover:text-primary-700"
              >
                Our Projects
              </Button>
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link to="/contact">
              <Button 
                variant="ghost"
                icon={<Mail size={16} />}
                className="text-primary-600 hover:text-primary-700"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuickLinksSection;