import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart3 } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const TimelineSection = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started as a small engineering consultancy', icon: '🚀' },
    { year: '2012', title: 'First OEM Partnership', description: 'Began working with major OEMs', icon: '🤝' },
    { year: '2015', title: 'Expansion', description: 'Expanded team and service offerings', icon: '📈' },
    { year: '2018', title: 'Advanced Capabilities', description: 'Added CFD and advanced simulation services', icon: '🔬' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented advanced CAD automation', icon: '💻' },
    { year: '2023', title: 'Industry Recognition', description: 'Recognized for excellence in engineering services', icon: '🏆' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 70
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

  const milestoneCardVariants = {
    hidden: { opacity: 0, x: index => (index % 2 === 0 ? -50 : 50) },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
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
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
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
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4"
            variants={badgeVariants}
          >
            <Clock size={16} />
            <span className="text-sm font-semibold">OUR JOURNEY</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-secondary-800 mb-4"
            variants={itemVariants}
          >
            Milestones of Excellence
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Key moments in our journey of engineering excellence and growth.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 origin-top"
            variants={timelineLineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    variants={milestoneCardVariants}
                    custom={index}
                    whileHover="hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-primary-600 font-bold text-2xl">
                        {milestone.year}
                      </div>
                      <motion.div 
                        className="text-2xl"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        {milestone.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <motion.div 
                  className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold z-10 shadow-lg"
                  variants={dotVariants}
                  whileHover="hover"
                >
                  {index + 1}
                </motion.div>
                
                {/* Empty spacer for alignment */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link to="/projects">
              <Button 
                variant="secondary"
                icon={<BarChart3 size={16} />}
              >
                See Our Work Through The Years
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;