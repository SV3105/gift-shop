import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from '../context/CartContext'; // Import useCart hook

const Header = () => {
  const { cart } = useCart(); // Get cart items
  // Get number of items in cart

  return (
    <motion.header
      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-5 shadow-md"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo with animation */}
        <motion.h1
          className="text-2xl pl-3 font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          GiftShop
        </motion.h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-10 text-lg">
            {["Home", "Collections", "Cart" , "Checkout", "Contact Us"].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} >
                <Link to={`/${item.toLowerCase().replace(" ", "")}`} className="hover:underline">
                  {item}
                </Link>
              </motion.li>
            ))}
           
          </ul>
        </nav>

        {/* Signup & Login Buttons with Animation */}
        <div className="flex gap-3 ml-5">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signup" className="bg-white text-pink-500 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Sign Up
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className="bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-pink-500 transition">
              Login
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
