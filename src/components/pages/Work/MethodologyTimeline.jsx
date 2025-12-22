import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ChevronUp, ChevronDown } from 'lucide-react';

const MethodologyTimeline = ({ 
  methodologySteps, 
  activeStep, 
  setActiveStep, 
  currentAutoStep 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    }
  };

  const timelineLineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const timelineDotVariants = (index) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + (index * 0.1),
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    }
  });

  const stepCardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      scale: 0.9
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2 + (index * 0.1),
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 15,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  const expandVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const detailDotVariants = {
    hidden: { scale: 0 },
    visible: (index) => ({
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1 * index
      }
    })
  };

  const chevronVariants = {
    hover: {
      rotate: 180,
      transition: {
        duration: 0.3
      }
    }
  };

  const summaryCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + (index * 0.1),
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4"
            variants={badgeVariants}
          >
            <Target size={16} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              COMPLETE WORKFLOW
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Our Engineering Process
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Follow our systematic process from initial requirements to manufacturing support
          </motion.p>
        </motion.div>

        {/* Simplified Timeline Layout */}
        <div className="relative">
          {/* Main timeline line */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
            variants={timelineLineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          
          {/* Timeline steps */}
          <div className="space-y-12">
            {methodologySteps.map((step, index) => {
              const isLeftSide = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.id}
                  className={`relative flex ${isLeftSide ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-cyan-500 z-10 shadow-lg"
                    variants={timelineDotVariants(index)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                  >
                    <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                      {step.milestoneMeeting ? 'M' : step.step}
                    </div>
                  </motion.div>
                  
                  {/* Step card */}
                  <div className={`w-full lg:w-5/12 ${isLeftSide ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      variants={stepCardVariants}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                      className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer border transition-all duration-300 ${
                        activeStep === step.id 
                          ? 'border-blue-400 ring-2 ring-blue-100' 
                          : step.milestoneMeeting
                          ? 'border-gray-300 hover:border-gray-400'
                          : 'border-gray-100 hover:border-blue-200'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Step icon */}
                        <motion.div 
                          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                            step.milestoneMeeting 
                              ? 'bg-gradient-to-r from-gray-600 to-gray-800' 
                              : `bg-gradient-to-r ${step.color}`
                          }`}
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          {step.icon}
                        </motion.div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-sm font-semibold px-2 py-1 rounded ${
                                  step.milestoneMeeting 
                                    ? 'bg-gray-100 text-gray-700' 
                                    : 'bg-blue-50 text-blue-700'
                                }`}>
                                  {step.milestoneMeeting ? 'Milestone Meeting' : `Step ${step.step}`}
                                </span>
                                <span className="text-xs text-gray-500">{step.duration}</span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {step.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {step.description}
                              </p>
                            </div>
                            <motion.button 
                              className="text-gray-400 hover:text-blue-600"
                              variants={chevronVariants}
                              whileHover="hover"
                              aria-label={activeStep === step.id ? "Collapse details" : "Expand details"}
                            >
                              {activeStep === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </motion.button>
                          </div>
                          
                          {/* Expanded details */}
                          <AnimatePresence>
                            {activeStep === step.id && (
                              <motion.div
                                variants={expandVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="overflow-hidden"
                              >
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Activities:</h4>
                                    <ul className="space-y-2">
                                      {step.details.slice(0, 3).map((detail, idx) => (
                                        <motion.li 
                                          key={idx} 
                                          className="flex items-start text-sm"
                                          variants={detailDotVariants}
                                          custom={idx}
                                          initial="hidden"
                                          animate="visible"
                                        >
                                          <motion.div 
                                            className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                          />
                                          <span className="text-gray-600">{detail}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                  <motion.div 
                                    className="text-xs text-blue-600 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    📄 Deliverables: {step.deliverables}
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Workflow summary */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={summaryCardVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-700 font-medium">Engineering Phases</div>
              <p className="text-sm text-gray-600 mt-1">Structured technical execution</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={summaryCardVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <div className="text-3xl font-bold text-gray-700 mb-2">4</div>
              <div className="text-gray-700 font-medium">Milestone Meetings</div>
              <p className="text-sm text-gray-600 mt-1">Client collaboration points</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={summaryCardVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-700 font-medium">Total Steps</div>
              <p className="text-sm text-gray-600 mt-1">Complete project workflow</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyTimeline;