from src.infra.db import create_session
from src.infra.models import Resident,Payment
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse

msresponse=MSResponse

def get_all_info_resident(resident_id):
    try:
        with create_session as session:
            statement = select(Resident.resident_id,Resident.username,Resident.status_payment).where(Resident.resident_id == "%s" % (resident_id))
            
            result=session.exec(statement).one()
            all_payment=session.exec(select(Payment).where(Payment.resident_id==resident_id)).all()
            all_payment_peding=session.exec(select(Payment).where(Payment.status==0)).all()
            return {
                "info_resident":{**result},
                "all_payments":len(all_payment),
                "all_peding_payments":len(all_payment_peding),
            }
    except Exception as exc:
        raise msresponse.msg_request_bad(f"error:try again later")