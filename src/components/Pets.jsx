import React from "react";
import Pet from "./Pet";

const Pets = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((pet) => {
        return <Pet key={data.indexOf(pet)} pet={pet} />;
      })}
    </React.Fragment>
  );
};

export default Pets;
