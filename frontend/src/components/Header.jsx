import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";


const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-5 ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl pl-3 font-bold">GiftShop</h1>

        <div className="flex-grow flex justify-center">
        <nav>
          <ul className="flex gap-10 text-lg">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/collection" className="hover:underline">Collections</Link></li>
            <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
            <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">0</span>
        </Link></li>
          </ul>
        </nav>
        </div>

        <div className="flex gap-2">
        <Link to="/signup" className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Sign Up
          </Link>
          <Link to="/login" className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-pink-500 transition">
            Login
          </Link>
          </div>
        
      </div>
    </header>
  );
};

export default Header;
