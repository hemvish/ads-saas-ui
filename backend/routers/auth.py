from fastapi import APIRouter, HTTPException
from jose import jwt
from datetime import datetime, timedelta

router = APIRouter()

SECRET_KEY = "SUPER_SECRET_KEY"
ALGORITHM = "HS256"

@router.post("/login")
def login(data: dict):
    if data.get("email") != "admin@test.com":
        raise HTTPException(status_code=401, detail="Invalid credentials")

    payload = {
        "sub": data["email"],
        "exp": datetime.utcnow() + timedelta(hours=2)
    }

    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}
