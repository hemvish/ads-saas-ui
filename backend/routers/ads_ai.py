from fastapi import APIRouter
from pydantic import BaseModel
import requests

router = APIRouter()

class AdsRequest(BaseModel):
    website: str
    product: str
    budget: int

@router.post("/generate-ads")
def generate_ads(data: AdsRequest):
    prompt = f"""
Create high converting Facebook ads.

Website: {data.website}
Product: {data.product}
Daily Budget: ${data.budget}

Return:
- 3 Headlines
- 3 Primary Texts
- 1 CTA
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        },
        timeout=300
    )

    return {"result": response.json()["response"]}
