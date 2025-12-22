import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Cpu, BarChart3, Mail } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const QuickLinksSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
      scale: 1.05,
      transition: {
        duration: 0.2,
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

  const iconVariants = {
    hover: {
      rotate: 15,
      scale: 1.2,
      transition: {
        duration: 0.3
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
          {[
            { to: "/about", icon: <Award size={16} />, text: "About APMS" },
            { to: "/services", icon: <Cpu size={16} />, text: "Our Services" },
            { to: "/projects", icon: <BarChart3 size={16} />, text: "Our Projects" },
            { to: "/contact", icon: <Mail size={16} />, text: "Get in Touch" }
          ].map((link, index) => (
            <motion.div
              key={index}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to={link.to}>
                <Button 
                  variant="ghost"
                  icon={link.icon}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {link.text}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default QuickLinksSection;