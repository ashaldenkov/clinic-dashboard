# Patient Dashboard – Frontend Test Assignment

**Live Demo:** https://clinic-website-psi.vercel.app/

## About the Project

This project was developed as a frontend test assignment. The task was to build a patient dashboard that fetches medical data from an external API and displays it in an organized way.

The dashboard includes patient information, test results, and medical history. It also uses charts to display changes in the patient's health data over time.

The layout was designed primarily for desktop screens, as the dashboard is intended for use by medical staff.

## Features

- Patient list: picking a patient updates every panel
- Patient profile with personal information and vital signs
- Blood pressure chart for the last six months (Chart.js)
- Diagnostic list and lab results
- Loading and error states for the patients request

## Tech Stack

- React 19 + TypeScript (strict)
- Vite 8
- Tailwind CSS 4 (CSS-first theme in `src/styles/index.css`)
- Chart.js 4 via react-chartjs-2
- date-fns
- Vitest + Testing Library, ESLint (typescript-eslint, react-hooks), Prettier

## Getting Started

Requires Node.js 26 (pinned in `.nvmrc` and `package.json#engines`).

```bash
nvm use        # switches to the Node version from .nvmrc
npm ci         # installs exact versions from package-lock.json
npm run dev    # starts the dev server at http://localhost:5173
```

## Scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                           |
| `npm run build`        | Type-check and build the production bundle (`dist`) |
| `npm run preview`      | Serve the production build locally                  |
| `npm run typecheck`    | Run the TypeScript compiler without emitting        |
| `npm run lint`         | Lint with ESLint                                    |
| `npm run format`       | Format with Prettier (also sorts Tailwind classes)  |
| `npm run format:check` | Check formatting without writing                    |
| `npm test`             | Run the test suite once                             |
| `npm run test:watch`   | Run tests in watch mode                             |

## Project Structure

```
src/
  api/          # HTTP client for the patients API
  hooks/        # usePatients: loading / error / success state with request cancellation
  components/   # UI; diagnosis-history/ groups the chart and vitals widgets
  utils/        # Pure helpers: date parsing, vitals series, class names
  types/        # API response types
  styles/       # Tailwind entry point and design tokens
  assets/       # Icons and images
  test/         # Test setup and fixtures
```

## Notes

- **API credentials.** `.env` holds the public demo credentials from the assignment. `VITE_*` values end up in the client bundle, so real secrets would live on a backend.
- **Featured patient.** Jessica Taylor is selected by default, as in the design. The API only serves 96×96 avatars, so her 400×400 portrait is bundled with the app.
