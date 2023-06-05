from src.infra.db import create_session
from sqlmodel import select
from src.infra.models import Payment
from src.infra.feedback import MSResponse



msresponse = MSResponse


def review_in_payment(payment_id):

    try:
       with create_session as session:
           
            statement = select(Payment).where(
                Payment.payment_id== "%s" % (payment_id))
            results = session.exec(statement)
            update_payment=results.one()
            update_payment.status=1
            
            session.add(update_payment)
            session.commit()
            session.refresh(update_payment)
            
            return msresponse.msg_ok("payment verified with success")
           
    except Exception as exc:
        raise msresponse.msg_created_error(
            f"error when updating virified pay:{exc}")
        