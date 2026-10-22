# Mahven-website

## Build

The site uses a locally compiled Tailwind stylesheet so it does not load Tailwind from a CDN. After changing Tailwind classes in `index.html`, run:

```sh
npm install
npm run build:css
```

The contact and retail notification forms open a prefilled email to `support@mahven.com.au`. Visitors must send the draft from their email app; the site does not collect or store submissions.

The MAHVEN wordmark uses a locally hosted Space Grotesk font. `npm run build:css` copies the licensed font asset from the development dependency into `assets/fonts/`.