import { ReactNode, createContext, useContext, useState } from "react";
import { AuthUser, LoginCredential } from "../types";

type TransversalProviderProps = {
  children: ReactNode;
};

export interface transversalContextInterface {
  initialLoading: boolean;
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (data: LoginCredential) => any;
  logout: () => any;
}

const transversalContext = createContext({} as transversalContextInterface);
export const useTransversal = () => useContext(transversalContext);

const useTransversalProvider = (): transversalContextInterface => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (data: LoginCredential) => {
    setIsAuthenticated(true);
    return data;
  };

  const logout = () => {
    return isAuthenticated;
  };

  return {
    initialLoading,
    isAuthenticated,
    isLoggingIn,
    user,
    login,
    logout,
  };
};

export const TransversalProvider = ({ children }: TransversalProviderProps) => {
  const auth = useTransversalProvider();

//   if (auth.initialLoading)
//     return (
//       <div className="flex justify-center items-center gap-2">
//         {/* <Spinner /> */}
//         <p>Comprobando sesión</p>
//       </div>
//     );
  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    <transversalContext.Provider value={auth}>{children}</transversalContext.Provider>
  );
};
