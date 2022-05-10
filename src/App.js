import React, { useState } from "react";
import SearchParams from "./components/SearchParams ";
import Pets from "./components/Pets";

function App() {
  const [pets, setPets] = useState([]);
  return (
    <div>
      <h1 className="main-title">Adopt a Me!</h1>
      <SearchParams setPets={setPets} />
      <Pets data={pets} />
    </div>
  );
}

export default App;
