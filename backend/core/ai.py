from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def ai_insight(website_url: str):
    prompt = f"""
You are a marketing AI expert.
Analyze the website: {website_url}

Give:
1. Conversion issues
2. Ad improvement tips
3. Landing page suggestions
4. Short actionable summary
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=300
    )

    return response.choices[0].message.content
