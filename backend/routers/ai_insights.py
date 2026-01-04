from fastapi import APIRouter
from pydantic import BaseModel
import requests

router = APIRouter()

class InsightRequest(BaseModel):
    question: str

@router.post("/ai-insights")
def ai_insights(data: InsightRequest):
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": data.question,
            "stream": False
        },
        timeout=300
    )

    return {"answer": response.json()["response"]}
