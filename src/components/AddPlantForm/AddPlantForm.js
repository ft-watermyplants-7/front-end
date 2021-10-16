import React, { useState } from "react";
import "./AddPlantForm.css";
import FileBase64 from "react-file-base64";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPlant } from "../../actions/plantActions";

const AddPlantForm = (props) => {
  const { push } = useHistory();
  const { addPlant } = props;
  const [state, setState] = useState({
    id: Date.now(),
    nickname: "",
    species: "",
    h20Frequency: "",
    image: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlant(state);
    push("/plants");
  };
  return (
    <div className="add-wrapper">
      <div className="add-plant-container">
        <h2>Add New Plant</h2>
        <form className="add-plant-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nickname"
            value={state.nickname}
            name="nickname"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Species"
            value={state.species}
            name="species"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="H20 Frequency"
            value={state.h20Frequency}
            name="h20Frequency"
            onChange={handleChange}
          />
          <div className="file-input">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setState({ ...state, image: base64 })}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { addPlant })(AddPlantForm);
