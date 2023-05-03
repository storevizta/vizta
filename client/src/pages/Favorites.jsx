import React from 'react';
import { useSelector } from 'react-redux';
import { Favorite } from '../components/Favorite';

export const Favorites = () => {
  const { wishlistsItems } = useSelector((state) => state?.wishlists);

  console.log(wishlistsItems);

  return (
    <>
      <div className="h-screen dark:bg-gray-800">
        <div className="container mx-auto px-2 py-3 ">
          <div className='flex items-center justify-center'>
          <h1 className="text-4xl text-center py-5  dark:text-gray-200 ">
            My Favorites 
          </h1>
          <img
            className="h-10 ml-2"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png"
            alt="Icono de estrella"
          />
          </div>
          <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center">
            {wishlistsItems?.map((wishlist) => {
              return <Favorite key={wishlist?._id} wishlist={wishlist} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
