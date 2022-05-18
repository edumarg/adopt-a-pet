import React, { useContext } from "react";
import Pet from "./Pet";
import { PetsContext } from "../context/PetsContext";

const Pets = () => {
  const [pets] = useContext(PetsContext);
  return (
    <React.Fragment>
      {!pets.length ? (
        <div className="pet">
          <h2>No Pets Found</h2>
        </div>
      ) : (
        pets.map((pet) => {
          return <Pet key={pet.id} pet={pet} />;
        })
      )}
    </React.Fragment>
  );
};

export default Pets;
