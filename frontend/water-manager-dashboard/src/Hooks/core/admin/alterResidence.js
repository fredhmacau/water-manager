import instance from "../../configAxios";
import FormData from "form-data"

export default async function alterResidence(preview_residence,new_residence) {
 
  

  const form=new FormData();
  const formHeaders=form.getHeaders;
  
    const result =await instance.put(`/admin/alter-residence/${preview_residence}/${new_residence}`,  {
      headers: {
        ...formHeaders
    }});
   
    
    return result;
}
