import React, { useState, createContext } from "react";

export const PetsContext = createContext({});
PetsContext.displayName = "PetsContext";

const PetsContextProvider = ({ children }) => {
  const [pets, setPets] = useState(undefined);
  return (
    <PetsContext.Provider value={[pets, setPets]}>
      {children}
    </PetsContext.Provider>
  );
};

export default PetsContextProvider;
