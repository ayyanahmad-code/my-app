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

 const Process = () => {

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

    const processSteps = [
      {
        icon: <Upload size={24} />,
        step: '01',
        title: 'Layout Analysis',
        description: 'Review and understand the General Assembly layout (Skeleton Layout)'
      },
      {
        icon: <Box size={24} />,
        step: '02',
        title: 'Component Development',
        description: 'Create individual components using top-down design approach'
      },
      {
        icon: <Layers size={24} />,
        step: '03',
        title: 'Assembly Creation',
        description: 'Assemble components with proper constraints and relationships'
      },
      {
        icon: <Eye size={24} />,
        step: '04',
        title: 'Interference Check',
        description: 'Perform interference detection and clearance analysis'
      },
      {
        icon: <ClipboardCheck size={24} />,
        step: '05',
        title: 'BOM & Documentation',
        description: 'Generate Bill of Materials and assembly drawings'
      },
      {
        icon: <Film size={24} />,
        step: '06',
        title: 'Animation Creation',
        description: 'Create animations and exploded views for review'
      }
    ];
  

 return (
 <section className="py-20 bg-white">
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
              <Play size={16} />
              <span className="text-sm font-semibold">OUR PROCESS</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Assembly Development Process
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Systematic approach to assembly modeling and animation
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 group"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step number circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <motion.div 
                        className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 relative"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.step}
                      </motion.div>
                    </div>
                    
                    {/* Icon container */}
                    <motion.div 
                      className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 mx-auto"
                      whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-secondary-800 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                  </motion.div>
                  
                  {/* Connecting line for mobile */}
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="lg:hidden h-8 w-1 bg-gray-300 mx-auto mt-4"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      );
    };
    export default Process;