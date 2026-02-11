import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    User, Mail, Phone, MapPin, ShieldCheck, 
    Calendar, IdCard, Edit3, CloudUpload, FileText,
    Pencil 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Profil Saya', href: '/profile' },
];

export default function UserProfile() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profil Saya - Mitraya" />
            
            <div className="min-h-screen w-full bg-[#F8FAFB] p-4 md:p-8 font-['Plus_Jakarta_Sans']">
                <div className="max-w-4xl mx-auto">
                    
                    <div className="bg-white rounded-[32px] border border-white shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                        
                        {/* Header Banner */}
                        <div className="relative h-32 md:h-40 bg-gradient-to-r from-[#00A99D] to-[#0D9488]">
                            <div className="absolute -bottom-12 left-8">
                                <div className="relative group">
                                    <div className="h-24 w-24 md:h-28 md:w-28 rounded-[28px] bg-white p-1 shadow-xl transition-transform duration-500 group-hover:scale-105">
                                        <div className="h-full w-full rounded-[24px] bg-teal-50 flex items-center justify-center font-black text-[#00A99D] text-3xl">
                                            W
                                        </div>
                                    </div>
                                    {/* Pensil Menyatu: Posisi Absolute di pojok bawah avatar */}
                                    <button className="absolute -bottom-1 -right-1 p-2 bg-[#00A99D] text-white rounded-xl shadow-lg border-2 border-white hover:bg-[#008279] transition-all active:scale-90">
                                        <Pencil size={14} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-16 px-8 pb-8">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-12">
                                <div>
                                    <h1 className="text-2xl font-black text-slate-800 tracking-tight">Wiwik Ainun Janah</h1>
                                    <p className="text-sm text-slate-400 font-bold uppercase tracking-tighter">Anggota Koperasi Mitraya</p>
                                </div>
                                {/* Tombol Tunggal: Edit Data dengan warna Teal */}
                                <Button className="rounded-2xl bg-[#00A99D] hover:bg-[#008279] font-bold h-12 px-8 gap-2 shadow-lg shadow-teal-500/20 transition-all active:scale-95">
                                    <Edit3 size={18} /> Edit Data Profil
                                </Button>
                            </div>

                            <div className="space-y-12">
                                {/* --- IDENTITAS PRIBADI --- */}
                                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                                    <h3 className="text-[11px] font-black text-[#00A99D] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                                        <IdCard size={16} /> Identitas Pribadi
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                                        <ProfileItem label="Nomor Anggota" value="MIT-2025121101" isSpecial />
                                        <ProfileItem label="Nama Lengkap" value="Wiwik Ainun Janah" />
                                        <ProfileItem label="NIK (KTP)" value="3526012345670001" />
                                        <ProfileItem label="Tempat Lahir" value="Bangkalan" />
                                        <ProfileItem label="Tanggal Lahir" value="15 Juni 2002" />
                                        <ProfileItem label="Jenis Kelamin" value="Perempuan" />
                                    </div>
                                </div>

                                <hr className="border-slate-50" />

                                {/* --- KONTAK & LOKASI --- */}
                                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
                                    <h3 className="text-[11px] font-black text-[#00A99D] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                                        <Mail size={16} /> Kontak & Lokasi
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                                        <ProfileItem label="Email" value="wiwik@email.com" />
                                        <ProfileItem label="Nomor HP" value="+62 812-3456-7890" />
                                        <div className="md:col-span-2">
                                            <ProfileItem label="Alamat Lengkap" value="Universitas Trunojoyo Madura, Kamal, Bangkalan, Jawa Timur" />
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-slate-50" />

                                {/* --- STATUS & DOKUMEN (Struktur Baru) --- */}
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                                    <h3 className="text-[11px] font-black text-[#00A99D] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                                        <ShieldCheck size={16} /> Status & Dokumen
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        {/* Sisi Kiri: Status & Tanggal (Tersusun ke bawah) */}
                                        <div className="space-y-8">
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Status Keanggotaan</p>
                                                <div className="flex items-center gap-2 bg-teal-50/50 w-fit px-5 py-2.5 rounded-2xl border border-teal-100/50 shadow-sm shadow-teal-500/5">
                                                    <div className="h-2 w-2 rounded-full bg-[#00A99D] animate-pulse" />
                                                    <span className="text-sm font-black text-[#00A99D] uppercase tracking-tighter">Aktif</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Tanggal Bergabung</p>
                                                <div className="flex items-center gap-3 text-slate-700">
                                                    <Calendar size={18} className="text-slate-300" />
                                                    <span className="text-sm font-bold">11 Desember 2025</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sisi Kanan: KTP (Berseberangan) */}
                                        <div className="group">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Dokumen Identitas (KTP)</p>
                                            <div className="flex items-center justify-between p-5 rounded-[24px] bg-slate-50 border border-dashed border-slate-200 hover:border-[#00A99D] hover:bg-teal-50/20 transition-all cursor-pointer group">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:text-[#00A99D] transition-colors">
                                                        <FileText size={22} />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-black text-slate-700 tracking-tight">ktp_wiwik_ainun.jpg</p>
                                                        <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">Sudah Terverifikasi</p>
                                                    </div>
                                                </div>
                                                <CloudUpload size={20} className="text-[#00A99D] opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

function ProfileItem({ label, value, isSpecial = false }: { label: string, value: string, isSpecial?: boolean }) {
    return (
        <div className="space-y-1.5 transition-all hover:translate-x-1 duration-300">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
            <p className={`text-sm font-bold ${isSpecial ? 'text-[#00A99D] text-base' : 'text-slate-700'}`}>{value}</p>
        </div>
    );
}