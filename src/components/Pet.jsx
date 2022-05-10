import React from "react";

const Pet = ({ pet }) => {
  const { name, animal, breed, city, state, images } = pet;
  return (
    <div className="pet">
      <div className="info">
        <h2>{name}</h2>
        <h3>{animal.toUpperCase()}</h3>
        <h3>{breed}</h3>
        <h4>{`${city},${state}`}</h4>
      </div>
      {images.length > 0 && (
        <div className="image-container">
          <img src={images[0]} alt={`${name} the ${animal}`} />
        </div>
      )}
    </div>
  );
};

export default Pet;
