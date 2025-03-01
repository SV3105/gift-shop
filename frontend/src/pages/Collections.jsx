import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CollectionPage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Customized Wedding Gifts", img: "/customised-wedding-gift.jpg", slug: "wedding-gifts" },
    { name: "Customized Birthday Gifts", img: "/birthday-gift.jpg", slug: "birthday-gifts" },
    { name: "Customized Friendship Gifts", img: "/friendsip-gift.jpg", slug: "friendship-gifts" },
    { name: "Customized Anniversary Gifts", img: "/anniversary-gift.jpg", slug: "anniversary-gifts" },
    { name: "Customized Tech Gadgets", img: "/tech-gifts.jpg", slug: "customized-tech-gadgets" },
    { name: "Customized Kid's Gifts", img: "/kids-gift.jpg", slug: "kids-gifts" },
  ];

  return (
    <div className="flex flex-col items-center p-12">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-800 mb-8"
      >
        Explore Our Gift Collections
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-12">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="w-full sm:w-80 bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:shadow-xl flex flex-col"
          >
            <img src={category.img} alt={category.name} className="w-full h-64 object-cover" />
            <div className="flex flex-col justify-between p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
              <p className="text-gray-500 mt-2 mb-4">{`Explore gifts in the ${category.name} category`}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/category/${category.slug}`)}
                className="w-full py-3  bg-gray-700 hover:bg-gray-500 text-white text-lg rounded-xl transition duration-300 "
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
