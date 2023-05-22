import Login from "../pages/Login";
import { useContext } from "react";
import AuthContext from "../context/auth-context";
import { Navigate } from "react-router-dom";
import OverviewResident from "../pages/OverviewResident";

export default function ConditionalResidentOverview(animate){
    const ctx=useContext(AuthContext);
    ctx.isLogin=localStorage.getItem("access_token")
    && localStorage.getItem("entity_status")
    ?true:false;
    return(
      <>
          {
            ctx.isLogin && localStorage.getItem("entity_status")=="resident"?(
                <OverviewResident/>
            ):
            (
                <Navigate to="/resident/login" replace/>
            )
        }
      </>
    )
}