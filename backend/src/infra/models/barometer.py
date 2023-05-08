from pydantic import BaseModel
from datetime import datetime

class Barometer(BaseModel):
    resident_id:str
    date:datetime
    volume:str
    