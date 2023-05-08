from src.infra.db import engine
from sqlmodel import SQLModel


def main():
    SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)



if __name__=="__main__":
    main()