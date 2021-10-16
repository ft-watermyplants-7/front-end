import React from "react";
import { connect } from "react-redux";
import "./PlantList.css";
import PlantCard from "../PlantCard/PlantCard";

const PlantList = (props) => {
  const { plants, users } = props;
  console.log(users);
  // console.log(plants);
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. Water Your Plants</h1>
        <p className="pl-desc">
          Never forget to water your plants again with this App.
        </p>
      </div>
      <div className="pl-list">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    plants: state.plantState.plants,
    users: state.userState.users,
  };
};
export default connect(mapStateToProps)(PlantList);
