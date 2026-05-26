import { useState } from 'react';
import { ShoppingCart, Building2, Activity, Code2, Rocket, ChevronLeft, ChevronRight, Coffee, Package } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const { t, language } = useI18n();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const itemsPerPage = 6;
    const totalItems = t.projects.items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const currentItems = t.projects.items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const getIconForProject = (index: number) => {
        const icons = [ShoppingCart, Building2, Activity];
        const IconComponent = icons[index % icons.length];
        return <IconComponent className="text-primary" size={64} />;
    };

    return (
        <section className="py-24 px-6 bg-primary/5" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{t.projects.badge}</h2>
                        <h3 className="text-4xl font-bold text-text-main">{t.projects.title}</h3>
                    </div>
                    <p className="text-text-muted max-w-sm">{t.projects.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.map((project, index) => {
                        // Calculate original index to ensure correct icon mapping
                        const originalIndex = (currentPage - 1) * itemsPerPage + index;

                        return (
                            <div
                                key={originalIndex}
                                className="flex flex-col rounded-2xl overflow-hidden bg-surface border border-primary/10 group hover:border-primary/40 transition-all cursor-pointer"
                                onClick={() => setSelectedProject(originalIndex)}
                            >
                                <div className="aspect-video bg-surface relative overflow-hidden">
                                    {/* Badge "En desarrollo / In Progress" */}
                                    {'inProgress' in project && project.inProgress && (
                                        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                                            </span>
                                            {language === 'es' ? 'En desarrollo' : 'In Progress'}
                                        </div>
                                    )}
                                    {project.coverImage ? (
                                        <>
                                            <div className="absolute inset-0 z-0">
                                                <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-80 z-10"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                                            <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 group-hover:scale-110 transition-transform">
                                                {getIconForProject(originalIndex)}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h4 className="text-xl font-bold text-text-main mb-3">{project.title}</h4>
                                    <p className="text-text-muted text-sm mb-6 flex-1">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        {/* Modifying the buttons to not propagate the click event to the card */}
                                        {'jarLink' in project && 'msiLink' in project && project.jarLink && project.msiLink ? (
                                            <div className="w-full flex flex-row flex-wrap items-center gap-2">
                                                {/* GitHub Button in 3-button layout */}
                                                {project.github ? (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex-1 min-w-[30%] flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-xs font-bold"
                                                    >
                                                        <Code2 size={16} /> GitHub
                                                    </a>
                                                ) : null}
                                                {/* JAR Download Button */}
                                                <a
                                                    href={project.jarLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex-1 min-w-[30%] flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-text-muted hover:text-text-main hover:bg-primary/5 transition-all text-xs font-bold"
                                                >
                                                    <Coffee size={16} /> .JAR File
                                                </a>
                                                {/* MSI Download Button */}
                                                <a
                                                    href={project.msiLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex-1 min-w-[30%] flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-text-muted hover:text-text-main hover:bg-primary/5 transition-all text-xs font-bold"
                                                >
                                                    <Package size={16} /> .MSI Setup
                                                </a>
                                            </div>
                                        ) : (
                                            <>
                                                {project.github ? (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-xs font-bold group/btn relative"
                                                    >
                                                        <Code2 size={16} /> {t.projects.github}
                                                    </a>
                                                ) : (
                                                    <button
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-background-base text-text-muted cursor-not-allowed text-xs font-bold group/btn relative"
                                                        disabled
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Code2 size={16} /> {t.projects.github}
                                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap z-20">{t.projects.comingSoon}</span>
                                                    </button>
                                                )}
                                                {'demo' in project && project.demo ? (
                                                    <a
                                                        href={project.demo as string}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border text-text-muted hover:text-text-main hover:bg-primary/5 transition-colors text-xs font-bold group/btn relative"
                                                    >
                                                        <Rocket size={16} /> {t.projects.demo}
                                                    </a>
                                                ) : (
                                                    <button
                                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-background-base text-text-muted cursor-not-allowed text-xs font-bold group/btn relative"
                                                        disabled
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Rocket size={16} /> {t.projects.demo}
                                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main text-surface text-[10px] px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap z-20">{t.projects.comingSoon}</span>
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 gap-4">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-lg border flex items-center justify-center transition-colors ${currentPage === 1
                                ? 'border-primary/10 text-slate-600 bg-transparent cursor-not-allowed'
                                : 'border-primary/30 text-primary hover:bg-primary/10'
                                }`}
                            aria-label="Previous Page"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <span className="text-text-muted text-sm font-medium">
                            {currentPage} / {totalPages}
                        </span>

                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-lg border flex items-center justify-center transition-colors ${currentPage === totalPages
                                ? 'border-primary/10 text-slate-600 bg-transparent cursor-not-allowed'
                                : 'border-primary/30 text-primary hover:bg-primary/10'
                                }`}
                            aria-label="Next Page"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                project={selectedProject !== null ? t.projects.items[selectedProject] : null}
            />
        </section>
    );
};

export default Projects;
