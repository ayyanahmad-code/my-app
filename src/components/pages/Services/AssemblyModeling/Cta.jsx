 import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../buttons/Button';
import { motion } from 'framer-motion';
import { 
  Box, Layers, Cpu, Wrench, Settings, Play,
  CheckCircle, ArrowRight, FileText, Package,
  Users, Target, Zap, Shield, Factory,
  Train, Bolt, ChevronRight, Phone, Mail,
  Grid3x3, Eye, Film, GitBranch,
  ClipboardCheck, Upload
} from 'lucide-react';
      
const Cta = () => {

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

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
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };



 
 



  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

 




      return (
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              variants={badgeVariants}
            >
              <Phone size={16} />
              <span className="text-sm font-semibold">GET STARTED</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Need Assembly Modeling Services?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              variants={itemVariants}
            >
              Contact us for expert assembly modeling and animation services 
              with proven methodology and industry experience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/contact">
                  <Button 
                    variant="gradient"
                    size="lg"
                    icon={<Mail size={20} />}
                  >
                    Request Quote
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <a href="tel:+917987074614">
                  <Button 
                    variant="secondary"
                    size="lg"
                    icon={<Phone size={20} />}
                  >
                    Call: +91-7987074614
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-white/80 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Also available: support@apmsengineering.com
            </motion.p>
          </div>
        </motion.div>
      </section>
      );
    };
    export default Cta;