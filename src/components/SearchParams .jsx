import React, { useState, useEffect, useContext } from "react";
import useBreedList from "../hooks/useBreedList";
import http from "../services/httpServices";
import { PetsContext } from "./../context/PetsContext";
import { PaginationContext } from "./../context/PaginationContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [, setPets] = useContext(PetsContext);
  const [paginationData, setPaginationData] = useContext(PaginationContext);

  async function requestPets() {
    const res = await http.get(
      `/pets?animal=${animal}&location=${location}&breed=${breed}&page=${
        paginationData?.page || 0
      }`
    );

    const data = res.data;
    const myPets = data.pets;
    const { numberOfResults, startIndex, endIndex, hasNext } = data;

    setPets(myPets);
    setPaginationData({
      ...paginationData,
      numberOfResults,
      startIndex,
      endIndex,
      hasNext,
    });
  }

  useEffect(() => {
    requestPets();
  }, [paginationData?.page]); // eslint-disable-line react-hooks/exhaustive-deps

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
    requestPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={(event) => handleSubmit(event)}>
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
            <option value="" disabled default>
              Please select a Animal...{" "}
            </option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal} className="select-option">
                {animal.toUpperCase()}
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
            <option value="" disabled default>
              Please select a Breed...{" "}
            </option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
