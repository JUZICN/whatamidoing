import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, Timer } from 'lucide-react';
import { useStatusStore } from '../store/statusStore';
import { calculateDuration } from '../utils/time';
import { Footer } from './Footer';
import { ThemeToggle } from './ThemeToggle';

export const StatusDisplay = () => {
  const { status, updatedAt } = useStatusStore();
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const updateDuration = () => {
      if (updatedAt) {
        setDuration(calculateDuration(updatedAt));
      }
    };

    updateDuration();
    const interval = setInterval(updateDuration, 10000);
    return () => clearInterval(interval);
  }, [updatedAt]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
                    dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />
      <motion.main
        className="container mx-auto px-4 pt-20 pb-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-8"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="flex items-center space-x-4 text-3xl font-medium text-gray-800 dark:text-gray-100"
            whileHover={{ scale: 1.02 }}
            layout
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Activity className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {status}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {updatedAt && (
            <motion.div
              className="flex flex-col items-center space-y-4 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span>更新于: {updatedAt}</span>
              </motion.div>
              {duration && (
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Timer className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <span>持续时间: {duration}</span>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};