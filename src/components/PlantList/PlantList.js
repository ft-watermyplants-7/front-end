import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./PlantList.css";
import PlantCard from "../PlantCard/PlantCard";

const PlantList = (props) => {
  const { plants } = useSelector((state) => state.plantState);
  const { user } = useSelector((state) => state.userState);
  useEffect(() => {
    //thunk action to fetch all plants
  }, []);

  return (
    <div className="plant-list-container">
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">
            Welcome {user.username}! Create & inspire. Water Your Plants
          </h1>
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
    </div>
  );
};
export default PlantList;
