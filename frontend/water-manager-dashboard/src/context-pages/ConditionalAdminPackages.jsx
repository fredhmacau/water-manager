import Login from "../pages/Login";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import Packages from "../pages/Packages";

export default function ConditionalAdminPackages(animate){
    const ctx=useContext(AuthContext);
    ctx.isLogin=localStorage.getItem("access_token")
    && localStorage.getItem("entity_status")
    ?true:false;
    return(
      <>
          {
            ctx.isLogin && localStorage.getItem("entity_status")=="admin"?(
                 
                <Packages/>
            ):
            (
                <Navigate to="/admin/login" replace/>
            )
        }
      </>
    )
}