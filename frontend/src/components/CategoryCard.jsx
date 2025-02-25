import React from 'react';

const CategoryCard = ({ name, img, description, link }) => {
  return (
    <div className="w-full sm:w-80 bg-white shadow-2xl rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="flex flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 mt-2 mb-4">{description}</p>
        </div>
        <a
          href={link}
          className="block mt-4 px-6 py-3 bg-green-600 text-white text-lg rounded-xl transition transform duration-300 hover:bg-green-500 hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
