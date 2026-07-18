# Kakani Holidays premium website

## Local setup

```bash
npm install
npm run dev
```

Production build: `npm run build`. Output is generated in `dist/`.

## Deployment

### Vercel

Import this repository, select Vite, use `npm run build`, and set the output directory to `dist`. Add the values from `.env.example` in Project Settings. Configure a rewrite to `/index.html` for client-side routes if Vercel does not detect Vite automatically.

### GoDaddy / static hosting

Run `npm run build`, upload the contents of `dist/` to `public_html`, and configure the server to rewrite unknown routes to `index.html`. On Apache, use an `.htaccess` SPA fallback. Set production environment values before building because Vite variables are embedded at build time.

## Content migration checklist

- [x] Company name and “Host of Happiness” tagline
- [x] Primary phone: +91 97010 76666
- [x] Public email: kakaniholidays47@gmail.com
- [x] Current service descriptions
- [x] Verified package names, routes and durations used in structured data
- [x] Three publicly displayed customer testimonials (lightly trimmed for card length)
- [ ] Replace curated photography with approved Kakani gallery media where usage permission is confirmed
- [ ] Import remaining package itineraries after editorial review for outdated or malformed content
- [ ] Import approved current blog archive
- [ ] Add current social profile URLs
- [ ] Add approved downloadable itinerary files

## Client confirmation required

- Current Vijayawada, Hyderabad and Visakhapatnam office addresses (legacy pages conflict)
- Which office locations remain active and their business hours
- Official WhatsApp number (currently configured to the client-provided primary number)
- Legal privacy policy, terms, cancellation and refund wording
- Current prices, departure dates, hotels, inclusions and exclusions
- Permission to reuse legacy gallery/customer images and brand logo files
- Form submission provider and endpoint
- Current social media links

## Responsive & accessibility verification

The UI uses semantic controls, labelled fields, keyboard-compatible navigation, visible focus behavior, reduced-motion support, responsive grids and no fixed-width page content. Verify final approved images and copy at 375, 430, 768, 1024, 1280, 1440 and 1920px before launch. Run Lighthouse against the deployed production build and complete keyboard + screen-reader smoke tests after production forms and media are connected.
