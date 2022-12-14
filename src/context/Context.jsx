import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [activePokemon, setActivePokemon] = useState(false);

  return (
    <DataContext.Provider value={{ activePokemon, setActivePokemon }}>
      {children}
    </DataContext.Provider>
  );
};
