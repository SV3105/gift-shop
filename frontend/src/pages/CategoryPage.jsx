import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate();
  const backToCollection = () => {
    navigate('/collections')
  }

  // Sample products (you can replace with real data)
  const products = [
    { id: "1", name: "Wedding Gift Box", img: "/wedding-gift-box.jpg", category: "wedding-gifts", description: "A beautifully wrapped wedding gift box, perfect for newlyweds.", price: 1999 },
    { id: "2", name: "Custom Ring", img: "/custom-ring.jpg", category: "wedding-gifts", description: "A personalized ring with your chosen engraving.", price: 4999 },
    { id: "3", name: "Customized Night Light", img: "/wedding-night-lamp.jpeg", category: "wedding-gifts", description: "A romantic personalized night lamp, custom-engraved with names, dates, or heartfelt messages—perfect for weddings and anniversaries.", price: 2999 },
    { id: "4", name: "Birthday Mug", img: "/birthday-mug.jpg", category: "birthday-gifts", description: "A cute birthday-themed mug, customizable with text and images.", price: 799 },
    { id: "5", name: "Custom Birthday Box", img: "/custom-birthday-box.jpg", category: "birthday-gifts", description: "A personalized birthday gift box filled with customizable items to make their birthday extra special.", price: 1999 },
    { id: "6", name: "Birthday T-Shirt", img: "/birthday-tshirts.jpg", category: "birthday-gifts", description: "A customizable birthday t-shirt with personalized text, designs, and images to make their celebration unique.", price: 999 },
    { id: "7", name: "Personalized Friendship Bracelet", img: "/customized-bracelet.jpg", category: "friendship-gifts", description: "A customizable bracelet with initials, names, or meaningful symbols to celebrate your bond.", price: 299 },
    { id: "8", name: "Friendship Keychains", img: "/personalised-keychains.jpg", category: "friendship-gifts", description: "Matching or complementary keychains with customizable charms or engravings that symbolize your friendship.", price: 299 },
    { id: "9", name: "Custom Anniversary Pillow", img: "/anniversary-pillow.jpg", category: "anniversary-gifts", description: "A soft pillow with your anniversary date or a loving message, perfect for cozying up together.", price: 799 },
    { id: "10", name: "Personalized Anniversary Watch", img: "/anniversary-watch.jpg", category: "anniversary-gifts", description: "A sleek watch with an engraved message or anniversary date, a timeless reminder of your love.", price: 1999 },
    { id: "11", name: "Personalized Smartphone Case", img: "/custom-smartphone-case.jpg", category: "customized-tech-gadgets", description: "A custom-designed smartphone case with personalized graphics, text, or photos to make your phone truly unique.", price: 499 },
    { id: "12", name: "Custom Gaming Mouse", img: "/custom-gaming-mouse.png", category: "customized-tech-gadgets", description: "A high-performance gaming mouse with customizable colors, buttons, and ergonomic design for the ultimate gaming experience.", price: 3999 },
    { id: "13", name: "Personalized Kids Backpack", img: "/custom-backpack.jpg", category: "kids-gifts", description: "A cute and colorful backpack customized with the child's name, perfect for school or outings.", price: 999 },
    { id: "14", name: "Personalized Kids Water Bottle", img: "/custom-water-bottle.jpg", category: "kids-gifts", description: "A leak-proof water bottle with the child's name and favorite colors, making hydration fun and unique.", price: 499 },
  ];

  // Filter products based on slug (category)
  const filteredProducts = products.filter((product) => product.category === slug);

  return (
    
    <div className="p-12">
      <div className='mb-10'>
            <button
              className="px-4 py-3 outline-none text-lg  bg-gradient-to-r from-pink-500 to-purple-500  text-white font-semibold hover:from-purple-400 hover:to-pink-400 rounded-lg shadow-md"
              onClick={backToCollection}
            >
              Back to Collections
            </button>
            </div>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 capitalize">
        {slug.replace('-', ' ')} Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={product.img}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <h4 className="text-lg font-semibold mt-2">Price: ₹{product.price}</h4>
            <motion.button
              className="mt-4  bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded-lg "
              onClick={() => navigate(`/product/${product.id}`)}
              whileHover={{ scale: 1.1 }}
              transition={{ stiffness: 300 }}
            >
              View & Customize
            </motion.button>
          </motion.div>
          
        ))}
      </div>
      
    </div>
  );
};

export default CategoryPage;
