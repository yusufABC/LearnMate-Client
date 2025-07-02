import { motion } from "framer-motion";
import React from "react";

const AnimatedWrapper = ({ children, index = 0, className = "" }) => {
  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow-md ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
