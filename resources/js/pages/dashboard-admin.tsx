import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { 
    Users, Wallet, Landmark, TrendingUp, 
    PieChart, LayoutDashboard, FileText, ChevronRight 
} from 'lucide-react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard Admin',
        href: dashboard().url,
    },
];

// Sidebar Menu Configuration
const sidebarMenu = [
    { title: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { title: 'Manajemen Anggota', icon: <Users size={18} />, active: false },
    { title: 'Manajemen Simpanan', icon: <Wallet size={18} />, active: false },
    { title: 'Manajemen Pinjaman', icon: <Landmark size={18} />, active: false },
    { title: 'Manajemen SHU', icon: <PieChart size={18} />, active: false },
    { title: 'Laporan', icon: <FileText size={18} />, active: false },
];

const dataGrafik = [
    { name: 'Jan', simpanan: 4000, pinjaman: 2400 },
    { name: 'Feb', simpanan: 3000, pinjaman: 1398 },
    { name: 'Mar', simpanan: 5000, pinjaman: 9800 },
    { name: 'Apr', simpanan: 2780, pinjaman: 3908 },
    { name: 'Mei', simpanan: 4890, pinjaman: 4800 },
    { name: 'Jun', simpanan: 6390, pinjaman: 3800 },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />
            
            <div className="flex h-full font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- CONTENT AREA --- */}
                <main className="flex-1 p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    
                    {/* Header Section */}
                    <div className="flex items-center justify-between animate-in fade-in duration-700">
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Ringkasan Operasional</h1>
                            <p className="text-slate-500 mt-1 text-sm">Selamat datang kembali, Admin KSP Mitraya.</p>
                        </div>
                    </div>

                    {/* Statistic Cards - Perbaikan Icon Anggota */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-700">
                        {/* Kartu Anggota */}
                        <div className="group rounded-[32px] border border-white bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-xl">
                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-500">
                                    <Users size={28} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Jumlah Anggota</p>
                                    <h3 className="text-2xl font-black text-slate-800">1,248</h3>
                                </div>
                            </div>
                        </div>

                        {/* Kartu Simpanan */}
                        <div className="group rounded-[32px] border border-white bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-xl">
                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <Wallet size={28} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Total Simpanan</p>
                                    <h3 className="text-2xl font-black text-slate-800">Rp 420.5M</h3>
                                </div>
                            </div>
                        </div>

                        {/* Kartu Pinjaman */}
                        <div className="group rounded-[32px] border border-white bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-xl">
                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                                    <Landmark size={28} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Pinjaman Aktif</p>
                                    <h3 className="text-2xl font-black text-slate-800">84 Kontrak</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart & Activity Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 rounded-[40px] border border-white bg-white/80 p-10 shadow-sm backdrop-blur-xl">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <TrendingUp className="text-[#00A99D]" size={20} />
                                        Pertumbuhan Dana
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">Performa real-time simpan pinjam</p>
                                </div>
                                <select className="text-xs font-bold bg-slate-50 border-none rounded-xl px-4 py-2 text-slate-500 outline-none focus:ring-1 focus:ring-teal-500/20">
                                    <option>6 Bulan Terakhir</option>
                                    <option>1 Tahun Terakhir</option>
                                </select>
                            </div>

                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={dataGrafik}>
                                        <defs>
                                            <linearGradient id="colorSimpanan" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#00A99D" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#00A99D" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={15} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                                        <Tooltip 
                                            contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                                            cursor={{fill: '#F8FAFC'}}
                                        />
                                        <Bar dataKey="simpanan" fill="#00A99D" radius={[10, 10, 0, 0]} barSize={35} />
                                        <Bar dataKey="pinjaman" fill="#E2E8F0" radius={[10, 10, 0, 0]} barSize={35} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Recent Activity Mini List */}
                        <div className="lg:col-span-4 rounded-[40px] border border-white bg-white/80 p-8 shadow-sm backdrop-blur-xl">
                            <h3 className="text-lg font-bold text-slate-800 mb-6">Pendaftar Terbaru</h3>
                            <div className="space-y-6">
                                {[
                                    { name: 'Ahmad Subarjo', time: '2 Jam yang lalu', status: 'Verifikasi' },
                                    { name: 'Siti Aminah', time: '5 Jam yang lalu', status: 'Aktif' },
                                    { name: 'Budi Hartono', time: 'Kemarin', status: 'Aktif' },
                                    { name: 'Dewi Lestari', time: 'Kemarin', status: 'Pending' },
                                ].map((user, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-teal-50 transition-colors"></div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700 group-hover:text-[#00A99D] transition-colors">{user.name}</p>
                                                <p className="text-[10px] text-slate-400">{user.time}</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-3 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-xs font-bold hover:border-[#00A99D] hover:text-[#00A99D] transition-all">
                                Lihat Semua Anggota
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}