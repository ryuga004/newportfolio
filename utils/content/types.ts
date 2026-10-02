export const locales = ["en", "hi", "ja", "es", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export type NavItem = {
  label: string;
  href: string;
};

export type Social = {
  label: string;
  handle: string;
  href: string;
};

export type MetaPair = {
  label: string;
  value: string;
};

export type SectionMeta = {
  index: string;
  label: string;
  title: string;
};

export type HeroDiagram = {
  caption: string;
  status: string;
  ingress: MetaPair;
  worker: MetaPair;
  core: MetaPair;
  coreNote: string;
  store: MetaPair;
  cache: MetaPair;
};

export type PipelineArtwork = {
  kind: "pipeline";
  caption: string;
  ruleset: string;
  badge: string;
  streamTitle: string;
  stages: [string, string, string];
  metaTitle: string;
  meta: [string, string, string, string];
  footnote: string;
};

export type ScannerArtwork = {
  kind: "scanner";
  caption: string;
  source: string;
  format: string;
  processor: MetaPair;
  classifier: MetaPair;
  classifierNote: string;
  logTitle: string;
  logs: [string, string, string];
};

export type MeshArtwork = {
  kind: "mesh";
  caption: string;
  hub: string;
  nodes: [string, string, string, string];
  footnote: string;
};

export type GridArtwork = {
  kind: "grid";
  caption: string;
  title: string;
  series: [string, string, string];
  rows: [MetaPair, MetaPair, MetaPair];
  footnote: string;
};

export type Artwork =
  | PipelineArtwork
  | ScannerArtwork
  | MeshArtwork
  | GridArtwork;

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectVideo = {
  src: string;
  preview?: string;
  alt: string;
};

export type ProjectMedia = {
  image?: ProjectImage;
  video?: ProjectVideo;
};

export type Decision = {
  title: string;
  detail: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  period: string;
  featured: boolean;
  summary: string;
  role: string;
  architecture: string;
  tech: string[];
  context: string;
  approach: string;
  decisions: Decision[];
  features: string[];
  outcomes: string[];
  links: ProjectLink[];
  artwork: Artwork;
  media?: ProjectMedia;
};

export type CapabilityIcon = "layers" | "grid" | "shield" | "clock";

export type Capability = {
  index: string;
  kind: string;
  title: string;
  description: string;
  badges: string[];
  icon: CapabilityIcon;
};

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  description: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Achievement = {
  title: string;
  detail: string;
  href?: string;
};

export type EducationItem = {
  degree: string;
  org: string;
  period: string;
  detail: string;
};

export type CodingProfile = {
  platform: string;
  rating: string;
  href: string;
};

export type Principle = {
  title: string;
  detail: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type PageIntro = {
  kicker: string;
  title: string;
  description: string;
};

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    template: string;
    description: string;
  };
  profile: {
    name: string;
    initials: string;
    role: string;
    disciplines: string;
    location: string;
    email: string;
    availability: string;
    resumeUrl: string;
  };
  nav: NavItem[];
  actions: {
    viewWork: string;
    letsTalk: string;
    viewCaseStudy: string;
    viewAllWork: string;
    readMore: string;
    downloadResume: string;
    viewCode: string;
    viewLive: string;
    startConversation: string;
    copyEmail: string;
    copied: string;
    previousProject: string;
    nextProject: string;
    backToWork: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
    language: string;
  };
  hero: {
    badge: string;
    eyebrow: string;
    headline: {
      lead: string;
      accent: string;
      trail: string;
    };
    lead: string;
    meta: [MetaPair, MetaPair, MetaPair];
    diagram: HeroDiagram;
    stats: [MetaPair, MetaPair, MetaPair];
  };
  sections: {
    work: SectionMeta;
    capabilities: SectionMeta;
    about: SectionMeta;
    experience: SectionMeta;
    principles: SectionMeta;
    credentials: SectionMeta;
    contact: SectionMeta;
    testimonials: SectionMeta;
  };
  labels: {
    role: string;
    architecture: string;
    period: string;
    category: string;
    technologies: string;
    context: string;
    approach: string;
    decisions: string;
    features: string;
    outcomes: string;
    links: string;
    experience: string;
    stack: string;
    project: string;
    architectureDiagram: string;
    education: string;
    achievements: string;
    codingProfiles: string;
  };
  projects: Project[];
  capabilities: Capability[];
  about: {
    quote: string;
    paragraphs: string[];
    cardTitle: string;
    cardRows: MetaPair[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: Achievement[];
  codingProfiles: CodingProfile[];
  skills: SkillGroup[];
  principles: Principle[];
  testimonials: Testimonial[];
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    responseNote: string;
    notesTitle: string;
    notes: string[];
    helpsWithTitle: string;
    helpsWith: string[];
    mailSubject: string;
  };
  pages: {
    work: PageIntro;
    about: PageIntro;
    contact: PageIntro;
    notFound: PageIntro;
  };
  socials: Social[];
  footer: {
    description: string;
    navTitle: string;
    connectTitle: string;
    rights: string;
  };
};
