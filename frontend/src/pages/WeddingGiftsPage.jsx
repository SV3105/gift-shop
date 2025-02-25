import React from 'react';
import CategoryPage from '../components/CategoryPage';

const WeddingGiftsPage = () => {
  const products = [
    {
      name: 'Personalized Vases',
      img: 'https://via.placeholder.com/400x300',
      description: 'Customized wedding vases with names and dates.',
      link: '/wedding-gift-1',
    },
    {
      name: 'Engraved Picture Frames',
      img: 'https://via.placeholder.com/400x300',
      description: 'Memorable picture frames with engraved messages.',
      link: '/wedding-gift-2',
    },
    // Add more products as needed
  ];

  return (
    <CategoryPage
      categoryName="Customized Wedding Gifts"
      categoryDescription="Explore our beautiful collection of customized wedding gifts for your loved ones."
      products={products}
    />
  );
};

export default WeddingGiftsPage;
