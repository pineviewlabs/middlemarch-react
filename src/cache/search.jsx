import { useState, useContext, createContext } from "react";

const SearchContext = createContext([]);

export default ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
