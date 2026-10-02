import type { SiteContent } from "./types";

const hi = {
  locale: "hi",
  meta: {
    title: "राहुल सिंह — बैकएंड इंजीनियर",
    template: "%s — राहुल सिंह",
    description:
      "MiniOrange में बैकएंड इंजीनियर, सुरक्षा डेटा प्लेटफ़ॉर्म पर काम। ICPC एशिया रीजनलिस्ट और Codeforces Specialist। Go, Python और Java में व्यक्तिगत प्रोजेक्ट।",
  },
  profile: {
    name: "राहुल सिंह",
    initials: "RS",
    role: "बैकएंड इंजीनियर",
    disciplines: "बैकएंड · वितरित सिस्टम · सुरक्षा",
    location: "पुणे, भारत",
    email: "rahul0singh003@gmail.com",
    availability: "बैकएंड भूमिकाओं के लिए उपलब्ध",
    resumeUrl: "/rahul-singh-resume.pdf",
  },
  nav: [
    { label: "होम", href: "/" },
    { label: "काम", href: "/work" },
    { label: "परिचय", href: "/about" },
    { label: "संपर्क", href: "/contact" },
  ],
  actions: {
    viewWork: "मेरा काम देखें",
    letsTalk: "बात करते हैं",
    viewCaseStudy: "केस स्टडी देखें",
    viewAllWork: "सारा काम देखें",
    readMore: "मेरे बारे में और",
    startConversation: "बातचीत शुरू करें",
    copyEmail: "ईमेल कॉपी करें",
    copied: "कॉपी हो गया",
    previousProject: "पिछला प्रोजेक्ट",
    nextProject: "अगला प्रोजेक्ट",
    backToWork: "काम पर वापस",
    openMenu: "मेन्यू खोलें",
    closeMenu: "मेन्यू बंद करें",
    skipToContent: "मुख्य सामग्री पर जाएँ",
    theme: "थीम",
    themeLight: "लाइट",
    themeDark: "डार्क",
    themeSystem: "सिस्टम",
    language: "भाषा",
    downloadResume: "रिज़्यूमे डाउनलोड करें",
    viewCode: "कोड",
    viewLive: "लाइव",
  },
  hero: {
    badge: "बैकएंड इंजीनियर",
    eyebrow: "MiniOrange में SDE",
    headline: {
      lead: "मैं ऐसे बैकएंड सिस्टम बनाता हूँ जो वर्कर क्रैश होने पर भी",
      accent: "चलते रहते",
      trail: " हैं।",
    },
    lead: "MiniOrange में मैं सुरक्षा डेटा प्लेटफ़ॉर्म पर काम करता हूँ: DLP डिटेक्शन, SIEM लॉग फ़ॉरवर्डिंग और मल्टी-टेनेंट एक्सपोर्ट पाइपलाइन। काम के बाहर मैं वैसे ही सिस्टम Go और Python में शून्य से बनाता हूँ, और एल्गोरिदम के पीछे प्रतियोगी प्रोग्रामिंग की पृष्ठभूमि है।",
    meta: [
      { label: "स्थान", value: "पुणे, भारत · UTC+5:30" },
      { label: "मुख्य क्षेत्र", value: "बैकएंड · पाइपलाइन · सुरक्षा" },
      { label: "उपलब्ध", value: "रिमोट और रीलोकेशन" },
    ],
    diagram: {
      caption: "SECUREPLUS_RUNTIME // ACTIVE",
      status: "healthy",
      ingress: { label: "INGESTION", value: "SMTP + REST" },
      worker: { label: "QUEUE_CONSUMER", value: "Redis Streams" },
      core: { label: "INSPECTION_CORE", value: "पॉलिसी इंजन" },
      coreNote: "ack after record · crash recoverable",
      store: { label: "CONSISTENT", value: "PostgreSQL" },
      cache: { label: "IN_MEMORY", value: "Redis" },
    },
    stats: [
      { value: "10M+", label: "MiniOrange में प्रति एक्सपोर्ट रन सुरक्षा इवेंट" },
      { value: "ICPC", label: "एशिया रीजनलिस्ट 2023" },
      { value: "1,200+", label: "CF, LeetCode और CodeChef पर हल किए प्रश्न" },
    ],
  },
  sections: {
    work: {
      index: "01",
      label: "चुनिंदा काम",
      title: "जो मैंने डिज़ाइन किया और बनाया।",
    },
    capabilities: {
      index: "02",
      label: "क्षमताएँ",
      title: "मेरा अधिकांश इंजीनियरिंग समय कहाँ जाता है।",
    },
    about: {
      index: "03",
      label: "परिचय और दृष्टिकोण",
      title: "सॉफ़्टवेयर बनाने को लेकर मेरी सोच।",
    },
    experience: {
      index: "04",
      label: "करियर और दक्षता",
      title: "अनुभव और तकनीकी स्टैक।",
    },
    credentials: {
      index: "05",
      label: "शिक्षा और उपलब्धियाँ",
      title: "प्रतियोगी प्रोग्रामिंग और योग्यताएँ।",
    },
    principles: {
      index: "06",
      label: "कार्यशैली",
      title: "मैं इंजीनियरिंग कैसे करता हूँ।",
    },
    contact: {
      index: "07",
      label: "संपर्क",
      title: "बात करते हैं।",
    },
    testimonials: {
      index: "08",
      label: "संदर्भ",
      title: "साथ काम कर चुके लोग क्या कहते हैं।",
    },
  },
  labels: {
    role: "भूमिका",
    architecture: "आर्किटेक्चर",
    period: "अवधि",
    category: "श्रेणी",
    technologies: "तकनीकें",
    context: "संदर्भ",
    approach: "दृष्टिकोण",
    decisions: "प्रमुख निर्णय",
    features: "कार्यान्वयन",
    outcomes: "परिणाम",
    links: "लिंक",
    experience: "अनुभव",
    stack: "तकनीकी स्टैक",
    project: "प्रोजेक्ट",
    architectureDiagram: "आर्किटेक्चर",
    education: "शिक्षा",
    achievements: "उपलब्धियाँ",
    codingProfiles: "प्रतियोगी प्रोग्रामिंग",
  },
  projects: [
    {
      slug: "secureplus",
      title: "SecurePlus",
      category: "ईमेल DLP गेटवे",
      period: "2026",
      featured: true,
      summary:
        "मल्टी-टेनेंट डेटा लॉस प्रिवेंशन प्लेटफ़ॉर्म: एक आउटबाउंड ईमेल गेटवे जो हर संदेश को बाहर जाने से पहले जाँचता है, और एक स्कैनर जो क्लाउड स्टोरेज में संवेदनशील डेटा खोजता है।",
      role: "अकेले · डिज़ाइन और निर्माण",
      architecture: "मॉड्यूलर मोनोलिथ + स्ट्रीम वर्कर",
      tech: ["Go", "Gin", "Redis Streams", "PostgreSQL", "MongoDB", "Next.js"],
      context:
        "संवेदनशील डेटा के किसी संस्थान से बाहर जाने का सबसे आम रास्ता आउटबाउंड ईमेल है, और भारत का DPDP अधिनियम उस रिसाव को अनुपालन की समस्या बना देता है। मैं पूरा रास्ता स्वयं बनाना चाहता था: मेल लेना, तय करना कि उसे बाहर जाने देना है या नहीं, और बीच में वर्कर मरने पर भी कोई संदेश खोए बिना उसे पहुँचाना।",
      approach:
        "मेल SMTP या REST API से आता है और भेजने वाले को 250 OK मिलने से पहले Redis Stream में लिखा जाता है। कंज़्यूमर ग्रुप के वर्कर टेक्स्ट को सामान्य करते हैं, एक ही पास में Aho-Corasick और RE2 जाँच चलाते हैं, भेजने वाले की पॉलिसी लागू करते हैं, और संदेश को या तो सूचना के साथ रोकते हैं या DKIM हस्ताक्षर के साथ आगे भेजते हैं। संदेश तभी ACK होता है जब उसका परिणाम दर्ज हो चुका हो।",
      decisions: [
        {
          title: "वही स्वीकारें जो टिकाऊ है",
          detail:
            "SMTP 250 तभी लौटाया जाता है जब संदेश सुरक्षित रूप से स्ट्रीम में हो, और स्ट्रीम एंट्री तभी ACK होती है जब डिलीवरी परिणाम सहेजा जा चुका हो। क्रैश हुए कंज़्यूमर के पास अटके संदेश XAUTOCLAIM से वापस लिए जाते हैं।",
        },
        {
          title: "कीवर्ड कितने भी हों, टेक्स्ट पर एक ही पास",
          detail:
            "हाथ से बनाया Aho-Corasick ऑटोमेटन हर कीवर्ड एक ही स्कैन में मिलाता है, और Go का RE2 रैखिक समय में चलता है, इसलिए कोई शत्रुतापूर्ण पैटर्न ReDoS नहीं कर सकता। यूनिकोड नक़ल की चालें पकड़ने के लिए पहले NFKC नॉर्मलाइज़ेशन चलता है।",
        },
        {
          title: "दो खुले टैब में भी टिकने वाला टोकन रोटेशन",
          detail:
            "रिफ़्रेश टोकन Redis Lua स्क्रिप्ट में परमाणु रूप से घूमते हैं। एक छोटी छूट अवधि समवर्ती अनुरोध को पहले जारी किया गया उत्तराधिकारी लौटा देती है, इसलिए सामान्य उपयोगकर्ता पकड़े नहीं जाते जबकि असली टोकन पुनः उपयोग फिर भी अस्वीकार होता है।",
        },
      ],
      features: [
        "Redis Streams में SMTP इनग्रेस (go-smtp) और REST इनजेशन",
        "NFKC-सामान्यीकृत टेक्स्ट पर Aho-Corasick + RE2 जाँच",
        "प्रति-प्रेषक कंटेंट, प्राप्तकर्ता-डोमेन और अटैचमेंट पॉलिसी",
        "DKIM हस्ताक्षर, MX रिज़ॉल्यूशन, अवसरवादी STARTTLS, प्रति-प्राप्तकर्ता पुनः प्रयास",
        "S3, Google Drive और Microsoft 365 के लिए क्लाउड डिस्कवरी स्कैनर, ज़िप-बम और आकार सुरक्षा सहित",
        "HKDF-व्युत्पन्न, संस्करणित कुंजियों के साथ AES-256-GCM क्रेडेंशियल एन्क्रिप्शन",
        "CSRF डबल-सबमिट कुकी, Redis दर सीमा, सूक्ष्म RBAC",
        "घटना ऑडिट, एनालिटिक्स और EN / JA / ES स्थानीयकरण के साथ Next.js कंसोल",
      ],
      outcomes: [
        "490+ Go टेस्ट फ़ंक्शन; हर पुश पर GitHub Actions में 440+ चलते हैं",
        "secureplus.ryugasystem.online पर लाइव तैनात",
      ],
      links: [
        { label: "लाइव डेमो", href: "https://secureplus.ryugasystem.online/" },
        { label: "सोर्स", href: "https://github.com/ryuga001/SecurePlus" },
      ],
      media: {
        image: {
          src: "/projects/secureplus.png",
          alt: "SecurePlus पॉलिसी और घटना कंसोल",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/secureplus-demo.webm",
          preview: "/projects/secureplus-preview.webm",
          alt: "SecurePlus डेमो",
        },
      },
      artwork: {
        kind: "pipeline",
        caption: "secureplus-delivery // redis-stream",
        ruleset: "POLICY: PER_SENDER",
        badge: "DKIM · STARTTLS",
        streamTitle: "लाइव निरीक्षण पाइपलाइन",
        stages: [
          "NFKC सामान्यीकरण",
          "Aho-Corasick + RE2 स्कैन",
          "पॉलिसी निर्णय · रिले",
        ],
        metaTitle: "स्ट्रीम मेटाडेटा",
        meta: [
          "group: delivery consumers",
          "ack: after outcome recorded",
          "recovery: XAUTOCLAIM",
          "tenant: scoped per customer",
        ],
        footnote: "at-least-once डिलीवरी",
      },
    },
    {
      slug: "tutorpilot",
      title: "TutorPilot",
      category: "मल्टी-टेनेंट SaaS",
      period: "जुलाई — अगस्त 2026",
      featured: true,
      summary:
        "ऑनलाइन ट्यूटरिंग व्यवसाय चलाने का प्लेटफ़ॉर्म: हर संस्था को स्टाफ़, कोर्स, बैच, लाइव क्लास और फ़ाइलों के लिए अपना अलग स्थान मिलता है।",
      role: "अकेले · डिज़ाइन और निर्माण",
      architecture: "मॉड्यूलर मोनोलिथ + ट्रांज़ैक्शनल आउटबॉक्स",
      tech: ["Go", "PostgreSQL", "Redis Streams", "LiveKit", "MinIO", "Next.js"],
      context:
        "छोटे कोचिंग व्यवसाय वीडियो कॉल, स्प्रेडशीट और शेयर्ड ड्राइव जोड़-जोड़कर काम चलाते हैं। मैंने एक ऐसा सिस्टम बनाया जहाँ संस्था साइन अप करती है, अपनी भूमिकाएँ तय करती है, कोर्स बनाती है, उन्हें निर्धारित बैच के रूप में चलाती है, और लाइव क्लास पढ़ाती है जो स्वतः रिकॉर्ड होती हैं।",
      approach:
        "Go बैकएंड साझा आंतरिक पैकेज के पीछे मॉड्यूल (auth, admin, notification) में बँटा है। लिखने के बाद जो भी होना चाहिए, जैसे सत्यापन ईमेल भेजना, उसे उसी Postgres ट्रांज़ैक्शन में इवेंट के रूप में सहेजा जाता है और बाद में Redis Streams तक पहुँचाया जाता है, ताकि डेटाबेस और दुष्प्रभाव अलग न हो सकें।",
      decisions: [
        {
          title: "दोहरे लेखन की जगह ट्रांज़ैक्शनल आउटबॉक्स",
          detail:
            "इवेंट उसी ट्रांज़ैक्शन में डाले जाते हैं जिसमें व्यावसायिक डेटा। एक रिले उन्हें FOR UPDATE SKIP LOCKED से लेता है, इसलिए कई रिले बिना दोहरे प्रकाशन के चल सकते हैं।",
        },
        {
          title: "विफलताएँ सहेजी जाती हैं, गिराई नहीं जातीं",
          detail:
            "कंज़्यूमर रुके संदेश XAUTOCLAIM से वापस लेते हैं, त्रुटियों को पुनः प्रयास के लिए वर्गीकृत करते हैं, और ख़राब संदेशों को डेड-लेटर टेबल में डालते हैं जिन्हें जाँचा और दोबारा चलाया जा सकता है।",
        },
        {
          title: "हर टेनेंट के लिए अलग साइनिंग सीक्रेट",
          detail:
            "हर संस्था का अपना JWT सीक्रेट होता है, जो Redis में कैश रहता है, इसलिए एक टेनेंट के लिए जारी टोकन दूसरे में सत्यापित नहीं हो सकता।",
        },
      ],
      features: [
        "Swagger दस्तावेज़ के साथ 74 REST एंडपॉइंट और 14 संस्करणित माइग्रेशन",
        "प्रति संस्था स्कीमा-आधारित भूमिकाएँ और अधिकार",
        "कोर्स, बैच, ट्यूटर नियुक्ति और छात्र नामांकन",
        "MinIO पर सर्वर-साइड रिकॉर्डिंग के साथ LiveKit क्लासरूम",
        "MinIO ऑब्जेक्ट स्टोरेज पर प्रति बैच साझा फ़ाइल ड्राइव",
      ],
      outcomes: [
        "80 Go यूनिट और इंटीग्रेशन टेस्ट, आउटबॉक्स रोलबैक व्यवहार सहित",
      ],
      links: [{ label: "सोर्स", href: "https://github.com/ryuga001/TutorPilot" }],
      artwork: {
        kind: "mesh",
        caption: "TENANT_ISOLATION // SAAS_CORE",
        hub: "TENANT",
        nodes: [
          "प्रति-टेनेंट JWT",
          "स्कीमा RBAC",
          "LiveKit रूम",
          "MinIO ड्राइव",
        ],
        footnote: "OUTBOX: SKIP LOCKED RELAY · DLQ REPLAYABLE",
      },
    },
    {
      slug: "sahara",
      title: "Sahara",
      category: "AI करियर प्लेटफ़ॉर्म",
      period: "जून — जुलाई 2026",
      featured: true,
      summary:
        "AI करियर सहायक जो रिट्रीवल-ऑगमेंटेड जनरेशन से रिज़्यूमे को स्कोर और दोबारा लिखता है, और बैकग्राउंड में पूरे लर्निंग कोर्स बनाता है।",
      role: "अकेले · बैकएंड",
      architecture: "Django API + RabbitMQ वर्कर",
      tech: ["Python", "Django", "PostgreSQL", "pgvector", "Gemini", "RabbitMQ"],
      context:
        "सामान्य AI रिज़्यूमे टूल अस्पष्ट सलाह देते हैं क्योंकि उन्हें पढ़ने वाले के असली रिज़्यूमे या भूमिका के बारे में कुछ पता नहीं होता। मुझे ऐसा फ़ीडबैक चाहिए था जो उपयोगकर्ता की अपनी सामग्री पर टिका हो, और ऐसी कोर्स जनरेशन जो LLM के दर्जनों पाठ लिखते समय वेब अनुरोध को रोके नहीं।",
      approach:
        "रिज़्यूमे पार्स, एम्बेड और pgvector में सहेजे जाते हैं। समीक्षा माँगने पर सबसे प्रासंगिक अंश कोसाइन दूरी से लिए जाते हैं और Gemini को दिए जाते हैं, जो संरचित स्कोर और पुनर्लेखन लौटाता है। कोर्स जनरेशन RabbitMQ क्यू पर डाला जाता है और सबटॉपिक, कंटेंट तथा बल्क कार्यों के लिए अलग वर्कर संभालते हैं।",
      decisions: [
        {
          title: "प्रॉम्प्ट से पहले रिट्रीवल",
          detail:
            "प्रॉम्प्ट में केवल निकटतम रिज़्यूमे अंश जाते हैं, जिससे उत्तर उपयोगकर्ता के लिए विशिष्ट रहते हैं और टोकन उपयोग सीमित रहता है।",
        },
        {
          title: "वर्कर अपना अधूरा काम स्वयं संभालते हैं",
          detail:
            "शुरू होते ही हर वर्कर उन आइटम को रीसेट करता है जो किसी क्रैश हुई प्रक्रिया ने अधूरा छोड़ा था, इसलिए पुनः आरंभ वहीं से उठाता है जहाँ पिछला रुका था।",
        },
        {
          title: "ख़राब संदेश अनंत लूप में नहीं घूमते",
          detail:
            "विफल संदेश बार-बार क़तार में डालने के बजाय स्वीकार कर दर्ज किए जाते हैं, ताकि एक ख़राब कार्य पूरी क्यू न रोके।",
        },
      ],
      features: [
        "रिज़्यूमे और कोर्स एम्बेडिंग पर pgvector समानता खोज",
        "संरचित ATS स्कोर और पुनर्लेखन लौटाने वाले Gemini प्रॉम्प्ट",
        "प्लग करने योग्य रिज़्यूमे एन्हांसर (कीवर्ड, स्किल, सारांश) और PDF फ़ॉर्मेटर",
        "कोर्स जनरेशन के लिए टिकाऊ क्यू वाले तीन RabbitMQ वर्कर",
      ],
      outcomes: [
        "GitHub Actions CI में 141 टेस्ट",
        "फ्रंटएंड Vercel पर तैनात",
      ],
      links: [
        { label: "लाइव डेमो", href: "https://sahara-frontend-gamma.vercel.app/" },
        {
          label: "बैकएंड सोर्स",
          href: "https://github.com/ryuga001/SaharaBackend",
        },
        {
          label: "फ्रंटएंड सोर्स",
          href: "https://github.com/ryuga001/SaharaFrontend",
        },
      ],
      media: {
        image: {
          src: "/projects/sahara.png",
          alt: "Sahara रिज़्यूमे विश्लेषण इंटरफ़ेस",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/sahara-demo.webm",
          preview: "/projects/sahara-preview.webm",
          alt: "Sahara डेमो",
        },
      },
      artwork: {
        kind: "scanner",
        caption: "RESUME_PIPELINE // RAG",
        source: "resume upload",
        format: "PDF",
        processor: { label: "एम्बेडर", value: "वेक्टर एनकोड" },
        classifier: { label: "RETRIEVAL", value: "pgvector कोसाइन" },
        classifierNote: "Gemini संरचित आउटपुट",
        logTitle: "PIPELINE_REPORT",
        logs: [
          "रिज़्यूमे पार्स कर अंशों में बाँटा गया",
          "कोसाइन दूरी से निकटतम अंश लिए गए",
          "कोर्स कार्य तीन RabbitMQ वर्कर को भेजे गए",
        ],
      },
    },
    {
      slug: "rental-management",
      title: "Rental Management System",
      category: "माइक्रोसर्विस प्लेटफ़ॉर्म",
      period: "अप्रैल — मई 2026",
      featured: false,
      summary:
        "मकान मालिकों और किरायेदारों के लिए रेंटल प्लेटफ़ॉर्म, जो गेटवे के पीछे Spring Boot सेवाओं में बँटा है और इवेंट-आधारित सूचनाएँ भेजता है।",
      role: "अकेले · फुल स्टैक",
      architecture: "माइक्रोसर्विस",
      tech: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "MongoDB", "Next.js"],
      context:
        "मैंने इसे Java माइक्रोसर्विस स्टैक ठीक से सीखने के लिए बनाया: सर्विस डिस्कवरी, एक गेटवे, सेवाओं के बीच असिंक्रोनस संदेश, और तब क्या होता है जब कोई सेवा धीमी या बंद हो।",
      approach:
        "Eureka में पंजीकृत admin, reporting और notification सेवाओं के आगे एक Spring Cloud गेटवे है। सेवाएँ RabbitMQ पर इवेंट प्रकाशित करती हैं; notification सेवा उन्हें ईमेल और लाइव WebSocket पुश में बदलती है, और reporting सेवा ऑडिट इतिहास MongoDB में रखती है।",
      decisions: [
        {
          title: "एक ही बार, किनारे पर प्रमाणीकरण",
          detail:
            "गेटवे प्रमाणीकरण संभालता है, इसलिए पीछे की सेवाओं को टोकन जाँच दोबारा लागू नहीं करनी पड़ती।",
        },
        {
          title: "सूचनाओं के लिए सीधे कॉल नहीं, इवेंट",
          detail:
            "सेवाएँ notification सेवा को सीधे बुलाने के बजाय RabbitMQ पर प्रकाशित करती हैं, इसलिए धीमा मेल सर्वर कभी उपयोगकर्ता अनुरोध को धीमा नहीं करता।",
        },
        {
          title: "अंतर-सेवा कॉल पर सर्किट ब्रेकर",
          detail:
            "reporting सेवा अपनी Feign कॉल Resilience4j सर्किट ब्रेकर में लपेटती है, इसलिए विफल निर्भरता एक फ़ीचर को प्रभावित करती है, पूरे सिस्टम को नहीं।",
        },
      ],
      features: [
        "Eureka सर्विस डिस्कवरी के साथ Spring Cloud Gateway",
        "सूचनाओं और ऑडिट ट्रेल के लिए RabbitMQ इवेंट",
        "notification सेवा से ईमेल और STOMP WebSocket पुश",
        "reporting सेवा में MongoDB ऑडिट और चैट इतिहास",
        "हर सेवा के लिए Dockerfile और एक Next.js फ्रंटएंड",
      ],
      outcomes: [],
      links: [
        {
          label: "सोर्स",
          href: "https://github.com/ryuga001/Rental-Mangament-Platform",
        },
      ],
      artwork: {
        kind: "grid",
        caption: "RENTAL_PLATFORM // SERVICES",
        title: "सर्विस टोपोलॉजी",
        series: ["gateway", "notify", "report"],
        rows: [
          { label: "discovery", value: "Eureka" },
          { label: "events", value: "RabbitMQ" },
          { label: "resilience", value: "Resilience4j" },
        ],
        footnote: "एक गेटवे के पीछे चार Spring Boot सेवाएँ",
      },
    },
  ],
  capabilities: [
    {
      index: "01",
      kind: "CORE",
      title: "बैकएंड सिस्टम",
      description:
        "API, क्यू कंज़्यूमर और बैच पाइपलाइन — इस स्थिति के लिए बनाए गए कि वर्कर बीच काम में मर जाए, पुनः प्रयास, रिकवरी और डेड-लेटर हैंडलिंग सहित।",
      badges: ["Java", "Go", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
      icon: "layers",
    },
    {
      index: "02",
      kind: "DELIVERY",
      title: "फुल-स्टैक प्रोडक्ट",
      description:
        "डेटाबेस स्कीमा से चलते डैशबोर्ड तक फ़ीचर ले जाना, जिसमें ऑथ फ़्लो, एडमिन कंसोल और स्थानीयकरण शामिल हैं।",
      badges: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
      icon: "grid",
    },
    {
      index: "03",
      kind: "DEFENCE",
      title: "सुरक्षा इंजीनियरिंग",
      description:
        "डेटा लॉस प्रिवेंशन, SIEM लॉग फ़ॉरवर्डिंग, टोकन रोटेशन, टेनेंट अलगाव और सहेजे गए क्रेडेंशियल का एन्क्रिप्शन।",
      badges: ["DLP", "SIEM", "JWT", "RBAC", "DKIM"],
      icon: "shield",
    },
    {
      index: "04",
      kind: "FOUNDATIONS",
      title: "एल्गोरिदम और डिज़ाइन",
      description:
        "प्रोडक्शन समस्याओं पर लागू प्रतियोगी प्रोग्रामिंग: समानता खोज, बहु-पैटर्न मिलान, दर सीमा और निष्पक्ष शेड्यूलिंग।",
      badges: ["सिस्टम डिज़ाइन", "डेटा संरचनाएँ", "माइग्रेशन", "CI/CD"],
      icon: "clock",
    },
  ],
  about: {
    quote:
      "सिस्टम का दिलचस्प हिस्सा आमतौर पर वही होता है जो विफल होने तक किसी को दिखता नहीं: वह क्यू जिसे क्रैश झेलना है, या वह जाँच जिसे हर बार सही होना है।",
    paragraphs: [
      "मैं पुणे में MiniOrange में बैकएंड इंजीनियर हूँ, जहाँ मैं सुरक्षा डेटा प्लेटफ़ॉर्म पर काम करता हूँ: एंडपॉइंट के लिए फ़िंगरप्रिंट-आधारित DLP इंजन, SIEM लॉग-फ़ॉरवर्डिंग सेवा, क्लाउड डेटा डिस्कवरी कनेक्टर, और एक बल्क-एक्सपोर्ट पाइपलाइन जो प्रति रन एक करोड़ से अधिक इवेंट संसाधित करती है।",
      "मैं बैकएंड काम तक M.B.M विश्वविद्यालय, जोधपुर में प्रतियोगी प्रोग्रामिंग से पहुँचा। मैंने 2023 में ICPC एशिया रीजनल के लिए क्वालिफ़ाई किया, 37 रेटेड कॉन्टेस्ट में Codeforces पर Specialist तक पहुँचा, और Codeforces, LeetCode तथा CodeChef पर 1,200 से अधिक प्रश्न हल किए हैं।",
      "काम के बाहर मैं नए स्टैक ठीक से सीखने के लिए पूरे सिस्टम स्वयं बनाता हूँ: Go में ईमेल DLP गेटवे, मल्टी-टेनेंट ट्यूटरिंग प्लेटफ़ॉर्म, Python में AI करियर सहायक, और एक Java माइक्रोसर्विस प्लेटफ़ॉर्म।",
    ],
    cardTitle: "प्रोफ़ाइल",
    cardRows: [
      { label: "वर्तमान भूमिका", value: "MiniOrange में SDE" },
      { label: "स्थान", value: "पुणे, भारत" },
      { label: "मुख्य स्टैक", value: "Java · Go · PostgreSQL" },
      { label: "उपलब्ध", value: "रिमोट और रीलोकेशन" },
    ],
  },
  experience: [
    {
      period: "जुलाई 2025 — अब तक",
      role: "सॉफ़्टवेयर डेवलपमेंट इंजीनियर",
      org: "MiniOrange · पुणे, भारत",
      description:
        "सुरक्षा डेटा प्लेटफ़ॉर्म बनाना: एंडपॉइंट डेटा लॉस प्रिवेंशन, SIEM लॉग फ़ॉरवर्डिंग, क्लाउड डेटा डिस्कवरी और मल्टी-टेनेंट एक्सपोर्ट पाइपलाइन।",
      highlights: [
        "HTTP/TCP पर JSON और Syslog आउटपुट वाली SIEM लॉग-फ़ॉरवर्डिंग माइक्रोसर्विस बनाई, जो LMAX Disruptor लॉक-फ़्री पाइपलाइन पर आधारित है और बिना किसी संदेश हानि के 2,000 से अधिक इवेंट प्रति सेकंड बनाए रखती है तथा प्रति-वेंडर दर सीमा लागू करती है।",
        "Java, Spring Batch, AWS S3, Redis और RabbitMQ में वितरित बल्क-एक्सपोर्ट पाइपलाइन बनाई जो प्रति रन एक करोड़ से अधिक सुरक्षा इवेंट संसाधित करती है; प्रति-टेनेंट Redis टोकन-बकेट दर सीमा, प्रोसेसिंग-समय कोटा और RabbitMQ प्राथमिकता क्यू से 100+ टेनेंट में निष्पक्ष शेड्यूलिंग सुनिश्चित की और नॉइज़ी-नेबर समस्या समाप्त की।",
        "100+ टेनेंट, प्रत्येक में 100+ डिवाइस, के लिए कंटेंट-आधारित DLP इंजन डिज़ाइन किया, जिसमें सबलीनियर समानता खोज के लिए CDC चंकिंग के साथ MinHash/LSH का उपयोग है और फ़िंगरप्रिंट मिलान तभी चलता है जब पॉलिसी शर्तें पूरी हों; सिग्नेचर MongoDB से ऑन-डिवाइस SQLite में समन्वित होते हैं जिससे पूरी तरह ऑफ़लाइन उल्लंघन पहचान संभव है।",
        "क्लाउड डेटा डिस्कवरी शुरू से अंत तक दी — AWS S3, Azure Blob Storage, Google Drive और SharePoint के लिए कनेक्टर आर्किटेक्चर, इनजेशन और प्रोसेसिंग पाइपलाइन।",
      ],
    },
    {
      period: "मई 2024 — जुलाई 2024",
      role: "Node.js बैकएंड इंटर्न",
      org: "Celebal Technologies",
      description:
        "रिलेशनल और डॉक्यूमेंट दोनों डेटाबेस पर Node.js और Express.js से REST API बनाए।",
      highlights: [
        "REST एंडपॉइंट के एक समूह में राउटिंग, मिडलवेयर और अनुरोध सत्यापन लागू किया।",
        "एक ही सेवा में रिलेशनल और डॉक्यूमेंट दोनों डेटा स्टोर के साथ काम किया।",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. कंप्यूटर साइंस",
      org: "M.B.M विश्वविद्यालय, जोधपुर",
      period: "2021 — 2025",
      detail:
        "CGPA 8.01 / 10 · डेटा संरचनाएँ और एल्गोरिदम, ऑपरेटिंग सिस्टम, डेटाबेस इंजीनियरिंग, वितरित सिस्टम",
    },
  ],
  achievements: [
    {
      title: "ICPC एशिया रीजनलिस्ट 2023",
      detail: "ICPC एशिया रीजनल राउंड के लिए क्वालिफ़ाई कर भाग लिया।",
      href: "https://icpc.global",
    },
    {
      title: "Codeforces Specialist",
      detail: "37 रेटेड कॉन्टेस्ट में Specialist तक पहुँचा।",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      title: "1,200+ प्रश्न हल किए",
      detail: "Codeforces, LeetCode और CodeChef पर।",
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
      title: "भाषाएँ",
      items: ["Java", "Go", "Python", "C++", "TypeScript", "SQL"],
    },
    {
      title: "बैकएंड और फ़्रेमवर्क",
      items: ["Spring Boot", "Spring Batch", "Gin", "Django", "Node.js", "REST"],
    },
    {
      title: "स्टोरेज और मैसेजिंग",
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
      title: "इंफ़्रास्ट्रक्चर और फ्रंटएंड",
      items: ["AWS S3", "Docker", "GitHub Actions", "Linux", "Next.js", "React"],
    },
  ],
  principles: [
    {
      title: "वही स्वीकारें जो टिकाऊ है।",
      detail:
        "SecurePlus SMTP 250 तभी लौटाता है जब संदेश स्ट्रीम में हो, और TutorPilot अपने इवेंट डेटा के साथ उसी ट्रांज़ैक्शन में लिखता है। सफलता का उत्तर का अर्थ होना चाहिए कि काम खो नहीं सकता।",
    },
    {
      title: "मान लें कि वर्कर क्रैश होगा।",
      detail:
        "मेरा बनाया हर क्यू कंज़्यूमर रुके संदेश वापस ले सकता है, पुनः आरंभ पर अधूरे काम जारी रख सकता है, और ख़राब संदेश ऐसी जगह रख सकता है जहाँ से दोबारा चलाए जा सकें।",
    },
    {
      title: "अलगाव को संरचनात्मक बनाएँ।",
      detail:
        "टेनेंट सीमाएँ कुंजियों और स्कीमा में होनी चाहिए, जैसे प्रति संस्था एक JWT सीक्रेट — न कि ऐसे फ़िल्टर में जिसे कोई क्वेरी में जोड़ना भूल सकता है।",
    },
    {
      title: "विफलता के रास्ते भी परखें।",
      detail:
        "सही रास्ता आसान हिस्सा है। मेरे टेस्ट रोलबैक, दोबारा इस्तेमाल किए टोकन, बहुत बड़ी फ़ाइलें और शत्रुतापूर्ण रेगेक्स पैटर्न भी जाँचते हैं।",
    },
  ],
  testimonials: [],
  contact: {
    title: "बैकएंड या प्लेटफ़ॉर्म भूमिका के लिए खोज रहे हैं?",
    subtitle:
      "मैं वितरित सिस्टम, उच्च-थ्रूपुट पाइपलाइन या सुरक्षा इंफ़्रास्ट्रक्चर में बैकएंड इंजीनियरिंग भूमिकाएँ खोज रहा हूँ — रिमोट या रीलोकेशन के साथ। यहाँ दिए किसी भी प्रोजेक्ट पर बात करने में भी ख़ुशी होगी।",
    emailLabel: "सीधा ईमेल",
    responseNote: "मैं स्वयं उत्तर देता हूँ, आमतौर पर 24 घंटे में।",
    notesTitle: "जानने योग्य",
    notes: [
      "वर्तमान में पुणे में MiniOrange में पूर्णकालिक SDE।",
      "रिमोट भूमिकाओं और रीलोकेशन दोनों के लिए उपलब्ध।",
      "Java/Spring और Go दोनों कोडबेस में सहज।",
    ],
    helpsWithTitle: "जिन भूमिकाओं में रुचि है",
    helpsWith: [
      "वितरित सिस्टम पर बैकएंड इंजीनियरिंग",
      "उच्च-थ्रूपुट डेटा और इवेंट पाइपलाइन",
      "सुरक्षा, DLP या आइडेंटिटी इंफ़्रास्ट्रक्चर",
      "ऐसी प्लेटफ़ॉर्म टीमें जो विश्वसनीयता की पूरी ज़िम्मेदारी लेती हैं",
    ],
    mailSubject: "आपके पोर्टफ़ोलियो से नमस्ते",
  },
  pages: {
    work: {
      kicker: "चुनिंदा काम",
      title: "जो सिस्टम मैंने डिज़ाइन किए और बनाए।",
      description:
        "व्यक्तिगत प्रोजेक्ट, हर एक के पीछे का संदर्भ और उसे आकार देने वाले निर्णय सहित। MiniOrange का मेरा काम अनुभव के अंतर्गत संक्षेप में है।",
    },
    about: {
      kicker: "परिचय",
      title: "बैकएंड इंजीनियर, प्रतियोगी प्रोग्रामर।",
      description:
        "दिन में सुरक्षा डेटा प्लेटफ़ॉर्म, और अपने समय में Go, Python तथा Java में पूरे सिस्टम।",
    },
    contact: {
      kicker: "संपर्क",
      title: "बात करते हैं।",
      description:
        "मुझ तक पहुँचने का सबसे तेज़ रास्ता ईमेल है। भूमिका के बारे में बताइए या जो चर्चा करनी हो वह लिखिए।",
    },
    notFound: {
      kicker: "404",
      title: "यह पेज मौजूद नहीं है।",
      description:
        "शायद लिंक पुराना हो गया है। आगे बढ़ने के लिए काम की सूची अच्छी जगह है।",
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
      "भरोसेमंद पाइपलाइन, सुरक्षा इंफ़्रास्ट्रक्चर और उन पर बने प्रोडक्ट बनाने वाला बैकएंड इंजीनियर।",
    navTitle: "नेविगेशन",
    connectTitle: "जुड़ें",
    rights: "सर्वाधिकार सुरक्षित।",
  },
} satisfies SiteContent;

export default hi;
