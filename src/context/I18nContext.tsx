import { createContext, useContext, useState } from 'react';
import { translations, type Language, type TranslationKey } from '../utils/translations';

interface I18nContextType {
    language: Language;
    t: TranslationKey;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const savedLang = localStorage.getItem('language') as Language | null;
        if (savedLang) return savedLang;

        const systemLang = navigator.language;
        if (systemLang.startsWith('es')) {
            localStorage.setItem('language', 'es');
            return 'es';
        }
        localStorage.setItem('language', 'en');
        return 'en';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    const t = translations[language];

    return (
        <I18nContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};
