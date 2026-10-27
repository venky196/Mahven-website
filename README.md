# Mavenix website

## Build

The site uses a locally compiled Tailwind stylesheet so it does not load Tailwind from a CDN. After changing Tailwind classes in `index.html`, run:

```sh
npm install
npm run build:css
```

The contact and retail notification forms open an email draft without a prefilled recipient. Visitors choose the recipient and send it from their email app; the site does not collect or send submissions.

The Mavenix brand uses a locally maintained SVG mark and favicon. Space Grotesk is bundled locally for display headings, with a system sans-serif stack for body text; no external font service is required.