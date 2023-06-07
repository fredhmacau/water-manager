from src.infra.db import create_session
from src.infra.models import Resident,Payment
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse
from src.infra.services import sender_message
def send_message_for_finish_package(number_device):
    try:
        with create_session as transation:
            last_payment=transation.exec(select(Resident.resident_id,Resident.username,Resident.contact,Resident.residence_n,Payment.status,Payment.package_name).where(Resident.residence_n==number_device).order_by(Payment.payment_id.desc()).limit(1)).one()
            resident=transation.exec(select(Resident).where(Resident.residence_n==number_device)).one()
            
            if last_payment:
                update_resident=resident
                update_resident.status_payment=False
                transation.add(update_resident)
                transation.commit()
                transation.refresh(update_resident)
                sender_message.sender_sms_finish(last_payment.username,
                                                 last_payment.package_name,
                                                 last_payment.contact)
                return MSResponse.msg_ok("ok")
            else:
                raise MSResponse.msg_request_bad("device not found")
    except Exception as exc:
        raise MSResponse.msg_request_bad(f"error:{exc}")