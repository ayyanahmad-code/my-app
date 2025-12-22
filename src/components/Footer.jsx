// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight 
} from 'lucide-react';
import Image from "../Images/logo-2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Mechanical Analysis',
    'Product Design',
    'Reverse Engineering',
    'CAD Customization',
    'Jigs & Fixtures',
    'Assembly Modeling',
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const softwareTools = [
    'CATIA',
    'SolidWorks',
    'PDMS',
    'Siemens NX',
    'AutoCAD',
    'SP 3D',
    'PDS',
    'CFD',
    'FEA'
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const toolVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 45, scale: 1.2, transition: { duration: 0.3 } }
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <footer className="bg-secondary text-white overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Footer */}
        <div className="py-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-52 h-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="items-center justify-center">
                    <motion.img 
                      src={Image} 
                      alt="APMS Engineering Logo" 
                      className="max-w-full max-h-full object-contain"
                      whileHover={{ rotate: 2 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-xl">A</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              <motion.p 
                className="text-black mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Providing innovative engineering solutions with precision, 
                expertise, and cutting-edge technology for over a decade.
              </motion.p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={link.path}
                      className="flex items-center text-black hover:text-primary transition-colors group"
                    >
                      <motion.div
                        variants={iconVariants}
                        initial="rest"
                        whileHover="hover"
                        className="mr-2"
                      >
                        <ArrowRight size={12} />
                      </motion.div>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Link 
                      to={`/services#${service.toLowerCase().replace(' ', '-')}`}
                      className="text-black hover:text-primary transition-colors block py-1"
                    >
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="ml-10 text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div animate={pulseAnimation}>
                    <MapPin size={18} className="text-primary mt-1" />
                  </motion.div>
                  <div>
                    <p className="text-black"> Plot No. 5,6 T-1 Nishaan Tower, Punjabi Baag, Raisen Road, Bhopal, Madhya Pradesh 462023</p>
                    <p className="text-black">India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone size={18} className="text-primary" />
                  <div>
                    <a href="tel:+917987074614" className="text-black hover:text-primary transition-colors">
                      +91-7987074614
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail size={18} className="text-primary" />
                  <a 
                    href="mailto:support@apmsengineering.com"
                    className="text-black hover:text-primary transition-colors"
                  >
                    support@apmsengineering.com
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Clock size={18} className="text-primary mt-1" />
                  <div>
                    <p className="text-black">Mon - Fri: 9:00 - 18:00</p>
                    <p className="text-black">Sat: 10:00 - 14:00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.hr 
          className="border-white/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
  <hr/>
        {/* Bottom Bar */}
        <motion.div 
          className="py-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
         
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-black text-sm mb-4 md:mb-0"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} APMS Engineering Pvt. Ltd. All rights reserved.
            </motion.p>
          <motion.div 
          className="text-sm text-black"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="https://www.technovani.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Developed by TechnoVani Pvt.Ltd
          </a>
        </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100 
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;