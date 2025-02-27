import React from 'react';
import { useParams } from 'react-router-dom';
import Customizer from '../components/Customizer';

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Sample product data (replace with real database fetch)
  const products = [
    { id: "1", name: "Wedding Gift Box", img: "/wedding-gift-box.jpg", category: "wedding-gifts", description: "A beautifully wrapped wedding gift box, perfect for newlyweds." },
    { id: "2", name: "Custom Ring", img: "/custom-ring.jpg", category: "wedding-gifts", description: "A personalized ring with your chosen engraving." },
    { id: "3", name: "Customized Night Light", img: "/wedding-night-lamp.jpeg", category: "wedding-gifts",  description: "A romantic personalized night lamp, custom-engraved with names, dates, or heartfelt messages—perfect for weddings and anniversaries." },
    { id: "4", name: "Birthday Mug", img: "/birthday-mug.jpg", category: "birthday-gifts", description: "A cute birthday-themed mug, customizable with text and images." },
    { id: "5", name: "Custom Birthday Box", img: "/custom-birthday-box.jpg", category: "birthday-gifts",  description: "A personalized birthday gift box filled with customizable items to make their birthday extra special."  },
    { 
      id: "6", 
      name: "Birthday T-Shirt", 
      img: "/birthday-tshirts.jpg", 
      category: "birthday-gifts", 
      description: "A customizable birthday t-shirt with personalized text, designs, and images to make their celebration unique." 
    },
    { 
      id: "7", 
      name: "Personalized Friendship Bracelet", 
      img: "/customized-bracelet.jpg", 
      category: "friendship-gifts", 
      description: "A customizable bracelet with initials, names, or meaningful symbols to celebrate your bond." 
    },
    
    { 
      id: "8", 
      name: "Friendship Keychains", 
      img: "/personalised-keychains.jpg", 
      category: "friendship-gifts", 
      description: "Matching or complementary keychains with customizable charms or engravings that symbolize your friendship." 
    },
    { 
      id: "9", 
      name: "Custom Anniversary Pillow", 
      img: "/anniversary-pillow.jpg", 
      category: "anniversary-gifts", 
      description: "A soft pillow with your anniversary date or a loving message, perfect for cozying up together." 
    },
    { 
      id: "10", 
      name: "Personalized Anniversary Watch", 
      img: "/anniversary-watch.jpg", 
      category: "anniversary-gifts", 
      description: "A sleek watch with an engraved message or anniversary date, a timeless reminder of your love." 
    },
    { 
      id: "11", 
      name: "Personalized Smartphone Case", 
      img: "/custom-smartphone-case.jpg", 
      category: "customized-tech-gadgets", 
      description: "A custom-designed smartphone case with personalized graphics, text, or photos to make your phone truly unique." 
    },
  ];
  // Find the product that matches the id
  const product = products.find((p) => p.id === id);

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100 ">
      {product ? (
        <Customizer productImage={product.img} productDescription={product.description} />
      ) : (
        <p className="text-xl font-bold text-red-500">Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
