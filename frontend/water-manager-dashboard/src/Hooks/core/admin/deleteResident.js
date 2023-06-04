import instance from "../../configAxios";
import FormData from "form-data"

export default async function DeleteResident(resident_id) {
 
  

  const form=new FormData();
  const formHeaders=form.getHeaders;
  
    const result =await instance.delete(`/admin/delete-resident/${resident_id}`,  {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${localStorage.getItem("access_token")}`},
    });
   
    
    return result;
}
