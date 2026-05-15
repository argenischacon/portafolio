import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Rocket, ChevronLeft, ChevronRight, CheckCircle2, Network, Component, Coffee, Package } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        desc: string;
        extendedDesc?: string;
        tags: string[];
        features?: string[];
        techDecisions?: string;
        github?: string;
        demo?: string;
        jarLink?: string;
        msiLink?: string;
        images?: string[];
    } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    const { t, language } = useI18n();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (isLightboxOpen) {
                    setIsLightboxOpen(false);
                } else {
                    onClose();
                }
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!project) return null;

    const images = project.images && project.images.length > 0 ? project.images : [];
    const hasMultipleImages = images.length > 1;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 -z-10 bg-background-base/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface rounded-3xl border border-primary/10 shadow-2xl custom-scrollbar"
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-surface/95 backdrop-blur-md border-b border-border">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl md:text-2xl font-bold text-text-main tracking-tight">{project.title}</h2>
                                <span className="text-primary text-xs font-medium uppercase tracking-widest">{t.projects.badge}</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-background-base text-text-muted transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 space-y-8">
                            {/* Action Buttons Row */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                {project.jarLink && project.msiLink ? (
                                    <>
                                        {/* GitHub Button in 3-button layout */}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/5 transition-all text-sm">
                                                <Code2 size={18} />
                                                GitHub
                                            </a>
                                        )}
                                        {/* JAR Download Button */}
                                        <a href={project.jarLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-text-muted font-medium hover:bg-primary/5 hover:text-text-main transition-all text-sm">
                                            <Coffee size={18} />
                                            .JAR File
                                        </a>
                                        {/* MSI Download Button */}
                                        <a href={project.msiLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-text-muted font-medium hover:bg-primary/5 hover:text-text-main transition-all text-sm">
                                            <Package size={18} />
                                            .MSI Setup
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        {project.github ? (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/5 transition-all text-sm">
                                                <Code2 size={18} />
                                                {t.projects.github}
                                            </a>
                                        ) : (
                                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/5 cursor-not-allowed opacity-50 transition-all text-sm" disabled>
                                                <Code2 size={18} />
                                                {t.projects.github}
                                            </button>
                                        )}
                                        {project.demo ? (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-text-muted font-medium hover:bg-primary/5 hover:text-text-main transition-all text-sm">
                                                <Rocket size={18} />
                                                {t.projects.demo}
                                            </a>
                                        ) : (
                                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-text-muted font-medium hover:bg-primary/5 cursor-not-allowed transition-all text-sm" disabled>
                                                <Rocket size={18} />
                                                {t.projects.demo}
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Carousel Area */}
                            {images.length > 0 && (
                                <div className="relative group">
                                    <div className="aspect-video w-full rounded-2xl border border-primary/10 bg-gradient-to-br from-surface to-background-base flex items-center justify-center overflow-hidden">
                                        <img
                                            src={images[currentImageIndex]}
                                            alt={`${project.title} screenshot`}
                                            onClick={() => setIsLightboxOpen(true)}
                                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                                        />

                                        {/* Navigation Arrows */}
                                        {hasMultipleImages && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/80"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>

                                                {/* Dots */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                    {images.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                                            className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex
                                                                ? 'w-4 bg-primary'
                                                                : 'w-1.5 bg-primary/30 hover:bg-primary/50'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Description Section */}
                            <section className="space-y-3">
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {project.extendedDesc || project.desc}
                                </p>
                            </section>

                            {/* Features Section */}
                            {project.features && project.features.length > 0 && (
                                <section className="space-y-4">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                                <span className="text-sm text-text-muted leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Technical Decisions */}
                            {project.techDecisions && (
                                <section className="p-5 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                                    <h3 className="text-sm font-semibold text-primary/90 flex items-center gap-2">
                                        <Network size={18} />
                                        {language === 'en' ? 'Technical Decisions' : 'Decisiones Técnicas'}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {project.techDecisions}
                                    </p>
                                </section>
                            )}

                            {/* Tech Stack Section */}
                            <section className="space-y-4 pb-2">
                                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest flex items-center gap-2">
                                    <Component size={14} />
                                    {language === 'en' ? 'Tech Stack' : 'Tecnologías'}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            )}
            {/* Lightbox */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12">
                        {/* Lightbox Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />

                        {/* Lightbox Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                            className="relative w-full h-full max-w-6xl flex items-center justify-center group"
                        >
                            <img
                                src={images[currentImageIndex]}
                                alt={`${project.title} fullscreen`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />

                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-surface/10 text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                                    >
                                        <ChevronLeft size={32} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                                    >
                                        <ChevronRight size={32} />
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </AnimatePresence>
    );
};

export default ProjectModal;
