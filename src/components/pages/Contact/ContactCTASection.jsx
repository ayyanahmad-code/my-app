import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const ContactCTASection = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="py-10 section-padding bg-gradient-to-r from-primary-600 to-accent-500 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto container-padding">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            variants={badgeVariants}
          >
            <Phone size={16} />
            <span>GET STARTED</span>
          </motion.div>
          
          <motion.h2 
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Contact us today to discuss your project requirements and get a 
            free consultation from our engineering experts.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link to="/contact">
                <Button 
                  variant="gradient"
                  size="lg"
                  icon={<Mail size={20} />}
                  className="btn-white btn-icon"
                >
                  Send Message
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover">
              <a href="tel:+917987074614">
                <Button 
                  variant="secondary"
                  size="lg"
                  icon={<Phone size={20} />}
                  className="btn-secondary btn-icon border-white text-white hover:bg-white/10"
                >
                  Call Now: +91-7987074614
                </Button>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6 text-left mt-12 pt-12 border-t border-white/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="flex items-start space-x-3"
              variants={featureVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle size={20} className="text-green-300" />
              </motion.div>
              <div>
                <h4 className="text-white font-bold mb-1">Free Consultation</h4>
                <p className="text-sm text-white/70">No obligation initial discussion</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-3"
              variants={featureVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle size={20} className="text-green-300" />
              </motion.div>
              <div>
                <h4 className="text-white font-bold mb-1">Quick Response</h4>
                <p className="text-sm text-white/70">2-hour average response time</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-3"
              variants={featureVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle size={20} className="text-green-300" />
              </motion.div>
              <div>
                <h4 className="text-white font-bold mb-1">Expert Advice</h4>
                <p className="text-sm text-white/70">10+ years engineering experience</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactCTASection;