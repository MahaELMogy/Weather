import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // function to open Menu
  function OpenMenu() {
    setIsOpen(!isOpen);
  }
  // function to Close Menu
  function CloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-[#393E46] text-[#DFD0B8]">
      <div className="px-6 md:px-28 py-7 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <i className="fa-solid fa-cloud text-4xl md:text-6xl"></i>
            <span className="text-2xl md:text-4xl font-semibold">Weather</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:grid grid-cols-4 gap-4 text-lg">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="News">News</NavLink>
          </li>
          <li>
            <NavLink to="Photos">Photos</NavLink>
          </li>
          <li>
            <NavLink to="Contact">Contact</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={OpenMenu} className="md:hidden text-3xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Links */}
      <div
        id="mobile"
        className={`md:hidden flex flex-col items-center gap-4 py-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <NavLink onClick={CloseMenu} to="">
          Home
        </NavLink>
        <NavLink onClick={CloseMenu} to="News">
          News
        </NavLink>
        <NavLink onClick={CloseMenu} to="Photos">
          Photos
        </NavLink>
        <NavLink onClick={CloseMenu} to="Contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
