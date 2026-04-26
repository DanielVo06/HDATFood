import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FoodCard } from '@/app/components/FoodCard';

const categories = [
  'Tất cả',
  'Thức ăn nhanh',
  'Ăn vặt',
  'Món chính',
  'Tráng miệng',
  'Thức uống',
];

const menuItems = [
  // Thức ăn nhanh
  { id: '1', name: 'Bánh Mì Thịt Nguội', price: 25000, image: 'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYmFuaCUyMG1pJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzY5NDg0Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức ăn nhanh', description: 'Bánh mì giòn tan, nhân thịt thơm ngon' },
  { id: '2', name: 'Bánh Mì Pate', price: 20000, image: 'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYmFuaCUyMG1pJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzY5NDg0Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức ăn nhanh', description: 'Bánh mì pate truyền thống' },
  { id: '3', name: 'Bánh Mì Xíu Mại', price: 30000, image: 'https://images.unsplash.com/photo-1599719455360-ff0be7c4dd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYmFuaCUyMG1pJTIwc2FuZHdpY2h8ZW58MXx8fHwxNzY5NDg0Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức ăn nhanh', description: 'Bánh mì với xíu mại đậm đà' },
  
  // Ăn vặt
  { id: '4', name: 'Gỏi Cuốn Tôm Thịt', price: 35000, image: 'https://images.unsplash.com/photo-1656945843375-207bb6e47750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzY5NTEzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Ăn vặt', description: 'Gỏi cuốn tươi mát với tôm và thịt' },
  { id: '5', name: 'Chả Giò Rế', price: 40000, image: 'https://images.unsplash.com/photo-1656945843375-207bb6e47750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzY5NTEzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Ăn vặt', description: 'Chả giò giòn rụm, nhân đầy đặn' },
  { id: '6', name: 'Nem Nướng Nha Trang', price: 45000, image: 'https://images.unsplash.com/photo-1656945843375-207bb6e47750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3ByaW5nJTIwcm9sbHN8ZW58MXx8fHwxNzY5NTEzNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Ăn vặt', description: 'Nem nướng thơm lừng đặc sản' },
  
  // Món chính
  { id: '7', name: 'Phở Bò Đặc Biệt', price: 55000, image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwc291cHxlbnwxfHx8fDE3Njk1MTM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Món chính', description: 'Phở bò nước dùng đậm đà truyền thống' },
  { id: '8', name: 'Phở Gà', price: 50000, image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwc291cHxlbnwxfHx8fDE3Njk1MTM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Món chính', description: 'Phở gà thanh mát, bổ dưỡng' },
  { id: '9', name: 'Cơm Tấm Sườn Bì', price: 45000, image: 'https://images.unsplash.com/photo-1707535347953-6cf5a129d55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29tJTIwdGFtJTIwcmljZXxlbnwxfHx8fDE3Njk1MTM3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Món chính', description: 'Cơm tấm sườn nướng thơm phức' },
  { id: '10', name: 'Bún Bò Huế', price: 50000, image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwc291cHxlbnwxfHx8fDE3Njk1MTM3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Món chính', description: 'Bún bò Huế cay nồng đặc trưng' },
  { id: '11', name: 'Bún Chả Hà Nội', price: 48000, image: 'https://images.unsplash.com/photo-1707535347953-6cf5a129d55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29tJTIwdGFtJTIwcmljZXxlbnwxfHx8fDE3Njk1MTM3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Món chính', description: 'Bún chả Hà Nội chính gốc' },
  
  // Tráng miệng
  { id: '12', name: 'Chè Ba Màu', price: 22000, image: 'https://images.unsplash.com/photo-1586727579295-62136fbb6082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZGVzc2VydHxlbnwxfHx8fDE3Njk1MTM3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Tráng miệng', description: 'Chè ba màu mát lạnh ngọt ngào' },
  { id: '13', name: 'Chè Đậu Xanh', price: 18000, image: 'https://images.unsplash.com/photo-1586727579295-62136fbb6082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZGVzc2VydHxlbnwxfHx8fDE3Njk1MTM3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Tráng miệng', description: 'Chè đậu xanh béo ngậy' },
  { id: '14', name: 'Chè Thái', price: 25000, image: 'https://images.unsplash.com/photo-1586727579295-62136fbb6082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZGVzc2VydHxlbnwxfHx8fDE3Njk1MTM3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Tráng miệng', description: 'Chè thái nhiều hoa quả tươi mát' },
  
  // Thức uống
  { id: '15', name: 'Cà Phê Sữa Đá', price: 20000, image: 'https://images.unsplash.com/photo-1671014594641-262cc4b9a16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2OTUxMzcxMHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức uống', description: 'Cà phê phin truyền thống Việt Nam' },
  { id: '16', name: 'Cà Phê Đen Đá', price: 18000, image: 'https://images.unsplash.com/photo-1671014594641-262cc4b9a16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2OTUxMzcxMHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức uống', description: 'Cà phê đen đậm vị' },
  { id: '17', name: 'Trà Đào Cam Sả', price: 28000, image: 'https://images.unsplash.com/photo-1671014594641-262cc4b9a16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2OTUxMzcxMHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức uống', description: 'Trà trái cây tươi mát' },
  { id: '18', name: 'Sinh Tố Bơ', price: 30000, image: 'https://images.unsplash.com/photo-1671014594641-262cc4b9a16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY29mZmVlfGVufDF8fHx8MTc2OTUxMzcxMHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Thức uống', description: 'Sinh tố bơ béo ngậy' },
];

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const filteredItems =
    selectedCategory === 'Tất cả'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Thực đơn của chúng tôi
          </h1>
          <p className="text-gray-600 text-lg">
            Khám phá hương vị đặc sắc từ khắp ba miền Việt Nam
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 overflow-x-auto"
        >
          <div className="flex space-x-3 pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Items Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 mb-6"
        >
          Hiển thị {filteredItems.length} món ăn
        </motion.p>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <FoodCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-gray-600">
              Không tìm thấy món ăn nào trong danh mục này
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
