import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Calculator, 
    CircleDollarSign, 
    CalendarClock, 
    Percent, 
    ArrowRight, 
    Info,
    Wallet2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Simulasi Pinjaman', href: '/loan-simulation' },
];

export default function LoanSimulation() {
    const [amount, setAmount] = useState(5000000);
    const [tenor, setTenor] = useState(12);
    const [interestRate] = useState(1.5); 
    const [monthlyInstallment, setMonthlyInstallment] = useState(0);

    useEffect(() => {
        const principal = amount / tenor;
        const interest = amount * (interestRate / 100);
        setMonthlyInstallment(Math.round(principal + interest));
    }, [amount, tenor, interestRate]);

    const formatRupiah = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Simulasi Pinjaman - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Simulasi Pinjaman</h1>
                        <p className="text-slate-500 mt-1 text-sm">Hitung estimasi cicilan bulanan Anda dengan cepat dan transparan.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* --- KONTROL SIMULASI --- */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white p-6 md:p-8 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-left-6 duration-700">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-8 flex items-center gap-2">
                                <Calculator size={18} className="text-[#00A99D]" /> Atur Rencana Pinjaman
                            </h3>

                            {/* Range Jumlah Pinjaman */}
                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Jumlah Pinjaman</label>
                                    <span className="text-2xl font-black text-[#00A99D] tracking-tighter">{formatRupiah(amount)}</span>
                                </div>
                                <input 
                                    type="range"
                                    min="1000000"
                                    max="50000000"
                                    step="500000"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
                                />
                                <div className="flex justify-between text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                                    <span>Min: 1 Juta</span>
                                    <span>Max: 50 Juta</span>
                                </div>
                            </div>

                            {/* Range Tenor */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Jangka Waktu</label>
                                    <span className="text-2xl font-black text-[#00A99D] tracking-tighter">{tenor} Bulan</span>
                                </div>
                                <input 
                                    type="range"
                                    min="3"
                                    max="36"
                                    step="3"
                                    value={tenor}
                                    onChange={(e) => setTenor(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
                                />
                                <div className="flex justify-between text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                                    <span>Min: 3 Bulan</span>
                                    <span>Max: 36 Bulan</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-100/50 animate-in fade-in slide-in-from-left-6 duration-700 delay-200">
                            <Info className="text-amber-500 shrink-0" size={18} />
                            <p className="text-[11px] text-amber-800 leading-relaxed font-bold uppercase tracking-tight">
                                Estimasi menggunakan bunga tetap (flat) {interestRate}%/bulan. Biaya admin mungkin berlaku saat pengajuan resmi.
                            </p>
                        </div>
                    </div>

                    {/* --- HASIL ESTIMASI --- */}
                    <div className="lg:col-span-5">
                        <div className="bg-gradient-to-br from-[#00A99D] to-[#078077] p-8 rounded-[40px] text-white shadow-2xl shadow-teal-500/20 sticky top-8 animate-in fade-in slide-in-from-right-6 duration-700">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-8">Ringkasan Estimasi</h3>
                            
                            <div className="space-y-6 mb-10">
                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                                            <Percent size={18} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-tight text-white/80">Bunga Bulanan</span>
                                    </div>
                                    <span className="text-lg font-black">{interestRate}%</span>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                                            <CalendarClock size={18} />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-tight text-white/80">Tenor Pinjaman</span>
                                    </div>
                                    <span className="text-lg font-black">{tenor} Bulan</span>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2">Angsuran per Bulan</p>
                                    <h4 className="text-4xl font-black text-white tracking-tighter drop-shadow-md">
                                        {formatRupiah(monthlyInstallment)}
                                    </h4>
                                </div>
                            </div>

                            <Button className="w-full bg-white text-[#00A99D] hover:bg-teal-50 rounded-2xl h-14 font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 group">
                                Ajukan Sekarang <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}