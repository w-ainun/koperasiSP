import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Info, 
  ArrowRight, 
  PieChart as PieIcon, 
  TrendingUp,
  RotateCcw
} from 'lucide-react';

export default function Simulasi() {
  const [amount, setAmount] = useState(5000000);
  const [tenor, setTenor] = useState(12);
  const interestRate = 1.5; // Bunga 1.5% per bulan

  const [result, setResult] = useState({
    pokok: 0,
    bunga: 0,
    total: 0
  });

  useEffect(() => {
    const bungaPerBulan = amount * (interestRate / 100);
    const pokokPerBulan = amount / tenor;
    const totalPerBulan = pokokPerBulan + bungaPerBulan;

    setResult({
      pokok: Math.round(pokokPerBulan),
      bunga: Math.round(bungaPerBulan),
      total: Math.round(totalPerBulan)
    });
  }, [amount, tenor]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-white font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-50 text-[#00A99D] mb-6">
            <Calculator size={18} />
            <span className="text-xs font-black border-none uppercase tracking-[0.2em]">Kalkulator Pinjaman</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter leading-tight">
            Simulasikan Rencana <br className="hidden md:block" /> Keuangan Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- KIRI: SLIDERS & INPUT (Font Diperbesar) --- */}
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-10 duration-1000">
            
            {/* Input Nominal */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Jumlah Pinjaman</label>
                <span className="text-3xl font-black text-[#00A99D] tracking-tighter">{formatRupiah(amount)}</span>
              </div>
              <input 
                type="range" 
                min="1000000" 
                max="50000000" 
                step="500000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
              />
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-tight">
                <span>Rp 1 Juta</span>
                <span>Rp 50 Juta</span>
              </div>
            </div>

            {/* Input Tenor */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest">Jangka Waktu</label>
                <span className="text-3xl font-black text-slate-800 tracking-tighter">
                  {tenor} <span className="text-base text-slate-400 uppercase font-bold tracking-normal">Bulan</span>
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[6, 12, 18, 24].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTenor(t)}
                    className={`py-5 rounded-3xl text-sm font-black transition-all duration-300 border-2 ${
                      tenor === t 
                      ? 'bg-[#00A99D] border-[#00A99D] text-white shadow-xl shadow-teal-500/30 scale-105' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-teal-200 hover:text-teal-600'
                    }`}
                  >
                    {t} BLN
                  </button>
                ))}
              </div>
            </div>

            {/* Info Box (Font Lebih Jelas) */}
            <div className="p-8 rounded-[40px] bg-blue-50/50 border border-blue-100 flex items-start gap-5 transition-all hover:shadow-lg hover:shadow-blue-500/5">
              <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Info size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest">Catatan Penting</h4>
                <p className="text-sm text-blue-800/70 font-medium leading-relaxed">
                  Simulasi ini menggunakan bunga flat sebesar <span className="text-blue-900 font-bold">{interestRate}% per bulan</span>. Angka yang tertera adalah estimasi untuk membantu perencanaan Anda dan dapat disesuaikan kembali saat pengajuan resmi.
                </p>
              </div>
            </div>
          </div>

          {/* --- KANAN: HASIL SIMULASI (Tetap Elegan) --- */}
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="relative p-10 bg-gradient-to-br from-[#00A99D] to-[#078077] rounded-[48px] text-white shadow-2xl shadow-teal-500/20 overflow-hidden group">
              
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-pulse"></div>

              <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-teal-50/80">Estimasi Cicilan</h3>
                  <button onClick={() => {setAmount(5000000); setTenor(12)}} className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 hover:rotate-180 transition-all duration-500">
                    <RotateCcw size={18} />
                  </button>
                </div>

                <div className="space-y-2">
                  <h4 className="text-6xl font-black tracking-tighter">{formatRupiah(result.total)}</h4>
                  <p className="text-xs font-bold text-teal-100/60 uppercase tracking-[0.3em]">Angsuran Per Bulan</p>
                </div>

                <div className="space-y-5 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-100/70 uppercase tracking-widest">Angsuran Pokok</span>
                    <span className="text-lg font-black">{formatRupiah(result.pokok)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-teal-100/70 uppercase tracking-widest">Bunga ({interestRate}%)</span>
                    <span className="text-lg font-black">{formatRupiah(result.bunga)}</span>
                  </div>
                </div>

                <button className="w-full py-6 bg-white text-[#00A99D] rounded-[28px] font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-black/5 hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center gap-3 group/btn">
                  Ajukan Sekarang
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Micro Stats (Font Diperbesar) */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-7 bg-slate-50 rounded-[36px] border border-slate-100 flex items-center gap-5 hover:bg-white hover:shadow-md transition-all">
                <TrendingUp size={24} className="text-[#00A99D]" />
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Total Bayar</p>
                  <p className="text-sm font-black text-slate-800 tracking-tight">{formatRupiah(result.total * tenor)}</p>
                </div>
              </div>
              <div className="p-7 bg-slate-50 rounded-[36px] border border-slate-100 flex items-center gap-5 hover:bg-white hover:shadow-md transition-all">
                <PieIcon size={24} className="text-blue-500" />
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Administrasi</p>
                  <p className="text-sm font-black text-slate-800 tracking-tight">Rp 0 (Gratis)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}