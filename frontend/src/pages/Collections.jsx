import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionPage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Customized Wedding Gifts', img: './customised-wedding-gift.jpg', slug: 'wedding-gifts' },
    { name: 'Customized Birthday Gifts', img: '/birthday-gift.jpg', slug: 'birthday-gifts' },
    { name: 'Customized Friendship Gifts', img: 'friendsip-gift.jpg', slug: 'friendship-gifts' },
    { name: 'Customized Anniversary Gifts', img: '/anniversary-gift.jpg', slug: 'anniversary-gifts' },
    { name: 'Customized Tech Gadgets', img: 'tech-gifts.jpg', slug: 'customized-tech-gadgets' },
    { name: "Customized Kid's Gifts", img: '/kids-gift.jpg', slug: 'kids-gifts' },
  ];

  return (
    <div className="flex flex-col items-center p-12">
      <div className="flex flex-wrap justify-center gap-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full sm:w-80 bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
          >
            <img src={category.img} alt={category.name} className="w-full h-64 object-cover" />
            <div className="flex flex-col justify-between p-6 flex-grow">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                <p className="text-gray-500 mt-2 mb-4">{`Explore gifts in the ${category.name} category`}</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/category/${category.slug}`)}
                  className="w-full py-3 bg-green-600 text-white text-lg rounded-xl transition transform duration-300 hover:bg-green-500 hover:scale-105"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
