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

const Service = () => {

     const services = [
        {
          icon: <Layers size={24} />,
          title: 'Top-Down Assembly',
          description: 'Complete assembly development from skeleton layouts using top-down configuration',
          features: ['Skeleton Layout Development', 'Interference Detection', 'Physical Dynamics Simulation'],
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: <Box size={24} />,
          title: 'Multi-Configuration Models',
          description: 'Create multiple configurations of assemblies with different component variations',
          features: ['Configuration Management', 'Component Variants', 'Custom Materials'],
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: <Film size={24} />,
          title: 'Animation & Exploded Views',
          description: 'Create working model animations and exploded views for presentations',
          features: ['Functional Animations', 'Exploded Views', 'Assembly/Disassembly Sequences'],
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: <Package size={24} />,
          title: 'BOM Generation',
          description: 'Automatic generation of Bill of Materials with assembly drawings',
          features: ['Automatic BOM', 'Part Lists', 'Assembly Instructions'],
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: <Eye size={24} />,
          title: 'Interference Detection',
          description: 'Comprehensive interference checking and clearance analysis',
          features: ['Collision Detection', 'Clearance Analysis', 'Tolerance Stack-up'],
          color: 'from-yellow-500 to-amber-500'
        },
        {
          icon: <GitBranch size={24} />,
          title: 'Physical Dynamics',
          description: 'Simulate physical interactions between components in assemblies',
          features: ['Motion Simulation', 'Force Analysis', 'Contact Simulation'],
          color: 'from-indigo-500 to-blue-500'
        }
      ];
    
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

  const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.08
    }
  }),
  hover: {
    y: -8,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};


return (
<section className="py-20 bg-gray-50">
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
              <Settings size={16} />
              <span className="text-sm font-semibold">OUR SERVICES</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Assembly Modeling Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive assembly development and animation services
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className={`bg-gradient-to-r ${service.color} h-2`}></div>
                
                <div className="p-8">
                  <motion.div 
                    className={`bg-gradient-to-r ${service.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.span 
                          key={idx} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
);
};
export default Service;