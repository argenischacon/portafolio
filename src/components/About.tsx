import { useI18n } from '../context/I18nContext';

const About = () => {
    const { t } = useI18n();

    return (
        <section className="py-24 px-6 bg-primary/5" id="about">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-4 text-xl sm:text-2xl font-light text-text-muted leading-relaxed text-balance">
                            <p>{t.about.description}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full"></div>
                            <div className="size-64 rounded-full border-4 border-primary/30 overflow-hidden relative z-10">
                                <div className="w-full h-full bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-500" title="Creative workspace with development setup" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800')" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
