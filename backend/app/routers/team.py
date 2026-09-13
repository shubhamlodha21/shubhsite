from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/team", tags=["team"])


@router.get("", response_model=list[schemas.TeamMemberOut])
def list_team(db: Session = Depends(get_db)):
    return db.query(models.TeamMember).all()
