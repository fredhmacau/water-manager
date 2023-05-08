from src.infra.db import create_session
from src.infra.models import Resident
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse

msresponse=MSResponse

def get_all_info_residents(resident_id):
    try:
        with create_session as session:
            statement = select(Resident).options(load_only("username", "email", "created_at","contact"))
            result=session.exec(statement).all()
            return result
    except Exception as exc:
        raise msresponse.msg_request_bad(f"error:{exc}")