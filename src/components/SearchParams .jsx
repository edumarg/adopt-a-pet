import React, { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  const handleChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  const handleChangeAnimal = (event) => {
    setAnimal(event.target.value);
    setBreed("");
  };

  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            type="text"
            maxLength="30"
            minLength="3"
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => {
              handleChangeAnimal(event);
            }}
            onBlur={(event) => {
              handleChangeAnimal(event);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(event) => handleChangeBreed(event)}
            onBlur={(event) => handleChangeBreed(event)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button onClick={(event) => handleSubmit(event)}>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
