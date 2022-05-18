import React, { useContext } from "react";
import SearchParams from "./SearchParams ";
import Spinner from "./Spinner";
import Pets from "./Pets";
import { PetsContext } from "../context/PetsContext";
import MyPagination from "./Pagination";

const Search = () => {
  const [pets] = useContext(PetsContext);

  return (
    <div>
      <SearchParams />
      {!pets ? (
        <Spinner />
      ) : (
        <div>
          <Pets data={pets} />
          <MyPagination />
        </div>
      )}
    </div>
  );
};

export default Search;
