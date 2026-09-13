from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/services", tags=["services"])


@router.get("", response_model=list[schemas.ServiceOut])
def list_services(db: Session = Depends(get_db)):
    return db.query(models.Service).all()
