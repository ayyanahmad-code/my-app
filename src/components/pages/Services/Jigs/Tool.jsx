import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../buttons/Button';
import { motion } from 'framer-motion';
import { 
  Box, Layers, Cpu, Settings, Play,
  CheckCircle, ArrowRight, FileText, Package,
  Users, Target, Zap, Shield, Factory,
  Train, Bolt, ChevronRight, Phone, Mail,
  Grid3x3, Eye, Film, GitBranch, Palette,
  ClipboardCheck, Upload, DraftingCompass,
  RefreshCw, Sparkles, Ruler, GitMerge,
  FileOutput, Database, Award, Lightbulb,
  Scan, Maximize2, Camera, Image, Grid,
  Code, Cpu as CpuIcon, Settings as SettingsIcon,
  FileSearch, Gauge, Wrench, Hammer,
  Square, HardHat, Cog, Zap as ZapIcon, Warehouse
} from 'lucide-react';

const Tool = () => {
  // Animation variants (same as AssemblyModeling)
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

  const backgroundOverlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const patternVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.08,
      transition: {
        duration: 1,
        delay: 0.3
      }
    }
  };

  const floatingIconVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.06,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
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

  const jigServices = [
    {
      icon: <Wrench size={24} />,
      title: 'Assembly Jigs & Fixtures',
      description: 'Custom jigs for precise component assembly and alignment',
      features: ['Precision Alignment', 'Repeatable Assembly', 'Error Reduction', 'Quality Assurance'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Settings size={24} />,
      title: 'Welding Jigs & Fixtures',
      description: 'Specialized fixtures for accurate welding positioning and consistency',
      features: ['Weld Positioning', 'Distortion Control', 'Consistent Quality', 'Safety Compliance'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Square size={24} />,
      title: 'Templates & Manipulators',
      description: 'Templates for marking and manipulators for handling heavy components',
      features: ['Pattern Templates', 'Positioning Aids', 'Heavy Load Handling', 'Operator Safety'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield size={24} />,
      title: 'Inspection Fixtures',
      description: 'Fixtures for quality control and dimensional verification',
      features: ['Dimensional Checking', 'Quality Verification', 'Tolerance Validation', 'First Article Inspection'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Cog size={24} />,
      title: 'Machining Fixtures',
      description: 'Workholding fixtures for machining operations',
      features: ['Secure Workholding', 'Vibration Control', 'Precision Machining', 'Tool Access Optimization'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Hammer size={24} />,
      title: 'Testing Fixtures',
      description: 'Specialized fixtures for product testing and validation',
      features: ['Load Testing', 'Functional Testing', 'Durability Testing', 'Performance Validation'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const designProcess = [
    {
      icon: <FileSearch size={24} />,
      step: '01',
      title: 'Requirement Analysis',
      description: 'Analyze manufacturing process and fixture requirements'
    },
    {
      icon: <DraftingCompass size={24} />,
      step: '02',
      title: 'Concept Design',
      description: 'Develop initial fixture concepts and layouts'
    },
    {
      icon: <Box size={24} />,
      step: '03',
      title: '3D Modeling',
      description: 'Create detailed 3D models with validation'
    },
    {
      icon: <CheckCircle size={24} />,
      step: '04',
      title: 'Design Validation',
      description: 'Validate design with simulation and analysis'
    },
    {
      icon: <FileOutput size={24} />,
      step: '05',
      title: 'Manufacturing Drawings',
      description: 'Generate detailed manufacturing drawings'
    },
    {
      icon: <Factory size={24} />,
      step: '06',
      title: 'Production Support',
      description: 'Support manufacturing and commissioning'
    }
  ];

  const applications = [
    {
      icon: <Factory size={24} />,
      industry: 'Automotive Manufacturing',
      fixtures: ['Body-in-White Fixtures', 'Sub-assembly Jigs', 'Welding Fixtures', 'Trim & Final Assembly'],
      benefits: ['Cycle Time Reduction', 'Quality Improvement', 'Labor Cost Savings']
    },
    {
      icon: <Warehouse size={24} />,
      industry: 'Aerospace & Defense',
      fixtures: ['Aircraft Assembly Jigs', 'Composite Layup Tools', 'Machining Fixtures', 'Inspection Tools'],
      benefits: ['Precision Assembly', 'Regulatory Compliance', 'Repeatable Accuracy']
    },
    {
      icon: <ZapIcon size={24} />,
      industry: 'Electronics Manufacturing',
      fixtures: ['PCB Assembly Fixtures', 'Testing Jigs', 'Conformal Coating Masks', 'Solder Paste Stencils'],
      benefits: ['Yield Improvement', 'Process Consistency', 'Defect Reduction']
    },
    {
      icon: <HardHat size={24} />,
      industry: 'Heavy Engineering',
      fixtures: ['Large Structure Assembly', 'Welding Positioners', 'Machining Setups', 'Alignment Tools'],
      benefits: ['Safety Enhancement', 'Productivity Gain', 'Quality Consistency']
    }
  ];

  const toolsTechnologies = [
    { name: 'SolidWorks', icon: '📐', purpose: '3D Design & Detailing' },
    { name: 'CATIA', icon: '✈️', purpose: 'Advanced Surface Design' },
    { name: 'Siemens NX', icon: '🏭', purpose: 'Complex Fixture Design' },
    { name: 'AutoCAD', icon: '📏', purpose: '2D Drawings & Layouts' },
    { name: 'Simulation SW', icon: '🌀', purpose: 'Structural Analysis' },
    { name: 'PDMS', icon: '🛢️', purpose: 'Large Assembly Design' },
    { name: 'Metrology', icon: '📊', purpose: 'Dimensional Validation' },
    { name: 'ERP/MES', icon: '⚙️', purpose: 'Production Integration' }
  ];

  const benefits = [
    {
      title: 'Increased Productivity',
      description: 'Reduce setup time and increase production rates',
      icon: '⚡',
      metrics: '30-50% faster setup times'
    },
    {
      title: 'Enhanced Quality',
      description: 'Ensure consistent product quality and reduce defects',
      icon: '🎯',
      metrics: '60-80% defect reduction'
    },
    {
      title: 'Interchangeability',
      description: 'Enable standardized parts and easy replacement',
      icon: '🔄',
      metrics: '100% part interchangeability'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower labor costs and material waste',
      icon: '💰',
      metrics: '20-40% cost savings'
    },
    {
      title: 'Safety Improvement',
      description: 'Reduce operator fatigue and accident risks',
      icon: '🛡️',
      metrics: 'Improved safety compliance'
    },
    {
      title: 'Scalability',
      description: 'Support production volume increases efficiently',
      icon: '📈',
      metrics: 'Easy production scaling'
    }
  ];
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
              <CpuIcon size={16} />
              <span className="text-sm font-semibold">TOOLS & TECHNOLOGIES</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Design & Manufacturing Tools
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Advanced software and technologies for precision tooling
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {toolsTechnologies.map((tool, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center group border border-gray-200"
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
                <div className="text-lg font-bold text-secondary-800 mb-1 group-hover:text-primary-600 transition-colors">
                  {tool.name}
                </div>
                <div className="text-xs text-gray-500">{tool.purpose}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white"
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
                  <Award size={24} className="mr-3" />
                  <h3 className="text-2xl font-bold">Expert Tooling Solutions</h3>
                </div>
                <p className="mb-6 text-white/90">
                  With 10+ years of experience in designing and manufacturing jigs, fixtures, 
                  and tooling, we deliver solutions that optimize your production processes, 
                  improve quality, and reduce costs.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link to="/contact">
                    <Button 
                      variant="white"
                      size="md"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Discuss Your Tooling Needs
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {[
                  { text: '10+ Years Tooling Experience', icon: '📅' },
                  { text: 'Complex Fixture Projects', icon: '🔧' },
                  { text: '3D Validation & Simulation', icon: '🖥️' },
                  { text: 'End-to-End Support', icon: '🔄' }
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
    export default Tool;