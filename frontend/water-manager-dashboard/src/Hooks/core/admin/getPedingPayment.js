import instance from "../../configAxios";
import FormData from "form-data"

export default async function getPedingPayment() {
 
  

  const form=new FormData();
  const formHeaders=form.getHeaders;
  
    const result =await instance.get("/admin/get-all-pending-payment",  {
      headers: {
        ...formHeaders,
        Authorization: `Bearer ${localStorage.getItem("access_token")}`},
    });
   
    
    return result;
}
