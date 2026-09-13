from app.database import Base, SessionLocal, engine
from app.models import Service, TeamMember

Base.metadata.create_all(bind=engine)

SERVICES = [
    {"title": "Web Development", "description": "Custom, fast, and scalable web applications built to your needs.", "icon": "code"},
    {"title": "Cloud Consulting", "description": "Architecture, migration, and cost optimization for cloud infrastructure.", "icon": "cloud"},
    {"title": "Product Design", "description": "User-centered design for web and mobile products.", "icon": "design"},
]

TEAM = [
    {"name": "Shubham Lodha", "role": "Founder & CEO", "bio": "Leads product vision and engineering strategy."},
]


def seed():
    db = SessionLocal()
    try:
        if db.query(Service).count() == 0:
            db.add_all([Service(**s) for s in SERVICES])
        if db.query(TeamMember).count() == 0:
            db.add_all([TeamMember(**t) for t in TEAM])
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    seed()
    print("Seed complete.")
