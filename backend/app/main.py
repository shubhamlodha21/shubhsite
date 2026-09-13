from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models
from .database import Base, engine
from .routers import contact, services, team

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Shubhsite API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(services.router)
app.include_router(team.router)
app.include_router(contact.router)


@app.get("/api/health")
def health_check():
    return {"status": "ok"}
