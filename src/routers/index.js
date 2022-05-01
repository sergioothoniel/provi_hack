import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
    </Switch>
  );
}

export default Routers;
