# CLAUDE.md — malvibhatt.dev

This file documents the project context, structure, and conventions for use with Claude Code.

---

## Project Overview

**Purpose**: Personal portfolio website for Malvi Bhatt to support job applications and showcase work.  
**Domain**: malvibhatt.dev  
**Primary goals**:
- Present projects, skills, and experience to potential employers
- Serve as a learning project for React and modern frontend tooling

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | React | 19 |
| Language | TypeScript | ~5.9 |
| Bundler | Vite | 8 |
| Styling | Tailwind CSS | 4 (via `@tailwindcss/vite` plugin) |
| Linting | ESLint + typescript-eslint | 9 |

---

## Project Structure

```
malvibhatt.dev/
├── public/               # Static assets served as-is
├── src/
│   ├── assets/           # Images, icons, fonts
│   ├── components/       # Reusable UI components (Navbar, Footer, Card, etc.)
│   ├── sections/         # Full page sections (Hero, About, Projects, Experience, Contact)
│   ├── App.tsx           # Root component — composes all sections
│   ├── App.css           # App-level styles (minimize; prefer Tailwind)
│   ├── main.tsx          # React DOM entry point
│   └── index.css         # Global styles — contains `@import "tailwindcss"`
├── index.html            # HTML entry point
├── vite.config.ts        # Vite config — includes React and Tailwind plugins
├── tsconfig.json         # TypeScript root config
├── tsconfig.app.json     # TS config for app source
├── tsconfig.node.json    # TS config for Vite/Node config files
├── eslint.config.js      # ESLint flat config
└── package.json
```

---

## Planned Portfolio Sections

These sections are to be built as components under `src/sections/`:

| Section | File | Status |
|---|---|---|
| Hero | `sections/Hero.tsx` | Not started |
| About | `sections/About.tsx` | Not started |
| Projects | `sections/Projects.tsx` | Not started |
| Experience | `sections/Experience.tsx` | Not started |
| Contact | `sections/Contact.tsx` | Not started |

Shared UI pieces (navbar, footer, project card, etc.) go in `src/components/`.

---

## Development Commands

```bash
npm run dev       # Start local dev server at http://localhost:5173
npm run build     # Type-check + production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## Conventions

- **Styling**: Use Tailwind utility classes directly in JSX. Avoid writing custom CSS unless absolutely necessary.
- **Components**: One component per file, named with PascalCase matching the filename.
- **Sections**: Each section is a self-contained component that App.tsx imports and renders in order.
- **TypeScript**: Prefer explicit types for props; avoid `any`.

---

## Planned Pipeline (To Be Set Up)

- **Hosting**: Vercel (auto-deploy from GitHub `main`)
- **CI**: GitHub Actions — lint + build check on every PR to `main`
- **Branch strategy**: `main` (production) + `dev` for active development; merge via PRs
- **Custom domain**: malvibhatt.dev → point DNS to Vercel

---

## Future Enhancements (Add Context Here)

Use this section to document upcoming features, design decisions, or requirements as they are defined.

- [ ] Add dark mode support
- [ ] Add animations (Framer Motion or CSS transitions)
- [ ] Contact form with email integration
- [ ] SEO meta tags and Open Graph setup
- [ ] Accessibility (a11y) audit