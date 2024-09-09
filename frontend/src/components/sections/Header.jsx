import React, { useState } from 'react';
import {
  FaBars,
  FaPlaneArrival,
  FaLock,
  FaArrowAltCircleRight,
  FaArrowRight,
} from 'react-icons/fa';

const Header = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-slate-800 text-white h-14 p-4 ">
      <div className="flex justify-between items-center h-full 2xl:container 2xl:mx-auto">
        <FaBars
          className="cursor-pointer md:hidden"
          onClick={() => setMobNavOpen((prev) => !prev)}
        />
        <a href="/" className="text-white flex items-center space-x-2">
          <span className="text-md">eco_consciousLife</span>
          <FaPlaneArrival className="text-base" />
        </a>
        <nav className="h-full hidden md:block">
          <ul className="flex items-center space-x-3 text-base h-full">
            <li className="h-full">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/package">Packages</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="items-center hidden sm:inline-block px-6 py-2 rounded-md bg-blue-800 text-white">
            <a href="/#contact">
              Contact Us
              <FaArrowRight className="-rotate-45 text-white inline ml-2" />
            </a>
          </button>
          <button className="flex items-center px-6 py-2 rounded-md border border-blue-800 text-white">
            <a href="/login">
              SignIn <FaLock className="text-white inline ml-2" />
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          mobNavOpen ? 'block' : 'hidden'
        } p-4 rounded-lg text-white bg-slate-800 border-t  mx-auto   border-white w-full absolute z-20 left-0 top-[3.6rem]  md:hidden`}
      >
        <ul className="flex flex-col justify-center items-center">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:underline">
              Gallery
            </a>
          </li>
          <li>
            <a href="/package" className="hover:underline">
              Packages
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
