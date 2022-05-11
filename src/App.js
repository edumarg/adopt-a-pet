import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchParams from "./components/SearchParams ";
import Pets from "./components/Pets";

function App() {
  const [pets, setPets] = useState([]);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="main-title">Adopt a Me!</h1>
      <SearchParams setPets={setPets} />
      <Pets data={pets} />
    </div>
  );
}

export default App;
