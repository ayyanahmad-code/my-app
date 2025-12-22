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

const Tool = () => {
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
              <CpuIcon size={16} />
              <span className="text-sm font-semibold">TOOLS & TECHNOLOGIES</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Advanced Technologies We Use
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              State-of-the-art equipment and software for precise reverse engineering
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
                <div className="text-xs text-gray-500">{tool.purpose}</div>
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
                  <Award size={24} className="mr-3" />
                  <h3 className="text-2xl font-bold">Precision & Experience</h3>
                </div>
                <p className="mb-6 text-white/90">
                  With 10+ years of experience in reverse engineering complex components, 
                  we deliver accurate digital models that maintain dimensional integrity 
                  and design intent for manufacturing and analysis.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link to="/contact">
                    <Button 
                      variant="white"
                      size="md"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Start Your Project
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {[
                  { text: 'Sub-millimeter Accuracy', icon: '📏' },
                  { text: 'Complex Geometry Handling', icon: '🌀' },
                  { text: 'Fast Turnaround Times', icon: '⚡' },
                  { text: 'Manufacturing-Ready Outputs', icon: '🏭' }
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