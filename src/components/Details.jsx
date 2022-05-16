import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../services/httpServices";
import Carousel from "./Carousel";
import Spinner from "./Spinner";

const Details = () => {
  const [petInfo, setPetInfo] = useState({});
  const { id } = useParams();

  const getPetInfo = async () => {
    const res = await http.get(`/pets?id=${id}`);
    const data = res.data;
    const myPetInfo = data.pets[0];
    setPetInfo(myPetInfo);
  };

  useEffect(() => {
    getPetInfo();
  }, [id]);

  const { animal, breed, city, state, description, name, images } = petInfo;

  return (
    <div className="details">
      {!name ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <h2>{name}</h2>
          <h3>{`${animal?.toUpperCase()} - ${breed} - ${city},${state}`}</h3>
          <button className="details-btn">Adopt {`${petInfo["name"]}`}</button>
          <p>{`${description}`}</p>
          <Carousel images={images} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Details;
