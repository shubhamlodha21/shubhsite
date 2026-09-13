from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, field_validator


class ServiceOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    description: str
    icon: str | None = None


class TeamMemberOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    role: str
    bio: str | None = None


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

    @field_validator("name", "message")
    @classmethod
    def not_blank(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("must not be blank")
        return v.strip()


class ContactMessageOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: str
    message: str
    created_at: datetime
