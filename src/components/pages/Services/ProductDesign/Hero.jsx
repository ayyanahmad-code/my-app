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
  FileOutput, Database, Award, Lightbulb
} from 'lucide-react';
import Image from "../../../../Images/ProductDesign.avif";    

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
        
          const designServices = [
            {
              icon: <Lightbulb size={24} />,
              title: 'New Product Development',
              description: 'End-to-end product development from concept to production-ready design',
              features: ['Concept Design', 'Feasibility Studies', 'Prototype Development', 'Design Validation'],
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: <Palette size={24} />,
              title: 'Surface Modeling & Aesthetic Design',
              description: 'Enhance product styling and appearance with aesthetic surface modeling',
              features: ['Aesthetic Features', 'Surface Modeling', 'Styling Improvements', 'Visual Appeal'],
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: <DraftingCompass size={24} />,
              title: 'Mechanical Design Services',
              description: 'Comprehensive design solutions from concept initiation to production drawings',
              features: ['Concept Design', 'Detailed Design', 'Material Selection', 'Design Optimization'],
              color: 'from-orange-500 to-red-500'
            },
            {
              icon: <RefreshCw size={24} />,
              title: 'Product Localization',
              description: 'Adapt existing products for new markets and applications',
              features: ['Market Adaptation', 'Regulatory Compliance', 'Cost Optimization', 'Regional Customization'],
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: <GitMerge size={24} />,
              title: '2D to 3D Conversion',
              description: 'Convert legacy 2D engineering drawings to modern 3D parametric solid models',
              features: ['2D Drawing Conversion', '3D Parametric Models', 'Legacy Data Migration', 'Model Validation'],
              color: 'from-yellow-500 to-amber-500'
            },
            {
              icon: <Sparkles size={24} />,
              title: 'Design Customization & Automation',
              description: 'Custom CAD solutions and automation for individual product lines',
              features: ['CAD Customization', 'Process Automation', 'Variable Input UI', 'Auto Documentation'],
              color: 'from-indigo-500 to-blue-500'
            }
          ];
        
          const designProcess = [
            {
              icon: <Lightbulb size={24} />,
              step: '01',
              title: 'Concept Initiation',
              description: 'Ideation and concept development based on requirements'
            },
            {
              icon: <DraftingCompass size={24} />,
              step: '02',
              title: 'Preliminary Design',
              description: 'Material selection, subsystem design, and initial layout'
            },
            {
              icon: <Ruler size={24} />,
              step: '03',
              title: 'Detailed Design',
              description: 'Detailed module design, assemblies, and geometric dimensioning'
            },
            {
              icon: <RefreshCw size={24} />,
              step: '04',
              title: 'Design Iteration',
              description: 'Iterative validation and optimization of design specifications'
            },
            {
              icon: <CheckCircle size={24} />,
              step: '05',
              title: 'Design Finalization',
              description: 'Final design sign-off and preparation for production'
            },
            {
              icon: <FileOutput size={24} />,
              step: '06',
              title: 'Production Release',
              description: 'Release of final production drawings and documentation'
            }
          ];
        
          const industriesServed = [
            {
              icon: <Train size={24} />,
              industry: 'Traction & Propulsion Systems',
              products: ['Transformer Tanks', 'Power Converters', 'Motor Housings', 'Propulsion Units'],
              focus: 'High-performance, reliability-focused designs'
            },
            {
              icon: <Factory size={24} />,
              industry: 'Heavy Machinery',
              products: ['Machine Tools', 'Press Frames', 'Excavators', 'Material Handling'],
              focus: 'Robust, durable designs for heavy-duty applications'
            },
            {
              icon: <Bolt size={24} />,
              industry: 'Power & Energy',
              products: ['Generators', 'Switchgear', 'Transformers', 'Power Distribution'],
              focus: 'Safety-compliant, efficient power equipment'
            },
            {
              icon: <Package size={24} />,
              industry: 'Consumer Goods',
              products: ['Appliances', 'Electronics', 'Tools', 'Consumer Products'],
              focus: 'User-centric, aesthetic, and functional designs'
            }
          ];
        
          const designTools = [
            { name: 'SolidWorks', icon: '📐', category: '3D CAD' },
            { name: 'CATIA', icon: '✈️', category: 'Advanced Surfacing' },
            { name: 'Siemens NX', icon: '🏭', category: 'Industrial Design' },
            { name: 'AutoCAD', icon: '📏', category: '2D Drafting' },
            { name: 'Unigraphics', icon: '🔧', category: 'Manufacturing' },
            { name: 'PDMS', icon: '🛢️', category: 'Plant Design' },
            { name: 'PDS', icon: '🔩', category: 'Piping Systems' },
            { name: 'SP 3D', icon: '⚡', category: 'SmartPlant' }
          ];
        
          const designMethodology = [
            {
              phase: 'Concept & Selection',
              activities: ['Requirement Analysis', 'Concept Sketches', 'Feasibility Study'],
              outcome: 'Approved Concept Direction'
            },
            {
              phase: 'Preliminary Design',
              activities: ['Material Selection', 'Sub-system Layout', 'Initial Sizing'],
              outcome: 'Design Framework Established'
            },
            {
              phase: 'Detailed Design',
              activities: ['3D Modeling', 'Assembly Design', 'Tolerance Analysis'],
              outcome: 'Complete Digital Prototype'
            },
            {
              phase: 'Design Validation',
              activities: ['Interference Check', 'Simulation Analysis', 'Design Review'],
              outcome: 'Validated & Optimized Design'
            },
            {
              phase: 'Documentation',
              activities: ['Production Drawings', 'BOM Generation', 'Assembly Instructions'],
              outcome: 'Manufacturing-Ready Package'
            }
          ];
        
    return (
    <section className="relative text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            src={Image}
            alt="Product Design and Development Services"
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
          className="absolute top-1/4 left-5 md:left-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <Lightbulb size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-5 md:right-10"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.2 }}
        >
          <DraftingCompass size={50} />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.4 }}
        >
          <Palette size={50} />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4"
          variants={floatingIconVariants}
          initial="hidden"
          animate={["visible", "float"]}
          transition={{ delay: 0.6 }}
        >
          <Sparkles size={50} />
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
              <DraftingCompass size={16} />
              <span className="text-sm font-semibold">PRODUCT DESIGN SERVICES</span>
            </motion.div>
            
            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Product Design & Development
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              Enhance your product design processes with our comprehensive solutions from concept 
              initiation to release of production drawing. Innovation and creativity are the two 
              vital needs of the industry, and we help companies by improving the aesthetic appeal 
              and functionality of their products.
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
                    Discuss Your Project
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
                    View Design Portfolio
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
                {i % 4 === 0 && <Lightbulb size={20} />}
                {i % 4 === 1 && <DraftingCompass size={20} />}
                {i % 4 === 2 && <Palette size={20} />}
                {i % 4 === 3 && <Sparkles size={20} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      );
    };
    export default Hero ;