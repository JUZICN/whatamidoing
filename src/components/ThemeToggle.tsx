import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export const ThemeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <motion.button
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-100 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </motion.div>
    </motion.button>
  );
};