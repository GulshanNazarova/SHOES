import { createContext, useState } from "react";
import data from "../services/Api";

export const GlobalContext = createContext();



export const ContextProvider = ({ children }) => {
  const [myData, setMyData] = useState(data);
  const [user, setUser] = useState({
    userName:"g",
    password:"g1"
})
  return (
    <GlobalContext.Provider value={{ myData, setMyData, user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
