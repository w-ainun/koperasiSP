import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { useState } from 'react';
import type { SharedData } from '@/types';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Mitraya - Solusi Keuangan Bersama">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=playfair-display:700|plus-jakarta-sans:400,500,600" rel="stylesheet" />
            </Head>

            {/* Container Utama dengan Background Soft Gray */}
            <div className="min-h-screen bg-[#F8FAFB] font-['Plus_Jakarta_Sans'] text-slate-900 selection:bg-teal-100 relative overflow-hidden">
                
                {/* --- BACKGROUND BUBBLES --- */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Gelembung Kiri Atas */}
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-200/40 rounded-full blur-[100px] animate-pulse"></div>
                    
                    {/* Gelembung Kanan Tengah */}
                    <div className="absolute top-[30%] -right-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
                    
                    {/* Gelembung Kecil Teal Terang (Sesuai Gambar) */}
                    <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-[#00A99D]/10 rounded-full blur-[80px]"></div>
                    
                    {/* Gelembung Bawah Kiri */}
                    <div className="absolute -bottom-20 left-[5%] w-[400px] h-[400px] bg-teal-50/60 rounded-full blur-[100px]"></div>

                    {/* Ornamen Titik-titik (Dot Pattern) untuk kesan modern */}
                    <div className="absolute top-[20%] left-[15%] opacity-20">
                         <div className="grid grid-cols-6 gap-2">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-[#00A99D] rounded-full"></div>
                            ))}
                         </div>
                    </div>
                </div>

                {/* Navbar (Z-index tinggi agar di atas bubble) */}
                <header className="fixed top-0 z-50 w-full bg-white/40 backdrop-blur-xl border-b border-white/20">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A99D] shadow-lg shadow-teal-500/20">
                                <span className="text-lg font-bold text-white">M</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-800">
                                Mitra<span className="text-[#00A99D]">ya</span>
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-500">
                            <Link href="#" className="hover:text-teal-600 transition-colors">Layanan</Link>
                            <Link href="#" className="hover:text-teal-600 transition-colors">Simulasi</Link>
                            <Link href={login()} className="hover:text-teal-600 transition-colors">Masuk</Link>
                            {canRegister && (
                                <Link 
                                    href={register()} 
                                    className="rounded-full bg-gradient-to-r from-[#00A99D] to-[#00C2B4] px-7 py-2.5 text-white shadow-lg shadow-teal-500/30 hover:opacity-90 hover:scale-105 transition-all"
                                >
                                    Daftar Anggota
                                </Link>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="relative z-10 pt-40 pb-20">
                    <section className="container mx-auto px-6 text-center">
                        {/* Badge Atas */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-white/60 border border-teal-100 shadow-sm backdrop-blur-sm">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">★ Koperasi Terpercaya & Modern</span>
                        </div>
                        
                        {/* Header dengan Font Serif */}
                        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-[#1B252E] leading-[1.15] max-w-4xl mx-auto">
                            Solusi Keuangan Bersama Untuk <br />
                            <span className="relative">
                                <span className="text-[#00A99D] italic">'Masa Depan'</span>
                                <div className="absolute -bottom-2 left-0 w-full h-3 bg-teal-100/60 -z-10 rounded-full"></div>
                            </span> Lebih Cerah
                        </h1>
                        
                        <p className="mt-8 text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Wujudkan impian finansial Anda dengan sistem koperasi yang transparan, amanah, dan didukung teknologi terkini.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            {/* Button Utama: Daftar Anggota - Efek Shimmer & Lift Up */}
                            <Link
                                href={register()}
                                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-[#00A99D] px-12 py-4 text-sm font-bold text-white shadow-[0_15px_35px_-12px_rgba(0,169,157,0.5)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,169,157,0.6)] active:scale-95 animate-in fade-in slide-in-from-bottom-6 duration-1000"
                            >
                                {/* Kilatan Cahaya (Shimmer) */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                                
                                <span className="relative">
                                    Daftar Anggota
                                </span>
                            </Link>

                            {/* Button Sekunder: Pelajari Bunga - Efek Glass & Lift Up */}
                            <Link
                                href="#"
                                className="group relative w-full sm:w-auto rounded-2xl border border-slate-200 bg-white/40 px-12 py-4 text-sm font-bold text-slate-600 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#00A99D]/30 hover:bg-white/80 hover:text-[#00A99D] hover:shadow-2xl active:scale-95 animate-in fade-in slide-in-from-bottom-8 duration-1000"
                            >
                                <span className="relative">
                                    Pelajari Bunga
                                    {/* Indikator Garis Bawah yang halus */}
                                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#00A99D] transition-all duration-500 group-hover:w-full" />
                                </span>
                            </Link>
                        </div>
                    </section>

                    {/* --- SECTION: LAYANAN UTAMA --- */}
                    <section id="layanan" className="container mx-auto px-6 mt-32 max-w-6xl relative z-10">
                        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-slate-800 mb-4">Layanan Unggulan Kami</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">Solusi finansial yang dirancang khusus untuk memenuhi kebutuhan ekonomi anggota secara berkelanjutan.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { 
                                    title: 'Simpanan Wajib', 
                                    desc: 'Kontribusi bulanan konsisten untuk membangun modal bersama masa depan.', 
                                    delay: 'delay-100',
                                    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                },
                                { 
                                    title: 'Pinjaman Kilat', 
                                    desc: 'Akses dana darurat tanpa ribet, proses persetujuan cepat di bawah 24 jam.', 
                                    delay: 'delay-300',
                                    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
                                },
                                { 
                                    title: 'Bagi Hasil (SHU)', 
                                    desc: 'Nikmati keuntungan koperasi yang dibagikan secara adil setiap tahunnya.', 
                                    delay: 'delay-500',
                                    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                }
                            ].map((item, i) => (
                                <div 
                                    key={i} 
                                    className={`group relative p-10 rounded-[40px] border border-white/60 bg-white/30 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,169,157,0.15)] animate-in fade-in slide-in-from-bottom-10 ${item.delay}`}
                                >
                                    {/* Glow Effect on Hover */}
                                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-teal-400/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Icon dengan Animasi Melayang (Floating) */}
                                    <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 border border-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-teal-500/10">
                                        <svg className="w-8 h-8 text-[#00A99D] animate-pulse group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#00A99D] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                                        {item.desc}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 text-[#00A99D] font-bold text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                                        <span>Lihat Detail</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- SECTION: TRUST & LEGALITAS --- */}
                    <section className="container mx-auto px-6 mt-32 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-slate-800 mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">Keamanan & Legalitas Terjamin</h2>
                        </div>
                        
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[40px] p-8 md:p-12 flex flex-wrap items-center justify-around gap-8 shadow-sm hover:shadow-xl hover:bg-white/50 transition-all duration-1000">
                            {[
                                { label: 'Terdaftar & Diawasi', sub: 'Kemenkop UKM RI', icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                { label: 'Milik Anggota', sub: 'Transparan & Adil', icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                { label: 'Data Terproteksi', sub: 'Keamanan Enkripsi', icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
                            ].map((trust, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    <div className="p-3 bg-teal-50 rounded-2xl group-hover:bg-[#00A99D] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-inner">
                                        <svg className="w-8 h-8 text-[#00A99D] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={trust.icon} />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-[#00A99D] transition-colors">{trust.label}</h4>
                                        <p className="text-[11px] text-slate-500">{trust.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- SECTION: KEUNGGULAN (Updated with Icons & Animation) --- */}
                    <section className="container mx-auto px-6 mt-32 relative z-10 text-center">
                        <h2 className="font-['Playfair_Display'] text-4xl font-bold text-slate-800 mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                            Kenapa Memilih Mitraya?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-12 text-left">
                            {[
                                { 
                                    title: "Digital & Cepat", 
                                    desc: "Semua proses dilakukan secara online melalui sistem terpadu yang praktis.", 
                                    icon: (
                                        <svg className="w-10 h-10 text-[#00A99D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    ) 
                                },
                                { 
                                    title: "Laporan Real-time", 
                                    desc: "Pantau saldo simpanan dan rincian pinjaman Anda kapan saja secara transparan.", 
                                    icon: (
                                        <svg className="w-10 h-10 text-[#00A99D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    ) 
                                },
                                { 
                                    title: "Bagi Hasil Adil", 
                                    desc: "Nikmati sisa hasil usaha (SHU) yang kompetitif setiap akhir tahun buku.", 
                                    icon: (
                                        <svg className="w-10 h-10 text-[#00A99D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ) 
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 p-4 rounded-2xl bg-white shadow-sm group-hover:bg-teal-50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#00A99D] transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- SECTION: CARA BERGABUNG (Updated with Motion) --- */}
                    <section className="container mx-auto px-6 mt-40 mb-20 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-slate-800">Langkah Mudah Bergabung</h2>
                            <div className="w-20 h-1 bg-[#00A99D]/20 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", label: "Daftar Online", desc: "Isi formulir melalui website" },
                                { step: "02", label: "Verifikasi", desc: "Validasi data oleh tim kami" },
                                { step: "03", label: "Mulai Aktif", desc: "Simpan atau ajukan pinjaman" },
                                { step: "04", label: "Terima SHU", desc: "Dapatkan bagi hasil tahunan" }
                            ].map((item, i) => (
                                <div key={i} className="group relative p-8 rounded-[32px] bg-white/40 border border-white/60 hover:bg-white/80 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                                    {/* Number Background Decoration */}
                                    <span className="text-6xl font-black text-[#00A99D]/5 absolute -top-2 -right-2 group-hover:text-[#00A99D]/10 transition-colors">
                                        {item.step}
                                    </span>
                                    
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-[#00A99D] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                                            {item.step}
                                        </div>
                                        <h4 className="font-bold text-slate-800 text-lg">{item.label}</h4>
                                        <p className="text-xs text-slate-500 mt-3 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* --- CTA SECTION (Updated with Animation) --- */}
                    <section className="container mx-auto px-6 my-32 relative z-10">
                        <div className="group bg-gradient-to-br from-[#00A99D] to-[#008279] rounded-[48px] p-10 md:p-20 text-center text-white shadow-2xl shadow-teal-900/20 overflow-hidden relative transition-all duration-700 hover:shadow-teal-900/30">
                            {/* Animated Background Ornaments */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/20 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                            
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 animate-pulse duration-[3000ms]">
                                    Siap tumbuh bersama koperasi?
                                </h2>
                                <p className="text-teal-50 mb-12 max-w-2xl mx-auto opacity-90 text-sm md:text-lg leading-relaxed">
                                    Bergabunglah dengan ribuan anggota lainnya dan mulai raih kebebasan finansial yang terencana sekarang.
                                </p>
                                <Link 
                                    href={register()} 
                                    className="inline-flex items-center gap-3 bg-white text-[#00A99D] px-12 py-5 rounded-2xl font-bold hover:scale-105 hover:bg-teal-50 active:scale-95 transition-all shadow-xl shadow-black/10 group/btn"
                                >
                                    <span>Daftar Sekarang</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="relative z-10 bg-white/60 backdrop-blur-2xl border-t border-slate-200/60 pt-20 pb-10 font-['Plus_Jakarta_Sans']">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                            
                            {/* Brand & Description - 4 Columns */}
                            <div className="md:col-span-4">
                                <div className="flex items-center gap-2.5 mb-6">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A99D] shadow-lg shadow-teal-500/20">
                                        <span className="text-sm font-bold text-white">M</span>
                                    </div>
                                    <span className="text-xl font-bold tracking-tight text-slate-800">
                                        Mitra<span className="text-[#00A99D]">ya</span>
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                                    Koperasi modern berbasis teknologi yang mengedepankan transparansi, 
                                    keamanan data, dan pemberdayaan ekonomi seluruh anggota secara inklusif.
                                </p>
                            </div>

                            {/* Navigasi - 2 Columns */}
                            <div className="md:col-span-2">
                                <h5 className="font-bold text-slate-900 mb-7 text-sm uppercase tracking-wider">Layanan</h5>
                                <ul className="space-y-4">
                                    {['Tentang Kami', 'FAQ', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-sm text-slate-500 hover:text-[#00A99D] hover:translate-x-1 transition-all inline-block">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Kontak - 3 Columns */}
                            <div className="md:col-span-3">
                                <h5 className="font-bold text-slate-900 mb-7 text-sm uppercase tracking-wider">Hubungi Kami</h5>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-3 group cursor-pointer">
                                        <div className="p-2 rounded-lg bg-teal-50 text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-slate-500 group-hover:text-slate-800 transition-colors">hello@mitraya.com</span>
                                    </li>
                                    <li className="flex items-start gap-3 group cursor-pointer">
                                        <div className="p-2 rounded-lg bg-teal-50 text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-slate-500 group-hover:text-slate-800 transition-colors">+62 812-3456-7890</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Alamat - 3 Columns */}
                            <div className="md:col-span-3">
                                <h5 className="font-bold text-slate-900 mb-7 text-sm uppercase tracking-wider">Kantor Pusat</h5>
                                <div className="flex items-start gap-3 group cursor-pointer">
                                    <div className="p-2 rounded-lg bg-slate-50 text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm leading-relaxed">
                                        Jl. Ekonomi Digital No. 12, Lantai 5<br />
                                        Kawasan Bisnis Sudirman, Jakarta Selatan<br />
                                        DKI Jakarta 12190
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom Bar */}
                        <div className="pt-10 border-t border-slate-200/50">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-left md:text-left order-2 md:order-1">
                                    <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#00A99D] mb-1">
                                        Koperasi Mitraya Sejahtera
                                    </p>
                                    <p className="text-[10px] text-slate-400">
                                        © 2026 Mitraya. Terdaftar dan diawasi oleh Kemenkop UKM RI.
                                    </p>
                                </div>
                                
                                {/* Social Media Placeholder Icons */}
                                <div className="flex items-center gap-4 order-1 md:order-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-teal-50 transition-colors cursor-pointer group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#00A99D]"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}