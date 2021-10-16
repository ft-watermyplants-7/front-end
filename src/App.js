import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
