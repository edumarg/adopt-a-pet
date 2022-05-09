import React from "react";
import Pet from "./Pet";

const Pets = ({ data }) => {
  return (
    <React.Fragment>
      {data.length > 0 &&
        data.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })}
      {data.length === 0 && (
        <div className="pet">
          <h2>There are no selected animals in this location</h2>
        </div>
      )}
    </React.Fragment>
  );
};

export default Pets;
