#!/bin/bash

echo "🚀 Starting ADS SAAS App..."

# Go to project directory
cd ~/ads_saas || exit

# Activate virtual environment
echo "🐍 Activating virtual environment..."
source venv/bin/activate

# Check Ollama
echo "🧠 Checking Ollama..."
if ! command -v ollama &> /dev/null
then
    echo "❌ Ollama not found. Please install Ollama first."
    exit
fi

# Check Ollama server
ollama list > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Ollama server not running."
    echo "👉 Run: ollama serve"
    exit
fi

echo "✅ Ollama is running"

# Kill old uvicorn if running
pkill -f uvicorn > /dev/null 2>&1

# Start FastAPI
echo "🔥 Starting FastAPI server..."
uvicorn main:app --reload --host 127.0.0.1 --port 8000
