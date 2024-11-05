import { Navigate, RouteObject, useRoutes } from "react-router-dom";


import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useTransversal } from "../feature/transversal";

export const AppRoutes = () => {
  const { isAuthenticated } = useTransversal();
 

  const commonRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/inicio" replace />,
    },
  ];

   const routes = isAuthenticated ? protectedRoutes : publicRoutes

  const element = useRoutes([...commonRoutes, ...routes]);

  return <>{element}</>;
};
