import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Customizer from '../components/Customizer';

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL

  // Sample product data (Replace with API in the future)
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

  // Find the product (optimized with useMemo to avoid unnecessary calculations)
  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full  bg-gray-100"
      initial={{ opacity: 0, y: 20 }} // Fade-in effect
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {product ? (
        <motion.div
        className="flex justify-center w-full "
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Customizer
            productName={product.name}
            productImage={product.img}
            productDescription={product.description}
            productPrice={product.price}
          />
        </motion.div>
      ) : (
        <motion.p
          className="text-xl font-bold text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Product not found.
        </motion.p>
      )}
    </motion.div>
  );
};

export default ProductPage;
