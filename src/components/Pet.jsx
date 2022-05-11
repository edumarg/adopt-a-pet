import React from "react";

const Pet = ({ pet }) => {
  const { name, animal, breed, city, state, images, id } = pet;

  let image = !images.length ? "../images/pet.png" : images[0];

  return (
    <a href={`/details/${id}`}>
      <div className="pet">
        <div className="info">
          <h2>{name}</h2>
          <h3>{`${animal.toUpperCase()} - ${breed}`}</h3>
          <h4>{`${city},${state}`}</h4>
        </div>
        <div className="image-container">
          <img src={image} alt={`${name} the ${animal}`} />
        </div>
      </div>
    </a>
  );
};

export default Pet;
