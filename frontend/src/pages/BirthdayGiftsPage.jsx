import React from 'react';
import CategoryPage from '../components/CategoryPage';

const BirthdayGiftsPage = () => {
  const products = [
    {
      name: 'Personalized Birthday Cake',
      img: 'https://via.placeholder.com/400x300',
      description: 'A birthday cake with a custom design.',
      link: '/birthday-gift-1',
    },
    {
      name: 'Custom Gift Boxes',
      img: 'https://via.placeholder.com/400x300',
      description: 'Gift boxes with personalized names and messages.',
      link: '/birthday-gift-2',
    },
    // Add more products
  ];

  return (
    <CategoryPage
      categoryName="Customized Birthday Gifts"
      categoryDescription="Find the perfect gift to celebrate their special day."
      products={products}
    />
  );
};

export default BirthdayGiftsPage;
