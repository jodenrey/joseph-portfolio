export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  description: string;
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
  role: "Software Developer",
  tagline:
    "Full‑stack software developer focused on modern web apps, clean APIs, and data-driven systems.",
  about: [
    "I’m a full‑stack software developer who builds responsive, production-ready web apps with a strong focus on performance, usability, and maintainable code.",
    "I work across modern tech stacks—shipping dashboards, secure REST APIs, and data pipelines that turn messy integrations into reliable systems.",
  ],
  email: "josephdennisreyes@gmail.com",
  location: "Philippines · GMT+8",
  /** Served from `public/` — keep URL path-only for same-origin download */
  resumeUrl: "/joseph-dennis-reyes-resume.pdf",
  resumeDownloadFileName: "Joseph Dennis Reyes - Software Developer Resume.pdf",
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
      category: "Frontend",
      items: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React.js", "Next.js"],
    },
    {
      category: "Backend",
      items: ["C#", ".NET Core", "REST APIs", "Node.js", "PHP", "Python"],
    },
    {
      category: "Databases",
      items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "AWS"],
    },
    {
      category: "Tooling",
      items: ["Git", "GitHub", "GitLab", "Vercel", "Postman", "Swagger", "Figma"],
    },
    {
      category: "AI & IDE",
      items: ["Cursor", "Claude", "GitHub Copilot"],
    },
  ] as SkillGroup[],
  projects: [
    {
      title: "DesignGenius",
      description:
        "AI-powered interior design platform with Stripe payments and fast AI render turnaround (8–12s average).",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Stripe", "Replicate"],
      liveUrl: "https://design-genius.vercel.app/",
      repoUrl: "https://github.com/jodenrey/DesignGenius",
      highlight: true,
    },
    {
      title: "Vineyard Academy Attendance System",
      description:
        "Full-stack attendance system with facial recognition + QR authentication, role-based dashboards, and real-time tracking.",
      stack: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "InsightFace", "OpenCV"],
      repoUrl: "https://github.com/jodenrey/vineyard-facialrecog-qrcode-attendance-system",
    },
    {
      title: "HRO Dashboard",
      description:
        "Internal HR analytics dashboard supporting 13,000+ employee records with real-time reporting, secure RBAC, and automated data validation workflows.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "C#", ".NET", "SQL Server"],
      // Source code is private (company project).
      highlight: true,
    },
    {
      title: "Web Scraping Platform",
      description:
        "Automated extraction and processing of 10,000+ records with a dashboard for dataset visualization and API integration.",
      stack: ["Python", "Requests", "BeautifulSoup", "Pandas", "Next.js", "TypeScript"],
    },
    {
      title: "eDoc E-Channeling System",
      description:
        "Web-based platform for doctor appointments with admin, doctor, and patient portals—scheduling, booking, and PDF receipts/reports.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Composer"],
      repoUrl: "https://github.com/jodenrey/edoc",
    },
    {
      title: "Hireit",
      description:
        "College freelancing platform where lecturers post projects and students apply (solo or teams)—messaging, leaderboards, and project workflows.",
      stack: ["Laravel", "Vue.js", "Sass", "MySQL"],
      repoUrl: "https://github.com/jodenrey/Hireit",
    },
    {
      title: "Freelance Client Builds",
      description:
        "Delivered 5+ full-stack websites, dashboards, and API integrations with performance and SEO improvements.",
      stack: ["React", "Next.js", "Node.js", "PHP/WordPress", "REST APIs"],
    },
  ] as Project[],
  experience: [
    {
      role: "Software Developer",
      company: "Watsons Philippines",
      companyUrl: "https://www.watsons.com.ph/",
      period: "Aug 2025 — Present",
      location: "Philippines",
      bullets: [
        "Developed and maintained the HRO Dashboard supporting 13,000+ employee records using Next.js, TypeScript, Tailwind CSS, C# .NET, and SQL Server—delivering real-time HR analytics and reporting.",
        "Built 15+ secure RESTful APIs and engineered ETL pipelines integrating Hatch/Cornerstone, Oracle HCM, and Know App, processing 13K+ records with automated validation and CSV generation.",
        "Designed SQL Server stored procedures and scheduled jobs reducing manual data processing by ~50%, and implemented secure authentication + RBAC to strengthen privacy controls.",
        "Created technical documentation, supported SIT/UAT for integrations, and collaborated with HR stakeholders and BAs to resolve issues and deliver enhancements.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Weberlly",
      companyUrl: "https://weberlly.com/",
      period: "Feb 2025 — May 2025",
      bullets: [
        "Built a full-stack web scraping platform that automated extraction of 10,000+ records, eliminating manual data collection and integrating with REST APIs.",
        "Developed Python automation scripts using Requests, BeautifulSoup, and Pandas.",
        "Built a real-time dataset visualization dashboard using Next.js and TypeScript, and deployed a responsive SEO-optimized client website.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "Jan 2024 — Feb 2025",
      bullets: [
        "Delivered 5+ full-stack web projects including client websites, web apps, and API integrations using React, Next.js, Node.js, and PHP/WordPress.",
        "Built custom dashboards and landing pages with performance optimizations to improve load times and engagement.",
        "Integrated third-party APIs and built RESTful backends to enable business automation; ensured mobile-first UI, accessibility, and cross-browser compatibility.",
      ],
    },
  ] as ExperienceItem[],
} as const;

export type SiteConfig = typeof siteConfig;
