from src.infra.db import create_session
from src.infra.models import Admin
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse

msresponse=MSResponse

def get_all_info_admin(admin_id):
    try:
        with create_session as session:
            statement = select(Admin).where(Admin.admin_id == "%s" % (admin_id)).options(load_only("username", "email"))
            result=session.exec(statement).one()
            return result
    except Exception as exc:
        raise msresponse.msg_request_bad(f"error:{exc}")