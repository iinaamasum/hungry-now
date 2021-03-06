import React from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-white pb-3 shadow sticky top-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/home"
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <img className="h-10" src={logo} alt="" />
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <BiFoodMenu className="text-3xl text-red-600" />
              ) : (
                <MdRestaurantMenu className="text-3xl text-red-600" />
              )}
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-between justify-end' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <div className="lg:flex lg:items-center lg:justify-center w-full lg:w-auto">
              <div className="flex items-center w-full lg:w-auto">
                <BsFillCartFill className="text-3xl inline-flex items-center mr-6 text-red-600" />
                <button
                  className="text-black font-sans tracking-wide font-semibold text-xl mr-3 hover:bg-gray-700 px-5 py-2 rounded-full hover:text-white shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 w-1/2 lg:w-auto"
                  type="button"
                >
                  Log In
                </button>
                <button
                  className="bg-red-500 text-white active:bg-red-600
                  hover:bg-red-600 font-bold  text-xl px-5 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-1/2 lg:w-auto"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
