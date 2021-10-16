import React, { useState } from "react";
import "./Carousel.css";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://images.unsplash.com/photo-1444930694458-01babf71870c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    altText: "",
    caption: "Watering Plants, but easier.",
  },
  {
    src: "https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?b=1&k=20&m=658291850&s=170667a&w=0&h=ZGlhxLg0AnDnD4tmgQG15rJgLQnXNEiGjHb6jxD34qM=",
    altText: "",
    caption: "The Uber of Watering Plants...",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    altText: "",
    caption: "Best App @2021",
  },
];

const PlantCarousel = (props) => {
  console.log(props);
  return <UncontrolledCarousel items={items} />;
};

export default PlantCarousel;
