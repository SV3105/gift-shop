import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

   const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add some items before proceeding.");
    } else {
      navigate("/checkout"); // Navigate to the checkout page
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-lg font-bold text-gray-800">₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-bold"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-6 text-xl font-bold">
            <p>Total:</p>
            <p>₹{totalPrice}</p>
          </div>

          <button
            onClick={handleProceedToCheckout}
            className="mt-6 w-full bg-gray-700 hover:bg-gray-500 text-white py-3 rounded-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
