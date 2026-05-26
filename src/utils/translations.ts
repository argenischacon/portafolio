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
                    coverImage: "/projects/dog-grooming-cover.png",
                    images: [
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_light.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_dark.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/create_dog.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/view_owner.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/validations.png"
                    ]
                },
                {
                    title: "Inventory & Sales System",
                    desc: "A RESTful API for comprehensive inventory and sales management, featuring secure JWT authentication, full CRUD operations, and interactive Swagger documentation.",
                    extendedDesc: "A backend application built with Spring Boot 3 and Java 21 to manage a complete inventory and sales system. It handles the full lifecycle of Products, Categories, Customers, and Sales with detailed traceability. The security layer is powered by Spring Security with JWT, ensuring stateless and scalable authentication. Data is mapped efficiently between entities and DTOs using MapStruct, and all endpoints are fully documented and testable via Swagger UI / OpenAPI 3. Supports H2 for local development and PostgreSQL for production environments.",
                    tags: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "MapStruct", "Swagger"],
                    features: [
                        "JWT-based stateless authentication and authorization",
                        "Full CRUD for Products, Categories, Customers, and Sales",
                        "Detailed sale records with amount calculation and traceability",
                        "Interactive API documentation via Swagger UI / OpenAPI 3",
                        "Clean entity-to-DTO mapping using MapStruct",
                        "Layered architecture: controller, service, repository, mapper",
                        "H2 in-memory DB for development, PostgreSQL for production",
                        "Global exception handling with unified error responses"
                    ],
                    techDecisions: "Spring Boot 3 and Java 21 were chosen to leverage the latest LTS features and a mature enterprise ecosystem. Spring Security with JWT provides scalable, stateless authentication suitable for multi-client environments. MapStruct was selected over manual mapping for compile-time safety and performance. The dual-database strategy (H2 / PostgreSQL) allows frictionless local development while remaining production-ready.",
                    github: "https://github.com/argenischacon/inventory-sales-system",
                    coverImage: "/projects/iss-cover.png",
                    images: [
                        "/projects/iss-swagger-overview.png",
                        "/projects/iss-swagger-endpoints.png",
                        "/projects/iss-swagger-response.png",
                        "/projects/iss-class-diagram.png"
                    ]
                },
                {
                    title: "Dental Clinic Management System",
                    desc: "Internal web system for a dental clinic, featuring role-based access control, patient management, appointment scheduling, and a dentist agenda dashboard.",
                    extendedDesc: "A full-stack web application built with Spring Boot 3 and Thymeleaf, designed to streamline the daily operations of a dental clinic. The system supports three roles — Administrator, Dentist, and Secretary — each with differentiated access. It handles patient registration including guardians for minors, dentist profiles and schedules, appointment booking and cancellation, and a service catalog. The UI is built on SB Admin 2 (Bootstrap 4) for a clean, professional admin panel.",
                    tags: ["Java 21", "Spring Boot", "Spring Security", "Thymeleaf", "Bootstrap 4", "H2", "MapStruct", "Lombok"],
                    features: [
                        "Role-based access: Administrator, Dentist, and Secretary",
                        "Patient management with guardian support for minors",
                        "Appointment scheduling, rescheduling, and cancellation",
                        "Dentist daily agenda view",
                        "Service and treatment catalog management",
                        "Admin panel built with SB Admin 2 (Bootstrap 4)",
                        "Form-based authentication via Spring Security",
                        "DTO mapping with MapStruct"
                    ],
                    techDecisions: "Thymeleaf was chosen over a separate frontend framework to keep the stack cohesive and server-rendered, ideal for an internal admin tool. Spring Security handles form-based auth with role differentiation. H2 is used in development for a zero-config setup. MapStruct ensures clean separation between entities and DTOs at compile time.",
                    github: "https://github.com/argenischacon/dental-clinic",
                    coverImage: "/projects/dental-clinic-cover.png",
                    inProgress: true,
                    images: [
                        "/projects/dc-login.png",
                        "/projects/dc-dentist-list.png",
                        "/projects/dc-dentist-details.png"
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
                    coverImage: "/projects/dog-grooming-cover.png",
                    images: [
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_light.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/main_dark.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/create_dog.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/view_owner.png",
                        "https://raw.githubusercontent.com/argenischacon/dog-grooming/main/assets/validations.png"
                    ]
                },
                {
                    title: "Sistema de Inventario y Ventas",
                    desc: "API RESTful para la gestión integral de inventario y ventas, con autenticación JWT segura, operaciones CRUD completas y documentación interactiva con Swagger.",
                    extendedDesc: "Aplicación backend construida con Spring Boot 3 y Java 21 para gestionar un sistema completo de inventario y ventas. Maneja el ciclo de vida de Productos, Categorías, Clientes y Ventas con trazabilidad detallada. La capa de seguridad utiliza Spring Security con JWT, garantizando autenticación sin estado y escalable. Los datos se mapean eficientemente entre entidades y DTOs usando MapStruct, y todos los endpoints están documentados y son testeables desde Swagger UI / OpenAPI 3. Soporta H2 para desarrollo local y PostgreSQL para entornos de producción.",
                    tags: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "MapStruct", "Swagger"],
                    features: [
                        "Autenticación y autorización sin estado con JWT",
                        "CRUD completo para Productos, Categorías, Clientes y Ventas",
                        "Registro detallado de ventas con cálculo de montos y trazabilidad",
                        "Documentación interactiva de la API con Swagger UI / OpenAPI 3",
                        "Mapeo limpio entidad-DTO mediante MapStruct",
                        "Arquitectura en capas: controlador, servicio, repositorio, mapper",
                        "Base de datos H2 en memoria para desarrollo, PostgreSQL para producción",
                        "Manejo global de excepciones con respuestas de error unificadas"
                    ],
                    techDecisions: "Spring Boot 3 y Java 21 fueron elegidos para aprovechar las últimas características LTS y un ecosistema empresarial maduro. Spring Security con JWT provee autenticación escalable y sin estado, ideal para entornos multi-cliente. MapStruct fue preferido sobre el mapeo manual por su seguridad en tiempo de compilación y rendimiento. La estrategia dual de base de datos (H2 / PostgreSQL) permite un desarrollo local sin fricciones manteniendo la aplicación lista para producción.",
                    github: "https://github.com/argenischacon/inventory-sales-system",
                    coverImage: "/projects/iss-cover.png",
                    images: [
                        "/projects/iss-swagger-overview.png",
                        "/projects/iss-swagger-endpoints.png",
                        "/projects/iss-swagger-response.png",
                        "/projects/iss-class-diagram.png"
                    ]
                },
                {
                    title: "Sistema de Gestión de Clínica Dental",
                    desc: "Sistema web interno para una clínica dental con control de acceso por roles, gestión de pacientes, programación de citas y agenda diaria para odontólogos.",
                    extendedDesc: "Aplicación web full-stack construida con Spring Boot 3 y Thymeleaf, diseñada para optimizar las operaciones diarias de una clínica dental. El sistema soporta tres roles — Administrador, Odontólogo y Secretaria — cada uno con acceso diferenciado. Gestiona el registro de pacientes incluyendo responsables para menores de edad, perfiles y horarios de odontólogos, programación y cancelación de citas, y un catálogo de servicios. La interfaz está construida sobre SB Admin 2 (Bootstrap 4) para un panel de administración limpio y profesional.",
                    tags: ["Java 21", "Spring Boot", "Spring Security", "Thymeleaf", "Bootstrap 4", "H2", "MapStruct", "Lombok"],
                    features: [
                        "Acceso por roles: Administrador, Odontólogo y Secretaria",
                        "Gestión de pacientes con soporte de responsables para menores",
                        "Programación, reprogramación y cancelación de citas",
                        "Vista de agenda diaria para odontólogos",
                        "Gestión de catálogo de servicios y tratamientos",
                        "Panel de administración con SB Admin 2 (Bootstrap 4)",
                        "Autenticación basada en formulario con Spring Security",
                        "Mapeo de DTOs con MapStruct"
                    ],
                    techDecisions: "Thymeleaf fue elegido sobre un framework frontend separado para mantener el stack cohesivo y server-rendered, ideal para una herramienta interna. Spring Security gestiona la autenticación por formulario con diferenciación de roles. H2 se usa en desarrollo para un setup sin configuración. MapStruct garantiza una separación limpia entre entidades y DTOs en tiempo de compilación.",
                    github: "https://github.com/argenischacon/dental-clinic",
                    coverImage: "/projects/dental-clinic-cover.png",
                    inProgress: true,
                    images: [
                        "/projects/dc-login.png",
                        "/projects/dc-dentist-list.png",
                        "/projects/dc-dentist-details.png"
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
