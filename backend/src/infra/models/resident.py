from sqlmodel import SQLModel,Field
from typing import Optional
import  sqlalchemy as sa
from sqlalchemy import ForeignKey,Column,String
import datetime as date

class Resident(SQLModel,table=True):
    __tablename__="resident"
    resident_id:str = Field(default=None, primary_key=True,
                           nullable=False, unique=True)
    username: str = Field(default=None, nullable=False,
                          unique=True, min_length=4)
    email: str = Field(default=None, nullable=False,
                       unique=True, max_length=100)
    contact:int=Field(default=None,nullable=False)
    password: str = Field(default=None, nullable=False)
    residence_n:int=Field(default=None,nullable=False)
    img: Optional[bytes] = Field(nullable=True,
        default=None, sa_column=sa.Column(sa.LargeBinary))
    img_name: Optional[str] = Field(default=None, nullable=True)
    img_type: str = Field(default=None, nullable=True)
    bi:str=Field(default=None,nullable=False)
    admin_id:str = Field(default=None, sa_column=Column(
        String, ForeignKey("admin.admin_id", ondelete="CASCADE", onupdate="CASCADE")))
    created_at: date.datetime = Field(
        default_factory=date.datetime.utcnow, nullable=False)