# shubhsite

A dynamic company website with a FastAPI backend and a React frontend. Services and team
content are served from a SQLite database via the API (not hardcoded), and the contact
form persists submissions to the database.

## Project structure

```
backend/    FastAPI app (SQLite via SQLAlchemy)
frontend/   React app (Vite + react-router) — original company site
web/        SocialXReach SaaS marketing site (Next.js + TypeScript + Tailwind)
```

## SocialXReach marketing site (`web/`)

```bash
cd web
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

- Brand name, links and API URL: `web/src/config/site.ts`
- Navigation and footer links: `web/src/config/navigation.ts`
- Plans, prices and the comparison table: `web/src/config/pricing.ts` (demo values)
- Page content (scenarios, products, solutions, templates, integrations, stories, FAQs): `web/src/content/`

The contact form posts to the backend's `POST /api/contact`, so run the backend too.
Copy `web/.env.example` to `web/.env.local` to change the site or API URL.

## Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python seed.py          # seeds initial services/team data
uvicorn app.main:app --reload --port 8000
```

API available at `http://localhost:8000`:

- `GET /api/health`
- `GET /api/services`
- `GET /api/team`
- `POST /api/contact` — `{ "name": "...", "email": "...", "message": "..." }`

## Frontend

```bash
cd frontend
npm install
npm run dev
```

App available at `http://localhost:5173`. It expects the API at `http://localhost:8000`
(override with a `VITE_API_BASE` env var).
