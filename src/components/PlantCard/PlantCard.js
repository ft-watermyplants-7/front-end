import React from "react";
import "./PlantCard.css";
import { Link } from "react-router-dom";

const PlantCard = (props) => {
  const { plant } = props;
  return (
    <div className="p">
      <Link to={`/plants/${plant.id}`}>
        <img src={plant.image} alt={plant.nickname} className="p-img" />
        <div className="p-desc">
          <p>Nickname: {plant.nickname}</p>
          <p>Species: {plant.species}</p>
          <p>Water: {plant.h20Frequency}</p>
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
