import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Wallet, 
    TrendingUp, 
    ArrowUpRight, 
    ArrowRight, 
    PlusCircle, 
    History, 
    PieChart,
    CreditCard,
    CircleDollarSign,
    Landmark,
    Calculator,
    Zap,
    Calendar,
    Sparkles,
    CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

export default function UserDashboard() {
    const formatRupiah = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Mitraya" />
            
            <div className="min-h-screen w-full bg-[#F8FAFB] px-4 py-6 md:px-6 lg:px-8 font-['Plus_Jakarta_Sans']">
                <div className="max-w-7xl mx-auto space-y-8">
                    
                    {/* --- WELCOME HEADER --- */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-top-6 duration-700">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Selamat Datang, Wiwik! 👋</h1>
                            <p className="text-sm text-slate-400 font-medium">Berikut adalah rangkuman aktivitas keuangan Anda hari ini.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden md:block">
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">Status Keanggotaan</p>
                                <p className="text-xs font-bold text-emerald-500">Anggota Aktif</p>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-white shadow-sm border border-slate-50 flex items-center justify-center text-[#00A99D] animate-bounce-slow">
                                <Zap size={24} fill="currentColor" className="opacity-20" />
                            </div>
                        </div>
                    </div>

                    {/* --- SALDO SIMPANAN GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sukarela (Card Utama) - Animasi Zoom-in & Floating */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#00A99D] to-[#0D9488] p-7 rounded-[40px] text-white shadow-xl shadow-teal-500/20 group hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95 duration-700">
                            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-3xl animate-pulse" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md">
                                        <TrendingUp size={20} />
                                    </div>
                                    <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-50/80 mb-1">Simpanan Sukarela</p>
                                    <h2 className="text-3xl font-black tracking-tighter">{formatRupiah(2750000)}</h2>
                                </div>
                            </div>
                        </div>

                        {/* Wajib - Animasi: Pop-in & Hover Rotate */}
                        <div className="bg-white p-7 rounded-[40px] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-in fade-in zoom-in-90 duration-700 delay-150">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm">
                                        <Wallet size={22} />
                                    </div>
                                    <div className="h-2 w-2 rounded-full bg-purple-200 animate-ping" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Simpanan Wajib</p>
                                    <h2 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-purple-600 transition-colors">{formatRupiah(1200000)}</h2>
                                </div>
                            </div>
                        </div>

                        {/* Pokok - Animasi: Pop-in & Hover Scale */}
                        <div className="bg-white p-7 rounded-[40px] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-in fade-in zoom-in-90 duration-700 delay-300">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-12 transition-all duration-500 shadow-sm">
                                        <CircleDollarSign size={22} />
                                    </div>
                                    <CheckCircle size={16} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Simpanan Pokok</p>
                                    <h2 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">{formatRupiah(500000)}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* --- KIRI: PINJAMAN & SHU --- */}
                        <div className="lg:col-span-8 space-y-6">
                            
                            {/* Status Pinjaman - Animasi Slide-in Bottom */}
                            <div className="bg-white p-8 rounded-[40px] border border-white shadow-sm overflow-hidden relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
                                            <CreditCard size={20} />
                                        </div>
                                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Status Pinjaman</h3>
                                    </div>
                                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full border border-emerald-100 uppercase animate-pulse">Lancar</span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Sisa Pinjaman</p>
                                            <h4 className="text-4xl font-black text-slate-800 tracking-tighter">{formatRupiah(4250000)}</h4>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                                                <span>Tenor Berjalan</span>
                                                <span>8 / 12 Bulan</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                                                <div className="h-full bg-gradient-to-r from-[#00A99D] to-[#078077] rounded-full transition-all duration-1000 delay-500" style={{ width: '65%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-slate-50 rounded-3xl p-6 flex flex-col justify-between border border-slate-100/50 hover:bg-white hover:shadow-inner transition-all duration-500">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tagihan Mendatang</p>
                                            <Calendar size={14} className="text-[#00A99D]" />
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-black text-slate-800 tracking-tight">{formatRupiah(850000)}</h5>
                                            <p className="text-[10px] font-bold text-red-400 uppercase mt-1">Jatuh Tempo: 05 Maret</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Estimasi SHU - PERBAIKAN: Warna Indigo-Blue & Animasi Floating */}
                            <div className="bg-gradient-to-br from-[#4F46E5] to-[#3B82F6] p-8 rounded-[40px] text-white shadow-xl shadow-blue-500/10 relative overflow-hidden group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                                <div className="absolute right-0 bottom-0 p-8 opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-1000">
                                    <PieChart size={140} />
                                </div>
                                <div className="absolute top-8 right-8">
                                    <Sparkles className="text-white/40 animate-pulse" size={32} />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-md">
                                            <PieChart size={20} />
                                        </div>
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">Estimasi SHU Tahunan</h3>
                                    </div>
                                    <div>
                                        <h2 className="text-5xl font-black tracking-tighter text-white drop-shadow-sm">{formatRupiah(770000)}</h2>
                                        <p className="text-[11px] font-medium text-blue-100/70 mt-3 max-w-sm leading-relaxed">
                                            Berdasarkan total simpanan dan partisipasi transaksi Anda di Koperasi Mitraya hingga periode ini.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- KANAN: SHORTCUT & INFO --- */}
                        <div className="lg:col-span-4 space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-500">
                            
                            {/* Shortcut Fitur */}
                            <div className="bg-white p-8 rounded-[40px] border border-white shadow-sm space-y-6">
                                <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Fitur Cepat</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <ShortcutButton label="Setor" icon={<PlusCircle size={20} />} color="teal" />
                                    <ShortcutButton label="Pinjam" icon={<Landmark size={20} />} color="blue" />
                                    <ShortcutButton label="Simulasi" icon={<Calculator size={20} />} color="purple" />
                                    <ShortcutButton label="Riwayat" icon={<History size={20} />} color="slate" />
                                </div>
                            </div>

                            {/* Info Koperasi */}
                            <div className="p-7 rounded-[40px] bg-[#00A99D]/5 border border-[#00A99D]/10 space-y-4 hover:bg-[#00A99D]/10 transition-colors duration-500">
                                <div className="flex items-center gap-2 text-[#00A99D]">
                                    <Zap size={18} fill="currentColor" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Tips Mitraya</span>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-bold uppercase tracking-tight">
                                    Tingkatkan simpanan sukarela untuk SHU yang lebih besar di akhir tahun!
                                </p>
                                <button className="flex items-center gap-2 text-[10px] font-black text-[#00A99D] uppercase tracking-widest hover:gap-4 transition-all duration-300">
                                    Lihat Detail <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function ShortcutButton({ label, icon, color }: any) {
    const colorClasses: any = {
        teal: 'bg-teal-50 text-[#00A99D] hover:bg-[#00A99D] hover:text-white',
        blue: 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white',
        purple: 'bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white',
        slate: 'bg-slate-50 text-slate-600 hover:bg-slate-600 hover:text-white'
    };

    return (
        <button className={`w-full p-6 rounded-3xl transition-all duration-500 flex flex-col items-center gap-3 group ${colorClasses[color]} shadow-sm hover:shadow-xl hover:-translate-y-2`}>
            <div className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                {icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
        </button>
    );
}