import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Lock, ArrowLeft } from 'lucide-react';
import { useStatusStore } from '../store/statusStore';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const ADMIN_PASSWORD = '123456';

export const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const { updateStatus } = useStatusStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('密码错误');
    }
  };

  const handleUpdateStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStatus.trim()) {
      updateStatus(newStatus.trim());
      setNewStatus('');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="login"
            className="min-h-screen flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              onSubmit={handleLogin}
              className="w-full max-w-md space-y-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <motion.div 
                className="flex items-center justify-center space-x-2 text-gray-800 dark:text-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                <Lock className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <h1 className="text-2xl font-medium">管理员登录</h1>
              </motion.div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-800 
                         text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700
                         focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                         transition-colors"
                placeholder="请输入密码"
              />
              <motion.button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 
                         transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                登录
              </motion.button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.div
            key="admin"
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex justify-between items-center text-gray-800 dark:text-gray-100">
                <h1 className="text-2xl font-medium">状态管理</h1>
                <motion.button
                  onClick={() => navigate('/')}
                  className="flex items-center space-x-2 text-blue-500 dark:text-blue-400
                           hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>返回前台</span>
                </motion.button>
              </div>
              
              <motion.form
                onSubmit={handleUpdateStatus}
                className="space-y-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <textarea
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-800 
                           text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700
                           focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                           resize-none h-32 transition-colors"
                  placeholder="输入新状态..."
                />
                <motion.button
                  type="submit"
                  className="flex items-center justify-center space-x-2 w-full bg-blue-500 
                           text-white py-2 rounded hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span>更新状态</span>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};