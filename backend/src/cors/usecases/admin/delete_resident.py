from src.infra.db import create_session
from src.infra.models import Resident
from src.infra.feedback import MSResponse
from sqlmodel import select

def delete_resident_in_database(resident_id):
    #deletar ou remover residente do banco de dados
    #delete or remove database resident
    try:
        with create_session as conn:
            resident=conn.exec(select(Resident).where(Resident.resident_id==resident_id)).one()
            conn.delete(resident)
            conn.commit()
            return MSResponse.msg_ok("deleted with success")
            
    
    except Exception as exc:
        raise MSResponse.msg_request_bad("exception:{exc}")
    
    