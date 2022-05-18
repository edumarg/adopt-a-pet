import React, { useContext } from "react";
import SearchParams from "./SearchParams ";
import Spinner from "./Spinner";
import Pets from "./Pets";
import { PetsContext } from "../context/PetsContext";

const Search = () => {
  const [pets] = useContext(PetsContext);

  return (
    <div>
      <SearchParams />
      {!pets ? <Spinner /> : <Pets data={pets} />}
    </div>
  );
};

export default Search;
