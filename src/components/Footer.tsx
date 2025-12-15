import { Cloud, Instagram, Youtube, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#042F70] via-[#0B3C89] to-[#2E80FF] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#72BDFD] to-[#B4D4FF] rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-[#0B3C89]" />
              </div>
              <span className="text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>MeteoTrip</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Platform digital yang menghubungkan data meteorologi dengan pengalaman wisata yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Data & Tren</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Destinasi</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Tentang Kami</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>meteotrip@itb.ac.id</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>ITB Bandung, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © 2025 MeteoTrip – Powered by ITB Meteorology
            </p>
            <div className="flex gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
