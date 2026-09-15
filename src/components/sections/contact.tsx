"use client";

import * as React from "react";
import { ArrowUpRight, Check, Github, Linkedin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = React.useState<FormState>("idle");
  const [error, setError] = React.useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setState("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
          honey: String(formData.get("website_url") ?? "").trim(),
        }),
      });
      const data: unknown = await response.json();
      const result =
        data && typeof data === "object" && !Array.isArray(data)
          ? (data as { ok?: unknown; error?: unknown })
          : null;

      if (!response.ok || result?.ok !== true) {
        setState("error");
        setError(
          typeof result?.error === "string"
            ? result.error
            : "Your message couldn’t be sent. Please try again.",
        );
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
      setError(
        "Your message couldn’t be sent. Check your connection and try again.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="contact-section section"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">04 / Let’s connect</p>
          <h2 id="contact-heading" className="contact-title">
            Have something
            <br />
            in mind?
            <br />
            <span>Let’s build it.</span>
          </h2>
          <p>
            A new product, a tricky integration, or a team that needs another
            builder. I’d love to hear about it.
          </p>
          <a href={siteConfig.socials.email} className="contact-email">
            <span>{siteConfig.email}</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} aria-hidden="true" /> GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={onSubmit}
          aria-busy={state === "submitting"}
        >
          <Field label="Your name" htmlFor="contact-name">
            <input
              required
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="What should I call you?"
              minLength={2}
              maxLength={80}
              disabled={state === "submitting"}
              className="form-input"
            />
          </Field>
          <Field label="Email address" htmlFor="contact-email">
            <input
              required
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              maxLength={120}
              disabled={state === "submitting"}
              className="form-input"
            />
          </Field>
          <div hidden aria-hidden="true">
            <label htmlFor="website_url">Website</label>
            <input
              id="website_url"
              name="website_url"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <Field label="What are you working on?" htmlFor="contact-message">
            <textarea
              required
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tell me a little about your idea…"
              minLength={10}
              maxLength={4000}
              disabled={state === "submitting"}
              className="form-input"
            />
          </Field>
          <div className="form-footer">
            <button
              type="submit"
              disabled={state === "submitting"}
              className="button button-primary"
            >
              {state === "submitting"
                ? "Sending…"
                : state === "success"
                  ? "Message sent"
                  : "Send message"}
              {state === "success" ? (
                <Check size={17} aria-hidden="true" />
              ) : (
                <Send size={17} aria-hidden="true" />
              )}
            </button>
            <p>Your details are only used to reply.</p>
          </div>
          <div
            className="form-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {state === "success" && (
              <p>Thanks for reaching out. Your message is in my inbox.</p>
            )}
            {state === "error" && (
              <p>
                {error} You can also{" "}
                <a href={siteConfig.socials.email}>email me directly</a>.
              </p>
            )}
          </div>
        </form>
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
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}
