import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-green-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="text-9xl mb-6"
        >
          🍜
        </motion.div>
        
        <h1 className="text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Không tìm thấy trang
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đi.
        </p>
        
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
          >
            <Home className="w-5 h-5" />
            <span>Về trang chủ</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};
