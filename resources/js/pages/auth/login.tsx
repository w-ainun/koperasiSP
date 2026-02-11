import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean; 
    canRegister: boolean;
};

export default function Login({ status, canResetPassword, canRegister }: Props) {
    return (
        <div className="min-h-screen bg-[#F8FAFB] font-['Plus_Jakarta_Sans'] text-slate-900 selection:bg-teal-100 relative overflow-hidden flex items-center justify-center">
            <Head title="Masuk - Mitraya" />

            {/* --- BACKGROUND DECORATION --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-xl px-6 py-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                
                {/* Header Branding */}
                <div className="text-center mb-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#00A99D] shadow-2xl shadow-teal-500/20 transform hover:scale-105 transition-transform duration-500">
                        <span className="text-3xl font-bold text-white">M</span>
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#1B252E]">
                        Mitra<span className="text-[#00A99D]">ya</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-base leading-relaxed">
                        Silakan masuk untuk mengelola keuangan <br /> bersama kami dengan aman.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-[40px] border border-white bg-white/70 p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                    <Form
                        {...store.form()}
                        resetOnSuccess={['password']}
                        className="space-y-8"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="space-y-6">
                                    <div className="grid gap-2.5">
                                        <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            className="h-14 rounded-2xl border-slate-200 px-5 bg-white/50 text-slate-900 placeholder:text-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all shadow-none"
                                            placeholder="nama@email.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2.5">
                                        <div className="flex items-center justify-between px-1">
                                            <Label htmlFor="password" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                                Password
                                            </Label>
                                            {canResetPassword && (
                                                <TextLink href={request()} className="text-xs font-bold text-[#00A99D] hover:text-[#008279]">
                                                    Lupa Password?
                                                </TextLink>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            className="h-14 rounded-2xl border-slate-200 px-5 bg-white/50 text-slate-900 placeholder:text-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all shadow-none"
                                            placeholder="••••••••••••"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3 px-1">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            className="h-5 w-5 rounded-md border-slate-300 text-[#00A99D] focus:ring-[#00A99D]"
                                        />
                                        <Label htmlFor="remember" className="text-sm font-medium text-slate-500 cursor-pointer">
                                            Ingat saya di perangkat ini
                                        </Label>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        className="h-14 w-full rounded-2xl bg-[#00A99D] text-lg font-bold text-white shadow-[0_20px_40px_-12px_rgba(0,169,157,0.3)] hover:bg-[#008279] transition-all duration-300 disabled:opacity-70"
                                        disabled={processing}
                                    >
                                        {processing ? <Spinner className="h-5 w-5" /> : "Masuk Ke Akun"}
                                    </Button>

                                    {canRegister && (
                                        <div className="mt-8 text-center">
                                            <p className="text-sm text-slate-400">
                                                Belum bergabung?{' '}
                                                <TextLink 
                                                    href={register()} 
                                                    className="font-bold text-[#00A99D] hover:underline underline-offset-8"
                                                >
                                                    Daftar Anggota Online
                                                </TextLink>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}