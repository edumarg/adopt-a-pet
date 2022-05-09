import SearchParams from "./components/SearchParams ";

function App() {
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
      <SearchParams />
    </div>
  );
}

export default App;
