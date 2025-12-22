import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ZoomIn } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const ProjectsGrid = ({ filteredProjects, activeFilter, setActiveFilter }) => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const zoomIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 150
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const featureBadgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.2
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
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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

  const statCardVariants = {
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

  return (
    <section id="projects-grid" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  variants={overlayVariants}
                >
                  <motion.div variants={zoomIconVariants}>
                    <ZoomIn className="text-white" size={32} />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="absolute top-4 right-4"
                  variants={badgeVariants}
                >
                  <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                    project.category === 'rolling-stock' ? 'bg-blue-100 text-blue-700' :
                    project.category === 'power' ? 'bg-green-100 text-green-700' :
                    project.category === 'heavy' ? 'bg-orange-100 text-orange-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {project.category.replace('-', ' ').toUpperCase()}
                  </span>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                      variants={featureBadgeVariants}
                      whileHover="hover"
                      custom={idx}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Client</div>
                    <div className="font-medium text-gray-800">{project.client}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium text-gray-800">{project.duration}</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * idx }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button 
                      variant="ghost"
                      size="sm"
                      icon={<ExternalLink size={16} />}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Case Study
                    </Button>
                  </motion.div>
                  <span className="text-sm text-gray-500">
                    Completed {project.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            variants={emptyStateVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">No Projects Found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We don't have any projects in this category yet. Try selecting a different filter or check back soon for new projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                onClick={() => setActiveFilter('all')}
              >
                View All Projects
              </Button>
              <Link to="/contact">
                <Button 
                  variant="secondary"
                >
                  Discuss New Project
                </Button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* Project Stats */}
        {filteredProjects.length > 0 && (
          <motion.div 
            className="mt-10 pt-12 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Project Statistics</h3>
              <p className="text-gray-600">Summary of filtered projects</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 text-center"
                variants={statCardVariants}
                whileHover="hover"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{filteredProjects.length}</div>
                <div className="text-gray-700">Projects</div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 text-center"
                variants={statCardVariants}
                whileHover="hover"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {filteredProjects.reduce((sum, p) => {
                    const months = parseInt(p.duration);
                    return sum + (isNaN(months) ? 0 : months);
                  }, 0)}
                </div>
                <div className="text-gray-700">Total Months</div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 text-center"
                variants={statCardVariants}
                whileHover="hover"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {[...new Set(filteredProjects.flatMap(p => p.technologies))].length}
                </div>
                <div className="text-gray-700">Technologies</div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 text-center"
                variants={statCardVariants}
                whileHover="hover"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {[...new Set(filteredProjects.map(p => p.client))].length}
                </div>
                <div className="text-gray-700">Unique Clients</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;