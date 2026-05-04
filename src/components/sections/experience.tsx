"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function Experience() {
  return (
    <section
      id="experience"
      className="section bg-neutral-50/60 dark:bg-neutral-900/30"
    >
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Experience"
            title="Where I’ve been."
            description="A snapshot of my journey so far."
          />
          <Button
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeDownloadFileName}
            variant="secondary"
            size="md"
          >
            <Download className="h-4 w-4" />
            Download résumé
          </Button>
        </div>

        <ol className="relative mt-14 space-y-10 border-l border-neutral-200 pl-8 dark:border-neutral-800">
          {siteConfig.experience.map((item, i) => (
            <motion.li
              key={`${item.company}-${i}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-white bg-brand-600 shadow-soft dark:border-neutral-950" />

              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-all hover:border-brand-200 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-brand-900/60">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">
                    {item.role}{" "}
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-neutral-500 transition-colors hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-400"
                      >
                        · {item.company}
                      </a>
                    ) : (
                      <span className="font-sans text-neutral-500 dark:text-neutral-400">
                        · {item.company}
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </span>
                </div>
                {item.location ? (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {item.location}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
