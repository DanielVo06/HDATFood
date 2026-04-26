import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, CreditCard, Banknote, Building2, ShoppingBag, MapPin } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

type PaymentMethod = 'cash' | 'visa' | 'bank';

export const CheckoutPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });
  const navigate = useNavigate();

  const paymentMethods = [
    {
      id: 'cash' as PaymentMethod,
      name: 'Tiền mặt',
      icon: Banknote,
      description: 'Thanh toán khi nhận hàng',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'visa' as PaymentMethod,
      name: 'Thẻ Visa/Master',
      icon: CreditCard,
      description: 'Thanh toán bằng thẻ quốc tế',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'bank' as PaymentMethod,
      name: 'Chuyển khoản',
      icon: Building2,
      description: 'Chuyển khoản ngân hàng',
      color: 'from-red-500 to-orange-500',
    },
  ];

  const handlePlaceOrder = () => {
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      toast.error('Vui lòng nhập đầy đủ thông tin giao hàng!', {
        duration: 3000,
        position: 'bottom-center',
      });
      return;
    }

    if (cart.length === 0) {
      toast.error('Giỏ hàng trống! Vui lòng thêm món ăn.', {
        duration: 3000,
        position: 'bottom-center',
      });
      return;
    }

    setShowOrderModal(true);
  };

  const confirmOrder = () => {
    const paymentName = paymentMethods.find(p => p.id === paymentMethod)?.name;
    toast.success(
      <div>
        <p className="font-bold">Đặt hàng thành công!</p>
        <p className="text-sm">Phương thức: {paymentName}</p>
        <p className="text-sm">Tổng tiền: {getTotalPrice().toLocaleString('vi-VN')}₫</p>
      </div>,
      {
        duration: 4000,
        position: 'bottom-center',
      }
    );
    
    clearCart();
    setShowOrderModal(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Giỏ hàng của bạn
          </h1>
          <p className="text-gray-600">
            {cart.length} món ăn • Tổng: {getTotalPrice().toLocaleString('vi-VN')}₫
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-12 rounded-xl shadow-lg text-center"
              >
                <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                <p className="text-2xl text-gray-600 mb-4">Giỏ hàng trống</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/menu')}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold"
                >
                  Đặt món ngay
                </motion.button>
              </motion.div>
            ) : (
              cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-4 rounded-xl shadow-lg flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <p className="text-xl font-bold text-red-500">
                      {item.price.toLocaleString('vi-VN')}₫
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="font-semibold text-gray-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success(`Đã xóa ${item.name} khỏi giỏ hàng`, {
                          duration: 2000,
                          position: 'bottom-center',
                        });
                      }}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg sticky top-4 space-y-6"
            >
              {/* Delivery Info */}
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                  Thông tin giao hàng
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    value={deliveryInfo.name}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                  <textarea
                    placeholder="Địa chỉ giao hàng"
                    value={deliveryInfo.address}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                  />
                  <textarea
                    placeholder="Ghi chú (không bắt buộc)"
                    value={deliveryInfo.note}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, note: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-4">
                  Phương thức thanh toán
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <motion.button
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === method.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color}`}>
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="font-semibold text-gray-800">
                            {method.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {method.description}
                          </p>
                        </div>
                        {paymentMethod === method.id && (
                          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính</span>
                  <span>{getTotalPrice().toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển</span>
                  <span className="text-green-500 font-semibold">Miễn phí</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t">
                  <span>Tổng cộng</span>
                  <span className="text-red-500">
                    {getTotalPrice().toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </div>

              {/* Place Order Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlaceOrder}
                disabled={cart.length === 0}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Đặt hàng ngay
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <AnimatePresence>
        {showOrderModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowOrderModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <span className="text-4xl">✓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Xác nhận đặt hàng
                </h2>
                <p className="text-gray-600 mb-6">
                  Bạn có chắc muốn đặt hàng với phương thức{' '}
                  <span className="font-semibold text-orange-500">
                    {paymentMethods.find(p => p.id === paymentMethod)?.name}
                  </span>
                  ?
                </p>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={confirmOrder}
                    className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold"
                  >
                    Xác nhận đặt hàng
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowOrderModal(false)}
                    className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
                  >
                    Hủy
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
