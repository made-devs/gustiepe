import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center ">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link className="font-primary font-normal text-3xl max-w-[200px]">
          Gustiepe
        </Link>
        <nav className="hidden lg:flex gap-x-12 font-medium">
          <Link
            to={'/'}
            className="text-[#696c6d] hover:text-primary transition font-primary"
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className="text-[#696c6d] hover:text-primary transition font-primary"
          >
            About
          </Link>
          <Link
            to={'/contact'}
            className="text-[#696c6d] hover:text-primary transition font-primary"
          >
            Contact
          </Link>
          <Link
            to={'/portfolio'}
            className="text-[#696c6d] hover:text-primary transition font-primary"
          >
            Portfolio
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
