# Ankit — Personal Portfolio

A minimal, public personal portfolio for Ankit Panda, built with Next.js and Tailwind CSS.

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

## Content

The editable content lives near the top of `src/App.jsx`:

- `projects` — selected project and technical experience
- `leadership` — current student leadership roles
- `skills` — technologies and focus areas
- About copy, contact email, LinkedIn, and GitHub links in the component markup

The content currently reflects Ankit's supplied LinkedIn profile export. If deploying anywhere other than Vercel, set `NEXT_PUBLIC_SITE_URL` to the final public URL so shared links use the correct social metadata.
