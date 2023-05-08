import React from "react";
const AuthContext=React.createContext({
    isLogin:localStorage.getItem("access_token")&& 
            localStorage.getItem("entity_status")?true:false
    
});

export default AuthContext;