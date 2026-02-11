import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <div className="min-h-screen bg-[#F8FAFB] font-['Plus_Jakarta_Sans'] text-slate-900 selection:bg-teal-100 relative overflow-hidden flex items-center justify-center py-12">
            <Head title="Daftar Anggota - Mitraya" />

            {/* --- BACKGROUND DECORATION --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-xl px-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                
                {/* Header: Logo & Branding */}
                <div className="text-center mb-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#00A99D] shadow-2xl shadow-teal-500/20 transform hover:scale-105 transition-transform duration-500">
                        <span className="text-3xl font-bold text-white">M</span>
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#1B252E]">
                        Daftar <span className="text-[#00A99D]">Anggota</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-base leading-relaxed">
                        Bergabunglah dengan koperasi kami untuk <br /> masa depan finansial yang lebih baik.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-[40px] border border-white bg-white/70 p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                    <Form
                        {...store.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        className="space-y-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-5">
                                    {/* Kolom Nama */}
                                    <div className="grid gap-2.5">
                                        <Label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Nama Lengkap</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            placeholder="Nama sesuai KTP"
                                            style={{ backgroundColor: '#F1F5F9', color: '#000000' }}
                                            className="h-14 rounded-2xl border-slate-200 px-5 text-slate-900 !placeholder-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all shadow-none"
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    {/* Kolom Email */}
                                    <div className="grid gap-2.5">
                                        <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            placeholder="nama@email.com"
                                            style={{ backgroundColor: '#F1F5F9', color: '#000000' }}
                                            className="h-14 rounded-2xl border-slate-200 px-5 text-slate-900 !placeholder-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all shadow-none"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Kolom Password */}
                                    <div className="grid gap-2.5">
                                        <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            placeholder="Minimal 8 karakter"
                                            style={{ backgroundColor: '#F1F5F9', color: '#000000' }}
                                            className="h-14 rounded-2xl border-slate-200 px-5 text-slate-900 !placeholder-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all shadow-none"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    {/* Konfirmasi Password */}
                                    <div className="grid gap-2.5">
                                        <Label htmlFor="password_confirmation" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Konfirmasi Password</Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            placeholder="Ulangi password"
                                            style={{ backgroundColor: '#F1F5F9', color: '#000000' }}
                                            className="h-14 rounded-2xl border-slate-200 px-5 text-slate-900 !placeholder-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all shadow-none"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="h-14 w-full rounded-2xl bg-[#00A99D] text-lg font-bold text-white shadow-[0_20px_40px_-12px_rgba(0,169,157,0.3)] hover:bg-[#008279] hover:shadow-[0_25px_50px_-12px_rgba(0,169,157,0.4)] transition-all duration-300 disabled:opacity-70"
                                        tabIndex={5}
                                        disabled={processing}
                                    >
                                        {processing ? <Spinner className="h-5 w-5" /> : "Buat Akun Sekarang"}
                                    </Button>

                                    <div className="mt-8 text-center">
                                        <p className="text-sm text-slate-400">
                                            Sudah memiliki akun?{' '}
                                            <TextLink 
                                                href={login()} 
                                                tabIndex={6}
                                                className="font-bold text-[#00A99D] hover:underline underline-offset-8"
                                            >
                                                Masuk ke Akun
                                            </TextLink>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}