import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Users, UserCheck, UserX, ShieldCheck, MoreVertical, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Manajemen Anggota', href: '/members' },
];

// Data Dummy Anggota
const members = [
    { id: 1, name: 'Ahmad Subarjo', email: 'ahmad@email.com', status: 'Aktif', verified: true, joinDate: '12 Jan 2026' },
    { id: 2, name: 'Siti Aminah', email: 'siti@email.com', status: 'Pending', verified: false, joinDate: '05 Feb 2026' },
    { id: 3, name: 'Budi Hartono', email: 'budi@email.com', status: 'Nonaktif', verified: true, joinDate: '20 Des 2025' },
    { id: 4, name: 'Dewi Lestari', email: 'dewi@email.com', status: 'Aktif', verified: true, joinDate: '01 Feb 2026' },
];

export default function MemberManagement() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Anggota - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER & STATS RINGKAS --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-700">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Manajemen Anggota</h1>
                        <p className="text-slate-500 mt-1 text-sm">Kelola data, verifikasi, dan status keanggotaan.</p>
                    </div>
                    <Button className="bg-[#00A99D] hover:bg-[#008279] rounded-2xl h-12 px-6 font-bold shadow-lg shadow-teal-500/20">
                        + Tambah Anggota Baru
                    </Button>
                </div>

               {/* --- MINI STATS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="group bg-white p-6 rounded-[24px] border border-white shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="h-12 w-12 rounded-2xl bg-teal-50 text-[#00A99D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Anggota</p>
                            <h4 className="text-xl font-black text-slate-800">1,248</h4>
                        </div>
                    </div>
                    <div className="group bg-white p-6 rounded-[24px] border border-white shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Perlu Verifikasi</p>
                            <h4 className="text-xl font-black text-slate-800">12</h4>
                        </div>
                    </div>
                    <div className="group bg-white p-6 rounded-[24px] border border-white shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                        <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <UserCheck size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Anggota Aktif</p>
                            <h4 className="text-xl font-black text-slate-800">1,150</h4>
                        </div>
                    </div>
                </div>
                <div className="rounded-[32px] border border-white bg-white/80 p-6 shadow-sm backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-700">
                    {/* Tool Bar */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                    {/* Search Input Container */}
                    <div className="relative w-full md:w-96 group">
                        {/* Icon Search: Berubah menjadi Teal saat input fokus */}
                        <Search 
                            className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#00A99D] transition-colors duration-300" 
                            size={18} 
                        />
                        <Input 
                            placeholder="Cari nama atau email..." 
                            className="pl-12 h-12 rounded-2xl border-slate-100 bg-slate-50/50 text-slate-700 placeholder:text-slate-400 focus:border-[#00A99D]/30 focus:bg-white focus:ring-[#00A99D]/10 transition-all shadow-none" 
                        />
                    </div>
                    <Button 
                        variant="outline" 
                        className="rounded-2xl h-12 gap-2 border-teal-100 bg-teal-50/30 text-[#00A99D] font-bold hover:bg-[#00A99D] hover:text-white hover:border-[#00A99D] transition-all duration-300 active:scale-95 shadow-none"
                    >
                        <Filter size={18} /> 
                        <span>Filter Anggota</span>
                    </Button>
                </div>

                    {/* Table Area */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    <th className="px-6 pb-2">Anggota</th>
                                    <th className="px-6 pb-2">Tanggal Gabung</th>
                                    <th className="px-6 pb-2">Status Verifikasi</th>
                                    <th className="px-6 pb-2">Status Akun</th>
                                    <th className="px-6 pb-2 text-center">Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member, index) => (
                                    <tr 
                                        key={member.id} 
                                        className="group bg-white hover:shadow-md hover:shadow-teal-500/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                                        style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                                    >
                                        {/* Profil Anggota */}
                                        <td className="px-6 py-4 rounded-l-[20px] border-y border-l border-slate-50 group-hover:border-teal-100/50">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center font-bold text-[#00A99D] border border-teal-100/50">
                                                    {member.name[0]}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-700 text-sm">{member.name}</p>
                                                    <p className="text-[11px] text-slate-400">{member.email}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Tanggal */}
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50">
                                            <span className="text-sm font-medium text-slate-600">{member.joinDate}</span>
                                        </td>

                                        {/* Kolom Verifikasi (Sekaligus Aksi Verifikasi) */}
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50">
                                            {member.verified ? (
                                                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-teal-50 text-[#00A99D] text-[10px] font-bold uppercase tracking-wider">
                                                    <ShieldCheck size={14} strokeWidth={2.5} /> Terverifikasi
                                                </span>
                                            ) : (
                                                <Button 
                                                    size="sm" 
                                                    className="h-8 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm transition-transform active:scale-95"
                                                >
                                                    Verifikasi Sekarang
                                                </Button>
                                            )}
                                        </td>

                                        {/* Kolom Status Akun (Bersih dengan Warna Teks) */}
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50">
                                            <div className="flex items-center gap-2">
                                                <div className={`h-2 w-2 rounded-full ${
                                                    member.status === 'Aktif' ? 'bg-[#00A99D]' : 
                                                    member.status === 'Pending' ? 'bg-amber-400' : 'bg-slate-300'
                                                }`} />
                                                <span className={`text-[11px] font-black uppercase tracking-tight ${
                                                    member.status === 'Aktif' ? 'text-[#00A99D]' : 
                                                    member.status === 'Pending' ? 'text-amber-600' : 'text-slate-400'
                                                }`}>
                                                    {member.status}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Aksi Pengaturan (Hanya untuk Edit/Hapus/Lainnya) */}
                                        <td className="px-6 py-4 rounded-r-[20px] border-y border-r border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                {/* Tombol Cepat untuk Switch Status */}
                                                <Button size="icon" variant="ghost" title="Ubah Status" className="h-8 w-8 rounded-lg text-slate-400 hover:text-[#00A99D] hover:bg-teal-50">
                                                    <UserCheck size={16} />
                                                </Button>
                                                <Button size="icon" variant="ghost" title="Nonaktifkan" className="h-8 w-8 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50">
                                                    <UserX size={16} />
                                                </Button>
                                                <div className="w-px h-4 bg-slate-100 mx-1" />
                                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg text-slate-400 hover:bg-slate-100">
                                                    <MoreVertical size={16} />
                                                </Button>
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