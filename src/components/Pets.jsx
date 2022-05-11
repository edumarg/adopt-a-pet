import React from "react";
import Pet from "./Pet";

const Pets = ({ data }) => {
  return (
    <React.Fragment>
      {!data.length ? (
        <div className="pet">
          <h2>No Pets Found</h2>
        </div>
      ) : (
        data.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })
      )}
    </React.Fragment>
  );
};

export default Pets;
