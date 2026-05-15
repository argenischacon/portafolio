export const translations = {
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            resume: "Resume"
        },
        hero: {
            available: "Available for Work",
            titleStart: "Java",
            titleHighlight: "Backend",
            titleEnd: "Developer",
            subtitle: "Systems Engineer building clean, scalable backends — one API at a time.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            downloadCV: "Download CV"
        },
        about: {
            description: "Systems Engineer and passionate Java Backend Developer with experience building personal projects ranging from monolithic web applications to REST APIs. In each of them I've applied industry best practices — clean code, automated testing, and microservices architecture. Committed to continuous learning and constant improvement, focused on growing and adding value to every project I join."
        },
        skills: {
            badge: "Toolbox",
            title: "Technical Expertise",
            categories: {
                core: "Core Development",
                spring: "Spring Ecosystem",
                api: "API & Auth",
                db: "Persistence",
                devops: "DevOps & Infra",
                arch: "Architecture"
            }
        },
        projects: {
            badge: "Portfolio",
            title: "Featured Work",
            subtitle: "Personal projects where I apply my knowledge and best practices.",
            comingSoon: "Coming soon",
            github: "GitHub",
            demo: "Demo",
            items: [
                {
                    title: "Dog Grooming Manager",
                    desc: "A portable desktop application for dog grooming management, developed in Java with a modern Swing interface and an embedded H2 database.",
                    extendedDesc: "Dog Grooming is a Java desktop application designed to manage dog grooming businesses. It features a modern GUI built with FlatLaf, offering light and dark themes. The application allows users to seamlessly manage pet owners and their dogs, providing full CRUD operations. Its data tier relies on JPA (EclipseLink) for persistence with an embedded H2 database, ensuring complete portability without requiring an external server installation.",
                    tags: ["Java 21", "Swing", "H2 Database", "JPA"],
                    features: [
                        "Owner and Dog management",
                        "Modern UI using FlatLaf with Light/Dark themes",
                        "Embedded H2 Database for total portability",
                        "Data validations through Jakarta Validation"
                    ],
                    techDecisions: "Java 21 and Swing were chosen to create a robust cross-platform desktop application. FlatLaf was implemented to overcome Java's traditional look-and-feel issues by providing a modern UI. H2 Database provides local persistence making the application entirely portable.",
                    github: "https://github.com/argenischacon/dog-grooming",
                    jarLink: "https://github.com/argenischacon/dog-grooming/releases/download/1.1.1/dog-grooming-1.1.1.jar",
                    msiLink: "https://github.com/argenischacon/dog-grooming/releases/download/1.1.1/dog-grooming-1.1.1.msi",
                    coverImage: "/projects/dog-grooming-showcase.png",
                    images: [
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_light.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_dark.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/create_dog.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/view_owner.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/validations.png"
                    ]
                },
                {
                    title: "Banking Security API",
                    desc: "Secure transactional gateway with multi-factor authentication, JWT token management, and comprehensive audit logging.",
                    extendedDesc: "A robust security layer designed for financial applications. This API acts as a gateway for sensitive transactions, implementing rigorous security standards. It handles OAuth2 flows, role-based access control (RBAC), and integrates an immutable audit log for compliance. The system is fortified against common OWASP vulnerabilities.",
                    tags: ["Jakarta EE", "PostgreSQL", "JWT"],
                    features: [
                        "Stateless authentication via hardened JWTs",
                        "Multi-factor authentication (MFA) endpoints",
                        "Immutable audit trails for all sensitive actions",
                        "Rate limiting and brute-force protection"
                    ],
                    techDecisions: "Jakarta EE provides a mature, enterprise-grade foundation for financial logic. PostgreSQL was selected for its strong ACID compliance. JWT allows for scalable, stateless authentication across multiple frontend clients.",
                    // Agregar imágenes reales aquí
                    images: [
                        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
                        "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=800&q=80"
                    ]
                },
                {
                    title: "Real-time Analytics Engine",
                    desc: "High-performance data processing engine using Spring Batch and WebSockets for live visualization of telemetry data.",
                    extendedDesc: "An engine built to ingest, process, and visualize high-velocity telemetry data from IoT devices. It utilizes Spring Batch for heavy nightly aggregations and Spring WebSockets to push live updates to the frontend dashboard. The architecture ensures low-latency delivery while maintaining data consistency across nodes.",
                    tags: ["Spring Batch", "MongoDB", "Redis"],
                    features: [
                        "Live data streaming to client dashboards via WebSockets",
                        "Complex asynchronous batch processing of historical data",
                        "In-memory caching of hot data for sub-millisecond reads",
                        "Horizontally scalable worker nodes"
                    ],
                    techDecisions: "MongoDB easily handles the flexible, schema-less nature of telemetry data. Redis is crucial for caching and pub/sub messaging to coordinate WebSocket sessions across multiple server instances.",
                    // Agregar imágenes reales aquí
                    images: [
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                    ]
                }
            ],
        },
        contact: {
            badge: "Connect",
            title: "Let's build something together.",
            name: "Name",
            namePlaceholder: "John Doe",
            email: "Email",
            emailPlaceholder: "john@example.com",
            message: "Message",
            messagePlaceholder: "Your message...",
            send: "Send Message",
            socials: "Reach out directly via social platforms:",
            successMessage: "Message sent successfully!",
            successSubMessage: "We'll get back to you shortly.",
            errorMessage: "Failed to send message.",
            errorSubMessage: "Please try again later."
        },
        footer: {
            copyright: "© 2026 Argenis Chacón. All rights reserved."
        }
    },
    es: {
        nav: {
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto",
            resume: "Currículum"
        },
        hero: {
            available: "Disponible para Trabajar",
            titleStart: "Desarrollador",
            titleHighlight: "Backend",
            titleEnd: "Java",
            subtitle: "Ingeniero de Sistemas construyendo backends limpios y escalables — una API a la vez.",
            viewProjects: "Ver Proyectos",
            contactMe: "Contáctame",
            downloadCV: "Descargar CV"
        },
        about: {
            description: "Ingeniero de Sistemas y Desarrollador Java Backend apasionado por construir soluciones backend sólidas, desde aplicaciones web monolíticas hasta APIs REST. En cada proyecto personal he aplicado buenas prácticas de la industria — código limpio, pruebas automatizadas y arquitectura de microservicios. Comprometido con el aprendizaje continuo y la mejora constante, enfocado en seguir creciendo y aportar valor en cada proyecto al que me sume."
        },
        skills: {
            badge: "Caja de Herramientas",
            title: "Experiencia Técnica",
            categories: {
                core: "Desarrollo Core",
                spring: "Ecosistema Spring",
                api: "API y Autenticación",
                db: "Persistencia",
                devops: "DevOps e Infraestructura",
                arch: "Arquitectura"
            }
        },
        projects: {
            badge: "Portafolio",
            title: "Proyectos Destacados",
            subtitle: "Proyectos personales donde aplico mis conocimientos y buenas prácticas.",
            comingSoon: "Próximamente",
            github: "GitHub",
            demo: "Demo",
            items: [
                {
                    title: "Gestor de Peluquería Canina",
                    desc: "Una aplicación de escritorio portable para la gestión de peluquería canina, desarrollada en Java con interfaz gráfica Swing moderna y base de datos H2 embebida.",
                    extendedDesc: "Dog Grooming es una aplicación de escritorio desarrollada en Java diseñada para administrar negocios de peluquería canina. Cuenta con una GUI moderna construida con FlatLaf, ofreciendo temas claro y oscuro. La aplicación permite gestionar dueños y sus perros, proveyendo operaciones CRUD completas. Su capa de datos utiliza JPA (EclipseLink) con una base de datos embebida H2, asegurando portabilidad total sin necesidad de instalar un servidor externo.",
                    tags: ["Java 21", "Swing", "H2 Database", "JPA"],
                    features: [
                        "Gestión de Dueños y Perros",
                        "Interfaz moderna usando FlatLaf con temas Claro y Oscuro",
                        "Base de datos H2 embebida para portabilidad total",
                        "Validaciones mediante Jakarta Validation"
                    ],
                    techDecisions: "Se eligió Java 21 y Swing para crear una robusta aplicación de escritorio multiplataforma. FlatLaf fue implementado para superar los problemas tradicionales de aspecto visual de Java. H2 Database provee persistencia local haciendo la aplicación completamente portable",
                    github: "https://github.com/argenischacon/dog-grooming",
                    jarLink: "https://github.com/argenischacon/dog-grooming/releases/download/1.1.1/dog-grooming-1.1.1.jar",
                    msiLink: "https://github.com/argenischacon/dog-grooming/releases/download/1.1.1/dog-grooming-1.1.1.msi",
                    coverImage: "/projects/dog-grooming-showcase.png",
                    images: [
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_light.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_dark.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/create_dog.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/view_owner.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/validations.png"
                    ]
                },
                {
                    title: "API de Seguridad Bancaria",
                    desc: "Pasarela transaccional segura con autenticación multifactor, gestión de tokens JWT y registro de auditoría exhaustivo.",
                    extendedDesc: "Una capa de seguridad robusta diseñada para aplicaciones financieras. Esta API actúa como una pasarela para transacciones sensibles, implementando rigurosos estándares de seguridad. Maneja flujos OAuth2, control de acceso basado en roles (RBAC) e integra un registro de auditoría inmutable para cumplimiento. El sistema está fortificado contra vulnerabilidades comunes de OWASP.",
                    tags: ["Jakarta EE", "PostgreSQL", "JWT"],
                    features: [
                        "Autenticación sin estado a través de JWTs seguros",
                        "Endpoints de autenticación multifactor (MFA)",
                        "Pistas de auditoría inmutables para toda acción sensible",
                        "Limitación de tasa y protección contra fuerza bruta"
                    ],
                    techDecisions: "Jakarta EE proporciona una base madura a nivel empresarial para lógica financiera. PostgreSQL fue seleccionado por su fuerte cumplimiento ACID. JWT permite una autenticación escalable y sin estado en múltiples clientes frontend.",
                    // Agregar imágenes reales aquí
                    images: [
                        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
                        "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=800&q=80"
                    ]
                },
                {
                    title: "Motor de Analítica en Tiempo Real",
                    desc: "Motor de procesamiento de datos de alto rendimiento usando Spring Batch y WebSockets para visualización en vivo de telemetría.",
                    extendedDesc: "Un motor construido para ingerir, procesar y visualizar datos de telemetría de alta velocidad provenientes de dispositivos IoT. Utiliza Spring Batch para agregaciones pesadas nocturnas y Spring WebSockets para enviar actualizaciones en vivo al dashboard del frontend. La arquitectura garantiza la entrega de baja latencia manteniendo la consistencia de los datos en todos los nodos.",
                    tags: ["Spring Batch", "MongoDB", "Redis"],
                    features: [
                        "Transmisión de datos en vivo a dashboards mediante WebSockets",
                        "Procesamiento asíncrono complejo por lotes de datos históricos",
                        "Caché en memoria de datos calientes para lecturas en submilisegundos",
                        "Nodos de trabajo escalables horizontalmente"
                    ],
                    techDecisions: "MongoDB maneja fácilmente la naturaleza flexible y sin esquema de los datos de telemetría. Redis es crucial para la caché y la mensajería pub/sub para coordinar sesiones de WebSocket en múltiples instancias de servidor.",
                    // Agregar imágenes reales aquí
                    images: [
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                    ]
                }
            ],
        },
        contact: {
            badge: "Conectar",
            title: "Construyamos algo juntos.",
            name: "Nombre",
            namePlaceholder: "Juan Pérez",
            email: "Correo",
            emailPlaceholder: "juan@ejemplo.com",
            message: "Mensaje",
            messagePlaceholder: "Tu mensaje...",
            send: "Enviar Mensaje",
            socials: "Contáctame directamente a través de las redes sociales:",
            successMessage: "¡Mensaje enviado con éxito!",
            successSubMessage: "Nos pondremos en contacto contigo en breve.",
            errorMessage: "No se pudo enviar el mensaje.",
            errorSubMessage: "Por favor, inténtalo de nuevo más tarde."
        },
        footer: {
            copyright: "© 2026 Argenis Chacón. Todos los derechos reservados."
        }
    }
};

export type Language = 'en' | 'es';
export type TranslationKey = typeof translations.en;
