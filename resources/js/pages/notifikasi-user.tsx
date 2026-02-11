import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Bell, 
    Wallet, 
    Landmark, 
    PieChart, 
    CheckCircle2, 
    Clock, 
    ArrowRight,
    CircleDot
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Notifikasi', href: '/notifications' },
];

const notifications = [
    {
        id: 1,
        type: 'payment',
        title: 'Pembayaran Diterima',
        desc: 'Simpanan Sukarela sebesar Rp 500.000 telah berhasil divalidasi oleh bendahara.',
        time: '10 menit yang lalu',
        status: 'new',
        icon: <Wallet className="text-[#00A99D]" />,
        bg: 'bg-teal-50'
    },
    {
        id: 2,
        type: 'loan',
        title: 'Status Pinjaman Diperbarui',
        desc: 'Pengajuan pinjaman Modal Usaha Anda telah disetujui. Silakan cek detail cicilan.',
        time: '2 jam yang lalu',
        status: 'new',
        icon: <Landmark className="text-blue-600" />,
        bg: 'bg-blue-50'
    },
    {
        id: 3,
        type: 'shu',
        title: 'SHU Tahun 2025 Cair!',
        desc: 'Sisa Hasil Usaha periode 2025 sebesar Rp 770.000 telah ditransfer ke saldo simpanan Anda.',
        time: '1 hari yang lalu',
        status: 'read',
        icon: <PieChart className="text-amber-600" />,
        bg: 'bg-amber-50'
    },
    {
        id: 4,
        type: 'reminder',
        title: 'Pengingat Cicilan',
        desc: 'Batas akhir pembayaran cicilan bulan Februari tinggal 3 hari lagi. Segera lakukan setoran.',
        time: '2 hari yang lalu',
        status: 'read',
        icon: <Clock className="text-red-500" />,
        bg: 'bg-red-50'
    }
];

export default function NotificationsPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notifikasi - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-800 border border-slate-50">
                            <Bell size={24} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Notifikasi</h1>
                            <p className="text-slate-500 text-sm">Pembaruan aktivitas transaksi dan akun Anda.</p>
                        </div>
                    </div>
                    
                    {/* Perbaikan Tombol: Menambah kontras dan animasi hover */}
                    <Button 
                        variant="outline" 
                        className="rounded-xl border-teal-100 bg-teal-50/50 text-[#00A99D] font-bold hover:bg-[#00A99D] hover:text-white transition-all duration-300 active:scale-95 shadow-sm shadow-teal-500/5"
                    >
                        <CheckCircle2 size={16} className="mr-2" />
                        Tandai Semua Dibaca
                    </Button>
                </div>

                {/* --- NOTIFICATION LIST --- */}
                <div className="max-w-4xl mx-auto w-full space-y-4">
                    {notifications.map((notif, index) => (
                        <div 
                            key={notif.id}
                            className={`group relative bg-white p-5 md:p-6 rounded-[28px] border border-white shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 ${notif.status === 'new' ? 'ring-1 ring-[#00A99D]/20' : ''}`}
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                        >
                            <div className="flex items-start gap-4 md:gap-6">
                                {/* Icon Box */}
                                <div className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 ${notif.bg}`}>
                                    {notif.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className={`text-sm md:text-base font-bold transition-colors ${notif.status === 'new' ? 'text-slate-900' : 'text-slate-500'}`}>
                                            {notif.title}
                                        </h3>
                                        {notif.status === 'new' && (
                                            <CircleDot size={12} className="text-[#00A99D] animate-pulse" />
                                        )}
                                    </div>
                                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                                        {notif.desc}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            {notif.time}
                                        </span>
                                        <button className="flex items-center gap-1 text-[11px] font-black text-[#00A99D] uppercase tracking-tighter hover:gap-2 transition-all">
                                            Lihat Detail <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER INFO --- */}
                <div className="flex justify-center items-center gap-2 opacity-50 mt-4 animate-in fade-in duration-1000">
                    <CheckCircle2 size={14} className="text-[#00A99D]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Semua notifikasi terenkripsi aman</span>
                </div>
            </div>
        </AppLayout>
    );
}