from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class DecisionRequest(BaseModel):
    spend: float
    sales: int
    roas: float

@router.post("/decision")
def ai_decision(data: DecisionRequest):
    if data.roas >= 2:
        action = "SCALE"
    elif data.roas >= 1:
        action = "HOLD"
    else:
        action = "PAUSE"

    return {
        "action": action,
        "reason": f"ROAS = {data.roas}"
    }
