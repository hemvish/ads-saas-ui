from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt

router = APIRouter()
security = HTTPBearer()

SECRET_KEY = "SUPER_SECRET_KEY"
ALGORITHM = "HS256"

def verify_token(creds: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(creds.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.get("/stats")
def dashboard_stats(user=Depends(verify_token)):
    return {
        "user": user["sub"],
        "spend": 1200,
        "roi": "3.2x",
        "status": "Active"
    }
