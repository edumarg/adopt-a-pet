import React from "react";
import logo from "../images/pet.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page not Found</h1>
      <h2>Error 404</h2>
      <img src={logo} width="300"></img>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/cat"
          alt="dog and cat icon"
        >
          Cat icons created by Becris - Flaticon
        </a>
      </footer>
    </div>
  );
};

export default NotFound;
