import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Cloud, Sun, CloudRain, X, Navigation } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

const destinations = [
  {
    id: 1,
    name: 'Tangkuban Perahu',
    type: 'outdoor',
    category: 'Gunung',
    image: 'https://images.unsplash.com/photo-1635148040718-acf281233b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjE3MDY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    weather: 'Cerah',
    idealTemp: '18-22°C',
    description: 'Gunung berapi aktif dengan pemandangan kawah yang menakjubkan. Ideal dikunjungi saat cuaca cerah di pagi hari.',
    bestTime: 'April - September',
    rainfall: 'Rendah',
  },
  {
    id: 2,
    name: 'Trans Studio Bandung',
    type: 'indoor',
    category: 'Hiburan',
    image: 'https://images.unsplash.com/photo-1733840068504-5a6ce9d19e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NjE3NTExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    weather: 'Sepanjang Waktu',
    idealTemp: '24-26°C',
    description: 'Theme park indoor terbesar di Indonesia dengan berbagai wahana seru untuk segala usia.',
    bestTime: 'Sepanjang Tahun',
    rainfall: 'Tidak Berpengaruh',
  },
  {
    id: 3,
    name: 'Taman Hutan Raya',
    type: 'outdoor',
    category: 'Alam',
    image: 'https://images.unsplash.com/photo-1667579931486-a0feca005706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrJTIwb3V0ZG9vciUyMGdhcmRlbnxlbnwxfHx8fDE3NjE3NTExMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    weather: 'Cerah/Berawan',
    idealTemp: '22-25°C',
    description: 'Kawasan hutan konservasi dengan udara sejuk dan jalur hiking yang menarik.',
    bestTime: 'Maret - Oktober',
    rainfall: 'Rendah-Sedang',
  },
  {
    id: 4,
    name: 'Kafe & Coworking Space',
    type: 'indoor',
    category: 'Kuliner',
    image: 'https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW5kb29yJTIwY296eXxlbnwxfHx8fDE3NjE3NTExMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    weather: 'Sepanjang Waktu',
    idealTemp: '23-26°C',
    description: 'Tempat ideal untuk bersantai atau bekerja sambil menikmati kopi berkualitas.',
    bestTime: 'Sepanjang Tahun',
    rainfall: 'Tidak Berpengaruh',
  },
  {
    id: 5,
    name: 'Kawah Putih',
    type: 'outdoor',
    category: 'Danau',
    image: 'https://images.unsplash.com/photo-1635148040718-acf281233b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjE3MDY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    weather: 'Cerah',
    idealTemp: '16-20°C',
    description: 'Danau kawah dengan air berwarna putih kehijauan yang memukau.',
    bestTime: 'April - September',
    rainfall: 'Rendah',
  },
  {
    id: 6,
    name: 'Gedung Sate',
    type: 'indoor',
    category: 'Sejarah',
    image: 'https://images.unsplash.com/photo-1653722618201-7877607bfe03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kdW5nJTIwaW5kb25lc2lhJTIwY2l0eXxlbnwxfHx8fDE3NjE3NTExMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    weather: 'Sepanjang Waktu',
    idealTemp: '23-27°C',
    description: 'Bangunan bersejarah dengan arsitektur kolonial yang ikonik.',
    bestTime: 'Sepanjang Tahun',
    rainfall: 'Tidak Berpengaruh',
  },
];

type FilterType = 'all' | 'indoor' | 'outdoor';

export function DestinationPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);

  const filteredDestinations = filter === 'all' 
    ? destinations 
    : destinations.filter(d => d.type === filter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[#0B3C89] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Rekomendasi Destinasi Wisata
          </h1>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Temukan destinasi wisata terbaik di Bandung berdasarkan kondisi cuaca
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#2E80FF] to-[#72BDFD] text-white shadow-lg'
                : 'bg-white text-[#0B3C89] border-2 border-[#B4D4FF] hover:border-[#2E80FF]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Semua Destinasi
          </button>
          <button
            onClick={() => setFilter('outdoor')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              filter === 'outdoor'
                ? 'bg-gradient-to-r from-[#2E80FF] to-[#72BDFD] text-white shadow-lg'
                : 'bg-white text-[#0B3C89] border-2 border-[#B4D4FF] hover:border-[#2E80FF]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Sun className="w-5 h-5" />
            Outdoor
          </button>
          <button
            onClick={() => setFilter('indoor')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              filter === 'indoor'
                ? 'bg-gradient-to-r from-[#2E80FF] to-[#72BDFD] text-white shadow-lg'
                : 'bg-white text-[#0B3C89] border-2 border-[#B4D4FF] hover:border-[#2E80FF]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Cloud className="w-5 h-5" />
            Indoor
          </button>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedDestination(destination)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-[#B4D4FF]/30"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${
                      destination.type === 'outdoor'
                        ? 'bg-gradient-to-r from-[#72BDFD] to-[#B4D4FF]'
                        : 'bg-gradient-to-r from-[#0B3C89] to-[#2E80FF]'
                    } text-white border-0`}>
                      {destination.type === 'outdoor' ? 'Outdoor' : 'Indoor'}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 
                    className="text-[#0B3C89] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {destination.name}
                  </h3>
                  
                  <p className="text-[#475569] text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#2E80FF]">
                      {destination.type === 'outdoor' ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Cloud className="w-4 h-4" />
                      )}
                      <span className="text-sm">{destination.weather}</span>
                    </div>
                    <div className="text-sm text-[#475569]">
                      {destination.idealTemp}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Destination Detail Dialog */}
        <Dialog open={!!selectedDestination} onOpenChange={() => setSelectedDestination(null)}>
          <DialogContent className="max-w-2xl">
            {selectedDestination && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedDestination.name}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedDestination.category}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={selectedDestination.image}
                      alt={selectedDestination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[#475569]">
                    {selectedDestination.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#E9EEF5] to-white rounded-lg p-4 border border-[#B4D4FF]">
                      <div className="text-sm text-[#475569] mb-1">Waktu Terbaik</div>
                      <div className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {selectedDestination.bestTime}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#E9EEF5] to-white rounded-lg p-4 border border-[#B4D4FF]">
                      <div className="text-sm text-[#475569] mb-1">Curah Hujan</div>
                      <div className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {selectedDestination.rainfall}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#E9EEF5] to-white rounded-lg p-4 border border-[#B4D4FF]">
                      <div className="text-sm text-[#475569] mb-1">Suhu Ideal</div>
                      <div className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {selectedDestination.idealTemp}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#E9EEF5] to-white rounded-lg p-4 border border-[#B4D4FF]">
                      <div className="text-sm text-[#475569] mb-1">Kondisi Cuaca</div>
                      <div className="text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {selectedDestination.weather}
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-full bg-gradient-to-r from-[#2E80FF] to-[#72BDFD] text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <Navigation className="w-5 h-5" />
                    Buka di Google Maps
                  </button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
