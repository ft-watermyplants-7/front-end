import React, { useState } from "react";
import "./AddPlantForm.css";
import FileBase64 from "react-file-base64";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPlant } from "../../actions/plantActions";

const AddPlantForm = (props) => {
  const { push } = useHistory();
  const { addPlant } = props;
  const [plant, setPlant] = useState({
    id: Date.now(),
    nickname: "",
    species: "",
    h20Frequency: "",
    image: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      plant.nickname === "" ||
      plant.species === "" ||
      plant.h20Frequency === ""
    ) {
      setError("Nickname, Species, and H20Frequency are all required fields");
    } else {
      addPlant(plant);
      push("/plants");
    }
  };
  return (
    <div className="add-wrapper">
      <div className="add-plant-container">
        <h2>Add New Plant</h2>
        <form className="add-plant-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nickname"
            value={plant.nickname}
            name="nickname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Species"
            value={plant.species}
            name="species"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="H20 Frequency"
            value={plant.h20Frequency}
            name="h20Frequency"
            onChange={handleChange}
          />
          <div className="file-input">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPlant({ ...plant, image: base64 })}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
        {error ? (
          <p style={{ color: "red", fontSize: "16px", marginTop: "20px" }}>
            {error}
          </p>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default connect(null, { addPlant })(AddPlantForm);
