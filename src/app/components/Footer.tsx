import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-green-400 bg-clip-text text-transparent mb-4">
              🍜 Món Ngon Việt
            </h3>
            <p className="text-gray-400 text-sm">
              Mang hương vị Việt Nam đến từng bữa ăn của bạn
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Thực đơn
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@monngonviet.vn</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Món Ngon Việt. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};
