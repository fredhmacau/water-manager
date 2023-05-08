from src.infra.models import Payment
import uuid
from src.infra.feedback import MSResponse
from src.infra.db import create_session
from sqlmodel import select

msresponse=MSResponse

def register_payment_by_resident(data,resident_id,img):
    try:
        
        with create_session as conn:
            register_payment=Payment(
                payment_id=uuid.uuid4().hex,
                package_name=data['package_name'],
                resident_id=resident_id,
                img=img["read"],
                status=0,
                img_name=img["img_filename"],
                img_type=img["img_type"]
            )
            conn.add(register_payment)
            conn.commit()
            
            return msresponse.msg_created_success("created with success")

    except Exception as exc:
        raise msresponse.msg_created_error(exc)