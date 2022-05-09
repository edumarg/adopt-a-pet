import Pets from "./components/Pets";

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
      <h1 className="page-title">Adopt a Me!</h1>
      <Pets data={data} />
    </div>
  );
}

export default App;
