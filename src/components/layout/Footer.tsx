import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="fixed bottom-0 w-full py-4 text-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div>
        Copyright 2024 <a href="https://juz1.cn" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">Juzi</a>
      </div>
      <div>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 transition-colors">鄂ICP备2024068469号-1</a>
      </div>
    </motion.footer>
  );
};