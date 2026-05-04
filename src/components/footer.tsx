import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {year} {siteConfig.fullName}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.socials.email}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
