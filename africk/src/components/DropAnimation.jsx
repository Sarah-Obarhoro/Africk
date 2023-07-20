import React from 'react';
import { motion } from 'framer-motion';

const DropAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -1000 }} // Initial position above the viewport
      animate={{ y: 0 }} // Final position at the top of the viewport
      transition={{ type: 'spring', damping: 15, stiffness: 200 }} // Adjust these values for desired animation effect
    >
      {children}
    </motion.div>
  );
};

export default DropAnimation;
