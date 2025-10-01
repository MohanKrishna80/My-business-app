import React from "react";
import ItemCard from "../components/Itemcard";
import CategoryFilter from "../components/CategoryFilter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const dummyItems = [
  {
    id: 1,
    name: "Large Vessel",
    description: "Perfect for 50+ people",
    pricePerDay: 200,
    image: "/big-1.webp",
  },
  {
    id: 2,
    name: "Rice Vessel",
    description: "Perfect for cooking rice",
    pricePerDay: 100,
    image: "/annam aanda.jpg",
  },
  {
    id: 3,
    name: "Water Drum",
    description: "Plastic drums for drinking and essentials",
    pricePerDay: 30,
    image: "/water Drums.png",
  },
  {
    id: 4,
    name: "Jaggu",
    description: "For serving water (set of 5)",
    pricePerDay: 50,
    image: "/jaggulu.jpg",
  },
  {
    id: 5,
    name: "Bucket",
    description: "For serving curries (set of 5)",
    pricePerDay: 50,
    image: "/bucket.jpg",
  },
  {
    id: 6,
    name: "Bassain",
    description: "For serving rice (set of 5)",
    pricePerDay: 50,
    image: "/rice basian.webp",
  },
  {
    id: 7,
    name: "Rice Spoon",
    description: "For serving rice (set of 5)",
    pricePerDay: 25,
    image: "/rice-spoon.jpg",
  },
  {
    id: 8,
    name: "Sambar Spoon",
    description: "For serving sambar (set of 5)",
    pricePerDay: 25,
    image: "/sambar-spoon.jpg",
  },
  {
    id: 9,
    name: "Big Sambar Spoon",
    description: "For serving sambar into buckets (set of 2)",
    pricePerDay: 60,
    image: "/kadiginne.webp",
  },
  {
    id: 10,
    name: "Big Rice Spoon",
    description: "For serving rice into bassain (set of 2)",
    pricePerDay: 60,
    image: "/Kappagiri.webp",
  },
  {
    id: 11,
    name: "Vegetable Chopper",
    description: "For cutting vegetables (set of 5)",
    pricePerDay: 100,
    image: "/eelakathhulu.jpg",
  },
  {
    id: 12,
    name: "Wood Stove",
    description: "Stove for the use of wood (set of 3)",
    pricePerDay: 240,
    image: "/ring poyyi.jpg",
  },
  {
    id: 13,
    name: "Single Gas Stove",
    description: "Stove for the use of gas",
    pricePerDay: 150,
    image: "/single stove.jpg",
  },
  {
    id: 14,
    name: "Chairs",
    description: "For dining and seating at the wedding (set of 100)",
    pricePerDay: 600,
    image: "/chairs.jpg",
  },
  {
    id: 15,
    name: "Tables",
    description: "For dining and buffet system (set of 10)",
    pricePerDay: 300,
    image: "/tables.webp",
  },
  {
    id: 16,
    name: "Kadayi",
    description: "Used for oil frying (set of 2)",
    pricePerDay: 100,
    image: "/kadayi.webp",
  },
  {
    id: 17,
    name: "T-Flask",
    description: "For serving fresh and hot tea/coffee (set of 2)",
    pricePerDay: 300,
    image: "/t-flask.jpg",
  },
  {
    id: 18,
    name: "Tents",
    description: "For dining and buffet system (set of 1)",
    pricePerDay: 800,
    image: "/tent's.avif",
  },
];


const Items = () => {
  const searchText = useSelector((state) => state.Search);
  return (
    <div className="p-4 bg-amber-950">
      <h1 className="text-2xl text-white font-bold mb-4">All Items</h1>

      <CategoryFilter />

      <div className="flex flex-wrap gap-4 justify-center">
        {dummyItems
          .filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[18%]"
            >
              <ItemCard item={item} />
            </div>
          ))}
      </div>
      <Link to="/cart" className="flex justify-center mt-4">
        <button className="bg-green-600 text-white  px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all text-lg font-semibold">
          Selected List
        </button>
      </Link>
    </div>
  );
};

export default Items;
