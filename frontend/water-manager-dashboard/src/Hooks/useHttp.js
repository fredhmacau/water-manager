import adminLogin from "./core/admin/adminLogin"
import residentLogin from "./core/resident/residentLogin";
import getInfoAdmin from "./core/admin/getInfoAdmin";
const useHttp=function(){
    const loginAdmin=async function(values){
        const response=await adminLogin(values)
        return response;
    }
    const loginResident=async function(values){
        const response=await residentLogin(values);
        return response;
    }
    const getAdminInfo=async function(token){
        const response=await getInfoAdmin(token);
        return response;
    }
    const getRegistersSize=async function(token){
        const response=await getRegistersSize(token)
        return response;
    }
    return {
        loginAdmin,
        loginResident,
        getAdminInfo,
        getRegistersSize
    }
}

export default useHttp;