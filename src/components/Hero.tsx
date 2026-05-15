import { Download } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import selfieImg from '../assets/selfie.png';

const Hero = () => {
    const { t } = useI18n();

    return (
        <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10 py-12 md:py-0">
                <div className="space-y-8 order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {t.hero.available}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-text-main">
                        {t.hero.titleStart} <span className="text-primary">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
                    </h1>
                    <p className="text-lg md:text-2xl text-text-muted max-w-xl font-light">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_var(--color-primary)] transition-all" href="#projects">
                            {t.hero.viewProjects}
                        </a>
                        <a className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary/30 text-primary font-bold rounded-xl hover:bg-primary/5 transition-all" href="#contact">
                            {t.hero.contactMe}
                        </a>
                        <a className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary/30 text-primary font-bold rounded-xl hover:bg-primary/5 transition-all flex items-center gap-2" href="/cv-argenis-chacon.pdf" target="_blank" rel="noopener noreferrer">
                            <Download size={20} />
                            {t.hero.downloadCV}
                        </a>
                    </div>
                </div>
                <div className="relative order-1 md:order-2 w-64 md:w-full max-w-md mx-auto mb-8 md:mb-0">
                    <div className="w-full aspect-square rounded-full border border-primary/10 flex items-center justify-center p-4 md:p-8">
                        <div className="w-full h-full rounded-full border border-primary/20 flex items-center justify-center p-4 md:p-8">
                            <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-transparent overflow-hidden border-2 border-primary/40 relative group">
                                <div className="w-full h-full bg-center bg-cover bg-no-repeat transform group-hover:scale-105 transition-transform duration-500" title="Professional headshot of Argenis Chacón" style={{ backgroundImage: `url(${selfieImg})` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
