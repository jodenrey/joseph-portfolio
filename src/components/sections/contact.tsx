"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm transition-colors placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white dark:placeholder:text-neutral-500";

export function Contact() {
  const [state, setState] = React.useState<FormState>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const honey = String(formData.get("website_url") ?? "").trim(); // honeypot

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, honey }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setState("error");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setState("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something great."
            description="Have a project in mind, or just want to say hi? My inbox is always open."
          />

          <div className="mt-10 space-y-3">
            <a
              href={siteConfig.socials.email}
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-brand-900/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                <Mail className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  Email
                </span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  {siteConfig.email}
                </span>
              </span>
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-brand-900/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                <Github className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  GitHub
                </span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  @{siteConfig.handles.github}
                </span>
              </span>
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-brand-900/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                <Linkedin className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  LinkedIn
                </span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  /in/{siteConfig.handles.linkedin}
                </span>
              </span>
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md justify-self-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft sm:p-7 dark:border-neutral-800 dark:bg-neutral-900/40 lg:max-w-sm lg:justify-self-end xl:max-w-md"
        >
          <div className="space-y-4">
            <Field label="Name" htmlFor="name">
              <input
                required
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ada Lovelace"
                className={inputClasses}
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ada@lovelace.com"
                className={inputClasses}
              />
            </Field>

            {/* Honeypot (spam trap). Keep visually hidden. */}
            <div className="hidden" aria-hidden>
              <label htmlFor="website_url">Website</label>
              <input id="website_url" name="website_url" type="text" tabIndex={-1} />
            </div>

            <Field label="Message" htmlFor="message">
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about your project…"
                className={cn(inputClasses, "min-h-[8.5rem] resize-y")}
              />
            </Field>

            <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {state === "error" && error ? (
                  <p className="text-brand-700 dark:text-brand-300">{error}</p>
                ) : (
                  <p>Your details are only used to reply.</p>
                )}
              </div>
              <Button
                type="submit"
                size="md"
                disabled={state === "submitting"}
                className="sm:min-w-[160px]"
              >
                {state === "success" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent!
                  </>
                ) : state === "submitting" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
      {children}
    </label>
  );
}
