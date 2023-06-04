import instance from "../../configAxios";
import FormData from "form-data"

export default async function getAllResidents() {
 
  

  const form=new FormData();
  const formHeaders=form.getHeaders;
  
    const result =await instance.get("/admin/get_all_residents",  {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${localStorage.getItem("access_token")}`},
    });
   
    
    return result;
}
