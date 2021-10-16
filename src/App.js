import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import PlantList from "./components/PlantList/PlantList";
import PlantDetails from "./components/PlantDetails/PlantDetails";
import PlantCarousel from "./components/Carousel/Carousel";
import HomeModal from "./components/HomeModal/HomeModal";

function App() {
  return (
    <div className="app">
      <Header />
      <HomeModal />
      <Switch>
        <Route path="/plants/:id" component={PlantDetails} />
        <Route path="/plants" component={PlantList} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </Switch>
      {/* <PlantCarousel /> */}
    </div>
  );
}

export default App;
