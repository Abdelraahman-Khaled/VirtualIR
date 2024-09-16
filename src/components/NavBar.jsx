import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import Link from "react-scroll/modules/components/Link";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrking-0 ">
            <Link
              className="flex items-center"
              to={"home"}
              spy={true}
              smooth={true}
              offset={-300}
            >
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tighter">VirtualIR</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((e, index) => (
              <li key={index}>
                <Link
                  className="text-neutral-300 hover:text-white duration-200"
                  to={e.href}
                  spy={true}
                  smooth={true}
                  offset={-170}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center ">
            <Link
              to="#"
              className="py-2 px-3 border rounded-md hover:text-black hover:bg-white transition duration-300 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              to="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 opacity-100 py-2 px-3 rounded-md  hover:opacity-70 duration-300 ease-in-out transition"
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{navOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {navOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
            <ul>
              {navItems.map((e, index) => (
                <li
                  key={index}
                  className="py-4 text-neutral-300 hover:text-white duration-200"
                >
                  <Link
                    to={e.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    href={e.href}
                    onClick={toggleNavbar}
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="py-2 px-3 border rounded-md hover:bg-white transition duration-300 ease-in-out hover:text-black"
              >
                Sign In
              </Link>
              <Link
                to="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md opacity-100 hover:opacity-70 duration-300 ease-in-out"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
