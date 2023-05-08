# bcrypt for decode passowrd
from bcrypt import checkpw
#jwt for coding token
import jwt
from sqlmodel import select
from src.infra.db import create_session
from src.infra.feedback import MSResponse
from src.infra.models import Resident

#constants
SECRET="9c1f5e6705012fdc76df5717dfb979a23d7b66f48ee24662f8e4f710730fd6f1"
ALGORITHM="HS256"
response=MSResponse

#class for autenticate and authorization
class ResidentToken:
    """_summary_
    """    
    @classmethod
    def __verify_password(cls,password:str,hashed_password:str):
        result= checkpw(password.encode("utf-8"),hashed_password.encode("utf-8"))
        return True if result else False

    #check user in db
    @classmethod
    def __verify_user(cls,username):
        with create_session as session:
            statement=select(Resident.resident_id,Resident.username,Resident.email,Resident.password)
            result=session.exec(statement.where(Resident.username==f"{username}")).fetchone()
            if result:
                return result
            else:
                return False
    
    @classmethod
    def __authenticate_user(cls,data):
        user=cls.__verify_user(data['username'])
        if user:
            if cls.__verify_password(data['password'],user['password']):
                return user
            else:
                return False
        else:
            return False
            
    @classmethod
    def create_access_token(cls,data):
        user_auth=cls.__authenticate_user(data)
        if user_auth:
            try:
                values={"resident_id":user_auth['resident_id']}
                token=jwt.encode(values,SECRET,ALGORITHM)
                return response.msg_ok(msg={"access_token":token,"token_type":"Bearer","status":"admin"})
            except (Exception) as exc:
                raise response.msg_created_error({"error":f"{exc}"})
        else:
            raise response.msg_request_bad(msg="username or password is invalid!!")
    
  
    @classmethod
    def get_current_user(cls,token):
        try:
            payload=jwt.decode(token,SECRET,ALGORITHM)
            return payload.get('resident_id')
        except (Exception) as exc:
            raise response.msg_request_bad(msg=f"{exc}")