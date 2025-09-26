import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="bg-amber-50 border border-amber-900 rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center h-full">
      <div className="w-full h-40 mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-amber-900 text-center">
            {item.name}
          </h2>
          <p className="text-gray-700 text-sm text-center mt-1">
            {item.description}
          </p>
        </div>

        <div className="mt-2 text-center">
          <p className="text-amber-800 font-semibold">
            ₹{item.pricePerDay} / day
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-2 bg-amber-900 text-white py-2 px-6 rounded-lg hover:bg-amber-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
