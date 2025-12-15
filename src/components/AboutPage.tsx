import { motion } from 'motion/react';
import { Target, Eye, Users, Cloud, Droplets, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#0B3C89] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tentang MeteoTrip
          </h1>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Platform inovatif yang menghubungkan data meteorologi dengan pengalaman wisata yang lebih baik
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-[#E9EEF5] rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#2E80FF] to-[#72BDFD] rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[#0B3C89] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Visi Kami
            </h2>
            <p className="text-[#475569] leading-relaxed">
              Menjadi platform digital terdepan yang mengintegrasikan data meteorologi dengan industri pariwisata, 
              membantu wisatawan merencanakan perjalanan yang lebih aman, nyaman, dan berkesan berdasarkan kondisi cuaca yang akurat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-[#E9EEF5] rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#0B3C89] to-[#2E80FF] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[#0B3C89] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Misi Kami
            </h2>
            <p className="text-[#475569] leading-relaxed">
              Menyediakan informasi cuaca yang akurat dan mudah dipahami, memberikan rekomendasi destinasi wisata berbasis data, 
              serta mendukung pengembangan pariwisata berkelanjutan melalui pemanfaatan teknologi meteorologi.
            </p>
          </motion.div>
        </div>

        {/* Journey Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-[#0B3C89] to-[#2E80FF] rounded-2xl p-12 mb-16 text-white relative overflow-hidden"
        >
          {/* Animated Weather Icons Background */}
          <motion.div
            className="absolute top-10 right-10 opacity-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-32 h-32" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-10 opacity-10"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Droplets className="w-24 h-24" />
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-white text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Perjalanan Data ke Wisata
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30"
                >
                  <Cloud className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Pengumpulan Data
                </h3>
                <p className="text-white/80 text-sm">
                  Data meteorologi real-time dari berbagai stasiun cuaca di Bandung
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30"
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Analisis & Prediksi
                </h3>
                <p className="text-white/80 text-sm">
                  Pemrosesan data dan analisis pola cuaca untuk rekomendasi akurat
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30"
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Rekomendasi Wisata
                </h3>
                <p className="text-white/80 text-sm">
                  Saran destinasi terbaik berdasarkan kondisi cuaca saat ini
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team & Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-12 shadow-xl border border-[#B4D4FF]/30 text-center"
        >
          <h2 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tim & Kemitraan
          </h2>
          
          <p className="text-[#475569] mb-8 max-w-3xl mx-auto">
            MeteoTrip dikembangkan oleh tim ahli meteorologi dan teknologi dari Institut Teknologi Bandung (ITB), 
            dengan komitmen untuk memberikan layanan terbaik dalam integrasi data cuaca dan pariwisata.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 bg-gradient-to-br from-[#E9EEF5] to-white rounded-xl flex items-center justify-center border-2 border-[#B4D4FF] shadow-lg"
            >
              <div className="text-[#0B3C89] text-center">
                <Users className="w-12 h-12 mx-auto mb-2" />
                <div className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Tim MeteoTrip</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 bg-gradient-to-br from-[#2E80FF]/10 to-[#72BDFD]/10 rounded-xl flex items-center justify-center border-2 border-[#2E80FF]/30 shadow-lg"
            >
              <div className="text-[#0B3C89] text-center">
                <Cloud className="w-12 h-12 mx-auto mb-2" />
                <div className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>ITB Meteorology</div>
              </div>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-[#E9EEF5]">
            <p className="text-[#475569] text-sm italic" style={{ fontFamily: 'Nunito, sans-serif' }}>
              "Menghubungkan sains meteorologi dengan pengalaman wisata yang lebih baik untuk semua"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
