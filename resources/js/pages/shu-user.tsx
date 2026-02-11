import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Coins, 
    TrendingUp, 
    PieChart as PieChartIcon, 
    History, 
    ArrowUpRight, 
    Info,
    Receipt
} from 'lucide-react';
import { 
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip 
} from 'recharts';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'SHU Saya', href: '/user-shu' },
];

const dataDistribusi = [
    { name: 'Hak Anggota', value: 40, color: '#00A99D' },
    { name: 'Cadangan Koperasi', value: 25, color: '#0D9488' },
    { name: 'Dana Pengurus', value: 10, color: '#F59E0B' },
    { name: 'Sosial & Pendidikan', value: 25, color: '#3B82F6' },
];

const riwayatPenerimaan = [
    { tahun: '2025', jasaModal: 'Rp 450.000', jasaUsaha: 'Rp 320.000', total: 'Rp 770.000', status: 'Sudah Cair' },
    { tahun: '2024', jasaModal: 'Rp 410.000', jasaUsaha: 'Rp 290.000', total: 'Rp 700.000', status: 'Sudah Cair' },
];

export default function UserSHU() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="SHU Saya - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Sisa Hasil Usaha (SHU)</h1>
                        <p className="text-slate-500 mt-1 text-sm">Transparansi pembagian hasil usaha tahunan Anda.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* --- KIRI: TAHUN BUKU, LABA & DISTRIBUSI --- */}
                    <div className="lg:col-span-4 space-y-6">
                        
                        {/* Tahun Buku - Sekarang sejajar dengan lebar Total Laba */}
                        <div className="bg-white px-6 py-4 rounded-[24px] border border-white shadow-sm flex items-center justify-between animate-in fade-in slide-in-from-left-6 duration-500">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#00A99D] flex items-center justify-center">
                                    <TrendingUp size={20} />
                                </div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tahun Buku</span>
                            </div>
                            <span className="text-sm font-black text-slate-700">2025 (Berjalan)</span>
                        </div>

                        {/* Total SHU Tahunan (Koperasi) */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#00A99D] to-[#078077] p-7 rounded-[32px] text-white shadow-xl shadow-teal-500/20 animate-in fade-in slide-in-from-left-6 duration-700">
                            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                            <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-teal-400/20 blur-2xl" />
                            <div className="relative">
                                <div className="flex items-center gap-2 opacity-80 mb-5">
                                    <div className="p-1.5 bg-white/20 rounded-lg">
                                        <Coins size={16} className="text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]">Total Laba Koperasi</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-3xl font-black tracking-tight drop-shadow-sm">
                                        Rp 450.000.000
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1 w-1 rounded-full bg-teal-200 animate-pulse" />
                                        <p className="text-[10px] font-bold text-teal-50/80 uppercase tracking-tighter">
                                            Keuntungan Bersih (EAT) Periode 2025
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Alokasi Pembagian */}
                        <div className="bg-white p-6 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-left-6 duration-700 delay-200">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <PieChartIcon size={16} className="text-[#00A99D]" /> Alokasi Pembagian
                            </h3>
                            <div className="h-[200px] w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={dataDistribusi} innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value" stroke="none">
                                            {dataDistribusi.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <span className="text-xl font-black text-[#00A99D]">40%</span>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase">Hak Anggota</span>
                                </div>
                            </div>
                            <div className="space-y-3 mt-4 px-2">
                                {dataDistribusi.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between text-[10px] font-bold uppercase">
                                        <div className="flex items-center gap-2 text-slate-500 tracking-tighter">
                                            <div className="h-2 w-2 rounded-full" style={{backgroundColor: item.color}} />
                                            {item.name}
                                        </div>
                                        <span className="text-slate-800">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- KANAN: RIWAYAT PENERIMAAN --- */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white p-6 md:p-8 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-right-6 duration-700">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                                    <History size={18} className="text-[#00A99D]" /> Riwayat SHU Saya
                                </h3>
                                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100/50">
                                    <Info size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-tighter">Berdasarkan Jasa Modal & Usaha</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {riwayatPenerimaan.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="group bg-slate-50/50 hover:bg-white border border-slate-50 hover:border-teal-100 p-5 rounded-[24px] transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 shadow-none hover:shadow-md hover:shadow-teal-500/5"
                                        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                                    >
                                        <div className="flex flex-col md:flex-row justify-between gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#00A99D] group-hover:scale-110 transition-transform duration-500">
                                                    <Receipt size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-700 text-sm">Periode SHU {item.tahun}</p>
                                                    <div className="flex items-center gap-1.5 mt-0.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-[#00A99D]" />
                                                        <p className="text-[10px] font-black text-[#00A99D] uppercase tracking-tighter">{item.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 md:flex md:items-center gap-6 md:gap-12">
                                                <div className="transition-all group-hover:translate-x-1">
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Jasa Modal</p>
                                                    <p className="text-xs font-bold text-slate-600">{item.jasaModal}</p>
                                                </div>
                                                <div className="transition-all group-hover:translate-x-1">
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Jasa Usaha</p>
                                                    <p className="text-xs font-bold text-slate-600">{item.jasaUsaha}</p>
                                                </div>
                                                <div className="col-span-2 md:col-auto border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-8 text-right">
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Total Terima</p>
                                                    <p className="text-xl font-black text-[#00A99D] transition-all group-hover:scale-105">{item.total}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full mt-8 bg-teal-50 text-[#00A99D] hover:bg-[#00A99D] hover:text-white rounded-2xl h-12 font-bold transition-all border border-teal-100/50 active:scale-95 shadow-none hover:shadow-lg hover:shadow-teal-500/10">
                                <ArrowUpRight size={18} className="mr-2" /> Lihat Rincian Perhitungan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}