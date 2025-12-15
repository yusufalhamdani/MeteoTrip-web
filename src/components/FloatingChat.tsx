import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Cloud } from 'lucide-react';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#B4D4FF]/30 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B3C89] to-[#2E80FF] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>MeteoTrip Assistant</div>
                    <div className="text-xs text-white/80">Online</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-4 h-64 overflow-y-auto bg-gradient-to-b from-[#E9EEF5]/30 to-white">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2E80FF] to-[#72BDFD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-md border border-[#B4D4FF]/30 max-w-[85%]">
                    <p className="text-sm text-[#0B3C89]">
                      Halo! Selamat datang di MeteoTrip 👋
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2E80FF] to-[#72BDFD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-md border border-[#B4D4FF]/30 max-w-[85%]">
                    <p className="text-sm text-[#0B3C89] mb-2">
                      Tips Wisata Hari Ini:
                    </p>
                    <div className="bg-gradient-to-br from-[#72BDFD]/10 to-[#B4D4FF]/10 rounded-lg p-2 border border-[#72BDFD]/30">
                      <p className="text-xs text-[#475569]">
                        ☀️ Cuaca cerah hingga sore<br />
                        🌡️ Suhu: 24-26°C<br />
                        💧 Hujan: Rendah (10%)<br />
                        ✅ Cocok untuk outdoor activities
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2E80FF] to-[#72BDFD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-md border border-[#B4D4FF]/30 max-w-[85%]">
                    <p className="text-sm text-[#0B3C89]">
                      Rekomendasi: Kunjungi Tangkuban Perahu atau Taman Hutan Raya!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-[#E9EEF5] bg-white">
              <div className="grid grid-cols-2 gap-2">
                <button className="text-xs bg-gradient-to-br from-[#E9EEF5] to-white border border-[#B4D4FF] rounded-lg p-2 hover:bg-[#E9EEF5] transition-all">
                  Cek Cuaca
                </button>
                <button className="text-xs bg-gradient-to-br from-[#E9EEF5] to-white border border-[#B4D4FF] rounded-lg p-2 hover:bg-[#E9EEF5] transition-all">
                  Destinasi
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-gradient-to-r from-[#2E80FF] to-[#72BDFD] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[#72BDFD]/50 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFD700] rounded-full border-2 border-white"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
