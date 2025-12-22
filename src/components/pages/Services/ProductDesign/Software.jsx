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

const Software = () => {

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
              <Cpu size={16} />
              <span className="text-sm font-semibold">SOFTWARE TOOLS</span>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-4"
              variants={itemVariants}
            >
              Design Tools Proficiency
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Expert in industry-leading design and engineering software
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {designTools.map((tool, index) => (
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
                <div className="text-xs text-gray-500">{tool.category}</div>
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
                  <h3 className="text-2xl font-bold">10+ Years Design Excellence</h3>
                </div>
                <p className="mb-6 text-white/90">
                  With over a decade of experience working with leading OEMs, our design 
                  team combines technical expertise with creative innovation to deliver 
                  exceptional product design solutions.
                </p>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link to="/contact">
                    <Button 
                      variant="white"
                      size="md"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Start Your Design Project
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                {[
                  { text: 'Experienced Design Team', icon: '👨‍💻' },
                  { text: 'Proven Design Methodology', icon: '📊' },
                  { text: 'Industry-Specific Expertise', icon: '🏭' },
                  { text: 'End-to-End Solutions', icon: '🔄' }
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
    export default Software;