import instance from "../../configAxios";
import FormData from "form-data"

export default async function getInfoResident(token) {
 
  

  const form=new FormData();
  const formHeaders=form.getHeaders;
  
    const result =await instance.get("/resident/get_info_resident",  {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${token}`},
    });
   
    
    return result;
}
