import React, { useState, createContext } from "react";

export const PaginationContext = createContext({});
PaginationContext.displayName = "PaginationContext";

const PaginationContextProvider = ({ children }) => {
  const [paginationData, setPaginationData] = useState(undefined);
  return (
    <PaginationContext.Provider value={[paginationData, setPaginationData]}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
