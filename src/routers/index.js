import { Switch, Route } from "react-router-dom";
import Anunciar from "../pages/Anunciar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import Register from "../pages/Register";

function Routers() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
      <Route path={"/perfil"}>
        <Perfil />
      </Route>
      <Route path={"/post"}><Anunciar/></Route>
    </Switch>
  );
}

export default Routers;
