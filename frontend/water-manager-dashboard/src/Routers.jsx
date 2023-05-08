import {
    BrowserRouter,Route,Routes
} from "react-router-dom";
import Overview from "./pages/Overview";
import Packages from "./pages/Packages";
import Registers from "./pages/Registers";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import LoginResident from "./pages/LoginResident";
import OverviewResident from "./pages/OverviewResident";
import PackagesResident from "./pages/PackagesResident";
import AuthContext from "./context/auth-context";
import ConditionalLoginAdmin from "./context-pages/ConditionalLoginAdmin";
import ConditionalAdminIndex from "./context-pages/ConditionalAdminIndex";
import ConditionalAdminOverview from "./context-pages/ConditionalAdminOverview";
import ConditionalAdminPackages from "./context-pages/ConditionalAdminPackages";
import ConditionalAdminRegisters from "./context-pages/ConditionalAdminRegisters";
import ConditionalAdminRegisterUser from "./context-pages/ConditionalAdminRegisterUser";
const Routers=function (){
    return (
        <AuthContext.Provider value={{isLogin:localStorage.getItem("access_token")&& 
        localStorage.getItem("entity_status")?true:false
        }}>
        <BrowserRouter>
            <Routes>
                <Route path="admin" exact element={<ConditionalAdminIndex animate={true}/>}/>
                <Route path="admin/overview"  exact element={<ConditionalAdminOverview animate={true}/>} />
                <Route path="admin/packages"   element={<ConditionalAdminPackages animate={true}/>} />
                <Route path="admin/registers"   element={<ConditionalAdminRegisters animate={true}/>} />
                <Route path="admin/register"   element={<ConditionalAdminRegisterUser animate={true}/>} />
                <Route path="admin/login" element={<ConditionalLoginAdmin animate={true}/>} />
                <Route path="resident/login" element={<LoginResident/>}/>
                <Route path="resident/overview" element={<OverviewResident/>}/>
                <Route path="resident/packages"   element={<PackagesResident/>} />
            </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default Routers;