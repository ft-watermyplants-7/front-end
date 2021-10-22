import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PlantList.css";
import PlantCard from "../PlantCard/PlantCard";
import { fetchPlants } from "../../actions/plantActions";

const PlantList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //thunk action to fetch all plants
    dispatch(fetchPlants());
  }, [dispatch]);
  const { plants } = useSelector((state) => state.plantState);
  const { user } = useSelector((state) => state.userState);
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
          {plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlantList;
