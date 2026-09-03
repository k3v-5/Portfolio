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
      contact: "Contact.me",
    },
    hero: {
      eyebrow: ">> INTELLIGENT COMPUTING ENGINEER",
      tags: ["Artificial Intelligence", "Data Mining", "Full-Stack Developer"],
    },
    about: {
      module: "// MODULE_01: BIO",
      heading: "About Me",
      bio: "Intelligent Computing Engineer with a specialized focus on artificial intelligence, data mining, and full-stack development. Experienced in architecting scalable web applications using React, Angular, and .NET, while streamlining business processes through data-driven reporting and RESTful services. Committed to leveraging advanced algorithms and modern frontend frameworks to solve complex organizational challenges and drive technical efficiency.",
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
          roleDates: "SOFTWARE ENGINEER | NOV 2024 - CURRENT",
          bullets: [
            "Developed responsive web and mobile applications utilizing Angular, TypeScript, and SQL Server.",
            "Engineered REST APIs focused on mobile solutions and business intelligence reporting for the logistics sector.",
            "Managed publication processes for web and mobile platforms, overseeing project compilation and production releases.",
            "Collaborated in multidisciplinary environments to deliver high-quality code and scalable technical solutions.",
          ],
        },
        {
          company: "Lion Intel Solutions",
          roleDates: "FULLSTACK DEVELOPER | MAY 2024 - NOV 2024",
          bullets: [
            "Led the end-to-end development of a comprehensive web application for a dermatology center using Vue.js and .NET.",
            "Integrated marketplace APIs to synchronize catalogs and online sales, enhancing digital presence.",
            "Streamlined operational processes and centralized customer service, resulting in faster response times.",
          ],
        },
        {
          company: "Financiera Independencia",
          roleDates: "CUSTOMER SUPPORT | JAN 2024 - APR 2024",
          bullets: [
            "Managed account balances and processed digital payments by generating custom payment links for virtual department clients.",
          ],
        },
        {
          company: "Cuauhtémoc University",
          roleDates: "IT SUPPORT | MAY 2021 - FEB 2023",
          bullets: [
            "Automated internal service reporting by developing a custom request management system.",
            "Managed technical infrastructure, including hardware maintenance and security camera installations.",
          ],
        },
      ],
    },
    skills: {
      module: "// MODULE_03: TECH_STACK",
      heading: "Skills",
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
          image: "/images/lab/ae-video-engine.png",
        },
        {
          id: "blender-character-engine",
          name: "Blender MCP Character Engine",
          tagline: "Procedural 3D Character Synthesis at Scale",
          blurb:
            "High-speed graphics engine interfaced with Blender via MCP. Empowers AI agents to programmatically generate 3D characters, procedural topology, dynamic rigging, and materials, collapsing character conception and 3D asset iteration from days into minutes.",
          highlights: [
            "Procedural mesh generation & topology refinement",
            "Automated armature rigging & weight painting setup",
            "Bi-directional LLM-to-Blender Python bridge",
          ],
          tags: ["Blender", "MCP Protocol", "3D Procedural", "Character Pipeline", "Python Engine"],
          image: "/images/lab/blender-character-engine.png",
        },
      ],
    },
    projects: {
      module: "// MODULE_05: PORTFOLIO",
      heading: "Projects",
      filters: {
        all: "All",
        gameDev: "Game Dev",
        ai: "AI",
        web: "Web",
        dataScience: "Data Science",
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
        1: {
          title: "Dating Platform",
          description:
            "Developed a full-stack application featuring messaging and profile management using Angular and .NET.",
        },
        2: {
          title: "Ecommerce Website",
          description:
            "Developed an e-commerce website using Next.js and PostgreSQL. The website allows users to browse products, add them to their cart, and checkout using a credit card. The website also includes an admin panel that allows the site owner to add, edit, and delete products.",
        },
        3: {
          title: "Crypto Tracker",
          description:
            "Built a real-time tracking application with historical charts and API integration using React (Next.js).",
        },
        4: {
          title: "Sentiment Analysis",
          description:
            "Developed a sentiment analysis model using Python . The model analyzes text data such as tweets and news articles to determine whether the sentiment is positive, negative, or neutral.",
        },
        5: {
          title: "LexiKit",
          description:
            "AI-powered language learning app that generates lessons on demand and reinforces them with spaced repetition across a variety of flashcard types.",
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
      otherOptions: "// You could also try some other options:",
    },
    footer: "Kevin Garrido // Data Engineering System // 2026",
  },
  es: {
    nav: {
      bio: "// Bio",
      exp: "// Exp",
      skills: "// Skills",
      lab: "// Lab",
      projects: "// Proyectos",
      contact: "Contact.me",
    },
    hero: {
      eyebrow: ">> INGENIERO EN CÓMPUTO INTELIGENTE",
      tags: ["Inteligencia Artificial", "Minería de Datos", "Desarrollador Full-Stack"],
    },
    about: {
      module: "// MODULE_01: BIO",
      heading: "Sobre Mí",
      bio: "Ingeniero en Cómputo Inteligente especializado en inteligencia artificial, minería de datos y desarrollo full-stack. Con experiencia en la arquitectura de aplicaciones web escalables usando React, Angular y .NET, optimizando procesos de negocio mediante reportes basados en datos y servicios RESTful. Comprometido con aprovechar algoritmos avanzados y frameworks modernos de frontend para resolver desafíos organizacionales complejos e impulsar la eficiencia técnica.",
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
          roleDates: "INGENIERO DE SOFTWARE | NOV 2024 - ACTUALIDAD",
          bullets: [
            "Desarrollo de aplicaciones web y móviles responsivas utilizando Angular, TypeScript y SQL Server.",
            "Diseño de APIs REST enfocadas en soluciones móviles y reportes de inteligencia de negocio para el sector logístico.",
            "Gestión de procesos de publicación para plataformas web y móviles, supervisando la compilación de proyectos y los releases de producción.",
            "Colaboración en entornos multidisciplinarios para entregar código de alta calidad y soluciones técnicas escalables.",
          ],
        },
        {
          company: "Lion Intel Solutions",
          roleDates: "DESARROLLADOR FULLSTACK | MAY 2024 - NOV 2024",
          bullets: [
            "Lideré el desarrollo end-to-end de una aplicación web integral para un centro de dermatología usando Vue.js y .NET.",
            "Integración de APIs de marketplace para sincronizar catálogos y ventas en línea, mejorando la presencia digital.",
            "Optimización de procesos operativos y centralización del servicio al cliente, logrando tiempos de respuesta más rápidos.",
          ],
        },
        {
          company: "Financiera Independencia",
          roleDates: "SOPORTE AL CLIENTE | ENE 2024 - ABR 2024",
          bullets: [
            "Gestión de saldos de cuenta y procesamiento de pagos digitales generando links de pago personalizados para clientes del departamento virtual.",
          ],
        },
        {
          company: "Universidad Cuauhtémoc",
          roleDates: "SOPORTE TI | MAY 2021 - FEB 2023",
          bullets: [
            "Automatización de reportes de servicio interno mediante el desarrollo de un sistema propio de gestión de solicitudes.",
            "Gestión de infraestructura técnica, incluyendo mantenimiento de hardware e instalación de cámaras de seguridad.",
          ],
        },
      ],
    },
    skills: {
      module: "// MODULE_03: TECH_STACK",
      heading: "Habilidades",
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
          image: "/images/lab/ae-video-engine.png",
        },
        {
          id: "blender-character-engine",
          name: "Motor de Personajes Blender MCP",
          tagline: "Generación Procedural Acelerada de Personajes 3D",
          blurb:
            "Motor gráfico de alta velocidad comunicado con Blender mediante MCP. Permite a agentes de IA generar paramétricamente personajes tridimensionales, mallas procedurales, rigging dinámico y materiales, reduciendo los tiempos de creación de días a solo minutos.",
          highlights: [
            "Topología y generación de mallas procedural",
            "Rigging y asignación de pesos automatizados",
            "Puente bidireccional LLM a Blender vía Python API",
          ],
          tags: ["Blender", "Protocolo MCP", "3D Procedural", "Pipeline de Personajes", "Python Engine"],
          image: "/images/lab/blender-character-engine.png",
        },
      ],
    },
    projects: {
      module: "// MODULE_05: PORTFOLIO",
      heading: "Proyectos",
      filters: {
        all: "Todos",
        gameDev: "Videojuegos",
        ai: "IA",
        web: "Web",
        dataScience: "Ciencia de Datos",
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
        1: {
          title: "Plataforma de Citas",
          description:
            "Aplicación full-stack con mensajería y gestión de perfiles usando Angular y .NET.",
        },
        2: {
          title: "Sitio de Ecommerce",
          description:
            "Sitio de comercio electrónico con Next.js y PostgreSQL. Permite explorar productos, agregarlos al carrito y pagar con tarjeta de crédito. Incluye un panel de administración para agregar, editar y eliminar productos.",
        },
        3: {
          title: "Rastreador de Criptomonedas",
          description:
            "Aplicación de seguimiento en tiempo real con gráficos históricos e integración de API usando React (Next.js).",
        },
        4: {
          title: "Análisis de Sentimientos",
          description:
            "Modelo de análisis de sentimientos desarrollado en Python. Analiza datos de texto como tweets y artículos de noticias para determinar si el sentimiento es positivo, negativo o neutral.",
        },
        5: {
          title: "LexiKit",
          description:
            "App de aprendizaje de idiomas potenciada por IA que genera lecciones a demanda y las refuerza con repetición espaciada sobre una variedad de tarjetas de aprendizaje.",
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
      otherOptions: "// También puedes probar otras opciones:",
    },
    footer: "Kevin Garrido // Sistema de Ingeniería de Datos // 2026",
  },
};

export const languageMeta = {
  en: { label: "EN", name: "English" },
  es: { label: "ES", name: "Español" },
};
