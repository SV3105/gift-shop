import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryPage = ({ categoryName, categoryDescription, products }) => {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold text-center mb-6">{categoryName}</h1>
      <p className="text-lg text-gray-600 text-center mb-8">{categoryDescription}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <CategoryCard
            key={index}
            name={product.name}
            img={product.img}
            description={product.description}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
