import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    FileText, 
    Download, 
    FileSpreadsheet, 
    FileBox, 
    Wallet, 
    Landmark, 
    PieChart, 
    Search,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Laporan', href: '/reports' },
];

const reportCategories = [
    { 
        title: 'Laporan Simpanan', 
        desc: 'Rekapitulasi saldo pokok, wajib, dan sukarela.', 
        icon: <Wallet />, 
        color: 'teal',
        stats: 'Total: Rp 1.420M'
    },
    { 
        title: 'Laporan Pinjaman', 
        desc: 'Data penyaluran kredit dan kolektibilitas.', 
        icon: <Landmark />, 
        color: 'blue',
        stats: '84 Kontrak Aktif'
    },
    { 
        title: 'Laporan SHU', 
        desc: 'Rincian pembagian sisa hasil usaha tahunan.', 
        icon: <PieChart />, 
        color: 'amber',
        stats: 'Periode 2025 Selesai'
    },
];

export default function ReportsPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laporan Koperasi - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Pusat Laporan</h1>
                        <p className="text-slate-500 mt-1 text-sm">Analisis data finansial dan ekspor dokumen resmi Mitraya.</p>
                    </div>
                </div>

                {/* --- SELEKSI LAPORAN (GRID CARD) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reportCategories.map((report, i) => (
                        <div 
                            key={i} 
                            className={`group bg-white p-7 rounded-[32px] border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in-95 duration-700 delay-[${i * 100}ms]`}
                        >
                            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${
                                report.color === 'teal' ? 'bg-teal-50 text-[#00A99D]' : 
                                report.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                            }`}>
                                {report.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{report.title}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6">{report.desc}</p>
                            
                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{report.stats}</span>
                                <div className="flex gap-2">
                                    <button title="Export PDF" className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                                        <Download size={16} />
                                    </button>
                                    <button title="Export Excel" className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-green-50 hover:text-green-600 transition-colors">
                                        <FileSpreadsheet size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- RIWAYAT UNDUHAN (TABEL) --- */}
                <div className="rounded-[32px] border border-white bg-white/80 p-8 shadow-sm backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-slate-800 text-white flex items-center justify-center">
                                <FileBox size={20} />
                            </div>
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Arsip Laporan Terakhir</h3>
                        </div>
                        <div className="relative group">
                            <Search className="absolute left-4 top-2.5 text-slate-400 group-focus-within:text-[#00A99D] transition-colors" size={16} />
                            <Input placeholder="Cari dokumen..." className="pl-10 h-10 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white w-64" />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    <th className="px-6 pb-2">Nama Dokumen</th>
                                    <th className="px-6 pb-2">Tanggal Dibuat</th>
                                    <th className="px-6 pb-2 text-center">Format</th>
                                    <th className="px-6 pb-2 text-center">Status</th>
                                    <th className="px-6 pb-2 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'Rekap_Simpanan_Feb_2026', date: '11 Feb 2026', ext: 'XLSX', status: 'Siap' },
                                    { name: 'Audit_Pinjaman_Tahunan_2025', date: '01 Jan 2026', ext: 'PDF', status: 'Siap' },
                                    { name: 'Pembagian_SHU_Periode_2025', date: '25 Des 2025', ext: 'PDF', status: 'Siap' },
                                ].map((doc, index) => (
                                    <tr 
                                        key={index} 
                                        className="group bg-white hover:bg-teal-50/20 transition-all duration-300 animate-in fade-in slide-in-from-right-4"
                                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                                    >
                                        <td className="px-6 py-4 rounded-l-[20px] border-y border-l border-slate-50 group-hover:border-teal-100/50">
                                            <div className="flex items-center gap-3">
                                                <FileText className="text-slate-400 group-hover:text-[#00A99D]" size={18} />
                                                <span className="font-bold text-slate-700 text-sm">{doc.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50 text-xs text-slate-500 font-medium">
                                            {doc.date}
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <span className="text-[10px] font-black px-2 py-1 bg-slate-100 rounded text-slate-500">{doc.ext}</span>
                                        </td>
                                        <td className="px-6 py-4 border-y border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#00A99D]" />
                                                <span className="text-[10px] font-black text-[#00A99D] uppercase tracking-tighter">{doc.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 rounded-r-[20px] border-y border-r border-slate-50 group-hover:border-teal-100/50 text-center">
                                            <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl text-slate-400 hover:text-[#00A99D] hover:bg-teal-50 transition-all active:scale-90">
                                                <ArrowUpRight size={18} />
                                            </Button>
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