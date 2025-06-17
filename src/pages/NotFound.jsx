import React from 'react';

import { motion } from 'framer-motion';
import { Ghost } from 'lucide-react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
      
        <div className="flex justify-center">
          <Ghost size={60} className="text-white animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-4 mb-2">Oops! Page not found</h1>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. But don’t worry, you can go back to safety.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition"
        >
          Go Back Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10"
      >
     <img
  src="https://i.ibb.co/hR5y5p9F/404-error-with-tired-person-concept-illustration.png"
  alt="404 Not Found"
  className="max-w-md w-full"
/>
      </motion.div>
    </div>
  );
};

export default NotFound;
