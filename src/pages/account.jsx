import React from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const navigate=useNavigate()

    function GoTOHome(){
        navigate('/')
    }

    function GoTOItems(){
        navigate('/items')
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-amber-900">My Business</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col items-center">
        <img
          src="/mohan2.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-amber-300"
        />

        <div className="space-y-3 w-full relative left-25 text-start">
            <p>
            <span className="font-semibold">Name:</span> Mohan Krishna
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            mohankrishnamohankrishna.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> 9553391580
          </p>
          <p>
            <span className="font-semibold">Membership:</span> Standard
          </p>
        </div>
        <div className="flex gap-9">

        <button onClick={GoTOHome} className="mt-6 w-fit bg-amber-900 text-white py-2 px-4  rounded-lg hover:bg-amber-800 transition">
          Home
        </button>
        <button onClick={GoTOItems} className="mt-6 w-fit bg-amber-900 text-white py-2 px-4 rounded-lg hover:bg-amber-800 transition">
          Items
        </button>

        </div>
      </div>
    </div>
  );
}
