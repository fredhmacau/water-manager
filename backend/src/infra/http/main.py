from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.infra.http.admin import admin_route
from src.infra.http.resident import resident_route
# API main
api = FastAPI(title="Drain Easy", description="API for drain easy, water manager")

@api.get("/")
def index():
    return {
        "created_by":"Frederico Macau",
        "created_at":"23/04/2023",
        "name":"water manager api"
    }

api.add_middleware(CORSMiddleware, 
                        allow_origins=["*"], 
                        allow_credentials=True, 
                        allow_methods=["*"], 
                        allow_headers=["*"])

api.include_router(admin_route,prefix="/v1.0",tags=['admin'])
api.include_router(resident_route,prefix="/v1.0",tags=['resident'])
