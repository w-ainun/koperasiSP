// Components
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <div className="min-h-screen bg-[#F8FAFB] font-['Plus_Jakarta_Sans'] text-slate-900 selection:bg-teal-100 relative overflow-hidden flex items-center justify-center">
            <Head title="Lupa Password - Mitraya" />

            {/* --- BACKGROUND DECORATION --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] bg-teal-200/30 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-xl px-6 py-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                
                {/* Header Branding */}
                <div className="text-center mb-10">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#00A99D] shadow-2xl shadow-teal-500/20 transform hover:scale-105 transition-transform duration-500">
                        <span className="text-3xl font-bold text-white">M</span>
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#1B252E]">
                        Atur Ulang <span className="text-[#00A99D]">Password</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-base leading-relaxed">
                        Masukkan email Anda dan kami akan mengirimkan <br /> tautan untuk mengatur ulang password.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-[40px] border border-white bg-white/70 p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                    
                    {/* Status Message */}
                    {status && (
                        <div className="mb-6 rounded-2xl bg-teal-50 border border-teal-100 p-4 text-center text-sm font-bold text-[#00A99D] animate-bounce">
                            {status}
                        </div>
                    )}

                    <Form {...email.form()}>
                        {({ processing, errors }) => (
                            <div className="space-y-8">
                                <div className="grid gap-2.5">
                                    <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        Alamat Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="nama@email.com"
                                        className="h-14 rounded-2xl border-slate-200 bg-slate-100/50 px-5 text-slate-900 placeholder:text-slate-400 focus:border-[#00A99D] focus:ring-[#00A99D]/10 transition-all"
                                        style={{ backgroundColor: '#F1F5F9' }}
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="space-y-6">
                                    <Button
                                        className="h-14 w-full rounded-2xl bg-[#00A99D] text-lg font-bold text-white shadow-[0_20px_40px_-12px_rgba(0,169,157,0.3)] hover:bg-[#008279] hover:shadow-[0_25px_50px_-12px_rgba(0,169,157,0.4)] transition-all duration-300 disabled:opacity-70"
                                        disabled={processing}
                                        data-test="email-password-reset-link-button"
                                    >
                                        {processing ? (
                                            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                                        ) : (
                                            "Kirim Tautan Reset"
                                        )}
                                    </Button>

                                    <div className="text-center">
                                        <p className="text-sm text-slate-400">
                                            Ingat password Anda?{' '}
                                            <TextLink 
                                                href={login()} 
                                                className="font-bold text-[#00A99D] hover:underline underline-offset-8"
                                            >
                                                Kembali ke Login
                                            </TextLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}