import { cn } from '@/lib/utils';
import type { Section } from '@/types';
import { usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import ar from '../../lang/ar.json';
import en from '../../lang/en.json';
import CustomPhoneInput from './InternationalPhone';
import { ScrambleText } from './ScrambleText';

interface ContactUsProps {
    section?: Section;
}

export const ContactUs: React.FC<ContactUsProps> = ({ section }) => {
    const { locale } = usePage().props;
    const t = locale === 'ar' ? ar : en;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    if (!section) return null;

    const subtitle = locale === 'ar' ? section.subtitle_ar : section.subtitle;
    const title = locale === 'ar' ? section.title_ar : section.title;
    const description = locale === 'ar' ? section.description_ar : section.description;

    const handlePhoneChange = (value: string | undefined, valid: boolean) => {
        setFormData((prev) => ({ ...prev, phone: value || '' }));
        setIsPhoneValid(valid);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);

        const form = e.currentTarget;
        const formElData = new FormData(form);

        const payload = {
            name: formElData.get('name') as string,
            email: formElData.get('email') as string,
            phone: (formData.phone || (formElData.get('phone') as string | null) || '').toString(),
            message: formElData.get('message') as string,
        };

        try {
            const tokenEl = document.querySelector('meta[name="csrf-token"]');
            const csrf = tokenEl ? tokenEl.getAttribute('content') : null;

            const res = await fetch('/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(csrf ? { 'X-CSRF-TOKEN': csrf } : {}),
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
                credentials: 'same-origin',
            });

            const data = await res.json();

            if (!res.ok) {
                if (res.status === 422 && data?.errors) {
                    for (const key in data.errors) {
                        if (Array.isArray(data.errors[key])) {
                            toast.error(data.errors[key][0]);
                        }
                    }
                } else {
                    toast.error(t.contact.toast.error_general);
                }
                // ❌ DON'T reset form on error - keep user input
            } else {
                // ✅ SUCCESS: Reset form and show success message
                toast.success(t.contact.toast.success_title, {
                    description: t.contact.toast.success_description,
                });
                form.reset();
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                setIsPhoneValid(false);
            }
        } catch (err) {
            console.error(err);
            toast.error(t.contact.toast.error_network);
            // ❌ Network error: DON'T reset form - keep user input
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={cn(
                'overflow-hidden bg-[var(--color-background)] py-16 text-white transition-all duration-300 sm:py-20',
                locale === 'ar' ? 'rtl text-right' : 'ltr text-left',
            )}
        >
            {/* Content container with proper alignment */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={cn('flex flex-col justify-between gap-8 lg:flex-row', locale === 'ar' && 'flex-row-reverse')}>
                    {/* Left Side: Contact Info */}
                    <div className="flex flex-col justify-center lg:w-1/2">
                        <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="mb-2">
                            <ScrambleText className="scramble-heading text-cyan-400">{subtitle || ''}</ScrambleText>
                        </div>
                        <p className={cn('mb-4 text-4xl leading-snug font-bold', locale === 'ar' ? 'text-right' : 'text-left')}>{title}</p>
                        <p className={cn('max-w-md text-gray-300 text-lg', locale === 'ar' ? 'ml-auto text-right' : 'text-left')}>{description}</p>

                        <div className="mt-6 space-y-3 text-gray-200">
                            <a href="mailto:info@procode.eg" target="_blank" className="flex items-center gap-3 transition hover:text-cyan-400">
                                <Mail className="h-5 w-5 text-cyan-400" />
                                <span>info@procode.eg</span>
                            </a>

                            <a href="https://wa.me/201055221130" target="_blank" className="flex items-center gap-3 transition hover:text-cyan-400">
                                <Phone className="h-5 w-5 text-cyan-400" />
                                <span dir="ltr">+(20) 10 55221130</span>
                            </a>

                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-cyan-400" />
                                <span>{t.contact.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form - Made smaller */}
                    <div className="relative overflow-hidden rounded-xl bg-white/5 p-5 backdrop-blur-sm lg:w-2/5">
                        <div className="relative z-10" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                            <h3 className={`mb-5 text-xl font-semibold text-white ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                                {t.contact.form.title || 'Message Us'}
                            </h3>

                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <div className="form-group group relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="peer w-full rounded-md border border-gray-700 bg-white/5 px-3 py-2 text-sm text-white placeholder-transparent transition-all outline-none focus:ring-0 focus:ring-transparent focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`pointer-events-none absolute z-10 origin-[0] -translate-y-2 scale-75 transform bg-transparent px-1 text-xs text-gray-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-top-1 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:rounded-md peer-focus:bg-background/90 peer-focus:px-2 peer-focus:text-cyan-400 ${locale === 'ar' ? 'right-2' : 'left-2'}`}
                                    >
                                        {t.contact.form.name_label}
                                    </label>
                                </div>

                                <div className="form-group group relative mt-5">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="peer w-full rounded-md border border-gray-700 bg-white/5 px-3 py-2 text-sm text-white placeholder-transparent transition-all outline-none focus:ring-0 focus:ring-transparent focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className={`pointer-events-none absolute z-10 origin-[0] -translate-y-2 scale-75 transform bg-transparent px-1 text-xs text-gray-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-top-1 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:rounded-md peer-focus:bg-background/90 peer-focus:px-2 peer-focus:text-cyan-400 peer-focus:backdrop-blur-sm ${locale === 'ar' ? 'right-2' : 'left-2'}`}
                                    >
                                        {t.contact.form.email_label}
                                    </label>
                                </div>

                                <div className="form-group group relative">
                                    <CustomPhoneInput
                                        value={formData.phone}
                                        onChange={(value) => setFormData((prev) => ({ ...prev, phone: value || '' }))}
                                        onValidChange={handlePhoneChange}
                                        label={t.contact.form.phone_label}
                                        required
                                        className="w-full rounded-md border border-gray-700 bg-white/5 px-3 py-2 text-sm text-white transition-all outline-none focus:ring-1 focus:ring-cyan-400/30"
                                    />
                                </div>

                                <div className="form-group group relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={2}
                                        required
                                        className="peer w-full rounded-md border border-gray-700 bg-white/5 px-3 py-2 text-sm text-white placeholder-transparent transition-all outline-none focus:ring-0 focus:ring-transparent focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="message"
                                        className={`pointer-events-none absolute z-10 origin-[0] -translate-y-2 scale-75 transform bg-transparent px-1 text-xs text-gray-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-top-1 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:rounded-md peer-focus:bg-background/90 peer-focus:px-2 peer-focus:text-cyan-400 ${locale === 'ar' ? 'right-2' : 'left-2'}`}
                                    >
                                        {t.contact.form.message_label}
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isPhoneValid || submitting}
                                    className={cn(
                                        'group relative mt-4 w-full overflow-hidden rounded-md border border-cyan-500/40 bg-gray-900/80 px-6 py-2.5 font-semibold text-cyan-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:bg-gray-800/90 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-50',
                                        (!isPhoneValid || submitting) && 'opacity-70 hover:bg-gray-900/80',
                                    )}
                                >
                                    {/* Tech grid background effect */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%)] bg-[length:15px_15px]"></div>
                                    </div>

                                    {/* Scanning line effect */}
                                    <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>

                                    {/* Corner accent lights */}
                                    <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className="animation-delay-100 absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className="animation-delay-200 absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className="animation-delay-300 absolute right-0 bottom-0 h-1.5 w-1.5 border-r border-b border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                                    {/* Button content */}
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-cyan-300 transition-colors duration-100 group-hover:text-cyan-100">
                                        {submitting ? (
                                            <>
                                                <svg
                                                    className="h-4 w-4 animate-spin"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                <span className="text-sm font-medium text-cyan-200">{t.contact.form.sending}</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4 transform transition-transform duration-100 group-hover:translate-x-1" />
                                                <span className="text-sm font-medium tracking-wider text-cyan-200">{t.contact.form.send_button}</span>
                                            </>
                                        )}
                                    </span>

                                    {/* Data stream effect */}
                                    <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
