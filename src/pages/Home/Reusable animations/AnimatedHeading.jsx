import { motion } from "framer-motion";
import React from "react";

const AnimatedHeading = ({ children, className = "" }) => {
  return (
    <motion.h2
      className={`text-4xl font-bold mb-6 ${className}`}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedHeading;
