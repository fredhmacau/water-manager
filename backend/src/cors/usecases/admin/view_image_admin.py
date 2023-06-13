import io
from src.infra.models import Admin
from src.infra.feedback import MSResponse
from sqlmodel import  select
from sqlalchemy.orm import load_only
from src.infra.db import create_session

msresponses=MSResponse

def view_image_of_admin(id_admin: str):
    try:
        with create_session as session:
            statement = select(Admin).options(
                load_only(
                    "img","img_type")
                    ).where(Admin.admin_id == "%s" % (id_admin))
            result = session.exec(statement).one()
            if result:
                img=io.BytesIO(result.img)
                return msresponses.return_file(img.read(),result.img_type)
            else:
                return msresponses.msg_request_not_found(msg="image not found")
    except Exception as exc:
        raise msresponses.msg_request_bad(f"error:try again later")
