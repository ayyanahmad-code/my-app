import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, BarChart3, Globe, Mail } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const CompanyOverview = () => {
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

  const missionCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
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

  const philosophyVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4"
              variants={badgeVariants}
            >
              <Target size={16} />
              <span className="text-sm font-semibold">OUR STORY</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold text-secondary-800 mb-6"
              variants={itemVariants}
            >
              Engineering Excellence Since 2010
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-lg text-gray-600"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants}>
                APMS Engineering Pvt. Ltd. provides comprehensive Engineering Services 
                in Product Designing and Analysis for manufacturing industries. With over 
                10+ years of experience, we have developed expertise in identifying, 
                understanding, executing, and managing critical projects for our clients.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Our reliable services are the result of industrious observance of processes 
                and methodologies that have been tempered with time. Our Development Centers 
                ensure timely delivery of quality solutions.
              </motion.p>
              
              <motion.p 
                className="text-xl font-bold text-primary-600 italic"
                variants={philosophyVariants}
              >
                "FOR YOU, WITH YOU ALWAYS"
              </motion.p>
              
              <motion.p variants={itemVariants}>
                This core philosophy communicates our belief in providing quality services 
                and specific attention for our customers and employees.
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link to="/projects">
                  <Button 
                    variant="primary"
                    size="md"
                    icon={<BarChart3 size={18} />}
                  >
                    View Our Projects
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link to="/team">
                  <Button 
                    variant="secondary"
                    size="md"
                    icon={<Users size={18} />}
                  >
                    Meet Our Team
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 text-white"
            variants={missionCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
          >
            <motion.div 
              className="mb-8"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center mb-4"
                variants={itemVariants}
              >
                <Target size={24} className="mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </motion.div>
              <motion.p 
                className="mb-6 text-white/90"
                variants={itemVariants}
              >
                To deliver innovative engineering solutions that empower our clients 
                to achieve manufacturing excellence through advanced technology and 
                expert knowledge.
              </motion.p>
            </motion.div>
            
            <motion.div variants={containerVariants}>
              <motion.div 
                className="flex items-center mb-4"
                variants={itemVariants}
              >
                <Globe size={24} className="mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </motion.div>
              <motion.p 
                className="text-white/90"
                variants={itemVariants}
              >
                To be the most trusted engineering partner for manufacturing industries 
                globally, known for excellence, innovation, and reliability.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="mt-8 pt-8 border-t border-white/20"
              variants={itemVariants}
            >
              <Link to="/contact">
                <Button 
                  variant="white"
                  size="sm"
                  className="w-full"
                  icon={<Mail size={16} />}
                >
                  Start Partnership
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;