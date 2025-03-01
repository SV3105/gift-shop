import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [debitCardNumber, setDebitCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiOptions, setUpiOptions] = useState("");

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation if needed
    alert("Order placed successfully!");
    navigate("/home"); // Redirect to home or a confirmation page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-10">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Cart Summary</h2>
          <div className="bg-gray-200 p-4 rounded-lg">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <p className="text-lg">{item.name}</p>
                <p className="text-lg font-semibold">₹{item.price}</p>
              </div>
            ))}
            <div className="flex justify-between py-2 mt-4 font-bold">
              <p>Total:</p>
              <p>₹{totalPrice}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              placeholder="Enter your contact number"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              placeholder="Enter your delivery address"
              required
            />
          </div>

          {/* Delivery Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="deliveryDate">
              Delivery Date
            </label>
            <input
              type="date"
              id="deliveryDate"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Delivery Time */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="deliveryTime">
              Delivery Time
            </label>
            <input
              type="time"
              id="deliveryTime"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Select Payment Method</h2>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="debitCard"
                  checked={paymentMethod === "debitCard"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI
              </label>
            </div>
          </div>

          {/* Credit Card Details */}
          {paymentMethod === "creditCard" && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="creditCardNumber">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  id="creditCardNumber"
                  value={creditCardNumber}
                  onChange={(e) => setCreditCardNumber(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Enter your credit card number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="expiryDate">
                  Expiry Date
                </label>
                <input
                  type="month"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Enter your CVV"
                  required
                />
              </div>
            </div>
          )}

          {/* Debit Card Details */}
          {paymentMethod === "debitCard" && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="debitCardNumber">
                  Debit Card Number
                </label>
                <input
                  type="text"
                  id="debitCardNumber"
                  value={debitCardNumber}
                  onChange={(e) => setDebitCardNumber(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Enter your debit card number"
                  required
                />
              </div>
            </div>
          )}

          {/* UPI Details */}
          {paymentMethod === "upi" && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="upiId">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upiId"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Enter your UPI ID"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="upiOptions">
                  UPI Options
                </label>
                <input
                  type="text"
                  id="upiOptions"
                  value={upiOptions}
                  onChange={(e) => setUpiOptions(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg"
                  placeholder="Enter UPI options (e.g., GPay, PhonePe)"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-500 text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
