import { Switch, Route } from "react-router-dom";
import Anunciar from "../pages/Anunciar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import Register from "../pages/Register";

function Routers() {
  return (
    <Switch>
<<<<<<< HEAD
      <Route exect path={"/"}>
        <Home />
      </Route>

      <Route path={"/login"}>
        <Login />
      </Route>

      <Route path={"/register"}>
        <Register />
      </Route>
=======
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
>>>>>>> 7b4b532a4bad768affa2cfbbc675f7b448ee6bbb
    </Switch>
  );
}

export default Routers;
