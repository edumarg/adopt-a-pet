import React from "react";
import logo from "../images/pet.png";
import { Link } from "react-router-dom";

const Pet = ({ pet }) => {
  const { name, animal, breed, city, state, images, id } = pet;

  let image = !images.length ? logo : images[0];

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt={`${name} the ${animal}`} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>{`${animal.toUpperCase()} - ${breed}`}</h3>
        <h4>{`${city},${state}`}</h4>
      </div>
    </Link>
  );
};

export default Pet;
