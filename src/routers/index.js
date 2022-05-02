import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Anunciar from "../pages/Anunciar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import Register from "../pages/Register";

function Routers() {
  const [token, setToken] = useState(window.localStorage.getItem("authHack"));

  return (
    <Switch>
      <Route exact path={"/"}>
        <Home token={token} setToken={setToken} />
      </Route>
      <Route path={"/login"}>
        <Login setToken={setToken} />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
      <Route path={"/perfil"}>
        <Perfil />
      </Route>
      <Route path={"/post"}>
        <Anunciar />
      </Route>
    </Switch>
  );
}

export default Routers;
