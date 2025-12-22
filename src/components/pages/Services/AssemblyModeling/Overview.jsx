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

const Overviwe = () => {

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

   const slideInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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

    const slideInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


return (
<section className="py-10 bg-white">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeftVariants}>
              <motion.div 
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4"
                variants={badgeVariants}
              >
                <Layers size={16} />
                <span className="text-sm font-semibold">COMPREHENSIVE ASSEMBLY SERVICES</span>
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold text-secondary-800 mb-6"
                variants={itemVariants}
              >
                From Concept to Complete Assembly
              </motion.h2>
              <motion.div className="space-y-4 text-lg text-gray-600" variants={containerVariants}>
                <motion.p variants={itemVariants}>
                  We create multiple configurations of the assembly, apply corresponding 
                  materials to the components, and generate assembly drawing with Bill of 
                  Materials and recommendations based on customer input.
                </motion.p>
                <motion.p variants={itemVariants}>
                  We also create animation of the working model along with its exploded 
                  view for presentation and review of product functionality.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="mt-8 p-6 bg-gray-50 rounded-2xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="font-bold text-secondary-800 mb-4">Assembly Capabilities:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { capability: 'Top-Down Design', icon: '⬇️' },
                    { capability: 'Multi-Configuration', icon: '🔄' },
                    { capability: 'Interference Detection', icon: '👁️' },
                    { capability: 'Physical Dynamics', icon: '⚛️' },
                    { capability: 'BOM Generation', icon: '📋' },
                    { capability: 'Animation Creation', icon: '🎬' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-xl mr-2">{item.icon}</span>
                      <span className="text-gray-700">{item.capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white"
              variants={slideInRightVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Film size={24} className="mr-3" />
                <h3 className="text-2xl font-bold">Animation & Visualization</h3>
              </div>
              <p className="mb-6">
                Create compelling animations and exploded views that showcase product 
                functionality, assembly sequences, and disassembly procedures for 
                presentations, reviews, and training purposes.
              </p>
              
              <div className="space-y-4">
                {[
                  { text: 'Working model animations', icon: '🎥' },
                  { text: 'Exploded view creation', icon: '💥' },
                  { text: 'Assembly sequence visualization', icon: '🔄' },
                  { text: 'Disassembly procedures', icon: '🔧' }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xl mt-1">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      );
    };
export default Overviwe;