import React from 'react';

const CollectionPage = () => {
  const categories = [
    { name: 'Customized Wedding Gifts', img: './customised-wedding-gift.jpg', link: '/Customized-Wedding-Gifts' },
    { name: 'Customized Birthday Gifts', img: '/birthday-gift.jpg', link: '/Customized Birthday Gifts' },
    { name: 'Customized Friendship Gifts', img: 'friendsip-gift.jpg', link: '/Customized Friendship Gifts' },
    { name: 'Customized Anniversary Gifts', img: '/anniversary-gift.jpg', link: '/Customized Anniversary Gifts' },
    { name: 'Customized Tech Gadgets', img: 'tech-gifts.jpg', link: '/Personalized Tech Gadgets' },
    { name: "Customized Kid's Gifts", img: '/kids-gift.jpg', link: '/baby-kids' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-12 p-12">
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-full sm:w-80 bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
          onClick={() => window.location.href = category.link}
        >
          <img
            src={category.img}
            alt={category.name}
            className="w-full h-64 object-cover"
          />
          <div className="flex flex-col justify-between p-6 flex-grow">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
              <p className="text-gray-500 mt-2 mb-4">{`Explore gifts in the ${category.name} category`}</p>
            </div>
            {/* This will ensure the button stays at the bottom */}
            <div className="mt-auto ">
              <a
                href={category.link}
                className="block text-center py-3 bg-green-600 text-white text-lg rounded-xl transition transform duration-300 hover:bg-green-500 hover:scale-105"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;
