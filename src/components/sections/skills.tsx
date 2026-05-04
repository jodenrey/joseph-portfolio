"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="section bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="The tools I reach for."
          description="A modern, pragmatic stack for building things that last."
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card card-hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-neutral-900 dark:text-white">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-neutral-400">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
