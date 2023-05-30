import adminLogin from "./core/admin/adminLogin"
import residentLogin from "./core/resident/residentLogin";
import getInfoAdmin from "./core/admin/getInfoAdmin";
import registerResident from "./core/admin/registerResident";
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
    const insertResident=async function(values,img){
        const response=await registerResident(values,img)
        return response;
    }
    return {
        loginAdmin,
        loginResident,
        getAdminInfo,
        getRegistersSize,
        insertResident
    }
}

export default useHttp;