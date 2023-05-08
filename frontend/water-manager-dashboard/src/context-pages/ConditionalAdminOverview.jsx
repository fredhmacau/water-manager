import Login from "../pages/Login";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import Overview from "../pages/Overview";

export default function ConditionalAdminOverview(animate){
    const ctx=useContext(AuthContext);
    ctx.isLogin=localStorage.getItem("access_token")
    && localStorage.getItem("entity_status")
    ?true:false;
    return(
      <>
          {
            ctx.isLogin && localStorage.getItem("entity_status")=="admin"?(
                 
                <Overview/>
            ):
            (
                <Navigate to="/admin/login" replace/>
            )
        }
      </>
    )
}