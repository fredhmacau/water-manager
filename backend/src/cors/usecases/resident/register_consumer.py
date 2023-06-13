from pymongo import MongoClient
from bson import ObjectId
import datetime
from src.infra.feedback import MSResponse
from src.infra.db import create_session
import json
uri = "mongodb+srv://fredhymacau35:cPD1m8zNfcPnkhX4@cluster0.iwvpvij.mongodb.net/?retryWrites=true&w=majority"
# MongoDB connection string
client = MongoClient(uri,ssl=True)
# MongoDB database and collection
db = client["barometer"]
collection = db["myconsumer"]

def register_volume_and_fluxo(number_device,data):
    try:
        
        data["date"] = datetime.utcnow()
        data["residence_n"] =number_device
        
        json_str = json.dumps(data)
        
        collection.insert_one(json_str)

    except Exception as e:
        raise MSResponse.msg_request_bad("error:try again later")
