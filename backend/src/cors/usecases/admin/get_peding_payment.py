from src.infra.db import create_session
from src.infra.models import Payment, Resident
from sqlmodel import select
from sqlalchemy.orm import load_only
from src.infra.feedback import MSResponse

msresponse = MSResponse


def get_all_peding_payments():

    try:
        with create_session as session:
            statement = select(
                Payment.package_name, Payment.status, Payment.created_at,
                Payment.payment_id, Resident.username,Resident.residence_n,
                Resident.contact).where(  # type: ignore
                    Payment.resident_id == Resident.resident_id).where(
                        Payment.status == 0)
            result = session.exec(statement).all()
            return result
    except Exception as exc:
        raise msresponse.msg_request_bad(f"error:{exc}")