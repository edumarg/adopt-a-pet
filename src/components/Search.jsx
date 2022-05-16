import React, { useState } from "react";
import SearchParams from "./SearchParams ";
import Spinner from "./Spinner";
import Pets from "./Pets";

const Search = () => {
  const [pets, setPets] = useState(undefined);
  return (
    <div>
      <SearchParams setPets={setPets} />
      {!pets ? <Spinner /> : <Pets data={pets} />}
    </div>
  );
};

export default Search;
