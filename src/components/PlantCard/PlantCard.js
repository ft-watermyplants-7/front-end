import React from "react";
import "./PlantCard.css";
import { Link } from "react-router-dom";

const PlantCard = (props) => {
  const { plant } = props;
  return (
    <div className="p">
      <Link to={{ pathname: `/plants/${plant.plant_id}`, state: plant }}>
        <img
          src="https://i.gyazo.com/7497d9c2bbd77f8fd2f55ecb54b8a038.png"
          alt={plant.nickname}
          className="p-img"
        />
        <div className="p-desc">
          <p>Nickname: {plant.nickname}</p>
          <p>Species: {plant.species}</p>
          <p>Water: {plant.h2oFrequency}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            repellendus quis assumenda alias, aspernatur expedita possimus.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;
