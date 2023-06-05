from src.infra.db import create_session
from src.infra.models import Resident,Payment
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse

def get_all_info_by_number_device(number_device):
    try:
        with create_session as transation:
            last_payment=transation.exec(select(Resident.resident_id,Resident.residence_n,Payment.status,Payment.package_name).where(Resident.residence_n==number_device).order_by(Payment.payment_id.desc()).limit(1)).first()
            
            if last_payment:

                return last_payment
            else:
                raise MSResponse.msg_request_bad("device not found")
    except Exception as exc:
        raise MSResponse.msg_request_bad(f"error:{exc}")