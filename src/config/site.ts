export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  id: string;
  category: "product" | "enterprise" | "tools";
  title: string;
  description: string;
  bullets?: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlight?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const siteConfig = {
  name: "Joseph",
  fullName: "Joseph Dennis Reyes",
  role: "Software Engineer",
  tagline:
    "I build thoughtful web and mobile experiences, backed by reliable systems.",
  about: [
    "I’m Joseph, a software engineer based in the Philippines. I work across the full stack, from the first screen someone touches to the APIs and data that keep it running.",
    "My work spans property reporting, mobile apps, HR analytics, and AI-powered products. I enjoy making complex workflows feel simple, with a close eye on usability, thoughtful details, and the people using what I build.",
  ],
  email: "josephdennisreyes@gmail.com",
  location: "Philippines · GMT+8",
  /** Served from `public/` — keep URL path-only for same-origin download */
  resumeUrl: "/joseph-dennis-reyes-resume.pdf",
  resumeDownloadFileName: "Joseph Dennis Reyes - Full Stack Engineer Resume.pdf",
  socials: {
    github: "https://github.com/jodenrey",
    linkedin: "https://linkedin.com/in/jodenrey",
    email: "mailto:josephdennisreyes@gmail.com",
  },
  handles: {
    github: "jodenrey",
    linkedin: "jodenrey",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ] as NavItem[],
  skillGroups: [
    {
      category: "Frontend and Mobile",
      items: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "Expo",
      ],
    },
    {
      category: "Backend and Databases",
      items: [
        "C#",
        ".NET Core",
        "REST APIs",
        "Node.js",
        "PHP",
        "Python",
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      category: "Cloud and Tools",
      items: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Vercel",
        "CI/CD",
        "Linux",
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "Swagger",
        "Figma",
        "Claude Code",
        "Cursor",
      ],
    },
  ] as SkillGroup[],
  projects: [
    {
      id: "atlas-nhd",
      category: "enterprise",
      title: "AtlasNHD",
      description:
        "A production property and natural-hazard reporting platform, connecting property search, report ordering, geospatial analysis, and secure PDF delivery.",
      bullets: [
        "Built property-search and ordering workflows with address autocomplete, APN lookup, reverse geocoding, asynchronous report generation, status polling, cloud storage, secure PDF delivery, and report history.",
        "Implemented Property Exception Reports using geospatial parcel-buffer analysis with a 2.5-meter boundary across multiple hazard types, routing flagged reports through quality control (QC) before customer delivery.",
      ],
      stack: ["Next.js", "React", "TypeScript", "REST APIs", "AWS"],
      highlight: true,
    },
    {
      id: "vassist-ai",
      category: "product",
      title: "VAssist AI",
      description:
        "An 18-module SaaS platform bringing AI chat, CRM, invoicing, and subscription billing into one workspace, with secure isolation of each customer’s data.",
      bullets: [
        "Built an 18-module SaaS platform using Next.js, React, TypeScript, Supabase, and the Anthropic API, with AI chat, CRM, invoicing, and row-level security for multi-tenant data isolation.",
        "Integrated Stripe subscription billing, customer management, and the Customer Portal, with Zustand for shared state; supported real users and payments through testing, documentation, and UX improvements.",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Anthropic API",
        "Stripe",
        "Zustand",
      ],
      liveUrl: "https://vassist-ai.vercel.app/",
      highlight: true,
    },
    {
      id: "atlas-portal",
      category: "enterprise",
      title: "Atlas Portal",
      description:
        "An iOS and Android app for finding properties, viewing maps, ordering and tracking reports, and opening PDFs on the go.",
      bullets: [
        "Developed the Atlas Portal iOS and Android app with React Native, Expo, TypeScript, TanStack Query, and Zustand, supporting secure authentication, property search, maps, report ordering, tracking, and PDF viewing.",
        "Integrated Atlas SDI and Portal Admin APIs with JWT authentication and session restoration.",
      ],
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "TanStack Query",
        "Zustand",
      ],
      highlight: true,
    },
    {
      id: "design-genius",
      category: "product",
      title: "DesignGenius",
      description:
        "An AI-powered interior design platform with image generation and Stripe payments.",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "PostgreSQL",
        "Stripe",
        "Replicate",
      ],
      liveUrl: "https://design-genius.vercel.app/",
      repoUrl: "https://github.com/jodenrey/DesignGenius",
      highlight: true,
    },
    {
      id: "vineyard-attendance",
      category: "tools",
      title: "Vineyard Academy Attendance System",
      description:
        "Full-stack attendance system with facial recognition + QR authentication, role-based dashboards, and real-time tracking.",
      stack: [
        "Python",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "InsightFace",
        "OpenCV",
      ],
      repoUrl:
        "https://github.com/jodenrey/vineyard-facialrecog-qrcode-attendance-system",
    },
    {
      id: "hro-dashboard",
      category: "enterprise",
      title: "HRO Dashboard",
      description:
        "Internal HR analytics dashboard supporting 13,000+ employee records with real-time reporting, secure RBAC, and automated data validation workflows.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "C#",
        ".NET",
        "SQL Server",
      ],
      // Source code is private (company project).
      highlight: true,
    },
    {
      id: "web-scraping",
      category: "tools",
      title: "Web Scraping Platform",
      description:
        "Automated extraction and processing of 10,000+ records with a dashboard for dataset visualization and API integration.",
      stack: [
        "Python",
        "Requests",
        "BeautifulSoup",
        "Pandas",
        "Next.js",
        "TypeScript",
      ],
    },
    {
      id: "edoc",
      category: "product",
      title: "eDoc E-Channeling System",
      description:
        "Web-based platform for doctor appointments with admin, doctor, and patient portals—scheduling, booking, and PDF receipts/reports.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Composer"],
      repoUrl: "https://github.com/jodenrey/edoc",
    },
    {
      id: "hireit",
      category: "product",
      title: "Hireit",
      description:
        "College freelancing platform where lecturers post projects and students apply (solo or teams)—messaging, leaderboards, and project workflows.",
      stack: ["Laravel", "Vue.js", "Sass", "MySQL"],
      repoUrl: "https://github.com/jodenrey/Hireit",
    },
  ] as Project[],
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Atlas Geotech LLC",
      period: "June 2026 — Present",
      location: "Los Angeles, California, United States",
      bullets: [
        "Developed and maintained AtlasNHD, a production property and natural-hazard reporting platform using Next.js, React, TypeScript, REST APIs, and AWS across customer portals, internal workflows, and backend integrations.",
        "Built property-search and ordering workflows with address autocomplete, APN lookup, reverse geocoding, asynchronous report generation, status polling, cloud storage, secure PDF delivery, and report history.",
        "Implemented Property Exception Reports using geospatial parcel-buffer analysis with a 2.5-meter boundary across multiple hazard types, routing flagged reports through quality control (QC) before customer delivery.",
        "Developed the Atlas Portal iOS and Android app with React Native, Expo, TypeScript, TanStack Query, and Zustand, supporting secure authentication, property search, maps, report ordering, tracking, and PDF viewing.",
        "Integrated Atlas SDI and Portal Admin APIs with JWT authentication and session restoration; supported AWS deployments, CloudFront cache management, environment migrations, API routing, and production troubleshooting.",
      ],
    },
    {
      role: "Software Engineer",
      company: "ONETool Solutions, Inc.",
      period: "Mar 2026 — Sep 2026",
      location: "Makati, NCR, Philippines",
      bullets: [
        "Developed backend API integration services for a central-banking client, owning requirements analysis, testing, and production deployment; authored test data and system integration testing (SIT) documentation.",
        "Automated hourly data retrieval and downstream API calls with retries and exception handling; implemented secure REST integrations with configurable mTLS/SSL, timeouts, and endpoints.",
        "Deployed Docker-based Node.js services and provisioned Kubernetes clusters, configuring canary routing, mutual TLS (mTLS), and fault injection through declarative service-mesh policies.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Watsons Philippines",
      companyUrl: "https://www.watsons.com.ph/",
      period: "Aug 2025 — Mar 2026",
      location: "Pasay, NCR, Philippines",
      bullets: [
        "Developed the HRO Dashboard for 13,000+ employee records using Next.js, TypeScript, Tailwind CSS, C# .NET, and SQL Server, delivering real-time HR analytics and reporting.",
        "Built 15+ secure RESTful APIs and ETL pipelines integrating Hatch/Cornerstone, Oracle HCM, and Know App, processing 13,000+ records with automated validation and CSV generation.",
        "Reduced manual processing by approximately 50% with SQL Server stored procedures and scheduled jobs; implemented authentication and RBAC and supported SIT/UAT, documentation, and production enhancements.",
      ],
    },
    {
      role: "Freelance Software Engineer",
      company: "US Client",
      period: "Jan 2024 — Jul 2025",
      location: "United States (Client)",
      bullets: [
        "Delivered full-stack web applications using Next.js, TypeScript, Node.js, Python, and SQL databases, owning architecture through deployment and production support; integrated AI APIs and payment systems.",
        "Built automation pipelines with scheduled jobs, asynchronous processing, retries, and logging; implemented secure authentication, role-based access control, and API validation.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Weberlly",
      companyUrl: "https://weberlly.com/",
      period: "Feb 2025 — May 2025",
      location: "San Jose del Monte, Bulacan, Philippines",
      bullets: [
        "Built a web scraping platform automating extraction of 10,000+ records with Python, Requests, BeautifulSoup, Pandas, and REST API integrations, eliminating manual data collection.",
        "Developed a real-time dataset dashboard using Next.js and TypeScript and deployed a responsive, SEO-optimized client website.",
      ],
    },
  ] as ExperienceItem[],
} as const;

export type SiteConfig = typeof siteConfig;
