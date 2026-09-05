# Swapna Lia Anil, Portfolio

Personal portfolio site, built to showcase my background and two full-stack projects completed during a career break.

**Live site:** [liaswapna.github.io](https://liaswapna.github.io)

## Tech Stack

- Vite
- React 19
- TypeScript (strict mode)
- Tailwind CSS
- GitHub Actions (CI/CD, deployment to GitHub Pages)

## Sections

- **Hero** — introduction with an animated terminal showing real test output from one of the featured projects
- **Projects** — two case studies (e-commerce platform, weather app), each with tabbed Decisions, Architecture, and Why panels
- **About** — background and career story
- **Experience** — work history timeline
- **Skills** — technical skills grouped by category
- **Contact** — LinkedIn and GitHub links

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

Output is written to `dist/`.

## Deployment

Pushing to `main` automatically triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and publishes it to GitHub Pages. No manual deployment step is required.
