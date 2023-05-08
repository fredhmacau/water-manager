from src.infra.models import Resident,Admin
import uuid
from src.infra.feedback import MSResponse
from src.infra.db import create_session
import bcrypt
from sqlmodel import select
import random
from src.infra.services import sender_sms

#responses
msresponse=MSResponse

def encode_password(password:str):
    return bcrypt.hashpw(password.encode("utf-8"),bcrypt.gensalt())

def generator_password():
    number=random.randint(100000,999999)
    return number

def register_account_resident(data:dict,img:dict,admin_id):

    try:
        
        with create_session as conn:
            password_generate=generator_password()
            add_resident=Resident(
                resident_id=uuid.uuid4().hex,
                admin_id=admin_id,
                contact=data['contact'],
                username=data['username'],
                email=data['email'],
                password=encode_password(str(password_generate)),
                img=img["read"],
                residence_n=data['residence_n'],
                img_name=img["img_filename"],
                img_type=img["img_type"]
            )
            conn.add(add_resident)
            conn.commit()
            sender_sms(password_generate,data['contact'])
            return msresponse.msg_created_success("created with success")

    except Exception as exc:
        raise msresponse.msg_created_error(exc)
