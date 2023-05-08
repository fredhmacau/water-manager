from src.infra.http.main import api
from uvicorn import run

if __name__=="__main__":
    run(api)