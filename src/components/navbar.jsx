import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white p-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="font-extrabold text-3xl pr-6 flex-shrink-0">
          SS
        </Link>

        <input
          type="search"
          placeholder="Search"
          className="flex-1 max-w-xl mx-5 bg-white text-base text-amber-950 rounded-lg outline-none pl-4 py-1"
        />

        <ul className="hidden md:flex space-x-6 text-base flex-shrink-0">
          <Link to="/">
            <li className="hover:text-amber-50 cursor-pointer">Home</li>
          </Link>
          <Link to="/items">
            <li className="hover:text-amber-50 cursor-pointer">Items</li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-amber-50 cursor-pointer">
              Selected List
            </li>
          </Link>
          <Link to="/account">
            <li className="hover:text-amber-50 cursor-pointer">Account</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-amber-50 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-lg bg-amber-800 px-4 py-1 rounded-lg hover:bg-amber-700 transition"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col items-center space-y-3 mt-3 text-base md:hidden bg-amber-800 p-4 rounded-lg">
          <Link to="/" onClick={() => setOpen(false)}>
            <li className="hover:text-amber-50">Home</li>
          </Link>
          <Link to="/items" onClick={() => setOpen(false)}>
            <li className="hover:text-amber-50">Items</li>
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)}>
            <li className="hover:text-amber-50">Selected List</li>
          </Link>
          <Link to="/account" onClick={() => setOpen(false)}>
            <li className="hover:text-amber-50">Account</li>
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <li className="hover:text-amber-50">Contact</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
