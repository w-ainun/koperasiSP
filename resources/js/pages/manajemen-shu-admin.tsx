import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Coins, 
    Calculator, 
    PieChart as PieChartIcon, 
    Download,
    RefreshCcw,
    MoreVertical,
    Users,
    TrendingUp
} from 'lucide-react';
import { 
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Manajemen SHU', href: '/shu' },
];

const dataDistribusi = [
    { name: 'Jasa Anggota', value: 40, color: '#00A99D' },
    { name: 'Cadangan', value: 25, color: '#0D9488' },
    { name: 'Pengurus', value: 10, color: '#F59E0B' },
    { name: 'Sosial', value: 10, color: '#EF4444' },
    { name: 'Pendidikan', value: 15, color: '#3B82F6' },
];

const riwayatSHU = [
    { tahun: '2025', total: 'Rp 450.000.000', anggota: '120 Orang', status: 'Selesai' },
    { tahun: '2024', total: 'Rp 380.000.000', anggota: '105 Orang', status: 'Selesai' },
    { tahun: '2023', total: 'Rp 310.000.000', anggota: '95 Orang', status: 'Selesai' },
];

export default function SHUManagement() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen SHU - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Manajemen SHU</h1>
                        <p className="text-slate-500 mt-1 text-sm">Distribusi bagi hasil otomatis berdasarkan jasa modal dan anggota.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="rounded-2xl h-12 px-6 border-teal-100 bg-teal-50/30 text-[#00A99D] font-bold hover:bg-[#00A99D] hover:text-white transition-all active:scale-95">
                            <Download size={18} className="mr-2" /> Ekspor Laporan
                        </Button>
                        <Button className="bg-[#00A99D] hover:bg-[#008279] rounded-2xl h-12 px-6 font-bold shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
                            <Calculator size={18} className="mr-2" /> Proses SHU Baru
                        </Button>
                    </div>
                </div>

                {/* --- TOP SECTION: INPUT & VISUALIZATION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Input Laba Tahunan */}
                    <div className="lg:col-span-5 bg-white p-6 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-left-6 duration-700">
                        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider mb-6">
                            <Coins className="text-[#00A99D]" size={18} /> Kalkulasi SHU Tahunan
                        </h3>
                        <div className="space-y-5">
                            <div className="group">
                                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Tahun Buku</label>
                                <Input defaultValue="2026" className="rounded-xl border-slate-100 bg-slate-50/50 mt-1 focus:bg-white transition-all h-11" />
                            </div>
                            <div className="group">
                                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Total Laba Bersih (EAT)</label>
                                <Input placeholder="Rp 0" className="rounded-xl border-slate-100 bg-slate-50/50 mt-1 font-bold text-[#00A99D] text-lg h-12 focus:bg-white transition-all" />
                            </div>
                            <div className="pt-2">
                                {/* Perbaikan Warna Tombol: Menggunakan Slate-800 agar tidak kontras sendirian */}
                                <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-xl h-12 font-bold transition-all active:scale-95 shadow-lg shadow-slate-200">
                                    <RefreshCcw size={16} className="mr-2" /> Kalkulasi Otomatis
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Chart Alokasi SHU */}
                    <div className="lg:col-span-7 bg-white p-6 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-right-6 duration-700">
                        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider mb-2">
                            <PieChartIcon className="text-[#00A99D]" size={18} /> Persentase Alokasi SHU
                        </h3>
                        <div className="h-[240px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataDistribusi}
                                        innerRadius={65}
                                        outerRadius={85}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {dataDistribusi.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                    <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" wrapperStyle={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#64748B' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* --- RIWAYAT DISTRIBUSI --- */}
                <div className="rounded-[32px] border border-white bg-white/80 p-6 shadow-sm backdrop-blur-xl animate-in fade-in zoom-in-95 duration-1000">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                            <TrendingUp className="text-[#00A99D]" size={18} /> Riwayat Pembagian SHU
                        </h3>
                    </div>

                    <div className="overflow-x-auto -mx-4 md:mx-0">
                        <table className="w-full text-left border-separate border-spacing-y-3 px-4 md:px-0">
                            <thead>
                                <tr className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    <th className="px-6 pb-2">Tahun Buku</th>
                                    <th className="px-6 pb-2">Total Dana Dibagikan</th>
                                    <th className="px-6 pb-2">Penerima</th>
                                    <th className="px-6 pb-2 text-center">Status</th>
                                    <th className="px-6 pb-2 text-center">Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {riwayatSHU.map((item, index) => (
                                    <tr 
                                        key={item.tahun} 
                                        className="group bg-white hover:shadow-md hover:shadow-teal-500/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
                                        style={{ 
                                            animationDelay: `${index * 150}ms`, 
                                            animationFillMode: 'both' 
                                        }}
                                    >
                                        {/* Tahun Buku */}
                                        <td className="px-6 py-5 rounded-l-[24px] border-y border-l border-slate-50 group-hover:border-teal-100/50">
                                            <div className="flex flex-col">
                                                <p className="font-bold text-slate-700 text-sm">Periode {item.tahun}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">Tahun Buku Terpilih</p>
                                            </div>
                                        </td>

                                        {/* Total Dana */}
                                        <td className="px-6 py-5 border-y border-slate-50 group-hover:border-teal-100/50">
                                            <p className="font-bold text-[#00A99D] text-sm">{item.total}</p>
                                        </td>

                                        {/* Penerima */}
                                        <td className="px-6 py-5 border-y border-slate-50 group-hover:border-teal-100/50">
                                            <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-tighter">
                                                <div className="h-7 w-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-[#00A99D] transition-colors">
                                                    <Users size={14} />
                                                </div>
                                                {item.anggota}
                                            </div>
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-5 border-y border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#00A99D] shadow-[0_0_8px_rgba(0,169,157,0.5)]" />
                                                <span className="text-[11px] font-black text-[#00A99D] uppercase tracking-tighter">
                                                    {item.status}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Tindakan */}
                                        <td className="px-6 py-5 rounded-r-[24px] border-y border-r border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                {/* Tombol Cepat Cetak */}
                                                <button className="h-8 px-3 rounded-lg text-[10px] font-bold uppercase text-slate-400 hover:text-[#00A99D] hover:bg-teal-50 transition-all">
                                                    Slip
                                                </button>
                                                <div className="w-px h-4 bg-slate-100 mx-1" />
                                                <button className="h-9 w-9 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 transition-all active:scale-90">
                                                    <MoreVertical size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}