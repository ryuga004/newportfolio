import type { SiteContent } from "./types";

const de = {
  locale: "de",
  meta: {
    title: "Rahul Singh — Backend-Entwickler",
    template: "%s — Rahul Singh",
    description:
      "Backend-Entwickler bei MiniOrange mit Fokus auf Security-Datenplattformen. ICPC-Asia-Regionalteilnehmer und Codeforces Specialist. Eigene Projekte in Go, Python und Java.",
  },
  profile: {
    name: "Rahul Singh",
    initials: "RS",
    role: "Backend-Entwickler",
    disciplines: "Backend · Verteilte Systeme · Security",
    location: "Pune, Indien",
    email: "rahul0singh003@gmail.com",
    availability: "Offen für Backend-Rollen",
    resumeUrl: "/rahul-singh-resume.pdf",
  },
  nav: [
    { label: "Start", href: "/" },
    { label: "Projekte", href: "/work" },
    { label: "Über mich", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ],
  actions: {
    viewWork: "Projekte ansehen",
    letsTalk: "Sprechen wir",
    viewCaseStudy: "Fallstudie ansehen",
    viewAllWork: "Alle Projekte",
    readMore: "Mehr über mich",
    startConversation: "Gespräch beginnen",
    copyEmail: "E-Mail kopieren",
    copied: "Kopiert",
    previousProject: "Vorheriges Projekt",
    nextProject: "Nächstes Projekt",
    backToWork: "Zurück zu den Projekten",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    skipToContent: "Zum Inhalt springen",
    theme: "Darstellung",
    themeLight: "Hell",
    themeDark: "Dunkel",
    themeSystem: "System",
    language: "Sprache",
    downloadResume: "Lebenslauf herunterladen",
    viewCode: "Code",
    viewLive: "Demo",
  },
  hero: {
    badge: "BACKEND-ENTWICKLER",
    eyebrow: "SDE bei MiniOrange",
    headline: {
      lead: "Ich baue Backend-Systeme, die",
      accent: "weiterlaufen",
      trail: ", wenn ein Worker abstürzt.",
    },
    lead: "Bei MiniOrange arbeite ich an Security-Datenplattformen: DLP-Erkennung, SIEM-Log-Weiterleitung und mandantenfähige Export-Pipelines. Außerhalb der Arbeit baue ich dieselbe Art von Systemen von Grund auf in Go und Python — mit Wettbewerbsprogrammierung als Fundament hinter den Algorithmen.",
    meta: [
      { label: "Standort", value: "Pune, Indien · UTC+5:30" },
      { label: "Schwerpunkt", value: "Backend · Pipelines · Security" },
      { label: "Offen für", value: "Remote & Umzug" },
    ],
    diagram: {
      caption: "SECUREPLUS_RUNTIME // ACTIVE",
      status: "healthy",
      ingress: { label: "INGESTION", value: "SMTP + REST" },
      worker: { label: "QUEUE_CONSUMER", value: "Redis Streams" },
      core: { label: "INSPECTION_CORE", value: "Policy-Engine" },
      coreNote: "ack after record · crash recoverable",
      store: { label: "CONSISTENT", value: "PostgreSQL" },
      cache: { label: "IN_MEMORY", value: "Redis" },
    },
    stats: [
      { value: "10 Mio.+", label: "Security-Events pro Exportlauf bei MiniOrange" },
      { value: "ICPC", label: "Asia Regional 2023" },
      { value: "1.200+", label: "Gelöste Aufgaben auf CF, LeetCode und CodeChef" },
    ],
  },
  sections: {
    work: {
      index: "01",
      label: "Ausgewählte Arbeiten",
      title: "Was ich entworfen und gebaut habe.",
    },
    capabilities: {
      index: "02",
      label: "Fähigkeiten",
      title: "Wofür ich die meiste Entwicklungszeit aufwende.",
    },
    about: {
      index: "03",
      label: "Über mich & Haltung",
      title: "Wie ich über Softwareentwicklung denke.",
    },
    experience: {
      index: "04",
      label: "Werdegang & Kompetenzen",
      title: "Berufserfahrung und Tech-Stack.",
    },
    credentials: {
      index: "05",
      label: "Ausbildung & Erfolge",
      title: "Wettbewerbsprogrammierung und Qualifikationen.",
    },
    principles: {
      index: "06",
      label: "Arbeitsweise",
      title: "Wie ich an Entwicklungsarbeit herangehe.",
    },
    contact: {
      index: "07",
      label: "Kontakt",
      title: "Sprechen wir.",
    },
    testimonials: {
      index: "08",
      label: "Referenzen",
      title: "Was Menschen sagen, mit denen ich gearbeitet habe.",
    },
  },
  labels: {
    role: "Rolle",
    architecture: "Architektur",
    period: "Zeitraum",
    category: "Kategorie",
    technologies: "Technologien",
    context: "Ausgangslage",
    approach: "Vorgehen",
    decisions: "Zentrale Entscheidungen",
    features: "Umsetzung",
    outcomes: "Ergebnisse",
    links: "Links",
    experience: "Berufserfahrung",
    stack: "Tech-Stack",
    project: "Projekt",
    architectureDiagram: "Architektur",
    education: "Ausbildung",
    achievements: "Erfolge",
    codingProfiles: "Wettbewerbsprogrammierung",
  },
  projects: [
    {
      slug: "secureplus",
      title: "SecurePlus",
      category: "E-Mail-DLP-Gateway",
      period: "2026",
      featured: true,
      summary:
        "Eine mandantenfähige Plattform gegen Datenabfluss: ein Gateway, das jede ausgehende E-Mail vor dem Versand prüft, plus ein Scanner, der sensible Daten in Cloud-Speichern findet.",
      role: "Allein · Entwurf & Umsetzung",
      architecture: "Modularer Monolith + Stream-Worker",
      tech: ["Go", "Gin", "Redis Streams", "PostgreSQL", "MongoDB", "Next.js"],
      context:
        "Ausgehende E-Mail ist einer der häufigsten Wege, auf denen sensible Daten ein Unternehmen verlassen, und mit Indiens DPDP-Gesetz wird aus diesem Abfluss ein Compliance-Problem. Ich wollte den gesamten Pfad selbst bauen: die Mail annehmen, entscheiden, ob sie das Haus verlassen darf, und sie zustellen, ohne eine Nachricht zu verlieren, wenn ein Worker mittendrin abstürzt.",
      approach:
        "Mail kommt über SMTP oder eine REST-API an und wird in einen Redis Stream geschrieben, bevor der Absender ein 250 OK erhält. Worker in einer Consumer-Gruppe normalisieren den Text, führen die Prüfung mit Aho-Corasick und RE2 in einem einzigen Durchlauf aus, wenden die Policy des Absenders an und blockieren die Nachricht mit einem Hinweis oder leiten sie DKIM-signiert weiter. Eine Nachricht wird erst bestätigt, wenn ihr Ergebnis gespeichert ist — ein Absturz führt also zu einem erneuten Versuch statt zu stillem Verlust.",
      decisions: [
        {
          title: "Nur bestätigen, was dauerhaft gespeichert ist",
          detail:
            "Das SMTP-250 wird erst zurückgegeben, wenn die Nachricht sicher im Stream liegt, und der Stream-Eintrag wird erst bestätigt, wenn das Zustellergebnis gespeichert ist. Nachrichten bei einem abgestürzten Consumer holt XAUTOCLAIM zurück.",
        },
        {
          title: "Ein Durchlauf über den Text, egal wie viele Schlüsselwörter",
          detail:
            "Ein selbst gebauter Aho-Corasick-Automat findet alle Schlüsselwörter in einem einzigen Durchlauf, und Gos RE2 arbeitet in linearer Zeit, sodass ein bösartiges Muster kein ReDoS auslösen kann. Zuvor läuft eine NFKC-Normalisierung, um Tricks mit ähnlich aussehenden Unicode-Zeichen zu erkennen.",
        },
        {
          title: "Token-Rotation, die zwei offene Tabs übersteht",
          detail:
            "Refresh-Tokens rotieren atomar in einem Redis-Lua-Skript. Ein kurzes Kulanzfenster gibt einer gleichzeitigen Anfrage den bereits ausgestellten Nachfolger zurück, sodass normale Nutzer nicht fälschlich markiert werden, echte Wiederverwendung aber weiterhin abgelehnt wird.",
        },
      ],
      features: [
        "SMTP-Eingang (go-smtp) und REST-Ingestion in Redis Streams",
        "Aho-Corasick- und RE2-Prüfung über NFKC-normalisierten Text",
        "Policies pro Absender für Inhalt, Empfängerdomain und Anhänge",
        "DKIM-Signatur, MX-Auflösung, opportunistisches STARTTLS, Wiederholung je Empfänger",
        "Cloud-Scanner für S3, Google Drive und Microsoft 365 mit Schutz vor Zip-Bomben und Übergrößen",
        "AES-256-GCM-Verschlüsselung der Zugangsdaten mit versionierten, per HKDF abgeleiteten Schlüsseln",
        "CSRF-Double-Submit-Cookies, Rate Limiting in Redis, feingranulares RBAC",
        "Next.js-Konsole mit Vorfall-Audit, Auswertungen und EN-/JA-/ES-Lokalisierung",
      ],
      outcomes: [
        "Über 490 Go-Testfunktionen; mehr als 440 laufen bei jedem Push in GitHub Actions",
        "Live unter secureplus.ryugasystem.online",
      ],
      links: [
        { label: "Demo", href: "https://secureplus.ryugasystem.online/" },
        { label: "Quellcode", href: "https://github.com/ryuga001/SecurePlus" },
      ],
      media: {
        image: {
          src: "/projects/secureplus.png",
          alt: "SecurePlus-Konsole für Policies und Vorfälle",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/secureplus-demo.webm",
          preview: "/projects/secureplus-preview.webm",
          alt: "SecurePlus-Demo",
        },
      },
      artwork: {
        kind: "pipeline",
        caption: "secureplus-delivery // redis-stream",
        ruleset: "POLICY: PER_SENDER",
        badge: "DKIM · STARTTLS",
        streamTitle: "Prüf-Pipeline",
        stages: [
          "NFKC-Normalisierung",
          "Aho-Corasick- und RE2-Scan",
          "Policy-Entscheid · Weiterleitung",
        ],
        metaTitle: "Stream-Metadaten",
        meta: [
          "group: delivery consumers",
          "ack: after outcome recorded",
          "recovery: XAUTOCLAIM",
          "tenant: scoped per customer",
        ],
        footnote: "At-least-once-Zustellung",
      },
    },
    {
      slug: "tutorpilot",
      title: "TutorPilot",
      category: "Mandantenfähiges SaaS",
      period: "Juli — Aug. 2026",
      featured: true,
      summary:
        "Eine Plattform für den Betrieb eines Online-Nachhilfegeschäfts: Jede Organisation erhält einen eigenen, abgeschotteten Bereich für Personal, Kurse, Jahrgänge, Live-Unterricht und Dateien.",
      role: "Allein · Entwurf & Umsetzung",
      architecture: "Modularer Monolith + Transactional Outbox",
      tech: ["Go", "PostgreSQL", "Redis Streams", "LiveKit", "MinIO", "Next.js"],
      context:
        "Kleine Nachhilfeanbieter stückeln sich ihren Betrieb aus Videocalls, Tabellen und geteilten Laufwerken zusammen. Ich habe ein System gebaut, in dem sich eine Organisation registriert, eigene Rollen definiert, Kurse erstellt, sie als geplante Jahrgänge durchführt und Live-Unterricht gibt, der automatisch aufgezeichnet wird.",
      approach:
        "Das Go-Backend ist in Module (auth, admin, notification) über einem gemeinsamen Satz interner Pakete aufgeteilt. Alles, was nach einem Schreibvorgang passieren muss — etwa eine Bestätigungsmail — wird als Event in derselben Postgres-Transaktion gespeichert und erst danach an Redis Streams weitergereicht. So können Datenbank und Seiteneffekte nicht auseinanderlaufen.",
      decisions: [
        {
          title: "Transactional Outbox statt doppeltem Schreiben",
          detail:
            "Events werden in derselben Transaktion wie die Fachdaten eingefügt. Ein Relay holt sie mit FOR UPDATE SKIP LOCKED ab, sodass mehrere Relays ohne doppeltes Veröffentlichen laufen können.",
        },
        {
          title: "Fehler werden aufbewahrt, nicht verworfen",
          detail:
            "Consumer holen hängende Nachrichten mit XAUTOCLAIM zurück, klassifizieren Fehler für Wiederholungen und verschieben nicht verarbeitbare Nachrichten in eine Dead-Letter-Tabelle, die man einsehen und erneut abspielen kann.",
        },
        {
          title: "Ein Signaturschlüssel pro Mandant",
          detail:
            "Jede Organisation hat ihr eigenes, in Redis zwischengespeichertes JWT-Secret, sodass ein für einen Mandanten ausgestelltes Token bei einem anderen nicht verifiziert werden kann.",
        },
      ],
      features: [
        "74 REST-Endpunkte mit Swagger-Dokumentation und 14 versionierte Migrationen",
        "Rollen und Rechte je Organisation, im Schema definiert",
        "Kurse, Jahrgänge, Tutorenzuweisung und Anmeldung von Lernenden",
        "LiveKit-Klassenräume mit serverseitiger Aufzeichnung nach MinIO",
        "Gemeinsames Dateilaufwerk je Jahrgang auf MinIO-Objektspeicher",
      ],
      outcomes: [
        "80 Go-Unit- und Integrationstests, inklusive Rollback-Verhalten der Outbox",
      ],
      links: [{ label: "Quellcode", href: "https://github.com/ryuga001/TutorPilot" }],
      artwork: {
        kind: "mesh",
        caption: "TENANT_ISOLATION // SAAS_CORE",
        hub: "TENANT",
        nodes: [
          "JWT je Mandant",
          "RBAC im Schema",
          "LiveKit-Räume",
          "MinIO-Laufwerk",
        ],
        footnote: "OUTBOX: SKIP LOCKED RELAY · DLQ REPLAYABLE",
      },
    },
    {
      slug: "sahara",
      title: "Sahara",
      category: "KI-Karriereplattform",
      period: "Juni — Juli 2026",
      featured: true,
      summary:
        "Ein KI-Karriereassistent, der Lebensläufe mit Retrieval-Augmented Generation bewertet und umschreibt und im Hintergrund vollständige Lernkurse erzeugt.",
      role: "Allein · Backend",
      architecture: "Django-API + RabbitMQ-Worker",
      tech: ["Python", "Django", "PostgreSQL", "pgvector", "Gemini", "RabbitMQ"],
      context:
        "Generische KI-Tools für Lebensläufe geben vage Ratschläge, weil sie weder den tatsächlichen Lebenslauf noch die Stelle kennen. Ich wollte Rückmeldungen, die im eigenen Text der Nutzer verankert sind, und eine Kursgenerierung, die den Webrequest nicht blockiert, während ein Modell Dutzende Lektionen schreibt.",
      approach:
        "Lebensläufe werden geparst, eingebettet und in pgvector gespeichert. Bei einer Analyse werden die relevantesten Abschnitte per Kosinusdistanz abgerufen und an Gemini übergeben, das strukturierte Bewertungen und Umformulierungen zurückliefert. Die Kursgenerierung läuft über RabbitMQ-Queues, bearbeitet von getrennten Workern für Unterthemen, Inhalte und Massenaufträge.",
      decisions: [
        {
          title: "Erst abrufen, dann prompten",
          detail:
            "Nur die nächstliegenden Abschnitte des Lebenslaufs gelangen in den Prompt. Das hält die Antworten spezifisch und den Tokenverbrauch begrenzt.",
        },
        {
          title: "Worker stellen ihre eigene unfertige Arbeit wieder her",
          detail:
            "Beim Start setzt jeder Worker Einträge zurück, die ein abgestürzter Prozess im Zustand „wird erzeugt“ hinterlassen hat. Ein Neustart macht dort weiter, wo der letzte aufgehört hat.",
        },
        {
          title: "Problematische Nachrichten kreisen nicht endlos",
          detail:
            "Fehlgeschlagene Nachrichten werden bestätigt und protokolliert, statt endlos erneut eingereiht zu werden. So blockiert ein fehlerhafter Auftrag nicht die ganze Queue.",
        },
      ],
      features: [
        "Ähnlichkeitssuche in pgvector über Lebenslauf- und Kurs-Embeddings",
        "Gemini-Prompts, die strukturierte ATS-Bewertungen und Umformulierungen liefern",
        "Austauschbare Verbesserungsmodule (Schlüsselwörter, Fähigkeiten, Zusammenfassung) und PDF-Formatierung",
        "Drei RabbitMQ-Worker mit dauerhaften Queues für die Kursgenerierung",
      ],
      outcomes: [
        "141 Tests laufen in GitHub Actions CI",
        "Frontend auf Vercel deployt",
      ],
      links: [
        { label: "Demo", href: "https://sahara-frontend-gamma.vercel.app/" },
        {
          label: "Backend-Code",
          href: "https://github.com/ryuga001/SaharaBackend",
        },
        {
          label: "Frontend-Code",
          href: "https://github.com/ryuga001/SaharaFrontend",
        },
      ],
      media: {
        image: {
          src: "/projects/sahara.png",
          alt: "Sahara-Oberfläche zur Lebenslaufanalyse",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/sahara-demo.webm",
          preview: "/projects/sahara-preview.webm",
          alt: "Sahara-Demo",
        },
      },
      artwork: {
        kind: "scanner",
        caption: "RESUME_PIPELINE // RAG",
        source: "resume upload",
        format: "PDF",
        processor: { label: "Embedder", value: "Vektorisierung" },
        classifier: { label: "RETRIEVAL", value: "pgvector-Kosinus" },
        classifierNote: "strukturierte Gemini-Ausgabe",
        logTitle: "PIPELINE_REPORT",
        logs: [
          "Lebenslauf geparst und in Abschnitte zerlegt",
          "nächstliegende Abschnitte per Kosinusdistanz abgerufen",
          "Kursaufträge an drei RabbitMQ-Worker übergeben",
        ],
      },
    },
    {
      slug: "rental-management",
      title: "Rental Management System",
      category: "Microservice-Plattform",
      period: "Apr. — Mai 2026",
      featured: false,
      summary:
        "Eine Mietplattform für Vermieter und Mieter, aufgeteilt in Spring-Boot-Dienste hinter einem Gateway, mit ereignisgesteuerten Benachrichtigungen.",
      role: "Allein · Full Stack",
      architecture: "Microservices",
      tech: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "MongoDB", "Next.js"],
      context:
        "Ich habe das gebaut, um den Java-Microservice-Stack richtig zu lernen: Service Discovery, ein Gateway, asynchrone Nachrichten zwischen Diensten — und was passiert, wenn einer langsam wird oder ausfällt.",
      approach:
        "Ein Spring Cloud Gateway sitzt vor den Admin-, Reporting- und Notification-Diensten, die bei Eureka registriert sind. Die Dienste veröffentlichen Events auf RabbitMQ; der Notification-Dienst macht daraus E-Mails und Live-WebSocket-Nachrichten, der Reporting-Dienst legt die Audit-Historie in MongoDB ab.",
      decisions: [
        {
          title: "Einmal authentifizieren, am Rand",
          detail:
            "Das Gateway übernimmt die Authentifizierung, sodass die dahinterliegenden Dienste die Tokenprüfung nicht jeweils neu implementieren.",
        },
        {
          title: "Events statt Direktaufrufe für Benachrichtigungen",
          detail:
            "Dienste veröffentlichen auf RabbitMQ, statt den Notification-Dienst direkt aufzurufen. So bremst ein langsamer Mailserver nie eine Nutzeranfrage aus.",
        },
        {
          title: "Circuit Breaker bei dienstübergreifenden Aufrufen",
          detail:
            "Der Reporting-Dienst kapselt seine Feign-Aufrufe in Resilience4j-Circuit-Breaker, sodass eine ausgefallene Abhängigkeit nur eine Funktion einschränkt statt sich fortzupflanzen.",
        },
      ],
      features: [
        "Spring Cloud Gateway mit Eureka Service Discovery",
        "RabbitMQ-Events für Benachrichtigungen und Audit-Spuren",
        "E-Mail und STOMP-WebSocket-Versand aus dem Notification-Dienst",
        "MongoDB-Audit und Chatverlauf im Reporting-Dienst",
        "Ein Dockerfile je Dienst und ein Next.js-Frontend",
      ],
      outcomes: [],
      links: [
        {
          label: "Quellcode",
          href: "https://github.com/ryuga001/Rental-Mangament-Platform",
        },
      ],
      artwork: {
        kind: "grid",
        caption: "RENTAL_PLATFORM // SERVICES",
        title: "Dienst-Topologie",
        series: ["gateway", "notify", "report"],
        rows: [
          { label: "discovery", value: "Eureka" },
          { label: "events", value: "RabbitMQ" },
          { label: "resilience", value: "Resilience4j" },
        ],
        footnote: "Vier Spring-Boot-Dienste hinter einem Gateway",
      },
    },
  ],
  capabilities: [
    {
      index: "01",
      kind: "CORE",
      title: "Backend-Systeme",
      description:
        "APIs, Queue-Consumer und Batch-Pipelines, entworfen für den Fall, dass ein Worker mitten im Job stirbt — mit Wiederholungen, Wiederherstellung und Dead-Letter-Behandlung von Anfang an.",
      badges: ["Java", "Go", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
      icon: "layers",
    },
    {
      index: "02",
      kind: "DELIVERY",
      title: "Full-Stack-Produkt",
      description:
        "Eine Funktion vom Datenbankschema bis zum funktionierenden Dashboard bringen, inklusive Anmeldeabläufen, Admin-Konsolen und Lokalisierung.",
      badges: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
      icon: "grid",
    },
    {
      index: "03",
      kind: "DEFENCE",
      title: "Security-Engineering",
      description:
        "Schutz vor Datenabfluss, SIEM-Log-Weiterleitung, Token-Rotation, Mandantentrennung und Verschlüsselung gespeicherter Zugangsdaten.",
      badges: ["DLP", "SIEM", "JWT", "RBAC", "DKIM"],
      icon: "shield",
    },
    {
      index: "04",
      kind: "FOUNDATIONS",
      title: "Algorithmen & Entwurf",
      description:
        "Wettbewerbsprogrammierung auf echte Probleme angewandt: Ähnlichkeitssuche, Mehrmuster-Suche, Rate Limiting und faire Ablaufplanung.",
      badges: ["Systementwurf", "Datenstrukturen", "Migrationen", "CI/CD"],
      icon: "clock",
    },
  ],
  about: {
    quote:
      "Das Interessante an einem System ist meist der Teil, den niemand sieht, bis er ausfällt: die Queue, die einen Absturz überstehen muss, oder die Prüfung, die jedes Mal stimmen muss.",
    paragraphs: [
      "Ich bin Backend-Entwickler bei MiniOrange in Pune und arbeite dort an Security-Datenplattformen: einer fingerprint-basierten DLP-Engine für Endgeräte, einem Dienst zur SIEM-Log-Weiterleitung, Konnektoren zur Cloud-Datenerkennung und einer Massenexport-Pipeline, die pro Lauf über zehn Millionen Events verarbeitet.",
      "Zum Backend kam ich über die Wettbewerbsprogrammierung an der M.B.M-Universität in Jodhpur. 2023 habe ich mich für das ICPC Asia Regional qualifiziert, auf Codeforces über 37 gewertete Wettbewerbe Specialist erreicht und zusammen auf Codeforces, LeetCode und CodeChef mehr als 1.200 Aufgaben gelöst.",
      "Außerhalb der Arbeit baue ich vollständige Systeme allein, um neue Stacks richtig zu lernen: ein E-Mail-DLP-Gateway in Go, eine mandantenfähige Nachhilfeplattform, einen KI-Karriereassistenten in Python und eine Java-Microservice-Plattform.",
    ],
    cardTitle: "PROFIL",
    cardRows: [
      { label: "Aktuelle Rolle", value: "SDE bei MiniOrange" },
      { label: "Standort", value: "Pune, Indien" },
      { label: "Haupt-Stack", value: "Java · Go · PostgreSQL" },
      { label: "Offen für", value: "Remote & Umzug" },
    ],
  },
  experience: [
    {
      period: "JULI 2025 — HEUTE",
      role: "Software Development Engineer",
      org: "MiniOrange · Pune, Indien",
      description:
        "Entwicklung von Security-Datenplattformen: Schutz vor Datenabfluss auf Endgeräten, SIEM-Log-Weiterleitung, Cloud-Datenerkennung und mandantenfähige Export-Pipelines.",
      highlights: [
        "Einen Microservice zur SIEM-Log-Weiterleitung über HTTP/TCP mit JSON- und Syslog-Ausgabe entwickelt, aufgebaut auf einer sperrfreien LMAX-Disruptor-Pipeline, die über 2.000 Events pro Sekunde ohne Nachrichtenverlust verarbeitet und Rate Limits je Anbieter durchsetzt.",
        "Eine verteilte Massenexport-Pipeline in Java, Spring Batch, AWS S3, Redis und RabbitMQ entworfen, die pro Lauf über 10 Millionen Security-Events verarbeitet — mit Token-Bucket-Rate-Limiting je Mandant in Redis, Kontingenten für die Verarbeitungszeit und RabbitMQ-Prioritätsqueues für faire Ablaufplanung über mehr als 100 Mandanten hinweg, wodurch das Aushungern durch einzelne Mandanten entfällt.",
        "Eine inhaltsbasierte DLP-Engine für über 100 Mandanten mit je über 100 Geräten entworfen, die inhaltsdefiniertes Chunking mit MinHash/LSH für sublineare Ähnlichkeitssuche kombiniert und den Fingerprint-Abgleich erst auslöst, wenn die Policy-Kriterien erfüllt sind, was redundante Berechnungen vermeidet; Signaturen werden von MongoDB auf geräteseitiges SQLite synchronisiert und ermöglichen die Erkennung von Verstößen vollständig offline.",
        "Cloud-Datenerkennung durchgängig umgesetzt — Konnektor-Architektur, Ingestion und Verarbeitungspipelines für AWS S3, Azure Blob Storage, Google Drive und SharePoint.",
      ],
    },
    {
      period: "MAI 2024 — JULI 2024",
      role: "Node.js-Backend-Praktikant",
      org: "Celebal Technologies",
      description:
        "REST-APIs mit Node.js und Express.js auf relationalen und dokumentenorientierten Datenbanken entwickelt.",
      highlights: [
        "Routing, Middleware und Validierung von Anfragen über eine Reihe von REST-Endpunkten umgesetzt.",
        "Innerhalb desselben Dienstes sowohl mit relationalen als auch mit dokumentenorientierten Datenspeichern gearbeitet.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Informatik",
      org: "M.B.M-Universität, Jodhpur",
      period: "2021 — 2025",
      detail:
        "Notendurchschnitt 8,01 / 10 · Datenstrukturen und Algorithmen, Betriebssysteme, Datenbanken, verteilte Systeme",
    },
  ],
  achievements: [
    {
      title: "ICPC Asia Regional 2023",
      detail: "Für die ICPC-Asia-Regionalrunde qualifiziert und teilgenommen.",
      href: "https://icpc.global",
    },
    {
      title: "Codeforces Specialist",
      detail: "Specialist über 37 gewertete Wettbewerbe erreicht.",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      title: "Über 1.200 Aufgaben gelöst",
      detail: "Auf Codeforces, LeetCode und CodeChef zusammen.",
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
      rating: "3 Sterne · 1667",
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
      title: "Sprachen",
      items: ["Java", "Go", "Python", "C++", "TypeScript", "SQL"],
    },
    {
      title: "Backend & Frameworks",
      items: ["Spring Boot", "Spring Batch", "Gin", "Django", "Node.js", "REST"],
    },
    {
      title: "Speicher & Messaging",
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
      title: "Infrastruktur & Frontend",
      items: ["AWS S3", "Docker", "GitHub Actions", "Linux", "Next.js", "React"],
    },
  ],
  principles: [
    {
      title: "Nur bestätigen, was dauerhaft gespeichert ist.",
      detail:
        "SecurePlus gibt ein SMTP-250 erst zurück, wenn die Nachricht im Stream liegt, und TutorPilot schreibt seine Events in derselben Transaktion wie die Daten. Eine Erfolgsmeldung sollte bedeuten, dass die Arbeit nicht mehr verloren gehen kann.",
    },
    {
      title: "Davon ausgehen, dass der Worker abstürzt.",
      detail:
        "Jeder Queue-Consumer, den ich baue, kann hängende Nachrichten zurückholen, halbfertige Jobs beim Neustart fortsetzen und problematische Nachrichten dort parken, wo sie erneut abgespielt werden können.",
    },
    {
      title: "Trennung strukturell verankern.",
      detail:
        "Mandantengrenzen gehören in Schlüssel und Schemata — etwa ein JWT-Secret je Organisation — und nicht in einen Filter, den jemand in einer Abfrage vergessen kann.",
    },
    {
      title: "Auch die Fehlerpfade testen.",
      detail:
        "Der Normalfall ist der einfache Teil. Meine Tests decken zusätzlich Rollbacks, wiederverwendete Tokens, übergroße Dateien und bösartige Regex-Muster ab.",
    },
  ],
  testimonials: [],
  contact: {
    title: "Sie besetzen eine Backend- oder Plattformrolle?",
    subtitle:
      "Ich suche Backend-Rollen in verteilten Systemen, Hochdurchsatz-Pipelines oder Security-Infrastruktur — remote oder mit Umzug. Über die Projekte hier spreche ich ebenfalls gern.",
    emailLabel: "Direkte E-Mail",
    responseNote: "Ich antworte persönlich, in der Regel innerhalb von 24 Stunden.",
    notesTitle: "Gut zu wissen",
    notes: [
      "Derzeit Vollzeit-SDE bei MiniOrange in Pune.",
      "Offen für Remote-Rollen und für einen Umzug.",
      "Sicher sowohl in Java-/Spring- als auch in Go-Codebasen.",
    ],
    helpsWithTitle: "Rollen, die mich interessieren",
    helpsWith: [
      "Backend-Entwicklung in verteilten Systemen",
      "Daten- und Event-Pipelines mit hohem Durchsatz",
      "Security, DLP oder Identitäts-Infrastruktur",
      "Plattformteams, die Zuverlässigkeit vollständig verantworten",
    ],
    mailSubject: "Hallo über Ihr Portfolio",
  },
  pages: {
    work: {
      kicker: "AUSGEWÄHLTE ARBEITEN",
      title: "Systeme, die ich entworfen und gebaut habe.",
      description:
        "Eigene Projekte, jeweils mit der Ausgangslage und den Entscheidungen, die sie geprägt haben. Meine Arbeit bei MiniOrange ist unter Berufserfahrung zusammengefasst.",
    },
    about: {
      kicker: "ÜBER MICH",
      title: "Backend-Entwickler, Wettbewerbsprogrammierer.",
      description:
        "Tagsüber Security-Datenplattformen, in der eigenen Zeit vollständige Systeme in Go, Python und Java.",
    },
    contact: {
      kicker: "KONTAKT",
      title: "Sprechen wir.",
      description:
        "Per E-Mail erreichen Sie mich am schnellsten. Schreiben Sie mir zur Rolle oder zu dem, worüber Sie sprechen möchten.",
    },
    notFound: {
      kicker: "404",
      title: "Diese Seite existiert nicht.",
      description:
        "Der Link ist möglicherweise veraltet. Die Projektübersicht ist ein guter Ausgangspunkt.",
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
      "Backend-Entwickler für zuverlässige Pipelines, Security-Infrastruktur und die Produkte darauf.",
    navTitle: "Navigation",
    connectTitle: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
  },
} satisfies SiteContent;

export default de;
