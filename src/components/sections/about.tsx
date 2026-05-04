"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";

const STATS = [
  { label: "Years building", value: "2+" },
  { label: "Shipped projects", value: "20+" },
  { label: "Happy teammates", value: "∞" },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="A little about me." />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 w-full max-w-xs mx-auto lg:mx-0 lg:mt-10"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-soft dark:border-neutral-800 dark:bg-neutral-900">
              <Image
                src="/images/profile.png"
                alt={`${siteConfig.fullName}, software developer`}
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 280px, 320px"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent pt-16" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-white/10 bg-black/25 px-4 py-3 text-sm text-white backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-brand-300" />
                Crafted with care
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="space-y-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            {siteConfig.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>
              When I’m not coding, you’ll find me reading about systems design, watching movies/series, playing games, traveling, or chasing the perfect cup of coffee.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-soft dark:border-neutral-800 dark:bg-neutral-900/40"
              >
                <dt className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
