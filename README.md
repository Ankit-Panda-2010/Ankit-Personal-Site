# Ankit — Personal Portfolio

A modern, public personal portfolio built with Next.js and Tailwind CSS. It is ready to personalize with real experience, projects, links, and a portrait.

There is no authentication, database, or private user area. The site is statically exported and designed to be shared on LinkedIn, résumés, and job applications.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The production-ready static site is generated in `out/`.

## Deploy

### Vercel

1. Import this GitHub repository into Vercel.
2. Vercel will detect Next.js automatically.
3. Click **Deploy**. No environment variables are needed.

Vercel automatically provides the production URL for social and search metadata. If you add a custom domain or use another host, set `NEXT_PUBLIC_SITE_URL` to the full public origin, such as `https://yourname.com`.

### Other static hosts

Run `npm run build` and publish the generated `out/` directory.

## Personalize

The editable content lives near the top of `src/App.jsx`:

- `projects` — featured project cards
- `experience` — career timeline
- `capabilities` — skills and focus areas
- About copy, contact email, LinkedIn, and GitHub links in the component markup

Before sharing publicly, replace:

- `hello@example.com`
- Generic LinkedIn and GitHub links
- Project and experience placeholders
- Your final public URL if you are not deploying through Vercel
