from src.infra.db import create_session
from src.infra.models import Admin
import uuid
from src.infra.feedback import MSResponse
import bcrypt
from bcrypt import hashpw

#responses
msresponse=MSResponse


def hash_password(password:str):
    return hashpw(password.encode(),bcrypt.gensalt())


def create_acount_admin(data,image_admin):

    try:
        with create_session as conn:
            values=Admin(
                admin_id=uuid.uuid4().hex,
                username=data['username'],
                password=hash_password(data['password']),
                email=data['email'],
                img=image_admin["read"],
                img_name=image_admin["img_filename"],
                img_type=image_admin["img_type"]
                )
            conn.add(values)
            conn.commit()
            return msresponse.msg_created_success("create admin with success")
        
    except Exception as exc:
        raise msresponse.msg_created_error(msg=f"error:try again later")
