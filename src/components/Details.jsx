import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../services/httpServices";
import Carousel from "./Carousel";
import Spinner from "./Spinner";
import Modal from "./Modal";

const Details = () => {
  const [petInfo, setPetInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const getPetInfo = async () => {
    const res = await http.get(`/pets?id=${id}`);
    const data = res.data;
    const myPetInfo = data.pets[0];
    setPetInfo(myPetInfo);
  };

  useEffect(() => {
    getPetInfo();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { animal, breed, city, state, description, name, images } = petInfo;

  return (
    <div className="details">
      {!name ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <h2>{name}</h2>
          <h3>{`${animal?.toUpperCase()} - ${breed} - ${city},${state}`}</h3>
          <button className="details-btn" onClick={() => toggleModal()}>
            Adopt {`${name}`}
          </button>
          <p>{`${description}`}</p>
          <Carousel images={images} />
        </React.Fragment>
      )}
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {name}?</h1>
            <div className="buttons">
              <a href="https://bit.ly/pet-adopt">Yes</a>
              <button onClick={() => toggleModal()}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
