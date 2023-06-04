from src.cors.entities import AdminEntity
from src.cors.entities import ResidentEntity

admin_entity=AdminEntity
resident_entity=ResidentEntity

class FastAPIAdapter:
    """_summary_
    """    
    def __init__(self) -> None:
        return None
    
    @classmethod
    def create_account_admin(self, data,img_admin):
        return admin_entity.create_admin(data,img_admin)
    
    @classmethod
    def create_account_resident(self,data,id_admin,backgroundtask):
        return admin_entity.create_account_resident(data,id_admin,backgroundtask)
    
    @classmethod
    def view_image_admin(self,id_admin):
        return admin_entity.view_image_admin(id_admin)
    
    @classmethod
    def register_payment(self,data,resident_id,img):
        return resident_entity.register_payment(data,resident_id,img)
    
    @classmethod
    def get_info_resident(self,resident_id):
        return resident_entity.get_info_resident(resident_id)
    
    @classmethod
    def get_info_admin(self,admin_id):
        return admin_entity.get_info_admin(admin_id)
    
    @classmethod
    def get_all_residents(self,admin_id):
        return admin_entity.get_all_residents(admin_id)
    
    @classmethod
    def get_all_payment(self):
        return admin_entity.get_all_payment()
    
    @classmethod
    def get_all_peding_payment(self):
        return admin_entity.get_all_peding_payment()
    
    @classmethod
    def review_payment(self,payment_id):
        return admin_entity.review_payment(payment_id)
    
    @classmethod
    def view_image_payment(self, payment_id):
        return admin_entity.view_image_payment(payment_id)
    
    @classmethod
    def view_image_resident(self,id_resident):
        return resident_entity.view_image_resident(id_resident)
    
    @classmethod
    async def delete_resident(self,id_resident):
        return admin_entity.delete_resident(id_resident)