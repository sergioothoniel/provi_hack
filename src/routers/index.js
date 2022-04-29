import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routers(){
    return(
        <Switch>
            <Route path={"/login"}><Login/></Route>
            <Route path={"/register"}><Register/></Route>
        </Switch>
    )
}

export default Routers