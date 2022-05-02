import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Alugar from "../pages/Alugar";
import Anunciar from "../pages/Anunciar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import Register from "../pages/Register";

function Routers() {
  const [auth, setAuth] = useState(false);

  return (
    <Switch>
      <Route exact path={"/"}>
        <Home auth={auth} setAuth={setAuth} />
      </Route>
      <Route path={"/login"}>
        <Login setAuth={setAuth} />
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
      <Route path={"/rent"}>
        <Alugar/>
      </Route>
    </Switch>
  );
}

export default Routers;
