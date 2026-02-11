import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Landmark, FileSearch, CheckCircle2, XCircle, 
    Search, Plus, Calendar, Activity, MoreVertical 
} from 'lucide-react';
import { 
    BarChart, Bar, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Manajemen Pinjaman', href: '/loans' },
];

const dataPinjaman = [
    { name: 'Lancar', value: 85, color: '#00A99D' },
    { name: 'Meragukan', value: 10, color: '#F59E0B' },
    { name: 'Macet', value: 5, color: '#EF4444' },
];

const loanRequests = [
    { id: 1, name: 'Budi Hartono', amount: 'Rp 10.000.000', tenor: '12 bln', date: '10 Feb 2026', type: 'Kredit Motor', status: 'Pending' },
    { id: 2, name: 'Dewi Lestari', amount: 'Rp 5.000.000', tenor: '6 bln', date: '08 Feb 2026', type: 'Modal Usaha', status: 'Approved' },
    { id: 3, name: 'Ahmad Subarjo', amount: 'Rp 25.000.000', tenor: '24 bln', date: '05 Feb 2026', type: 'Renovasi Rumah', status: 'Approved' },
];

export default function LoanManagement() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Pinjaman - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Manajemen Pinjaman</h1>
                        <p className="text-slate-500 mt-1 text-sm">Proses pengajuan kredit dan monitoring kesehatan cicilan anggota.</p>
                    </div>
                    <Button className="bg-[#00A99D] hover:bg-[#008279] rounded-2xl h-12 px-6 font-bold shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
                        <Plus size={18} className="mr-2" /> Ajukan Pinjaman Baru
                    </Button>
                </div>

                {/* --- TOP SECTION: STATS & MONITORING --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Monitoring Kesehatan Cicilan */}
                    <div className="lg:col-span-7 bg-white p-6 rounded-[32px] border border-white shadow-sm animate-in fade-in slide-in-from-left-6 duration-700">
                        <div className="flex items-center justify-between mb-6 px-2 text-sm font-bold text-slate-800 uppercase tracking-wider">
                            <span className="flex items-center gap-2"><Activity className="text-[#00A99D]" size={18} /> Monitoring Kolektibilitas</span>
                        </div>
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dataPinjaman} layout="vertical" margin={{ left: -20 }}>
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12, fontWeight: 600}} width={100} />
                                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                                    <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={30}>
                                        {dataPinjaman.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Quick Stats Stack */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {[
                            { label: 'Total Pinjaman Aktif', val: 'Rp 840.2M', icon: <Landmark />, bg: 'bg-teal-50', text: 'text-[#00A99D]', delay: 'duration-300' },
                            { label: 'Pengajuan Baru', val: '12 Berkas', icon: <FileSearch />, bg: 'bg-blue-50', text: 'text-blue-600', delay: 'duration-500' },
                            { label: 'Estimasi Angsuran/Bln', val: 'Rp 45.8M', icon: <Calendar />, bg: 'bg-purple-50', text: 'text-purple-600', delay: 'duration-700' }
                        ].map((stat, i) => (
                            <div key={i} className={`group bg-white p-5 rounded-[24px] border border-white shadow-sm flex items-center gap-4 animate-in fade-in slide-in-from-right-6 transition-all hover:shadow-md hover:-translate-y-1 ${stat.delay}`}>
                                <div className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${stat.bg} ${stat.text}`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <h4 className="text-lg font-black text-slate-800">{stat.val}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- TABEL --- */}
                <div className="rounded-[32px] border border-white bg-white/80 p-6 shadow-sm backdrop-blur-xl animate-in fade-in zoom-in-95 duration-1000">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Daftar Pengajuan Kredit</h3>
                        <div className="relative w-full md:w-80 group">
                            <Search className="absolute left-4 top-3 text-slate-400 group-focus-within:text-[#00A99D] transition-colors" size={16} />
                            <Input placeholder="Cari nama pemohon..." className="pl-10 h-10 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all" />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    <th className="px-6 pb-2">Nama Pemohon</th>
                                    <th className="px-6 pb-2">Keperluan</th>
                                    <th className="px-6 pb-2">Nominal & Tenor</th>
                                    <th className="px-6 pb-2 text-center">Status</th>
                                    <th className="px-6 pb-2 text-center">Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loanRequests.map((loan, index) => (
                                    <tr 
                                        key={loan.id} 
                                        className="group bg-white hover:bg-teal-50/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                                    >
                                        <td className="px-6 py-4 rounded-l-[20px] border-y border-l border-slate-50 group-hover:border-teal-100/50">
                                            <p className="font-bold text-slate-700 text-sm group-hover:text-[#00A99D] transition-colors">{loan.name}</p>
                                            <p className="text-[10px] text-slate-400 uppercase">{loan.date}</p>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50">
                                            <span className="text-[10px] font-black uppercase text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{loan.type}</span>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50">
                                            <p className="font-bold text-[#00A99D] text-sm">{loan.amount}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Tenor: {loan.tenor}</p>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className={`h-1.5 w-1.5 rounded-full ${loan.status === 'Approved' ? 'bg-[#00A99D]' : 'bg-amber-500 animate-pulse'}`} />
                                                <span className={`text-[11px] font-black uppercase tracking-tight ${loan.status === 'Approved' ? 'text-[#00A99D]' : 'text-amber-600'}`}>
                                                    {loan.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 rounded-r-[20px] border-y border-r border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex justify-center gap-1">
                                                {loan.status === 'Pending' ? (
                                                    <div className="flex gap-2">
                                                        <Button size="sm" className="h-8 rounded-lg bg-[#00A99D] hover:bg-[#008279] text-[10px] font-black uppercase transition-all active:scale-90 shadow-md shadow-teal-500/10">Setujui</Button>
                                                        <Button size="sm" variant="ghost" className="h-8 rounded-lg text-red-500 hover:bg-red-50 text-[10px] font-black uppercase transition-all active:scale-90">Tolak</Button>
                                                    </div>
                                                ) : (
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg text-slate-400 hover:text-[#00A99D] hover:bg-teal-50">
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