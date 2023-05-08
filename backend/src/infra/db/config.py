from sqlmodel import create_engine,Session
from pymongo import MongoClient
from urllib.parse import quote_plus
from src.infra.models import *

#database mysql
mysql_db_name="mysql+pymysql://root:%s@localhost/blogAPI"%(quote_plus('fredericodev@92424'))
#database nosql Mongodb
client_mongodb=MongoClient("mongodb://localhost:27017/drain-easy")

#database sqlite
sqlite_file_name="drain_easy_db.db"

sql_url=f"sqlite:///{sqlite_file_name}"

engine=create_engine(sql_url,echo=True)
create_session=Session(engine)