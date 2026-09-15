"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Plus } from "lucide-react";
import { siteConfig, type Project } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectArt } from "@/components/projects/project-art";

const filters = [
  { value: "all", label: "All work" },
  { value: "product", label: "Products" },
  { value: "enterprise", label: "Enterprise" },
  { value: "tools", label: "Tools" },
] as const;
const featured = ["atlas-nhd", "vassist-ai", "atlas-portal", "design-genius"];
const categoryNames = {
  product: "PRODUCT DEVELOPMENT",
  enterprise: "ENTERPRISE APPLICATION",
  tools: "TOOLS & AUTOMATION",
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
        >
          Visit site <ArrowUpRight size={15} />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source on GitHub`}
        >
          <Github size={15} /> Source
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);
  const projects = siteConfig.projects.filter(
    (p) => filter === "all" || p.category === filter,
  );
  const illustrated = projects.filter((p) => featured.includes(p.id));
  const other = projects.filter((p) => !featured.includes(p.id));
  const showOther = expanded || filter !== "all";
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeader
            eyebrow="01 / SELECTED WORK"
            title="Ideas, brought to life."
            description="A selection of products, platforms, and useful things I’ve helped build."
          />
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                type="button"
                key={item.value}
                aria-pressed={filter === item.value}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
                <span>
                  {item.value === "all"
                    ? siteConfig.projects.length
                    : siteConfig.projects.filter(
                        (p) => p.category === item.value,
                      ).length}
                </span>
              </button>
            ))}
          </div>
          <span className="mono project-count" aria-live="polite">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
        {illustrated.length > 0 && (
          <div className="projects-grid">
            {illustrated.map((project, i) => (
              <article className="project-card" key={project.id}>
                <ProjectArt id={project.id} />
                <div className="project-card-meta mono">
                  <span>{categoryNames[project.category]}</span>
                  <span>0{i + 1}</span>
                </div>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <ProjectLinks project={project} />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.bullets && (
                  <details className="project-details">
                    <summary>
                      Inside the build <Plus size={14} />
                    </summary>
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            ))}
          </div>
        )}
        {other.length > 0 && (
          <>
            <div
              id="more-projects"
              hidden={!showOther}
              className="project-archive"
            >
              {other.map((project) => (
                <article className="archive-row" key={project.id}>
                  <div>
                    <span className="section-kicker">
                      {categoryNames[project.category]}
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                  <div>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </article>
              ))}
            </div>
            {filter === "all" && (
              <button
                type="button"
                className="all-projects-button"
                aria-expanded={expanded}
                aria-controls="more-projects"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded
                  ? "Show selected work"
                  : `Explore ${other.length} more projects`}
                <ArrowDown size={16} className={expanded ? "rotate-180" : ""} />
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
