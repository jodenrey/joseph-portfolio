"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work."
            description="A few things I’ve built recently. More on GitHub."
          />
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 self-start text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            View all on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {siteConfig.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-brand-900/60",
                project.highlight && "md:col-span-2",
              )}
            >
              {/* Subtle hover sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/0 via-brand-500/0 to-brand-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-500/5 group-hover:via-transparent group-hover:to-transparent group-hover:opacity-100"
              />

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-neutral-500 transition-all hover:border-neutral-200 hover:text-neutral-900 dark:hover:border-neutral-800 dark:hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-neutral-500 transition-all hover:border-neutral-200 hover:text-brand-600 dark:hover:border-neutral-800 dark:hover:text-brand-400"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="brand">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
