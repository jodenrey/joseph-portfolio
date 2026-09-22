# Joseph Dennis Reyes — Portfolio

A personal developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. The design pairs warm neutrals, orange accents, expressive typography, and a custom Three.js sculpture.

## Features

- Responsive navigation, light/dark themes, and a prominent resume download.
- Filterable projects with expandable build details and a secondary project archive.
- Experience timeline covering Atlas Geotech, ONETool Solutions, Watsons Philippines, and Weberlly.
- Interactive WebGL hero with pointer response, a pause control, and a static SVG fallback when WebGL is unavailable or data saving is enabled.
- Reduced-motion support, static rendering on touch devices, capped pixel density, and animation paused while offscreen or in a hidden tab.
- Semantic sections, keyboard focus styles, a skip link, accessible form status, and native expandable details.
- SMTP contact form with validation, a honeypot, basic rate limiting, and direct email links as a fallback.

VAssist AI and DesignGenius use screenshots of their live homepages. Atlas project visuals are conceptual interface studies. Project descriptions and experience details live in the content configuration.

## Run locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run start
```

`start` serves the production build after `build` succeeds.

## Update content and resume

Edit [`src/config/site.ts`](src/config/site.ts) for identity, social links, navigation, skills, projects, and experience. Projects use stable IDs and the `product`, `enterprise`, or `tools` category; optional `bullets` provide expandable build details.

The downloadable one-page resume is [`public/joseph-dennis-reyes-resume.pdf`](public/joseph-dennis-reyes-resume.pdf), served at `/joseph-dennis-reyes-resume.pdf`. Download links use the filename **Joseph Dennis Reyes - Full Stack Engineer Resume.pdf**. Replace that public PDF to update the document while keeping links working.

The portrait is in `public/images/profile.png`. Page styles are in `src/app/globals.css`, the hero sculpture is in `src/components/three/`, and project illustrations are in `src/components/projects/project-art.tsx`.

## Contact email

The form submits to `POST /api/contact`, which sends email through `nodemailer`. No `.env` file or SMTP credentials are supplied. Create an untracked `.env.local` with your own settings:

```dotenv
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_TO=josephdennisreyes@gmail.com
CONTACT_FROM="Portfolio Contact <your_email@gmail.com>"
```

For Gmail, use an App Password. Without SMTP configuration, the form reports that delivery is unavailable and offers a `mailto:` link to email Joseph directly. The rate limit is in memory and applies per server instance.

## Site URL and metadata

Optionally set `NEXT_PUBLIC_SITE_URL` to your deployed site's full HTTP(S) URL in `.env.local` or your hosting environment, then rebuild. The URL is normalized to its origin and enables the canonical URL, Open Graph URL, sitemap entry, and sitemap reference in `robots.txt`.

There is no default public domain. With the setting absent or invalid, absolute site URLs are omitted and the sitemap is empty.

## License

MIT.
