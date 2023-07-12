from src.infra.db import create_session
from sqlmodel import select
from src.infra.models import Resident
from src.infra.feedback import MSResponse


def alter_residence_resident(previous_residence,new_residence):
    try:
       with create_session as session:
           get_previous=session.exec(select(Resident).where(Resident.residence_n==previous_residence)).one()
           check_resident=session.exec(select(
               Resident).where(Resident.residence_n==new_residence)).one_or_none()
           if check_resident:
               update_resident_1=get_previous
               update_resident_1.residence_n=new_residence
               update_resident_2=check_resident
               update_resident_2.residence_n=previous_residence
               session.add(update_resident_1)
               session.add(update_resident_2)
               session.commit()
               session.refresh(update_resident_1)
               session.refresh(update_resident_2)
               return MSResponse.msg_ok("residence alter with success")
           else:
               update_resident_1=get_previous
               update_resident_1.residence_n=new_residence
               session.add(update_resident_1)
               session.commit()
               session.refresh(update_resident_1)
               return MSResponse.msg_ok("residence alter with success")
        
            
            
           
    except Exception as exc:
        raise MSResponse.msg_created_error(
            f"error when updating virified pay:{exc}")