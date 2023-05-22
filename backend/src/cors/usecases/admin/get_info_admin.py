from src.infra.db import create_session
from src.infra.models import Admin,Resident,Payment
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse

msresponse=MSResponse

def get_all_info_admin(admin_id):
    try:
        with create_session as session:
            statement = select(Admin.admin_id,
                                  Admin.email,
                                  Admin.username,
                                  ).where(
                                      Admin.admin_id == "%s" % (admin_id))
            statement_2=select(Resident.contact,
                                  Resident.email,
                                  Resident.resident_id).where(Resident.admin_id=="%s"%(admin_id))
            result=session.exec(statement).one()
            result_resident_size=session.exec(statement_2).all()
            statement_3 = select(Payment.package_name,Payment.status,Payment.created_at,Payment.payment_id,Resident.username).where(
                Payment.resident_id==Resident.resident_id).where(Payment.status==0)
            result_peding_payment=session.exec(statement_3).all()
            return {
                "info_admin":{**result},
                "all_residents":len(result_resident_size),
                "all_peding_payment":len(result_peding_payment),
                "devices":1
            }
    except Exception as exc:
        raise msresponse.msg_request_bad(f"error:{exc}")