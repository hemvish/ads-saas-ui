from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client["ai_saas"]

reports_collection = db["reports"]
users_collection = db["users"]
