import React from "react";
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    "CG Power",
    "TD Power Systems",
    "TMEIC",
    "Suraksha Smart City",
    "HPCL",
    "BHEL"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* ===== Title ===== */}
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-3">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-600">
            Partnered with leading companies across industries
          </p>
        </motion.div>

        {/* ===== Clients Grid ===== */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.06,
                y: -6
              }}
              transition={{ duration: 0.25 }}
              className="
                w-full h-20
                bg-gray-50
                rounded-xl
                flex items-center justify-center
                cursor-pointer
                border border-transparent
                shadow-sm
                transition-all duration-300 ease-out
                hover:bg-white
                hover:border-blue-500
                hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]
              "
            >
              <span className="font-semibold text-gray-700 text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ClientsSection;
