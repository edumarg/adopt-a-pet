import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setLocation(value);
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
            onChange={(event) => handleChange(event)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
