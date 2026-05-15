import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, X } from 'lucide-react';

interface NotificationProps {
    show: boolean;
    type: 'success' | 'error';
    message: string;
    subMessage?: string;
    onClose: () => void;
    autoCloseDuration?: number;
}

const Notification: React.FC<NotificationProps> = ({ show, type, message, subMessage, onClose, autoCloseDuration = 5000 }) => {
    useEffect(() => {
        if (show && autoCloseDuration) {
            const timer = setTimeout(() => {
                onClose();
            }, autoCloseDuration);
            return () => clearTimeout(timer);
        }
    }, [show, autoCloseDuration, onClose]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    className="fixed bottom-6 right-6 z-50 w-full max-w-sm px-4 md:px-0 pointer-events-auto"
                >
                    {type === 'success' ? (
                        <div className="w-full bg-surface border border-primary/40 rounded-2xl p-4 flex items-center justify-between shadow-[0_10px_30px_-10px_var(--color-primary)]">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-xl bg-primary/20 text-primary shrink-0 size-12">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main text-base font-semibold leading-normal">{message}</p>
                                    {subMessage && <p className="text-text-muted text-xs">{subMessage}</p>}
                                </div>
                            </div>
                            <button onClick={onClose} className="text-text-muted hover:text-text-main transition-colors p-1 rounded-full hover:bg-background-base shrink-0" aria-label="Close notification">
                                <X size={20} />
                            </button>
                        </div>
                    ) : (
                        <div className="w-full bg-surface border border-red-500/40 rounded-2xl p-4 flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(239,68,68,0.3)]">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-xl bg-red-500/20 text-red-500 shrink-0 size-12">
                                    <AlertTriangle size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main text-base font-semibold leading-normal">{message}</p>
                                    {subMessage && <p className="text-text-muted text-xs">{subMessage}</p>}
                                </div>
                            </div>
                            <button onClick={onClose} className="text-text-muted hover:text-text-main transition-colors p-1 rounded-full hover:bg-background-base shrink-0" aria-label="Close notification">
                                <X size={20} />
                            </button>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
