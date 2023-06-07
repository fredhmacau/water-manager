from src.cors.usecases.resident import register_payment_by_resident
from src.cors.usecases.resident import get_all_info_resident
from src.cors.usecases.resident import view_image_of_resident
from src.cors.usecases.resident import get_all_info_by_number_device
from src.cors.usecases.resident import send_message_for_finish_package
from src.cors.usecases.resident import register_volume_and_fluxo
class ResidentEntity:
    """_summary_
    """

    def __init__(self) -> None:
        return None
    
    @classmethod
    def register_payment(self,data,resident_id,img):
        resp=register_payment_by_resident(data,resident_id,img)
        return resp
    
    @classmethod
    def get_info_resident(self,resident_id):
        resp=get_all_info_resident(resident_id)
        return resp
    
    @classmethod
    def view_image_resident(self,id_resident):
        resp=view_image_of_resident(id_resident)
        return resp

    @classmethod
    def get_info_by_number_device(self,number_device):
        resp=get_all_info_by_number_device(number_device)
        return resp
    @classmethod
    def send_message_finish_package(self,resident_id):
        resp=send_message_for_finish_package(resident_id)
        return resp
    @classmethod
    def send_volume_and_fluxo(self,number_device,data):
        resp=register_volume_and_fluxo(number_device,data)
        return resp