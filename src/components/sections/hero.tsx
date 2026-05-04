"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const TITLES = [
  "Software Engineer.",
  ".NET Developer.",
  "Full-Stack Builder.",
  "API Craftsman.",
];

function useTyping(words: readonly string[], speed = 70, pause = 1400) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const word = words[index % words.length];
    const tick = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = word.slice(0, Math.max(0, text.length - 1));
          setText(next);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? Math.max(28, speed / 2) : speed,
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(TITLES);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-40"
    >
      {/* Soft background grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-light bg-[size:48px_48px] mask-fade-bottom dark:bg-grid-dark"
      />
      {/* Brand glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500/30 via-brand-500/10 to-transparent blur-3xl"
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Available for new opportunities
          </span>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tightest text-neutral-900 sm:text-6xl md:text-7xl dark:text-white">
            <span className="block">Hi, I’m {siteConfig.name}.</span>
            <span className="mt-2 block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
              {typed}
              <span
                aria-hidden
                className="ml-1 inline-block h-[0.9em] w-[2px] -translate-y-[2px] bg-brand-600 align-middle animate-blink dark:bg-brand-400"
              />
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl dark:text-neutral-400">
            {siteConfig.tagline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button href="#projects" size="lg">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </span>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
