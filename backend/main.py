from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers.auth import router as auth_router
from backend.routers.security import router as security_router
from backend.routers.automation import router as automation_router

app = FastAPI(
    title="AI Ads Decision Engine",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(security_router, prefix="/security", tags=["Security"])
app.include_router(automation_router, prefix="/automation", tags=["Automation"])

@app.get("/")
def root():
    return {"status": "API is running"}
