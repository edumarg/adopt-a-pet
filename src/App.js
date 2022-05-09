import React, { useState } from "react";
import SearchParams from "./components/SearchParams ";
import Pets from "./components/Pets";

function App() {
  const [pets, setPets] = useState([]);
  const data = [
    {
      name: "Stich",
      animal: "Dog",
      breed: "French Buldog",
      img: "",
      imgAlt: "French Buldog dog",
    },
    {
      name: "Tweety",
      animal: "Bird",
      breed: "Canary",
      img: "",
      imgAlt: "Canary",
    },
    {
      name: "Silvester",
      animal: "Cat",
      breed: "Persian",
      img: "",
      imgAlt: "Persian cat",
    },
  ];
  return (
    <div>
      <h1 className="main-title">Adopt a Me!</h1>
      <SearchParams setPets={setPets} />
      <Pets data={pets} />
    </div>
  );
}

export default App;
