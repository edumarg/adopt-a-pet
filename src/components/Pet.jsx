import React from "react";

const Pet = ({ pet }) => {
  const { name, animal, breed, img, imgAlt } = pet;
  return (
    <div className="pet">
      <div className="info">
        <h2>{name}</h2>
        <h3>{animal}</h3>
        <h3>{breed}</h3>
      </div>
      <div className="image-container">
        <img src={img} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Pet;
