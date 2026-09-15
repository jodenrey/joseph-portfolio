import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Lightweight in-memory rate limit (per server instance)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
function allowRequest(
  ip: string,
  limit = 5,
  windowMs = 10 * 60 * 1000,
): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!allowRequest(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 },
    );
  }
  const fields = body as Record<string, unknown>;
  if (
    typeof fields.name !== "string" ||
    typeof fields.email !== "string" ||
    typeof fields.message !== "string" ||
    (fields.honey !== undefined && typeof fields.honey !== "string")
  ) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();
  const honey = typeof fields.honey === "string" ? fields.honey.trim() : "";

  // Bot trap: humans never fill this
  if (honey.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { ok: false, error: "Please enter a name between 2 and 80 characters." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email) || email.length > 120) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please enter a valid email address, up to 120 characters.",
      },
      { status: 400 },
    );
  }
  if (message.length < 10 || message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Message must be between 10 and 4000 characters." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  const from =
    process.env.CONTACT_FROM ||
    (user ? `Portfolio Contact <${user}>` : undefined);

  if (!host || !user || !pass || !to || !from) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact form is temporarily unavailable.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `Portfolio message from ${name}`;
  const text = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Your message couldn’t be sent. Please try again." },
      { status: 500 },
    );
  }
}
