import { ReactNode, createContext, useContext, useState } from "react";
import { LoginCredential } from "../types";

type TransversalProviderProps = {
  children: ReactNode;
};

export interface transversalContextInterface {

  isAuthenticated: boolean;
 
  login: (data: LoginCredential) => any;
  logout: () => any;
}

const transversalContext = createContext({} as transversalContextInterface);
export const useTransversal = () => useContext(transversalContext);

const useTransversalProvider = (): transversalContextInterface => {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  const login = (data: LoginCredential, ) => {
    setIsAuthenticated(true);
    return data;
  };

  const logout = () => {
    return isAuthenticated;
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export const TransversalProvider = ({ children }: TransversalProviderProps) => {
  const auth = useTransversalProvider();


  return (
    <transversalContext.Provider value={auth}>{children}</transversalContext.Provider>
  );
};
