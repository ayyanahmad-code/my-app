import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Cpu, Phone, CheckCircle } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamStats = [
    {
      icon: <Users size={32} />,
      value: '50+',
      label: 'Engineering Experts',
      description: 'Highly experienced Mechanical Engineers'
    },
    {
      icon: <Award size={32} />,
      value: '10+',
      label: 'Years Experience',
      description: 'Working with leading OEMs'
    },
    {
      icon: <Clock size={32} />,
      value: '24/7',
      label: 'Support',
      description: 'Dedicated project lifecycle support'
    },
    {
      icon: <Cpu size={32} />,
      value: '500+',
      label: 'Projects',
      description: 'Successfully completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        duration: 0.3
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

  const ctaCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 80
      }
    }
  };

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
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
    <section className="py-20 bg-gray-50">
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
            <Users size={16} />
            <span className="text-sm font-semibold">OUR EXPERTISE</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-secondary-800 mb-4"
            variants={itemVariants}
          >
            Our Team & Capabilities
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our team comprises seasoned professionals with rich experience from 
            Core Manufacturing and Software Engineering.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamStats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
              variants={statCardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="text-primary-600 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                className="text-5xl font-bold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              
              <h3 className="text-xl font-bold text-secondary-800 mb-3">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white"
          variants={ctaCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Why Work With Our Team?</h3>
              <div className="space-y-4">
                {[
                  '10+ years average experience per engineer',
                  'Expertise in 50+ engineering software tools',
                  'Handled 500+ complex projects',
                  '99% client satisfaction rate'
                ].map((point, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center space-x-3"
                    variants={checkItemVariants}
                  >
                    <CheckCircle size={20} className="text-green-300" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="text-center">
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link to="/contact">
                  <Button 
                    variant="white"
                    size="lg"
                    icon={<Phone size={20} />}
                    className="w-full"
                  >
                    Connect With Our Team
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;