# UW–Madison Statistics Club Website

Source for the [UW–Madison Statistics Club](https://stat.wisc.edu/) website, built with
[Astro](https://astro.build).

## Requirements

- [Node.js](https://nodejs.org/) 22.12+

## Local development

Runs entirely on your machine — no need to push to GitHub to see changes.

```sh
npm install
npm run dev
```

This starts a local dev server (default `http://localhost:4321`) with hot reload. Edit any
file in `src/` and the page refreshes automatically.

## Production build

```sh
npm run build     # outputs static site to dist/
npm run preview   # serve the built dist/ locally to sanity-check before deploying
```

## Project structure

```
src/
  layouts/Layout.astro   # shared <head>, nav, footer wrapper
  components/            # Nav, Footer
  pages/                 # one file per route (index, about, events, resources, contact)
  data/                   # site content as plain JS (officers, events, resource links)
  styles/global.css      # shared design tokens and base styles
public/                  # static assets copied as-is (favicon, images)
```

To update site content (officer bios, events, resource links, email/social links), edit the
files in `src/data/` — no page-template changes needed for routine updates.

## Deployment

Pushing to `main` builds and deploys the site to GitHub Pages via
`.github/workflows/deploy.yml`. The live site is served at the `base` path configured in
`astro.config.mjs`.
