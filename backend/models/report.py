from pydantic import BaseModel
from typing import Optional, Dict, Any
from datetime import datetime

class Report(BaseModel):
    """Report model for saved analyses"""
    id: Optional[str] = None
    website: str
    report_type: str  # "website_analysis", "ad_copy", "grinder", "ai_insights"
    content: Dict[str, Any]  # The actual report data
    created_at: Optional[str] = None
    title: Optional[str] = None
    
    def to_dict(self):
        return {
            "id": self.id or f"report_{datetime.now().timestamp()}",
            "website": self.website,
            "report_type": self.report_type,
            "content": self.content,
            "created_at": self.created_at or datetime.now().isoformat(),
            "title": self.title or f"{self.report_type} - {self.website}"
        }

