import type { SiteContent } from "./types";

const es = {
  locale: "es",
  meta: {
    title: "Rahul Singh — Ingeniero backend",
    template: "%s — Rahul Singh",
    description:
      "Ingeniero backend en MiniOrange, desarrollando plataformas de datos de seguridad. Regional asiático del ICPC y Codeforces Specialist. Proyectos propios en Go, Python y Java.",
  },
  profile: {
    name: "Rahul Singh",
    initials: "RS",
    role: "Ingeniero backend",
    disciplines: "Backend · Sistemas distribuidos · Seguridad",
    location: "Pune, India",
    email: "rahul0singh003@gmail.com",
    availability: "Abierto a puestos backend",
    resumeUrl: "/rahul-singh-resume.pdf",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/work" },
    { label: "Sobre mí", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ],
  actions: {
    viewWork: "Ver mis proyectos",
    letsTalk: "Hablemos",
    viewCaseStudy: "Ver caso de estudio",
    viewAllWork: "Ver todos los proyectos",
    readMore: "Más sobre mí",
    startConversation: "Iniciar una conversación",
    copyEmail: "Copiar correo",
    copied: "Copiado",
    previousProject: "Proyecto anterior",
    nextProject: "Siguiente proyecto",
    backToWork: "Volver a proyectos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    theme: "Tema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    themeSystem: "Sistema",
    language: "Idioma",
    downloadResume: "Descargar CV",
    viewCode: "Código",
    viewLive: "Demo",
  },
  hero: {
    badge: "INGENIERO BACKEND",
    eyebrow: "SDE en MiniOrange",
    headline: {
      lead: "Construyo sistemas backend que",
      accent: "siguen funcionando",
      trail: " cuando un worker se cae.",
    },
    lead: "En MiniOrange trabajo en plataformas de datos de seguridad: detección DLP, reenvío de logs a SIEM y canalizaciones de exportación multiinquilino. Fuera del trabajo construyo el mismo tipo de sistemas desde cero en Go y Python, con una base de programación competitiva detrás de los algoritmos.",
    meta: [
      { label: "Ubicación", value: "Pune, India · UTC+5:30" },
      { label: "Enfoque", value: "Backend · Canalizaciones · Seguridad" },
      { label: "Disponible", value: "Remoto y reubicación" },
    ],
    diagram: {
      caption: "SECUREPLUS_RUNTIME // ACTIVE",
      status: "healthy",
      ingress: { label: "INGESTION", value: "SMTP + REST" },
      worker: { label: "QUEUE_CONSUMER", value: "Redis Streams" },
      core: { label: "INSPECTION_CORE", value: "Motor de políticas" },
      coreNote: "ack after record · crash recoverable",
      store: { label: "CONSISTENT", value: "PostgreSQL" },
      cache: { label: "IN_MEMORY", value: "Redis" },
    },
    stats: [
      { value: "10M+", label: "Eventos de seguridad por exportación en MiniOrange" },
      { value: "ICPC", label: "Regional asiático 2023" },
      { value: "1.200+", label: "Problemas resueltos en CF, LeetCode y CodeChef" },
    ],
  },
  sections: {
    work: {
      index: "01",
      label: "Proyectos destacados",
      title: "Lo que he diseñado y construido.",
    },
    capabilities: {
      index: "02",
      label: "Capacidades",
      title: "Dónde dedico la mayor parte de mi tiempo.",
    },
    about: {
      index: "03",
      label: "Sobre mí y perspectiva",
      title: "Cómo entiendo la construcción de software.",
    },
    experience: {
      index: "04",
      label: "Trayectoria y competencias",
      title: "Experiencia y stack técnico.",
    },
    credentials: {
      index: "05",
      label: "Formación y logros",
      title: "Programación competitiva y credenciales.",
    },
    principles: {
      index: "06",
      label: "Filosofía de trabajo",
      title: "Cómo afronto el trabajo de ingeniería.",
    },
    contact: {
      index: "07",
      label: "Contacto",
      title: "Hablemos.",
    },
    testimonials: {
      index: "08",
      label: "Referencias",
      title: "Lo que dicen quienes han trabajado conmigo.",
    },
  },
  labels: {
    role: "Rol",
    architecture: "Arquitectura",
    period: "Periodo",
    category: "Categoría",
    technologies: "Tecnologías",
    context: "Contexto",
    approach: "Enfoque",
    decisions: "Decisiones clave",
    features: "Implementación",
    outcomes: "Resultados",
    links: "Enlaces",
    experience: "Experiencia",
    stack: "Stack técnico",
    project: "Proyecto",
    architectureDiagram: "Arquitectura",
    education: "Formación",
    achievements: "Logros",
    codingProfiles: "Programación competitiva",
  },
  projects: [
    {
      slug: "secureplus",
      title: "SecurePlus",
      category: "Pasarela DLP de correo",
      period: "2026",
      featured: true,
      summary:
        "Una plataforma multiinquilino de prevención de pérdida de datos: una pasarela que inspecciona cada correo saliente antes de enviarlo, más un escáner que localiza datos sensibles en almacenamiento en la nube.",
      role: "En solitario · diseño y desarrollo",
      architecture: "Monolito modular + workers de stream",
      tech: ["Go", "Gin", "Redis Streams", "PostgreSQL", "MongoDB", "Next.js"],
      context:
        "El correo saliente es una de las vías más habituales por las que los datos sensibles abandonan una organización, y la ley DPDP de India convierte esa fuga en un problema de cumplimiento. Quería construir el camino completo yo mismo: recibir el correo, decidir si puede salir y entregarlo sin perder ningún mensaje aunque un worker muera a mitad del proceso.",
      approach:
        "El correo llega por SMTP o por una API REST y se escribe en un Redis Stream antes de devolver un 250 OK al remitente. Los workers de un grupo de consumidores normalizan el texto, ejecutan una inspección Aho-Corasick y RE2 en una sola pasada, aplican la política del remitente y bloquean el mensaje con un aviso o lo retransmiten firmado con DKIM. Un mensaje solo se confirma cuando su resultado queda registrado, de modo que una caída provoca un reintento y no una pérdida silenciosa.",
      decisions: [
        {
          title: "Confirmar solo lo que es duradero",
          detail:
            "El 250 de SMTP se devuelve únicamente cuando el mensaje está a salvo en el stream, y la entrada del stream se confirma solo tras guardar el resultado de la entrega. Los mensajes atascados en un consumidor caído se recuperan con XAUTOCLAIM.",
        },
        {
          title: "Una sola pasada sobre el texto, sean cuantas sean las palabras clave",
          detail:
            "Un autómata Aho-Corasick propio localiza todas las palabras clave en un único recorrido, y el motor RE2 de Go se ejecuta en tiempo lineal, por lo que un patrón hostil no puede provocar ReDoS. La normalización NFKC se aplica primero para detectar trucos con caracteres Unicode similares.",
        },
        {
          title: "Rotación de tokens que sobrevive a dos pestañas abiertas",
          detail:
            "Los tokens de refresco rotan de forma atómica en un script Lua de Redis. Una ventana de gracia breve devuelve el sucesor ya emitido a una petición concurrente, de modo que los usuarios normales no quedan marcados mientras la reutilización real sí se rechaza.",
        },
      ],
      features: [
        "Entrada SMTP (go-smtp) e ingesta REST hacia Redis Streams",
        "Inspección Aho-Corasick + RE2 sobre texto normalizado con NFKC",
        "Políticas de contenido, dominio de destino y adjuntos por remitente",
        "Firma DKIM, resolución MX, STARTTLS oportunista y reintentos por destinatario",
        "Escáner para S3, Google Drive y Microsoft 365 con protección ante zip bombs y tamaños excesivos",
        "Cifrado de credenciales AES-256-GCM con claves versionadas derivadas por HKDF",
        "Cookies CSRF de doble envío, límites de tasa en Redis y RBAC granular",
        "Consola Next.js con auditoría de incidentes, analítica y localización EN / JA / ES",
      ],
      outcomes: [
        "Más de 490 funciones de test en Go; más de 440 se ejecutan en cada push con GitHub Actions",
        "Desplegado en secureplus.ryugasystem.online",
      ],
      links: [
        { label: "Demo", href: "https://secureplus.ryugasystem.online/" },
        { label: "Código", href: "https://github.com/ryuga001/SecurePlus" },
      ],
      media: {
        image: {
          src: "/projects/secureplus.png",
          alt: "Consola de políticas e incidentes de SecurePlus",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/secureplus-demo.webm",
          preview: "/projects/secureplus-preview.webm",
          alt: "Demostración de SecurePlus",
        },
      },
      artwork: {
        kind: "pipeline",
        caption: "secureplus-delivery // redis-stream",
        ruleset: "POLICY: PER_SENDER",
        badge: "DKIM · STARTTLS",
        streamTitle: "Canalización de inspección",
        stages: [
          "Normalización NFKC",
          "Análisis Aho-Corasick + RE2",
          "Veredicto de política · reenvío",
        ],
        metaTitle: "Metadatos del stream",
        meta: [
          "group: delivery consumers",
          "ack: after outcome recorded",
          "recovery: XAUTOCLAIM",
          "tenant: scoped per customer",
        ],
        footnote: "Entrega at-least-once",
      },
    },
    {
      slug: "tutorpilot",
      title: "TutorPilot",
      category: "SaaS multiinquilino",
      period: "Jul — Ago 2026",
      featured: true,
      summary:
        "Una plataforma para gestionar un negocio de tutorías en línea: cada organización dispone de su propio espacio aislado para personal, cursos, grupos, clases en directo y archivos.",
      role: "En solitario · diseño y desarrollo",
      architecture: "Monolito modular + outbox transaccional",
      tech: ["Go", "PostgreSQL", "Redis Streams", "LiveKit", "MinIO", "Next.js"],
      context:
        "Las academias pequeñas combinan videollamadas, hojas de cálculo y unidades compartidas. Construí un único sistema donde una organización se registra, define sus propios roles, crea cursos, los imparte como grupos programados y da clases en directo que se graban automáticamente.",
      approach:
        "El backend en Go se divide en módulos (auth, admin, notification) sobre un conjunto común de paquetes internos. Todo lo que debe ocurrir después de una escritura, como enviar un correo de verificación, se guarda como evento en la misma transacción de Postgres y se retransmite después a Redis Streams, de modo que la base de datos y los efectos secundarios no puedan divergir.",
      decisions: [
        {
          title: "Outbox transaccional en lugar de escritura doble",
          detail:
            "Los eventos se insertan en la misma transacción que los datos de negocio. Un relé los reclama con FOR UPDATE SKIP LOCKED, por lo que pueden ejecutarse varios relés sin publicar dos veces.",
        },
        {
          title: "Los fallos se conservan, no se descartan",
          detail:
            "Los consumidores recuperan mensajes estancados con XAUTOCLAIM, clasifican los errores para reintentarlos y envían los mensajes problemáticos a una tabla de mensajes fallidos que se puede inspeccionar y reprocesar.",
        },
        {
          title: "Una clave de firma por inquilino",
          detail:
            "Cada organización tiene su propio secreto JWT, cacheado en Redis, de modo que un token emitido para un inquilino no puede verificarse en otro.",
        },
      ],
      features: [
        "74 endpoints REST con documentación Swagger y 14 migraciones versionadas",
        "Roles y permisos por organización definidos en el esquema",
        "Cursos, grupos, asignación de tutores e inscripción de alumnos",
        "Aulas LiveKit con grabación en servidor hacia MinIO",
        "Unidad de archivos compartida por grupo sobre almacenamiento MinIO",
      ],
      outcomes: [
        "80 tests unitarios y de integración en Go, incluido el comportamiento de rollback del outbox",
      ],
      links: [{ label: "Código", href: "https://github.com/ryuga001/TutorPilot" }],
      artwork: {
        kind: "mesh",
        caption: "TENANT_ISOLATION // SAAS_CORE",
        hub: "TENANT",
        nodes: [
          "JWT por inquilino",
          "RBAC en esquema",
          "Salas LiveKit",
          "Unidad MinIO",
        ],
        footnote: "OUTBOX: SKIP LOCKED RELAY · DLQ REPLAYABLE",
      },
    },
    {
      slug: "sahara",
      title: "Sahara",
      category: "Plataforma de carrera con IA",
      period: "Jun — Jul 2026",
      featured: true,
      summary:
        "Un asistente de carrera con IA que puntúa y reescribe currículums mediante generación aumentada por recuperación y crea cursos completos en segundo plano.",
      role: "En solitario · backend",
      architecture: "API Django + workers RabbitMQ",
      tech: ["Python", "Django", "PostgreSQL", "pgvector", "Gemini", "RabbitMQ"],
      context:
        "Las herramientas genéricas de IA para currículums dan consejos vagos porque no saben nada del currículum real ni del puesto. Quería comentarios anclados en el contenido del propio usuario, y una generación de cursos que no bloquee la petición web mientras un modelo escribe docenas de lecciones.",
      approach:
        "Los currículums se analizan, se vectorizan y se guardan en pgvector. Cuando alguien pide una revisión, se recuperan por distancia coseno los fragmentos más relevantes y se pasan a Gemini, que devuelve puntuaciones estructuradas y reescrituras. La generación de cursos se envía a colas de RabbitMQ y la atienden workers separados para subtemas, contenido y trabajos masivos.",
      decisions: [
        {
          title: "Recuperar antes de preguntar",
          detail:
            "Solo los fragmentos más cercanos del currículum llegan al prompt, lo que mantiene las respuestas específicas para cada usuario y acota el consumo de tokens.",
        },
        {
          title: "Los workers recuperan su propio trabajo inacabado",
          detail:
            "Al arrancar, cada worker reinicia los elementos que un proceso caído dejó en estado de generación, de modo que un reinicio continúa donde se detuvo el anterior.",
        },
        {
          title: "Los mensajes problemáticos no giran eternamente",
          detail:
            "Los mensajes que fallan se confirman y se registran en lugar de volver a la cola indefinidamente, así un trabajo defectuoso no bloquea el resto.",
        },
      ],
      features: [
        "Búsqueda por similitud en pgvector sobre currículums y cursos",
        "Prompts a Gemini que devuelven puntuaciones ATS estructuradas y reescrituras",
        "Mejoradores de currículum intercambiables (palabras clave, competencias, resumen) y formateador PDF",
        "Tres workers de RabbitMQ con colas duraderas para generar cursos",
      ],
      outcomes: [
        "141 tests ejecutándose en GitHub Actions CI",
        "Frontend desplegado en Vercel",
      ],
      links: [
        { label: "Demo", href: "https://sahara-frontend-gamma.vercel.app/" },
        {
          label: "Código backend",
          href: "https://github.com/ryuga001/SaharaBackend",
        },
        {
          label: "Código frontend",
          href: "https://github.com/ryuga001/SaharaFrontend",
        },
      ],
      media: {
        image: {
          src: "/projects/sahara.png",
          alt: "Interfaz de análisis de currículums de Sahara",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/sahara-demo.webm",
          preview: "/projects/sahara-preview.webm",
          alt: "Demostración de Sahara",
        },
      },
      artwork: {
        kind: "scanner",
        caption: "RESUME_PIPELINE // RAG",
        source: "resume upload",
        format: "PDF",
        processor: { label: "Vectorizador", value: "codificación" },
        classifier: { label: "RETRIEVAL", value: "coseno pgvector" },
        classifierNote: "salida estructurada de Gemini",
        logTitle: "PIPELINE_REPORT",
        logs: [
          "currículum analizado y dividido en fragmentos",
          "fragmentos más cercanos recuperados por distancia coseno",
          "trabajos de curso enviados a tres workers de RabbitMQ",
        ],
      },
    },
    {
      slug: "rental-management",
      title: "Rental Management System",
      category: "Plataforma de microservicios",
      period: "Abr — May 2026",
      featured: false,
      summary:
        "Una plataforma de alquiler para propietarios e inquilinos, dividida en servicios Spring Boot tras una pasarela, con notificaciones basadas en eventos.",
      role: "En solitario · full stack",
      architecture: "Microservicios",
      tech: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "MongoDB", "Next.js"],
      context:
        "Lo construí para aprender bien el stack de microservicios de Java: descubrimiento de servicios, una pasarela, mensajería asíncrona entre servicios y qué ocurre cuando uno va lento o se cae.",
      approach:
        "Una pasarela Spring Cloud se sitúa delante de los servicios de administración, informes y notificaciones registrados en Eureka. Los servicios publican eventos en RabbitMQ; el servicio de notificaciones los convierte en correos y envíos por WebSocket, y el de informes guarda el historial de auditoría en MongoDB.",
      decisions: [
        {
          title: "Autenticar una sola vez, en el borde",
          detail:
            "La pasarela gestiona la autenticación, de modo que los servicios que hay detrás no reimplementan la verificación de tokens.",
        },
        {
          title: "Eventos en lugar de llamadas directas para notificar",
          detail:
            "Los servicios publican en RabbitMQ en vez de llamar directamente al servicio de notificaciones, así un servidor de correo lento nunca ralentiza una petición del usuario.",
        },
        {
          title: "Cortacircuitos en las llamadas entre servicios",
          detail:
            "El servicio de informes envuelve sus llamadas Feign en cortacircuitos de Resilience4j, de modo que una dependencia caída degrada una función en lugar de propagarse.",
        },
      ],
      features: [
        "Spring Cloud Gateway con descubrimiento de servicios Eureka",
        "Eventos RabbitMQ para notificaciones y trazas de auditoría",
        "Correo y envío por WebSocket STOMP desde el servicio de notificaciones",
        "Auditoría e historial de chat en MongoDB dentro del servicio de informes",
        "Un Dockerfile por servicio y un frontend en Next.js",
      ],
      outcomes: [],
      links: [
        {
          label: "Código",
          href: "https://github.com/ryuga001/Rental-Mangament-Platform",
        },
      ],
      artwork: {
        kind: "grid",
        caption: "RENTAL_PLATFORM // SERVICES",
        title: "Topología de servicios",
        series: ["gateway", "notify", "report"],
        rows: [
          { label: "discovery", value: "Eureka" },
          { label: "events", value: "RabbitMQ" },
          { label: "resilience", value: "Resilience4j" },
        ],
        footnote: "Cuatro servicios Spring Boot tras una pasarela",
      },
    },
  ],
  capabilities: [
    {
      index: "01",
      kind: "CORE",
      title: "Sistemas backend",
      description:
        "APIs, consumidores de colas y canalizaciones por lotes pensados para el caso en que un worker muere a mitad de trabajo, con reintentos, recuperación y mensajes fallidos incorporados.",
      badges: ["Java", "Go", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
      icon: "layers",
    },
    {
      index: "02",
      kind: "DELIVERY",
      title: "Producto full stack",
      description:
        "Llevar una funcionalidad desde el esquema de base de datos hasta un panel funcional, incluyendo flujos de autenticación, consolas de administración y localización.",
      badges: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
      icon: "grid",
    },
    {
      index: "03",
      kind: "DEFENCE",
      title: "Ingeniería de seguridad",
      description:
        "Prevención de pérdida de datos, reenvío de logs a SIEM, rotación de tokens, aislamiento entre inquilinos y cifrado de credenciales almacenadas.",
      badges: ["DLP", "SIEM", "JWT", "RBAC", "DKIM"],
      icon: "shield",
    },
    {
      index: "04",
      kind: "FOUNDATIONS",
      title: "Algoritmos y diseño",
      description:
        "Programación competitiva aplicada a problemas reales: búsqueda por similitud, coincidencia de múltiples patrones, límites de tasa y planificación justa.",
      badges: ["Diseño de sistemas", "Estructuras de datos", "Migraciones", "CI/CD"],
      icon: "clock",
    },
  ],
  about: {
    quote:
      "Lo interesante de un sistema suele ser la parte que nadie ve hasta que falla: la cola que tiene que sobrevivir a una caída, o la comprobación que tiene que acertar siempre.",
    paragraphs: [
      "Soy ingeniero backend en MiniOrange, en Pune, donde trabajo en plataformas de datos de seguridad: un motor DLP basado en huellas para endpoints, un servicio de reenvío de logs a SIEM, conectores de descubrimiento de datos en la nube y una canalización de exportación masiva que procesa más de diez millones de eventos por ejecución.",
      "Llegué al backend a través de la programación competitiva en la Universidad M.B.M de Jodhpur. Me clasifiqué para el Regional Asiático del ICPC en 2023, alcancé Specialist en Codeforces a lo largo de 37 concursos puntuables y he resuelto más de 1.200 problemas entre Codeforces, LeetCode y CodeChef.",
      "Fuera del trabajo construyo sistemas completos por mi cuenta para aprender bien cada stack: una pasarela DLP de correo en Go, una plataforma de tutorías multiinquilino, un asistente de carrera con IA en Python y una plataforma de microservicios en Java.",
    ],
    cardTitle: "PERFIL",
    cardRows: [
      { label: "Puesto actual", value: "SDE en MiniOrange" },
      { label: "Ubicación", value: "Pune, India" },
      { label: "Stack principal", value: "Java · Go · PostgreSQL" },
      { label: "Disponible", value: "Remoto y reubicación" },
    ],
  },
  experience: [
    {
      period: "JUL 2025 — ACTUALIDAD",
      role: "Ingeniero de desarrollo de software",
      org: "MiniOrange · Pune, India",
      description:
        "Desarrollo de plataformas de datos de seguridad: prevención de pérdida de datos en endpoints, reenvío de logs a SIEM, descubrimiento de datos en la nube y canalizaciones de exportación multiinquilino.",
      highlights: [
        "Desarrollé un microservicio de reenvío de logs a SIEM sobre HTTP/TCP con salida JSON y Syslog, construido sobre una canalización sin bloqueos LMAX Disruptor que sostuvo más de 2.000 eventos por segundo sin pérdida de mensajes y aplicó límites de tasa por proveedor.",
        "Diseñé una canalización distribuida de exportación masiva en Java, Spring Batch, AWS S3, Redis y RabbitMQ que procesa más de 10 millones de eventos de seguridad por ejecución, con límites de tasa por inquilino mediante token bucket en Redis, cuotas de tiempo de proceso y colas de prioridad en RabbitMQ para garantizar una planificación justa entre más de 100 inquilinos y eliminar el acaparamiento.",
        "Diseñé un motor DLP basado en contenido para más de 100 inquilinos con más de 100 dispositivos cada uno, usando fragmentación definida por contenido con MinHash/LSH para una búsqueda por similitud sublineal y activando la comparación de huellas solo cuando se cumplen los criterios de la política, eliminando cálculos redundantes; las firmas se sincronizan desde MongoDB a SQLite en el dispositivo para una detección de infracciones totalmente sin conexión.",
        "Entregué el descubrimiento de datos en la nube de principio a fin: arquitectura de conectores, ingesta y canalizaciones de procesamiento para AWS S3, Azure Blob Storage, Google Drive y SharePoint.",
      ],
    },
    {
      period: "MAY 2024 — JUL 2024",
      role: "Becario backend Node.js",
      org: "Celebal Technologies",
      description:
        "Desarrollo de APIs REST con Node.js y Express.js sobre bases de datos relacionales y documentales.",
      highlights: [
        "Implementé enrutado, middleware y validación de peticiones en un conjunto de endpoints REST.",
        "Trabajé con almacenes de datos relacionales y documentales dentro del mismo servicio.",
      ],
    },
  ],
  education: [
    {
      degree: "Ingeniería Informática (B.E.)",
      org: "Universidad M.B.M, Jodhpur",
      period: "2021 — 2025",
      detail:
        "Nota media 8,01 / 10 · Estructuras de datos y algoritmos, sistemas operativos, bases de datos, sistemas distribuidos",
    },
  ],
  achievements: [
    {
      title: "Regional Asiático del ICPC 2023",
      detail: "Clasificado y participante en la ronda regional asiática del ICPC.",
      href: "https://icpc.global",
    },
    {
      title: "Codeforces Specialist",
      detail: "Specialist alcanzado a lo largo de 37 concursos puntuables.",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      title: "Más de 1.200 problemas resueltos",
      detail: "Entre Codeforces, LeetCode y CodeChef.",
      href: "https://leetcode.com/u/r_singh",
    },
  ],
  codingProfiles: [
    {
      platform: "Codeforces",
      rating: "Specialist · 1422",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      platform: "CodeChef",
      rating: "3 estrellas · 1667",
      href: "https://www.codechef.com",
    },
    {
      platform: "LeetCode",
      rating: "r_singh",
      href: "https://leetcode.com/u/r_singh",
    },
  ],
  skills: [
    {
      title: "Lenguajes",
      items: ["Java", "Go", "Python", "C++", "TypeScript", "SQL"],
    },
    {
      title: "Backend y frameworks",
      items: ["Spring Boot", "Spring Batch", "Gin", "Django", "Node.js", "REST"],
    },
    {
      title: "Almacenamiento y mensajería",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis Streams",
        "RabbitMQ",
        "pgvector",
        "SQLite",
      ],
    },
    {
      title: "Infraestructura y frontend",
      items: ["AWS S3", "Docker", "GitHub Actions", "Linux", "Next.js", "React"],
    },
  ],
  principles: [
    {
      title: "Confirmar solo lo que es duradero.",
      detail:
        "SecurePlus devuelve un 250 de SMTP únicamente cuando el mensaje está en el stream, y TutorPilot escribe sus eventos en la misma transacción que los datos. Una respuesta de éxito debería significar que el trabajo ya no puede perderse.",
    },
    {
      title: "Asumir que el worker se va a caer.",
      detail:
        "Todos los consumidores de cola que construyo pueden recuperar mensajes estancados, retomar trabajos a medias al reiniciar y aparcar los mensajes problemáticos donde puedan reprocesarse.",
    },
    {
      title: "Hacer estructural el aislamiento.",
      detail:
        "Las fronteras entre inquilinos deben vivir en claves y esquemas, como un secreto JWT por organización, y no en un filtro que alguien puede olvidarse de añadir a una consulta.",
    },
    {
      title: "Probar también los caminos de fallo.",
      detail:
        "El camino feliz es la parte fácil. Mis tests cubren además rollbacks, tokens reutilizados, archivos excesivos y patrones de expresiones regulares hostiles.",
    },
  ],
  testimonials: [],
  contact: {
    title: "¿Buscas perfiles de backend o plataforma?",
    subtitle:
      "Busco puestos de ingeniería backend en sistemas distribuidos, canalizaciones de alto rendimiento o infraestructura de seguridad, en remoto o con reubicación. También me alegra hablar de cualquiera de los proyectos que hay aquí.",
    emailLabel: "Correo directo",
    responseNote: "Respondo personalmente, normalmente en 24 horas.",
    notesTitle: "Conviene saber",
    notes: [
      "Actualmente SDE a tiempo completo en MiniOrange, en Pune.",
      "Abierto a puestos en remoto y a reubicación.",
      "Cómodo tanto en bases de código Java/Spring como Go.",
    ],
    helpsWithTitle: "Puestos que me interesan",
    helpsWith: [
      "Ingeniería backend en sistemas distribuidos",
      "Canalizaciones de datos y eventos de alto rendimiento",
      "Seguridad, DLP o infraestructura de identidad",
      "Equipos de plataforma responsables de la fiabilidad",
    ],
    mailSubject: "Hola desde tu portfolio",
  },
  pages: {
    work: {
      kicker: "PROYECTOS DESTACADOS",
      title: "Sistemas que he diseñado y construido.",
      description:
        "Proyectos personales, cada uno con su contexto y las decisiones que lo moldearon. Mi trabajo en MiniOrange está resumido en la experiencia.",
    },
    about: {
      kicker: "SOBRE MÍ",
      title: "Ingeniero backend, programador competitivo.",
      description:
        "Plataformas de datos de seguridad de día, y sistemas completos en Go, Python y Java en mi propio tiempo.",
    },
    contact: {
      kicker: "CONTACTO",
      title: "Hablemos.",
      description:
        "El correo es la forma más rápida de localizarme. Cuéntame el puesto o lo que quieras comentar.",
    },
    notFound: {
      kicker: "404",
      title: "Esta página no existe.",
      description:
        "Puede que el enlace esté desactualizado. El índice de proyectos es un buen punto para retomar.",
    },
  },
  socials: [
    { label: "GitHub", handle: "@ryuga001", href: "https://github.com/ryuga001" },
    {
      label: "LinkedIn",
      handle: "/in/rahul-singh-546676240",
      href: "https://www.linkedin.com/in/rahul-singh-546676240/",
    },
    {
      label: "Codeforces",
      handle: "Ryuga01",
      href: "https://codeforces.com/profile/ryuga01",
    },
    { label: "LeetCode", handle: "r_singh", href: "https://leetcode.com/u/r_singh" },
  ],
  footer: {
    description:
      "Ingeniero backend que construye canalizaciones fiables, infraestructura de seguridad y los productos que se apoyan en ellas.",
    navTitle: "Navegación",
    connectTitle: "Enlaces",
    rights: "Todos los derechos reservados.",
  },
} satisfies SiteContent;

export default es;
