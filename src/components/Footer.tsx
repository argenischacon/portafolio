import { Terminal } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="py-12 px-6 border-t border-primary/10 bg-background-base">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Terminal className="text-primary" />
                    <p className="text-sm text-text-muted">{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
