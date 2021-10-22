import React, { useState } from "react";
import "./EditPlantForm.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPlant } from "../../actions/plantActions";

const EditPlantForm = (props) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const plant = props.location.state;

  const [editedPlant, setEditedPlant] = useState(plant);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEditedPlant({
      ...editedPlant,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      editedPlant.nickname === "" ||
      editedPlant.species === "" ||
      editedPlant.h2oFrequency === ""
    ) {
      setError("Nickname, species, and h20 frequency are required fields");
    } else {
      dispatch(editPlant(plant.plant_id, editedPlant));
      push(`/plants/${plant.plant_id}`);
    }
  };

  return (
    <div className="edit-wrapper">
      <div className="edit-plant-container">
        <h2>Edit Plant Details</h2>
        <form className="edit-plant-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nickname"
            value={editedPlant.nickname}
            name="nickname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Species"
            value={editedPlant.species}
            name="species"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="H20 Frequency"
            value={editedPlant.h2oFrequency}
            name="h2oFrequency"
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </form>
        {error ? (
          <p
            style={{
              color: "red",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            {error}
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default EditPlantForm;
