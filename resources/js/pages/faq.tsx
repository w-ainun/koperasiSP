import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    HelpCircle, BookOpen, MessageCircle, 
    ChevronDown, Search, Lightbulb, 
    ShieldQuestion, Plus, Minus 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Pusat Bantuan', href: '/faq' },
];

const faqs = [
    {
        question: "Bagaimana cara menjadi anggota Koperasi Mitraya?",
        answer: "Anda dapat mendaftar melalui menu profil dengan melengkapi identitas pribadi dan mengunggah dokumen KTP. Admin akan melakukan verifikasi dalam 1x24 jam."
    },
    {
        question: "Berapa lama proses persetujuan pinjaman?",
        answer: "Proses persetujuan pinjaman biasanya memakan waktu 2-3 hari kerja setelah dokumen pengajuan dinyatakan lengkap oleh tim analis."
    },
    {
        question: "Apa perbedaan Simpanan Wajib dan Simpanan Sukarela?",
        answer: "Simpanan Wajib adalah iuran bulanan yang jumlahnya ditentukan dalam RAT, sedangkan Simpanan Sukarela adalah tabungan yang jumlahnya bebas dan dapat diambil kapan saja."
    },
    {
        question: "Bagaimana perhitungan SHU yang saya terima?",
        answer: "SHU dihitung secara otomatis berdasarkan besarnya Jasa Modal (jumlah simpanan Anda) dan Jasa Usaha (aktivitas transaksi Anda di koperasi)."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pusat Bantuan - Mitraya" />
            
            <div className="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 font-['Plus_Jakarta_Sans'] bg-[#F8FAFB]">
                
                {/* --- HEADER --- */}
                <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="h-14 w-14 rounded-[20px] bg-teal-50 text-[#00A99D] flex items-center justify-center shadow-sm">
                        <HelpCircle size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight text-balance">Ada yang bisa kami bantu?</h1>
                        <p className="text-slate-500 mt-2 text-sm">Cari jawaban instan atau pelajari panduan penggunaan aplikasi Mitraya.</p>
                    </div>
                    
                    <div className="relative w-full mt-4 group">
                        <Search className="absolute left-4 top-3.5 text-slate-300 group-focus-within:text-[#00A99D] transition-colors" size={18} />
                        <Input 
                            placeholder="Cari topik bantuan..." 
                            className="h-12 pl-12 rounded-2xl border-white bg-white shadow-md shadow-slate-200/50 focus:ring-[#00A99D] transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto w-full">
                    
                    {/* Sisi Kiri: Panduan & Kontak */}
                    <div className="lg:col-span-4 space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Panduan Cepat</h3>
                        {[
                            { title: 'Dasar Keanggotaan', icon: <BookOpen size={18} />, color: 'bg-blue-50 text-blue-600' },
                            { title: 'Simulasi & Pinjaman', icon: <Lightbulb size={18} />, color: 'bg-amber-50 text-amber-600' },
                            { title: 'Keamanan Akun', icon: <ShieldQuestion size={18} />, color: 'bg-teal-50 text-[#00A99D]' },
                        ].map((cat, i) => (
                            <button key={i} className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl border border-white shadow-sm hover:shadow-md hover:border-teal-100 transition-all group">
                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <span className="text-sm font-bold text-slate-700">{cat.title}</span>
                            </button>
                        ))}
                        
                        <div className="p-6 bg-gradient-to-br from-[#00A99D] to-[#078077] rounded-[28px] text-white mt-8 shadow-lg shadow-teal-500/20">
                            <MessageCircle className="mb-4 opacity-80" size={24} />
                            <h4 className="font-bold text-sm mb-1">Masih butuh bantuan?</h4>
                            <p className="text-[10px] text-teal-50/80 mb-4 leading-relaxed tracking-tight">Hubungi admin koperasi melalui layanan WhatsApp resmi kami.</p>
                            <Button className="w-full bg-white text-[#00A99D] hover:bg-teal-50 rounded-xl font-bold text-xs h-10 shadow-sm transition-all active:scale-95">
                                Chat Sekarang
                            </Button>
                        </div>
                    </div>

                    {/* Sisi Kanan: Custom Accordion */}
                    <div className="lg:col-span-8 animate-in fade-in slide-in-from-right-4 duration-700">
                        <div className="bg-white p-6 md:p-8 rounded-[32px] border border-white shadow-sm">
                            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 px-2">Pertanyaan Umum</h3>
                            
                            <div className="space-y-3">
                                {faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;
                                    return (
                                        <div key={index} className={`rounded-2xl transition-all duration-300 ${isOpen ? 'bg-teal-50/30' : 'bg-slate-50/50 hover:bg-white hover:shadow-sm'}`}>
                                            <button 
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className="w-full flex items-center justify-between p-4 text-left group"
                                            >
                                                <span className={`text-sm font-bold transition-colors ${isOpen ? 'text-[#00A99D]' : 'text-slate-700 group-hover:text-[#00A99D]'}`}>
                                                    {faq.question}
                                                </span>
                                                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00A99D]' : 'text-slate-400'}`}>
                                                    <ChevronDown size={18} />
                                                </div>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="px-4 pb-4 text-xs text-slate-500 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}