import React from 'react';
import { Filter } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const FilterSection = ({ activeFilter, setActiveFilter, projects }) => {
  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'rolling-stock', label: 'Rolling Stock', count: projects.filter(p => p.category === 'rolling-stock').length },
    { id: 'power', label: 'Power Systems', count: projects.filter(p => p.category === 'power').length },
    { id: 'heavy', label: 'Heavy Machinery', count: projects.filter(p => p.category === 'heavy').length },
    { id: 'consumer', label: 'Consumer Goods', count: projects.filter(p => p.category === 'consumer').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const filterButtonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const countVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-4"
            variants={badgeVariants}
          >
            <Filter size={16} />
            <span className="text-sm font-semibold">FILTER PROJECTS</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-secondary-800 mb-4"
            variants={itemVariants}
          >
            Browse by Category
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore our projects categorized by industry and specialization
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.div
              key={filter.id}
              variants={filterButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={() => setActiveFilter(filter.id)}
                variant="ghost" // Changed to ghost variant which doesn't force text color
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:text-gray-900' // Added hover:text-gray-900
                }`}
              >
                <span>{filter.label}</span>
                <motion.span 
                  className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id 
                      ? 'bg-white/20 text-white' // Added text-white for active state
                      : 'bg-gray-100 text-gray-600 hover:text-gray-800' // Added hover state
                  }`}
                  variants={countVariants}
                  whileHover="hover"
                >
                  {filter.count}
                </motion.span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FilterSection;