from sqlmodel import SQLModel,Field
import  sqlalchemy as sa
from sqlalchemy import ForeignKey,Column,String
import datetime as date
from typing import Optional


class Payment(SQLModel,table=True):
    __tablename__="payment"
    payment_id:str = Field(default=None, primary_key=True,
                           nullable=False, unique=True)
    package_name:str = Field(default=None,nullable=False)
    status:int=Field(default_factory=0,nullable=False)
    img: Optional[bytes] = Field(
        default=None, sa_column=sa.Column(sa.LargeBinary))
    img_name: Optional[str] = Field(default=None, nullable=False)
    img_type: str = Field(default=None, nullable=False)
    created_at: date.datetime = Field(
        default_factory=date.datetime.utcnow, nullable=False)
    resident_id:str = Field(default=None, sa_column=Column(
        String, ForeignKey("resident.resident_id", ondelete="CASCADE", onupdate="CASCADE")))
    