// Diccionario central de textos EN/ES. Las claves con "//" son etiquetas
// de estilo "terminal" (MODULE_XX, PROCESS_ID, etc.) que se mantienen en
// inglés en ambos idiomas a propósito — son parte de la estética del
// sitio, no contenido a traducir.

export const translations = {
  en: {
    nav: {
      bio: "// Bio",
      exp: "// Exp",
      skills: "// Skills",
      lab: "// Lab",
      projects: "// Projects",
      cv: "// CV",
      contact: "Contact.me",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: ">> INTELLIGENT COMPUTING ENGINEER",
      tags: ["Full-Stack & DevOps", "Intelligent Systems & MCP", "Cloud & Automation"],
      ctaProjects: "Explore Projects",
      ctaLab: "View LAB",
      ctaContact: "Get in Touch",
      ctaViewCv: "View CV",
      ctaCv: "Download CV",
    },
    about: {
      module: "// MODULE_01: BIO",
      heading: "About Me",
      bio: "Intelligent Computing Engineer combining robust Full-Stack architecture and DevOps practices with cutting-edge AI systems. Experienced in engineering resilient web applications using .NET, Angular, React, and SQL Server, while orchestrating end-to-end production pipelines, automated releases, and business intelligence reporting. Committed to building scalable software infrastructure and innovative generative engines.",
      educationLabel: "Education",
      degree: "B.S. Intelligent Computing Engineering",
      school:
        "Autonomous University of Aguascalientes | August 2019 - June 2024",
      focus:
        "Focus: Artificial Intelligence, Data Mining, Intelligent Optimization, and Advanced Algorithms. Designed computational solutions using intelligent models to address complex software engineering problems.",
    },
    experience: {
      module: "// MODULE_02: EXPERIENCE",
      heading: "Experience",
      jobs: [
        {
          company: "RAINDE",
          roleDates: "SOFTWARE & DEVOPS ENGINEER | NOV 2024 - CURRENT",
          bullets: [
            "Architected and deployed responsive enterprise applications (web & mobile) using Angular, TypeScript, .NET Core, and SQL Server for mission-critical logistics operations.",
            "Engineered and automated CI/CD release pipelines (GitHub Actions / GitLab CI) for compilation, packaging, and distribution, slashing release turnaround from hours to under 15 minutes.",
            "Built scalable RESTful services and implemented Business Intelligence pipelines (Power BI / Tableau) driving operational traceability across logistics workflows.",
            "Standardized Git branching workflows (GitFlow) and reproducible environment provisioning using Docker and Linux, eliminating configuration drift across development stages.",
          ],
        },
        {
          company: "Lion Intel Solutions",
          roleDates: "FULLSTACK DEVELOPER | MAY 2024 - NOV 2024",
          bullets: [
            "Spearheaded end-to-end architecture and implementation of a clinical dermatology web portal utilizing Vue.js, ASP.NET, and SQL Server.",
            "Engineered secure RESTful APIs and marketplace integrations to synchronize digital catalogs and commercial transactions in real time.",
            "Optimized relational SQL queries and administrative workflows, cutting response latency by 35% and centralizing patient operational management.",
          ],
        },
        {
          company: "Cuauhtémoc University",
          roleDates: "IT INFRASTRUCTURE & AUTOMATION | MAY 2021 - FEB 2023",
          bullets: [
            "Engineered and deployed a custom internal ticketing platform, automating service reporting and cutting incident resolution times by 40% for 1,000+ campus users.",
            "Administered campus network infrastructure, telecom servers, and security hardware, maintaining 99.5% operational uptime and reliability.",
          ],
        },
      ],
      viewFullCv: "View Full Resume (Oxford ATS)",
    },
    skills: {
      module: "// MODULE_03: TECH_STACK",
      heading: "Skills",
      categories: [
        {
          title: "// FULL-STACK ARCHITECTURE",
          items: [
            "C#",
            ".NET / .NET Core",
            "Angular",
            "React",
            "Next.js",
            "TypeScript",
            "SQL Server",
            "RESTful APIs",
          ],
        },
        {
          title: "// DEVOPS, CLOUD & INFRASTRUCTURE",
          items: [
            "Docker",
            "CI/CD Pipelines",
            "Linux",
            "Git Workflows",
            "Mobile & Web Releases",
            "Nginx",
          ],
        },
        {
          title: "// AI SYSTEMS, ORCHESTRATION & AGENTS",
          items: [
            "Model Context Protocol (MCP)",
            "Python",
            "Agentic Workflows",
            "n8n Automation",
            "Intelligent Optimization",
            "Local LLMs",
          ],
        },
        {
          title: "// CREATIVE TECH & AUDIO DSP",
          items: [
            "Blender (3D Python)",
            "Adobe After Effects Engine",
            "Audio DSP / VST",
            "Game Dev Toolchains",
          ],
        },
      ],
    },
    lab: {
      module: "// MODULE_04: LAB",
      heading: "Creative Tech & AI Engines",
      subtitle:
        "Architecting custom graphics engines, AI orchestration systems, and generative pipelines via Model Context Protocol (MCP).",
      keyInnovations: "// Key Innovations",
      items: [
        {
          id: "ae-video-engine",
          name: "After Effects MCP Video Engine",
          tagline: "Token-Efficient AI Video Orchestration",
          blurb:
            "Proprietary graphics and composition bridge connected to Adobe After Effects through MCP. Allows AI models to orchestrate, animate, and render motion graphics using compact control signals rather than heavy prompt loads—achieving massive token savings and real-time execution.",
          highlights: [
            "Context-optimized payload routing (Token Savings)",
            "Automated multi-layer timeline and camera animation",
            "Real-time headless render queue automation",
          ],
          tags: ["After Effects", "MCP Protocol", "Token Optimization", "Motion Graphics", "Custom Engine"],
          image: "/images/lab/ae-video-engine.webp",
        },
        {
          id: "blender-character-engine",
          name: "Blender Asset Orchestration Engine (AOE)",
          tagline: "Token-Efficient 3D Asset & World Generation via MCP",
          blurb:
            "A high-speed graphics and asset orchestration pipeline bridging Blender via Python API and MCP. Empowers AI coding assistants to generate parametric 3D meshes, automated rigging, and procedural environments with single-turn batch commands, saving up to 80% context tokens.",
          highlights: [
            "Procedural mesh generation & topological modeling",
            "Automated skeleton rigging & skin weight assignment",
            "19-stage production orchestrator & headless Blender export",
          ],
          tags: ["Blender", "MCP Protocol", "Procedural 3D", "Character Pipeline", "Python Engine"],
          image: "/images/lab/blender-character-engine.webp",
          gitUrl: "https://github.com/k3v-5/AssetOrchestrationEngine",
        },
        {
          id: "hendrix-assistant",
          name: "Hendrix Assistant",
          tagline: "Mobile AI Assistant & Desktop/IoT Orchestration",
          blurb:
            "Mobile AI assistant engineered with a hybrid cloud and local API architecture. Seamlessly connects with desktop environments to execute OS-level process automation, build intelligent custom routines, orchestrate smart home domotics, and solve multi-step complex workflows.",
          highlights: [
            "Hybrid API integration: Remote endpoints & local model inference",
            "Desktop-bridge workflow orchestration & smart routines",
            "Smart home domotics & IoT device automation",
          ],
          tags: ["Mobile AI", "Local LLMs", "Automation", "IoT / Domotics", "Desktop Bridge", "APIs"],
          image: "/images/lab/hendrix-assistant.webp",
          gitUrl: "https://github.com/k3v-5/HendrixAssistant",
        },
      ],
    },
    projects: {
      module: "// MODULE_05: PORTFOLIO",
      heading: "Projects",
      filters: {
        all: "All",
        fullstack: "Full-Stack Web",
        ai: "AI & Agents",
        gameDev: "Game Dev",
        audioDev: "Audio / VST",
      },
      readMore: "Read more",
      showLess: "Show less",
      items: {
        0: {
          title: "DARX",
          badge: "In Active Development",
          description:
            "Action-adventure video game currently in development, built on a proprietary generative toolchain. Integrates 3D characters procedurally synthesized through the Blender MCP engine with cinematic sequences and visual motion orchestrated via the After Effects MCP pipeline.",
        },
        7: {
          title: "AbletonEngine",
          badge: "Generative Music Studio",
          audioDemoLabel: "Algorithmic Composition Output",
          audioFallbackNote: "Place audio file in public/audio",
          description:
            "Autonomous algorithmic composition and AI music production pipeline connected to Ableton Live. Generates complete musical arrangements while enforcing rigorous production standards, including real-time LUFS loudness validation, tonal key consistency, chord voicing, and multi-track spectral balance.",
        },
        6: {
          title: "N8Effect",
          badge: "Modular Audio Engine",
          audioDemoLabel: "Spatial DSP Modular Output",
          audioFallbackNote: "Place audio file in public/audio",
          description:
            "Modular VST audio plugin engineered for dynamic effect integration and custom audio signal chain routing. Designed for high-fidelity audio reprocessing, real-time spatial manipulation, and the synthesis of intricate acoustic atmospheres and soundscapes.",
        },
        5: {
          title: "LexiKit",
          description:
            "AI-powered language learning app that generates lessons on demand and reinforces them with spaced repetition across a variety of flashcard types.",
        },
        1: {
          title: "Full-Stack Dating Platform",
          badge: "Enterprise Architecture",
          description:
            "Full-stack web platform built with a decoupled architecture using ASP.NET Core Web API and Angular SPA. Features secure JWT authentication, bidirectional real-time messaging, comprehensive user profile management, and relational database persistence.",
        },
      },
    },
    signalLog: {
      module: "// MODULE_06: SIGNAL_LOG",
      heading: "Transmissions",
      nowPlaying: "Now Playing",
      offline: "Offline",
      book: {
        title: "Moby Dick",
        author: "Herman Melville",
        progress: "10% COMPLETED",
      },
    },
    contact: {
      badge: "Open for new projects",
      eyebrow: ">> SIGNAL_READY",
      heading: "Let's Connect.",
      body: "Whether it's a technical challenge, a business inquiry, or you just want to share a good book recommendation—my inbox is always open.",
      copyHint: "Click to copy",
      copiedHint: "Copied to clipboard",
      openMail: "Open in mail client",
      backToTop: "Back to top",
      otherOptions: "// You could also try some other options:",
    },
    cvModal: {
      badge: "OXFORD ATS FORMAT // 1-PAGE RESUME",
      title: "Curriculum Vitae",
      subtitle: "Official single-page Oxford layout with 100% ATS score compliance.",
      actions: {
        downloadPdf: "Download PDF",
        openPdf: "Open in Tab",
        copyText: "Copy ATS Text",
        copied: "Copied to Clipboard!",
        close: "Close",
      },
      sections: {
        education: "EDUCATION",
        experience: "PROFESSIONAL EXPERIENCE",
        projects: "SELECTED PROJECTS",
        skills: "TECHNICAL SKILLS",
      },
      atsNotice: "Strict 1-page Oxford layout calibrated for high ATS parsing accuracy and instant recruiter readability.",
    },
    footer: "Kevin Garrido // Intelligent Computing & DevOps // 2026",
  },
  es: {
    nav: {
      bio: "// Bio",
      exp: "// Exp",
      skills: "// Skills",
      lab: "// Lab",
      projects: "// Proyectos",
      cv: "// CV",
      contact: "Contact.me",
      menu: "Menú",
      close: "Cerrar",
    },
    hero: {
      eyebrow: ">> INGENIERO EN CÓMPUTO INTELIGENTE",
      tags: ["Full-Stack & DevOps", "Sistemas Inteligentes & MCP", "Cloud y Automatización"],
      ctaProjects: "Explorar Proyectos",
      ctaLab: "Ver LAB",
      ctaContact: "Conectar",
      ctaViewCv: "Ver CV",
      ctaCv: "Descargar CV",
    },
    about: {
      module: "// MODULE_01: BIO",
      heading: "Sobre Mí",
      bio: "Ingeniero en Cómputo Inteligente que combina una sólida arquitectura Full-Stack y prácticas DevOps con sistemas de inteligencia artificial de vanguardia. Con experiencia en la construcción de aplicaciones web escalables con .NET, Angular, React y SQL Server, orquestando pipelines de producción, despliegues automatizados y reportes de inteligencia de negocio. Enfocado en diseñar infraestructura de software resiliente y motores generativos innovadores.",
      educationLabel: "Educación",
      degree: "Ingeniería en Cómputo Inteligente",
      school:
        "Universidad Autónoma de Aguascalientes | Agosto 2019 - Junio 2024",
      focus:
        "Enfoque: Inteligencia Artificial, Minería de Datos, Optimización Inteligente y Algoritmos Avanzados. Diseño de soluciones computacionales usando modelos inteligentes para abordar problemas complejos de ingeniería de software.",
    },
    experience: {
      module: "// MODULE_02: EXPERIENCE",
      heading: "Experiencia",
      jobs: [
        {
          company: "RAINDE",
          roleDates: "INGENIERO DE SOFTWARE & DEVOPS | NOV 2024 - ACTUALIDAD",
          bullets: [
            "Arquitectó y desplegó aplicaciones empresariales responsivas (web y móvil) con Angular, TypeScript, .NET Core y SQL Server para entornos de alta exigencia operativa.",
            "Diseñó y automatizó pipelines de CI/CD (GitHub Actions / GitLab CI) para compilación, empaquetado y distribución continua, reduciendo los tiempos de release de horas a menos de 15 minutos.",
            "Construyó servicios RESTful escalables e implementó pipelines de Business Intelligence (Power BI / Tableau) para trazabilidad analítica de operaciones logísticas.",
            "Estandarizó flujos de trabajo Git (GitFlow) y aprovisionamiento de entornos reproducibles con Docker y Linux, eliminando inconsistencias entre desarrollo, staging y producción.",
          ],
        },
        {
          company: "Lion Intel Solutions",
          roleDates: "DESARROLLADOR FULLSTACK | MAY 2024 - NOV 2024",
          bullets: [
            "Lideró la arquitectura e implementación integral de un portal médico dermatológico utilizando Vue.js, ASP.NET y bases de datos relacionales SQL Server.",
            "Diseñó APIs RESTful seguras e integró pasarelas de marketplace para la sincronización transaccional de catálogos y órdenes de comercio electrónico en tiempo real.",
            "Optimizó consultas SQL relacionales y flujos administrativos, reduciendo la latencia de respuesta en un 35% y centralizando la gestión operativa de pacientes.",
          ],
        },
        {
          company: "Universidad Cuauhtémoc",
          roleDates: "INFRAESTRUCTURA TI Y AUTOMATIZACIÓN | MAY 2021 - FEB 2023",
          bullets: [
            "Diseñó y desplegó una plataforma propia de gestión de incidencias y tickets, automatizando reportes de servicio y reduciendo tiempos de atención en un 40% para +1,000 usuarios.",
            "Administró la infraestructura de red del campus, servidores de telecomunicaciones y hardware de seguridad, garantizando un 99.5% de disponibilidad operativa.",
          ],
        },
      ],
      viewFullCv: "Ver CV Completo (Formato Oxford ATS)",
    },
    skills: {
      module: "// MODULE_03: TECH_STACK",
      heading: "Habilidades",
      categories: [
        {
          title: "// ARQUITECTURA FULL-STACK",
          items: [
            "C#",
            ".NET / .NET Core",
            "Angular",
            "React",
            "Next.js",
            "TypeScript",
            "SQL Server",
            "APIs RESTful",
          ],
        },
        {
          title: "// DEVOPS, CLOUD E INFRAESTRUCTURA",
          items: [
            "Docker",
            "Pipelines CI/CD",
            "Linux",
            "Flujos Git",
            "Releases Web y Móvil",
            "Nginx",
          ],
        },
        {
          title: "// SISTEMAS DE IA, ORQUESTACIÓN Y AGENTES",
          items: [
            "Model Context Protocol (MCP)",
            "Python",
            "Flujos de Agentes",
            "Automatización n8n",
            "Optimización Inteligente",
            "LLMs Locales",
          ],
        },
        {
          title: "// CREATIVE TECH Y AUDIO DSP",
          items: [
            "Blender (Python 3D)",
            "Motor After Effects",
            "Audio DSP / VST",
            "Pipelines de Videojuegos",
          ],
        },
      ],
    },
    lab: {
      module: "// MODULE_04: LAB",
      heading: "Creative Tech & Motores de IA",
      subtitle:
        "Desarrollo de motores gráficos propios, orquestación por IA y pipelines generativos con Model Context Protocol (MCP).",
      keyInnovations: "// Innovaciones Clave",
      items: [
        {
          id: "ae-video-engine",
          name: "Motor After Effects MCP",
          tagline: "Generación y Orquestación de Video con Ahorro de Tokens",
          blurb:
            "Motor gráfico propio conectado con Adobe After Effects a través de MCP. Permite a modelos de IA dirigir, animar y renderizar composiciones de video complejas mediante instrucciones de control compactas, logrando un ahorro masivo de tokens y ejecución en tiempo real sin saturar la ventana de contexto.",
          highlights: [
            "Arquitectura optimizada para mínimo consumo de tokens",
            "Control automatizado de timeline, keyframes y cámaras",
            "Renderizado desatendido multicapa en tiempo real",
          ],
          tags: ["After Effects", "Protocolo MCP", "Ahorro de Tokens", "Motion Graphics", "Motor Propio"],
          image: "/images/lab/ae-video-engine.webp",
        },
        {
          id: "blender-character-engine",
          name: "Motor de Orquestación de Assets Blender (AOE)",
          tagline: "Generación Procedural de Assets 3D y Mundos con Ahorro de Tokens vía MCP",
          blurb:
            "Motor gráfico de alta velocidad y pipeline de orquestación de assets comunicando Blender vía Python API y MCP. Permite a asistentes y agentes de IA generar paramétricamente modelos 3D, rigging automatizado y entornos procedurales mediante comandos por lotes de un solo turno, reduciendo hasta un 80% el consumo de tokens.",
          highlights: [
            "Topología y generación de mallas procedural",
            "Rigging y asignación de pesos automatizados",
            "Orquestador de producción de 19 etapas y render headless en Blender",
          ],
          tags: ["Blender", "Protocolo MCP", "3D Procedural", "Pipeline de Assets", "Python Engine"],
          image: "/images/lab/blender-character-engine.webp",
          gitUrl: "https://github.com/k3v-5/AssetOrchestrationEngine",
        },
        {
          id: "hendrix-assistant",
          name: "Hendrix Assistant",
          tagline: "Asistente Móvil de IA & Orquestación de Sistemas y Domótica",
          blurb:
            "Asistente móvil de inteligencia artificial con arquitectura híbrida (APIs en la nube y modelos locales). Se conecta directamente a la computadora para automatizar procesos de escritorio, crear rutinas personalizadas, gestionar domótica/IoT y resolver flujos de trabajo de alta complejidad.",
          highlights: [
            "Integración híbrida: APIs remotas e inferencia de modelos locales",
            "Puente de escritorio para automatización profunda y rutinas",
            "Gestión integral de domótica, IoT y tareas complejas",
          ],
          tags: ["Mobile AI", "LLMs Locales", "Automatización", "Domótica / IoT", "Puente PC", "APIs"],
          image: "/images/lab/hendrix-assistant.webp",
          gitUrl: "https://github.com/k3v-5/HendrixAssistant",
        },
      ],
    },
    projects: {
      module: "// MODULE_05: PORTFOLIO",
      heading: "Proyectos",
      filters: {
        all: "Todos",
        fullstack: "Full-Stack Web",
        ai: "IA y Agentes",
        gameDev: "Videojuegos",
        audioDev: "Audio / VST",
      },
      readMore: "Ver más",
      showLess: "Ver menos",
      items: {
        0: {
          title: "DARX",
          badge: "En Desarrollo Activo",
          description:
            "Videojuego de acción/aventura en desarrollo activo, impulsado por un pipeline generativo propio. Integra personajes 3D sintetizados proceduralmente mediante el motor de Blender MCP y cinemáticas orquestadas a través del motor de video de After Effects MCP.",
        },
        7: {
          title: "AbletonEngine",
          badge: "Generative Music Studio",
          audioDemoLabel: "Muestra de Composición Algorítmica",
          audioFallbackNote: "Coloca tu archivo de audio en public/audio",
          description:
            "Pipeline autónomo de composición algorítmica y producción musical generada por IA conectado con Ableton Live. Genera arreglos musicales completos garantizando estrictos criterios de producción profesional, incluyendo validación de sonoridad (LUFS), consistencia tonal, armonía y balance espectral multicanal.",
        },
        6: {
          title: "N8Effect",
          badge: "Motor de Audio Modular",
          audioDemoLabel: "Muestra DSP Espacial y Modular",
          audioFallbackNote: "Coloca tu archivo de audio en public/audio",
          description:
            "Plugin VST modular diseñado para la integración dinámica de efectos y la personalización flexible de cadenas de audio. Permite el reprocesamiento avanzado de señales en tiempo real y la creación inmersiva de atmósferas y paisajes sonoros complejos.",
        },
        5: {
          title: "LexiKit",
          description:
            "App de aprendizaje de idiomas potenciada por IA que genera lecciones a demanda y las refuerza con repetición espaciada sobre una variedad de tarjetas de aprendizaje.",
        },
        1: {
          title: "Plataforma de Citas Full-Stack",
          badge: "Arquitectura Empresarial",
          description:
            "Plataforma web Full-Stack con arquitectura desacoplada basada en ASP.NET Core Web API y cliente SPA en Angular. Integra autenticación segura con tokens JWT, mensajería bidireccional en tiempo real, gestión completa de perfiles de usuario y persistencia relacional optimizada.",
        },
      },
    },
    signalLog: {
      module: "// MODULE_06: SIGNAL_LOG",
      heading: "Transmisiones",
      nowPlaying: "Reproduciendo Ahora",
      offline: "Sin Conexión",
      book: {
        title: "Moby Dick",
        author: "Herman Melville",
        progress: "10% COMPLETADO",
      },
    },
    contact: {
      badge: "Disponible para nuevos proyectos",
      eyebrow: ">> SIGNAL_READY",
      heading: "Conectemos.",
      body: "Ya sea un desafío técnico, una consulta de negocio, o simplemente quieras recomendarme un buen libro—mi bandeja de entrada siempre está abierta.",
      copyHint: "Clic para copiar",
      copiedHint: "Copiado al portapapeles",
      openMail: "Abrir en tu correo",
      backToTop: "Volver arriba",
      otherOptions: "// También puedes probar otras opciones:",
    },
    cvModal: {
      badge: "FORMATO OXFORD ATS // 1 PÁGINA OFICIAL",
      title: "Curriculum Vitae",
      subtitle: "Maquetación estricta Oxford de una página oficial y 100% amigable con ATS.",
      actions: {
        downloadPdf: "Descargar PDF",
        openPdf: "Abrir en Pestaña",
        copyText: "Copiar Texto ATS",
        copied: "¡Copiado al Portapapeles!",
        close: "Cerrar",
      },
      sections: {
        education: "EDUCACIÓN",
        experience: "EXPERIENCIA PROFESIONAL",
        projects: "PROYECTOS SELECCIONADOS",
        skills: "HABILIDADES TÉCNICAS",
      },
      atsNotice: "Formato Oxford de 1 página estricta, optimizado para pasar filtros automáticos de ATS y revisión técnica ágil.",
    },
    footer: "Kevin Garrido // Intelligent Computing & DevOps // 2026",
  },
};

export const languageMeta = {
  en: { label: "EN", name: "English" },
  es: { label: "ES", name: "Español" },
};
