import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const eventDate = useSelector((state) => state.cart.eventDate);

  const [showPopup, setShowPopup] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.pricePerDay * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
          🛒 Your cart is empty!
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-6 sm:py-10 bg-gray-100 px-2">
      <div className="w-full max-w-3xl bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
          Your Cart
        </h1>

        <div className="space-y-4 sm:space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 border border-gray-300 bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-full sm:w-24 h-24 sm:h-28 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg border"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <h2 className="font-bold text-base sm:text-lg text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  {item.description || "No description available"}
                </p>

                <div className="flex items-center mt-2 gap-3 sm:gap-4 flex-wrap">
                  <p className="text-gray-800 font-semibold text-sm sm:text-base">
                    ₹{item.pricePerDay} / day
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-200 px-2 py-1 rounded text-base font-bold hover:bg-gray-300"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="text-base font-semibold">{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-2 py-1 rounded text-base font-bold hover:bg-gray-300"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Total & Remove */}
              <div className="flex flex-col items-end gap-2 mt-2 sm:mt-0">
                <p className="text-gray-800 font-bold text-sm sm:text-base">
                  ₹{item.pricePerDay * item.quantity}
                </p>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3 sm:gap-0">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
            Grand Total: ₹{totalPrice}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <button
              className="bg-green-600 text-white px-4 sm:px-5 py-2 rounded hover:bg-green-700 transition text-sm sm:text-base"
              onClick={() => setShowPopup(true)}
            >
              Proceed to Order
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg p-4 sm:p-6 rounded-xl shadow-2xl relative">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              🧾 Order Confirmation
            </h2>

            <p className="text-base sm:text-lg font-semibold text-blue-700 mb-3 sm:mb-4">
              📅 Event Date: {eventDate || "Not Selected"}
            </p>

            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
              Please confirm your order. We will contact you shortly to arrange
              delivery for the selected items.
            </p>

            <div className="mb-3 sm:mb-4">
              <h3 className="font-semibold mb-1 sm:mb-2 text-gray-800 text-sm sm:text-base">Items:</h3>
              <ul className="list-disc ml-4 sm:ml-5 text-gray-700 text-sm sm:text-base">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} × {item.quantity} — ₹
                    {item.pricePerDay * item.quantity}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-bold text-base sm:text-xl text-gray-800">
              Total: ₹{totalPrice}
            </h3>

            <div className="mt-4 sm:mt-6 flex flex-wrap justify-end gap-2 sm:gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 rounded text-sm sm:text-base hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("✅ Order Confirmed!");
                  setShowPopup(false);
                }}
                className="px-4 sm:px-5 py-2 bg-green-600 text-white rounded text-sm sm:text-base hover:bg-green-700 transition"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
