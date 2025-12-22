import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Cpu, 
  Layers, 
  Settings, 
  RefreshCw, 
  Palette, 
  Grid, 
  Package 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Cpu size={32} />,
      title: 'Mechanical Analysis Services',
      description: 'Optimize mechanical analysis capabilities with conventional and advanced numerical simulations including FEA, CFD, and multi-body dynamic analysis.',
      link: '/services#mechanical-analysis',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Layers size={32} />,
      title: 'Product Design Services',
      description: 'End-to-end design from concept to production drawing with iterative design process and surface modeling.',
      link: '/services#product-design',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Reverse Engineering',
      description: 'Convert physical models or images to accurate digital models using SolidWorks with precision.',
      link: '/services#reverse-engineering',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Settings size={32} />,
      title: 'CAD Customization',
      description: 'Automate repetitive tasks by customizing CAD software for individual product lines.',
      link: '/services#cad-customization',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const additionalServices = [
    { icon: <Palette size={24} />, title: 'Surface Modeling / Aesthetic Design', desc: 'Improve styling and appearance' },
    { icon: <Grid size={24} />, title: '2D to 3D Conversion', desc: 'Convert engineering drawings to 3D models' },
    { icon: <Package size={24} />, title: 'Jigs, Fixtures & Tooling', desc: 'Design, manufacturing and validation' }
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
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
        ease: "backOut"
      }
    }
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }
    }
  };

  return (
    <section className="py-10 section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <motion.div 
            className="badge badge-primary mb-4"
            variants={badgeVariants}
          >
            <BarChart3 size={16} />
            <span>ENGINEERING SERVICES</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide reliable engineering services through industrious observance of processes 
            and methodology tempered with time.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index} 
              className="card-hover group"
            >
              <motion.div 
                className="mb-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center text-blue-600 font-semibold group-hover:text-red-500 transition-colors"
                whileHover="hover"
              >
                Learn More
                <motion.span 
                  variants={arrowVariants}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.span>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div 
          className="mt-12 grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {additionalServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="card bg-gray-50 hover:bg-blue-600 hover:text-white group transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-blue-600 group-hover:text-white mb-4"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h4 className="font-bold text-gray-800 group-hover:text-white mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-200">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;