from pydantic import BaseModel
from typing import Optional, Dict, Any
from datetime import datetime

class AutomationRule(BaseModel):
    """Automation rule model"""
    id: Optional[str] = None
    name: str
    description: Optional[str] = None
    trigger_type: str  # "website_score", "ad_performance", "time_based", "custom"
    trigger_conditions: Dict[str, Any]  # e.g., {"score_threshold": 70, "operator": "less_than"}
    actions: list[Dict[str, Any]]  # e.g., [{"type": "pause_campaign", "campaign_id": "123"}]
    enabled: bool = True
    created_at: Optional[str] = None
    
    def to_dict(self):
        return {
            "id": self.id or f"rule_{datetime.now().timestamp()}",
            "name": self.name,
            "description": self.description,
            "trigger_type": self.trigger_type,
            "trigger_conditions": self.trigger_conditions,
            "actions": self.actions,
            "enabled": self.enabled,
            "created_at": self.created_at or datetime.now().isoformat()
        }

