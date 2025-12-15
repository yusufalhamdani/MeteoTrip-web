import { motion } from 'motion/react';
import { CloudRain, Calendar, MapPin } from 'lucide-react';

const features = [
  {
    icon: CloudRain,
    title: 'Weather Insights',
    description: 'Peta curah hujan interaktif dengan visualisasi data meteorologi real-time untuk membantu perencanaan perjalanan Anda.',
    color: 'from-[#2E80FF] to-[#72BDFD]',
  },
  {
    icon: Calendar,
    title: 'Best Time to Travel',
    description: 'Kalender musiman dinamis yang menampilkan waktu ideal untuk berkunjung ke setiap destinasi wisata di Bandung.',
    color: 'from-[#0B3C89] to-[#2E80FF]',
  },
  {
    icon: MapPin,
    title: 'Destination Recommendation',
    description: 'Rekomendasi wisata indoor dan outdoor yang disesuaikan dengan kondisi cuaca saat ini dan prediksi jangka pendek.',
    color: 'from-[#72BDFD] to-[#B4D4FF]',
  },
];

export function FeatureCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0B3C89] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Fitur Unggulan MeteoTrip
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Platform terpadu yang menghubungkan data cuaca dengan pengalaman wisata yang lebih baik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px rgba(46, 128, 255, 0.2)',
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-white to-[#E9EEF5] rounded-2xl p-8 border border-[#B4D4FF]/30 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 
                  className="text-[#0B3C89] mb-3 group-hover:text-[#2E80FF] transition-colors duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.title}
                </h3>
                
                <p className="text-[#475569] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
