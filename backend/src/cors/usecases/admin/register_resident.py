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

def register_account_resident(data:dict,admin_id,backgroundtask):

    try:
        
        with create_session as conn:
            check_data=conn.execute(select(Resident).where(
                Resident.username==data["email"]).where(Resident.email==data["contact"])).unique()
            if check_data:
                password_generate=generator_password()
                add_resident=Resident(
                    resident_id=uuid.uuid4().hex,
                    admin_id=admin_id,
                    contact=data['contact'],
                    username=data['username'],
                    email=data['email'],
                    password=encode_password(str(password_generate)),
                    status_payment=False,
                    residence_n=data['residence_n'],
                    
                    bi=data["bi"]
                )
                conn.add(add_resident)
                conn.commit()
                sender_sms(password_generate,data['contact'])
                return msresponse.msg_created_success("created with success")
            else:
                raise msresponse.msg_request_bad("email or contact already exists")
    except Exception as exc:
        raise msresponse.msg_created_error(f"try again later")
