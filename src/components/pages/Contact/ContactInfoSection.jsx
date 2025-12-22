import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Numbers',
      details: ['+91-7987074614', '+91-9039836065'],
      color: 'bg-blue-100 text-blue-600',
      action: 'tel:+917987074614',
      badgeClass: 'badge badge-primary'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: ['support@apmsengineering.com', 'apmsegg.india@gmail.com'],
      color: 'bg-green-100 text-green-600',
      action: 'mailto:support@apmsengineering.com',
      badgeClass: 'badge badge-success'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Website',
      details: ['www.apmsengineering.com'],
      color: 'bg-purple-100 text-purple-600',
      action: '/',
      badgeClass: 'badge badge-accent'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
      color: 'bg-orange-100 text-orange-600',
      action: null,
      badgeClass: 'badge badge-warning'
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

  const cardVariants = {
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
      scale: 1.03,
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
      scale: 1.05,
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="badge badge-primary mb-4"
            variants={badgeVariants}
          >
            <MapPin size={16} />
            <span>CONTACT DETAILS</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-secondary-800 mb-4"
            variants={itemVariants}
          >
            Get in Touch With Us
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Multiple ways to connect with our engineering team
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index} 
              className="card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className={`${info.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                variants={iconVariants}
                whileHover="hover"
              >
                {info.icon}
              </motion.div>
              
              <h3 className="text-lg font-bold text-secondary-800 mb-3">
                {info.title}
              </h3>
              
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <motion.p 
                    key={idx} 
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {detail}
                  </motion.p>
                ))}
              </div>
              
              {info.action && (
                <motion.div variants={buttonVariants} whileHover="hover">
                  <a href={info.action}>
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="w-full text-primary-600 hover:text-primary-700 btn-ghost"
                    >
                      {info.title.includes('Phone') ? 'Call Now' : 
                       info.title.includes('Email') ? 'Send Email' : 
                       'Visit Website'}
                    </Button>
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;