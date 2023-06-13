from fastapi import APIRouter,Depends,UploadFile,File
from fastapi.responses import Response
from starlette.requests import Request
from src.infra.http.depends import ResidentToken
from fastapi.security.oauth2 import OAuth2PasswordBearer
from pymongo import MongoClient
from bson import ObjectId
from src.interface import FastAPIAdapter
from datetime import datetime
from fastapi.responses import StreamingResponse
import json
resident_route=APIRouter(prefix="/resident",tags=['resident'])
resident_token=ResidentToken
oauth2=OAuth2PasswordBearer(tokenUrl="login")
adapter=FastAPIAdapter()
uri = "mongodb+srv://fredhymacau35:cPD1m8zNfcPnkhX4@cluster0.iwvpvij.mongodb.net/?retryWrites=true&w=majority"
# MongoDB connection string
client = MongoClient(uri)
# MongoDB database and collection
db = client["barometer"]
collection = db["myconsumer_id4"]
@resident_route.post("/login",tags=['resident'])
async def resident_login(form_data:Request):
    data=await form_data.form()
    return resident_token.create_access_token(data)

@resident_route.post("/register-payment",tags=['resident'])
async def register_payment(form_data:Request,image:UploadFile=File(...),token:str=Depends(oauth2)):
    data=await form_data.form()
    resident_id=resident_token.get_current_user(token)
    img_improve={
        "read":await image.read(),
        "img_type":image.content_type,
        "img_filename":image.filename
    }
    return adapter.register_payment(data,resident_id,img_improve)

@resident_route.get("/get_info_resident",tags=['resident'])
async def get_info_resident(token:str=Depends(oauth2)):
    resident_id=resident_token.get_current_user(token)
    return adapter.get_info_resident(resident_id)

@resident_route.get("/view_image_resident/{token}",tags=['resident'])
async def view_image_resident(token:str):
    resident_id=resident_token.get_current_user(token)
    return adapter.view_image_resident(resident_id)

@resident_route.get("/get_info_resident/{number_device}",tags=['resident'])
async def get_info_resident_by_number_device(number_device:int):
    return await adapter.get_info_by_number_device(number_device)

@resident_route.get("/send-message-finish-package/{resident_id}",tags=['resident'])
async def send_message_finish_package(resident_id:int):
    return await adapter.send_message_finish_package(resident_id)

@resident_route.get("/send-volume-and-fluxo/{number_device}",
                     tags=["resident"])
async def send_volume_and_fluxo(number_device:int,volume:str,fluxo:str,resident_id:str):
    data={
        "date":datetime.utcnow(),
        "residence_n":number_device,
        "volume":volume,
        "fluxo":fluxo,
        "resident_id":resident_id
    } 
    collection.insert_one(data)

@resident_route.get("/view-data",tags=['resident'])
async def view_data(response: Response):
    response.headers["Content-Type"] = "text/event-stream"
    response.headers["Cache-Control"] = "no-cache"

    def generate():
        data = []
        for document in collection.find({"residence_n": 1}):
            if isinstance(document["_id"], ObjectId):
                document["_id"] = str(document["_id"])
             # Convert datetime objects to ISO-formatted strings
            for key, value in document.items():
                if isinstance(value, datetime):
                    document[key] = value.isoformat()
            data.append(document)
            yield f"data: {json.dumps(document)}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")
