from fastapi import FastAPI

from routers.auth import router as auth_router
from routers.dashboard import router as dashboard_router
from routers.ai_decision import router as ai_router
from fastapi.middleware.cors import CORSMiddleware




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
app.include_router(dashboard_router, prefix="/api/dashboard", tags=["Dashboard"])
app.include_router(ai_router, prefix="/ai", tags=["AI Decision"])

@app.get("/")
def root():
    return {"status": "API Running"}
