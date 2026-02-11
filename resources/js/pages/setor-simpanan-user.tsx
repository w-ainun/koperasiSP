import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { 
    Wallet, ArrowLeft, CheckCircle2, CreditCard, 
    Info, ChevronRight, Coins, Clock, 
    CircleDollarSign, Landmark, QrCode, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Beranda', href: '/dashboard' },
    { title: 'Simpanan Saya', href: '/savings' },
    { title: 'Setor Simpanan', href: '/savings/deposit' },
];

const depositTypes = [
    { id: 'sukarela', name: 'Simpanan Sukarela', icon: <Coins size={18} />, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'wajib', name: 'Simpanan Wajib', icon: <Clock size={18} />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'pokok', name: 'Simpanan Pokok', icon: <CircleDollarSign size={18} />, color: 'text-[#00A99D]', bg: 'bg-teal-50' },
];

const paymentMethods = [
    { id: 'transfer', name: 'TRANSFER BANK', desc: 'Manual Verification', icon: <Landmark size={20} /> },
    { id: 'qris', name: 'QRIS', desc: 'Instant Confirmation', icon: <QrCode size={20} /> },
    { id: 'va', name: 'VIRTUAL ACCOUNT', desc: 'Automated Check', icon: <CreditCard size={20} /> },
];

const availableBanks = [
    { id: 'bca', name: 'Bank BCA', code: '014' },
    { id: 'mandiri', name: 'Bank Mandiri', code: '008' },
    { id: 'bni', name: 'Bank BNI', code: '009' },
    { id: 'bri', name: 'Bank BRI', code: '002' },
];

export default function DepositForm() {
    const [selectedType, setSelectedType] = useState('sukarela');
    const [selectedPayment, setSelectedPayment] = useState('transfer');
    const [selectedBank, setSelectedBank] = useState('');
    const [amount, setAmount] = useState('');

    const showBankOptions = selectedPayment === 'transfer' || selectedPayment === 'va';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Setor Simpanan - Mitraya" />
            
            <div className="min-h-screen w-full bg-[#F8FAFB] px-4 py-6 md:px-6 lg:px-8 font-['Plus_Jakarta_Sans']">
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* --- HEADER (Kiri Atas) --- */}
                    <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-6 duration-700">
                        <button 
                            onClick={() => window.history.back()} 
                            className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#00A99D] hover:shadow-md transition-all group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <div>
                            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Setor Simpanan</h1>
                            <p className="text-[11px] text-slate-400 font-medium tracking-tight">Tambahkan saldo tabungan Anda dengan mudah dan aman.</p>
                        </div>
                    </div>

                    {/* --- MAIN FORM (Flow ke Bawah) --- */}
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        
                        <div className="bg-white p-6 md:p-10 rounded-[40px] border border-white shadow-sm space-y-10">
                            
                            {/* 1. PILIH JENIS SIMPANAN */}
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Pilih Jenis Simpanan</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {depositTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setSelectedType(type.id)}
                                            className={`p-5 rounded-3xl border-2 transition-all flex items-center gap-4 relative group ${
                                                selectedType === type.id 
                                                ? 'border-[#00A99D] bg-teal-50/30' 
                                                : 'border-slate-50 bg-slate-50/50 hover:border-slate-200'
                                            }`}
                                        >
                                            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${type.bg} ${type.color} group-hover:scale-110 transition-transform duration-500`}>
                                                {type.icon}
                                            </div>
                                            <span className={`text-xs font-black uppercase tracking-tight ${selectedType === type.id ? 'text-slate-800' : 'text-slate-400'}`}>
                                                {type.name}
                                            </span>
                                            {selectedType === type.id && (
                                                <div className="absolute top-3 right-3 text-[#00A99D] animate-in zoom-in duration-300">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 2. METODE PEMBAYARAN */}
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Metode Pembayaran</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {paymentMethods.map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => {
                                                setSelectedPayment(method.id);
                                                setSelectedBank(''); // Reset bank saat ganti metode
                                            }}
                                            className={`p-5 rounded-3xl border-2 transition-all flex flex-col items-center gap-4 relative group ${
                                                selectedPayment === method.id 
                                                ? 'border-[#00A99D] bg-teal-50/30' 
                                                : 'border-slate-50 bg-slate-50/50 hover:border-slate-100'
                                            }`}
                                        >
                                            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${selectedPayment === method.id ? 'bg-[#00A99D] text-white rotate-6' : 'bg-white text-slate-400'}`}>
                                                {method.icon}
                                            </div>
                                            <div className="text-center">
                                                <p className={`text-[10px] font-black uppercase tracking-tighter ${selectedPayment === method.id ? 'text-slate-800' : 'text-slate-400'}`}>{method.name}</p>
                                            </div>
                                            {selectedPayment === method.id && (
                                                <div className="absolute top-3 right-3 text-[#00A99D] animate-in zoom-in duration-300">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 3. PILIHAN BANK (Kondisional: Muncul jika Transfer/VA dipilih) */}
                            {showBankOptions && (
                                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Pilih Bank Tujuan</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {availableBanks.map((bank) => (
                                            <button
                                                key={bank.id}
                                                onClick={() => setSelectedBank(bank.id)}
                                                className={`p-4 rounded-2xl border-2 transition-all text-center ${
                                                    selectedBank === bank.id 
                                                    ? 'border-[#00A99D] bg-[#00A99D] text-white' 
                                                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200 shadow-sm'
                                                }`}
                                            >
                                                <p className="text-[11px] font-black uppercase tracking-tight">{bank.name}</p>
                                                <p className={`text-[8px] font-bold opacity-60 ${selectedBank === bank.id ? 'text-white' : 'text-slate-300'}`}>KODE: {bank.code}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 4. NOMINAL SETORAN */}
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-1">Nominal Setoran</h3>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-slate-200 pr-5">
                                        <span className="text-base font-black text-[#00A99D]">Rp</span>
                                    </div>
                                    <Input 
                                        placeholder="Masukkan jumlah..."
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="h-16 pl-24 rounded-[24px] border-slate-100 bg-slate-50/50 text-xl font-black text-slate-800 focus:bg-white focus:ring-8 focus:ring-teal-500/5 transition-all"
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['50.000', '100.000', '500.000', '1.000.000'].map((suggest) => (
                                        <button 
                                            key={suggest}
                                            onClick={() => setAmount(suggest.replace('.', ''))}
                                            className="px-5 py-2.5 rounded-2xl bg-white text-[10px] font-black text-slate-400 hover:bg-[#00A99D] hover:text-white hover:scale-105 transition-all border border-slate-100 shadow-sm"
                                        >
                                            + {suggest}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* INFO & SUBMIT */}
                            <div className="pt-4 space-y-6">
                                <div className="p-6 rounded-[32px] bg-blue-50/50 border border-blue-100 flex items-start gap-5 animate-pulse">
                                    <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                                    <p className="text-xs text-blue-700/80 font-bold leading-relaxed">
                                        Transaksi akan diverifikasi otomatis oleh sistem Mitraya dalam 1x24 jam setelah pembayaran diterima. Simpan bukti transfer Anda.
                                    </p>
                                </div>
                                
                                <Button className="w-full h-16 bg-[#00A99D] hover:bg-[#008279] rounded-[28px] shadow-xl shadow-teal-500/20 text-white font-black uppercase tracking-[0.2em] text-xs transition-all active:scale-[0.96] group">
                                    LANJUT KE PEMBAYARAN 
                                    <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}