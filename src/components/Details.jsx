import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    <div className="details ">
      <h2>Details {id}</h2>
    </div>
  );
};

export default Details;
