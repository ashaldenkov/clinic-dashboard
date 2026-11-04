# Patient Dashboard – Frontend Test Assignment

**Live Demo:** https://clinic-website-psi.vercel.app/

## About the Project

This project was developed as a frontend test assignment. The task was to build a patient dashboard that fetches medical data from an external API and displays it in an organized way.

The dashboard includes patient information, test results, and medical history. It also uses charts to display changes in the patient's health data over time.

The layout was designed primarily for desktop screens, as the dashboard is intended for use by medical staff.

## Features

- Patient overview with personal information and vital signs
- Display of test results and visit history
- Charts built with Chart.js
- Data fetching from an external API with basic authentication
- Dashboard layout styled with Tailwind CSS

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Chart.js 4 (via react-chartjs-2)
- date-fns

## Getting Started

Requires Node.js 26 (pinned in `.nvmrc` and `package.json#engines`).

```bash
nvm use        # switches to the Node version from .nvmrc
npm ci         # installs exact versions from package-lock.json
npm run dev    # starts the dev server at http://localhost:5173
```

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally       |
