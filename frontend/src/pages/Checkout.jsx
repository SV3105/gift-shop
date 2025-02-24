import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your-public-stripe-key");

const Checkout = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await axios.post("/api/payments/checkout", {
      items: [{ name: "Custom T-Shirt", price: 29.99 }],
    });
    await stripe.redirectToCheckout({ sessionId: response.data.id });
  };

  return <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded">Checkout</button>;
};

export default Checkout;
