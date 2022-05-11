import React, { useState } from "react";
import SearchParams from "./SearchParams ";
import Spinner from "./Spinner";

const Pets = React.lazy(() => import("./Pets"));

const Search = () => {
  const [pets, setPets] = useState([]);
  return (
    <div>
      <SearchParams setPets={setPets} />
      <React.Suspense fallback={<Spinner />}>
        <Pets data={pets} />
      </React.Suspense>
    </div>
  );
};

export default Search;
