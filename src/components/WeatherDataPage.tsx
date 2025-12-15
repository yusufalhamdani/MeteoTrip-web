import { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, Droplets, Wind, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const monthlyData = [
  { month: 'Jan', rainfall: 280, humidity: 85, wind: 12 },
  { month: 'Feb', rainfall: 260, humidity: 84, wind: 11 },
  { month: 'Mar', rainfall: 220, humidity: 82, wind: 10 },
  { month: 'Apr', rainfall: 180, humidity: 80, wind: 10 },
  { month: 'May', rainfall: 140, humidity: 78, wind: 9 },
  { month: 'Jun', rainfall: 90, humidity: 75, wind: 11 },
  { month: 'Jul', rainfall: 70, humidity: 73, wind: 12 },
  { month: 'Aug', rainfall: 80, humidity: 72, wind: 13 },
  { month: 'Sep', rainfall: 110, humidity: 75, wind: 12 },
  { month: 'Oct', rainfall: 160, humidity: 78, wind: 11 },
  { month: 'Nov', rainfall: 220, humidity: 82, wind: 10 },
  { month: 'Dec', rainfall: 270, humidity: 85, wind: 12 },
];

const yearlyTrend = [
  { year: '2015', rainfall: 2100 },
  { year: '2016', rainfall: 2250 },
  { year: '2017', rainfall: 1950 },
  { year: '2018', rainfall: 2180 },
  { year: '2019', rainfall: 2050 },
  { year: '2020', rainfall: 2300 },
  { year: '2021', rainfall: 2150 },
  { year: '2022', rainfall: 2280 },
  { year: '2023', rainfall: 2100 },
  { year: '2024', rainfall: 2200 },
];

const weatherCalendar = [
  { date: '1-7 Nov', condition: 'ideal', rainfall: 'Ringan', temp: '24°C' },
  { date: '8-14 Nov', condition: 'moderate', rainfall: 'Sedang', temp: '23°C' },
  { date: '15-21 Nov', condition: 'ideal', rainfall: 'Ringan', temp: '24°C' },
  { date: '22-28 Nov', condition: 'poor', rainfall: 'Tinggi', temp: '22°C' },
];

export function WeatherDataPage() {
  const [selectedMonth, setSelectedMonth] = useState('all');

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
            Data & Tren Cuaca Bandung
          </h1>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Analisis mendalam data meteorologi untuk perencanaan perjalanan yang lebih baik
          </p>
        </motion.div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-[#B4D4FF]/30"
        >
          <h2 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Peta Curah Hujan Interaktif
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#2E80FF]/10 to-[#72BDFD]/10 rounded-lg p-4 border border-[#2E80FF]/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#475569] mb-1">Bandung Utara</div>
                  <div className="text-2xl text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>320mm</div>
                </div>
                <Droplets className="w-8 h-8 text-[#2E80FF]" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#72BDFD]/10 to-[#B4D4FF]/10 rounded-lg p-4 border border-[#72BDFD]/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#475569] mb-1">Bandung Selatan</div>
                  <div className="text-2xl text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>280mm</div>
                </div>
                <Droplets className="w-8 h-8 text-[#72BDFD]" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0B3C89]/10 to-[#2E80FF]/10 rounded-lg p-4 border border-[#0B3C89]/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#475569] mb-1">Bandung Timur</div>
                  <div className="text-2xl text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>250mm</div>
                </div>
                <Droplets className="w-8 h-8 text-[#0B3C89]" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#042F70]/10 to-[#0B3C89]/10 rounded-lg p-4 border border-[#042F70]/20 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#475569] mb-1">Bandung Barat</div>
                  <div className="text-2xl text-[#0B3C89]" style={{ fontFamily: 'Poppins, sans-serif' }}>290mm</div>
                </div>
                <Droplets className="w-8 h-8 text-[#042F70]" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E9EEF5] to-white rounded-xl p-8 border-2 border-dashed border-[#B4D4FF]">
            <div className="text-center text-[#475569]">
              <Cloud className="w-16 h-16 text-[#2E80FF] mx-auto mb-4" />
              <p className="mb-2">Peta Heatmap Interaktif</p>
              <p className="text-sm">Visualisasi intensitas curah hujan per area di Bandung</p>
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <Tabs defaultValue="monthly" className="mb-8">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 mb-6">
            <TabsTrigger value="monthly">Data Bulanan</TabsTrigger>
            <TabsTrigger value="yearly">Tren Tahunan</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
              >
                <h3 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Curah Hujan & Kelembaban
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E9EEF5" />
                    <XAxis dataKey="month" stroke="#475569" />
                    <YAxis stroke="#475569" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #B4D4FF',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="rainfall" fill="#2E80FF" name="Curah Hujan (mm)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
              >
                <h3 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Kecepatan Angin
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E9EEF5" />
                    <XAxis dataKey="month" stroke="#475569" />
                    <YAxis stroke="#475569" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #B4D4FF',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="wind" 
                      stroke="#72BDFD" 
                      strokeWidth={3}
                      name="Angin (km/h)"
                      dot={{ fill: '#2E80FF', strokeWidth: 2, r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="yearly">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
            >
              <h3 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Tren Curah Hujan 10 Tahun Terakhir
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={yearlyTrend}>
                  <defs>
                    <linearGradient id="yearlyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0B3C89" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#72BDFD" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E9EEF5" />
                  <XAxis dataKey="year" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #B4D4FF',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rainfall" 
                    stroke="#0B3C89" 
                    strokeWidth={4}
                    name="Total Curah Hujan (mm)"
                    dot={{ fill: '#72BDFD', strokeWidth: 3, r: 6 }}
                    activeDot={{ r: 10 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Weather Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-[#B4D4FF]/30"
        >
          <h2 className="text-[#0B3C89] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Kalender Wisata Cuaca
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {weatherCalendar.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-xl p-6 border-2 cursor-pointer transition-all hover:shadow-lg ${
                  item.condition === 'ideal' 
                    ? 'bg-gradient-to-br from-[#72BDFD]/10 to-[#B4D4FF]/10 border-[#72BDFD]' 
                    : item.condition === 'moderate'
                    ? 'bg-gradient-to-br from-[#2E80FF]/10 to-[#72BDFD]/10 border-[#2E80FF]'
                    : 'bg-gradient-to-br from-[#E9EEF5] to-white border-[#475569]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Calendar className={`w-5 h-5 ${
                    item.condition === 'ideal' ? 'text-[#72BDFD]' : 
                    item.condition === 'moderate' ? 'text-[#2E80FF]' : 
                    'text-[#475569]'
                  }`} />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.condition === 'ideal' ? 'bg-[#72BDFD] text-white' : 
                    item.condition === 'moderate' ? 'bg-[#2E80FF] text-white' : 
                    'bg-[#475569] text-white'
                  }`}>
                    {item.condition === 'ideal' ? 'Ideal' : item.condition === 'moderate' ? 'Sedang' : 'Kurang Ideal'}
                  </span>
                </div>
                <div className="text-[#0B3C89] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.date}
                </div>
                <div className="text-sm text-[#475569] space-y-1">
                  <div>Hujan: {item.rainfall}</div>
                  <div>Suhu: {item.temp}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
