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
 
 const Applications = () => {

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


    const applications = [
    {
      icon: <Train size={24} />,
      industry: 'Rail & Rolling Stock',
      assemblies: ['Car Body Shell', 'Bogies', 'Driver Desk', 'Cab Assemblies'],
      tools: ['SolidWorks', 'Unigraphics']
    },
    {
      icon: <Bolt size={24} />,
      industry: 'Traction Systems',
      assemblies: ['Transformer Tanks', 'Converter Assemblies', 'Propulsion Systems'],
      tools: ['SolidWorks', 'PDMS']
    },
    {
      icon: <Factory size={24} />,
      industry: 'Heavy Machinery',
      assemblies: ['Press Frames', 'Machine Tools', 'Material Handling Equipment'],
      tools: ['SolidWorks', 'Autocad']
    },
    {
      icon: <Package size={24} />,
      industry: 'Consumer Goods',
      assemblies: ['Product Assemblies', 'Enclosures', 'Mechanisms'],
      tools: ['SolidWorks', 'CATIA']
    }
  ];

        const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
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
 <section className="py-10 bg-gray-50">
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
              <Factory size={16} />
              <span className="text-sm font-semibold">INDUSTRY APPLICATIONS</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Industry Applications
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Assembly modeling services across diverse industries
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {applications.map((app, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg group"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {app.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-secondary-800 mb-4">
                  {app.industry}
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Typical Assemblies:</h4>
                  <ul className="space-y-2">
                    {app.assemblies.map((assembly, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 + index * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary-500 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-gray-600">{assembly}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.tools.map((tool, idx) => (
                      <motion.span 
                        key={idx} 
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      );
    };
    export default Applications;