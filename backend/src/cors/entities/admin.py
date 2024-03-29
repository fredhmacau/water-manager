from src.cors.usecases.admin import create_acount_admin
from src.cors.usecases.admin import register_account_resident
from src.cors.usecases.admin import view_image_of_admin
from src.cors.usecases.admin import get_all_info_admin
from src.cors.usecases.admin import get_all_info_residents
from src.cors.usecases.admin import get_all_payments
from src.cors.usecases.admin import review_in_payment
from src.cors.usecases.admin import get_all_peding_payments
from src.cors.usecases.admin import view_image_of_payment
from src.cors.usecases.admin import delete_resident_in_database
from src.cors.usecases.admin import alter_residence_resident
class AdminEntity:
    """_summary_
    """

    def __init__(self) -> None:
        return None
    
    @classmethod
    def create_admin(self, data,img_admin):
        resp = create_acount_admin(data,img_admin)
        return resp
    
    @classmethod
    def create_account_resident(self, data,admin_id,backgrountask):
        resp = register_account_resident(data,admin_id,backgrountask)
        return resp
    
    @classmethod
    def view_image_admin(self,id_admin):
        resp=view_image_of_admin(id_admin)
        return resp
    
    @classmethod
    def get_info_admin(self,admin_id):
        resp=get_all_info_admin(admin_id)
        return resp
    
    @classmethod
    def get_all_residents(self,admin_id):
        resp=get_all_info_residents(admin_id)
        return resp
    
    @classmethod
    def get_all_payment(self):
        resp=get_all_payments()
        return resp
    
    @classmethod
    def get_all_peding_payment(self):
        resp=get_all_peding_payments()
        return resp
    
    @classmethod
    def review_payment(self, payment_id):
        resp=review_in_payment(payment_id)
        return resp
    
    @classmethod
    def view_image_payment(self,payment_id):
        resp=view_image_of_payment(payment_id)
        return resp
    
    @classmethod
    def delete_resident(self,resident_id):
        resp=delete_resident_in_database(resident_id)
        return resp
    
    @classmethod
    def alter_residence(self,previous_residence,new_residence):
        resp=alter_residence_resident(previous_residence,new_residence)
        return resp