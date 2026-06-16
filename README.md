# Ahmed Farid — Portfolio

Personal portfolio site for [ahmed-f-elaswar.github.io](https://ahmed-f-elaswar.github.io).

Built with **Next.js 14 (App Router)** as a static export, deployed to **GitHub Pages** via GitHub Actions.

## Tech

- Next.js 14, React 18 (App Router, `output: 'export'`)
- Plain CSS (no Tailwind / CSS-in-JS) with custom dark mode
- Live GitHub API integration for the projects page
- Web3Forms for the contact form (with `mailto:` fallback)

## Local development

```powershell
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

## Production build

```powershell
npm run build
```

Outputs the static site to `out/`.

## Configuration

The site ships with sensible defaults baked in (Web3Forms key for the contact form, contact email, site URL, resume path). You can override any of them at build time with environment variables if you ever need to:

| Variable | Default |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://ahmed-f-elaswar.github.io` |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Personal Web3Forms key (public, baked into the client bundle anyway). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `a.f.elaswar@gmail.com` |
| `NEXT_PUBLIC_RESUME_URL` | `/resume.pdf` |

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which:

1. Installs dependencies (`npm ci`).
2. Builds the static site (`npm run build`).
3. Uploads `out/` as a GitHub Pages artifact.
4. Deploys it to the `github-pages` environment.

In the repo: **Settings → Pages → Source: GitHub Actions**.

## Project structure

```
app/                Next.js App Router pages
  layout.js         Root layout with metadata, OG, JSON-LD
  page.js           Home (hero, profile, education, achievements)
  skills/           Skills grid
  projects/         Featured projects, timeline, GitHub feed
  contact/          Contact info + form (Web3Forms)
  sitemap.js        Generated sitemap.xml
  robots.js         Generated robots.txt
  not-found.js      404 page
  globals.css       All site styles
components/         React components (client + server)
public/             Static assets
```
