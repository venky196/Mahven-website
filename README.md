# Mavenix website

## Build

The site uses a locally compiled Tailwind stylesheet so it does not load Tailwind from a CDN. After changing Tailwind classes in `index.html`, run:

```sh
npm install
npm run build:css
```

The contact and retail notification forms open a prefilled email to `support@mahven.com.au`. Visitors must send the draft from their email app; the site does not collect or store submissions.

The Mavenix brand uses a locally maintained SVG mark and favicon. The interface uses system display faces and platform monospace labels; no external font service is required.