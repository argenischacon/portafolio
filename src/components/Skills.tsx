import React from 'react';
import { useI18n } from '../context/I18nContext';
import { Terminal, Lightbulb, Key, Library, Hammer, Database, Layers, LayoutTemplate, Blocks, Laptop, Settings, Compass, MonitorPlay } from 'lucide-react';

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    items: string[];
}

const renderIcon = (name: string) => {
    return (
        <span className="px-5 py-2.5 text-sm font-bold tracking-tight text-text-main bg-surface/40 border border-primary/20 rounded-full backdrop-blur-md hover:bg-surface/80 hover:border-primary hover:shadow-[0_0_20px_var(--color-primary)] hover:-translate-y-0.5 transition-all duration-300 cursor-default" title={name}>
            {name}
        </span>
    );
};

// Exact categories matching the final requirements - NO devicons or image badges. Text only.
const skillCategories: SkillCategory[] = [
    {
        title: 'Core',
        icon: <Terminal size={20} />,
        items: ['Java', 'Jakarta EE']
    },
    {
        title: 'Spring Ecosystem',
        icon: <Lightbulb size={20} />,
        items: ['Spring Framework', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA']
    },
    {
        title: 'Auth',
        icon: <Key size={20} />,
        items: ['JWT', 'Form-based Auth (Spring Security)', 'OAuth 2.0 / OIDC']
    },
    {
        title: 'Libraries',
        icon: <Library size={20} />,
        items: ['Lombok', 'MapStruct']
    },
    {
        title: 'Build & Testing',
        icon: <Hammer size={20} />,
        items: ['Maven', 'JUnit', 'Mockito', 'SonarQube']
    },
    {
        title: 'Persistence',
        icon: <Database size={20} />,
        items: ['JPA (Hibernate, EclipseLink)', 'PostgreSQL', 'MySQL', 'H2']
    },
    {
        title: 'API & Docs',
        icon: <Layers size={20} />,
        items: ['REST', 'Swagger', 'OpenAPI', 'JSON', 'XML', 'Postman']
    },
    {
        title: 'Templates',
        icon: <LayoutTemplate size={20} />,
        items: ['Thymeleaf', 'JSP']
    },
    {
        title: 'Architecture',
        icon: <Blocks size={20} />,
        items: ['Microservices']
    },
    {
        title: 'Frontend',
        icon: <Laptop size={20} />,
        items: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'DevOps & Tools',
        icon: <Settings size={20} />,
        items: ['Docker', 'Git', 'GitHub', 'GitHub Actions / CI-CD', 'Linux / Bash']
    },
    {
        title: 'Modeling',
        icon: <Compass size={20} />,
        items: ['UML']
    },
    {
        title: 'IDEs',
        icon: <MonitorPlay size={20} />,
        items: ['IntelliJ IDEA', 'NetBeans', 'VS Code']
    }
];

const Skills = () => {
    const { t } = useI18n();

    return (
        <section className="py-24 px-6" id="skills">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{t.skills.badge}</h2>
                    <h3 className="text-4xl font-bold text-text-main">{t.skills.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillCategories.map((category, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-surface border border-primary/10 hover:border-primary/40 transition-colors flex flex-col items-center text-center">
                            <h4 className="text-primary text-sm font-bold mb-6 flex items-center justify-center gap-2 uppercase tracking-wide">
                                {category.icon}
                                {category.title}
                            </h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.items.map((item, j) => (
                                    <React.Fragment key={j}>
                                        {renderIcon(item)}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
