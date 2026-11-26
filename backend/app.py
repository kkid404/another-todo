from datetime import datetime, timezone

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr

from argon2 import PasswordHasher

import data

app = FastAPI()

class User(BaseModel):
    name: str
    email: EmailStr
    password: str
    lang: str = "ru"
    time_zone: str | None = None



@app.get("/")
async def read_root():
    return len(data.get_all())


@app.post("/auth/register")
async def register(user: User):
    user.email = user.email.lower()
    user_type = "user"
    state = "active"
    
    if data.get_by_email(user.email):
        raise HTTPException(409, "Email was registered")

    if len(data.get_all()) == 0:
        user_type = "admin"

    ph = PasswordHasher()

    user.password = ph.hash(user.password)
    
    data.create(
        user.name,
        datetime.now(timezone.utc),
        datetime.now(timezone.utc),
        state,
        user_type,
        user.email,
        user.password,
        user.lang,
        user.time_zone
    )

