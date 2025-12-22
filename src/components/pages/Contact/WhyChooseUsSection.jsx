import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Zap, CheckCircle, ChevronRight } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mainCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const responseCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const checkIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Why Choose Us */}
      <motion.div 
        className="card bg-gradient-to-br from-secondary-800 to-secondary-900 text-white"
        variants={mainCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="flex items-center mb-6"
          variants={itemVariants}
        >
          <Shield size={24} className="mr-3" />
          <h3 className="text-white text-2xl font-bold">Why Choose APMS?</h3>
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {[
            {
              icon: <Target size={20} />,
              title: '10+ Years Experience',
              description: 'Trusted by leading OEMs worldwide'
            },
            {
              icon: <Users size={20} />,
              title: 'Expert Team',
              description: 'Seasoned professionals with domain expertise'
            },
            {
              icon: <Zap size={20} />,
              title: 'Advanced Technology',
              description: 'State-of-the-art engineering software and tools'
            },
            {
              icon: <CheckCircle size={20} />,
              title: 'Quality Assurance',
              description: 'Rigorous quality checks at every stage'
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start space-x-3"
              variants={featureItemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="text-green-300 flex-shrink-0 mt-1"
                variants={iconVariants}
                whileHover="hover"
              >
                {item.icon}
              </motion.div>
              <div>
                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-white/20"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link to="/about">
              <Button 
                variant="white"
                size="sm"
                className="w-full btn-white btn-icon"
                icon={<ChevronRight size={16} />}
                iconPosition="right"
              >
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Response Time */}
      <motion.div 
        className="card bg-primary-50"
        variants={responseCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover="hover"
      >
        <motion.h3 
          className="text-2xl font-bold text-secondary-800 mb-6"
          variants={itemVariants}
        >
          Response Time
        </motion.h3>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {[
            { time: '2 Hours', label: 'Initial Response' },
            { time: '24 Hours', label: 'Detailed Proposal' },
            { time: '48 Hours', label: 'Project Kickoff' }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="card bg-white"
              variants={responseCardVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-secondary-800">{item.time}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
                <motion.div 
                  className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600"
                  variants={checkIconVariants}
                >
                  <CheckCircle size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-600">
            Average response times during business hours
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUsSection;