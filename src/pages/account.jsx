import React from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  function GoTOHome() {
    navigate("/");
  }

  function GoTOItems() {
    navigate("/items");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-900 text-center">
        My Business
      </h1>

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md flex flex-col items-center">
        <img
          src="/mohan2.jpg"
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 border-2 border-amber-300"
        />

        <div className="space-y-2 sm:space-y-3 w-full text-left">
          <p>
            <span className="font-semibold">Name:</span> Mohan Krishna
          </p>
          <p>
            <span className="font-semibold">Email:</span> mohankrishnamohankrishna.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> 9553391580
          </p>
          <p>
            <span className="font-semibold">Membership:</span> Standard
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 w-full justify-center">
          <button
            onClick={GoTOHome}
            className="w-full sm:w-auto bg-amber-900 text-white py-2 px-4 rounded-lg hover:bg-amber-800 transition"
          >
            Home
          </button>
          <button
            onClick={GoTOItems}
            className="w-full sm:w-auto bg-amber-900 text-white py-2 px-4 rounded-lg hover:bg-amber-800 transition"
          >
            Items
          </button>
        </div>
      </div>
    </div>
  );
}
