"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200/70 bg-white/75 backdrop-blur-lg dark:border-neutral-800/70 dark:bg-neutral-950/75"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-base font-semibold tracking-tight text-neutral-900 dark:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white shadow-soft transition-transform group-hover:scale-105">
            <span className="text-sm font-bold">{siteConfig.name.charAt(0)}</span>
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              Let’s talk
            </Button>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-neutral-200/70 bg-white/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 dark:border-neutral-800/70 dark:bg-neutral-950/95 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container flex flex-col py-4" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {item.label}
            </a>
          ))}
          <Button
            href="#contact"
            size="md"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Let’s talk
          </Button>
        </nav>
      </div>
    </header>
  );
}
