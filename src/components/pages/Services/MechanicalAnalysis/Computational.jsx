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
 
 const Computational  = () => {
    
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
              <FileText size={16} />
              <span className="text-sm font-semibold">COMPUTATIONAL METHODOLOGY</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Computational Analysis Methodology
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Systematic approach ensuring accurate and reliable analysis results
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {/* Timeline line for desktop */}
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 group"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step number circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <motion.div 
                        className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 relative"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {method.step}
                      </motion.div>
                    </div>
                    
                    {/* Icon container */}
                    <motion.div 
                      className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 mx-auto"
                      whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                      transition={{ duration: 0.3 }}
                    >
                      {method.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-secondary-800 mb-3 text-center">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {method.description}
                    </p>
                  </motion.div>
                  
                  {/* Connecting line for mobile */}
                  {index < methodologies.length - 1 && (
                    <motion.div 
                      className="lg:hidden h-8 w-1 bg-gray-300 mx-auto mt-4"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Flow Diagram Legend */}
          <motion.div 
            className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleInVariants}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-small text-gray-700">Start</span>
              </div>
              <ChevronRight className="mx-4 text-gray-400" />
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span className="text-sm font-medium text-gray-700">Process</span>
              </div>
              <ChevronRight className="mx-4 text-gray-400" />
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span className="text-sm font-medium text-gray-700">Decision</span>
              </div>
              <ChevronRight className="mx-4 text-gray-400" />
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                <span className="text-sm font-medium text-gray-700">End</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600">
                Our methodology follows a structured flow from requirement gathering to project closure, 
                with quality control feedback loops at every stage.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      );
    };
export default Computational ;