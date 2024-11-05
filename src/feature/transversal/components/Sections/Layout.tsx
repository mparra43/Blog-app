import { ReactNode } from "react";
import { Footer, Header } from "./";



interface LayoutProps {
  children: ReactNode
  showLogin?: boolean;
}


const header = {
  "universityBasesLogo": "https://eestgimagefileapp.blob.core.windows.net/images-co/logo-BU.svg",
  "loginButton": {
    "label": "Iniciar sesión",
    "icon": "user",
    "link": "/login"
  },
  "menu": {
    "navegation": false
  }
}

export const Layout = ({ children, showLogin }: LayoutProps) => {
  return (
    <>
      <Header className='flex justify-between px-6 lg:px-16 2xl:px-24' header={header} showLogin={showLogin}/>
      {children}
      <Footer />
    </>
  );
};
