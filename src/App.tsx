import { useState } from 'react';
import { Cloud, MapPin, TrendingUp, Calendar, Menu, X } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { StatisticsSection } from './components/StatisticsSection';
import { WeatherDataPage } from './components/WeatherDataPage';
import { DestinationPage } from './components/DestinationPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { FloatingChat } from './components/FloatingChat';
import { Footer } from './components/Footer';

type PageType = 'home' | 'data' | 'destinations' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', id: 'home' as PageType, icon: Cloud },
    { name: 'Data & Tren', id: 'data' as PageType, icon: TrendingUp },
    { name: 'Destinasi', id: 'destinations' as PageType, icon: MapPin },
    { name: 'Tentang', id: 'about' as PageType, icon: Calendar },
    { name: 'Kontak', id: 'contact' as PageType, icon: Menu },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E9EEF5]">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0B3C89] to-[#2E80FF] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#72BDFD] to-[#B4D4FF] rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-[#0B3C89]" />
              </div>
              <span className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>MeteoTrip</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      currentPage === item.id
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#042F70]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {currentPage === 'home' && (
          <>
            <HeroSection onExplore={() => setCurrentPage('destinations')} />
            <FeatureCards />
            <StatisticsSection />
          </>
        )}
        {currentPage === 'data' && <WeatherDataPage />}
        {currentPage === 'destinations' && <DestinationPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Floating Chat */}
      <FloatingChat />

      {/* Footer */}
      <Footer />
    </div>
  );
}
