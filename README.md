# Aikyol Sergekbekov — portfolio

Personal portfolio site: full-stack development (Python & JavaScript) and UI/UX design.
Available in English and Russian.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components, static prerendering)
- TypeScript, React 19
- Tailwind CSS 4

## Structure

```
src/
  app/[lang]/        page and layout, prerendered for /en and /ru
  components/        page sections (Hero, FeaturedCase, Design, ...)
  content/
    dictionaries.ts  all texts in English and Russian
    site.ts          contacts and tech stack lists
  proxy.ts           redirects / to /en or /ru based on the browser language
```

To change texts, edit `src/content/dictionaries.ts`. Contacts live in `src/content/site.ts`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
