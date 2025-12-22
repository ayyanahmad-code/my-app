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
  Square, HardHat, Cog, Zap as ZapIcon, Warehouse,
  Terminal, MousePointerClick, Workflow,
  Code2, FileCode, Cpu as Chip
} from 'lucide-react';

const Cta = () => {   
  // Animation variants (same as AssemblyModeling and JigsFixtures)
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

  const customizationServices = [
    {
      icon: <Terminal size={24} />,
      title: 'CAD Software Customization',
      description: 'Customize existing CAD software like SolidWorks for individual product lines',
      features: ['API Development', 'Custom Macros', 'Plugin Creation', 'Workflow Automation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MousePointerClick size={24} />,
      title: 'User Interface Development',
      description: 'Create intuitive user interfaces for entering design variables and parameters',
      features: ['Custom UI Forms', 'Parameter Management', 'Input Validation', 'User Experience Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Workflow size={24} />,
      title: 'Automated Model Generation',
      description: 'Generate models, drawings and BOM automatically with a click of a button',
      features: ['Auto Model Creation', 'Drawing Generation', 'BOM Automation', 'Configuration Management'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Process Automation',
      description: 'Automate repetitive design and documentation tasks',
      features: ['Task Automation', 'Batch Processing', 'Report Generation', 'Data Migration'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FileCode size={24} />,
      title: 'Custom Script Development',
      description: 'Develop custom scripts for specific engineering requirements',
      features: ['Python Scripting', 'VBA Macros', 'Custom Algorithms', 'Data Processing'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Cog size={24} />,
      title: 'Integration Solutions',
      description: 'Integrate CAD systems with other enterprise software',
      features: ['ERP Integration', 'PLM Connectivity', 'Database Linking', 'API Development'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const customizationProcess = [
    {
      icon: <FileSearch size={24} />,
      step: '01',
      title: 'Process Analysis',
      description: 'Analyze repetitive tasks and automation opportunities'
    },
    {
      icon: <DraftingCompass size={24} />,
      step: '02',
      title: 'Requirement Gathering',
      description: 'Identify customization needs and user requirements'
    },
    {
      icon: <Code size={24} />,
      step: '03',
      title: 'Solution Design',
      description: 'Design custom interfaces and automation workflows'
    },
    {
      icon: <Terminal size={24} />,
      step: '04',
      title: 'Development',
      description: 'Develop custom scripts, macros, and interfaces'
    },
    {
      icon: <CheckCircle size={24} />,
      step: '05',
      title: 'Testing & Validation',
      description: 'Test automation solutions and validate outputs'
    },
    {
      icon: <Users size={24} />,
      step: '06',
      title: 'Deployment & Training',
      description: 'Deploy solutions and provide user training'
    }
  ];

  const applications = [
    {
      icon: <Factory size={24} />,
      industry: 'Manufacturing',
      customizations: ['Assembly Automation', 'BOM Generation', 'Drawing Templates', 'Part Numbering Systems'],
      benefits: ['90% Time Savings', 'Error Elimination', 'Consistent Outputs', 'Scalable Processes']
    },
    {
      icon: <Train size={24} />,
      industry: 'Rail & Transportation',
      customizations: ['GA Drawing Automation', 'Configuration Management', 'Standards Compliance', 'Documentation Systems'],
      benefits: ['Rapid Configuration', 'Regulatory Compliance', 'Quality Assurance', 'Cost Reduction']
    },
    {
      icon: <Bolt size={24} />,
      industry: 'Power Equipment',
      customizations: ['Transformer Design', 'Standard Part Libraries', 'Calculation Tools', 'Report Generators'],
      benefits: ['Design Consistency', 'Faster Calculations', 'Standard Compliance', 'Reduced Errors']
    },
    {
      icon: <Package size={24} />,
      industry: 'Consumer Products',
      customizations: ['Product Variants', 'Packaging Automation', 'Label Generation', 'Specification Sheets'],
      benefits: ['Quick Variant Creation', 'Brand Consistency', 'Market Responsiveness', 'Cost Efficiency']
    }
  ];

  const technologies = [
    { name: 'SolidWorks API', icon: '📐', purpose: 'CAD Automation' },
    { name: 'Python', icon: '🐍', purpose: 'Script Development' },
    { name: 'VBA', icon: '💻', purpose: 'Excel Automation' },
    { name: 'C#/.NET', icon: '🔷', purpose: 'Desktop Applications' },
    { name: 'JavaScript', icon: '📜', purpose: 'Web Interfaces' },
    { name: 'REST APIs', icon: '🔗', purpose: 'System Integration' },
    { name: 'SQL Databases', icon: '🗄️', purpose: 'Data Management' },
    { name: 'Git', icon: '📦', purpose: 'Version Control' }
  ];

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Automate repetitive tasks and save valuable engineering time',
      icon: '⏱️',
      metrics: '70-90% reduction in manual work'
    },
    {
      title: 'Error Reduction',
      description: 'Eliminate human errors in repetitive design tasks',
      icon: '✅',
      metrics: '95% error reduction'
    },
    {
      title: 'Consistency',
      description: 'Ensure consistent outputs across all designs',
      icon: '📊',
      metrics: '100% output consistency'
    },
    {
      title: 'Scalability',
      description: 'Scale operations without proportional cost increases',
      icon: '📈',
      metrics: 'Handle 10x volume with same resources'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs through automation',
      icon: '💰',
      metrics: '50-70% cost savings'
    },
    {
      title: 'Competitive Edge',
      description: 'Gain advantage through faster time-to-market',
      icon: '⚡',
      metrics: '60% faster project completion'
    }
  ];

  const useCases = [
    {
      scenario: 'Assembly Model Generation',
      problem: 'Developing Assembly Models and GA drawings for various configurations is time-consuming',
      solution: 'Custom CAD interface for entering variables that auto-generates models and drawings',
      result: 'Click-button automation instead of manual recreation'
    },
    {
      scenario: 'BOM Management',
      problem: 'Manual Bill of Materials creation leads to errors and inconsistencies',
      solution: 'Automated BOM generation from 3D models with custom formatting',
      result: 'Accurate, consistent BOMs in minutes instead of hours'
    },
    {
      scenario: 'Drawing Standardization',
      problem: 'Inconsistent drawing formats across team members',
      solution: 'Custom drawing templates and automation for standard compliance',
      result: 'Unified output meeting company and industry standards'
    },
    {
      scenario: 'Configuration Management',
      problem: 'Managing multiple product variants manually',
      solution: 'Custom configuration management system with parameter-driven design',
      result: 'Easy creation and management of product variants'
    }
  ];

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
              Ready to Automate Your CAD Processes?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              variants={itemVariants}
            >
              Contact us to discuss how our customization and automation solutions can 
              transform your engineering workflows and boost productivity.
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
                    Discuss Automation Needs
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <a href="tel:+917987074614">
                  <Button 
                    variant="secondary"
                    size="lg"
                    icon={<Phone size={20} />}
                    className="border-white text-white hover:bg-white/10"
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
              Email: support@apmsengineering.com | apmsegg.india@gmail.com
            </motion.p>
          </div>
        </motion.div>
      </section>
      );
    };
    export default Cta;