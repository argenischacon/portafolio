import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Check, Copy } from 'lucide-react';
import Notification from './Notification';

const Contact = () => {
    const { t } = useI18n();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [notification, setNotification] = useState<{ show: boolean, type: 'success' | 'error', message: string, subMessage: string }>({
        show: false,
        type: 'success',
        message: '',
        subMessage: ''
    });

    const formRef = useRef<HTMLFormElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Assembling email dynamically without putting plaintext in the original source
    const emailParts = useRef(['gmail.com', 'b', 'argenischacon', '@']);

    // Hide tooltip when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowEmail(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleCopy = () => {
        const contactEmail = `${emailParts.current[2]}${emailParts.current[1]}${emailParts.current[3]}${emailParts.current[0]}`;
        navigator.clipboard.writeText(contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setNotification({
                show: true,
                type: 'success',
                message: (t.contact as any).successMessage || 'Message sent successfully!',
                subMessage: (t.contact as any).successSubMessage || "We'll get back to you shortly."
            });
            formRef.current.reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('FAILED...', error);
            setStatus('error');
            setNotification({
                show: true,
                type: 'error',
                message: (t.contact as any).errorMessage || 'Failed to send message.',
                subMessage: (t.contact as any).errorSubMessage || 'Please try again later.'
            });
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="py-24 px-6 relative" id="contact">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{t.contact.badge}</h2>
                    <h3 className="text-4xl font-bold text-text-main">{t.contact.title}</h3>
                </div>
                <div className="bg-surface rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl space-y-8">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase" htmlFor="name">{t.contact.name}</label>
                                <input required className="w-full bg-background-base border-border focus:border-primary focus:ring-primary rounded-xl text-text-main px-4 py-3" id="name" name="name" placeholder={t.contact.namePlaceholder} type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase" htmlFor="email">{t.contact.email}</label>
                                <input required className="w-full bg-background-base border-border focus:border-primary focus:ring-primary rounded-xl text-text-main px-4 py-3" id="email" name="email" placeholder={t.contact.emailPlaceholder} type="email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-primary uppercase" htmlFor="message">{t.contact.message}</label>
                            <textarea required className="w-full bg-background-base border-border focus:border-primary focus:ring-primary rounded-xl text-text-main px-4 py-3" id="message" name="message" placeholder={t.contact.messagePlaceholder} rows={5}></textarea>
                        </div>
                        <button
                            disabled={status === 'sending'}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_var(--color-primary)] transition-all uppercase tracking-widest text-sm relative overflow-hidden disabled:opacity-75 disabled:cursor-not-allowed"
                            type="submit"
                        >
                            <span className="relative z-10 transition-opacity duration-300">
                                {status === 'sending' ? '...' : status === 'success' ? '✓' : status === 'error' ? 'Error' : t.contact.send}
                            </span>
                        </button>
                    </form>

                    {/* Socials inside the form box at the bottom */}
                    <div className="pt-8 border-t border-border flex flex-col items-center gap-4">
                        <p className="text-text-muted text-sm">{t.contact.socials}</p>
                        <div className="flex gap-4">
                            <a className="size-12 rounded-xl bg-background-base border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all" href="https://github.com/argenischacon" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a className="size-12 rounded-xl bg-background-base border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all" href="https://www.linkedin.com/in/argenischaconb/" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <div className="relative flex items-center" ref={wrapperRef}>
                                <button
                                    type="button"
                                    onClick={() => setShowEmail(!showEmail)}
                                    className="size-12 rounded-xl bg-background-base border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all z-10"
                                >
                                    <Mail size={20} />
                                </button>

                                {/* Tooltip revealing email */}
                                <div className={`absolute left-1/2 -top-12 -translate-x-1/2 flex items-center gap-2 px-3 py-2 bg-text-main text-surface text-sm rounded-lg shadow-xl border border-border transition-all duration-300 ${showEmail ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}>
                                    <span>{`${emailParts.current[2]}${emailParts.current[1]}${emailParts.current[3]}${emailParts.current[0]}`}</span>
                                    <button
                                        type="button"
                                        onClick={handleCopy}
                                        className="text-primary hover:text-primary/70 transition-colors flex items-center justify-center ml-1"
                                        title="Copy email"
                                    >
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Notification
                show={notification.show}
                type={notification.type}
                message={notification.message}
                subMessage={notification.subMessage}
                onClose={() => setNotification(prev => ({ ...prev, show: false }))}
            />
        </section>
    );
};

export default Contact;
