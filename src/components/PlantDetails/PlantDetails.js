import React, { useState } from "react";
import "./PlantDetails.css";
import { useHistory, useParams } from "react-router-dom";
import { deletePlant } from "../../actions/plantActions";
import { connect } from "react-redux";

const testPlant = {
  id: 28343,
  nickname: "Test Plant Details",
  species: "Fern",
  h20Frequency: "daily",
  image: "https://i.gyazo.com/314a68a8a8020f16036a32afd2c45198.png",
};
const PlantDetails = (props) => {
  const { deletePlant } = props;
  const { push } = useHistory();
  const { id } = useParams();
  const [plant, setPlant] = useState(testPlant);
  //eventually a useEffect will go here that on mount does a GET request to fetch a plant by id
  //just going to mock dummy data for now

  const handleDelete = () => {
    deletePlant(id);
    push("/plants");
  };
  const handleEdit = () => {
    push(`/plants/edit/${id}`);
    setPlant({});
  };
  return (
    <div className="plant-section">
      {!plant ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="plant-nickname">{plant.nickname}</div>
            <div className="plant-desc">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam sapiente quas illo dolores itaque debitis ab officiis
                doloribus id magni?
              </p>
            </div>
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
                <span>{plant.h20Frequency}</span>
              </div>
            </div>
          </div>
          <div className="button-group">
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
            <button onClick={handleEdit} className="btn btn-success">
              Edit
            </button>
          </div>
          <div className="section-right">
            <img src={plant.image} alt={plant.nickname} />
          </div>
        </>
      )}
    </div>
  );
};

export default connect(null, { deletePlant })(PlantDetails);
