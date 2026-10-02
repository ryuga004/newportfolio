import type { SiteContent } from "./types";

const en = {
  locale: "en",
  meta: {
    title: "Rahul Singh — Backend Engineer",
    template: "%s — Rahul Singh",
    description:
      "Backend engineer at MiniOrange building security data platforms. ICPC Asia Regionalist and Codeforces Specialist. Personal projects in Go, Python, and Java.",
  },
  profile: {
    name: "Rahul Singh",
    initials: "RS",
    role: "Backend Engineer",
    disciplines: "Backend · Distributed Systems · Security",
    location: "Pune, India",
    email: "rahul0singh003@gmail.com",
    availability: "Open to backend roles",
    resumeUrl: "/rahul-singh-resume.pdf",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  actions: {
    viewWork: "View my work",
    letsTalk: "Let's talk",
    viewCaseStudy: "View case study",
    viewAllWork: "View all work",
    readMore: "More about me",
    startConversation: "Start a conversation",
    copyEmail: "Copy email",
    copied: "Copied",
    previousProject: "Previous project",
    nextProject: "Next project",
    backToWork: "Back to work",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
    language: "Language",
    downloadResume: "Download résumé",
    viewCode: "Code",
    viewLive: "Live",
  },
  hero: {
    badge: "BACKEND ENGINEER",
    eyebrow: "SDE @ MiniOrange",
    headline: {
      lead: "I build backend systems that",
      accent: "keep working",
      trail: " when a worker crashes.",
    },
    lead: "I work on security data platforms at MiniOrange: DLP detection, SIEM log forwarding, and multi-tenant export pipelines. Outside work I build the same kind of systems from scratch in Go and Python, with a competitive programming background behind the algorithms.",
    meta: [
      { label: "Location", value: "Pune, India · UTC+5:30" },
      { label: "Core focus", value: "Backend · Pipelines · Security" },
      { label: "Open to", value: "Remote & relocation" },
    ],
    diagram: {
      caption: "SECUREPLUS_RUNTIME // ACTIVE",
      status: "healthy",
      ingress: { label: "INGESTION", value: "SMTP + REST" },
      worker: { label: "QUEUE_CONSUMER", value: "Redis Streams" },
      core: { label: "INSPECTION_CORE", value: "Policy engine" },
      coreNote: "ack after record · crash recoverable",
      store: { label: "CONSISTENT", value: "PostgreSQL" },
      cache: { label: "IN_MEMORY", value: "Redis" },
    },
    stats: [
      { value: "10M+", label: "Security events per export run at MiniOrange" },
      { value: "ICPC", label: "Asia Regionalist 2023" },
      { value: "1,200+", label: "Problems solved across CF, LeetCode, CodeChef" },
    ],
  },
  sections: {
    work: {
      index: "01",
      label: "Selected work",
      title: "Things I've designed and built.",
    },
    capabilities: {
      index: "02",
      label: "Capabilities",
      title: "Where I spend most of my engineering time.",
    },
    about: {
      index: "03",
      label: "About & perspective",
      title: "How I think about building software.",
    },
    experience: {
      index: "04",
      label: "Career & competencies",
      title: "Experience and technical stack.",
    },
    credentials: {
      index: "05",
      label: "Education & achievements",
      title: "Competitive programming and credentials.",
    },
    principles: {
      index: "06",
      label: "Operating philosophy",
      title: "How I approach engineering work.",
    },
    contact: {
      index: "07",
      label: "Contact",
      title: "Let's talk.",
    },
    testimonials: {
      index: "08",
      label: "References",
      title: "What people I've worked with say.",
    },
  },
  labels: {
    role: "Role",
    architecture: "Architecture",
    period: "Period",
    category: "Category",
    technologies: "Technologies",
    context: "Context",
    approach: "Approach",
    decisions: "Key decisions",
    features: "Implementation",
    outcomes: "Outcomes",
    links: "Links",
    experience: "Experience",
    stack: "Technical stack",
    project: "Project",
    architectureDiagram: "Architecture",
    education: "Education",
    achievements: "Achievements",
    codingProfiles: "Competitive programming",
  },
  projects: [
    {
      slug: "secureplus",
      title: "SecurePlus",
      category: "Email DLP gateway",
      period: "2026",
      featured: true,
      summary:
        "A multi-tenant data loss prevention platform: an outbound email gateway that inspects every message before it leaves, plus a scanner that finds sensitive data in cloud storage.",
      role: "Solo · design & build",
      architecture: "Modular monolith + stream workers",
      tech: ["Go", "Gin", "Redis Streams", "PostgreSQL", "MongoDB", "Next.js"],
      context:
        "Outbound email is one of the most common ways sensitive data leaves an organisation, and India's DPDP Act turns that leak into a compliance problem. I wanted to build the whole path myself: receive the mail, decide whether it is allowed to leave, and deliver it without losing a message if a worker dies halfway through.",
      approach:
        "Mail arrives over SMTP or a REST API and is written to a Redis Stream before the sender gets a 250 OK. Workers in a consumer group normalise the text, run a single-pass Aho-Corasick and RE2 inspection, apply the sender's policy, and either block the message with a notice or relay it with DKIM signing. A message is only acknowledged once its outcome is recorded, so a crash means a retry rather than a silent loss.",
      decisions: [
        {
          title: "Acknowledge only what is durable",
          detail:
            "The SMTP 250 is returned only after the message is safely in the stream, and the stream entry is ACKed only after the delivery outcome is stored. Messages stuck with a crashed consumer are reclaimed with XAUTOCLAIM.",
        },
        {
          title: "One pass over the text, whatever the keyword count",
          detail:
            "A hand-built Aho-Corasick automaton matches every keyword in a single scan, and Go's RE2 regex engine runs in linear time so a hostile pattern cannot cause ReDoS. NFKC normalisation runs first to catch Unicode look-alike tricks.",
        },
        {
          title: "Token rotation that survives two open tabs",
          detail:
            "Refresh tokens rotate atomically in a Redis Lua script. A short grace window returns the already-issued successor to a concurrent request, so normal users are not flagged while genuine token reuse is still rejected.",
        },
      ],
      features: [
        "SMTP ingress (go-smtp) and REST ingestion into Redis Streams",
        "Aho-Corasick + RE2 inspection over NFKC-normalised text",
        "Per-sender content, recipient-domain, and attachment policies",
        "DKIM signing, MX resolution, opportunistic STARTTLS, per-recipient retry",
        "Cloud discovery scanner for S3, Google Drive, and Microsoft 365 with zip-bomb and size guards",
        "AES-256-GCM credential encryption with HKDF-derived, versioned keys",
        "CSRF double-submit cookies, Redis rate limiting, granular RBAC",
        "Next.js console with incident audit, analytics, and EN / JA / ES localisation",
      ],
      outcomes: [
        "490+ Go test functions; 440+ run on every push in GitHub Actions",
        "Deployed live at secureplus.ryugasystem.online",
      ],
      links: [
        { label: "Live demo", href: "https://secureplus.ryugasystem.online/" },
        { label: "Source", href: "https://github.com/ryuga001/SecurePlus" },
      ],
      media: {
        image: {
          src: "/projects/secureplus.png",
          alt: "SecurePlus policy and incident console",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/secureplus-demo.webm",
          preview: "/projects/secureplus-preview.webm",
          alt: "SecurePlus demo walkthrough",
        },
      },
      artwork: {
        kind: "pipeline",
        caption: "secureplus-delivery // redis-stream",
        ruleset: "POLICY: PER_SENDER",
        badge: "DKIM · STARTTLS",
        streamTitle: "Live inspection pipeline",
        stages: [
          "NFKC normalise",
          "Aho-Corasick + RE2 scan",
          "Policy verdict · relay",
        ],
        metaTitle: "Stream metadata",
        meta: [
          "group: delivery consumers",
          "ack: after outcome recorded",
          "recovery: XAUTOCLAIM",
          "tenant: scoped per customer",
        ],
        footnote: "At-least-once delivery",
      },
    },
    {
      slug: "tutorpilot",
      title: "TutorPilot",
      category: "Multi-tenant SaaS",
      period: "Jul — Aug 2026",
      featured: true,
      summary:
        "A platform for running an online tutoring business: each organisation gets its own isolated space for staff, courses, batches, live classes, and files.",
      role: "Solo · design & build",
      architecture: "Modular monolith + transactional outbox",
      tech: ["Go", "PostgreSQL", "Redis Streams", "LiveKit", "MinIO", "Next.js"],
      context:
        "Small coaching businesses stitch together video calls, spreadsheets, and shared drives. I built one system where an organisation signs up, defines its own roles, builds courses, runs them as scheduled batches, and teaches live classes that are recorded automatically.",
      approach:
        "The Go backend is split into modules (auth, admin, notification) behind a shared set of internal packages. Anything that must happen after a write, like sending a verification email, is stored as an event in the same Postgres transaction and relayed to Redis Streams afterwards, so the database and the side effects cannot drift apart.",
      decisions: [
        {
          title: "Transactional outbox instead of dual writes",
          detail:
            "Events are inserted in the same transaction as the business data. A relay claims them with FOR UPDATE SKIP LOCKED, so several relays can run without double-publishing.",
        },
        {
          title: "Failures are kept, not dropped",
          detail:
            "Consumers reclaim stalled messages with XAUTOCLAIM, classify errors for retry, and move poison messages to a dead-letter table that can be inspected and replayed.",
        },
        {
          title: "A signing secret per tenant",
          detail:
            "Each organisation has its own JWT secret, cached in Redis, so a token issued for one tenant cannot be verified by another.",
        },
      ],
      features: [
        "74 REST endpoints with Swagger docs and 14 versioned migrations",
        "Schema-driven roles and privileges per organisation",
        "Courses, batches, tutor assignment, and student enrolment",
        "LiveKit classrooms with server-side recording to MinIO",
        "Shared file drive per batch on MinIO object storage",
      ],
      outcomes: [
        "80 Go unit and integration tests, including outbox rollback behaviour",
      ],
      links: [{ label: "Source", href: "https://github.com/ryuga001/TutorPilot" }],
      artwork: {
        kind: "mesh",
        caption: "TENANT_ISOLATION // SAAS_CORE",
        hub: "TENANT",
        nodes: [
          "Per-tenant JWT",
          "Schema RBAC",
          "LiveKit rooms",
          "MinIO drive",
        ],
        footnote: "OUTBOX: SKIP LOCKED RELAY · DLQ REPLAYABLE",
      },
    },
    {
      slug: "sahara",
      title: "Sahara",
      category: "AI career platform",
      period: "Jun — Jul 2026",
      featured: true,
      summary:
        "An AI career assistant that scores and rewrites resumes with retrieval-augmented generation and generates full learning courses in the background.",
      role: "Solo · backend",
      architecture: "Django API + RabbitMQ workers",
      tech: ["Python", "Django", "PostgreSQL", "pgvector", "Gemini", "RabbitMQ"],
      context:
        "Generic AI resume tools give vague advice because they know nothing about the reader's actual resume or the role. I wanted feedback grounded in the user's own content, and course generation that does not block the web request while an LLM writes dozens of lessons.",
      approach:
        "Resumes are parsed, embedded, and stored in pgvector. When a user asks for a review, the most relevant chunks are retrieved by cosine distance and passed to Gemini, which returns structured scores and rewrites. Course generation is pushed onto RabbitMQ queues and handled by separate workers for subtopics, content, and bulk jobs.",
      decisions: [
        {
          title: "Retrieve before you prompt",
          detail:
            "Only the closest resume chunks go into the prompt, which keeps answers specific to the user and keeps token usage bounded.",
        },
        {
          title: "Workers recover their own unfinished work",
          detail:
            "On startup each worker resets items left in a generating state by a crashed process, so a restart picks up where the last one stopped.",
        },
        {
          title: "Poison messages do not loop forever",
          detail:
            "Messages that fail are acknowledged and recorded instead of requeued endlessly, so one bad job cannot block the queue.",
        },
      ],
      features: [
        "pgvector similarity search over resume and course embeddings",
        "Gemini prompts returning structured ATS scores and rewrites",
        "Pluggable resume enhancers (keywords, skills, summary) and PDF formatter",
        "Three RabbitMQ workers with durable queues for course generation",
      ],
      outcomes: [
        "141 tests running in GitHub Actions CI",
        "Frontend deployed on Vercel",
      ],
      links: [
        { label: "Live demo", href: "https://sahara-frontend-gamma.vercel.app/" },
        {
          label: "Backend source",
          href: "https://github.com/ryuga001/SaharaBackend",
        },
        {
          label: "Frontend source",
          href: "https://github.com/ryuga001/SaharaFrontend",
        },
      ],
      media: {
        image: {
          src: "/projects/sahara.png",
          alt: "Sahara résumé analysis interface",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/sahara-demo.webm",
          preview: "/projects/sahara-preview.webm",
          alt: "Sahara demo walkthrough",
        },
      },
      artwork: {
        kind: "scanner",
        caption: "RESUME_PIPELINE // RAG",
        source: "resume upload",
        format: "PDF",
        processor: { label: "Embedder", value: "vector encode" },
        classifier: { label: "RETRIEVAL", value: "pgvector cosine" },
        classifierNote: "Gemini structured output",
        logTitle: "PIPELINE_REPORT",
        logs: [
          "resume parsed and split into chunks",
          "nearest chunks retrieved by cosine distance",
          "course jobs queued to three RabbitMQ workers",
        ],
      },
    },
    {
      slug: "rental-management",
      title: "Rental Management System",
      category: "Microservices platform",
      period: "Apr — May 2026",
      featured: false,
      summary:
        "A rental platform for landlords and tenants, split into Spring Boot services behind a gateway with event-driven notifications.",
      role: "Solo · full stack",
      architecture: "Microservices",
      tech: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "MongoDB", "Next.js"],
      context:
        "I built this to learn the Java microservices stack properly: service discovery, a gateway, asynchronous messaging between services, and what happens when one service is slow or down.",
      approach:
        "A Spring Cloud gateway sits in front of admin, reporting, and notification services registered with Eureka. Services publish events to RabbitMQ; the notification service turns them into emails and live WebSocket pushes, and the reporting service stores audit history in MongoDB.",
      decisions: [
        {
          title: "Authenticate once, at the edge",
          detail:
            "The gateway handles authentication, so the services behind it do not each reimplement token checks.",
        },
        {
          title: "Events over direct calls for notifications",
          detail:
            "Services publish to RabbitMQ instead of calling the notification service directly, so a slow mail server never slows down a user request.",
        },
        {
          title: "Circuit breakers on cross-service calls",
          detail:
            "The reporting service wraps its Feign calls in Resilience4j circuit breakers, so a failing dependency degrades one feature instead of cascading.",
        },
      ],
      features: [
        "Spring Cloud Gateway with Eureka service discovery",
        "RabbitMQ events for notifications and audit trails",
        "Email and STOMP WebSocket push from the notification service",
        "MongoDB audit and chat history in the reporting service",
        "Dockerfile per service and a Next.js frontend",
      ],
      outcomes: [],
      links: [
        {
          label: "Source",
          href: "https://github.com/ryuga001/Rental-Mangament-Platform",
        },
      ],
      artwork: {
        kind: "grid",
        caption: "RENTAL_PLATFORM // SERVICES",
        title: "Service topology",
        series: ["gateway", "notify", "report"],
        rows: [
          { label: "discovery", value: "Eureka" },
          { label: "events", value: "RabbitMQ" },
          { label: "resilience", value: "Resilience4j" },
        ],
        footnote: "Four Spring Boot services behind one gateway",
      },
    },
  ],
  capabilities: [
    {
      index: "01",
      kind: "CORE",
      title: "Backend systems",
      description:
        "APIs, queue consumers, and batch pipelines designed for the case where a worker dies mid-job, with retries, recovery, and dead-letter handling built in.",
      badges: ["Java", "Go", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
      icon: "layers",
    },
    {
      index: "02",
      kind: "DELIVERY",
      title: "Full-stack product",
      description:
        "Taking a feature from the database schema to a working dashboard, including auth flows, admin consoles, and localisation.",
      badges: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
      icon: "grid",
    },
    {
      index: "03",
      kind: "DEFENCE",
      title: "Security engineering",
      description:
        "Data loss prevention, SIEM log forwarding, token rotation, tenant isolation, and encryption of stored credentials.",
      badges: ["DLP", "SIEM", "JWT", "RBAC", "DKIM"],
      icon: "shield",
    },
    {
      index: "04",
      kind: "FOUNDATIONS",
      title: "Algorithms & design",
      description:
        "Competitive programming applied to production problems: similarity search, multi-pattern matching, rate limiting, and fair scheduling.",
      badges: ["System design", "Data structures", "Migrations", "CI/CD"],
      icon: "clock",
    },
  ],
  about: {
    quote:
      "The interesting part of a system is usually the part nobody sees until it fails: the queue that has to survive a crash, or the check that has to be right every time.",
    paragraphs: [
      "I'm a backend engineer at MiniOrange in Pune, where I work on security data platforms: a fingerprint-based DLP engine for endpoints, a SIEM log-forwarding service, cloud data discovery connectors, and a bulk-export pipeline that processes over ten million events per run.",
      "I came to backend work through competitive programming at M.B.M University, Jodhpur. I qualified for the ICPC Asia Regional in 2023, reached Specialist on Codeforces across 37 rated contests, and have solved more than 1,200 problems across Codeforces, LeetCode, and CodeChef.",
      "Outside work I build complete systems on my own to learn new stacks properly: an email DLP gateway in Go, a multi-tenant tutoring platform, an AI career assistant in Python, and a Java microservices platform.",
    ],
    cardTitle: "PROFILE",
    cardRows: [
      { label: "Current role", value: "SDE at MiniOrange" },
      { label: "Based in", value: "Pune, India" },
      { label: "Primary stack", value: "Java · Go · PostgreSQL" },
      { label: "Open to", value: "Remote & relocation" },
    ],
  },
  experience: [
    {
      period: "JUL 2025 — PRESENT",
      role: "Software Development Engineer",
      org: "MiniOrange · Pune, India",
      description:
        "Building security data platforms: endpoint data loss prevention, SIEM log forwarding, cloud data discovery, and multi-tenant export pipelines.",
      highlights: [
        "Developed a SIEM log-forwarding microservice over HTTP/TCP with JSON and Syslog output, built on an LMAX Disruptor lock-free pipeline that sustained over 2,000 events per second with zero message loss and enforced per-vendor rate limits.",
        "Architected a distributed bulk-export pipeline in Java, Spring Batch, AWS S3, Redis, and RabbitMQ processing over 10 million security events per run, with per-tenant Redis token-bucket rate limiting, processing-time quotas, and RabbitMQ priority queuing to ensure fair scheduling across 100+ tenants and eliminate noisy-neighbour starvation.",
        "Designed a content-based DLP engine supporting 100+ tenants with 100+ devices each, using CDC chunking with MinHash/LSH for sublinear similarity search and triggering fingerprint matching only once policy criteria are met, eliminating redundant computation; signatures synchronise from MongoDB to on-device SQLite for fully offline violation detection.",
        "Delivered cloud data discovery end to end — connector architecture, ingestion, and processing pipelines for AWS S3, Azure Blob Storage, Google Drive, and SharePoint.",
      ],
    },
    {
      period: "MAY 2024 — JUL 2024",
      role: "Node.js Backend Intern",
      org: "Celebal Technologies",
      description:
        "Built REST APIs with Node.js and Express.js on top of both relational and document databases.",
      highlights: [
        "Implemented routing, middleware, and request validation across a set of REST endpoints.",
        "Worked against both relational and document data stores within the same service.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science",
      org: "M.B.M University, Jodhpur",
      period: "2021 — 2025",
      detail:
        "CGPA 8.01 / 10 · Data structures and algorithms, operating systems, database engineering, distributed systems",
    },
  ],
  achievements: [
    {
      title: "ICPC Asia Regionalist 2023",
      detail: "Qualified for and competed at the ICPC Asia Regional round.",
      href: "https://icpc.global",
    },
    {
      title: "Codeforces Specialist",
      detail: "Reached Specialist across 37 rated contests.",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      title: "1,200+ problems solved",
      detail: "Across Codeforces, LeetCode, and CodeChef.",
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
      rating: "3-Star · 1667",
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
      title: "Languages",
      items: ["Java", "Go", "Python", "C++", "TypeScript", "SQL"],
    },
    {
      title: "Backend & frameworks",
      items: ["Spring Boot", "Spring Batch", "Gin", "Django", "Node.js", "REST"],
    },
    {
      title: "Storage & messaging",
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
      title: "Infrastructure & frontend",
      items: ["AWS S3", "Docker", "GitHub Actions", "Linux", "Next.js", "React"],
    },
  ],
  principles: [
    {
      title: "Acknowledge only what is durable.",
      detail:
        "SecurePlus returns an SMTP 250 only after the message is in the stream, and TutorPilot writes its events in the same transaction as the data. A success response should mean the work cannot be lost.",
    },
    {
      title: "Assume the worker will crash.",
      detail:
        "Every queue consumer I build can reclaim stalled messages, resume half-finished jobs on restart, and park poison messages somewhere they can be replayed.",
    },
    {
      title: "Make isolation structural.",
      detail:
        "Tenant boundaries belong in keys and schemas, like a JWT secret per organisation, rather than in a filter someone might forget to add to a query.",
    },
    {
      title: "Test the failure paths too.",
      detail:
        "The happy path is the easy part. My tests also cover rollbacks, reused tokens, oversized files, and hostile regex patterns.",
    },
  ],
  testimonials: [],
  contact: {
    title: "Hiring for backend or platform work?",
    subtitle:
      "I'm looking for backend engineering roles in distributed systems, high-throughput pipelines, or security infrastructure, remote or with relocation. I'm also happy to talk about any of the projects here.",
    emailLabel: "Direct email",
    responseNote: "I reply personally, usually within 24 hours.",
    notesTitle: "Good to know",
    notes: [
      "Currently a full-time SDE at MiniOrange in Pune.",
      "Open to remote roles and to relocation.",
      "Comfortable in both Java/Spring and Go codebases.",
    ],
    helpsWithTitle: "Roles I'm interested in",
    helpsWith: [
      "Backend engineering on distributed systems",
      "High-throughput data and event pipelines",
      "Security, DLP, or identity infrastructure",
      "Platform teams that own reliability end to end",
    ],
    mailSubject: "Hello from your portfolio",
  },
  pages: {
    work: {
      kicker: "SELECTED WORK",
      title: "Systems I've designed and built.",
      description:
        "Personal projects, each with the context behind it and the decisions that shaped it. My work at MiniOrange is summarised under experience.",
    },
    about: {
      kicker: "ABOUT",
      title: "Backend engineer, competitive programmer.",
      description:
        "Security data platforms by day, complete systems in Go, Python, and Java on my own time.",
    },
    contact: {
      kicker: "CONTACT",
      title: "Let's talk.",
      description:
        "Email is the fastest way to reach me. Tell me about the role or what you'd like to discuss.",
    },
    notFound: {
      kicker: "404",
      title: "This page doesn't exist.",
      description:
        "The link may be out of date. The work index is a good place to pick up again.",
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
      "Backend engineer building reliable pipelines, security infrastructure, and the products on top of them.",
    navTitle: "Navigation",
    connectTitle: "Connect",
    rights: "All rights reserved.",
  },
} satisfies SiteContent;

export default en;
