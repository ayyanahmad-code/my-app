import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Mail } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve Traction Propulsion Systems, Rolling Stock, Heavy Machinery, Machine & Tools, Material Handling Equipment, Power and Consumer Industries.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple designs may take 2-4 weeks, while complex analysis projects can take 2-6 months.'
    },
    {
      question: 'Do you provide manufacturing support?',
      answer: 'Yes, we provide complete support including installation, commissioning, and validation of jigs, fixtures, and tooling.'
    },
    {
      question: 'What software tools do you use?',
      answer: 'We use SolidWorks, Siemens NX, AutoCAD, CATIA, ANSYS, PDMS, and other industry-standard engineering software.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment terms based on project milestones. Typically 30% advance, 40% on milestone completion, and 30% on project delivery.'
    },
    {
      question: 'Do you offer project maintenance support?',
      answer: 'Yes, we provide post-project support and maintenance services to ensure your engineering solutions continue to perform optimally.'
    }
  ];

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

  const faqCardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const qBadgeVariants = {
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
      transition: {
        duration: 0.3
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
            <MessageSquare size={16} />
            <span>FAQs</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-secondary-800 mb-4"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Find answers to common questions about our services and processes
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="card-hover"
              variants={faqCardVariants}
              whileHover="hover"
            >
              <div className="flex items-start space-x-3">
                <motion.div 
                  className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0"
                  variants={qBadgeVariants}
                  whileHover="hover"
                >
                  <span className="font-bold">Q</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-secondary-800 mb-3">
                    {faq.question}
                  </h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </div>
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
            Still have questions? We're here to help.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link to="/services">
                <Button 
                  variant="secondary"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  className="btn-secondary btn-icon"
                >
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover">
              <a href="mailto:support@apmsengineering.com">
                <Button 
                  variant="secondary"
                  icon={<Mail size={16} />}
                  className="btn-ghost text-primary-600 hover:text-primary-700"
                >
                  Email Your Question
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;