import React, { useState } from 'react';
import { 
  Percent, 
  HelpCircle, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Scale,
  RotateCcw
} from 'lucide-react';

export default function PelajariBunga() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const interestRate = 1.5;

  return (
    <section className="py-24 bg-[#F8FAFB] font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-20 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 mb-6">
            <Percent size={18} />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Transparansi Bunga</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter leading-tight">
            Memahami Sistem <br className="hidden md:block" /> Bunga di Mitraya
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- KIRI: PENJELASAN & INTERACTIVE CARDS --- */}
          <div className="lg:col-span-7 space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                <HelpCircle className="text-[#00A99D]" /> Apa itu Bunga Flat?
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Mitraya menggunakan sistem **Bunga Flat**, di mana jumlah bunga yang Anda bayarkan tetap sama setiap bulannya selama masa pinjaman.
              </p>
            </div>

            {/* --- STEP-BY-STEP INTERACTIVE CARDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* KARTU 01: ANGSURAN POKOK */}
              <div 
                onClick={() => setActiveStep(1)}
                className={`p-8 rounded-[40px] border transition-all duration-500 cursor-pointer relative overflow-hidden group
                  ${activeStep === 1 
                    ? 'bg-[#00A99D] border-[#00A99D] shadow-2xl shadow-teal-500/40 scale-[1.02]' 
                    : 'bg-white border-white shadow-sm hover:shadow-xl hover:border-teal-100'
                  }`}
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl transition-opacity duration-500
                  ${activeStep === 1 ? 'bg-white/20 opacity-100' : 'bg-teal-500/5 opacity-0 group-hover:opacity-100'}`} 
                />
                
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg
                  ${activeStep === 1 
                    ? 'bg-white text-[#00A99D]' 
                    : 'bg-gradient-to-br from-[#00A99D] to-[#078077] text-white'
                  }`}
                >
                  <span className="font-black text-lg">01</span>
                </div>
                
                <div className="space-y-3 relative z-10">
                  <h4 className={`text-sm font-black uppercase tracking-[0.15em] flex items-center gap-2 transition-colors duration-500
                    ${activeStep === 1 ? 'text-white' : 'text-slate-800'}`}>
                    Angsuran Pokok 
                    <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${activeStep === 1 ? 'bg-white' : 'bg-[#00A99D]'}`} />
                  </h4>
                  <p className={`text-[13px] font-medium leading-relaxed transition-colors duration-500
                    ${activeStep === 1 ? 'text-teal-50' : 'text-slate-500'}`}>
                    Total Pinjaman awal dibagi secara rata dengan jangka waktu (Tenor) yang Anda pilih.
                  </p>
                </div>
                
                {activeStep === 1 && (
                  <div className="mt-6 flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
                    <div className="h-1 w-12 bg-white/40 rounded-full" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Terpilih</span>
                  </div>
                )}
              </div>

              {/* KARTU 02: ANGSURAN BUNGA */}
              <div 
                onClick={() => setActiveStep(2)}
                className={`p-8 rounded-[40px] border transition-all duration-500 cursor-pointer relative overflow-hidden group
                  ${activeStep === 2 
                    ? 'bg-[#00A99D] border-[#00A99D] shadow-2xl shadow-teal-500/40 scale-[1.02]' 
                    : 'bg-white border-white shadow-sm hover:shadow-xl hover:border-teal-100'
                  }`}
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl transition-opacity duration-500
                  ${activeStep === 2 ? 'bg-white/20 opacity-100' : 'bg-blue-500/5 opacity-0 group-hover:opacity-100'}`} 
                />

                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg
                  ${activeStep === 2 
                    ? 'bg-white text-[#00A99D]' 
                    : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                  }`}
                >
                  <span className="font-black text-lg">02</span>
                </div>

                <div className="space-y-3 relative z-10">
                  <h4 className={`text-sm font-black uppercase tracking-[0.15em] flex items-center gap-2 transition-colors duration-500
                    ${activeStep === 2 ? 'text-white' : 'text-slate-800'}`}>
                    Angsuran Bunga
                    <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${activeStep === 2 ? 'bg-white' : 'bg-blue-600'}`} />
                  </h4>
                  <p className={`text-[13px] font-medium leading-relaxed transition-colors duration-500
                    ${activeStep === 2 ? 'text-teal-50' : 'text-slate-500'}`}>
                    Biaya jasa tetap yang dihitung dari total pinjaman awal dikali suku bunga bulanan.
                  </p>
                </div>

                {activeStep === 2 && (
                  <div className="mt-6 flex items-center gap-2 animate-in fade-in slide-in-from-left-2">
                    <div className="h-1 w-12 bg-white/40 rounded-full" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Terpilih</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
               {[
                 "Cicilan tetap, tidak terpengaruh fluktuasi bunga pasar.",
                 "Sesuai dengan prinsip kekeluargaan koperasi.",
                 "Transparansi penuh tanpa biaya tersembunyi."
               ].map((text, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-white shadow-sm">
                   <CheckCircle className="text-[#00A99D] shrink-0" size={20} />
                   <span className="text-sm font-bold text-slate-600">{text}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* --- KANAN: TABEL SIMULASI --- */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="bg-white p-8 md:p-10 rounded-[48px] border border-white shadow-2xl shadow-slate-200/50 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Scale size={120} />
              </div>

              <div className="relative z-10 space-y-6">
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Contoh Pinjaman</h3>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex justify-between mb-2 font-bold uppercase tracking-widest text-[10px] text-slate-400">
                    <span>Pinjaman Awal</span>
                    <span className="text-slate-800 font-black text-xs">Rp 10.000.000</span>
                  </div>
                  <div className="flex justify-between font-bold uppercase tracking-widest text-[10px] text-slate-400">
                    <span>Tenor</span>
                    <span className="text-slate-800 font-black text-xs">12 Bulan</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400">Angsuran Pokok</span>
                    <span className="text-sm font-black text-slate-600">Rp 833.333</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400">Bunga ({interestRate}%)</span>
                    <span className="text-sm font-black text-slate-600">Rp 150.000</span>
                  </div>
                  <div className="flex justify-between items-center py-6 bg-[#00A99D]/5 px-6 rounded-3xl">
                    <span className="text-xs font-black text-[#00A99D] uppercase tracking-widest">Total / Bulan</span>
                    <span className="text-xl font-black text-[#00A99D]">Rp 983.333</span>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-start gap-4">
                  <TrendingUp className="text-emerald-600 shrink-0" size={20} />
                  <p className="text-[11px] text-emerald-800 font-bold leading-relaxed italic">
                    "Sebagian bunga yang Anda bayarkan akan kembali melalui pembagian SHU di akhir tahun."
                  </p>
                </div>

                <button className="w-full py-5 bg-slate-800 text-white rounded-[28px] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group">
                  Mulai Simulasi Sekarang
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}