# Joseph — Portfolio

A modern, minimalist personal portfolio for a software engineer.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

> Apple-level minimalism, sharp typography, soft motion, and a tasteful red/grey/white palette.

## Features

- Hero with animated typing effect and gradient title
- About, Skills, Projects, Experience (timeline), and Contact sections
- Sticky responsive navbar with mobile menu
- **Dark mode** via `next-themes` (system-aware)
- Subtle scroll-in animations with `framer-motion`
- Working contact form (mailto fallback — easy to swap for an API route)
- SEO basics: metadata, Open Graph, Twitter card, `robots.txt`, `sitemap.xml`
- Accessible: semantic landmarks, skip-link, keyboard-friendly focus rings
- Zero runtime JS for static sections (server components where possible)

## Tech stack

| Area     | Choice                                   |
| -------- | ---------------------------------------- |
| Framework | Next.js 14 (App Router) + TypeScript    |
| Styling  | Tailwind CSS, custom design tokens       |
| Motion   | Framer Motion                            |
| Icons    | lucide-react                             |
| Themes   | next-themes                              |

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Build for production

```bash
npm run build
npm run start
```

## Customizing

All your personal content lives in **one file**: [`src/config/site.ts`](src/config/site.ts).
Edit your name, tagline, social links, skills, projects, and experience there.

To replace the initials avatar in the About section with a real photo,
drop an image in `public/` and use `next/image` in
`src/components/sections/about.tsx`.

### Brand color

The brand red is defined as the `brand` color scale in
[`tailwind.config.ts`](tailwind.config.ts). Change the palette there
to re-skin the entire site.

### Wiring up the contact form

The contact form posts to `POST /api/contact` (Next.js Route Handler at
`src/app/api/contact/route.ts`) and sends email via SMTP using `nodemailer`.

Create a `.env.local` with:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_TO=josephdennisreyes@gmail.com
CONTACT_FROM="Portfolio Contact <your_email@gmail.com>"
```

Notes:

- **Gmail**: use an **App Password**, not your normal password.
- The route includes a small in-memory rate limit + honeypot spam trap.

## Project structure

```
src/
  app/                # App Router entrypoints, metadata, sitemap, robots
  components/
    sections/         # Hero, About, Skills, Projects, Experience, Contact
    ui/               # Reusable primitives (Button, Badge, SectionHeader)
    providers/        # ThemeProvider
  config/site.ts      # Single source of truth for site content
  lib/utils.ts        # cn() helper
```

## License

MIT — make it yours.
