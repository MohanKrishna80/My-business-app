import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEventDate } from "../redux/slices/cartSlice"; 
import "./home.css";

export default function HomePage() {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select an event date before proceeding!");
      return;
    }
    dispatch(setEventDate(date));
    navigate("/items");
  };

  return (
    <div className="bg-img min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 sm:px-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-amber-900 drop-shadow-lg mb-8 sm:mb-12 text-center">
          Shiva Suppliers
        </h1>

        <div className="bg-white bg-opacity-90 rounded-2xl p-6 sm:p-10 text-center shadow-2xl backdrop-blur-md">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800">
            Welcome to <span className="text-blue-600">EventVessels</span>
          </h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-6 text-gray-700">
            Your one-stop shop for wedding and event cooking equipment.
          </p>
          <p className="text-sm sm:text-lg mb-2 text-gray-600">
            Let's get started with your order
          </p>
          <p className="text-sm sm:text-lg mb-4 text-gray-600">
            Select Event Date
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          >
            <input
              type="date"
              className="border-2 border-gray-300 rounded-lg p-2 w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-600 transition-all shadow-md w-full sm:w-auto"
            >
              Submit
            </button>
          </form>

          {date && (
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-green-700">
              Selected Date: <span className="text-blue-800">{date}</span>
            </p>
          )}

          <p className="font-bold mt-4 text-sm sm:text-base">
            On submit, you will navigate to the items page and proceed with your order.
          </p>
        </div>
      </div>
    </div>
  );
}
