import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rainfallData = [
  { month: 'Jan', rainfall: 280, temp: 23 },
  { month: 'Feb', rainfall: 260, temp: 23 },
  { month: 'Mar', rainfall: 220, temp: 24 },
  { month: 'Apr', rainfall: 180, temp: 24 },
  { month: 'May', rainfall: 140, temp: 24 },
  { month: 'Jun', rainfall: 90, temp: 23 },
  { month: 'Jul', rainfall: 70, temp: 23 },
  { month: 'Aug', rainfall: 80, temp: 23 },
  { month: 'Sep', rainfall: 110, temp: 24 },
  { month: 'Oct', rainfall: 160, temp: 24 },
  { month: 'Nov', rainfall: 220, temp: 24 },
  { month: 'Dec', rainfall: 270, temp: 23 },
];

export function StatisticsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E9EEF5] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0B3C89] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tren Curah Hujan Tahunan Bandung
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Visualisasi data meteorologi untuk membantu Anda memilih waktu terbaik berkunjung
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rainfall Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
          >
            <h3 
              className="text-[#0B3C89] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Curah Hujan Bulanan (mm)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={rainfallData}>
                <defs>
                  <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E80FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#72BDFD" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E9EEF5" />
                <XAxis dataKey="month" stroke="#475569" />
                <YAxis stroke="#475569" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #B4D4FF',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="rainfall" 
                  stroke="#2E80FF" 
                  strokeWidth={3}
                  fill="url(#rainfallGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Temperature Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-[#B4D4FF]/30"
          >
            <h3 
              className="text-[#0B3C89] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Suhu Rata-rata (°C)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rainfallData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E9EEF5" />
                <XAxis dataKey="month" stroke="#475569" />
                <YAxis stroke="#475569" domain={[20, 26]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #B4D4FF',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#0B3C89" 
                  strokeWidth={3}
                  dot={{ fill: '#72BDFD', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          <div className="bg-gradient-to-br from-[#2E80FF] to-[#72BDFD] rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>150+</div>
            <div className="text-white/90">Data Points</div>
          </div>
          <div className="bg-gradient-to-br from-[#0B3C89] to-[#2E80FF] rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>10 Tahun</div>
            <div className="text-white/90">Historis Data</div>
          </div>
          <div className="bg-gradient-to-br from-[#72BDFD] to-[#B4D4FF] rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>50+</div>
            <div className="text-white/90">Destinasi Wisata</div>
          </div>
          <div className="bg-gradient-to-br from-[#042F70] to-[#0B3C89] rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>95%</div>
            <div className="text-white/90">Akurasi Prediksi</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
