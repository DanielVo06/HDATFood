import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  description,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category });
    toast.success(`Đã thêm ${name} vào giỏ hàng!`, {
      duration: 2000,
      position: 'bottom-center',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-orange-500 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}
        
        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-red-500">
              {price.toLocaleString('vi-VN')}₫
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="p-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-shadow"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
