import clsx from "clsx";
import { Link } from "react-router-dom";

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode
  firstElement?: React.ReactNode;
  header?: {
    loginButton?: {
      label: string;
      icon: string;
      link: string;
    }
  }
  showLogin?: boolean;
}


export const Header = ({ children, className, firstElement, header, showLogin = true}: HeaderProps) => {


  return (
    <header className={clsx('w-full h-20 bg-white shadow-md opacity-100 items-center sticky top-0 z-10', className)} data-testid='header'>
      <div className='flex justify-start md:justify-end'>
        <i className='blog text-2xl text-teal-500' />
        {firstElement}
      </div>
      {children && children}
      <div className='flex justify-center md:justify-start'>
        { showLogin &&header?.loginButton &&
          <Link
            className='rounded w-40 hidden md:flex font-ubuntu bg-teal-500 hover:bg-teal-200 p-3 text-base justify-center  text-white '
            data-testid='loginButton'
            data-fetchpriority='high'
            to={header?.loginButton.link}>
            <div className='flex justify-between items-center  text-white'>
              <i className={clsx(header.loginButton.icon, 'text-lg mr-2')} />
              <label className='hidden md:block'>{header.loginButton.label}</label>
            </div>
          </Link> }
      </div>
    </header>

  )
}

