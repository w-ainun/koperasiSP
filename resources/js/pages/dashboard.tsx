import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Percent, 
    Wallet, 
    CalendarClock, 
    Save, 
    RotateCcw,
    Info,
    ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pengaturan Sistem', href: '/settings/system' },
];

export default function SystemSettings() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pengaturan Sistem - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Pengaturan Kebijakan</h1>
                        <p className="text-slate-500 mt-1 text-sm">Tentukan parameter bunga, simpanan, dan tenor untuk operasional koperasi.</p>
                    </div>
                    <div className="flex gap-3">
                        {/* Reset Default: Warna Amber Solid agar terlihat jelas saat di-klik */}
                        <Button variant="outline" className="rounded-xl border-amber-200 bg-amber-50 text-amber-600 font-bold hover:bg-amber-600 hover:text-white transition-all duration-300 active:scale-95 shadow-sm">
                            <RotateCcw size={18} className="mr-2" /> Reset Default
                        </Button>
                        <Button className="bg-[#00A99D] hover:bg-[#008279] rounded-xl px-6 font-bold shadow-lg shadow-teal-500/20 transition-all active:scale-95">
                            <Save size={18} className="mr-2" /> Simpan Perubahan
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* --- KIRI: FORM PENGATURAN (Jarak dipersingkat) --- */}
                    <div className="lg:col-span-8 space-y-4 animate-in fade-in slide-in-from-left-6 duration-700">
                        <div className="bg-white p-6 md:p-8 rounded-[32px] border border-white shadow-sm space-y-8">
                            
                            {/* Suku Bunga Pinjaman */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#00A99D] flex items-center justify-center">
                                        <Percent size={20} />
                                    </div>
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Suku Bunga Pinjaman</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Bunga Flat (Per Bulan)</label>
                                        <div className="relative">
                                            <Input defaultValue="1.5" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 pr-12 font-bold text-slate-700 focus:bg-white transition-all" />
                                            <span className="absolute right-4 top-3 text-teal-500 font-black text-xs">%</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Bunga Efektif (Per Tahun)</label>
                                        <div className="relative">
                                            <Input defaultValue="18" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 pr-12 font-bold text-slate-700 focus:bg-white transition-all" />
                                            <span className="absolute right-4 top-3 text-teal-500 font-black text-xs">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-slate-50" />

                            {/* Ketentuan Simpanan */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <Wallet size={20} />
                                    </div>
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Ketentuan Simpanan</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Simpanan Wajib</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3 text-blue-500 font-black text-xs">Rp</span>
                                            <Input defaultValue="100.000" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 pl-12 font-bold text-slate-700 focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Simpanan Pokok</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3 text-blue-500 font-black text-xs">Rp</span>
                                            <Input defaultValue="500.000" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 pl-12 font-bold text-slate-700 focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-slate-50" />

                            {/* Durasi Pinjaman */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                                        <CalendarClock size={20} />
                                    </div>
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Durasi Pinjaman (Tenor)</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Tenor Minimal</label>
                                        <div className="relative">
                                            <Input defaultValue="3" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 pr-16 font-bold text-slate-700 focus:bg-white transition-all" />
                                            <span className="absolute right-4 top-3 text-slate-300 font-black text-[9px] uppercase tracking-widest">Bulan</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Tenor Maksimal</label>
                                        <div className="relative">
                                            <Input defaultValue="36" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 pr-16 font-bold text-slate-700 focus:bg-white transition-all" />
                                            <span className="absolute right-4 top-3 text-slate-300 font-black text-[9px] uppercase tracking-widest">Bulan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- KANAN: AREA SENSITIF & RINGKASAN --- */}
                    <div className="lg:col-span-4 space-y-6 animate-in fade-in slide-in-from-right-6 duration-700">
                        {/* Area Sensitif: Mengembalikan teks peringatan sesuai instruksi awal */}
                        <div className="bg-white p-8 rounded-[32px] border border-amber-100 shadow-sm shadow-amber-500/5">
                            <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6">
                                <ShieldAlert size={24} />
                            </div>
                            <h4 className="text-lg font-black text-slate-800 mb-2">Area Sensitif</h4>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                Perubahan pada halaman ini akan berdampak langsung pada seluruh perhitungan transaksi mendatang. Harap pastikan kebijakan telah disetujui dalam rapat pengurus sebelum melakukan pembaruan.
                            </p>
                        </div>

                        {/* Ringkasan Perubahan */}
                        <div className="bg-white p-7 rounded-[32px] border border-white shadow-sm">
                            <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                                <Info size={14} className="text-[#00A99D]" /> Aktivitas Terakhir
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { msg: "Suku bunga disesuaikan", date: "10 Feb 2026" },
                                    { msg: "Simpanan wajib diperbarui", date: "01 Jan 2026" },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="h-2 w-2 rounded-full bg-teal-200 mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-xs font-bold text-slate-700">{log.msg}</p>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">{log.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}