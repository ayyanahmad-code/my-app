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
  FileSearch, Gauge
} from 'lucide-react';
import Photo from "../../../../Images/ReverseEngineering.avif";

const Hero = () => {
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

  const reverseEngineeringServices = [
    {
      icon: <Scan size={24} />,
      title: 'Physical to Digital Conversion',
      description: 'Convert physical models or image files into accurate digital models',
      features: ['3D Scanning', 'Photogrammetry', 'Point Cloud Processing', 'Surface Reconstruction'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Maximize2 size={24} />,
      title: 'Product Enhancement',
      description: 'Modify and enhance existing products for new segments or applications',
      features: ['Design Improvements', 'Feature Addition', 'Performance Enhancement', 'Material Upgrades'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Box size={24} />,
      title: '3D Model Reconstruction',
      description: 'Create precise 3D CAD models from physical parts with dimensional accuracy',
      features: ['Parametric Modeling', 'Surface Modeling', 'Assembly Recreation', 'Tolerance Analysis'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FileSearch size={24} />,
      title: 'Legacy Parts Digitalization',
      description: 'Digitize legacy components with missing or incomplete documentation',
      features: ['Legacy Part Capture', 'Missing Data Reconstruction', 'Documentation Generation', 'CAD Recreation'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Gauge size={24} />,
      title: 'Performance Analysis',
      description: 'Analyze existing products to identify improvement opportunities',
      features: ['Performance Assessment', 'Weakness Identification', 'Optimization Analysis', 'Redesign Planning'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Design Intent Recovery',
      description: 'Recover original design intent and manufacturing specifications',
      features: ['Design Recovery', 'Manufacturing Analysis', 'Material Identification', 'Process Understanding'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const reverseEngineeringProcess = [
    {
      icon: <Camera size={24} />,
      step: '01',
      title: 'Data Capture',
      description: 'Capture physical object data using 3D scanning or photography'
    },
    {
      icon: <Grid size={24} />,
      step: '02',
      title: 'Point Cloud Processing',
      description: 'Process raw scan data into usable point clouds and meshes'
    },
    {
      icon: <Box size={24} />,
      step: '03',
      title: 'Surface Reconstruction',
      description: 'Convert meshes into parametric surfaces and solid models'
    },
    {
      icon: <DraftingCompass size={24} />,
      step: '04',
      title: 'CAD Model Creation',
      description: 'Create accurate CAD models with proper features and dimensions'
    },
    {
      icon: <CheckCircle size={24} />,
      step: '05',
      title: 'Model Validation',
      description: 'Validate digital model against physical object for accuracy'
    },
    {
      icon: <FileOutput size={24} />,
      step: '06',
      title: 'Documentation',
      description: 'Generate complete engineering documentation and drawings'
    }
  ];

  const applications = [
    {
      icon: <Factory size={24} />,
      industry: 'Heavy Machinery',
      useCases: ['Legacy Part Replacement', 'Obsolete Component Recreation', 'Equipment Modernization', 'Spare Parts Production'],
      benefits: ['Extend Equipment Life', 'Reduce Downtime', 'Eliminate Obsolescence']
    },
    {
      icon: <Train size={24} />,
      industry: 'Rail & Transportation',
      useCases: ['Vintage Component Recreation', 'Damaged Part Replacement', 'System Upgrades', 'Maintenance Part Creation'],
      benefits: ['Maintain Fleet Operations', 'Cost-effective Spares', 'Improved Reliability']
    },
    {
      icon: <Bolt size={24} />,
      industry: 'Power & Energy',
      useCases: ['Obsolete Electrical Parts', 'Transformer Components', 'Switchgear Parts', 'Generator Components'],
      benefits: ['Ensure Power Continuity', 'Avoid Production Stoppage', 'Modernize Old Systems']
    },
    {
      icon: <Package size={24} />,
      industry: 'Consumer Products',
      useCases: ['Competitive Analysis', 'Product Benchmarking', 'Feature Enhancement', 'Cost Reduction'],
      benefits: ['Faster Time-to-Market', 'Improved Features', 'Cost Optimization']
    }
  ];

  const toolsTechnologies = [
    { name: 'SolidWorks', icon: '📐', purpose: '3D CAD Modeling' },
    { name: '3D Scanners', icon: '📷', purpose: 'Data Capture' },
    { name: 'Geomagic', icon: '🌀', purpose: 'Scan Processing' },
    { name: 'PolyWorks', icon: '🔬', purpose: 'Inspection' },
    { name: 'CATIA', icon: '✈️', purpose: 'Advanced Surfacing' },
    { name: 'FaroArm', icon: '🤖', purpose: 'Portable CMM' },
    { name: 'Photogrammetry', icon: '📸', purpose: 'Image-based Scanning' },
    { name: 'Metrology SW', icon: '📊', purpose: 'Measurement Analysis' }
  ];

  const methodology = [
    {
      phase: 'Assessment & Planning',
      activities: ['Object Analysis', 'Method Selection', 'Accuracy Requirements', 'Deliverables Definition'],
      tools: ['Visual Inspection', 'Measurement Planning', 'Scope Definition']
    },
    {
      phase: 'Data Acquisition',
      activities: ['3D Scanning Setup', 'Photogrammetry Capture', 'Measurement Collection', 'Data Validation'],
      tools: ['3D Scanners', 'CMM Machines', 'Photography Equipment']
    },
    {
      phase: 'Data Processing',
      activities: ['Point Cloud Cleanup', 'Mesh Generation', 'Noise Reduction', 'Alignment & Registration'],
      tools: ['Geomagic', 'PolyWorks', 'Custom Software']
    },
    {
      phase: 'Model Reconstruction',
      activities: ['Surface Creation', 'Feature Recognition', 'Parametric Modeling', 'Assembly Recreation'],
      tools: ['SolidWorks', 'CATIA', 'CAD Software']
    },
    {
      phase: 'Validation & Delivery',
      activities: ['Dimensional Verification', 'Tolerance Analysis', 'Documentation', 'Format Conversion'],
      tools: ['Metrology Software', 'QA Tools', 'Reporting Systems']
    }
  ];
return (
<section className="relative text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            src={Photo}
            alt="Reverse Engineering Services"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Dark Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/20"
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
          className="absolute top-1/4 left-5 md:left-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <RefreshCw size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-5 md:right-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.2 }}
        >
          <Scan size={50} />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.4 }}
        >
          <Box size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.6 }}
        >
          <FileSearch size={50} />
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
              <RefreshCw size={16} />
              <span className="text-sm font-semibold">REVERSE ENGINEERING SERVICES</span>
            </motion.div>
            
            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Reverse Engineering Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              Reverse Engineering techniques are effectively used in scenarios where physical models 
              may require digital interpretation for enhancing or modifying products to suit different 
              segments or applications. We convert given physical models or image files into accurate 
              digital models using advanced tools with precision and integrity.
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
                    Start Reverse Engineering Project
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
                    View Case Studies
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
                {i % 4 === 0 && <RefreshCw size={20} />}
                {i % 4 === 1 && <Scan size={20} />}
                {i % 4 === 2 && <Box size={20} />}
                {i % 4 === 3 && <FileSearch size={20} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      );
    };
    export default Hero ;