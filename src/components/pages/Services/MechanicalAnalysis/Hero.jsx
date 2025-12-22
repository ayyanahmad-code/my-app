 import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../buttons/Button';
import { motion } from 'framer-motion';
import { 
  Target, Zap, Shield, Users, Cpu, Layers, 
  Thermometer, Wind, Magnet, BarChart3, 
  CheckCircle, ArrowRight, FileText, CpuIcon,
  Search, Calculator, Grid3x3, Play, CheckSquare, FileCheck, Settings,
  Briefcase, Factory, Train, Zap as Bolt, Database,
  Phone, Mail, ChevronRight
} from 'lucide-react';
import Image from "../../../../Images/Mechanical Analysis Services.avif";


 const Hero  = () => {

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

  const analysisTypes = [
    {
      icon: <Target size={24} />,
      title: 'Structural Analysis',
      description: 'Stress, strain, deformation analysis under various loading conditions',
      features: ['Static Analysis', 'Fatigue Analysis', 'Buckling Analysis', 'Non-linear Analysis'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Thermometer size={24} />,
      title: 'Thermal Analysis',
      description: 'Heat transfer analysis including conduction, convection, and radiation',
      features: ['Steady-state Analysis', 'Transient Analysis', 'Thermal Stress', 'Heat Flux'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Wind size={24} />,
      title: 'CFD Analysis',
      description: 'Computational Fluid Dynamics for fluid flow and heat transfer',
      features: ['Flow Analysis', 'Pressure Drop', 'Heat Transfer', 'Turbulence Modeling'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Magnet size={24} />,
      title: 'Electromagnetic Analysis',
      description: 'Magnetic field analysis for electrical and electromechanical systems',
      features: ['Magnetic Flux', 'Inductance', 'Force Analysis', 'Field Distribution'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Multi-body Dynamics',
      description: 'Analysis of interconnected rigid or flexible bodies',
      features: ['Kinematic Analysis', 'Dynamic Analysis', 'Vibration Analysis', 'Impact Analysis'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Modal & Frequency Analysis',
      description: 'Natural frequencies and mode shapes for vibration characteristics',
      features: ['Modal Analysis', 'Harmonic Analysis', 'Random Vibration', 'Shock Analysis'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const methodologies = [
    {
      icon: <Search size={24} />,
      step: '01',
      title: 'Requirement Analysis',
      description: 'Detailed review of project requirements and scope definition'
    },
    {
      icon: <Calculator size={24} />,
      step: '02',
      title: 'Mathematical Modeling',
      description: 'Creation of accurate mathematical models with proper boundary conditions'
    },
    {
      icon: <Grid3x3 size={24} />,
      step: '03',
      title: 'Mesh Generation',
      description: 'Finite element mesh generation with appropriate element types and sizes'
    },
    {
      icon: <Play size={24} />,
      step: '04',
      title: 'Analysis Execution',
      description: 'Running simulations with appropriate solver settings and parameters'
    },
    {
      icon: <CheckSquare size={24} />,
      step: '05',
      title: 'Results Validation',
      description: 'Verification and validation of analysis results against standards'
    },
    {
      icon: <FileCheck size={24} />,
      step: '06',
      title: 'Reporting',
      description: 'Comprehensive documentation with recommendations and optimization suggestions'
    }
  ];

  const applications = [
    {
      icon: <Bolt size={24} />,
      industry: 'Traction Systems',
      analyses: ['Structural', 'Thermal', 'Vibration'],
      examples: ['Transformer Tanks', 'Power Converters', 'Motor Housings']
    },
    {
      icon: <Train size={24} />,
      industry: 'Rolling Stock',
      analyses: ['Fatigue', 'Impact', 'Aerodynamic'],
      examples: ['Car Body Shell', 'Bogies', 'Couplers']
    },
    {
      icon: <Factory size={24} />,
      industry: 'Heavy Machinery',
      analyses: ['Stress', 'Dynamic', 'Buckling'],
      examples: ['Press Frames', 'Cranes', 'Excavators']
    },
    {
      icon: <Briefcase size={24} />,
      industry: 'Power Equipment',
      analyses: ['Thermal', 'Electromagnetic', 'Structural'],
      examples: ['Generators', 'Transformers', 'Switchgear']
    }
  ];

  const softwareTools = [
    { name: 'ANSYS', icon: '🔬' },
    { name: 'SolidWorks Simulation', icon: '📐' },
    { name: 'ABAQUS', icon: '⚙️' },
    { name: 'NASTRAN', icon: '📊' },
    { name: 'HyperWorks', icon: '🚀' },
    { name: 'COMSOL', icon: '🌀' },
    { name: 'MATLAB', icon: '🧮' },
    { name: 'Simulink', icon: '📈' }
  ];


 return (
 <section className="relative text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            src={Image}
            alt="Mechanical Analysis and Engineering Simulation"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Dark Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-gray-400/40 to-gray-500/60"
            variants={backgroundOverlayVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        
        {/* Optional: Circuit/Grid Pattern Overlay */}
        <motion.div 
          className="absolute inset-0"
          variants={patternVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        </motion.div>
        
        {/* Floating Analysis Icons */}
        <motion.div 
          className="absolute top-1/4 left-5 md:left-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <CpuIcon size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-5 md:right-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.2 }}
        >
          <Settings size={50} />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.4 }}
        >
          <Target size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.6 }}
        >
          <BarChart3 size={50} />
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
              <CpuIcon size={16} />
              <span className="text-sm font-semibold">MECHANICAL ANALYSIS SERVICES</span>
            </motion.div>
            
            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Mechanical Analysis Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              Optimize your mechanical analysis capabilities with conventional and advanced 
              numerical simulations including finite element/volume/difference, discrete 
              element, and boundary element methods. We Provide engineering solutions for the complex problems through mechanical analysis.
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
                    Request Analysis
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
                {i % 4 === 0 && <CpuIcon size={20} />}
                {i % 4 === 1 && <Settings size={20} />}
                {i % 4 === 2 && <Target size={20} />}
                {i % 4 === 3 && <BarChart3 size={20} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
);
};
export default Hero;
