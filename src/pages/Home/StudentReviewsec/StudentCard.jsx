// StudentCard.jsx
import React from 'react';
import { motion } from "framer-motion";

const StudentCard = ({ student }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4,}}
      viewport={{ once: true }}
      className="px-4"
    >
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 h-full">
        <img
          src={student.image}
          alt={student.name}
          className="w-20 h-20 rounded-full mx-auto border-2 border-indigo-500 object-cover mb-4"
        />
        <h3 className="text-lg font-semibold text-center">{student.name}</h3>
        <p className="text-sm text-indigo-500 text-center">{student.profession}</p>
        <p className="mt-3 text-gray-600 text-sm italic text-center">“{student.quote}”</p>
      </div>
    </motion.div>
  );
};

export default StudentCard;
