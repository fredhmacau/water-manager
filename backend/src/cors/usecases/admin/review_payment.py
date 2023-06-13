from src.infra.db import create_session
from sqlmodel import select
from src.infra.models import Payment,Resident
from src.infra.feedback import MSResponse



msresponse = MSResponse


def review_in_payment(payment_id):

    try:
       with create_session as session:
           
            statement = select(Payment).where(
                Payment.payment_id== "%s" % (payment_id))
            results = session.exec(statement).one()
            update_payment=results
            resident=session.exec(select(Resident).where(Resident.resident_id==results.resident_id))
            update_payment.status=1
            update_resident=resident.one()
            update_resident.status_payment=True
            session.add(update_payment)
            session.add(update_resident)
            session.commit()
            session.refresh(update_payment)
            session.refresh(update_resident)
            
            return msresponse.msg_ok("payment verified with success")
           
    except Exception as exc:
        raise msresponse.msg_created_error(
            f"error when updating virified pay:try again later")
        