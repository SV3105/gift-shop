import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate();

  // Sample products (you can replace with real data)
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
      description: "A customizable birthday t-shirt with personalized text, designs, and images to make, their celebration unique." 
    } ,
    { 
      id: "7", 
      name: "Personalized Friendship Bracelet", 
      img: "/customized-bracelet.jpg", 
      category: "friendship-gifts", 
      description: "A customizable bracelet with initials, names, or meaningful symbols to celebrate your bond." 
    },
    { 
      id: "8", 
      name: "Personalized Friendship Keychains", 
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

  // Filter products based on slug (category)
  const filteredProducts = products.filter((product) => product.category === slug);

  return (
    <div className="p-12 ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 capitalize">
        {slug.replace('-', ' ')} Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-rose-100 p-4 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={product.img} alt={product.name} className="w-full h-60 object-fit rounded-md " />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <button
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              View & Customize
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
