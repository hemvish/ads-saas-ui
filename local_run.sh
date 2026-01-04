#!/bin/bash

echo "🚀 Starting Ads Grinder SaaS (LOCAL)..."

# Go to project root
cd "$(dirname "$0")" || exit 1

# Create venv if not exists
if [ ! -d "venv" ]; then
  echo "📦 Creating virtual environment..."
  python3 -m venv venv
fi

# Activate venv
source venv/bin/activate

# Upgrade pip
echo "⬆️ Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "📦 Installing dependencies..."
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose "passlib[bcrypt]" jinja2 python-multipart

# Stop old server if running
echo "🛑 Stopping old server (if any)..."
pkill -f "uvicorn main:app" 2>/dev/null || true

# Start server
echo "🚀 Starting FastAPI local server..."
uvicorn main:app --reload --host 127.0.0.1 --port 8000

