import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      className="fixed bottom-0 w-full py-4 text-center text-sm text-gray-600 dark:text-gray-400 
                dark:backdrop-blur-sm transition-colors duration-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div>
        Copyright 2024 <a 
          href="https://juz1.cn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 dark:text-blue-400 hover:text-blue-600 
                   dark:hover:text-blue-300 transition-colors"
        >
          Juzi
        </a> Made with ❤
      </div>
      <div>版本哈希:</div>
    </motion.footer>
  );
};