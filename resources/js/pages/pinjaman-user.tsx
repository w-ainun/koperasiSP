import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Landmark, 
    History, 
    Plus, 
    CheckCircle2, 
    Clock, 
    ArrowRight,
    Calendar,
    ReceiptText,
    ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Pinjaman Saya', href: '/loans' },
];

export default function LoansPage() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [tenor, setTenor] = useState(12);
    const [monthlyInstallment, setMonthlyInstallment] = useState(0);
    const interestRate = 1.5;

    useEffect(() => {
        const principal = loanAmount / tenor;
        const interest = loanAmount * (interestRate / 100);
        setMonthlyInstallment(Math.round(principal + interest));
    }, [loanAmount, tenor]);

    const formatNumber = (val: number) => {
        return new Intl.NumberFormat('id-ID').format(val);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pinjaman Saya - Mitraya" />
            
            <div className="min-h-screen w-full bg-[#F8FAFB] px-4 py-6 md:px-6 lg:px-8 font-['Plus_Jakarta_Sans']">
                <div className="max-w-7xl mx-auto space-y-8">
                    
                    {/* --- HEADER (Animasi: Slide-in Top) --- */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-6 duration-700">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-slate-50 flex items-center justify-center text-[#00A99D] shadow-sm hover:rotate-12 transition-transform duration-500">
                                <Landmark size={24} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-slate-800 tracking-tight">Pinjaman Saya</h1>
                                <p className="text-[11px] text-slate-400 font-medium tracking-tight">Kelola pengajuan dan pantau cicilan pinjaman Anda.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* --- KIRI: FORM PENGAJUAN (Animasi: Slide-in Left) --- */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white p-6 md:p-8 rounded-[40px] border border-white shadow-sm space-y-8 animate-in fade-in slide-in-from-left-10 duration-700 fill-mode-both">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#00A99D] flex items-center justify-center animate-pulse">
                                        <Plus size={20} />
                                    </div>
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Pengajuan Baru</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nominal Pinjaman</label>
                                        <div className="relative group">
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sm font-black text-[#00A99D]">Rp</span>
                                            <Input 
                                                value={formatNumber(loanAmount)}
                                                onChange={(e) => setLoanAmount(Number(e.target.value.replace(/\./g, '')))}
                                                className="h-14 pl-14 rounded-2xl border-slate-100 bg-slate-50/50 text-base font-black text-slate-800 focus:bg-white focus:ring-4 focus:ring-teal-500/5 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Jangka Waktu</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[6, 12, 18, 24].map((t) => (
                                                <button
                                                    key={t}
                                                    onClick={() => setTenor(t)}
                                                    className={`py-3 rounded-xl text-[10px] font-black transition-all duration-300 ${tenor === t ? 'bg-[#00A99D] text-white shadow-lg shadow-teal-500/20 scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                                >
                                                    {t} BLN
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-[32px] bg-slate-50 border border-slate-100 space-y-3 group hover:bg-white hover:shadow-md transition-all duration-500">
                                        <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                            <span>Estimasi Cicilan</span>
                                            <span className="text-[#00A99D] px-2 py-0.5 bg-teal-50 rounded-full">Bunga {interestRate}%</span>
                                        </div>
                                        <h4 className="text-3xl font-black text-slate-800 tracking-tighter group-hover:scale-105 transition-transform">Rp {formatNumber(monthlyInstallment)} <span className="text-[10px] font-bold text-slate-400 uppercase">/Bulan</span></h4>
                                    </div>

                                    <Button className="w-full h-15 bg-[#00A99D] hover:bg-[#008279] rounded-[24px] shadow-xl shadow-teal-500/20 text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all active:scale-[0.96] group">
                                        Ajukan Sekarang <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={18} />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* --- KANAN: STATUS & RIWAYAT (Animasi: Staggered Fade-in) --- */}
                        <div className="lg:col-span-7 space-y-6">
                            
                            {/* Card Status Aktif */}
                            <div className="bg-white p-6 md:p-8 rounded-[40px] border border-white shadow-sm space-y-6 animate-in fade-in slide-in-from-right-10 duration-700 delay-100 fill-mode-both">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:rotate-6 transition-transform">
                                            <ReceiptText size={20} />
                                        </div>
                                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Pinjaman Aktif</h3>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full border border-emerald-100 uppercase animate-pulse">
                                        <CheckCircle2 size={12} />
                                        Disetujui
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Total Pinjaman</p>
                                        <p className="text-2xl font-black text-slate-800 tracking-tight">Rp {formatNumber(10000000)}</p>
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Sisa Cicilan</p>
                                        <p className="text-2xl font-black text-[#00A99D] tracking-tight">8 <span className="text-xs font-bold text-slate-300 uppercase">/ 12 Bln</span></p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                        <span>Progres Pelunasan</span>
                                        <span className="text-[#00A99D]">65%</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                                        <div className="h-full bg-gradient-to-r from-[#00A99D] to-[#078077] rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,169,157,0.3)]" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Riwayat Angsuran (Animasi: Fade-in Staggered) */}
                            <div className="bg-white p-6 md:p-8 rounded-[40px] border border-white shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
                                            <History size={20} />
                                        </div>
                                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Riwayat Angsuran</h3>
                                    </div>
                                    <Button variant="ghost" className="text-[10px] font-black text-[#00A99D] uppercase tracking-widest hover:bg-teal-50">
                                        Lihat Semua <ChevronRight size={14} className="ml-1" />
                                    </Button>
                                </div>

                                <div className="space-y-3">
                                    <InstallmentRow date="05 Feb 2026" amount={850000} status="Berhasil" color="teal" delay="0" />
                                    <InstallmentRow date="05 Jan 2026" amount={850000} status="Berhasil" color="teal" delay="100" />
                                    <InstallmentRow date="05 Des 2025" amount={850000} status="Berhasil" color="teal" delay="200" />
                                    <InstallmentRow date="05 Nov 2025" amount={850000} status="Tertunda" color="amber" delay="300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function InstallmentRow({ date, amount, status, delay }: any) {
    return (
        <div 
            className="flex items-center justify-between p-4 rounded-[28px] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-md transition-all duration-500 group animate-in fade-in slide-in-from-right-4 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#00A99D] group-hover:scale-110 transition-all duration-500">
                    <Calendar size={18} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-700">{date}</p>
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">Angsuran Reguler</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm font-black text-slate-800 tracking-tight">Rp {new Intl.NumberFormat('id-ID').format(amount)}</p>
                <div className="flex items-center justify-end gap-1.5 mt-0.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${status === 'Berhasil' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    <span className={`text-[9px] font-black uppercase tracking-tighter ${status === 'Berhasil' ? 'text-emerald-500' : 'text-amber-500'}`}>{status}</span>
                </div>
            </div>
        </div>
    );
}