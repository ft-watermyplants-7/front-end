import React from "react";
import "./PlantDetails.css";
import { useHistory, useParams } from "react-router-dom";

const testPlant = {
  id: 28343,
  nickname: "Test Plant Details",
  species: "Fern",
  h20Frequency: "daily",
  image: "https://i.gyazo.com/314a68a8a8020f16036a32afd2c45198.png",
};
const PlantDetails = () => {
  const { push } = useHistory();
  const { id } = useParams();
  //eventually a useEffect will go here that on mount does a GET request to fetch a plant by id
  //just going to mock dummy data for now

  const handleDelete = () => {
    push("/plants");
  };
  const handleEdit = () => {
    push(`/plants/edit/${id}`);
  };
  return (
    <div className="plant-section">
      {!testPlant ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="plant-nickname">{testPlant.nickname}</div>
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
                <span>{testPlant.nickname}</span>
              </div>
              <div>
                <span>Species</span>
                <span>{testPlant.species}</span>
              </div>
              <div>
                <span>H20 Frequency</span>
                <span>{testPlant.h20Frequency}</span>
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
            <img src={testPlant.image} alt={testPlant.nickname} />
          </div>
        </>
      )}
    </div>
  );
};

export default PlantDetails;
