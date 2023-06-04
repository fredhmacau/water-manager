import instance from "../../configAxios";
import FormData from "form-data"

export default async function sendPayment(package_name,img) {
 
  

  const form=new FormData();
  form.append("package_name",package_name);
  form.append("image",img.target.files[0]);
  const formHeaders=form.getHeaders;
  
    const result =await instance.post("/resident/register-payment",form , {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${localStorage.getItem("access_token")}`},
    });
   
    
    return result;
}
