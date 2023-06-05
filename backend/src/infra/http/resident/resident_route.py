from fastapi import APIRouter,Depends,UploadFile,File
from starlette.requests import Request
from src.infra.http.depends import ResidentToken
from fastapi.security.oauth2 import OAuth2PasswordBearer

from src.interface import FastAPIAdapter

resident_route=APIRouter(prefix="/resident",tags=['resident'])
resident_token=ResidentToken
oauth2=OAuth2PasswordBearer(tokenUrl="login")
adapter=FastAPIAdapter()

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