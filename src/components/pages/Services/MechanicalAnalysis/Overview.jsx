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

const Overview = () => {
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
 <section className="py-20 bg-white">
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
                <Database size={16} />
                <span className="text-sm font-semibold">COMPUTATIONAL ANALYSIS</span>
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold text-secondary-800 mb-6"
                variants={itemVariants}
              >
                Engineering Solutions for Complex Problems
              </motion.h2>
              <motion.div className="space-y-4 text-lg text-gray-600" variants={containerVariants}>
                <motion.p variants={itemVariants}>
                  We provide engineering solutions for complex problems through mechanical 
                  analysis. Mathematical modeling helps achieve requested outcomes of design 
                  optimization and helps in assessing the performance, reliability and 
                  safety of products.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Our expertise spans structural, thermal, torsional, CFD, electromagnetic 
                  and multi-body dynamic analysis. We perform both 2D and 3D analysis in 
                  static and dynamic conditions.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="mt-8 p-6 bg-gray-50 rounded-2xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="font-bold text-secondary-800 mb-4">Key Benefits:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { benefit: 'Design Optimization', icon: '🎯' },
                    { benefit: 'Performance Assessment', icon: '📊' },
                    { benefit: 'Reliability Analysis', icon: '🛡️' },
                    { benefit: 'Safety Evaluation', icon: '✅' },
                    { benefit: 'Cost Reduction', icon: '💰' },
                    { benefit: 'Time Savings', icon: '⏱️' }
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
                      <span className="text-gray-700">{item.benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white"
              variants={slideInRightVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <Cpu size={24} className="mr-3" />
                <h3 className="text-2xl font-bold">Advanced Computational Techniques</h3>
              </div>
              <p className="mb-6">
                Advanced computational analysis relies on the theory of the finite element 
                method and originated from the need to solve complex elasticity and 
                structural analysis problems.
              </p>
              
              <div className="space-y-4">
                {[
                  { text: 'Critical areas have finer mesh for accurate analysis', icon: '🎯' },
                  { text: 'Non-critical parts link critical areas to each other', icon: '🔗' },
                  { text: 'Effects propagate through connected elements', icon: '⚡' },
                  { text: 'Global system calculation through element recombination', icon: '🌐' }
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
export default Overview;