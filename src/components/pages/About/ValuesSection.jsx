import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const ValuesSection = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Commitment to delivering exceptional quality in every project.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared success.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: '⏰',
      title: 'Reliability',
      description: 'Consistent delivery of projects on time and within budget.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: '🌍',
      title: 'Global Standards',
      description: 'Adherence to international engineering standards.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: '❤️',
      title: 'Commitment',
      description: 'Dedicated support throughout the project lifecycle.',
      color: 'bg-pink-100 text-pink-600'
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

  const valueCardVariants = {
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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hover: {
      x: 10,
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
            <Heart size={16} />
            <span className="text-sm font-semibold">CORE VALUES</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-secondary-800 mb-4"
            variants={itemVariants}
          >
            Our Core Values
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            The principles that guide our work and define our company culture.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100 hover:border-primary-200"
              variants={valueCardVariants}
              whileHover="hover"
            >
              <motion.div 
                className={`${value.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                variants={iconVariants}
                whileHover="hover"
              >
                <span className="text-2xl">{value.icon}</span>
              </motion.div>
              
              <h3 className="text-xl font-bold text-secondary-800 mb-3">
                {value.title}
              </h3>
              
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="text-gray-600 mb-6"
            variants={itemVariants}
          >
            These values are embedded in everything we do, from project planning to delivery.
          </motion.p>
          
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link to="/contact">
              <Button 
                variant="ghost"
                icon={<ChevronRight size={16} />}
                iconPosition="right"
                className="text-primary-600 hover:text-primary-700"
              >
                Learn More About Our Culture
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;