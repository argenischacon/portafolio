import { Terminal, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useI18n();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-base/90 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Terminal size={20} className="font-bold" />
                    </div>
                    <h1 className="text-xl font-extrabold tracking-tight text-text-main">Argenis Chacón</h1>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">{t.nav.about}</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">{t.nav.skills}</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">{t.nav.projects}</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">{t.nav.contact}</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/5 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors"
                    >
                        <span className={language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
                        <span className="text-text-muted">/</span>
                        <span className={language === 'es' ? 'opacity-100' : 'opacity-50'}>ES</span>
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-surface text-primary border border-primary/20 hover:bg-surface/80 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
