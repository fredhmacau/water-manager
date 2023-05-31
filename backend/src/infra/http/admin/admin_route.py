from fastapi import APIRouter,Depends,UploadFile,File,BackgroundTasks
from starlette.requests import Request
from src.infra.http.depends import AdminToken
from fastapi.security.oauth2 import OAuth2PasswordBearer

from src.interface import FastAPIAdapter

admin_route=APIRouter(prefix="/admin",tags=['admin'])
admin_token=AdminToken
oauth2=OAuth2PasswordBearer(tokenUrl="login")
adapter=FastAPIAdapter()


@admin_route.post("/create_admin",tags=['admin'])
async def create_admin(form_data:Request,image:UploadFile=File(...)):
    data=await form_data.form()
    img_admin={
        "read":await image.read(),
        "img_type":image.content_type,
        "img_filename":image.filename

    }
    return adapter.create_account_admin(data,img_admin)
    
@admin_route.post("/login",tags=['admin'])
async def admin_login(form_data:Request):
    data=await form_data.form()
    return admin_token.create_access_token(data)

@admin_route.post("/create_account_resident",tags=['admin'])
async def create_account_resident(form_data:Request,
                                        backgrountask:BackgroundTasks,
                                     token:str=Depends(oauth2)):
    data=await form_data.form()
    id_admin=admin_token.get_current_user(token)
    
    return adapter.create_account_resident(data,id_admin,backgrountask)

@admin_route.get("/view_image_admin/{token}",tags=['admin'])
async def view_image_admin(token:str):
    id_admin=admin_token.get_current_user(token)
    return adapter.view_image_admin(id_admin)

@admin_route.get("/get_info_admin",tags=['admin'])
async def get_info_admin(token:str=Depends(oauth2)):
    admin_id=admin_token.get_current_user(token)
    return adapter.get_info_admin(admin_id)

@admin_route.get("/get_all_residents",tags=['admin'])
async def get_all_residents(token:str=Depends(oauth2)):
    admin_id=admin_token.get_current_user(token)
    return adapter.get_all_residents(admin_id)

@admin_route.get("/get-all-payment",tags=['admin'])
async def get_all_payment(token:str=Depends(oauth2)):
    
    return adapter.get_all_payment()

@admin_route.get("/get-all-pending-payment",tags=['admin'])
async def all_pending_payment(token:str=Depends(oauth2)):
    
    return adapter.get_all_peding_payment()

@admin_route.get("/view_image_payment/{payment_id}",tags=['admin'])
async def view_image_payment(payment_id:str,token:str=Depends(oauth2)):
    id_admin=admin_token.get_current_user(token)
    return adapter.view_image_payment(payment_id)

@admin_route.put("/review-payment/{payment_id}",tags=['admin'])
async def review_payment(payment_id,token:str=Depends(oauth2)):
    return adapter.review_payment(payment_id)