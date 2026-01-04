from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/ai-chat")
def ai_chat(request: Request):
    return templates.TemplateResponse(
        "ui/ai_chat.html",
        {"request": request}
    )

