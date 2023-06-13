import io
from src.infra.models import Resident
from src.infra.feedback import MSResponse
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.db import create_session

msresponses=MSResponse

def view_image_of_resident(id_resident: str):
    try:
        with create_session as session:
            statement = select(Resident).options(
                load_only(
                    "img","img_type")
                    ).where(Resident.resident_id == "%s" % (id_resident))
            result = session.exec(statement).one()
            if result:
                img=io.BytesIO(result.img)
                return msresponses.return_file(img.read(),result.img_type)
            else:
                return msresponses.msg_request_not_found(msg="image not found")
    except Exception as exc:
        raise msresponses.msg_request_bad(f"error:try again later")
