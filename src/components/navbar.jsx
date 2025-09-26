import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Items", path: "/items" },
    { name: "Selected List", path: "/cart" },
    { name: "Account", path: "/account" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-amber-900 text-white p-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        <Link to="/" className="font-extrabold text-3xl flex-shrink-0">
          SS
        </Link>

       
        <input
          type="search"
          placeholder="Search"
          className="flex-1 max-w-xl mx-3 sm:mx-5 bg-white text-amber-950 text-base rounded-lg outline-none pl-4 py-1"
        />

       
        <ul className="hidden md:flex space-x-6 text-base flex-shrink-0">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-amber-50 cursor-pointer">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-lg bg-amber-800 px-4 py-1 rounded-lg hover:bg-amber-700 transition"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

     
      <div
        className={`md:hidden bg-amber-800 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3 p-4 rounded-lg" : "max-h-0 mt-0 p-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 text-base">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-amber-50 w-full text-center">
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block w-full py-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
