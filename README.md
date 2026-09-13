# shubhsite

A dynamic company website with a FastAPI backend and a React frontend. Services and team
content are served from a SQLite database via the API (not hardcoded), and the contact
form persists submissions to the database.

## Project structure

```
backend/    FastAPI app (SQLite via SQLAlchemy)
frontend/   React app (Vite + react-router)
```

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
