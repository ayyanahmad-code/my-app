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
 
 const Software = () => {

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
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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

 


  const softwareTools = [
    { name: 'SolidWorks', icon: '📐', type: 'Primary Tool' },
    { name: 'CATIA', icon: '✈️', type: 'Aerospace & Auto' },
    { name: 'Siemens NX', icon: '🏭', type: 'Industrial' },
    { name: 'PDMS', icon: '🛢️', type: 'Plant Design' },
    { name: 'PDS', icon: '🔩', type: 'Piping Design' },
    { name: 'SP 3D', icon: '⚡', type: 'SmartPlant' },
    { name: 'Autocad', icon: '📏', type: '2D Drafting' },
    { name: 'Unigraphics', icon: '🔧', type: 'Manufacturing' }
  ];

 return (
 <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4"
              variants={badgeVariants}
            >
              <Cpu size={16} />
              <span className="text-sm font-semibold">SOFTWARE TOOLS</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Software Tools Proficiency
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Expert in industry-leading CAD and assembly software
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {softwareTools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 text-center group"
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  borderColor: "#3b82f6"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {tool.icon}
                </motion.div>
                <div className="text-lg font-bold text-secondary-800 mb-1">
                  {tool.name}
                </div>
                <div className="text-xs text-gray-500">{tool.type}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleInVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Users size={24} className="mr-3" />
                  <h3 className="text-2xl font-bold">Expert Assembly Team</h3>
                </div>
                <p className="mb-6 text-white/90">
                  Our team of experienced designers and engineers specialize in 
                  complex assembly modeling with 10+ years of experience across 
                  various industries including rail, power, and heavy machinery.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link to="/contact">
                    <Button 
                      variant="white"
                      size="md"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Discuss Assembly Project
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {[
                  { text: '10+ Years Assembly Experience', icon: '📅' },
                  { text: 'Complex Assembly Projects', icon: '🏗️' },
                  { text: 'Industry Standard Software', icon: '💻' },
                  { text: 'Animation & Visualization', icon: '🎬' }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      );
    };
    export default Software;