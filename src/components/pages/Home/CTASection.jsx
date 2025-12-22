import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../buttons/Button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
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

  const phoneVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="py-6 mt-3 section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto container-padding text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Transform Your Engineering Projects?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-8"
            variants={itemVariants}
          >
            Partner with APMS for expert engineering solutions that deliver results.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/contact">
              <Button 
                variant="gradient"
                size="lg"
                icon={<Mail size={20} />}
                className="btn-white btn-icon"
              >
                Get Free Consultation
              </Button>
            </Link>
            
            <Link to="/projects">
              <Button 
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="btn-secondary btn-icon border-white text-white hover:bg-white/10"
              >
                View Our Projects
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-6 pt-4 border-t border-white/20"
            variants={phoneVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <p className="text-white/70 mb-2">Or call us directly</p>
            <a 
              href="tel:+917987074614" 
              className="text-2xl font-bold hover:text-white transition-colors inline-flex items-center"
            >
              <Phone size={24} className="mr-3" />
              +91-7987074614
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;