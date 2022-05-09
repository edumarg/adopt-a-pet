import Pet from "./components/Pet";

function App() {
  return (
    <div>
      <h1 className="page-title">Adopt a Me!</h1>
      <Pet data={{ name: "Stich", type: "Dog", breed: "Frensh Buldog" }} />
      <Pet data={{ name: "Tweete", type: "Bird", breed: "Pauraque" }} />
    </div>
  );
}

export default App;
