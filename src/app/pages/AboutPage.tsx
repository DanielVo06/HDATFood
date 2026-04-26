import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Khách hàng', value: '10,000+' },
  { icon: Award, label: 'Món ăn', value: '100+' },
  { icon: Clock, label: 'Năm kinh nghiệm', value: '5+' },
  { icon: Heart, label: 'Đánh giá 5 sao', value: '95%' },
];

const values = [
  {
    title: 'Chất lượng đảm bảo',
    description: 'Chúng tôi cam kết mang đến những món ăn tươi ngon, an toàn vệ sinh thực phẩm',
    icon: '✅',
  },
  {
    title: 'Phục vụ tận tâm',
    description: 'Đội ngũ nhân viên chuyên nghiệp, thân thiện luôn sẵn sàng phục vụ quý khách',
    icon: '🤝',
  },
  {
    title: 'Giao hàng nhanh chóng',
    description: 'Hệ thống giao hàng chuyên nghiệp, đảm bảo món ăn đến tay khách hàng nóng sốt',
    icon: '🚀',
  },
  {
    title: 'Giá cả hợp lý',
    description: 'Mức giá phải chăng, phù hợp với túi tiền của mọi người dân Việt Nam',
    icon: '💰',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-green-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 bg-clip-text text-transparent">
                Về Món Ngon Việt
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi tự hào là đơn vị tiên phong trong việc mang ẩm thực Việt Nam đến gần hơn với mọi người. 
              Với hơn 5 năm kinh nghiệm, chúng tôi cam kết cung cấp những món ăn chất lượng nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bảo tồn và phát huy hương vị ẩm thực truyền thống Việt Nam, 
              đồng thời mang đến trải nghiệm đặt hàng tiện lợi, hiện đại cho khách hàng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Giá trị cốt lõi
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Câu chuyện của chúng tôi
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Món Ngon Việt bắt đầu từ niềm đam mê ẩm thực Việt Nam của những người sáng lập. 
              Chúng tôi nhận thấy rằng trong cuộc sống bận rộn hiện đại, nhiều người không có 
              thời gian để thưởng thức những món ăn truyền thống ngay tại nhà.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Vì vậy, chúng tôi đã tạo ra một nền tảng giúp kết nối những món ăn ngon nhất 
              với người tiêu dùng một cách nhanh chóng và tiện lợi nhất. Từ những ngày đầu 
              chỉ với vài món ăn đơn giản, đến nay chúng tôi đã phát triển thành một 
              trong những nền tảng đặt món ăn uy tín nhất.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mỗi món ăn đều được chúng tôi chọn lọc kỹ càng, đảm bảo giữ nguyên hương vị 
              truyền thống trong khi vẫn đáp ứng tiêu chuẩn vệ sinh an toàn thực phẩm cao nhất.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
