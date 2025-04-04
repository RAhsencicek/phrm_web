import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PageTransition.css';

function PageTransition({ children }) {
  return (
    <>
      <motion.div
        className="transition-slide"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default PageTransition; 