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
import Photo from "../../../../Images/Jigs.avif"

const Hero  = () => {
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
<section className="relative text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            src={Photo}
            alt="Jigs, Fixtures & Tooling Design Services"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Dark Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-600/10"
            variants={backgroundOverlayVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        
        {/* Optional: Pattern Overlay */}
        <motion.div 
          className="absolute inset-0"
          variants={patternVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        </motion.div>
        
        {/* Floating Icons */}
        <motion.div 
          className="absolute top-1/4 right-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <Wrench size={60} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.2 }}
        >
          <Settings size={60} />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 left-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.4 }}
        >
          <Hammer size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.6 }}
        >
          <Cog size={50} />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              variants={badgeVariants}
            >
              <Wrench size={16} />
              <span className="text-sm font-semibold">JIGS, FIXTURES & TOOLING</span>
            </motion.div>
            
            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Jigs, Fixtures & Tooling Design
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              Jigs & Fixtures help in increasing productivity, interchangeability, and enhance quality, 
              as well as reducing costs. We specialize in Jigs, Fixtures & Tooling Design & Manufacturing, 
              including Assembly & Welding jigs fixtures, Templates & Manipulators. We pre-validate our 
              Designs with 3D Models to reduce production line validation time.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/contact">
                  <Button 
                    variant="gradient"
                    size="lg"
                    icon={<Mail size={20} />}
                    className="btn-gradient btn-icon"
                  >
                    Get Fixture Design Quote
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/projects">
                  <Button 
                    variant="secondary"
                    size="lg"
                    icon={<ChevronRight size={20} />}
                    iconPosition="right"
                    className="btn-secondary btn-icon border-white text-white hover:bg-white/10"
                  >
                    View Fixture Projects
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle Background Icons Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-3 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center items-center h-full">
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i} 
                className="mx-3 my-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.03, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
              >
                {i % 4 === 0 && <Wrench size={20} />}
                {i % 4 === 1 && <Settings size={20} />}
                {i % 4 === 2 && <Hammer size={20} />}
                {i % 4 === 3 && <Cog size={20} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      );
    };
export default Hero;