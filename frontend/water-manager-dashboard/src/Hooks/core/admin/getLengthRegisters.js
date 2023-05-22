import instance from "../../configAxios";
import FormData from "form-data"

export default async function getLengthRegisters(token) {
 
  

  const form=new FormData();
  const formHeaders=form.getHeaders;
  
    const result =await instance.get("/admin/get_info_admin",  {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${token}`},
    });
   
    
    return result;
}
