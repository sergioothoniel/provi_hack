import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Rente from "../pages/Rente";

function Routers() {
  return (
    <Switch>
      <Route exect path={"/"}>
        <Home />
      </Route>

      <Route path={"/login"}>
        <Login />
      </Route>

      <Route path={"/register"}>
        <Register />
      </Route>

      <Route path={"/rente"}>
        <Rente />
      </Route>
    </Switch>
  );
}

export default Routers;
