import React, { useState, useEffect } from "react";
import "./EditPlantForm.css";
import FileBase64 from "react-file-base64";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditPlantForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const [plant, setPlant] = useState({
    id: Date.now(),
    nickname: "",
    species: "",
    h20Frequency: "",
    image: "",
  });
  //eventual useEffect to get the selected plants data on mount
  useEffect(() => {
    axios
      .get(`/api/plants/edit/${id}`)
      .then((res) => {
        setPlant(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChange = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    push("/plants");
  };

  return (
    <div className="edit-wrapper">
      <div className="edit-plant-container">
        <h2>Edit Plant Details</h2>
        <form className="edit-plant-form" onSubmit={handleSubmit}>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPlantForm;
