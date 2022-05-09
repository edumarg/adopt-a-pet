import React from "react";

const Pet = ({ pet }) => {
  const { name, animal, breed, img, imgAlt } = pet;
  return (
    <div className="pet">
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
      <img src={img} alt={imgAlt} />
    </div>
  );
};

export default Pet;
