from sqlmodel import SQLModel,Field
from typing import Optional
import  sqlalchemy as sa

class Admin(SQLModel,table=True):
    __tablename__="admin"
    admin_id:str = Field(default=None, primary_key=True,
                           nullable=False, unique=True)
    username: str = Field(default=None, nullable=False,
                          unique=True, min_length=4)
    email: str = Field(default=None, nullable=False,
                       unique=True, max_length=100)
    password: str = Field(default=None, nullable=False)
    img: Optional[bytes] = Field(
        default=None, sa_column=sa.Column(sa.LargeBinary))
    img_name: Optional[str] = Field(default=None, nullable=False)
    img_type: str = Field(default=None, nullable=False)