import React from 'react';
import { 
  Wallet, 
  ShieldCheck, 
  Banknote, 
  TrendingUp, 
  CreditCard, 
  Users
} from 'lucide-react';

const services = [
  {
    title: "Simpanan Berjangka",
    description: "Solusi tabungan aman dengan suku bunga kompetitif di atas rata-rata perbankan umum. Dirancang khusus untuk membantu Anda merencanakan masa depan, mulai dari dana pendidikan, ibadah, hingga persiapan hari tua dengan pengelolaan aset yang transparan.",
    icon: <Wallet className="w-8 h-8" />,
    color: "teal"
  },
  {
    title: "Pinjaman Modal Usaha",
    description: "Dukungan pendanaan bagi UMKM dengan proses administrasi yang cepat dan bunga menurun yang ringan. Kami memprioritaskan pertumbuhan usaha Anda melalui skema pembiayaan yang fleksibel dan pendampingan bisnis yang berkelanjutan.",
    icon: <Banknote className="w-8 h-8" />,
    color: "blue"
  },
  {
    title: "Sistem Keamanan Berlapis",
    description: "Perlindungan data pribadi dan aset finansial Anda adalah prioritas utama kami. Menggunakan infrastruktur IT modern dengan enkripsi tingkat tinggi dan sistem pemantauan 24/7 untuk menjamin setiap transaksi berjalan aman tanpa kendala.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "emerald"
  },
  {
    title: "Bagi Hasil (SHU) Adil",
    description: "Sebagai pemilik koperasi, Anda berhak mendapatkan Sisa Hasil Usaha (SHU) yang dihitung secara proporsional berdasarkan kontribusi simpanan dan partisipasi transaksi Anda. Distribusi keuntungan dilakukan secara terbuka setiap tahunnya.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "purple"
  },
  {
    title: "Integrasi Pembayaran Digital",
    description: "Nikmati kemudahan transaksi setoran, penarikan, hingga pembayaran tagihan melalui integrasi Virtual Account, QRIS, dan dompet digital. Kelola seluruh aktivitas keuangan koperasi Anda cukup melalui smartphone, kapan saja dan di mana saja.",
    icon: <CreditCard className="w-8 h-8" />,
    color: "amber"
  },
  {
    title: "Pemberdayaan Anggota",
    description: "Bukan sekadar layanan finansial, kami menyediakan wadah jejaring bisnis dan pelatihan literasi keuangan bagi seluruh anggota. Tujuannya adalah membangun komunitas yang cerdas secara finansial dan mandiri secara ekonomi.",
    icon: <Users className="w-8 h-8" />,
    color: "rose"
  }
];

export default function Layanan() {
  return (
    <section className="py-24 bg-[#F8FAFB] font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="flex items-center gap-2 mb-4">
                <div className="h-1.5 w-8 bg-[#00A99D] rounded-full"></div>
                <span className="text-[#00A99D] font-black text-[10px] uppercase tracking-[0.3em]">
                    Layanan & Fasilitas
                </span>
                <div className="h-1.5 w-8 bg-[#00A99D] rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter leading-tight">
                Layanan Komprehensif Untuk <br className="hidden md:block" /> 
                Kesejahteraan Finansial Anda
            </h2>
            <p className="mt-6 text-slate-400 max-w-2xl font-medium">
                Kami menyediakan berbagai instrumen keuangan yang dirancang untuk memberikan nilai tambah dan keamanan bagi setiap anggota koperasi.
            </p>
        </div>

        {/* --- GRID LAYANAN --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-10 bg-white rounded-[40px] border border-white shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-3 transition-all duration-500 animate-in fade-in slide-in-from-bottom-10 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Box */}
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm
                ${service.color === 'teal' ? 'bg-teal-50 text-[#00A99D]' : ''}
                ${service.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
                ${service.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : ''}
                ${service.color === 'purple' ? 'bg-purple-50 text-purple-600' : ''}
                ${service.color === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
                ${service.color === 'rose' ? 'bg-rose-50 text-rose-600' : ''}
              `}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-slate-800 mb-5 group-hover:text-[#00A99D] transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-[1.8] font-medium italic group-hover:not-italic transition-all">
                {service.description}
              </p>

              {/* Decorative Accent */}
              <div className="mt-8 h-1 w-12 bg-slate-100 rounded-full group-hover:w-20 group-hover:bg-[#00A99D] transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}