import { motion } from "motion/react";
import { Cloud, CloudRain, Sun } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1649003327767-d1d8f04344e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2t5JTIwY2xvdWRzJTIwd2VhdGhlcnxlbnwxfHx8fDE3NjE3MTU1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Blue sky with clouds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C89]/80 via-[#2E80FF]/60 to-[#72BDFD]/40" />
      </div>

      {/* Animated Weather Icons */}
      <motion.div
        className="absolute top-20 left-[10%]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Cloud className="w-16 h-16 text-white/40" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[15%]"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <CloudRain className="w-12 h-12 text-white/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[20%]"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sun className="w-20 h-20 text-[#FFD700]/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] flex items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Plan Your Trip Smarter with Weather Insights
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/90 text-xl mb-8 max-w-2xl">
            Jelajahi Bandung dengan panduan cuaca terpercaya. Temukan destinasi wisata terbaik berdasarkan kondisi meteorologi real-time dan prediksi akurat.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={onExplore}
            className="bg-gradient-to-r from-[#72BDFD] to-[#2E80FF] text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-[#72BDFD]/50 transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explore MeteoTripppp
          </motion.button>

          {/* Weather Stats Quick View */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-[#72BDFD] text-2xl mb-1">25°C</div>
              <div className="text-white/80 text-sm">Suhu Rata-rata</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-[#72BDFD] text-2xl mb-1">200mm</div>
              <div className="text-white/80 text-sm">Curah Hujan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-[#72BDFD] text-2xl mb-1">80%</div>
              <div className="text-white/80 text-sm">Kelembaban</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
