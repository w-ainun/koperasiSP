import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Wallet, History, Plus, CheckCircle2, 
    Clock, TrendingUp, CircleDollarSign, 
    FileText, DownloadCloud, ArrowUpRight,
    Coins
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Simpanan Saya', href: '/savings' },
];

export default function SavingsPage() {
    const formatNumber = (val: number) => {
        return new Intl.NumberFormat('id-ID').format(val);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Simpanan Saya - Mitraya" />
            
            <div className="min-h-screen w-full bg-[#F8FAFB] px-4 py-6 md:px-6 lg:px-8 font-['Plus_Jakarta_Sans']">
                <div className="max-w-7xl mx-auto space-y-6">
                    
                    {/* --- HEADER (Animasi: Slide dari Atas) --- */}
                    <div className="bg-white p-5 rounded-[28px] border border-white shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 animate-in fade-in slide-in-from-top-6 duration-700">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 shadow-inner group transition-transform duration-500 hover:rotate-12">
                                <Wallet size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-black text-slate-800 tracking-tight">Simpanan Saya</h1>
                                <p className="text-[11px] text-slate-400 font-medium">Kelola simpanan wajib, pokok, dan sukarela Anda.</p>
                            </div>
                        </div>
                        <Button className="bg-[#00A99D] hover:bg-[#008279] rounded-2xl h-11 px-6 font-bold shadow-lg shadow-teal-500/20 transition-all active:scale-95 group text-sm">
                            <Plus size={16} className="mr-2 group-hover:rotate-180 transition-transform duration-500" /> 
                            Setor Simpanan
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        
                        {/* --- KIRI: SUMMARY & DETAILS --- */}
                        <div className="lg:col-span-5 space-y-4">
                            
                            {/* Card Highlight Sukarela (Animasi: Pop-in & Pulse Glow) */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-[#00A99D] to-[#0D9488] p-7 rounded-[32px] text-white shadow-xl shadow-teal-500/20 mb-2 animate-in fade-in zoom-in-95 duration-700">
                                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse" />
                                <div className="relative z-10 space-y-5">
                                    <div className="flex justify-between items-start">
                                        <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md hover:scale-110 transition-transform cursor-pointer">
                                            <TrendingUp size={20} />
                                        </div>
                                        <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center animate-bounce-slow">
                                            <ArrowUpRight size={14} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-teal-50/80 mb-1">Total Saldo Sukarela</p>
                                        <h2 className="text-3xl font-black tracking-tighter">{formatNumber(2750000)}</h2>
                                    </div>
                                </div>
                            </div>

                            {/* List Detail Simpanan (Animasi: Staggered Fade Left) */}
                            <div className="space-y-4">
                                <SavingsDetailCard 
                                    label="Simpanan Pokok" amount={5010000} date="02 Feb 2026" status="Lunas" 
                                    icon={<CircleDollarSign size={20} />} color="teal" delay="delay-100"
                                />
                                <SavingsDetailCard 
                                    label="Simpanan Wajib (Februari)" amount={1000000} date="02 Jan 2026" status="Beres" 
                                    icon={<Clock size={20} />} color="purple" delay="delay-200"
                                />
                                <SavingsDetailCard 
                                    label="Simpanan Sukarela" amount={2750000} date="11 Feb 2026" status="Aktif" 
                                    icon={<Coins size={20} />} color="blue" delay="delay-300"
                                />
                            </div>
                        </div>

                        {/* --- KANAN: RIWAYAT --- */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-6 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-right-8 duration-1000">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center animate-pulse">
                                            <History size={18} />
                                        </div>
                                        <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Riwayat Setoran</h3>
                                    </div>
                                    <Button 
                                        variant="outline" 
                                        className="rounded-xl border-teal-100 bg-teal-50/50 text-[#00A99D] h-9 gap-2 font-black text-[10px] hover:bg-[#00A99D] hover:text-white transition-all duration-300 active:scale-95 shadow-sm shadow-teal-500/5 group"
                                    >
                                        <DownloadCloud size={14} className="group-hover:translate-y-0.5 transition-transform" /> 
                                        UNDUH LAPORAN
                                    </Button>
                                </div>

                                {/* List Riwayat (Animasi: Fade-in Staggered) */}
                                <div className="space-y-3">
                                    <HistoryRow type="Wajib" date="05 Feb 2026" status="Berhasil" color="purple" delay="0" />
                                    <HistoryRow type="Sukarela" date="01 Feb 2026" status="Berhasil" color="blue" delay="100" />
                                    <HistoryRow type="Pokok" date="05 Jan 2026" status="Berhasil" color="teal" delay="200" />
                                    <HistoryRow type="Wajib" date="05 Jan 2025" status="Berhasil" color="purple" delay="300" />
                                    <HistoryRow type="Sukarela" date="28 Des 2025" status="Berhasil" color="blue" delay="400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function SavingsDetailCard({ label, amount, date, status, icon, color, delay }: any) {
    const colorClasses: any = {
        teal: 'bg-teal-50 text-[#00A99D]',
        purple: 'bg-purple-50 text-purple-600',
        blue: 'bg-blue-50 text-blue-600'
    };

    return (
        <div className={`bg-white p-5 rounded-[28px] border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative animate-in fade-in slide-in-from-left-8 ${delay} fill-mode-both`}>
            <button className="absolute top-5 right-5 h-7 w-7 rounded-lg bg-slate-50 text-slate-300 flex items-center justify-center hover:bg-[#00A99D] hover:text-white hover:rotate-90 transition-all duration-500">
                <Plus size={14} />
            </button>
            <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 ${colorClasses[color]}`}>
                    {icon}
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-black text-slate-700">{label}</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase">{date}</p>
                    <h4 className="text-2xl font-black text-slate-800 tracking-tighter mt-1">{new Intl.NumberFormat('id-ID').format(amount)}</h4>
                    <div className="flex gap-2 mt-3">
                        <span className={`px-3 py-1 text-[9px] font-black rounded-full flex items-center gap-1 animate-pulse ${colorClasses[color]}`}>
                            <CheckCircle2 size={10} /> {status}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HistoryRow({ type, date, status, color, delay }: any) {
    const colorClasses: any = {
        teal: 'bg-teal-50 text-[#00A99D]',
        purple: 'bg-purple-50 text-purple-600',
        blue: 'bg-blue-50 text-blue-600'
    };

    return (
        <div 
            className="flex items-center justify-between p-3.5 rounded-[22px] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-md transition-all duration-500 group animate-in fade-in slide-in-from-right-4 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${colorClasses[color]}`}>
                    <FileText size={16} />
                </div>
                <div>
                    <p className="text-xs font-bold text-slate-700">{type}</p>
                    <p className="text-[9px] font-bold text-slate-300">{date}</p>
                </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm group-hover:border-emerald-100 transition-colors">
                <CheckCircle2 size={12} className="text-emerald-500 group-hover:scale-125 transition-transform" />
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter">{status}</span>
            </div>
        </div>
    );
}