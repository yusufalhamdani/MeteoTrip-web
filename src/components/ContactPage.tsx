import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Instagram, Youtube } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', message: '' });
  };

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
            Hubungi Kami
          </h1>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Ada pertanyaan atau saran? Kami siap membantu Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
          >
            <h2 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Kirim Pesan
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-[#475569] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#2E80FF]" />
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama Anda"
                  required
                  className="border-[#B4D4FF] focus:border-[#2E80FF] focus:ring-[#2E80FF]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[#475569] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2E80FF]" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@email.com"
                  required
                  className="border-[#B4D4FF] focus:border-[#2E80FF] focus:ring-[#2E80FF]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-[#475569] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#2E80FF]" />
                  Pesan
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={6}
                  required
                  className="border-[#B4D4FF] focus:border-[#2E80FF] focus:ring-[#2E80FF] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#2E80FF] to-[#72BDFD] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Send className="w-5 h-5" />
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-[#0B3C89] to-[#2E80FF] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Informasi Kontak
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Email</div>
                    <div className="text-white">meteotrip@itb.ac.id</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">WhatsApp</div>
                    <div className="text-white">+62 812-3456-7890</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30">
              <h3 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ikuti Kami
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(46, 128, 255, 0.3)' }}
                  className="bg-gradient-to-br from-[#2E80FF]/10 to-[#72BDFD]/10 rounded-xl p-6 border-2 border-[#2E80FF]/30 hover:border-[#2E80FF] transition-all duration-300 flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2E80FF] to-[#72BDFD] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Instagram
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(46, 128, 255, 0.3)' }}
                  className="bg-gradient-to-br from-[#0B3C89]/10 to-[#2E80FF]/10 rounded-xl p-6 border-2 border-[#0B3C89]/30 hover:border-[#0B3C89] transition-all duration-300 flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0B3C89] to-[#2E80FF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Youtube className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    TikTok
                  </div>
                </motion.a>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E9EEF5]">
                <p className="text-[#475569] text-sm text-center">
                  Dapatkan tips wisata cuaca harian dan update terbaru dari MeteoTrip
                </p>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-[#E9EEF5] to-white rounded-2xl p-6 border border-[#B4D4FF]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#72BDFD] to-[#B4D4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[#0B3C89] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Tips Cuaca Hari Ini
                  </h4>
                  <p className="text-[#475569] text-sm">
                    Cuaca cerah sepanjang hari! Waktu yang sempurna untuk mengunjungi destinasi outdoor seperti Tangkuban Perahu atau Taman Hutan Raya.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
