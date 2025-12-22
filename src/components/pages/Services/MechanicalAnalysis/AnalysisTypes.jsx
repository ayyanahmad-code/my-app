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


const AnalysesTypes  = () => {

    
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
              <BarChart3 size={16} />
              <span className="text-sm font-semibold">ANALYSIS TYPES</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Types of Analysis Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive analysis services covering all engineering requirements
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {analysisTypes.map((type, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className={`bg-gradient-to-r ${type.color} h-2`}></div>
                
                <div className="p-8">
                  <motion.div 
                    className={`bg-gradient-to-r ${type.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {type.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-secondary-800 mb-3">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700">Capabilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, idx) => (
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
    export default AnalysesTypes;