import React from "react";

const Pet = ({ data }) => {
  return (
    <div className="pet">
      <h2>{data.name}</h2>
      <h3>{data.type}</h3>
      <h3>{data.breed}</h3>
    </div>
  );
};

export default Pet;
