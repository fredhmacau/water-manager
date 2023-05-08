import adminLogin from "./core/admin/adminLogin"

const useHttp=function(){
    const loginAdmin=async function(values){
        const response=await adminLogin(values)
        return response;
    }
    return {
        loginAdmin
    }
}

export default useHttp;