import React from "react";
import "./PlantDetails.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePlant } from "../../actions/plantActions";

const PlantDetails = (props) => {
  const { push } = useHistory();
  const plant = props.location.state;
  console.log("PLANT IN DETAILS:", plant);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePlant(plant.plant_id));
    push("/plants");
  };
  const handleEdit = () => {
    push(`/plants/edit/${plant.plant_id}`);
  };
  return (
    <div className="plant-section">
      {!plant ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="plant-info">
              <div>
                <span>Nickname</span>
                <span>{plant.nickname}</span>
              </div>
              <div>
                <span>Species</span>
                <span>{plant.species}</span>
              </div>
              <div>
                <span>H20 Frequency</span>
                <span>{plant.h2oFrequency} times a week.</span>
              </div>
            </div>
            <div className="plant-desc">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam sapiente quas illo dolores itaque debitis ab officiis
                doloribus id magni?
              </p>
            </div>
            <div className="button-group">
              <button onClick={handleDelete} className="btn btn-danger">
                Delete
              </button>
              <button onClick={handleEdit} className="btn btn-success">
                Edit
              </button>
            </div>
          </div>

          <div className="section-right">
            <img
              src="https://i.gyazo.com/b81f783f5caf6a6ba9c24025ae677b53.png"
              alt={plant.nickname}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PlantDetails;
