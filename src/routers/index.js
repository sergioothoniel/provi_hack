import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routers(){
    return(
        <Switch>
            <Route path={"/login"}><Login/></Route>
            <Route path={"/register"}><Register/></Route>
            <Route path={"/"}><Home/></Route>
        </Switch>
    )
}

export default Routers