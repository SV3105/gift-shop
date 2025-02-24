import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="border p-4 mb-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
