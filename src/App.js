import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Logout from "./components/Logout/Logout";
import PlantList from "./components/PlantList/PlantList";
import PlantDetails from "./components/PlantDetails/PlantDetails";
import HomeModal from "./components/HomeModal/HomeModal";
import AddPlantForm from "./components/AddPlantForm/AddPlantForm";
import EditPlantForm from "./components/EditPlantForm/EditPlantForm";
import EditUserForm from "./components/EditUserForm/EditUserForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="app">
      <Header />
      <HomeModal />
      <Switch>
        <PrivateRoute path="/plants/edit/:id" component={EditPlantForm} />
        <PrivateRoute path="/users/edit/:id" component={EditUserForm} />
        <PrivateRoute path="/plants/add" component={AddPlantForm} />
        <PrivateRoute path="/plants/:id" component={PlantDetails} />
        <PrivateRoute path="/plants" component={PlantList} />
        <PrivateRoute path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </Switch>
      {/* <PlantCarousel /> */}
    </div>
  );
}

export default App;
