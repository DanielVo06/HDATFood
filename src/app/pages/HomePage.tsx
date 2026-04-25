import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Truck, Clock, Award } from 'lucide-react';
import { FoodCard } from '@/app/components/FoodCard';

const featuredDishes = [
  {
    id: '1',
    name: 'Phở Bò Đặc Biệt',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwc291cHxlbnwxfHx8fDE3Njk1MTM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Món chính',
    description: 'Phở bò truyền thống với nước dùng đậm đà',
  },
  {
    id: '2',
    name: 'Bánh Mì Thịt Nguội',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYmFuaCUyMG1pJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzY5NDg0Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Thức ăn nhanh',
    description: 'Bánh mì giòn tan với nhân thịt thơm ngon',
  },
  {
    id: '3',
    name: 'Gỏi Cuốn Tôm Thịt',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1656945843375-207bb6e47750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzY5NTEzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Ăn vặt',
    description: 'Gỏi cuốn tươi ngon với tôm và thịt',
  },
  {
    id: '4',
    name: 'Cà Phê Sữa Đá',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1671014594641-262cc4b9a16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2OTUxMzcxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Thức uống',
    description: 'Cà phê phin truyền thống Việt Nam',
  },
];

const features = [
  {
    icon: Truck,
    title: 'Giao hàng nhanh',
    description: 'Giao hàng trong 30-45 phút',
  },
  {
    icon: Clock,
    title: 'Đặt hàng 24/7',
    description: 'Phục vụ mọi lúc mọi nơi',
  },
  {
    icon: Award,
    title: 'Chất lượng đảm bảo',
    description: 'Món ăn tươi ngon, an toàn',
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-green-50 py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 bg-clip-text text-transparent">
              Hương Vị Việt Nam
            </span>
            <br />
            <span className="text-gray-800">Đến Tận Nhà Bạn</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Khám phá ẩm thực Việt Nam đa dạng với hơn 100+ món ăn ngon, giao hàng nhanh chóng và tiện lợi
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
              >
                <span>Đặt món ngay</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🍜</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20">🥢</div>
        <div className="absolute top-1/2 right-20 text-5xl opacity-20">☕</div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Món ăn nổi bật
            </h2>
            <p className="text-gray-600 text-lg">
              Những món ăn được yêu thích nhất tại Món Ngon Việt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FoodCard {...dish} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Xem thêm món ăn
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
