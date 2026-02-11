import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Wallet, CheckCircle2, Clock, FileDown, 
    Search, Filter, History, MoreVertical, Plus,
    TrendingUp 
} from 'lucide-react';
import { 
    AreaChart, Area, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Manajemen Simpanan', href: '/savings' },
];

const dataSimpanan = [
    { name: 'Sen', total: 4000000 },
    { name: 'Sel', total: 3000000 },
    { name: 'Rab', total: 2000000 },
    { name: 'Kam', total: 2780000 },
    { name: 'Jum', total: 1890000 },
    { name: 'Sab', total: 2390000 },
    { name: 'Min', total: 3490000 },
];

const depositRequests = [
    { id: 1, name: 'Ahmad Subarjo', type: 'Simpanan Wajib', amount: 'Rp 100.000', date: '10 Feb 2026', status: 'Pending' },
    { id: 2, name: 'Siti Aminah', type: 'Simpanan Pokok', amount: 'Rp 500.000', date: '09 Feb 2026', status: 'Verified' },
    { id: 3, name: 'Budi Hartono', type: 'Simpanan Sukarela', amount: 'Rp 50.000', date: '08 Feb 2026', status: 'Verified' },
];

export default function SavingsManagement() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Simpanan - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Manajemen Simpanan</h1>
                        <p className="text-slate-500 mt-1 text-sm">Monitor pertumbuhan dana dan validasi simpanan anggota.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="rounded-2xl h-12 px-6 border-teal-100 bg-teal-50/30 text-[#00A99D] font-bold hover:bg-[#00A99D] hover:text-white transition-all active:scale-95">
                            <FileDown size={18} className="mr-2" /> Cetak Laporan
                        </Button>
                        <Button className="bg-[#00A99D] hover:bg-[#008279] rounded-2xl h-12 px-6 font-bold shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
                            <Plus size={18} className="mr-2" /> Input Simpanan
                        </Button>
                    </div>
                </div>

                {/* --- STATS & GRAPH --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Grafik Arus Simpanan */}
                    <div className="lg:col-span-8 bg-white p-6 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-left-4 duration-700">
                        <div className="flex items-center justify-between mb-6 px-2">
                            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
                                <TrendingUp className="text-[#00A99D]" size={18} /> Arus Simpanan Pekan Ini
                            </h3>
                        </div>
                        <div className="h-[260px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataSimpanan}>
                                    <defs>
                                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00A99D" stopOpacity={0.15}/>
                                            <stop offset="95%" stopColor="#00A99D" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10}} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10}} />
                                    <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                                    <Area type="monotone" dataKey="total" stroke="#00A99D" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Stacked Stats List */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {[
                            { label: 'Total Kas Koperasi', val: 'Rp 1.420.5M', icon: <Wallet />, bg: 'bg-teal-50', text: 'text-[#00A99D]', delay: 'duration-300' },
                            { label: 'Setoran Hari Ini', val: 'Rp 12.4M', icon: <History />, bg: 'bg-blue-50', text: 'text-blue-600', delay: 'duration-500' },
                            { label: 'Menunggu Validasi', val: '8 Transaksi', icon: <Clock />, bg: 'bg-amber-50', text: 'text-amber-600', delay: 'duration-700' }
                        ].map((stat, i) => (
                            <div key={i} className={`group bg-white p-6 rounded-[24px] border border-white shadow-sm flex items-center gap-4 animate-in fade-in slide-in-from-right-4 transition-all hover:shadow-md hover:-translate-y-1 ${stat.delay}`}>
                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${stat.bg} ${stat.text}`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <h4 className="text-xl font-black text-slate-800">{stat.val}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- TABEL VALIDASI --- */}
                <div className="rounded-[32px] border border-white bg-white/80 p-6 shadow-sm backdrop-blur-xl animate-in fade-in zoom-in-95 duration-1000">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider text-sm">Antrian Validasi</h3>
                        <div className="relative w-full md:w-80 group">
                            <Search className="absolute left-4 top-3 text-slate-400 group-focus-within:text-[#00A99D] transition-colors" size={16} />
                            <Input placeholder="Cari nama anggota..." className="pl-10 h-10 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all" />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    <th className="px-6 pb-2">Nama Anggota</th>
                                    <th className="px-6 pb-2">Kategori</th>
                                    <th className="px-6 pb-2">Nominal</th>
                                    <th className="px-6 pb-2 text-center">Status</th>
                                    <th className="px-6 pb-2 text-center">Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {depositRequests.map((req, index) => (
                                    <tr 
                                        key={req.id} 
                                        className="group bg-white hover:bg-teal-50/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                                    >
                                        <td className="px-6 py-4 rounded-l-[20px] border-y border-l border-slate-50">
                                            <p className="font-bold text-slate-700 text-sm group-hover:text-[#00A99D] transition-colors">{req.name}</p>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{req.date}</p>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50">
                                            <span className="text-[10px] font-black uppercase text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{req.type}</span>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 font-bold text-[#00A99D]">
                                            {req.amount}
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className={`h-1.5 w-1.5 rounded-full ${req.status === 'Verified' ? 'bg-[#00A99D]' : 'bg-amber-500 animate-pulse'}`} />
                                                <span className={`text-[11px] font-black uppercase tracking-tight ${req.status === 'Verified' ? 'text-[#00A99D]' : 'text-amber-600'}`}>
                                                    {req.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 rounded-r-[20px] border-y border-r border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex justify-center gap-1">
                                                {req.status === 'Pending' ? (
                                                    <Button size="sm" className="h-8 rounded-lg bg-[#00A99D] hover:bg-[#008279] text-[10px] font-black uppercase transition-transform active:scale-95 shadow-md shadow-teal-500/10">Validasi</Button>
                                                ) : (
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg text-slate-400 hover:text-[#00A99D] hover:bg-teal-50 transition-all">
                                                        <MoreVertical size={16} />
                                                    </Button>
                                                )}
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