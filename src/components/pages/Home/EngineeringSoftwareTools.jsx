import React from "react";
import { motion } from "framer-motion";

const EngineeringSoftwareTools = () => {
  const tools = ["CATIA", "PDMS", "SIEMENS NX", "AutoCAD", "ANSYS"];

  const competencies = [
    { title: "Discrete Industries", desc: "Unigraphics, SolidWorks, AutoCAD" },
    { title: "Continuous Industries", desc: "SP 3D, PDS, PDMS" }
  ];

  const analyses = [
    "Structural Analysis",
    "Modal Analysis",
    "Thermal Analysis",
    "CFD",
    "FEA",
    "FMEA"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "backOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="mt-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* ===== Title ===== */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Engineering Software Tools Proficiency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proficient in state-of-the-art technologies available in the market
          </p>
        </motion.div>

        {/* ===== Tools Grid ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.06 }}
              transition={{ duration: 0.25 }}
              className="
                bg-gray-50 p-6 rounded-xl
                text-center cursor-pointer
                border border-transparent
                shadow-md
                transition-all duration-300 ease-out
                hover:bg-white
                hover:border-blue-500
                hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]
              "
            >
              <div className="text-xl font-bold text-gray-800">
                {tool}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Core Competencies ===== */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {competencies.map((comp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="
                bg-blue-50 p-6 rounded-xl
                border border-transparent
                shadow-md
                transition-all duration-300
                hover:bg-white
                hover:border-blue-500
                hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]
              "
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Core Competencies
              </h3>
              <h4 className="font-semibold text-gray-700">
                {comp.title}
              </h4>
              <p className="text-gray-600 mt-1">
                {comp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Analytical Expertise ===== */}
        <motion.div
          className="mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Analytical Expertise
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {analyses.map((item, idx) => (
              <motion.span
                key={idx}
                variants={badgeVariants}
                whileHover={{ scale: 1.15 }}
                className="
                  px-5 py-2 rounded-full
                  bg-blue-600 text-white text-sm font-medium
                  cursor-pointer
                  border border-transparent
                  shadow-md
                  transition-all duration-300
                  hover:bg-blue-700
                  hover:border-blue-400
                  hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]
                "
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EngineeringSoftwareTools;
