import React from 'react';
import { User, Mail, Phone, Building, Send, CheckCircle } from 'lucide-react';
import Button from '../../buttons/Button';
import { motion } from 'framer-motion';

const ContactFormSection = ({ submitted, setSubmitted, formData, setFormData }) => {
  const services = [
    'Mechanical Analysis',
    'Product Design',
    'Reverse Engineering',
    'CAD Customization',
    'Jigs & Fixtures',
    'Assembly Modeling',
    'Other'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="border border-gray-300 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Badge */}
      <motion.div
        className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-5 py-2 mb-8"
        variants={itemVariants}
      >
        <Send size={18} />
        <span className="text-sm font-semibold tracking-wide">SEND MESSAGE</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-secondary-800 mb-10"
        variants={itemVariants}
      >
        Send Us a Message
      </motion.h2>

      {submitted ? (
        <motion.div
          className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-green-600" />
          </div>

          <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
          <p className="text-lg text-gray-600 mb-8">
            Your message has been sent successfully.  
            Our team will contact you within 24 hours.
          </p>

          <Button
            onClick={() => setSubmitted(false)}
            variant="gradient"
            icon={<Send size={20} />}
            className="px-8 py-4 text-lg"
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          variants={containerVariants}
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <label className="block text-base font-semibold mb-3">
                <User size={16} className="inline mr-2" />
                Full Name *
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-5 py-4 text-lg rounded-xl border focus:ring-2 focus:ring-primary-500"
                whileFocus="focus"
                variants={inputVariants}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-base font-semibold mb-3">
                <Mail size={16} className="inline mr-2" />
                Email Address *
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="w-full px-5 py-4 text-lg rounded-xl border focus:ring-2 focus:ring-primary-500"
                whileFocus="focus"
                variants={inputVariants}
              />
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <label className="block text-base font-semibold mb-3">
                <Phone size={16} className="inline mr-2" />
                Phone Number
              </label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full px-5 py-4 text-lg rounded-xl border focus:ring-2 focus:ring-primary-500"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-base font-semibold mb-3">
                <Building size={16} className="inline mr-2" />
                Company Name
              </label>
              <motion.input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full px-5 py-4 text-lg rounded-xl border focus:ring-2 focus:ring-primary-500"
              />
            </motion.div>
          </div>

          {/* Service */}
          <motion.div variants={itemVariants}>
            <label className="block text-base font-semibold mb-3">
              Service Interested In
            </label>
            <motion.select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-5 py-4 text-lg rounded-xl border bg-white focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select a service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </motion.select>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label className="block text-base font-semibold mb-3">
              Project Details / Message *
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              placeholder="Tell us about your project requirements..."
              className="w-full px-5 py-4 text-lg rounded-xl border focus:ring-2 focus:ring-primary-500"
            />
          </motion.div>

          {/* Button */}
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              icon={<Send size={22} />}
              iconPosition="right"
              className="w-full py-5 text-lg"
            >
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default ContactFormSection;
