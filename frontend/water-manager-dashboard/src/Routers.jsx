import {
    BrowserRouter,Route,Routes
} from "react-router-dom";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
const Routers=function (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="admin/overview"  exact element={<Overview/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;